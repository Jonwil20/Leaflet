// Creating map object
var mymap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1IjoiamJyajk4NyIsImEiOiJjazF0d2dsODEwMDgyM2tveXprd2p6bWxnIn0.yRPd-Hob_cF3N9vjFqvzxg"
  });

var layers = {
  COMING_SOON: new L.LayerGroup(),
  EMPTY: new L.LayerGroup(),
};
var map = L.map("map", {
  center: [51.5128, 0.1059],
  zoom: 10,
  layers: [
    layers.COMING_SOON,
    layers.EMPTY
]
});

mymap.addTo(map);



var geojsonFeature = {
  "type": "FeatureCollection",
  "metadata": {
    generated: Long Integer,
    url: String,
    title: String,
    api: String,
    count: Integer,
    status: Integer
  },
  "bbox": [
    minimum longitude,
    minimum latitude,
    minimum depth,
    maximum longitude,
    maximum latitude,
    maximum depth
  ],
  "features": [
    {
      "type": "Feature",
      "properties": {
        mag: Decimal,
        place: String,
        time: Long Integer,
        updated: Long Integer,
        tz: Integer,
        url: String,
        detail: String,
        felt:Integer,
        cdi: Decimal,
        mmi: Decimal,
        alert: String,
        status: String,
        tsunami: Integer,
        sig:Integer,
        net: String,
        code: String,
        ids: String,
        sources: String,
        types: String,
        nst: Integer,
        dmin: Decimal,
        rms: Decimal,
        gap: Decimal,
        magType: String,
        type: String
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          longitude,
          latitude,
          depth
        ]
      },
      id: String
    },
    …
  ]
}
};

L.geoJSON(geojsonFeature).addTo(map);

var myLayer = L.geoJSON().addTo(map);
myLayer.addData(geojsonFeature);

var geojsonMarkerOptions = {
	radius: 8,
	fillColor: "#ff7800",
	color: "#000",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
};

L.geoJSON(someGeojsonFeature, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, geojsonMarkerOptions);
	}
}).addTo(map);


var overlays = {
  "Eathquake Map 1": layers.COMING_SOON,
  "Earthquake Map 2": layers.EMPTY,
  
};

var info = L.control({
  position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson", function (earthRes) {
    var updatedAt = earthRes.last_updated;
});

var LeafIcon = L.Icon.extend({
	options: {
		iconSize:     [32, 80], // size of the icon
		shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
		shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	}	
});
var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
	redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
	orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});

L.marker([51.411, -0.09], {icon: greenIcon})
.addTo(map);