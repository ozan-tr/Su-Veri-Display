# Su Veri Display - Water Quality Visualization

Interactive map visualization for water quality data across Istanbul, Turkey.

## Project Structure

```
Su Veri Display/
├── index.html                          # Main HTML file
├── src/
│   ├── css/
│   │   ├── main.css                    # Main CSS orchestrator
│   │   ├── leaflet-overrides.css       # Leaflet customizations
│   │   ├── responsive.css              # Responsive design rules
│   │   └── components/                 # Component-specific styles
│   │       ├── popup.css               # Popup styling
│   │       ├── layerControl.css        # Layer control styling
│   │       ├── mapViewControl.css      # Map view control styling
│   │       ├── optionsMenu.css         # Options menu styling
│   │       └── legend.css              # Legend styling
│   ├── data/
│   │   └── data.js                     # Water quality data with type info
│   └── js/
│       ├── app.js                      # Main application entry point
│       ├── utils/                      # Utility functions
│       │   ├── colorInterpolation.js   # Color gradient calculations
│       │   ├── dataHelpers.js          # Convex hull, polygon ops, fade
│       │   └── interpolation.js        # IDW interpolation algorithm
│       ├── components/                 # UI components
│       │   ├── popup.js                # Marker popup with type display
│       │   ├── legend.js               # Color scale legend
│       │   ├── layerControl.js         # Layer switching control
│       │   ├── mapViewControl.js       # Map style switcher
│       │   └── optionsMenu.js          # Unified control menu
│       └── layers/                     # Map layers
│           ├── circleMarkers.js        # Icon-based markers by type
│           └── interpolationLayer.js   # Canvas interpolation with fade
```

## Features

### Water Source Types
Each water sample is categorized and displayed with a unique icon:
- **Musluk (Tap Water)** - Municipal tap water samples
- **Su Sebili (Water Fountain)** - Public water fountain samples  

Markers display colored icons based on both their water type and quality metrics.

### Water Quality Metrics
- **pH Level** (5-9 range) - Full spectrum interpolation from red (acidic) to violet (alkaline)
- **Chlorine Level** (0-0.3 mg/L) - Blue (low) to red (high)
- **Water Hardness** (0-40 °dH) - Light blue (soft) to purple (hard)

### Visualization Modes
1. **Markers Only** - Shows all data collection points with type-specific icons
2. **pH Interpolation** - Estimated pH values across the region with colored icons
3. **Chlorine Interpolation** - Estimated chlorine levels with colored icons
4. **Hardness Interpolation** - Estimated water hardness with colored icons

### Map Styles
Three base map options available via Map View Control:
- **Street Map** - Detailed OpenStreetMap view
- **Minimal Map** - Clean CartoDB Light view
- **Satellite Map** - Esri World Imagery

### User Interface Controls
- **Layer Control** (bottom-left) - Switch between data visualization layers
- **Map View Control** (bottom-right) - Change base map style
- **Options Menu** (bottom-right) - Unified menu to show/hide controls with smooth animations

### Advanced Features
- **Convex Hull Envelope** - Data visualization bounded by actual sample distribution (not rectangular)
- **Gradient Fade Effect** - Smooth opacity fade towards envelope edges using smoothstep function
- **Interactive Popups** - Click any marker to see detailed measurements including water type
- **Collapsible pH Details** - Expand to see individual test results (paper, pen, SuTest)
- **Active Layer Highlighting** - Current metric highlighted in popup
- **Responsive Design** - Adapts to different screen sizes

### Technical Highlights
- **Smooth Color Interpolation** - No hard-coded thresholds, colors transition based on exact values
- **IDW Algorithm** - Inverse Distance Weighting using 8 nearest neighbors for spatial interpolation
- **Graham Scan** - Convex hull algorithm for accurate data boundary envelope
- **Ray Casting** - Point-in-polygon testing for envelope containment
- **Optimized Rendering** - Canvas renderer with 8px step size and value caching (1000 entry limit)
- **Performance Optimized** - ~60-75% CPU reduction for lower-end machines
- **Async Tile Loading** - Non-blocking canvas tile generation
- **Debounced Layer Changes** - 100ms debounce prevents rapid switching lag
- **Modular Architecture** - Separated concerns across 9 JS files and 5 CSS files

