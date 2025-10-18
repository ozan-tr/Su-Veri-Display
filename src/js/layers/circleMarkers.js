/**
 * Circle Markers Layer
 * Creates colored circle markers for each water quality metric
 */

/**
 * Get icon HTML based on water type
 * @param {string} type - Water type (musluk, su sebili, arıtma)
 * @param {string} color - Color for the icon
 * @returns {L.DivIcon} Leaflet div icon
 */
function getIconForType(type, color) {
    let iconClass = 'fa-solid fa-droplet'; // Default icon
    
    if (type === 'su sebili') {
        iconClass = 'fa-solid fa-water';
    } else if (type === 'arıtma') {
        iconClass = 'fa-solid fa-filter';
    } else if (type === 'musluk') {
        iconClass = 'fa-solid fa-faucet';
    }
    
    return L.divIcon({
        html: `<i class="${iconClass}" style="color: ${color}; font-size: 24px;"></i>`,
        className: 'custom-marker-icon',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });
}

/**
 * Create circle markers for all metrics
 * @param {Array} data - Array of data points
 * @param {string} currentLayerName - Currently active layer
 * @param {string} displayType - 'icons' or 'circles'
 * @returns {Object} Object containing circle marker arrays for each metric
 */
function createCircleMarkers(data, currentLayerName, displayType = 'icons') {
    const markers = {
        ph: [],
        chlorine: [],
        hardness: []
    };
    
    data.forEach(item => {
        const lat = item.coordinates.latitude;
        const lng = item.coordinates.longitude;
        const type = item.type || 'musluk';
        
        // pH Marker
        const phData = loadPhData(item);
        const phValue = parseFloat(phData.avg.all);
        const phColor = getColorForPh(phValue);
        markers.ph.push(createMarker(
            [lat, lng], 
            type,
            phColor,
            item, 
            currentLayerName,
            displayType
        ));
        
        // Chlorine Marker
        const chlorineValue = item.klor || 0;
        const chlorineColor = getColorForChlorine(chlorineValue);
        markers.chlorine.push(createMarker(
            [lat, lng], 
            type,
            chlorineColor,
            item, 
            currentLayerName,
            displayType
        ));
        
        // Hardness Marker
        const hardnessValue = item.hardness || 0;
        const hardnessColor = getColorForHardness(hardnessValue);
        markers.hardness.push(createMarker(
            [lat, lng], 
            type,
            hardnessColor,
            item, 
            currentLayerName,
            displayType
        ));
    });
    
    return markers;
}

/**
 * Create a single marker (icon or circle based on display type)
 * @param {Array} latlng - [latitude, longitude]
 * @param {string} type - Water type
 * @param {string} color - Marker color
 * @param {Object} data - Data point for popup
 * @param {string} currentLayerName - Currently active layer
 * @param {string} displayType - 'icons' or 'circles'
 * @returns {L.Marker} Leaflet marker
 */
function createMarker(latlng, type, color, data, currentLayerName, displayType = 'icons') {
    let marker;
    
    if (displayType === 'icons') {
        // Create icon marker
        marker = L.marker(latlng, {
            icon: getIconForType(type, color),
            pane: 'markerPane'
        });
    } else {
        // Create circle marker
        marker = L.circleMarker(latlng, {
            radius: 10,
            fillColor: color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8,
            pane: 'markerPane'
        });
    }
    
    // Bind popup lazily (only create when clicked)
    marker.on('click', function() {
        if (!this._popup) {
            this.bindPopup(createPopup(data, currentLayerName), {
                maxWidth: 300,
                className: 'custom-popup'
            });
        }
        this.openPopup();
    });
    
    return marker;
}
