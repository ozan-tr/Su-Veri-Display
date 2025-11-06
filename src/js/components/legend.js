/**
 * Legend Component
 * Displays color scale legend for different water quality metrics
 */

// Track current layer for rebuilding on language change
let currentLegendLayer = null;

const LEGEND_CONFIG = {
    ph: [
        { color: '#ff0000', labelKey: 'phScale1' },     // < 6.5 (Acidic) - Red
        { color: '#ffff00', labelKey: 'phScale2' },     // 6.5-7.0 (Ideal) - Yellow
        { color: '#7fff00', labelKey: 'phScale3' },     // 7.0-7.5 (Ideal - Neutral) - Light Green
        { color: '#00ff00', labelKey: 'phScale4' },     // 7.5-8.0 (Ideal) - Green
        { color: '#00ffff', labelKey: 'phScale5' },     // 8.0-8.5 (Ideal) - Cyan
        { color: '#0000ff', labelKey: 'phScale6' }      // > 8.5 (Alkaline) - Blue
    ],
    chlorine: [
        { color: '#2196F3', labelKey: 'chlorineScale1' },   // < 0.2 (Low)
        { color: '#4CAF50', labelKey: 'chlorineScale2' },   // 0.2-0.35 (Ideal)
        { color: '#8BC34A', labelKey: 'chlorineScale3' },   // 0.35-0.5 (Ideal)
        { color: '#F44336', labelKey: 'chlorineScale4' }    // > 0.5 (High)
    ],
    hardness: [
        { color: '#E3F2FD', labelKey: 'hardnessScale1' },   // < 50 (Very Soft)
        { color: '#64B5F6', labelKey: 'hardnessScale2' },   // 50-150 (Ideal)
        { color: '#42A5F5', labelKey: 'hardnessScale3' },   // 150-250 (Ideal)
        { color: '#9C27B0', labelKey: 'hardnessScale4' }    // > 250 (Hard)
    ]
};

// Listen for language changes
window.addEventListener('languageChanged', () => {
    if (currentLegendLayer) {
        showLegend(currentLegendLayer);
    }
});

/**
 * Show legend for specified layer
 * @param {string} layerName - Name of the layer (ph, chlorine, hardness)
 */
function showLegend(layerName) {
    currentLegendLayer = layerName;
    const legend = document.getElementById('legend');
    const config = LEGEND_CONFIG[layerName];
    
    if (!config) {
        legend.style.display = 'none';
        return;
    }
    
    let legendHTML = `<div class="legend-title">${getText('legendTitle')}:</div>`;
    
    config.forEach(item => {
        legendHTML += `
            <div class="legend-item">
                <span class="legend-color" style="background: ${item.color};"></span>
                ${getText(item.labelKey)}
            </div>
        `;
    });
    
    legend.innerHTML = legendHTML;
    legend.style.display = 'block';
}

/**
 * Hide legend
 */
function hideLegend() {
    currentLegendLayer = null;
    document.getElementById('legend').style.display = 'none';
}
