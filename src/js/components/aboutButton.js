/**
 * About Button Component
 * Displays information about who we are
 */

/**
 * Create about button UI
 * @param {L.Map} map - Leaflet map instance
 */
function createAboutButton(map) {
    const AboutButton = L.Control.extend({
        options: {
            position: 'bottomright'
        },
        
        onAdd: function() {
            const container = L.DomUtil.create('div', 'about-button');
            
            container.innerHTML = `
                <button class="about-toggle" title="${getText('aboutToggle')}">
                    <i class="fas fa-users"></i>
                </button>
            `;
            
            // Prevent map interactions on control
            L.DomEvent.disableClickPropagation(container);
            L.DomEvent.disableScrollPropagation(container);
            
            const toggleBtn = container.querySelector('.about-toggle');
            
            // Toggle popup visibility
            toggleBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                openAboutModal();
            });
            
            // Update button tooltip on language change
            window.addEventListener('languageChanged', function() {
                toggleBtn.setAttribute('title', getText('aboutToggle'));
            });
            
            return container;
        }
    });
    
    new AboutButton().addTo(map);
    
    // Create modal structure (outside the Leaflet control)
    createAboutModalStructure();
    
    // Listen for language changes to update modal content
    window.addEventListener('languageChanged', function() {
        updateAboutModalContent();
    });
}

/**
 * Create the modal structure in the document body
 */
function createAboutModalStructure() {
    const modalHTML = `
        <div class="about-modal-backdrop">
            <div class="about-popup">
                ${getAboutModalContent()}
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Setup event listeners
    setupAboutModalEventListeners();
}

/**
 * Get the modal content HTML
 */
function getAboutModalContent() {
    return `
        <div class="about-header">
            <span class="about-title">
                <i class="fas fa-users"></i>
                ${getText('aboutTitle')}
            </span>
            <button class="about-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="about-content">
            <div class="about-section">
                <div class="about-section-title">
                    <i class="fas fa-bullseye"></i>
                    ${getText('aboutMissionTitle')}
                </div>
                <div class="about-section-content">
                    <p>${getText('aboutMissionContent')}</p>
                </div>
            </div>
            
            <div class="about-divider"></div>
            
            <div class="about-section">
                <div class="about-section-title">
                    <i class="fas fa-user-graduate"></i>
                    ${getText('aboutTeamTitle')}
                </div>
                <div class="about-section-content">
                    <p>${getText('aboutTeamContent')}</p>
                </div>
            </div>
            
            <div class="about-divider"></div>
            
            <div class="about-section">
                <div class="about-section-title">
                    <i class="fas fa-lightbulb"></i>
                    ${getText('aboutProjectTitle')}
                </div>
                <div class="about-section-content">
                    <p>${getText('aboutProjectContent')}</p>
                </div>
            </div>
            
            <div class="about-divider"></div>
            
            <div class="about-section">
                <div class="about-section-title">
                    <i class="fas fa-envelope"></i>
                    ${getText('aboutContactTitle')}
                </div>
                <div class="about-section-content">
                    <p>${getText('aboutContactContent')}</p>
                </div>
            </div>
        </div>
        <div class="about-footer">
            <i class="fas fa-heart"></i>
            ${getText('aboutFooter')}
        </div>
    `;
}

/**
 * Update modal content with current language
 */
function updateAboutModalContent() {
    const popup = document.querySelector('.about-popup');
    if (popup) {
        popup.innerHTML = getAboutModalContent();
        // Re-setup event listeners after content update
        setupAboutModalEventListeners();
    }
}

/**
 * Setup event listeners for the modal
 */
function setupAboutModalEventListeners() {
    const backdrop = document.querySelector('.about-modal-backdrop');
    const popup = document.querySelector('.about-popup');
    const closeBtn = document.querySelector('.about-close');
    
    if (!backdrop || !popup || !closeBtn) return;
    
    // Remove old listeners by cloning (if any)
    const newBackdrop = backdrop.cloneNode(true);
    const newPopup = newBackdrop.querySelector('.about-popup');
    const newCloseBtn = newPopup.querySelector('.about-close');
    backdrop.parentNode.replaceChild(newBackdrop, backdrop);
    
    // Close button
    newCloseBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeAboutModal();
    });
    
    // Close on backdrop click
    newBackdrop.addEventListener('click', function(e) {
        if (e.target === newBackdrop) {
            closeAboutModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && newBackdrop.classList.contains('open')) {
            closeAboutModal();
        }
    });
    
    // Prevent popup clicks from closing the modal
    newPopup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

/**
 * Open the about modal
 */
function openAboutModal() {
    const backdrop = document.querySelector('.about-modal-backdrop');
    const popup = document.querySelector('.about-popup');
    const toggleBtn = document.querySelector('.about-toggle');
    
    backdrop.classList.add('open');
    popup.classList.add('open');
    if (toggleBtn) toggleBtn.classList.add('active');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

/**
 * Close the about modal
 */
function closeAboutModal() {
    const backdrop = document.querySelector('.about-modal-backdrop');
    const popup = document.querySelector('.about-popup');
    const toggleBtn = document.querySelector('.about-toggle');
    
    backdrop.classList.remove('open');
    popup.classList.remove('open');
    if (toggleBtn) toggleBtn.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
}
