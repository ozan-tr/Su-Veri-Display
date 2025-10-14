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
    currentLayerName: 'none'
};

/**
 * Initialize the application
 */
function initApp() {
    // Initialize map
    state.map = L.map('map').setView([41, 29], 10);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        minZoom: 8,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(state.map);
    
    // Initialize markers layer
    state.markersLayer = L.layerGroup().addTo(state.map);
    
    // Load and display data
    loadData();
}

/**
 * Load and process water quality data
 */
function loadData() {
    // Add basic markers
    DATA.forEach(item => {
        const marker = L.marker([item.coordinates.latitude, item.coordinates.longitude]);
        state.markersLayer.addLayer(marker);
        marker.bindPopup(createPopup(item, state.currentLayerName));
    });
    
    // Create visualization layers
    state.circleMarkers = createCircleMarkers(DATA, state.currentLayerName);
    state.interpolationLayers = createInterpolationLayers(DATA);
    
    // Create layer control UI
    createLayerControl(state.map, handleLayerChange);
}

/**
 * Handle layer change from UI
 * @param {string} layerName - Name of the layer to activate
 */
function handleLayerChange(layerName) {
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

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
