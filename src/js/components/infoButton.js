/**
 * Info Button Component
 * Displays information about the application in a popup
 */

/**
 * Create info button UI
 * @param {L.Map} map - Leaflet map instance
 */
function createInfoButton(map) {
    const InfoButton = L.Control.extend({
        options: {
            position: 'bottomright'
        },
        
        onAdd: function() {
            const container = L.DomUtil.create('div', 'info-button');
            
            container.innerHTML = `
                <button class="info-toggle" title="${getText('infoToggle')}">
                    <i class="fas fa-info"></i>
                </button>
            `;
            
            // Prevent map interactions on control
            L.DomEvent.disableClickPropagation(container);
            L.DomEvent.disableScrollPropagation(container);
            
            const toggleBtn = container.querySelector('.info-toggle');
            
            // Toggle popup visibility
            toggleBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                openInfoModal();
            });
            
            // Update button tooltip on language change
            window.addEventListener('languageChanged', function() {
                toggleBtn.setAttribute('title', getText('infoToggle'));
            });
            
            return container;
        }
    });
    
    new InfoButton().addTo(map);
    
    // Create modal structure (outside the Leaflet control)
    createModalStructure();
    
    // Listen for language changes to update modal content
    window.addEventListener('languageChanged', function() {
        updateModalContent();
    });
}

/**
 * Create the modal structure in the document body
 */
function createModalStructure() {
    const modalHTML = `
        <div class="info-modal-backdrop">
            <div class="info-popup">
                ${getModalContent()}
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Setup event listeners
    setupModalEventListeners();
}

/**
 * Get the modal content HTML
 */
function getModalContent() {
    return `
        <div class="info-header">
            <span class="info-title">
                <i class="fas fa-info-circle"></i>
                ${getText('infoTitle')}
            </span>
            <button class="info-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="info-content">
            <div class="info-section">
                <div class="info-section-title">
                    <i class="fas fa-tint"></i>
                    ${getText('infoAboutTitle')}
                </div>
                <div class="info-section-content">
                    <p>${getText('infoAboutContent')}</p>
                </div>
            </div>
            
            <div class="info-divider"></div>
            
            <div class="info-section">
                <div class="info-section-title">
                    <i class="fas fa-flask"></i>
                    ${getText('infoParametersTitle')}
                </div>
                <div class="info-section-content">
                    <ul>
                        <li><strong>pH:</strong> ${getText('infoPhDescription')}</li>
                        <li><strong>${getText('chlorine')}:</strong> ${getText('infoChlorineDescription')}</li>
                        <li><strong>${getText('hardness')}:</strong> ${getText('infoHardnessDescription')}</li>
                    </ul>
                </div>
            </div>
            
            <div class="info-divider"></div>
            
            <div class="info-section">
                <div class="info-section-title">
                    <i class="fas fa-map-marked-alt"></i>
                    ${getText('infoHowToUseTitle')}
                </div>
                <div class="info-section-content">
                    <ul>
                        <li>${getText('infoHowToUse1')}</li>
                        <li>${getText('infoHowToUse2')}</li>
                        <li>${getText('infoHowToUse3')}</li>
                        <li>${getText('infoHowToUse4')}</li>
                    </ul>
                </div>
            </div>
            
            <div class="info-divider"></div>
            
            <div class="info-section">
                <div class="info-section-title">
                    <i class="fas fa-chart-line"></i>
                    ${getText('infoDataSourceTitle')}
                </div>
                <div class="info-section-content">
                    <p>${getText('infoDataSourceContent')}</p>
                </div>
            </div>
        </div>
        <div class="info-footer">
            <i class="fas fa-code"></i>
            ${getText('infoFooter')}
        </div>
    `;
}

/**
 * Update modal content with current language
 */
function updateModalContent() {
    const popup = document.querySelector('.info-popup');
    if (popup) {
        popup.innerHTML = getModalContent();
        // Re-setup event listeners after content update
        setupModalEventListeners();
    }
}

/**
 * Setup event listeners for the modal
 */
function setupModalEventListeners() {
    const backdrop = document.querySelector('.info-modal-backdrop');
    const popup = document.querySelector('.info-popup');
    const closeBtn = document.querySelector('.info-close');
    
    if (!backdrop || !popup || !closeBtn) return;
    
    // Remove old listeners by cloning (if any)
    const newBackdrop = backdrop.cloneNode(true);
    const newPopup = newBackdrop.querySelector('.info-popup');
    const newCloseBtn = newPopup.querySelector('.info-close');
    backdrop.parentNode.replaceChild(newBackdrop, backdrop);
    
    // Close button
    newCloseBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeInfoModal();
    });
    
    // Close on backdrop click
    newBackdrop.addEventListener('click', function(e) {
        if (e.target === newBackdrop) {
            closeInfoModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && newBackdrop.classList.contains('open')) {
            closeInfoModal();
        }
    });
    
    // Prevent popup clicks from closing the modal
    newPopup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

/**
 * Open the info modal
 */
function openInfoModal() {
    const backdrop = document.querySelector('.info-modal-backdrop');
    const popup = document.querySelector('.info-popup');
    const toggleBtn = document.querySelector('.info-toggle');
    
    backdrop.classList.add('open');
    popup.classList.add('open');
    if (toggleBtn) toggleBtn.classList.add('active');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

/**
 * Close the info modal
 */
function closeInfoModal() {
    const backdrop = document.querySelector('.info-modal-backdrop');
    const popup = document.querySelector('.info-popup');
    const toggleBtn = document.querySelector('.info-toggle');
    
    backdrop.classList.remove('open');
    popup.classList.remove('open');
    if (toggleBtn) toggleBtn.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
}
