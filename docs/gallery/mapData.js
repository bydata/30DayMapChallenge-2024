const mapData = [
    {
        src: 'maps/01-points-static-thumbnail.png',
        title: 'Day 01: Points',
        alt: 'On the left: a map of Germany, showing the locations of all football clubs that ever played in Bundesliga. On the right: a horizontal bar chart with the top 18 clubs based on the total points gained: 1) Bayern München, 2) Borussia Dortmund, 3) Werder Bremen',
        description: 'Historical point tally of all the football clubs that have ever played in the Bundesliga. The map on the left shows all the clubs with their locations - partially shifted where there is a high density of clubs. Hovering over the location markers gives you a tooltip with the club\'s name and logo, as well as their total points and number of seasons in the Bundesliga. If the club is in the historical top 20, its corresponding bar in the chart on the right will be highlighted, too. Hovering over a bar in the table will highlight the corresponding point marker on the map.',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/02-lines-kusttram-static-cropped-thumbnail.png',
        title: 'Day 02: Lines',
        alt: 'A basemap of the coast of Belgium with the track of the Kusttram as a line and the stops as points.',
        description: 'We thought we took the longest light rail public transport service in the world, turned out it was pushed into second place in 2023. 🚋 The Kusttram (engl. "Coast Tram") connects the cities and towns along the Belgian coast between De Panne (near the French border) and Knokke-Heist (Dutch Border). With 67 km, it\'s the second-longest light rail service worldwide. The interactive map is created with #Leaflet using the Alidade Smooth basemap from Stadia.',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/03-polygons-thumbnail.png',
        title: 'Day 03: Polygons',
        alt: 'A map of Cologne showing the walking duration to the next REWE supermarket using areas - called isochrones - with different colours. It shows the locations of 85 REWE supermarkets in Cologne. For a significant proportion of the area, the next supermarket is within 15 minutes walking distance. ',
        description: 'Why do you call it Cologne when it could also be REWE City? Cologne is the home to 85 REWE supermarkets and the company\'s headquarters. Each dot on the map shows the location of a supermarket. The coloured areas indicate how long it takes to get to the nearest REWE by foot. An isochrone is a boundary on a map that connects points reachable within the same amount of travel time from a specific location. It shows areas accessible in equal travel times. It\'s the first time I created such an isochrone map. I used R and the following key packages: 📌 tidygeocoder - to geocode the addresses of the REWE supermarkets;🚶‍♂️ osrm - to access the OSRM routing API and to calculate walking distances; 🛣 osmdata - to load the street data for the base map',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'https://github.com/bydata/30DayMapChallenge-2024/blob/main/plots/04-hexagons.gif?raw=true',
        title: 'Day 04: Hexagons',
        alt: 'An animated map of the congressional districts of the U.S. that morphs a choropleth map into a hexagonal cartogram. It reveals that the choropleth map emphasizes large, but sparsely populated rural areas.',
        description: 'Land does not vote. 🗳️ With the U.S. Presidential Election just one day away, this animation illustrates the political landscape by showing which party won each congressional district in the 2022 House of Representatives election. The animation begins with a traditional choropleth map, displaying each congressional district by its actual geographical boundaries. However, to avoid visual distortion caused by larger rural districts dominating the view, the map then transitions to a hexagonal cartogram. In this format, each district is represented by five equally-sized hexagons, ensuring that each congressional seat is given equal visual weight. This transformation allows viewers to more accurately gauge the proportional seat distribution between parties, which can be skewed in traditional maps by large, sparsely populated areas that occupy more space. The hexagon map has been made available by Daily Kos.',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/05-journey-all-whales-dots-thumbnail.png',
        title: 'Day 05: Journey',
        alt: 'A map titled "Humpback Whales’ Journeys" shows the migration paths of 23 humpback whales between Australia, New Zealand, and the South Ocean close to Antarctica. The map displays Australia and New Zealand with bright turquoise points tracing various routes the whales took, showing complex movement patterns across the ocean. Some paths extend down to the Southern Ocean, near Antarctica, indicating long migratory journeys. A large image of a humpback whale is overlaid in the ocean background. Source information credits Andrew-Goff et al. (2023) from the Movebank Data Repository, photo credit to Ed Lyman/NOAA.',
        description: 'Humpback whales’ journeys between Australia, New Zealand, and the South Ocean.',
        tools: {
            R: true,
            Figma: true,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/06-raster-thumbnail.png',
        title: 'Day 06: Raster',
        alt: 'A map of the Belgian and parts of the Dutch coasts with a raster showing the average building height. As described in the post, the Belgian coastal towns are more densely built and urbanized compared to the ones in Zeeland.',
        description: 'Building height on the Belgian and Dutch coasts. Inspired by our recent visit to the Belgian coast. 🌊 The Belgian coastal towns are more densely built and urbanized compared to the more nature-focused coastal towns in the Dutch province of Zeeland, which emphasize dune preservation and controlled development. Zoom in and you\'ll see.',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/07-vintage-thumbnail.png',
        title: 'Day 07: Vintage',
        alt: 'A sepia-toned map of Germany showing various government regions. The map is labeled “Government regions in Germany” at the top, with a compass rose indicating north in the upper left corner. Government regions are labeled. A scale bar indicating 100 km is shown at the bottom. The map background has a textured, old-paper appearance.',
        description: 'A vintage-styled map of the government regions in Germany (NUTS-2). This map combines a #ggplot2 map with an old paper texture created with DALL-E using the {magick} package.',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
            'DALL-E': true
        },
    },
    {
        src: 'maps/08-hdx-thumbnail.png',
        title: 'Day 08: Human Data Exchange',
        alt: 'A map of Germany illustrating the share of people aged 15-24. Lighter blue shades highlight areas with higher youth populations, notably in major cities like Frankfurt, and Stuttgart, as well as regional hubs with universities like Würzburg, Münster, Münster, Heidelberg, Göttingen, and Freiburg. Darker blue shades indicate lower youth densities in rural areas, particularly in parts of eastern / northeastern Germany. In eastern Germany, cities like Erfurt, Jena, Chemnitz, Leipzig and Dresden stand out.',
        description: 'Where\'s the Youth? Share of people aged 15 to 24 among the population in Germany on a high-resolution grid. Lighter blue shades highlight areas with higher youth populations, notably in major cities like Frankfurt, and Stuttgart, as well as regional hubs with universities like Würzburg, Münster, Münster, Heidelberg, Göttingen, and Freiburg. Darker blue shades indicate lower youth densities in rural areas, particularly in parts of eastern / northeastern Germany. Data for Good at Meta via The Humanitarian Data Exchange.',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/09-ai-only-thumbnail.png',
        title: 'Day 09: AI only',
        alt: 'An AI-generated vintage-style 17th-century map of New York, labeled as New Amsterdam, featuring coastlines, rivers, old ships, and decorative elements like compass roses (one of them showing North twice) and ornate frames.',
        description: 'This “map” was created by DALL-E 3 based on the prompt to create a map of New York City in the style of the 17th century. The result is… interesting. While the geographical shapes somewhat resemble the actual ones, there are a couple of (expected) glitches. Just look at the compass roses. I like that the map is labelled “New Amsterdam” (without being prompted). “Nieuw Amsterdam” was the Dutch settlement at the southern tip of Manhattan Island which later became New York City. In the 17th century, it served as the seat of the colonial government in “New Netherland”.',
        tools: {
            R: false,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
            'DALL-E': true,
        },
    },
    {
        src: 'maps/10-pen-and-paper-thumbnail.png',
        title: 'Day 10: Pen & Paper',
        alt: 'Baby names written on a sheet of paper, arranged in a way that the shape resembles the geographical shape of Cologne. The title reads: “The most popular babynames in Cologne 2023.” Top 5 (all genders): Noah, Mila, Leo, Emma, Marie.',
        description: 'The most popular baby names in Cologne in 2023.',
        tools: {
            R: false,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
            'Pen & Paper': true,
        },
    },
    {
        src: 'maps/11-arctic-thumbnail.png',
        title: 'Day 11: Arctic',
        alt: '2 maps focussed on the Arctic region - left: Pseudo-Mercator; right: North Pole LAEA Bering Sea. The left map shows a large white dot where the North Pole would be. The right one shows the actual topography.',
        description: 'If you’re a cartography layperson like me, you may have come across this phenomenon. You’re trying to make a map of the Arctic region and suddenly there’s this large white dot. ⚪ Why? The Web Mercator projection typically truncates latitude at around 85.06° N and S. This truncation is necessary because beyond these latitudes, the distortion becomes so severe that the projection would fail to provide a meaningful representation of the Earth\'s surface. The poles, at 90° latitude, lie outside this truncated range, and hence, they cannot be accurately represented. To make accurate maps of the polar regions, we use special projections that are designed to handle these areas, like the Polar Stereographic projection. These projections don’t try to wrap the whole globe onto a flat surface but instead focus specifically on representing the areas near the poles in a way that keeps them from being overly distorted.',
        tools: {
            R: false,
            Figma: true,
            Datawrapper: false,
            QGIS: true,
            Observable: false,
        },
    },
    {
        src: 'maps/13-a-new-tool-static-thumbnail.png',
        title: 'Day 13: A New Tool',
        alt: 'A map of parts of Utrecht, with 3D buildings, the Anatomiegebouw is marked.',
        description: 'From Cologne to Utrecht. I tried out the {mapgl} R package developed by Kyle Walker. It’s a wrapper for Mapbox GL JS for R users.',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/14-a-world-map-thumbnail.png',
        title: 'Day 14: A World Map',
        alt: 'A world map depicted in a style inspired by Piet Mondrian, featuring overlapping rectangles of various sizes and colors, such as blue, red, yellow, and black. The rectangles represent different countries\' bounding boxes, positioned roughly in a global map layout. The colors and layout create a modern, abstract visual reminiscent of Mondrian\'s art.',
        description: 'A map of the world in the style of Piet Mondrian. The bounding boxes of the countries form the map. A "bounding box" is a simple rectangle drawn around each country to define the outermost edges of its area. The underlying projection is the Equal Earth Projection centered at 150°E longitude.  (<a href="https://bsky.app/profile/erwanrivault.bsky.social/post/3la2bozlevz23">Inspiration</a>)',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/15-my-data-thumbnail.png',
        title: 'Day 15: My Data',
        alt: 'A map zoomed to the region of Netherlands, Belgium, and Western parts of Germany (NRW, Hessen, Rhineland-Palatinate), with markers at Utrecht (NL), Moers, Oberhausen, Cologne, and Frankfurt.',
        description: 'Cities I visited in November 2024 and Cologne, where I live. Most maps this month were created in Cologne, a few in Utrecht, none in Frankfurt (work) and Moers (seeing my parents) and Oberhausen (Jimmy Eat World!)',
        tools: {
            R: false,
            Figma: false,
            Datawrapper: true,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/16-choropleth-processed-thumbnail.png',
        title: 'Day 16: Choropleth',
        alt: 'A map of the districts in Germany indicating the deviations of the disposable income per household between districts. Takeaways: The region around Munich has the highest average disposable income. With 40,205 EUR, Starnberg has the highest value in Germany. With Gelsenkirchen (1st), Duisburg (2nd), and Herne (5th), the districts with the largest gap to the national average are located in the Ruhr Area in North Rhine-Westphalia. All districts except one on the territory of the former GDR have an average disposable income below the national average. (Potsdam-Mittelmark is the only exception.)',
        description: 'This choropleth map shows the differences in the average disposable income of private households in the districts in Germany. The disposable income is the income remaining after adding social benefits and transfers received, and subtracting taxes, social contributions, and other payments. This income is available for consumption and saving. The average disposable income in Germany is 25,830 EUR per household (2022). The districts are coloured by the relative deviation from the national average. Note that it does not account for regional differences in costs of living.',
        tools: {
            R: true,
            Figma: true,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/18-3d-processed-thumbnail.png',
        title: 'Day 18: 3D',
        alt: 'A 3D map of the Belgian and parts of the Dutch coasts with a raster showing the average building height. As described in the post, the Belgian coastal towns are more densely built and urbanized compared to the ones in Zeeland.',
        description: 'Building height on the Belgian and Dutch coasts. Inspired by our recent visit to the Belgian coast. 🌊 The Belgian coastal towns are more densely built and urbanized compared to the more nature-focused coastal towns in the Dutch province of Zeeland, which emphasize dune preservation and controlled development. Zoom in and you\'ll see.',
        tools: {
            R: true,
            Figma: true,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/19-typography-thumbnail.png',
        title: 'Day 19: Typography',
        alt: 'A map of the EU 27 which is made of the letters of the country names. Each country\'s shape is formed with the country name.',
        description: 'The EU only with letters. 🅰️🅱️©️ 🇪🇺',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/20-osm-thumbnail.png',
        title: 'Day 20: OpenStreetMap',
        alt: 'A map with all buildings in the city of Cologne. Each building is coloured based on the estimated travel time by car to the next hospital. Hospital locations are marked with squares on the map.',
        description: 'How long does it take to get to the nearest hospital in Cologne? Accessibility of hospitals based on estimated travel time by car from each building to the nearest hospital.',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/21-conflict-thumbnail.png',
        title: 'Day 21: Conflict',
        alt: 'A side-by-side comparison map showing Crimea\'s representation by two geospatial datasets. The top map, labeled "GISCO," depicts Crimea as part of Ukraine, reflecting international recognition and EU policy. The bottom map, labeled "Natural Earth," shows Crimea as part of Russia, based on de facto control since its annexation in 2014. Both maps highlight the same geographic region, with annotations explaining the providers\' differing approaches to representing disputed territories.',
        description: 'Choosing a geospatial dataset matters. In 2014, Crimea 🇺🇦 was annexed by Russia in breach of international law, yet it remains recognized as part of Ukraine by most countries. How geospatial dataset represent this disputed region varies: GISCO: Aligns with international law, showing Crimea as part of Ukraine. Natural Earth: Reflects de facto control, depicting Crimea as part of Russia. These differences highlight how geopolitical context can shape geospatial datasets. ',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/22-2-colours-thumbnail.png',
        title: 'Day 22: 2 Colours',
        alt: 'A grid map with points of different sizes indicating the population of that particular area. It shows areas of high population density (e.g. India, China, Netherlands).',
        description: 'Population density worldwide on a fine-scale grid. Data: Global Human Settlement Layer',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/23-memory-thumbnail.png',
        title: 'Day 23: Memory',
        alt: 'A map showing the names of cities I\'ve called home (Moers, Duisburg, Hannover, Mannheim, Düsseldorf, and Cologne) written in letters arranged within the shape of their respective city boundaries.',
        description: 'Some more map calligraphy: Places I’ve called home so far. 🏠',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/24-only-circular-shapes-thumbnail.png',
        title: 'Day 24: Only Circular Shapes',
        alt: 'A map of the world where all countries are bubbles proportionally sized to their actual area.',
        description: 'A World of Bubbles 🫧',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/25-heat-thumbnail.png',
        title: 'Day 25: Heat',
        alt: '10 maps of Germany for each month from January to October 2024. 268 points on each map represent the DWD weather stations active since 1961. The points are colored by the deviation of the monthly average temperature in 2024 from the long-term monthly average between 1961 and 1990. There’s hardly any station which had an average in any month that was below the reference period. Highlights: February 6.2 °C above the reference period; March 4.0 °C, August 3.4 °C.',
        description: 'Most of 2024 has been warmer than the long-term average for Germany from 1961-1990. Each point on the map represents the monthly anomalies for one of 268 weather stations. The map shows how the monthly average temperatures in each month of 2023 deviated from the long-term average for the weather stations in Germany that have been active since 1961.',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/26-map-projections-small-thumbnail.png',
        title: 'Day 26: Map Projections',
        alt: 'An infographic that compares the effect of different map projections on how we perceive areas (here: Greenland vs. Africa) and distances (Russia east-west extent vs. Africa east-west extent). Mercator preserves angles and shapes; Mollweide: area; World Azimuthal Equidistant: distance and directions',
        description: 'Map projections shape the way we see the world. A map projection renders a 3D spheroid of Earth 🌎 to a 2D surface. 🗺️  Because you can’t display 3D surfaces perfectly in 2 dimensions, distortions always occur. The Mercator projection too quickly gets a bad rep. As it preserves angles this was crucial for navigating the seas back in the days of Gerardus Mercator. But since for most of us, our audience aren’t skippers, accurate areas or distances are probably more important today.',
        tools: {
            R: false,
            Figma: true,
            Datawrapper: false,
            QGIS: true,
            Observable: false,
        },
    },
    {
        src: 'maps/27-micromapping-static-thumbnail.png',
        title: 'Day 27: Micromapping',
        alt: '',
        description: 'From the trees on Borsigplatz, where Borussia Dortmund was founded in 1909, to those outside the Westfalenstadion, the club\'s stadium today.',
        tools: {
            R: true,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/28-the-blue-planet wider-thumbnail.png',
        title: 'Day 28: The Blue Planet',
        alt: 'A treemap which displays the proportions of salt water (68.5 %), freshwater (0.8 %), ice (1.7 %), and land (29.0 %). The areas are filled with satellite imagery of the surface type.',
        description: '71% of the Earth\'s surface is covered by water, of which 96.5% is salt water in the oceans. Freshwater and frozen water trapped in glaciers and polar ice caps make up 3.5% of the water. 🌎🌊',
        tools: {
            R: true,
            Figma: true,
            Datawrapper: false,
            QGIS: false,
            Observable: false,
        },
    },
    {
        src: 'maps/29-overture-thumbnail.png',
        title: 'Day 29: Overture',
        alt: 'A map showing a part of central Barcelona with buildings coloured by their building class.',
        description: 'Buildings in Barcelona. Created with Observable Plot with data from Overture Maps. ',
        tools: {
            R: false,
            Figma: false,
            Datawrapper: false,
            QGIS: false,
            Observable: true,
        },
    },
    {
        src: 'maps/30-the-final-map-thumbnail.png',
        title: 'Day 30: The Final Map',
        alt: 'A locator map in minimalistic style showing the places and areas that I mapped during the #30DayMapChallenge 2024: Arctic: 1, Barcelona: 1, Belgium: 3, Cologne: 3, Crimea: 1, Dortmund: 1, European Union: 1, Germany: 7, New York City: 1, Oceania: 1, United States: 1, Utrecht: 1, World: 5.',
        description: 'I made 27 maps (plus this one) during the #30DayMapChallenge 2024. Here are all locations and regions covered on a meta-map created with Datawrapper.',
        tools: {
            R: false,
            Figma: false,
            Datawrapper: true,
            QGIS: false,
            Observable: false,
        },
    },
];