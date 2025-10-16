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
 * Calculate convex hull using Graham scan algorithm
 * @param {Array} points - Array of {lat, lng} points
 * @returns {Array} Convex hull points in counter-clockwise order
 */
function calculateConvexHull(points) {
    if (points.length < 3) return points;
    
    // Find the point with lowest y-coordinate (latitude)
    let minPoint = points[0];
    for (let i = 1; i < points.length; i++) {
        if (points[i].lat < minPoint.lat || 
            (points[i].lat === minPoint.lat && points[i].lng < minPoint.lng)) {
            minPoint = points[i];
        }
    }
    
    // Sort points by polar angle with respect to minPoint
    const sortedPoints = points.filter(p => p !== minPoint).sort((a, b) => {
        const angleA = Math.atan2(a.lat - minPoint.lat, a.lng - minPoint.lng);
        const angleB = Math.atan2(b.lat - minPoint.lat, b.lng - minPoint.lng);
        if (angleA !== angleB) return angleA - angleB;
        
        // If angles are equal, sort by distance
        const distA = Math.pow(a.lat - minPoint.lat, 2) + Math.pow(a.lng - minPoint.lng, 2);
        const distB = Math.pow(b.lat - minPoint.lat, 2) + Math.pow(b.lng - minPoint.lng, 2);
        return distA - distB;
    });
    
    const hull = [minPoint, sortedPoints[0]];
    
    // Build convex hull
    for (let i = 1; i < sortedPoints.length; i++) {
        while (hull.length > 1 && crossProduct(hull[hull.length - 2], hull[hull.length - 1], sortedPoints[i]) <= 0) {
            hull.pop();
        }
        hull.push(sortedPoints[i]);
    }
    
    return hull;
}

/**
 * Calculate cross product for three points
 */
function crossProduct(o, a, b) {
    return (a.lng - o.lng) * (b.lat - o.lat) - (a.lat - o.lat) * (b.lng - o.lng);
}

/**
 * Expand convex hull by buffer distance
 * @param {Array} hull - Convex hull points
 * @param {number} bufferDistance - Distance to expand
 * @returns {Array} Expanded hull points
 */
function expandHull(hull, bufferDistance) {
    const expandedHull = [];
    const n = hull.length;
    
    for (let i = 0; i < n; i++) {
        const prev = hull[(i - 1 + n) % n];
        const curr = hull[i];
        const next = hull[(i + 1) % n];
        
        // Calculate outward normal direction
        const v1 = { lat: curr.lat - prev.lat, lng: curr.lng - prev.lng };
        const v2 = { lat: next.lat - curr.lat, lng: next.lng - curr.lng };
        
        // Normalize vectors
        const len1 = Math.sqrt(v1.lat * v1.lat + v1.lng * v1.lng);
        const len2 = Math.sqrt(v2.lat * v2.lat + v2.lng * v2.lng);
        
        if (len1 > 0) { v1.lat /= len1; v1.lng /= len1; }
        if (len2 > 0) { v2.lat /= len2; v2.lng /= len2; }
        
        // Average direction
        const normal = {
            lat: -(v1.lng + v2.lng) / 2,
            lng: (v1.lat + v2.lat) / 2
        };
        
        // Normalize
        const normalLen = Math.sqrt(normal.lat * normal.lat + normal.lng * normal.lng);
        if (normalLen > 0) {
            normal.lat /= normalLen;
            normal.lng /= normalLen;
        }
        
        // Expand point outward
        expandedHull.push({
            lat: curr.lat + normal.lat * bufferDistance,
            lng: curr.lng + normal.lng * bufferDistance
        });
    }
    
    return expandedHull;
}

/**
 * Check if a point is inside a polygon using ray casting
 * @param {Object} point - Point with lat/lng
 * @param {Array} polygon - Array of polygon vertices
 * @returns {boolean} True if point is inside
 */
function isPointInPolygon(point, polygon) {
    let inside = false;
    const n = polygon.length;
    
    for (let i = 0, j = n - 1; i < n; j = i++) {
        const xi = polygon[i].lng, yi = polygon[i].lat;
        const xj = polygon[j].lng, yj = polygon[j].lat;
        
        const intersect = ((yi > point.lat) !== (yj > point.lat)) &&
            (point.lng < (xj - xi) * (point.lat - yi) / (yj - yi) + xi);
        
        if (intersect) inside = !inside;
    }
    
    return inside;
}

/**
 * Calculate distance from point to polygon edge
 * @param {Object} point - Point with lat/lng
 * @param {Array} polygon - Array of polygon vertices
 * @returns {number} Distance to nearest edge (negative if outside)
 */
