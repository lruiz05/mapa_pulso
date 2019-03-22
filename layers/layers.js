var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_e13a19_05_1 = new ol.format.GeoJSON();
var features_e13a19_05_1 = format_e13a19_05_1.readFeatures(json_e13a19_05_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_e13a19_05_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_e13a19_05_1.addFeatures(features_e13a19_05_1);var lyr_e13a19_05_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_e13a19_05_1, 
                style: style_e13a19_05_1,
                title: '<img src="styles/legend/e13a19_05_1.png" /> e13a19_05'
            });

lyr_OSMStandard_0.setVisible(true);lyr_e13a19_05_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_e13a19_05_1];
lyr_e13a19_05_1.set('fieldAliases', {'id': 'id', 'tipoevento': 'tipoevento', 'bici': 'bici', 'ciclo_estacion': 'ciclo_estacion', 'marca_tiempo': 'marca_tiempo', 'ac_arribos': 'ac_arribos', 'ac_retiros': 'ac_retiros', 'en_transito': 'en_transito', });
lyr_e13a19_05_1.set('fieldImages', {'id': '', 'tipoevento': '', 'bici': '', 'ciclo_estacion': '', 'marca_tiempo': '', 'ac_arribos': '', 'ac_retiros': '', 'en_transito': '', });
lyr_e13a19_05_1.set('fieldLabels', {'id': 'header label', 'tipoevento': 'header label', 'bici': 'header label', 'ciclo_estacion': 'header label', 'marca_tiempo': 'header label', 'ac_arribos': 'header label', 'ac_retiros': 'header label', 'en_transito': 'header label', });
lyr_e13a19_05_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});