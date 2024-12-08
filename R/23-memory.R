library(tidyverse)
library(sf)
library(osmdata)
library(ggtext)
library(patchwork)

places <- c("Moers", "Duisburg", "Hannover", "Mannheim", "Düsseldorf", "Köln")

# City shapes for the places
places_shp <- map(
  places,
  getbb, format_out = "sf_polygon", limit = 1)
places_shp <- set_names(places_shp, places)

# Fix when OSM provides a multipolygon and an empty polygon in a list
make_valid_bbox <- function(x) {
  if ("list" %in% class(x)) {
    item_names <- names(x)
    if ("multipolygon" %in% item_names && !is.null(x$multipolygon)) {
      res <- x$multipolygon
    } else if ("polygon" %in% item_names && !is.null(x$polygon)) {
      res <- x$polygon
    }
    return(res)
  }
  x
}
places_shp <- map(places_shp, make_valid_bbox)

# Transform projection
places_shp <- map(places_shp, st_transform, crs = "+proj=moll")


# Create a grid for each city
make_shaped_grid <- function(x) {
  st_make_grid(x, n = c(20, 20)) |> 
  st_centroid() |>
  st_as_sf() |> 
  st_filter(x, .predicate = st_intersects)
}
grids <- map(places_shp, make_shaped_grid)


# Place the letters from the city names on the grid
place_letters_on_grid <- function(x, city_name) {
  x |>
    mutate(
      row = row_number(),
      row_rest = (row_number() - 1) %% str_length(city_name) + 1,
      letter = unlist(str_split(city_name, pattern = ""))[row_rest]
    )
}
grids_with_letters <- map2(grids, places, place_letters_on_grid)


# Create a 1:1 frame for each city based on its extent
extents <- map(
  places_shp, 
  function(x) list("bbox" = st_bbox(x),
                   "centroid" = st_centroid(x))) |> 
  map(function(x) {
    res <- list(
      xmin = x$bbox$xmin,
      ymin = x$bbox$ymin,
      xmax = x$bbox$xmax,
      ymax = x$bbox$ymax,
      x_range = x$bbox$xmax - x$bbox$xmin,
      y_range = x$bbox$ymax - x$bbox$ymin,
      centroid_x = st_coordinates(x$centroid)[, "X"],
      centroid_y = st_coordinates(x$centroid)[, "Y"]
      )
    res$bigger_range = ifelse(res$x_range > res$y_range, "x", "y")
    res$bigger_range_extent = pmax(res$x_range, res$y_range)
    if (res$bigger_range == "x") {
      res$ymin = res$centroid_y - res$bigger_range_extent / 2
      res$ymax = res$centroid_y + res$bigger_range_extent / 2
    } else if (res$bigger_range == "y") {
      res$xmin = res$centroid_x - res$bigger_range_extent / 2
      res$xmax = res$centroid_x + res$bigger_range_extent / 2
    }
    res
  }) |> 
  map(as.data.frame)
extents


# Highlight the city name
# Process the grid_with_letters to find rows with the most letters
highlight_letters_in_grid <- function(x, city_name) {
  city_name_vec <- unlist(str_split(city_name, pattern = ""))
  x |>
    mutate(latitude = st_coordinates(x)[, 2]) |>
    group_by(latitude) |>
    arrange(row_rest, .by_group = TRUE) |>
    mutate(letter_count = n()) |>
    ungroup() |>
    filter(letter_count == max(letter_count)) |>
    group_by(latitude) |> 
    arrange(latitude, row)  |>
    # Create an id for potential sequences of the city name
    mutate(
      sequence_id = cumsum(
        row_number() <= (n() - length(city_name_vec) + 1) & 
          map_lgl(
            1:(n() - length(city_name_vec) + 1),
            ~ all(letter[.x:(.x + length(city_name_vec) - 1)] == city_name_vec))
        )
    ) |>
    ungroup() |> 
    # Keep the sequence closest to the middle of the row
    filter(sequence_id == median(sequence_id, na.rm = TRUE)) |> 
    slice_head(n = length(city_name_vec)) |> 
    transmute(x, letter, sequence_id, latitude, highlight = TRUE)
}
highlight_name_sequences <- map2(grids_with_letters,
                                 places,
                                 highlight_letters_in_grid)

# Create the maps 
city_letter_plot <- function(
    x, 
    highlight_letters, 
    extent = c(xmin = -180, xmax = 180, ymin = -90, ymax = 90)) {
  
  x |> 
    ggplot() +
    geom_sf(
      data = highlight_letters,
      size = 3.9, fill = "#000080", color = "transparent", shape = 22
    ) +
    geom_sf_text(
      aes(label = toupper(letter)),
      size = 2.5, family = "Source Sans Pro", fontface = "bold", color = "#000080"
    ) +
    geom_sf_text(
      data = highlight_letters,
      aes(label = toupper(letter)),
      size = 2.5, family = "Source Sans Pro", fontface = "bold", color = "white"
    ) +
    coord_sf(xlim = c(extent$xmin, extent$xmax),
             ylim = c(extent$ymin, extent$ymax)) +
    theme_void(base_family = "Source Sans Pro") +
    theme(
      plot.background = element_rect(color = "#E0FFFF", fill = "#E0FFFF"),
      plot.margin = margin(rep(4, 4)),
      text = element_text(color = "#000080")
    )
}
maps <- pmap(list(grids_with_letters, highlight_name_sequences, extents), city_letter_plot)

# Combine all plots using {patchwork}
wrap_plots(maps, ncol = ceiling(sqrt(length(maps)))) +
  plot_annotation(
    title = toupper("Cities I've Called Home"),
    caption = "**Note:** City shapes not to scale. **Source:** OpenStreetMap contributors.
    **Visualization:** Ansgar Wolsing"
  ) & 
  theme(
    plot.background = element_rect(color = "#E0FFFF", fill = "#E0FFFF"),
    plot.margin = margin(rep(4, 4)),
    text = element_text(color = "#000080"),
    plot.title = element_text(
      family = "Poppins", size = 28, hjust = 0.5,
      margin = margin(t = 4, b = 12)),
    plot.caption = element_markdown(size = 6),
  )
ggsave(file.path("plots", "23-memory.png"), width = 8, height = 6, scale = 1)
