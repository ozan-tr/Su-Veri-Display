/**
 * Color Interpolation Utilities
 * Provides smooth color gradients for water quality metrics
 */

/**
 * Generic color interpolation function
 * @param {number} value - The value to interpolate
 * @param {number} min - Minimum value in range
 * @param {number} max - Maximum value in range
 * @param {Array} colorStops - Array of color stop objects {pos, r, g, b}
 * @returns {string} Hex color string
 */
function interpolateColor(value, min, max, colorStops) {
    const clampedValue = Math.max(min, Math.min(max, value));
    const normalized = (clampedValue - min) / (max - min);
    
    // Find the two color stops to interpolate between
    let lowerStop = colorStops[0];
    let upperStop = colorStops[colorStops.length - 1];
    
    for (let i = 0; i < colorStops.length - 1; i++) {
        if (normalized >= colorStops[i].pos && normalized <= colorStops[i + 1].pos) {
            lowerStop = colorStops[i];
            upperStop = colorStops[i + 1];
            break;
        }
    }
    
    // Interpolate RGB values
    const localNormalized = (normalized - lowerStop.pos) / (upperStop.pos - lowerStop.pos);
    const r = Math.round(lowerStop.r + (upperStop.r - lowerStop.r) * localNormalized);
    const g = Math.round(lowerStop.g + (upperStop.g - lowerStop.g) * localNormalized);
    const b = Math.round(lowerStop.b + (upperStop.b - lowerStop.b) * localNormalized);
    
    // Convert to hex
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

/**
 * Get color for pH value (5-9 range)
 * Full spectrum: Red -> Orange -> Yellow -> Green -> Cyan -> Blue -> Violet
 */
function getColorForPh(value) {
    const colorStops = [
        { pos: 0.0, r: 255, g: 0, b: 0 },       // Red (pH 5)
        { pos: 0.167, r: 255, g: 127, b: 0 },   // Orange
        { pos: 0.333, r: 255, g: 255, b: 0 },   // Yellow
        { pos: 0.5, r: 0, g: 255, b: 0 },       // Green (pH 7)
        { pos: 0.667, r: 0, g: 255, b: 255 },   // Cyan
        { pos: 0.833, r: 0, g: 0, b: 255 },     // Blue
        { pos: 1.0, r: 127, g: 0, b: 255 }      // Violet (pH 9)
    ];
    
    return interpolateColor(value, 5, 9, colorStops);
}

/**
 * Get color for chlorine level (0-0.3 mg/L)
 * Blue (low) -> Green (optimal) -> Orange -> Red (high)
 */
function getColorForChlorine(value) {
    const colorStops = [
        { pos: 0.0, r: 33, g: 150, b: 243 },      // Blue (0)
        { pos: 0.167, r: 76, g: 175, b: 80 },     // Green (0.05)
        { pos: 0.5, r: 76, g: 175, b: 80 },       // Green (0.15)
        { pos: 0.667, r: 255, g: 152, b: 0 },     // Orange (0.2)
        { pos: 1.0, r: 244, g: 67, b: 54 }        // Red (0.3)
    ];
    
    return interpolateColor(value, 0, 0.3, colorStops);
}

/**
 * Get color for water hardness (0-40 °dH)
 * Very Light Blue -> Light Blue -> Yellow -> Orange -> Purple
 */
function getColorForHardness(value) {
    const colorStops = [
        { pos: 0.0, r: 227, g: 242, b: 253 },     // Very Light Blue (0)
        { pos: 0.375, r: 100, g: 181, b: 246 },   // Light Blue (15)
        { pos: 0.625, r: 255, g: 193, b: 7 },     // Yellow (25)
        { pos: 0.875, r: 255, g: 167, b: 38 },    // Orange (35)
        { pos: 1.0, r: 156, g: 39, b: 176 }       // Purple (40)
    ];
    
    return interpolateColor(value, 0, 40, colorStops);
}
