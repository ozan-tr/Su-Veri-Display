/**
 * Info Modal Component
 * Displays information about the water quality experiment
 */

/**
 * Get the modal content HTML
 */
function getInfoModalContent() {
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
                    <i class="fas fa-flask"></i>
                    ${getText('infoSection1Title')}
                </div>
                <div class="info-section-content">
                    <p>${getText('infoSection1Content')}</p>
                </div>
            </div>
            
            <div class="info-divider"></div>
            
            <div class="info-section">
                <div class="info-section-title">
                    <i class="fas fa-tint"></i>
                    ${getText('infoSection2Title')}
                </div>
                <div class="info-section-content">
                    <p><strong>${getText('infoSection2PHTitle')}</strong><br>
                    ${getText('infoSection2PHContent')}</p>
                    
                    <p><strong>${getText('infoSection2HardnessTitle')}</strong><br>
                    ${getText('infoSection2HardnessContent')}</p>
                    
                    <p><strong>${getText('infoSection2ChlorineTitle')}</strong><br>
                    ${getText('infoSection2ChlorineContent')}</p>
                </div>
            </div>
            
            <div class="info-divider"></div>
            
            <div class="info-section">
                <div class="info-section-title">
                    <i class="fas fa-map-marked-alt"></i>
                    ${getText('infoSection3Title')}
                </div>
                <div class="info-section-content">
                    <p>${getText('infoSection3Content')}</p>
                    <ul>
                        <li>${getText('infoSection3Point1')}</li>
                        <li>${getText('infoSection3Point2')}</li>
                        <li>${getText('infoSection3Point3')}</li>
                        <li>${getText('infoSection3Point4')}</li>
                    </ul>
                </div>
            </div>
            
            <div class="info-divider"></div>
            
            <div class="info-section">
                <div class="info-section-title">
                    <i class="fas fa-chart-line"></i>
                    ${getText('infoSection4Title')}
                </div>
                <div class="info-section-content">
                    <p>${getText('infoSection4Content')}</p>
                    <ul>
                        <li>${getText('infoSection4Point1')}</li>
                        <li>${getText('infoSection4Point2')}</li>
                        <li>${getText('infoSection4Point3')}</li>
                    </ul>
                </div>
            </div>
            
            <div class="info-tutorial-restart">
                <button class="restart-tutorial-btn" onclick="resetTutorial(); closeInfoModal();">
                    <i class="fas fa-redo"></i>
                    ${getText('restartTutorial') || 'Restart Tutorial'}
                </button>
            </div>
        </div>
        <div class="info-footer">
            <i class="fas fa-code"></i>
            ${getText('infoFooter')}
        </div>
    `;
}

// Create info modal using factory
const infoModal = createModalComponent({
    type: 'info',
    icon: 'fas fa-info-circle',
    titleKey: 'infoToggle',
    bottomPosition: 30,
    getContent: getInfoModalContent
});

// Create button function for backwards compatibility
function createInfoButton(map) {
    infoModal.create(map);
}
