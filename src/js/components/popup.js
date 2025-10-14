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
    
    return `
        <div class="popup-content">
            <h4 class="popup-title">${item.origin}</h4>
            
            <div class="data-item ${activeLayer === 'ph' ? 'highlighted' : ''}">
                <div class="data-row ph-summary" onclick="togglePhDetails(event)">
                    <span class="data-label">pH Ortalama:</span>
                    <span class="data-value">${phData.avg.all}</span>
                    <span class="dropdown-arrow">▼</span>
                </div>
                <div class="ph-details" style="display: none;">
                    <div class="detail-item">
                        <span class="detail-label">pH Paper:</span>
                        <span class="detail-value">${formatPhValue(phData.paper, phData.avg.paper)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">pH Pen:</span>
                        <span class="detail-value">${formatPhValue(phData.pen, phData.avg.pen)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">pH SuTest:</span>
                        <span class="detail-value">${formatPhValue(phData.sutest, phData.avg.sutest)}</span>
                    </div>
                </div>
            </div>
            
            <div class="data-item ${activeLayer === 'chlorine' ? 'highlighted' : ''}">
                <div class="data-row">
                    <span class="data-label">Klor:</span>
                    <span class="data-value">${item.klor ? (item.klor === 0.1 ? '< 0.1' : item.klor) : 'Ölçüm Yok'}</span>
                </div>
            </div>
            
            <div class="data-item ${activeLayer === 'hardness' ? 'highlighted' : ''}">
                <div class="data-row">
                    <span class="data-label">Sertlik:</span>
                    <span class="data-value">${item.hardness || 'Ölçüm Yok'}</span>
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
    if (!values || values.length === 0) return 'Ölçüm Yok';
    if (values.length === 1) return values[0];
    return `${values.join(', ')} (Ort: ${avg})`;
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
