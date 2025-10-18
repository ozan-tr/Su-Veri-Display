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
            
            const updateContent = () => {
                container.innerHTML = `
                    <div class="layer-control-title">${getText('layerControlTitle')}</div>
                    <button class="layer-btn active" data-layer="none">
                        <span class="btn-icon"><i class="fas fa-map-marker-alt"></i></span>
                        <span class="btn-label">${getText('noLayer')}</span>
                    </button>
                    <button class="layer-btn" data-layer="ph-interp">
                        <span class="btn-icon"><i class="fas fa-vial"></i></span>
                        <span class="btn-label">${getText('phLayer')}</span>
                    </button>
                    <button class="layer-btn" data-layer="chlorine-interp">
                        <span class="btn-icon"><i class="fas fa-tint"></i></span>
                        <span class="btn-label">${getText('chlorineLayer')}</span>
                    </button>
                    <button class="layer-btn" data-layer="hardness-interp">
                        <span class="btn-icon"><i class="fas fa-filter"></i></span>
                        <span class="btn-label">${getText('hardnessLayer')}</span>
                    </button>
                    <div class="layer-legend" id="legend" style="display: none;"></div>
                `;
                
                // Re-attach event listeners after updating content
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
            };
            
            // Initial content
            updateContent();
            
            // Listen for language changes
            window.addEventListener('languageChanged', updateContent);
            
            return container;
        }
    });
    
    map.addControl(new LayerControl());
}
