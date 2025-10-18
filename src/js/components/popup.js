/**
 * Popup Component
 * Creates and manages marker popups with water quality data
 */

/**
 * Create popup HTML content for a data point
 * @param {Object} item - Data point object
 * @param {string} currentLayerName - Currently active layer name
 * @returns {string} HTML string for popup
 */
function createPopup(item, currentLayerName) {
    const phData = loadPhData(item);
    const activeLayer = currentLayerName.replace('-interp', '');
    const type = item.type || 'musluk';
    
    // Get icon for type
    let typeIcon = 'fa-faucet';
    let typeKey = 'musluk';
    if (type === 'su sebili') {
        typeIcon = 'fa-water';
        typeKey = 'suSebili';
    } else if (type === 'arıtma') {
        typeIcon = 'fa-filter';
        typeKey = 'aritma';
    }
    
    return `
        <div class="popup-content">
            <h4 class="popup-title">${item.origin}</h4>
            <div class="data-item">
                <div class="data-row">
                    <span class="data-label"><i class="fa-solid ${typeIcon}"></i> ${getText('waterType')}:</span>
                    <span class="data-value">${getText(typeKey)}</span>
                </div>
            </div>
            
            <div class="data-item ${activeLayer === 'ph' ? 'highlighted' : ''}">
                <div class="data-row ph-summary" onclick="togglePhDetails(event)">
                    <span class="data-label">${getText('phAverage')}:</span>
                    <span class="data-value">${phData.avg.all}</span>
                    <span class="dropdown-arrow">▼</span>
                </div>
                <div class="ph-details" style="display: none;">
                    <div class="detail-item">
                        <span class="detail-label">${getText('phPaper')}:</span>
                        <span class="detail-value">${formatPhValue(phData.paper, phData.avg.paper)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">${getText('phPen')}:</span>
                        <span class="detail-value">${formatPhValue(phData.pen, phData.avg.pen)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">${getText('phSutest')}:</span>
                        <span class="detail-value">${formatPhValue(phData.sutest, phData.avg.sutest)}</span>
                    </div>
                </div>
            </div>
            
            <div class="data-item ${activeLayer === 'chlorine' ? 'highlighted' : ''}">
                <div class="data-row">
                    <span class="data-label">${getText('chlorine')}:</span>
                    <span class="data-value">${item.klor ? (item.klor === 0.1 ? '< 0.1' : item.klor) : getText('noMeasurement')}</span>
                </div>
            </div>
            
            <div class="data-item ${activeLayer === 'hardness' ? 'highlighted' : ''}">
                <div class="data-row">
                    <span class="data-label">${getText('hardness')}:</span>
                    <span class="data-value">${item.hardness || getText('noMeasurement')}</span>
                </div>
            </div>
        </div>
    `;
}

/**
 * Format pH value display
 * @param {Array} values - Array of pH values
 * @param {string} avg - Average pH value
 * @returns {string} Formatted string
 */
function formatPhValue(values, avg) {
    if (!values || values.length === 0) return getText('noMeasurement');
    if (values.length === 1) return values[0];
    return `${values.join(', ')} (${getText('average')}: ${avg})`;
}

/**
 * Toggle pH details dropdown
 * @param {Event} event - Click event
 */
function togglePhDetails(event) {
    const detailsDiv = event.currentTarget.nextElementSibling;
    const arrow = event.currentTarget.querySelector('.dropdown-arrow');
    
    if (detailsDiv.style.display === 'none') {
        detailsDiv.style.display = 'block';
        arrow.textContent = '▲';
    } else {
        detailsDiv.style.display = 'none';
        arrow.textContent = '▼';
    }
}
