/**
 * Interpolation Layer
 * Creates canvas-based interpolation layers using IDW algorithm
 */

/**
 * Create interpolation layers for all metrics
 * @param {Array} data - Array of data points
 * @returns {Object} Object containing interpolation layers
 */
function createInterpolationLayers(data) {
    const dataBounds = calculateDataBounds(data);
    
    // Pre-cache values and colors for better performance
    const valueCache = new Map();
    
    const CanvasLayer = L.GridLayer.extend({
        createTile: function(coords, done) {
            const tile = L.DomUtil.create('canvas', 'leaflet-tile');
            const ctx = tile.getContext('2d');
            const size = this.getTileSize();
            tile.width = size.x;
            tile.height = size.y;
            
            const tileNW = this._map.unproject([coords.x * size.x, coords.y * size.y], coords.z);
            const tileSE = this._map.unproject([(coords.x + 1) * size.x, (coords.y + 1) * size.y], coords.z);
            
            // Skip tiles outside data bounds
            if (tileSE.lat > dataBounds.maxLat || tileNW.lat < dataBounds.minLat ||
                tileSE.lng < dataBounds.minLng || tileNW.lng > dataBounds.maxLng) {
                done(null, tile);
                return tile;
            }
            
            const getValue = this.options.getValue;
            const getColor = this.options.getColor;
            const step = 8; // Increased step size for better performance
            
            // Use requestAnimationFrame for async rendering
            requestAnimationFrame(() => {
                const imageData = ctx.createImageData(size.x, size.y);
                const pixels = imageData.data;
                
                for (let x = 0; x < size.x; x += step) {
                    for (let y = 0; y < size.y; y += step) {
                        const lng = tileNW.lng + (x / size.x) * (tileSE.lng - tileNW.lng);
                        const lat = tileNW.lat + (y / size.y) * (tileSE.lat - tileNW.lat);
                        
                        // Get opacity based on distance to envelope edge
                        const opacity = dataBounds.getOpacity(lat, lng);
                        
                        // Skip if completely transparent
                        if (opacity <= 0) {
                            continue;
                        }
                        
                        // Create cache key
                        const cacheKey = `${Math.round(lat * 1000)},${Math.round(lng * 1000)}`;
                        
                        let color;
                        if (valueCache.has(cacheKey)) {
                            color = valueCache.get(cacheKey);
                        } else {
                            const value = interpolateValue(lat, lng, data, getValue);
                            color = getColor(value);
                            valueCache.set(cacheKey, color);
                            
                            // Limit cache size
                            if (valueCache.size > 1000) {
                                const firstKey = valueCache.keys().next().value;
                                valueCache.delete(firstKey);
                            }
                        }
                        
                        ctx.fillStyle = color;
                        // Apply gradient opacity (base 0.6 * edge fade)
                        ctx.globalAlpha = 0.6 * opacity;
                        ctx.fillRect(x, y, step, step);
                    }
                }
                
                done(null, tile);
            });
            
            return tile;
        }
    });
    
    return {
        ph: new CanvasLayer({
            opacity: 0.6,
            getValue: item => parseFloat(loadPhData(item).avg.all),
            getColor: getColorForPh
        }),
        chlorine: new CanvasLayer({
            opacity: 0.6,
            getValue: item => item.klor || 0,
            getColor: getColorForChlorine
        }),
        hardness: new CanvasLayer({
            opacity: 0.6,
            getValue: item => item.hardness || 0,
            getColor: getColorForHardness
        })
    };
}
