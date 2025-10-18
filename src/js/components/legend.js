/**
 * Legend Component
 * Displays color scale legend for different water quality metrics
 */

// Track current layer for rebuilding on language change
let currentLegendLayer = null;

const LEGEND_CONFIG = {
    ph: [
        { color: '#ff0000', labelKey: 'phScale1' },
        { color: '#ff7f00', labelKey: 'phScale2' },
        { color: '#ffff00', labelKey: 'phScale3' },
        { color: '#7fff00', labelKey: 'phScale4' },
        { color: '#00ff00', labelKey: 'phScale5' },
        { color: '#00ff7f', labelKey: 'phScale6' },
        { color: '#00ffff', labelKey: 'phScale7' },
        { color: '#0000ff', labelKey: 'phScale8' },
        { color: '#7f00ff', labelKey: 'phScale9' }
    ],
    chlorine: [
        { color: '#2196F3', labelKey: 'chlorineScale1' },
        { color: '#4CAF50', labelKey: 'chlorineScale2' },
        { color: '#FF9800', labelKey: 'chlorineScale3' },
        { color: '#F44336', labelKey: 'chlorineScale4' }
    ],
    hardness: [
        { color: '#E3F2FD', labelKey: 'hardnessScale1' },
        { color: '#64B5F6', labelKey: 'hardnessScale2' },
        { color: '#FFA726', labelKey: 'hardnessScale3' },
        { color: '#9C27B0', labelKey: 'hardnessScale4' }
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
