/**
 * About Modal Component
 * Displays information about the team and mission
 */

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
                    <i class="fas fa-user"></i>
                    ${getText('aboutIrmakTitle')}
                </div>
                <div class="about-section-content">
                    <p>${getText('aboutIrmakContent')}</p>
                </div>
            </div>
            
            <div class="about-divider"></div>
            
            <div class="about-section">
                <div class="about-section-title">
                    <i class="fas fa-user"></i>
                    ${getText('aboutZeynepTitle')}
                </div>
                <div class="about-section-content">
                    <p>${getText('aboutZeynepContent')}</p>
                </div>
            </div>
            
            <div class="about-divider"></div>
            
            <div class="about-section">
                <div class="about-section-title">
                    <i class="fas fa-user"></i>
                    ${getText('aboutOzanTitle')}
                </div>
                <div class="about-section-content">
                    <p>${getText('aboutOzanContent')}</p>
                </div>
            </div>
        </div>
        <div class="about-footer">
            <i class="fas fa-heart"></i>
            ${getText('aboutFooter')}
        </div>
    `;
}

// Create about modal using factory
const aboutModal = createModalComponent({
    type: 'about',
    icon: 'fas fa-users',
    titleKey: 'aboutToggle',
    bottomPosition: 100,
    getContent: getAboutModalContent
});

// Create button function for backwards compatibility
function createAboutButton(map) {
    aboutModal.create(map);
}
