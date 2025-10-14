/**
 * Inverse Distance Weighting (IDW) Interpolation
 * Estimates values at unmeasured locations based on nearby measurements
 */

/**
 * Interpolate value at a given location using IDW algorithm
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @param {Array} dataPoints - Array of data points
 * @param {Function} getValue - Function to extract value from data point
 * @param {number} power - Power parameter for IDW (default 2)
 * @returns {number} Interpolated value
 */
function interpolateValue(lat, lng, dataPoints, getValue, power = 2) {
    let weightedSum = 0;
    let weightSum = 0;
    
    for (const point of dataPoints) {
        const distance = Math.sqrt(
            Math.pow(lat - point.coordinates.latitude, 2) + 
            Math.pow(lng - point.coordinates.longitude, 2)
        );
        
        // Return exact value for very close points
        if (distance < 0.00001) {
            return getValue(point);
        }
        
        const weight = 1 / Math.pow(distance, power);
        weightedSum += weight * getValue(point);
        weightSum += weight;
    }
    
    return weightSum > 0 ? weightedSum / weightSum : 0;
}
