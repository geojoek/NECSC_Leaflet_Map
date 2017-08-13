var centroidlayer = L.esri.featureLayer(ProjectLayer, {
  onEachFeature: function(feature,layer){
    if (feature.geometry.type === 'Polygon') {
      console.log('Polygon detected');
      var centroid = polygon.getBounds().getCenter();
      L.Marker([centroid]).addTo(map);
    }
  }
})

// Alternate

onEachFeature: function(feature, layer){
  if (feature.geometry.type = 'Polygon') {
    console.log('Polygon detected');
    var centroid = turf.centroid(feature);
    var coordinates = centroid.geometry.coordinates;
    console.log(coordinates);
    return L.marker([coordinates]).addTo(map);
  }
}



// loops through the features returned by the server for CentroidMap
// var layerBounds = layer.getBounds();
// gets the bounds in lat/long for each feature?
var centroid = turf.centroid(polygon);
// using turf.js to calculate the centroid of the bounds of each feature - this uses browser but should probably figure out way to do this server-side
var coordinates = centroid.geometry.coordinates;
// turf.js gets coordinates of the centroid for each feature
console.log(coordinates);
return L.marker([coordinates])


// Apparently the '1' here at the end of the URL refers to Footprints_Poly2 on the server-- there's more than one layer
// in this Feature Server so I have to figure out ESRI's numbering scheme here for future implementations of this.

// One way of getting centroids - too be included within L.esri.featureLayer
onEachFeature: function(feature,layer){
  if (feature.geometry.type = 'Polygon') {
    console.log(feature.geometry.type);
  var bounds = layer.getBounds();
  var center = bounds.getCenter();
  // creates LatLng object 'center'.  apparently can't do this with layer.getBounds().getCenter(); I don't know why.
  console.log(center);
  // gives LatLng object coordinates just to make sure it's working
  L.marker(center).addTo(map);
  //BOOM works!
  }
}


// Following is a modification of https://esri.github.io/esri-leaflet/examples/labeling-features.html
// to get a marker at the center of each polygon.  It works but may complicate things with querying and popups

var labels = {};

ProjectMap.on('createfeature', function(e){
  var id = e.feature.id;
  var feature = ProjectMap.getFeature(id);
  var center = feature.getBounds().getCenter();
  var label = L.marker(center)
  labels[id] = label;
}).addTo(map);


ProjectMap.on('addfeature', function(e){
  var label = labels[e.feature.id];
  if(label){
    label.addTo(map);
  }
});

ProjectMap.on('removefeature', function(e){
  var label = labels[e.feature.id];
  if(label){
    map.removeLayer(label);
  }
});