## Dependencies

- **Leaflet.js** v1.9.4 - Interactive map library
- **Font Awesome** v6.4.0 - Icons
- **OpenStreetMap** - Tile provider

## File Descriptions

### Core Application
- **app.js** - Initializes map with Canvas renderer, manages application state, coordinates all components

### Utilities
- **colorInterpolation.js** - Generic color interpolation function with predefined color stops for each metric
- **dataHelpers.js** - Convex hull calculation (Graham scan), polygon operations, envelope bounds checking with gradient fade
- **interpolation.js** - IDW algorithm using 8 nearest neighbors for optimal performance

### Components
- **popup.js** - Creates dynamic HTML popups with water type display, conditional highlighting, and collapsible pH details
- **legend.js** - Displays color scale legend with configuration for each metric
- **layerControl.js** - Bottom-left UI control for layer switching with smooth transitions
- **mapViewControl.js** - Bottom-right control for switching between street/minimal/satellite map styles
- **optionsMenu.js** - Unified menu for showing/hiding controls with animated effects

### Layers
- **circleMarkers.js** - Creates icon-based markers (faucet/water/filter) colored by quality metric
- **interpolationLayer.js** - Canvas-based tile rendering using IDW interpolation with convex hull bounds and gradient opacity fade

## Color Scales

### pH (5-9)
Red → Orange → Yellow → Green → Cyan → Blue → Violet

### Chlorine (0-0.3 mg/L)
Blue (low) → Green (optimal) → Orange → Red (high)

### Hardness (0-40 °dH)
Very Light Blue → Light Blue → Yellow → Orange → Purple

## Performance Optimizations

1. **Canvas Renderer** - Leaflet configured with `preferCanvas: true` for better performance
2. **Convex Hull Bounds** - Only renders within actual data distribution envelope (not rectangular)
3. **Gradient Fade** - Smooth opacity transition using smoothstep function `t² × (3 - 2t)`
4. **8px Step Size** - Balances visual quality with rendering speed (~75% fewer calculations than 4px)
5. **8 Nearest Neighbors** - IDW limited to closest points (~90% fewer distance calculations)
6. **Value Caching** - Map cache with 1000 entry limit prevents recalculation
7. **Async Tile Loading** - Canvas tiles created via `requestAnimationFrame` for non-blocking render
8. **Debounced Layer Changes** - 100ms timeout prevents rapid switching lag
9. **Lazy Popup Binding** - Popups only created when markers are clicked
10. **Efficient Containment Check** - Early return for exact point matches in interpolation

## Usage

Simply open `index.html` in a web browser. No build process required.

### Interacting with the Map
- **Click markers** to see detailed water quality data including water type
- **Layer Control** (bottom-left) - Switch between visualization modes:
  - Markers Only
  - pH Interpolation
  - Chlorine Interpolation
  - Hardness Interpolation
- **Map View Control** (bottom-right) - Change base map style:
  - Street Map (OpenStreetMap)
  - Minimal Map (CartoDB Light)
  - Satellite Map (Esri Imagery)
- **Options Menu** (bottom-right) - Toggle visibility of controls:
  - Show/hide Layer Control
  - Show/hide Map View Control
- **pH Details** - Click pH data in popup to expand/collapse detailed measurements
- **Pan and zoom** to explore different areas
- **Hover over markers** for scale animation effect

### Marker Icon Legend
- **Faucet Icon** = Musluk (Tap Water)
- **Water Icon** = Su Sebili (Water Fountain)

Icon colors indicate quality levels for the active metric.

## Browser Support

Modern browsers with Canvas and ES6 support:
- Chrome/Edge 80+
- Firefox 75+
- Safari 13+

## License

Water quality data collected for educational purposes.
