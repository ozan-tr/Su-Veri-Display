/**
 * Layer Control Component
 * UI control for switching between visualization layers
 */

/**
 * Create layer control UI
 * @param {L.Map} map - Leaflet map instance
 * @param {Function} onLayerChange - Callback when layer changes
 */
function createLayerControl(map, onLayerChange) {
    const LayerControl = L.Control.extend({
        options: {
            position: 'bottomleft'
        },
        
        onAdd: function() {
            const container = L.DomUtil.create('div', 'layer-control');
            
            container.innerHTML = `
                <div class="layer-control-title">Veri Katmanları</div>
                <button class="layer-btn active" data-layer="none">
                    <span class="btn-icon"><i class="fas fa-map-marker-alt"></i></span>
                    <span class="btn-label">Normal</span>
                </button>
                <button class="layer-btn" data-layer="ph-interp">
                    <span class="btn-icon"><i class="fas fa-vial"></i></span>
                    <span class="btn-label">pH</span>
                </button>
                <button class="layer-btn" data-layer="chlorine-interp">
                    <span class="btn-icon"><i class="fas fa-tint"></i></span>
                    <span class="btn-label">Klor</span>
                </button>
                <button class="layer-btn" data-layer="hardness-interp">
                    <span class="btn-icon"><i class="fas fa-filter"></i></span>
                    <span class="btn-label">Sertlik</span>
                </button>
                <div class="layer-legend" id="legend" style="display: none;"></div>
            `;
            
            // Prevent map interactions on control
            L.DomEvent.disableClickPropagation(container);
            L.DomEvent.disableScrollPropagation(container);
            
            // Add click handlers
            const buttons = container.querySelectorAll('.layer-btn');
            buttons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const layer = this.getAttribute('data-layer');
                    
                    // Update active state
                    buttons.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Trigger callback
                    onLayerChange(layer);
                });
            });
            
            return container;
        }
    });
    
    map.addControl(new LayerControl());
}
