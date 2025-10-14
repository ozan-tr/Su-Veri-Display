/**
 * Data Helper Functions
 * Utilities for processing and calculating water quality data
 */

/**
 * Calculate average of an array of numbers
 * @param {Array<number>} arr - Array of numbers
 * @returns {string} Average rounded to 1 decimal place
 */
function calculateAverage(arr) {
    if (!arr || arr.length === 0) return '0';
    const sum = arr.reduce((a, b) => a + b, 0);
    return (sum / arr.length).toFixed(1);
}

/**
 * Load and process pH data from a sample
 * @param {Object} item - Data sample object
 * @returns {Object} Processed pH data with averages
 */
function loadPhData(item) {
    const allPhValues = [].concat(
        item.ph_paper || [],
        item.ph_pen || [],
        item.ph_sutest_indikator || []
    );
    
    return {
        paper: item.ph_paper || [],
        pen: item.ph_pen || [],
        sutest: item.ph_sutest_indikator || [],
        avg: {
            paper: calculateAverage(item.ph_paper),
            pen: calculateAverage(item.ph_pen),
            sutest: calculateAverage(item.ph_sutest_indikator),
            all: calculateAverage(allPhValues)
        }
    };
}

/**
 * Calculate bounds of data points with buffer
 * @param {Array} data - Array of data points with coordinates
 * @param {number} bufferPercent - Buffer percentage (default 20%)
 * @returns {Object} Bounds object with min/max lat/lng
 */
function calculateDataBounds(data, bufferPercent = 0.2) {
    let minLat = Infinity, maxLat = -Infinity;
    let minLng = Infinity, maxLng = -Infinity;
    
    data.forEach(item => {
        minLat = Math.min(minLat, item.coordinates.latitude);
        maxLat = Math.max(maxLat, item.coordinates.latitude);
        minLng = Math.min(minLng, item.coordinates.longitude);
        maxLng = Math.max(maxLng, item.coordinates.longitude);
    });
    
    const latBuffer = (maxLat - minLat) * bufferPercent;
    const lngBuffer = (maxLng - minLng) * bufferPercent;
    
    return {
        minLat: minLat - latBuffer,
        maxLat: maxLat + latBuffer,
        minLng: minLng - lngBuffer,
        maxLng: maxLng + lngBuffer
    };
}
