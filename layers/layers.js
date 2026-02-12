var wms_layers = [];


        var lyr_EsriTopoWorld_0 = new ol.layer.Tile({
            'title': 'Esri Topo World',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Buffered_1 = new ol.format.GeoJSON();
var features_Buffered_1 = format_Buffered_1.readFeatures(json_Buffered_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_1.addFeatures(features_Buffered_1);
var lyr_Buffered_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_1, 
                style: style_Buffered_1,
                popuplayertitle: 'Buffered',
                interactive: false,
                title: '<img src="styles/legend/Buffered_1.png" /> Buffered'
            });
var format_BufferedSmall_2 = new ol.format.GeoJSON();
var features_BufferedSmall_2 = format_BufferedSmall_2.readFeatures(json_BufferedSmall_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferedSmall_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferedSmall_2.addFeatures(features_BufferedSmall_2);
var lyr_BufferedSmall_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferedSmall_2, 
                style: style_BufferedSmall_2,
                popuplayertitle: 'Buffered Small',
                interactive: false,
                title: '<img src="styles/legend/BufferedSmall_2.png" /> Buffered Small'
            });

lyr_EsriTopoWorld_0.setVisible(true);lyr_Buffered_1.setVisible(true);lyr_BufferedSmall_2.setVisible(true);
var layersList = [lyr_EsriTopoWorld_0,lyr_Buffered_1,lyr_BufferedSmall_2];
lyr_Buffered_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'gx_media_links': 'gx_media_links', });
lyr_BufferedSmall_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'gx_media_links': 'gx_media_links', });
lyr_Buffered_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'gx_media_links': 'TextEdit', });
lyr_BufferedSmall_2.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'gx_media_links': 'TextEdit', });
lyr_Buffered_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'gx_media_links': 'no label', });
lyr_BufferedSmall_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'gx_media_links': 'no label', });
lyr_BufferedSmall_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});