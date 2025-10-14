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
    
    const CanvasLayer = L.GridLayer.extend({
        createTile: function(coords) {
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
                return tile;
            }
            
            const getValue = this.options.getValue;
            const getColor = this.options.getColor;
            const step = 4; // Performance optimization
            
            for (let x = 0; x < size.x; x += step) {
                for (let y = 0; y < size.y; y += step) {
                    const lng = tileNW.lng + (x / size.x) * (tileSE.lng - tileNW.lng);
                    const lat = tileNW.lat + (y / size.y) * (tileSE.lat - tileNW.lat);
                    
                    if (lat < dataBounds.minLat || lat > dataBounds.maxLat ||
                        lng < dataBounds.minLng || lng > dataBounds.maxLng) {
                        continue;
                    }
                    
                    const value = interpolateValue(lat, lng, data, getValue);
                    const color = getColor(value);
                    
                    ctx.fillStyle = color;
                    ctx.globalAlpha = 0.6;
                    ctx.fillRect(x, y, step, step);
                }
            }
            
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
