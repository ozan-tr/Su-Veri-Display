/**
 * Circle Markers Layer
 * Creates colored circle markers for each water quality metric
 */

/**
 * Create circle markers for all metrics
 * @param {Array} data - Array of data points
 * @param {string} currentLayerName - Currently active layer
 * @returns {Object} Object containing circle marker arrays for each metric
 */
function createCircleMarkers(data, currentLayerName) {
    const markers = {
        ph: [],
        chlorine: [],
        hardness: []
    };
    
    data.forEach(item => {
        const lat = item.coordinates.latitude;
        const lng = item.coordinates.longitude;
        
        // pH Circle Marker
        const phData = loadPhData(item);
        const phValue = parseFloat(phData.avg.all);
        markers.ph.push(createCircleMarker(
            [lat, lng], 
            getColorForPh(phValue), 
            item, 
            currentLayerName
        ));
        
        // Chlorine Circle Marker
        const chlorineValue = item.klor || 0;
        markers.chlorine.push(createCircleMarker(
            [lat, lng], 
            getColorForChlorine(chlorineValue), 
            item, 
            currentLayerName
        ));
        
        // Hardness Circle Marker
        const hardnessValue = item.hardness || 0;
        markers.hardness.push(createCircleMarker(
            [lat, lng], 
            getColorForHardness(hardnessValue), 
            item, 
            currentLayerName
        ));
    });
    
    return markers;
}

/**
 * Create a single circle marker
 * @param {Array} latlng - [latitude, longitude]
 * @param {string} color - Fill color
 * @param {Object} data - Data point for popup
 * @param {string} currentLayerName - Currently active layer
 * @returns {L.CircleMarker} Leaflet circle marker
 */
function createCircleMarker(latlng, color, data, currentLayerName) {
    const circle = L.circleMarker(latlng, {
        radius: 10, // Slightly smaller for better performance
        fillColor: color,
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8,
        pane: 'markerPane' // Use dedicated pane for better layering
    });
    
    // Bind popup lazily (only create when clicked)
    circle.on('click', function() {
        if (!this._popup) {
            this.bindPopup(createPopup(data, currentLayerName), {
                maxWidth: 300,
                className: 'custom-popup'
            });
        }
        this.openPopup();
    });
    
    return circle;
}
