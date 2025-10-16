/**
 * Options Menu Component
 * Unified menu to toggle visibility of map controls
 */

/**
 * Create options menu UI
 * @param {L.Map} map - Leaflet map instance
 */
function createOptionsMenu(map) {
    const OptionsMenu = L.Control.extend({
        options: {
            position: 'topleft'
        },
        
        onAdd: function() {
            const container = L.DomUtil.create('div', 'options-menu');
            
            container.innerHTML = `
                <button class="options-toggle" title="Seçenekler">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="options-panel">
                    <div class="options-header">
                        <span class="options-title">Kontroller</span>
                        <button class="options-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="options-content">
                        <button class="option-item" data-target="layer-control" data-state="visible">
                            <span class="option-icon"><i class="fas fa-layer-group"></i></span>
                            <span class="option-label">Veri Katmanları</span>
                            <span class="option-toggle">
                                <i class="fas fa-eye"></i>
                            </span>
                        </button>
                        <button class="option-item disabled" data-target="map-view-control" data-state="hidden">
                            <span class="option-icon"><i class="fas fa-map"></i></span>
                            <span class="option-label">Harita Görünümü</span>
                            <span class="option-toggle">
                                <i class="fas fa-eye-slash"></i>
                            </span>
                        </button>
                    </div>
                </div>
            `;
            
            // Prevent map interactions on control
            L.DomEvent.disableClickPropagation(container);
            L.DomEvent.disableScrollPropagation(container);
            
            const toggleBtn = container.querySelector('.options-toggle');
            const closeBtn = container.querySelector('.options-close');
            const panel = container.querySelector('.options-panel');
            const optionItems = container.querySelectorAll('.option-item');
            
            // Toggle panel visibility
            toggleBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const isOpen = panel.classList.contains('open');
                
                if (isOpen) {
                    panel.classList.remove('open');
                    toggleBtn.classList.remove('active');
                } else {
                    panel.classList.add('open');
                    toggleBtn.classList.add('active');
                    // Add entrance animation
                    panel.style.animation = 'slideInDown 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                }
            });
            
            // Close button
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                panel.classList.remove('open');
                toggleBtn.classList.remove('active');
            });
            
            // Handle option item clicks
            optionItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const targetClass = this.getAttribute('data-target');
                    const currentState = this.getAttribute('data-state');
                    const targetElement = document.querySelector('.' + targetClass);
                    const toggleIcon = this.querySelector('.option-toggle i');
                    
                    if (!targetElement) return;
                    
                    if (currentState === 'visible') {
                        // Hide with animation
                        targetElement.style.animation = 'slideOut 0.3s ease-out forwards';
                        setTimeout(() => {
                            targetElement.style.display = 'none';
                        }, 300);
                        
                        this.setAttribute('data-state', 'hidden');
                        toggleIcon.className = 'fas fa-eye-slash';
                        this.classList.add('disabled');
                    } else {
                        // Show with animation
                        targetElement.style.display = 'block';
                        targetElement.style.animation = 'slideIn 0.3s ease-out forwards';
                        
                        this.setAttribute('data-state', 'visible');
                        toggleIcon.className = 'fas fa-eye';
                        this.classList.remove('disabled');
                    }
                    
                    // Pulse effect
                    this.style.animation = 'pulse 0.3s ease';
                    setTimeout(() => {
                        this.style.animation = '';
                    }, 300);
                });
            });
            
            // Close panel when clicking outside
            map.on('click', function() {
                if (panel.classList.contains('open')) {
                    panel.classList.remove('open');
                    toggleBtn.classList.remove('active');
                }
            });
            
            // Initialize: Hide map view control by default
            setTimeout(() => {
                const mapViewControl = document.querySelector('.map-view-control');
                if (mapViewControl) {
                    mapViewControl.style.display = 'none';
                }
            }, 100);
            
            return container;
        }
    });
    
    return new OptionsMenu();
}
