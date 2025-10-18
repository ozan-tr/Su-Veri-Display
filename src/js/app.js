/**
 * Water Quality Visualization Application
 * Main application entry point and state management
 */

// Application state
const state = {
    map: null,
    markersLayer: null,
    circleMarkers: { ph: [], chlorine: [], hardness: [] },
    interpolationLayers: { ph: null, chlorine: null, hardness: null },
    currentLayer: null,
    currentInterpolation: null,
    currentLayerName: 'none',
    layerChangeTimeout: null,
    markerDisplayType: 'icons' // 'icons' or 'circles'
};

/**
 * Initialize the application
 */
function initApp() {
    // Initialize map with performance settings
    state.map = L.map('map', {
        preferCanvas: true, // Use Canvas renderer for better performance
        zoomAnimation: true,
        fadeAnimation: true,
        markerZoomAnimation: true
    }).setView([41, 29], 10);
    
    // Note: Tile layer is now managed by mapViewControl component
    
    // Initialize markers layer
    state.markersLayer = L.layerGroup().addTo(state.map);
    
    // Load and display data
    loadData();
}

/**
 * Load and process water quality data
 */
function loadData() {
    // Add icon-based markers that show type
    DATA.forEach(item => {
        const type = item.type || 'musluk';
        const lat = item.coordinates.latitude;
        const lng = item.coordinates.longitude;
        
        // Create marker with icon based on type
        let iconClass = 'fa-solid fa-droplet'; // Default
        if (type === 'su sebili') {
            iconClass = 'fa-solid fa-water';
        } else if (type === 'arıtma') {
            iconClass = 'fa-solid fa-filter';
        } else if (type === 'musluk') {
            iconClass = 'fa-solid fa-faucet';
        }
        
        const icon = L.divIcon({
            html: `<i class="${iconClass}" style="color: #3388ff; font-size: 24px;"></i>`,
            className: 'custom-marker-icon',
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
        });
        
        const marker = L.marker([lat, lng], { icon: icon });
        
        // Bind popup immediately so it works when clicked
        marker.bindPopup(createPopup(item, state.currentLayerName), {
            maxWidth: 300,
            className: 'custom-popup'
        });
        
        state.markersLayer.addLayer(marker);
    });
    
    // Create visualization layers
    state.circleMarkers = createCircleMarkers(DATA, state.currentLayerName, state.markerDisplayType);
    state.interpolationLayers = createInterpolationLayers(DATA);
    
    // Create UI controls
    createLayerControl(state.map, handleLayerChange);
    createMapViewControl(state.map).addTo(state.map);
    createOptionsMenu(state.map).addTo(state.map);
}

/**
 * Handle layer change from UI
 * @param {string} layerName - Name of the layer to activate
 */
function handleLayerChange(layerName) {
    // Debounce rapid layer changes
    if (state.layerChangeTimeout) {
        clearTimeout(state.layerChangeTimeout);
    }
    
    state.layerChangeTimeout = setTimeout(() => {
        applyLayerChange(layerName);
    }, 100);
}

/**
 * Apply layer change
 * @param {string} layerName - Name of the layer to activate
 */
function applyLayerChange(layerName) {
    // Update state
    state.currentLayerName = layerName;
    
    // Remove current layers
    if (state.currentLayer) {
        state.currentLayer.forEach(circle => state.map.removeLayer(circle));
        state.currentLayer = null;
    }
    
    if (state.currentInterpolation) {
        state.map.removeLayer(state.currentInterpolation);
        state.currentInterpolation = null;
    }
    
    // Apply new layer
    if (layerName === 'none') {
        state.markersLayer.addTo(state.map);
        hideLegend();
    } else if (layerName.endsWith('-interp')) {
        state.map.removeLayer(state.markersLayer);
        const baseLayer = layerName.replace('-interp', '');
        
        // Add interpolation layer
        state.currentInterpolation = state.interpolationLayers[baseLayer];
        state.currentInterpolation.addTo(state.map);
        
        // Add circle markers on top
        state.currentLayer = state.circleMarkers[baseLayer];
        state.currentLayer.forEach(circle => circle.addTo(state.map));
        
        showLegend(baseLayer);
    }
}

/**
 * Toggle marker display type between icons and circles
 * @param {string} displayType - 'icons' or 'circles'
 */
function toggleMarkerDisplayType(displayType) {
    state.markerDisplayType = displayType;
    
    // Clear current markers layer
    state.markersLayer.clearLayers();
    
    // Recreate default markers based on display type
    DATA.forEach(item => {
        const type = item.type || 'musluk';
        const lat = item.coordinates.latitude;
        const lng = item.coordinates.longitude;
        
        let marker;
        
        if (displayType === 'icons') {
            // Create icon-based marker
            let iconClass = 'fa-solid fa-droplet';
            if (type === 'su sebili') {
                iconClass = 'fa-solid fa-water';
            } else if (type === 'arıtma') {
                iconClass = 'fa-solid fa-filter';
            } else if (type === 'musluk') {
                iconClass = 'fa-solid fa-faucet';
            }
            
            const icon = L.divIcon({
                html: `<i class="${iconClass}" style="color: #3388ff; font-size: 24px;"></i>`,
                className: 'custom-marker-icon',
                iconSize: [30, 30],
                iconAnchor: [15, 15],
                popupAnchor: [0, -15]
            });
            
            marker = L.marker([lat, lng], { icon: icon });
        } else {
            // Create simple circle marker
            marker = L.circleMarker([lat, lng], {
                radius: 8,
                fillColor: '#3388ff',
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            });
        }
        
        // Bind popup
        marker.bindPopup(createPopup(item, state.currentLayerName), {
            maxWidth: 300,
            className: 'custom-popup'
        });
        
        state.markersLayer.addLayer(marker);
    });
    
    // Recreate circle markers for visualization layers
    state.circleMarkers = createCircleMarkers(DATA, state.currentLayerName, displayType);
    
    // Re-apply current layer to update displayed markers
    if (state.currentLayerName !== 'none') {
        // Remove old layer markers
        if (state.currentLayer) {
            state.currentLayer.forEach(circle => state.map.removeLayer(circle));
        }
        
        // Apply new layer markers
        const baseLayer = state.currentLayerName.replace('-interp', '');
        state.currentLayer = state.circleMarkers[baseLayer];
        state.currentLayer.forEach(circle => circle.addTo(state.map));
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
