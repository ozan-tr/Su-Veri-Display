# Su Veri Display - Water Quality Visualization

Interactive map visualization for water quality data across Istanbul, Turkey.

## Project Structure

```
Su Veri Display/
├── index.html                          # Main HTML file
├── src/
│   ├── css/
│   │   └── style.css                   # All styles
│   ├── data/
│   │   └── data.js                     # Water quality data
│   └── js/
│       ├── app.js                      # Main application entry point
│       ├── utils/                      # Utility functions
│       │   ├── colorInterpolation.js   # Color gradient calculations
│       │   ├── dataHelpers.js          # Data processing utilities
│       │   └── interpolation.js        # IDW interpolation algorithm
│       ├── components/                 # UI components
│       │   ├── popup.js                # Marker popup generation
│       │   ├── legend.js               # Color scale legend
│       │   └── layerControl.js         # Layer switching control
│       └── layers/                     # Map layers
│           ├── circleMarkers.js        # Colored circle markers
│           └── interpolationLayer.js   # Canvas-based interpolation
```

## Features

### Water Quality Metrics
- **pH Level** (5-9 range) - Full spectrum interpolation from red (acidic) to violet (alkaline)
- **Chlorine Level** (0-0.3 mg/L) - Blue (low) to red (high)
- **Water Hardness** (0-40 °dH) - Light blue (soft) to purple (hard)

### Visualization Modes
1. **Markers Only** - Shows all data collection points
2. **pH Interpolation** - Estimated pH values across the region
3. **Chlorine Interpolation** - Estimated chlorine levels
4. **Hardness Interpolation** - Estimated water hardness

### Technical Highlights
- **Smooth Color Interpolation** - No hard-coded thresholds, colors transition based on exact values
- **IDW Algorithm** - Inverse Distance Weighting for spatial interpolation
- **Optimized Rendering** - Bounded canvas rendering with 4px step for performance
- **Responsive Popups** - Collapsible pH details, highlighting based on active layer
- **Modular Architecture** - Separated concerns for maintainability

## Dependencies

- **Leaflet.js** v1.9.4 - Interactive map library
- **Font Awesome** v6.4.0 - Icons
- **OpenStreetMap** - Tile provider

## File Descriptions

### Core Application
- **app.js** - Initializes map, manages application state, coordinates components

### Utilities
- **colorInterpolation.js** - Generic color interpolation function with predefined color stops for each metric
- **dataHelpers.js** - Calculate averages, process pH data, compute data bounds
- **interpolation.js** - IDW algorithm implementation for spatial value estimation

### Components
- **popup.js** - Creates dynamic HTML popups with conditional highlighting
- **legend.js** - Displays color scale legend with configuration for each metric
- **layerControl.js** - Bottom-left UI control for layer switching

### Layers
- **circleMarkers.js** - Creates colored circles at data points with click handlers
- **interpolationLayer.js** - Canvas-based tile rendering using IDW interpolation

## Color Scales

### pH (5-9)
Red → Orange → Yellow → Green → Cyan → Blue → Violet

### Chlorine (0-0.3 mg/L)
Blue (low) → Green (optimal) → Orange → Red (high)

### Hardness (0-40 °dH)
Very Light Blue → Light Blue → Yellow → Orange → Purple

## Performance Optimizations

1. **Bounded Rendering** - Only renders tiles within 120% of data extent
2. **4px Step Size** - Balances visual quality with rendering speed
3. **Lazy Tile Loading** - Canvas tiles created on-demand as map pans/zooms
4. **Efficient Interpolation** - Early return for exact point matches

## Usage

Simply open `index.html` in a web browser. No build process required.

### Interacting with the Map
- Click markers to see detailed water quality data
- Use layer control (bottom-left) to switch visualization modes
- Click pH data in popup to expand/collapse detailed measurements
- Pan and zoom to explore different areas

## Browser Support

Modern browsers with Canvas and ES6 support:
- Chrome/Edge 80+
- Firefox 75+
- Safari 13+

## License

Water quality data collected for educational purposes.
