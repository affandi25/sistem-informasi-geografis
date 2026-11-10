var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM DE',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_petaa_pesebaran_jateng_0 = new ol.format.GeoJSON();
var features_petaa_pesebaran_jateng_0 = format_petaa_pesebaran_jateng_0.readFeatures(json_petaa_pesebaran_jateng_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_petaa_pesebaran_jateng_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_petaa_pesebaran_jateng_0.addFeatures(features_petaa_pesebaran_jateng_0);var lyr_petaa_pesebaran_jateng_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_petaa_pesebaran_jateng_0, 
                style: style_petaa_pesebaran_jateng_0,
    title: 'petaa_pesebaran_jateng<br />\
    <img src="styles/legend/petaa_pesebaran_jateng_0_0.png" /> peningkatan<br />\
    <img src="styles/legend/petaa_pesebaran_jateng_0_1.png" /> penurunan<br />\
    <img src="styles/legend/petaa_pesebaran_jateng_0_2.png" /> tetap<br />'
        });

lyr_petaa_pesebaran_jateng_0.setVisible(true);
var layersList = [baseLayer,lyr_petaa_pesebaran_jateng_0];
lyr_petaa_pesebaran_jateng_0.set('fieldAliases', {'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'kategori': 'kategori', 'Persentase': 'Persentase', });
lyr_petaa_pesebaran_jateng_0.set('fieldImages', {'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'kategori': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_petaa_pesebaran_jateng_0.set('fieldLabels', {'WADMKK': 'inline label', 'WADMPR': 'inline label', 'kategori': 'inline label', 'Persentase': 'inline label', });
lyr_petaa_pesebaran_jateng_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});