# Between the Pipes - Water Quality Visualization

Interactive web application for visualizing water quality data across Istanbul neighborhoods. Built with Leaflet.js and featuring real-time interpolation, multi-language support, and comprehensive data analysis tools.

## Features

### Data Visualization
- Interactive map with multiple base layers (Street, Minimal, Satellite)
- Color-coded markers for water sources (Tap Water, Water Fountains)
- Real-time IDW (Inverse Distance Weighting) interpolation
- Smooth color gradients with convex hull boundaries
- Dynamic legend showing parameter ranges and ideal values

### Water Quality Parameters
- pH Level (Ideal: 6.5-8.5)
- Chlorine Content (Ideal: 0.2-0.5 mg/L)
- Water Hardness (Ideal: 50-250 mg/L CaCO3)

### Interactive Controls
- Layer control for switching between pH, Chlorine, and Hardness interpolation
- Map view selector for different base map styles
- Unified options menu with collapsible sections
- Detailed popups showing all measurements for each location

### Multi-Language Support
- Turkish, English, and French localization
- Dynamic content updates on language change
- Persistent language preference

### Information Modals
- Information modal explaining the experiment and parameters
- Process modal detailing data collection methodology
- About modal with team and project information
- Navigation between modals with keyboard and arrow controls

### Technical Features
- Responsive design for desktop and mobile devices
- Modular component architecture with shared factory pattern
- Custom color interpolation algorithms
- Canvas-based rendering for smooth gradients
- Accessible UI with ARIA labels and keyboard navigation

## Project Structure

```
Between the Pipes/
├── index.html
├── src/
│   ├── css/
│   │   ├── main.css
│   │   ├── leaflet-overrides.css
│   │   ├── responsive.css
│   │   └── components/
│   │       ├── popup.css
│   │       ├── layerControl.css
│   │       ├── mapViewControl.css
│   │       ├── optionsMenu.css
│   │       ├── legend.css
│   │       ├── infoButton.css
│   │       ├── aboutButton.css
│   │       ├── processButton.css
│   │       └── modalNavigation.css
│   ├── data/
│   │   ├── data.js
│   │   └── localization.js
│   └── js/
│       ├── app.js
│       ├── utils/
│       │   ├── colorInterpolation.js
│       │   ├── dataHelpers.js
│       │   └── interpolation.js
│       ├── components/
│       │   ├── popup.js
│       │   ├── legend.js
│       │   ├── layerControl.js
│       │   ├── mapViewControl.js
│       │   ├── optionsMenu.js
│       │   ├── modalFactory.js
│       │   ├── infoButton.js
│       │   ├── aboutButton.js
│       │   ├── processButton.js
│       │   └── modalNavigation.js
│       └── layers/
│           ├── circleMarkers.js
│           └── interpolationLayer.js
```

## Technologies

- Leaflet.js - Interactive mapping library
- Font Awesome - Icon library
- Vanilla JavaScript - No frameworks required
- CSS3 with modern features (backdrop-filter, CSS Grid, Flexbox)

## Data Collection

Water samples were collected from various neighborhoods across Istanbul by Irmak Caran and Zeynep Karademir. Each sample was tested for pH, chlorine content, and water hardness using multiple measurement methods to ensure accuracy.

## License

This project was created as part of a water quality analysis experiment for World Water Day educational purposes.
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