function distanceToPolygonEdge(point, polygon) {
    let minDist = Infinity;
    const n = polygon.length;
    const inside = isPointInPolygon(point, polygon);
    
    // Calculate distance to each edge
    for (let i = 0; i < n; i++) {
        const p1 = polygon[i];
        const p2 = polygon[(i + 1) % n];
        
        // Distance from point to line segment
        const dx = p2.lng - p1.lng;
        const dy = p2.lat - p1.lat;
        const lenSq = dx * dx + dy * dy;
        
        let t = 0;
        if (lenSq !== 0) {
            t = ((point.lng - p1.lng) * dx + (point.lat - p1.lat) * dy) / lenSq;
            t = Math.max(0, Math.min(1, t));
        }
        
        const projX = p1.lng + t * dx;
        const projY = p1.lat + t * dy;
        
        const dist = Math.sqrt(
            Math.pow(point.lng - projX, 2) + 
            Math.pow(point.lat - projY, 2)
        );
        
        minDist = Math.min(minDist, dist);
    }
    
    return inside ? minDist : -minDist;
}

/**
 * Calculate bounds of data points with buffer
 * @param {Array} data - Array of data points with coordinates
 * @param {number} bufferPercent - Buffer percentage (default 20%)
 * @returns {Object} Bounds object with convex hull and check function
 */
function calculateDataBounds(data, bufferPercent = 0.4) {
    // Extract points
    const points = data.map(item => ({
        lat: item.coordinates.latitude,
        lng: item.coordinates.longitude
    }));
    
    // Calculate convex hull
    const hull = calculateConvexHull(points);
    
    // Calculate buffer distance based on data spread
    let minLat = Infinity, maxLat = -Infinity;
    let minLng = Infinity, maxLng = -Infinity;
    
    hull.forEach(point => {
        minLat = Math.min(minLat, point.lat);
        maxLat = Math.max(maxLat, point.lat);
        minLng = Math.min(minLng, point.lng);
        maxLng = Math.max(maxLng, point.lng);
    });
    
    const latSpread = maxLat - minLat;
    const lngSpread = maxLng - minLng;
    const avgSpread = (latSpread + lngSpread) / 2;
    const bufferDistance = avgSpread * bufferPercent;
    
    // Keep original hull for inner boundary
    const innerHull = hull;
    
    // Expand hull by buffer
    const expandedHull = expandHull(hull, bufferDistance);
    
    // Calculate bounding box of expanded hull
    let boundMinLat = Infinity, boundMaxLat = -Infinity;
    let boundMinLng = Infinity, boundMaxLng = -Infinity;
    
    expandedHull.forEach(point => {
        boundMinLat = Math.min(boundMinLat, point.lat);
        boundMaxLat = Math.max(boundMaxLat, point.lat);
        boundMinLng = Math.min(boundMinLng, point.lng);
        boundMaxLng = Math.max(boundMaxLng, point.lng);
    });
    
    return {
        minLat: boundMinLat,
        maxLat: boundMaxLat,
        minLng: boundMinLng,
        maxLng: boundMaxLng,
        hull: expandedHull,
        innerHull: innerHull,
        fadeDistance: bufferDistance,
        // Check if a point is inside the envelope
        contains: function(lat, lng) {
            // Quick bounding box check first
            if (lat < this.minLat || lat > this.maxLat || 
                lng < this.minLng || lng > this.maxLng) {
                return false;
            }
            // Detailed polygon check
            return isPointInPolygon({ lat, lng }, this.hull);
        },
        // Get opacity based on distance to edge (1.0 at center, 0.0 at edge)
        getOpacity: function(lat, lng) {
            // Quick bounding box check first
            if (lat < this.minLat || lat > this.maxLat || 
                lng < this.minLng || lng > this.maxLng) {
                return 0;
            }
            
            const point = { lat, lng };
            
            // Check if inside outer hull
            if (!isPointInPolygon(point, this.hull)) {
                return 0;
            }
            
            // Check if inside inner hull (full opacity)
            if (isPointInPolygon(point, this.innerHull)) {
                return 1.0;
            }
            
            // In fade zone - calculate gradient
            const distToOuter = distanceToPolygonEdge(point, this.hull);
            const fadeRatio = distToOuter / this.fadeDistance;
            
            // Smooth fade using smoothstep function
            const opacity = fadeRatio * fadeRatio * (3 - 2 * fadeRatio);
            
            return Math.max(0, Math.min(1, opacity));
        }
    };
}
