/**
 * Legend Component
 * Displays color scale legend for different water quality metrics
 */

const LEGEND_CONFIG = {
    ph: [
        { color: '#ff0000', label: '5.0-5.5 (Çok Asidik)' },
        { color: '#ff7f00', label: '5.5-6.0 (Asidik)' },
        { color: '#ffff00', label: '6.0-6.5 (Hafif Asidik)' },
        { color: '#7fff00', label: '6.5-7.0 (Nötr\'e Yakın)' },
        { color: '#00ff00', label: '7.0-7.5 (Nötr)' },
        { color: '#00ff7f', label: '7.5-8.0 (Nötr)' },
        { color: '#00ffff', label: '8.0-8.5 (Hafif Alkali)' },
        { color: '#0000ff', label: '8.5-9.0 (Alkali)' },
        { color: '#7f00ff', label: '> 9.0 (Çok Alkali)' }
    ],
    chlorine: [
        { color: '#2196F3', label: '< 0.05 (Düşük)' },
        { color: '#4CAF50', label: '0.05-0.15 (İyi)' },
        { color: '#FF9800', label: '0.15-0.25' },
        { color: '#F44336', label: '> 0.25 (Yüksek)' }
    ],
    hardness: [
        { color: '#E3F2FD', label: '< 15 (Çok Yumuşak)' },
        { color: '#64B5F6', label: '15-25 (Yumuşak)' },
        { color: '#FFA726', label: '25-35 (Orta)' },
        { color: '#9C27B0', label: '> 35 (Sert)' }
    ]
};

/**
 * Show legend for specified layer
 * @param {string} layerName - Name of the layer (ph, chlorine, hardness)
 */
function showLegend(layerName) {
    const legend = document.getElementById('legend');
    const config = LEGEND_CONFIG[layerName];
    
    if (!config) {
        legend.style.display = 'none';
        return;
    }
    
    let legendHTML = '<div class="legend-title">Renk Ölçeği:</div>';
    
    config.forEach(item => {
        legendHTML += `
            <div class="legend-item">
                <span class="legend-color" style="background: ${item.color};"></span>
                ${item.label}
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
    document.getElementById('legend').style.display = 'none';
}
