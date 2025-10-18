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
            position: 'topright'
        },
        
        onAdd: function() {
            const container = L.DomUtil.create('div', 'options-menu');
            
            container.innerHTML = `
                <button class="options-toggle" title="${getText('optionsToggle')}">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="options-panel">
                    <div class="options-header">
                        <span class="options-title">${getText('optionsMenuTitle')}</span>
                        <button class="options-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="options-content">
                        <button class="option-item" data-target="layer-control" data-state="visible">
                            <span class="option-icon"><i class="fas fa-layer-group"></i></span>
                            <span class="option-label">${getText('dataLayers')}</span>
                            <span class="option-toggle">
                                <i class="fas fa-eye"></i>
                            </span>
                        </button>
                        <button class="option-item disabled" data-target="map-view-control" data-state="hidden">
                            <span class="option-icon"><i class="fas fa-map"></i></span>
                            <span class="option-label">${getText('mapView')}</span>
                            <span class="option-toggle">
                                <i class="fas fa-eye-slash"></i>
                            </span>
                        </button>
                        <div class="option-divider"></div>
                        <div class="option-group">
                            <div class="option-group-title">
                                <i class="fas fa-map-marker-alt"></i> ${getText('markerType')}
                            </div>
                            <div class="marker-type-toggle">
                                <button class="marker-type-btn active" data-type="icons">
                                    <i class="fas fa-icons"></i>
                                    <span>${getText('icons')}</span>
                                </button>
                                <button class="marker-type-btn" data-type="circles">
                                    <i class="fas fa-circle"></i>
                                    <span>${getText('circles')}</span>
                                </button>
                            </div>
                        </div>
                        <div class="option-divider"></div>
                        <div class="option-group">
                            <div class="option-group-title">
                                <i class="fas fa-language"></i> ${getText('language')}
                            </div>
                            <select class="language-select" id="languageSelect">
                                <option value="tr" ${getCurrentLanguage() === 'tr' ? 'selected' : ''}>🇹🇷 Türkçe</option>
                                <option value="en" ${getCurrentLanguage() === 'en' ? 'selected' : ''}>🇬🇧 English</option>
                                <option value="fr" ${getCurrentLanguage() === 'fr' ? 'selected' : ''}>🇫🇷 Français</option>
                            </select>
                        </div>
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
            const markerTypeBtns = container.querySelectorAll('.marker-type-btn');
            const languageSelect = container.querySelector('.language-select');
            
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
            
            // Handle marker type toggle
            markerTypeBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const markerType = this.getAttribute('data-type');
                    
                    // Update active state
                    markerTypeBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Toggle marker display type
                    if (typeof toggleMarkerDisplayType === 'function') {
                        toggleMarkerDisplayType(markerType);
                    }
                    
                    // Pulse effect
                    this.style.animation = 'pulse 0.3s ease';
                    setTimeout(() => {
                        this.style.animation = '';
                    }, 300);
                });
            });
            
            // Handle language change
            if (languageSelect) {
                languageSelect.addEventListener('change', function(e) {
                    e.stopPropagation();
                    const newLang = this.value;
                    const wasOpen = panel.classList.contains('open');
                    
                    setCurrentLanguage(newLang);
                    
                    // Rebuild the content
                    const currentMarkerType = container.querySelector('.marker-type-btn.active')?.getAttribute('data-type') || 'icons';
                    rebuildContent(currentMarkerType, newLang);
                    
                    // Restore open state if it was open
                    if (wasOpen) {
                        setTimeout(() => {
                            const newPanel = container.querySelector('.options-panel');
                            const newToggle = container.querySelector('.options-toggle');
                            newPanel.classList.add('open');
                            newToggle.classList.add('active');
                        }, 10);
                    }
                    
                    updateUILanguage();
                });
            }
            
            // Function to rebuild content with new language
            function rebuildContent(activeMarkerType, lang) {
                // Store current states
                const layerControlState = container.querySelector('[data-target="layer-control"]')?.getAttribute('data-state') || 'visible';
                const mapViewState = container.querySelector('[data-target="map-view-control"]')?.getAttribute('data-state') || 'hidden';
                
                // Rebuild HTML
                container.innerHTML = `
                    <button class="options-toggle" title="${getText('optionsToggle', lang)}">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="options-panel">
                        <div class="options-header">
                            <span class="options-title">${getText('optionsMenuTitle', lang)}</span>
                            <button class="options-close">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="options-content">
                            <button class="option-item ${layerControlState === 'hidden' ? 'disabled' : ''}" data-target="layer-control" data-state="${layerControlState}">
                                <span class="option-icon"><i class="fas fa-layer-group"></i></span>
                                <span class="option-label">${getText('dataLayers', lang)}</span>
                                <span class="option-toggle">
                                    <i class="fas fa-eye${layerControlState === 'hidden' ? '-slash' : ''}"></i>
                                </span>
                            </button>
                            <button class="option-item ${mapViewState === 'hidden' ? 'disabled' : ''}" data-target="map-view-control" data-state="${mapViewState}">
                                <span class="option-icon"><i class="fas fa-map"></i></span>
                                <span class="option-label">${getText('mapView', lang)}</span>
                                <span class="option-toggle">
                                    <i class="fas fa-eye${mapViewState === 'hidden' ? '-slash' : ''}"></i>
                                </span>
                            </button>
                            <div class="option-divider"></div>
                            <div class="option-group">
                                <div class="option-group-title">
                                    <i class="fas fa-map-marker-alt"></i> ${getText('markerType', lang)}
                                </div>
                                <div class="marker-type-toggle">
                                    <button class="marker-type-btn ${activeMarkerType === 'icons' ? 'active' : ''}" data-type="icons">
                                        <i class="fas fa-icons"></i>
                                        <span>${getText('icons', lang)}</span>
                                    </button>
                                    <button class="marker-type-btn ${activeMarkerType === 'circles' ? 'active' : ''}" data-type="circles">
                                        <i class="fas fa-circle"></i>
                                        <span>${getText('circles', lang)}</span>
                                    </button>
                                </div>
                            </div>
                            <div class="option-divider"></div>
                            <div class="option-group">
                                <div class="option-group-title">
                                    <i class="fas fa-language"></i> ${getText('language', lang)}
                                </div>
                                <select class="language-select" id="languageSelect">
                                    <option value="tr" ${lang === 'tr' ? 'selected' : ''}>🇹🇷 Türkçe</option>
                                    <option value="en" ${lang === 'en' ? 'selected' : ''}>🇬🇧 English</option>
                                    <option value="fr" ${lang === 'fr' ? 'selected' : ''}>🇫🇷 Français</option>
                                </select>
                            </div>
                        </div>
                    </div>
                `;
                
                // Re-attach all event listeners
                attachEventListeners();
            }
            
            // Function to attach event listeners
            function attachEventListeners() {
                const newToggleBtn = container.querySelector('.options-toggle');
                const newCloseBtn = container.querySelector('.options-close');
                const newPanel = container.querySelector('.options-panel');
                const newOptionItems = container.querySelectorAll('.option-item');
                const newMarkerTypeBtns = container.querySelectorAll('.marker-type-btn');
                const newLanguageSelect = container.querySelector('.language-select');
                
                // Toggle panel
                newToggleBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const isOpen = newPanel.classList.contains('open');
                    
                    if (isOpen) {
                        newPanel.classList.remove('open');
                        newToggleBtn.classList.remove('active');
                    } else {
                        newPanel.classList.add('open');
                        newToggleBtn.classList.add('active');
                        newPanel.style.animation = 'slideInDown 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    }
                });
                
                // Close button
                newCloseBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    newPanel.classList.remove('open');
                    newToggleBtn.classList.remove('active');
                });
                
                // Option items
                newOptionItems.forEach(item => {
                    item.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const targetClass = this.getAttribute('data-target');
                        const currentState = this.getAttribute('data-state');
                        const targetElement = document.querySelector('.' + targetClass);
                        const toggleIcon = this.querySelector('.option-toggle i');
                        
                        if (!targetElement) return;
                        
                        if (currentState === 'visible') {
                            targetElement.style.animation = 'slideOut 0.3s ease-out forwards';
                            setTimeout(() => { targetElement.style.display = 'none'; }, 300);
                            this.setAttribute('data-state', 'hidden');
                            toggleIcon.className = 'fas fa-eye-slash';
                            this.classList.add('disabled');
                        } else {
                            targetElement.style.display = 'block';
                            targetElement.style.animation = 'slideIn 0.3s ease-out forwards';
                            this.setAttribute('data-state', 'visible');
                            toggleIcon.className = 'fas fa-eye';
                            this.classList.remove('disabled');
                        }
                        
                        this.style.animation = 'pulse 0.3s ease';
                        setTimeout(() => { this.style.animation = ''; }, 300);
                    });
                });
                
                // Marker type buttons
                newMarkerTypeBtns.forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const markerType = this.getAttribute('data-type');
                        
                        newMarkerTypeBtns.forEach(b => b.classList.remove('active'));
                        this.classList.add('active');
                        
                        if (typeof toggleMarkerDisplayType === 'function') {
                            toggleMarkerDisplayType(markerType);
                        }
                        
                        this.style.animation = 'pulse 0.3s ease';
                        setTimeout(() => { this.style.animation = ''; }, 300);
                    });
                });
                
                // Language select
                if (newLanguageSelect) {
                    newLanguageSelect.addEventListener('change', function(e) {
                        e.stopPropagation();
                        const newLang = this.value;
                        const wasOpen = newPanel.classList.contains('open');
                        const currentMarkerType = container.querySelector('.marker-type-btn.active')?.getAttribute('data-type') || 'icons';
                        
                        setCurrentLanguage(newLang);
                        rebuildContent(currentMarkerType, newLang);
                        
                        if (wasOpen) {
                            setTimeout(() => {
                                const rebuiltPanel = container.querySelector('.options-panel');
                                const rebuiltToggle = container.querySelector('.options-toggle');
                                rebuiltPanel.classList.add('open');
                                rebuiltToggle.classList.add('active');
                            }, 10);
                        }
                        
                        updateUILanguage();
                    });
                }
            }
            
            // Close panel when clicking outside
            map.on('click', function() {
                const currentPanel = container.querySelector('.options-panel');
                const currentToggleBtn = container.querySelector('.options-toggle');
                if (currentPanel && currentPanel.classList.contains('open')) {
                    currentPanel.classList.remove('open');
                    currentToggleBtn.classList.remove('active');
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
