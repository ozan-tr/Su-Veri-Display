/**
 * Process Modal Component
 * Displays information about the data collection process
 */

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
                    <i class="fas fa-clipboard-list"></i>
                    ${getText('processOverviewTitle')}
                </div>
                <div class="process-section-content">
                    <p>${getText('processOverviewContent')}</p>
                </div>
            </div>
            
            <div class="process-divider"></div>
            
            <div class="process-section">
                <div class="process-section-title">
                    <i class="fas fa-route"></i>
                    ${getText('processStepsTitle')}
                </div>
                <div class="process-section-content">
                    <ol>
                        <li><strong>${getText('processStep1Title')}</strong><br>${getText('processStep1Content')}</li>
                        <li><strong>${getText('processStep2Title')}</strong><br>${getText('processStep2Content')}</li>
                        <li><strong>${getText('processStep3Title')}</strong><br>${getText('processStep3Content')}</li>
                        <li><strong>${getText('processStep4Title')}</strong><br>${getText('processStep4Content')}</li>
                        <li><strong>${getText('processStep5Title')}</strong><br>${getText('processStep5Content')}</li>
                    </ol>
                </div>
            </div>
            
            <div class="process-divider"></div>
            
            <div class="process-section">
                <div class="process-section-title">
                    <i class="fas fa-flask"></i>
                    ${getText('processMethodsTitle')}
                </div>
                <div class="process-section-content">
                    <p>${getText('processMethodsContent')}</p>
                </div>
            </div>
        </div>
        <div class="process-footer">
            <i class="fas fa-check-circle"></i>
            ${getText('processFooter')}
        </div>
    `;
}

// Create process modal using factory
const processModal = createModalComponent({
    type: 'process',
    icon: 'fas fa-tasks',
    titleKey: 'processToggle',
    bottomPosition: 170,
    getContent: getProcessModalContent
});

// Create button function for backwards compatibility
function createProcessButton(map) {
    processModal.create(map);
}
