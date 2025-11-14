/**
 * Modal Factory
 * Creates modal components with shared functionality
 */

/**
 * Create a modal component
 * @param {Object} config - Modal configuration
 * @param {string} config.type - Modal type identifier (info, about, process)
 * @param {string} config.icon - Font Awesome icon class
 * @param {string} config.titleKey - Localization key for title
 * @param {number} config.bottomPosition - Distance from bottom in pixels
 * @param {Function} config.getContent - Function that returns modal content HTML
 * @returns {Object} Modal API with open/close functions
 */
function createModalComponent(config) {
    const { type, icon, titleKey, bottomPosition, getContent } = config;
    
    /**
     * Create the modal toggle button
     */
    function createButton(map) {
        const ButtonControl = L.Control.extend({
            options: {
                position: 'bottomright'
            },
            
            onAdd: function(map) {
                const container = L.DomUtil.create('div', `${type}-button-container`);
                container.style.position = 'absolute';
                container.style.bottom = `${bottomPosition}px`;
                container.style.right = '30px';
                container.style.zIndex = '300';
                
                const button = L.DomUtil.create('button', `${type}-toggle`, container);
                button.innerHTML = `<i class="${icon}"></i>`;
                button.title = getText(titleKey);
                button.setAttribute('aria-label', getText(titleKey));
                
                L.DomEvent.on(button, 'click', function(e) {
                    L.DomEvent.stopPropagation(e);
                    L.DomEvent.preventDefault(e);
                    openModal();
                });
                
                L.DomEvent.disableClickPropagation(container);
                
                return container;
            }
        });
        
        map.addControl(new ButtonControl());
        createModalElements();
    }
    
    /**
     * Create modal backdrop and popup elements
     */
    function createModalElements() {
        // Remove existing modal if present
        const existingBackdrop = document.querySelector(`.${type}-modal-backdrop`);
        if (existingBackdrop) {
            existingBackdrop.remove();
        }
        
        // Create backdrop
        const backdrop = document.createElement('div');
        backdrop.className = `${type}-modal-backdrop`;
        
        // Create popup
        const popup = document.createElement('div');
        popup.className = `${type}-popup`;
        
        backdrop.appendChild(popup);
        document.body.appendChild(backdrop);
        
        // Update content
        updateModalContent();
        
        // Setup event listeners
        setupModalEventListeners();
    }
    
    /**
     * Update modal content based on current language
     */
    function updateModalContent() {
        const popup = document.querySelector(`.${type}-popup`);
        if (popup) {
            popup.innerHTML = getContent();
            setupModalEventListeners();
        }
    }
    
    /**
     * Setup event listeners for modal interactions
     */
    function setupModalEventListeners() {
        const backdrop = document.querySelector(`.${type}-modal-backdrop`);
        const popup = document.querySelector(`.${type}-popup`);
        const closeBtn = document.querySelector(`.${type}-popup .${type}-close`);
        
        if (!backdrop || !popup || !closeBtn) return;
        
        // Close on backdrop click
        backdrop.addEventListener('click', function(e) {
            if (e.target === backdrop) {
                closeModal();
            }
        });
        
        // Close button
        closeBtn.addEventListener('click', closeModal);
        
        // ESC key
        const escHandler = function(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
        
        // Prevent popup clicks from closing modal
        popup.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    /**
     * Open the modal
     */
    function openModal() {
        const backdrop = document.querySelector(`.${type}-modal-backdrop`);
        const popup = document.querySelector(`.${type}-popup`);
        const toggleBtn = document.querySelector(`.${type}-toggle`);
        
        backdrop.classList.add('open');
        popup.classList.add('open');
        if (toggleBtn) toggleBtn.classList.add('active');
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
    
    /**
     * Close the modal
     */
    function closeModal() {
        const backdrop = document.querySelector(`.${type}-modal-backdrop`);
        const popup = document.querySelector(`.${type}-popup`);
        const toggleBtn = document.querySelector(`.${type}-toggle`);
        
        backdrop.classList.remove('open');
        popup.classList.remove('open');
        if (toggleBtn) toggleBtn.classList.remove('active');
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
    
    // Listen for language changes
    window.addEventListener('languageChanged', () => {
        updateModalContent();
        
        // Update button title
        const button = document.querySelector(`.${type}-toggle`);
        if (button) {
            button.title = getText(titleKey);
            button.setAttribute('aria-label', getText(titleKey));
        }
    });
    
    // Expose functions globally for modal navigation
    window[`open${capitalize(type)}Modal`] = openModal;
    window[`close${capitalize(type)}Modal`] = closeModal;
    
    // Return API
    return {
        create: createButton,
        open: openModal,
        close: closeModal,
        updateContent: updateModalContent
    };
}

/**
 * Capitalize first letter of string
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
