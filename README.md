This is an in-progress map which can be viewed <a href="https://geojoek.github.io/NECSC_Leaflet_Map/">here</a> on Github Pages.

<em>Please Note</em> that this is an in-progress web-development project, and the map may be buggy.  This map is also using only 5 datapoints as a proof-of-concept test. The final map will display and query a database of over 100 items.

<a href="http://leafletjs.com/">Leaflet.js</a> and the <a href="https://esri.github.io/esri-leaflet/">Esri-leaflet</a> API are being used to consume a REST ESRI feature layer service hosted on ArcGIS Online. The feature layer originates as a personal geodatabase using ArcMap 10.5.1. <a href="https://github.com/Leaflet/Leaflet.markercluster">Leaflet.markercluster.js</a> is being used to resolve a cartographic and UI problem posed by several dozen polygon features that share the same geographic extent and thus obscure each other from view.
