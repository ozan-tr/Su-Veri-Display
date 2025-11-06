/**
 * Process Button Component
 * Displays information about our data collection process
 */

/**
 * Create process button UI
 * @param {L.Map} map - Leaflet map instance
 */
function createProcessButton(map) {
    const ProcessButton = L.Control.extend({
        options: {
            position: 'bottomright'
        },
        
        onAdd: function() {
            const container = L.DomUtil.create('div', 'process-button');
            
            container.innerHTML = `
                <button class="process-toggle" title="${getText('processToggle')}">
                    <i class="fas fa-tasks"></i>
                </button>
            `;
            
            // Prevent map interactions on control
            L.DomEvent.disableClickPropagation(container);
            L.DomEvent.disableScrollPropagation(container);
            
            const toggleBtn = container.querySelector('.process-toggle');
            
            // Toggle popup visibility
            toggleBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                openProcessModal();
            });
            
            // Update button tooltip on language change
            window.addEventListener('languageChanged', function() {
                toggleBtn.setAttribute('title', getText('processToggle'));
            });
            
            return container;
        }
    });
    
    new ProcessButton().addTo(map);
    
    // Create modal structure (outside the Leaflet control)
    createProcessModalStructure();
    
    // Listen for language changes to update modal content
    window.addEventListener('languageChanged', function() {
        updateProcessModalContent();
    });
}

/**
 * Create the modal structure in the document body
 */
function createProcessModalStructure() {
    const modalHTML = `
        <div class="process-modal-backdrop">
            <div class="process-popup">
                ${getProcessModalContent()}
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Setup event listeners
    setupProcessModalEventListeners();
}

/**
 * Get the modal content HTML
 */
function getProcessModalContent() {
    return `
        <div class="process-header">
            <span class="process-title">
                <i class="fas fa-tasks"></i>
                ${getText('processTitle')}
            </span>
            <button class="process-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="process-content">
            <div class="process-section">
                <div class="process-section-title">
                    <i class="fas fa-flag-checkered"></i>
                    ${getText('processOverviewTitle')}
                </div>
                <div class="process-section-content">
                    <p>${getText('processOverviewContent')}</p>
                </div>
            </div>
            
            <div class="process-divider"></div>
            
            <div class="process-section">
                <div class="process-section-title">
                    <i class="fas fa-clipboard-list"></i>
                    ${getText('processStepsTitle')}
                </div>
                <div class="process-section-content">
                    <ol>
                        <li><strong>${getText('processStep1Title')}:</strong> ${getText('processStep1Content')}</li>
                        <li><strong>${getText('processStep2Title')}:</strong> ${getText('processStep2Content')}</li>
                        <li><strong>${getText('processStep3Title')}:</strong> ${getText('processStep3Content')}</li>
                        <li><strong>${getText('processStep4Title')}:</strong> ${getText('processStep4Content')}</li>
                        <li><strong>${getText('processStep5Title')}:</strong> ${getText('processStep5Content')}</li>
                    </ol>
                </div>
            </div>
            
            <div class="process-divider"></div>
            
            <div class="process-section">
                <div class="process-section-title">
                    <i class="fas fa-microscope"></i>
                    ${getText('processMethodsTitle')}
                </div>
                <div class="process-section-content">
                    <p>${getText('processMethodsContent')}</p>
                </div>
            </div>
            
            <div class="process-divider"></div>
            
            <div class="process-section">
                <div class="process-section-title">
                    <i class="fas fa-check-circle"></i>
                    ${getText('processResultsTitle')}
                </div>
                <div class="process-section-content">
                    <p>${getText('processResultsContent')}</p>
                </div>
            </div>
        </div>
        <div class="process-footer">
            <i class="fas fa-flask"></i>
            ${getText('processFooter')}
        </div>
    `;
}

/**
 * Update modal content with current language
 */
function updateProcessModalContent() {
    const popup = document.querySelector('.process-popup');
    if (popup) {
        popup.innerHTML = getProcessModalContent();
        // Re-setup event listeners after content update
        setupProcessModalEventListeners();
    }
}

/**
 * Setup event listeners for the modal
 */
function setupProcessModalEventListeners() {
    const backdrop = document.querySelector('.process-modal-backdrop');
    const popup = document.querySelector('.process-popup');
    const closeBtn = document.querySelector('.process-close');
    
    if (!backdrop || !popup || !closeBtn) return;
    
    // Remove old listeners by cloning (if any)
    const newBackdrop = backdrop.cloneNode(true);
    const newPopup = newBackdrop.querySelector('.process-popup');
    const newCloseBtn = newPopup.querySelector('.process-close');
    backdrop.parentNode.replaceChild(newBackdrop, backdrop);
    
    // Close button
    newCloseBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeProcessModal();
    });
    
    // Close on backdrop click
    newBackdrop.addEventListener('click', function(e) {
        if (e.target === newBackdrop) {
            closeProcessModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && newBackdrop.classList.contains('open')) {
            closeProcessModal();
        }
    });
    
    // Prevent popup clicks from closing the modal
    newPopup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

/**
 * Open the process modal
 */
function openProcessModal() {
    const backdrop = document.querySelector('.process-modal-backdrop');
    const popup = document.querySelector('.process-popup');
    const toggleBtn = document.querySelector('.process-toggle');
    
    backdrop.classList.add('open');
    popup.classList.add('open');
    if (toggleBtn) toggleBtn.classList.add('active');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

/**
 * Close the process modal
 */
function closeProcessModal() {
    const backdrop = document.querySelector('.process-modal-backdrop');
    const popup = document.querySelector('.process-popup');
    const toggleBtn = document.querySelector('.process-toggle');
    
    backdrop.classList.remove('open');
    popup.classList.remove('open');
    if (toggleBtn) toggleBtn.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
}
