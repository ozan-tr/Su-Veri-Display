/**
 * Modal Navigation Component
 * Handles navigation between different modals (info, about, process)
 */

// Modal order for navigation
const MODAL_ORDER = ['info', 'process', 'about'];
let currentModalIndex = -1;

/**
 * Initialize modal navigation system
 */
function initializeModalNavigation() {
    // Create navigation arrows
    const navHTML = `
        <button class="modal-nav-arrow left" id="modalNavLeft">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="modal-nav-arrow right" id="modalNavRight">
            <i class="fas fa-chevron-right"></i>
        </button>
        <div class="modal-indicators" id="modalIndicators">
            <div class="modal-indicator" data-modal="info"></div>
            <div class="modal-indicator" data-modal="process"></div>
            <div class="modal-indicator" data-modal="about"></div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', navHTML);
    
    // Setup event listeners
    const leftArrow = document.getElementById('modalNavLeft');
    const rightArrow = document.getElementById('modalNavRight');
    const indicators = document.querySelectorAll('.modal-indicator');
    
    leftArrow.addEventListener('click', navigateToPreviousModal);
    rightArrow.addEventListener('click', navigateToNextModal);
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            const modalType = this.getAttribute('data-modal');
            navigateToModal(modalType);
        });
    });
    
    // Listen for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (currentModalIndex !== -1) {
            if (e.key === 'ArrowLeft') {
                navigateToPreviousModal();
            } else if (e.key === 'ArrowRight') {
                navigateToNextModal();
            }
        }
    });
    
    // Listen for modal open/close events
    observeModalChanges();
}

/**
 * Navigate to the previous modal
 */
function navigateToPreviousModal() {
    // Loop back to the last modal if at the first one
    let previousIndex = currentModalIndex - 1;
    if (previousIndex < 0) {
        previousIndex = MODAL_ORDER.length - 1;
    }
    
    const previousModal = MODAL_ORDER[previousIndex];
    navigateToModal(previousModal);
}

/**
 * Navigate to the next modal
 */
function navigateToNextModal() {
    // Loop back to the first modal if at the last one
    let nextIndex = currentModalIndex + 1;
    if (nextIndex >= MODAL_ORDER.length) {
        nextIndex = 0;
    }
    
    const nextModal = MODAL_ORDER[nextIndex];
    navigateToModal(nextModal);
}

/**
 * Navigate to a specific modal
 * @param {string} modalType - 'process', 'about', or 'info'
 */
function navigateToModal(modalType) {
    // Close current modal
    closeAllModals();
    
    // Small delay for smooth transition
    setTimeout(() => {
        // Open target modal
        switch(modalType) {
            case 'process':
                openProcessModal();
                break;
            case 'about':
                openAboutModal();
                break;
            case 'info':
                openInfoModal();
                break;
        }
    }, 100);
}

/**
 * Close all modals
 */
function closeAllModals() {
    closeProcessModal();
    closeAboutModal();
    closeInfoModal();
}

/**
 * Update navigation arrows and indicators based on current modal
 */
function updateNavigationState() {
    const leftArrow = document.getElementById('modalNavLeft');
    const rightArrow = document.getElementById('modalNavRight');
    const indicatorsContainer = document.getElementById('modalIndicators');
    const indicators = document.querySelectorAll('.modal-indicator');
    
    // Check which modal is open
    const processOpen = document.querySelector('.process-modal-backdrop')?.classList.contains('open');
    const aboutOpen = document.querySelector('.about-modal-backdrop')?.classList.contains('open');
    const infoOpen = document.querySelector('.info-modal-backdrop')?.classList.contains('open');
    
    if (infoOpen) {
        currentModalIndex = 0;
    } else if (processOpen) {
        currentModalIndex = 1;
    } else if (aboutOpen) {
        currentModalIndex = 2;
    } else {
        currentModalIndex = -1;
    }
    
    // Show/hide navigation elements
    if (currentModalIndex !== -1) {
        leftArrow.classList.add('visible');
        rightArrow.classList.add('visible');
        indicatorsContainer.classList.add('visible');
        
        // Always enable arrows for looping navigation
        leftArrow.style.opacity = '1';
        leftArrow.style.cursor = 'pointer';
        rightArrow.style.opacity = '1';
        rightArrow.style.cursor = 'pointer';
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentModalIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    } else {
        leftArrow.classList.remove('visible');
        rightArrow.classList.remove('visible');
        indicatorsContainer.classList.remove('visible');
        indicators.forEach(indicator => indicator.classList.remove('active'));
    }
}

/**
 * Observe modal backdrop changes
 */
function observeModalChanges() {
    // Create a mutation observer to watch for modal changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                updateNavigationState();
            }
        });
    });
    
    // Observe all modal backdrops
    const observeBackdrop = (selector) => {
        const backdrop = document.querySelector(selector);
        if (backdrop) {
            observer.observe(backdrop, { attributes: true });
        } else {
            // Try again after a short delay if backdrop doesn't exist yet
            setTimeout(() => observeBackdrop(selector), 100);
        }
    };
    
    observeBackdrop('.process-modal-backdrop');
    observeBackdrop('.about-modal-backdrop');
    observeBackdrop('.info-modal-backdrop');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeModalNavigation);
} else {
    initializeModalNavigation();
}
