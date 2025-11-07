/**
 * Interactive Tutorial Component
 * Guides users through key features on first visit
 */

const TUTORIAL_STEPS = [
    {
        target: '.options-menu',
        title: 'optionsMenuTutorialTitle',
        content: 'optionsMenuTutorialContent',
        position: 'left'
    },
    {
        target: '.language-select',
        title: 'languageTutorialTitle',
        content: 'languageTutorialContent',
        position: 'left'
    },
    {
        target: '.layer-control',
        title: 'layerControlTutorialTitle',
        content: 'layerControlTutorialContent',
        position: 'right'
    },
    {
        target: '.info-button-container',
        title: 'infoButtonTutorialTitle',
        content: 'infoButtonTutorialContent',
        position: 'left'
    },
    {
        target: '#map',
        title: 'mapInteractionTutorialTitle',
        content: 'mapInteractionTutorialContent',
        position: 'center'
    }
];

let currentStep = -1;
let tutorialActive = false;

/**
 * Initialize tutorial system
 */
function initializeTutorial() {
    // Check if localization is loaded
    if (typeof getText !== 'function' || typeof getCurrentLanguage !== 'function') {
        console.error('Tutorial: Localization functions not available, retrying...');
        setTimeout(initializeTutorial, 500);
        return;
    }
    
    // Check if user has seen tutorial before
    const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
    
    if (hasSeenTutorial !== 'true') {
        // Wait for all components to load
        setTimeout(() => {
            showWelcomeScreen();
        }, 2000);
    }
}

/**
 * Show welcome screen
 */
