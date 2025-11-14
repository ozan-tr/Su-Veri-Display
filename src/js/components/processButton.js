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
                <div class="process-section-content process-steps">
                    <div class="process-step">
                        <h3>${getText('processStep1Title')}</h3>
                        <img src="./src/img/image8.png" alt="Sample Collection" class="float-left">
                        <div>${getText('processStep1Content')}</div>
                        <div class="process-images">
                            <img src="./src/img/image10.jpg" alt="Sample Containers" class="full-width">
                        </div>
                    </div>
                    <div class="process-step">
                        <h3>${getText('processStep2Title')}</h3>
                        <div class="right-images-container">
                            <img src="./src/img/image5.jpg" alt="Titration" class="float-right">
                            <img src="./src/img/image4.png" alt="pH Meter" class="float-right">
                        </div>
                        <div>${getText('processStep2Content')}</div>
                        <div class="process-images process-images-three">
                            <img src="./src/img/image11.jpg" alt="pH Measurement">
                            <img src="./src/img/image6.png" alt="pH Paper">
                            <img src="./src/img/image2.png" alt="Titration">
                        </div>
                    </div>
                    <div class="process-step">
                        <h3>${getText('processStep3Title')}</h3>
                        <img src="./src/img/image9.png" alt="Chlorine Test" class="float-left">
                        <div>${getText('processStep3Content')}</div>
                    </div>
                    <div class="process-step">
                        <h3>${getText('processStep4Title')}</h3>
                        <img src="./src/img/image3.jpg" alt="Hardness Test" class="float-left">
                        <div>${getText('processStep4Content')}</div>
                    </div>
                    <div class="process-step">
                        <h3>${getText('processStep5Title')}</h3>
                        <img src="./src/img/image7.png" alt="Data Analysis" class="float-right">
                        <div>${getText('processStep5Content')}</div>
                        <div class="process-images">
                            <img src="./src/img/image1.png" alt="Map Visualization" class="full-width">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Image lightbox functionality
function initImageLightbox() {
    console.log('initImageLightbox called');
    
    // Remove existing lightbox if any
    const existingLightbox = document.querySelector('.image-lightbox');
    if (existingLightbox) {
        existingLightbox.remove();
    }
    
    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-close"><i class="fas fa-times"></i></div>
        <img src="" alt="" class="lightbox-image">
    `;
    document.body.appendChild(lightbox);
    console.log('Lightbox element created and added to body');
    
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    
    // Count process images
    const processImages = document.querySelectorAll('.process-step img');
    console.log('Found', processImages.length, 'process images');
    
    // Add direct click handlers to each image
    processImages.forEach((img, index) => {
        console.log('Adding click to image', index, img.src);
        img.style.cursor = 'pointer';
        img.addEventListener('click', function(e) {
            console.log('Direct click on image:', this.src);
            e.stopPropagation();
            e.preventDefault();
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.classList.add('active');
            console.log('Lightbox should be visible now, classes:', lightbox.className);
        });
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        lightbox.classList.remove('active');
        console.log('Lightbox closed via button');
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            console.log('Lightbox closed via background');
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            console.log('Lightbox closed via Escape');
        }
    });
}

// Create process modal using factory
const processModal = createModalComponent({
    type: 'process',
    icon: 'fas fa-tasks',
    titleKey: 'processToggle',
    bottomPosition: 170,
    getContent: getProcessModalContent
});

// Override the open function to initialize lightbox
const originalOpen = processModal.open;
processModal.open = function() {
    originalOpen();
    // Initialize lightbox after modal is opened and rendered
    setTimeout(initImageLightbox, 200);
};

// Override the updateContent function to reinitialize lightbox
const originalUpdateContent = processModal.updateContent;
processModal.updateContent = function() {
    originalUpdateContent();
    // Reinitialize lightbox after content is updated (e.g., language change)
    setTimeout(initImageLightbox, 200);
};

// Listen for language changes directly
window.addEventListener('languageChanged', () => {
    console.log('Language changed - reinitializing lightbox');
    setTimeout(initImageLightbox, 300);
});

// Create button function for backwards compatibility
function createProcessButton(map) {
    processModal.create(map);
    // Also initialize lightbox on first creation
    setTimeout(initImageLightbox, 300);
}
