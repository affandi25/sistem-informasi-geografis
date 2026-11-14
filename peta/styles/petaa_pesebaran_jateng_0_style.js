var size = 0;
var placement = 'point';
function categories_petaa_pesebaran_jateng_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
// Editorial Kartografi palette — mirrors css/editorial.css tokens.
var border_style = {color: 'rgba(12,23,34,0.34)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.8};
                switch(value.toString()) {case 'peningkatan':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke(border_style), fill: new ol.style.Fill({color: 'rgba(22,112,90,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'penurunan':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke(border_style), fill: new ol.style.Fill({color: 'rgba(169,78,39,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'tetap':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke(border_style), fill: new ol.style.Fill({color: 'rgba(92,105,117,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_petaa_pesebaran_jateng_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("kategori");
    var labelText = "";
    size = 0;
    var labelFont = "9.75px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("WADMKK") !== null) {
        labelText = String(feature.get("WADMKK"));
    }
    
var style = categories_petaa_pesebaran_jateng_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
