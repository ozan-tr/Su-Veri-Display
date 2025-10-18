/**
 * Map View Control Component
 * UI control for switching between base map types
 */

/**
 * Create map view control UI
 * @param {L.Map} map - Leaflet map instance
 */
function createMapViewControl(map) {
    const MapViewControl = L.Control.extend({
        options: {
            position: 'bottomleft'
        },
        
        onAdd: function() {
            const container = L.DomUtil.create('div', 'map-view-control');
            
            const updateContent = () => {
                container.innerHTML = `
                    <div class="map-view-title">${getText('mapViewTitle')}</div>
                    <button class="map-view-btn active" data-view="street" title="${getText('streetMapTooltip')}">
                        <span class="view-icon"><i class="fas fa-map"></i></span>
                        <span class="view-label">${getText('streetMap')}</span>
                    </button>
                    <button class="map-view-btn" data-view="minimal" title="${getText('minimalMapTooltip')}">
                        <span class="view-icon"><i class="fas fa-map-marked"></i></span>
                        <span class="view-label">${getText('minimalMap')}</span>
                    </button>
                    <button class="map-view-btn" data-view="satellite" title="${getText('satelliteMapTooltip')}">
                        <span class="view-icon"><i class="fas fa-satellite"></i></span>
                        <span class="view-label">${getText('satelliteMap')}</span>
                    </button>
                `;
                
                // Re-attach event listeners
                const buttons = container.querySelectorAll('.map-view-btn');
                buttons.forEach(btn => {
                    btn.addEventListener('click', function() {
                        const view = this.getAttribute('data-view');
                        
                        // Update active state
                        buttons.forEach(b => b.classList.remove('active'));
                        this.classList.add('active');
                        
                        // Switch tile layer
                        if (currentLayer) {
                            map.removeLayer(currentLayer);
                        }
                        currentLayer = tileLayers[view];
                        currentLayer.addTo(map);
                    });
                });
            };
            
            // Prevent map interactions on control
            L.DomEvent.disableClickPropagation(container);
            L.DomEvent.disableScrollPropagation(container);
            
            // Store tile layers
            const tileLayers = {
                street: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    minZoom: 8,
                    updateWhenIdle: true,
                    keepBuffer: 2,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }),
                minimal: L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
                    maxZoom: 18,
                    minZoom: 8,
                    updateWhenIdle: true,
                    keepBuffer: 2,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                }),
                satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                    maxZoom: 18,
                    minZoom: 8,
                    updateWhenIdle: true,
                    keepBuffer: 2,
                    attribution: '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                })
            };
            
            // Add default layer
            let currentLayer = tileLayers.street;
            currentLayer.addTo(map);
            
            // Initial content
            updateContent();
            
            // Listen for language changes
            window.addEventListener('languageChanged', updateContent);
            
            return container;
        }
    });
    
    return new MapViewControl();
}