function showWelcomeScreen() {
    // Double-check localization is available
    if (typeof getText !== 'function' || typeof getCurrentLanguage !== 'function') {
        console.error('Tutorial: Cannot show welcome screen - localization not loaded');
        return;
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'tutorial-overlay active';
    overlay.id = 'tutorialOverlay';
    
    const welcome = document.createElement('div');
    welcome.className = 'tutorial-welcome';
    
    function updateWelcomeContent() {
        const currentLang = getCurrentLanguage();
        welcome.innerHTML = `
            <div class="tutorial-welcome-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="tutorial-welcome-title">${getText('tutorialWelcomeTitle')}</div>
            <div class="tutorial-welcome-content">${getText('tutorialWelcomeContent')}</div>
            <div class="tutorial-welcome-language">
                <label>${getText('language')}:</label>
                <select class="tutorial-language-select" id="tutorialLanguageSelect">
                    <option value="tr" ${currentLang === 'tr' ? 'selected' : ''}>Türkçe</option>
                    <option value="en" ${currentLang === 'en' ? 'selected' : ''}>English</option>
                    <option value="fr" ${currentLang === 'fr' ? 'selected' : ''}>Français</option>
                </select>
            </div>
            <div class="tutorial-welcome-actions">
                <button class="tutorial-welcome-btn tutorial-welcome-btn-start" id="tutorialStartBtn">
                    <i class="fas fa-play"></i> ${getText('tutorialStart')}
                </button>
                <button class="tutorial-welcome-btn tutorial-welcome-btn-skip" id="tutorialSkipBtn">
                    ${getText('tutorialSkip')}
                </button>
            </div>
        `;
        
        // Reattach event listeners after updating innerHTML
        const langSelect = welcome.querySelector('#tutorialLanguageSelect');
        const startBtn = welcome.querySelector('#tutorialStartBtn');
        const skipBtn = welcome.querySelector('#tutorialSkipBtn');
        
        if (langSelect) {
            langSelect.addEventListener('change', function(e) {
                const newLang = e.target.value;
                setCurrentLanguage(newLang);
                updateUILanguage();
            });
        }
        
        if (startBtn) {
            startBtn.addEventListener('click', startTutorial);
        }
        
        if (skipBtn) {
            skipBtn.addEventListener('click', skipTutorial);
        }
    }
    
    updateWelcomeContent();
    
    overlay.appendChild(welcome);
    document.body.appendChild(overlay);
    
    // Listen for language changes to update welcome screen
    const languageChangeHandler = () => {
        updateWelcomeContent();
    };
    
    window.addEventListener('languageChanged', languageChangeHandler);
}

/**
 * Start the tutorial
 */
function startTutorial() {
    const welcome = document.querySelector('.tutorial-welcome');
    if (welcome) {
        welcome.style.animation = 'welcomeSlideIn 0.3s ease reverse';
        setTimeout(() => {
            welcome.remove();
            tutorialActive = true;
            currentStep = 0;
            showTutorialStep(currentStep);
        }, 300);
    }
}

/**
 * Show specific tutorial step
 */
function showTutorialStep(stepIndex) {
    if (stepIndex < 0 || stepIndex >= TUTORIAL_STEPS.length) {
        endTutorial();
        return;
    }
    
    const step = TUTORIAL_STEPS[stepIndex];
    
    // Special handling for language selector - open options menu first
    if (step.target === '.language-select') {
        const optionsPanel = document.querySelector('.options-panel');
        const optionsToggle = document.querySelector('.options-toggle');
        
        if (optionsPanel && !optionsPanel.classList.contains('open')) {
            optionsPanel.classList.add('open');
            if (optionsToggle) {
                optionsToggle.classList.add('active');
            }
            
            // Wait for animation to complete before showing the step
            setTimeout(() => {
                continueShowingStep(stepIndex);
            }, 300);
            return;
        }
    }
    
    continueShowingStep(stepIndex);
}

/**
 * Continue showing tutorial step after any preparations
 */
function continueShowingStep(stepIndex) {
    const step = TUTORIAL_STEPS[stepIndex];
    const target = document.querySelector(step.target);
    
    if (!target) {
        console.warn(`Tutorial target not found: ${step.target}, skipping to next step`);
        // Skip to next step instead of recursing
        currentStep++;
        if (currentStep < TUTORIAL_STEPS.length) {
            showTutorialStep(currentStep);
        } else {
            endTutorial();
        }
        return;
    }
    
    // Remove existing spotlight and tooltip
    const oldSpotlight = document.querySelector('.tutorial-spotlight');
    const oldTooltip = document.querySelector('.tutorial-tooltip');
    if (oldSpotlight) oldSpotlight.remove();
    if (oldTooltip) oldTooltip.remove();
    
    // Create spotlight
    const spotlight = document.createElement('div');
    spotlight.className = 'tutorial-spotlight';
    
    const rect = target.getBoundingClientRect();
    spotlight.style.top = `${rect.top - 10}px`;
    spotlight.style.left = `${rect.left - 10}px`;
    spotlight.style.width = `${rect.width + 20}px`;
    spotlight.style.height = `${rect.height + 20}px`;
    
    document.body.appendChild(spotlight);
    
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tutorial-tooltip';
    tooltip.innerHTML = `
        <div class="tutorial-tooltip-title">
            <i class="fas fa-lightbulb"></i>
            ${getText(step.title)}
        </div>
        <div class="tutorial-tooltip-content">
            ${getText(step.content)}
        </div>
        <div class="tutorial-tooltip-actions">
            <div class="tutorial-progress">${stepIndex + 1} / ${TUTORIAL_STEPS.length}</div>
            <div class="tutorial-buttons">
                ${stepIndex > 0 ? `<button class="tutorial-btn tutorial-btn-prev" onclick="prevTutorialStep()"><i class="fas fa-arrow-left"></i></button>` : ''}
                <button class="tutorial-btn tutorial-btn-skip" onclick="skipTutorial()">${getText('tutorialSkip')}</button>
                <button class="tutorial-btn tutorial-btn-next" onclick="nextTutorialStep()">
                    ${stepIndex < TUTORIAL_STEPS.length - 1 ? getText('tutorialNext') : getText('tutorialFinish')}
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
    
    // Position tooltip
    positionTooltip(tooltip, rect, step.position);
    
    document.body.appendChild(tooltip);
    
    // Scroll element into view
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Position tooltip relative to target
 */
function positionTooltip(tooltip, targetRect, position) {
    document.body.appendChild(tooltip);
    const tooltipRect = tooltip.getBoundingClientRect();
    
    let top, left;
    
    switch(position) {
        case 'right':
            top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
            left = targetRect.right + 20;
            break;
        case 'left':
            top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
            left = targetRect.left - tooltipRect.width - 20;
            break;
        case 'top':
            top = targetRect.top - tooltipRect.height - 20;
            left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
            break;
        case 'bottom':
            top = targetRect.bottom + 20;
            left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
            break;
        case 'center':
            top = window.innerHeight / 2 - tooltipRect.height / 2;
            left = window.innerWidth / 2 - tooltipRect.width / 2;
            break;
    }
    
    // Keep tooltip on screen
    top = Math.max(20, Math.min(top, window.innerHeight - tooltipRect.height - 20));
    left = Math.max(20, Math.min(left, window.innerWidth - tooltipRect.width - 20));
    
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
}

/**
 * Go to next tutorial step
 */
function nextTutorialStep() {
    currentStep++;
    if (currentStep < TUTORIAL_STEPS.length) {
        showTutorialStep(currentStep);
    } else {
        endTutorial();
    }
}

/**
 * Go to previous tutorial step
 */
function prevTutorialStep() {
    currentStep--;
    if (currentStep >= 0) {
        showTutorialStep(currentStep);
    }
}

/**
 * Skip tutorial
 */
function skipTutorial() {
    endTutorial();
}

/**
 * End tutorial and cleanup
 */
function endTutorial() {
    tutorialActive = false;
    currentStep = -1;
    
    // Mark as seen
    localStorage.setItem('hasSeenTutorial', 'true');
    
    // Remove all tutorial elements
    const overlay = document.getElementById('tutorialOverlay');
    const spotlight = document.querySelector('.tutorial-spotlight');
    const tooltip = document.querySelector('.tutorial-tooltip');
    
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 300);
    }
    if (spotlight) spotlight.remove();
    if (tooltip) tooltip.remove();
}

/**
 * Reset tutorial (for testing or user request)
 */
function resetTutorial() {
    localStorage.removeItem('hasSeenTutorial');
    location.reload();
}

// Expose functions globally
window.startTutorial = startTutorial;
window.nextTutorialStep = nextTutorialStep;
window.prevTutorialStep = prevTutorialStep;
window.skipTutorial = skipTutorial;
window.resetTutorial = resetTutorial;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTutorial);
} else {
    initializeTutorial();
}
