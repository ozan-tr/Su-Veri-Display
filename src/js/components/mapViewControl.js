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
            position: 'topright'
        },
        
        onAdd: function() {
            const container = L.DomUtil.create('div', 'map-view-control');
            
            container.innerHTML = `
                <div class="map-view-title">Harita Görünümü</div>
                <button class="map-view-btn active" data-view="street" title="Sokak Haritası">
                    <span class="view-icon"><i class="fas fa-map"></i></span>
                    <span class="view-label">Sokak</span>
                </button>
                <button class="map-view-btn" data-view="minimal" title="Minimal Harita">
                    <span class="view-icon"><i class="fas fa-map-marked"></i></span>
                    <span class="view-label">Minimal</span>
                </button>
                <button class="map-view-btn" data-view="satellite" title="Uydu Görünümü">
                    <span class="view-icon"><i class="fas fa-satellite"></i></span>
                    <span class="view-label">Uydu</span>
                </button>
            `;
            
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
            let currentTileLayer = tileLayers.street;
            currentTileLayer.addTo(map);
            
            // Add click handlers
            const buttons = container.querySelectorAll('.map-view-btn');
            buttons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const viewType = this.getAttribute('data-view');
                    
                    // Update active state
                    buttons.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Switch tile layer
                    map.removeLayer(currentTileLayer);
                    currentTileLayer = tileLayers[viewType];
                    currentTileLayer.addTo(map);
                });
            });
            
            return container;
        }
    });
    
    return new MapViewControl();
}
