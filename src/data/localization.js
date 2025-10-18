/**
 * Localization data for multiple languages
 * Supports: Turkish (tr), English (en), French (fr)
 */

const LOCALIZATION = {
    tr: {
        // Options Menu
        optionsMenuTitle: "Kontroller",
        optionsToggle: "Seçenekler",
        
        // Control Items
        dataLayers: "Veri Katmanları",
        mapView: "Harita Görünümü",
        markerType: "İşaretleyici Türü",
        language: "Dil",
        
        // Marker Types
        icons: "Simgeler",
        circles: "Daireler",
        
        // Map View Types
        streetMap: "Sokak",
        minimalMap: "Minimal",
        satelliteMap: "Uydu",
        mapViewTitle: "Harita Görünümü",
        
        // Layer Control
        layerControlTitle: "Veri Katmanları",
        noLayer: "Sadece İşaretler",
        phLayer: "pH İnterpolasyonu",
        chlorineLayer: "Klor İnterpolasyonu",
        hardnessLayer: "Sertlik İnterpolasyonu",
        
        // Legend
        legendTitle: "Renk Skalası",
        phLegend: "pH Seviyesi",
        chlorineLegend: "Klor (mg/L)",
        hardnessLegend: "Sertlik (°dH)",
        
        // Popup
        waterType: "Tip",
        phAverage: "pH Ortalama",
        phPaper: "pH Paper",
        phPen: "pH Pen",
        phSutest: "pH SuTest",
        chlorine: "Klor",
        hardness: "Sertlik",
        noMeasurement: "Ölçüm Yok",
        average: "Ort",
        
        // Water Types
        musluk: "Musluk",
        suSebili: "Su Sebili",
        aritma: "Arıtma",
        
        // Legend Scales
        phScale1: "5.0-5.5 (Çok Asidik)",
        phScale2: "5.5-6.0 (Asidik)",
        phScale3: "6.0-6.5 (Hafif Asidik)",
        phScale4: "6.5-7.0 (Nötr'e Yakın)",
        phScale5: "7.0-7.5 (Nötr)",
        phScale6: "7.5-8.0 (Nötr)",
        phScale7: "8.0-8.5 (Hafif Alkali)",
        phScale8: "8.5-9.0 (Alkali)",
        phScale9: "> 9.0 (Çok Alkali)",
        chlorineScale1: "< 0.05 (Düşük)",
        chlorineScale2: "0.05-0.15 (İyi)",
        chlorineScale3: "0.15-0.25",
        chlorineScale4: "> 0.25 (Yüksek)",
        hardnessScale1: "< 15 (Çok Yumuşak)",
        hardnessScale2: "15-25 (Yumuşak)",
        hardnessScale3: "25-35 (Orta)",
        hardnessScale4: "> 35 (Sert)",
        
        // Tooltips
        streetMapTooltip: "Sokak Haritası",
        minimalMapTooltip: "Minimal Harita",
        satelliteMapTooltip: "Uydu Görünümü"
    },
    
    en: {
        // Options Menu
        optionsMenuTitle: "Controls",
        optionsToggle: "Options",
        
        // Control Items
        dataLayers: "Data Layers",
        mapView: "Map View",
        markerType: "Marker Type",
        language: "Language",
        
        // Marker Types
        icons: "Icons",
        circles: "Circles",
        
        // Map View Types
        streetMap: "Street",
        minimalMap: "Minimal",
        satelliteMap: "Satellite",
        mapViewTitle: "Map View",
        
        // Layer Control
        layerControlTitle: "Data Layers",
        noLayer: "Markers Only",
        phLayer: "pH Interpolation",
        chlorineLayer: "Chlorine Interpolation",
        hardnessLayer: "Hardness Interpolation",
        
        // Legend
        legendTitle: "Color Scale",
        phLegend: "pH Level",
        chlorineLegend: "Chlorine (mg/L)",
        hardnessLegend: "Hardness (°dH)",
        
        // Popup
        waterType: "Type",
        phAverage: "pH Average",
        phPaper: "pH Paper",
        phPen: "pH Pen",
        phSutest: "pH SuTest",
        chlorine: "Chlorine",
        hardness: "Hardness",
        noMeasurement: "No Data",
        average: "Avg",
        
        // Water Types
        musluk: "Tap Water",
        suSebili: "Water Fountain",
        aritma: "Treatment",
        
        // Legend Scales
        phScale1: "5.0-5.5 (Very Acidic)",
        phScale2: "5.5-6.0 (Acidic)",
        phScale3: "6.0-6.5 (Slightly Acidic)",
        phScale4: "6.5-7.0 (Near Neutral)",
        phScale5: "7.0-7.5 (Neutral)",
        phScale6: "7.5-8.0 (Neutral)",
        phScale7: "8.0-8.5 (Slightly Alkaline)",
        phScale8: "8.5-9.0 (Alkaline)",
        phScale9: "> 9.0 (Very Alkaline)",
        chlorineScale1: "< 0.05 (Low)",
        chlorineScale2: "0.05-0.15 (Good)",
        chlorineScale3: "0.15-0.25",
        chlorineScale4: "> 0.25 (High)",
        hardnessScale1: "< 15 (Very Soft)",
        hardnessScale2: "15-25 (Soft)",
        hardnessScale3: "25-35 (Medium)",
        hardnessScale4: "> 35 (Hard)",
        
        // Tooltips
        streetMapTooltip: "Street Map",
        minimalMapTooltip: "Minimal Map",
        satelliteMapTooltip: "Satellite View"
    },
    
    fr: {
        // Options Menu
        optionsMenuTitle: "Contrôles",
        optionsToggle: "Options",
        
        // Control Items
        dataLayers: "Couches de Données",
        mapView: "Vue de la Carte",
        markerType: "Type de Marqueur",
        language: "Langue",
        
        // Marker Types
        icons: "Icônes",
        circles: "Cercles",
        
        // Map View Types
        streetMap: "Rue",
        minimalMap: "Minimal",
        satelliteMap: "Satellite",
        mapViewTitle: "Vue de la Carte",
        
        // Layer Control
        layerControlTitle: "Couches de Données",
        noLayer: "Marqueurs Seulement",
        phLayer: "Interpolation pH",
        chlorineLayer: "Interpolation Chlore",
        hardnessLayer: "Interpolation Dureté",
        
        // Legend
        legendTitle: "Échelle de Couleur",
        phLegend: "Niveau pH",
        chlorineLegend: "Chlore (mg/L)",
        hardnessLegend: "Dureté (°dH)",
        
        // Popup
        waterType: "Type",
        phAverage: "pH Moyen",
        phPaper: "pH Papier",
        phPen: "pH Stylo",
        phSutest: "pH SuTest",
        chlorine: "Chlore",
        hardness: "Dureté",
        noMeasurement: "Pas de Données",
        average: "Moy",
        
        // Water Types
        musluk: "Eau du Robinet",
        suSebili: "Fontaine d'Eau",
        aritma: "Traitement",
        
        // Legend Scales
        phScale1: "5.0-5.5 (Très Acide)",
        phScale2: "5.5-6.0 (Acide)",
        phScale3: "6.0-6.5 (Légèrement Acide)",
        phScale4: "6.5-7.0 (Presque Neutre)",
        phScale5: "7.0-7.5 (Neutre)",
        phScale6: "7.5-8.0 (Neutre)",
        phScale7: "8.0-8.5 (Légèrement Alcalin)",
        phScale8: "8.5-9.0 (Alcalin)",
        phScale9: "> 9.0 (Très Alcalin)",
        chlorineScale1: "< 0.05 (Faible)",
        chlorineScale2: "0.05-0.15 (Bon)",
        chlorineScale3: "0.15-0.25",
        chlorineScale4: "> 0.25 (Élevé)",
        hardnessScale1: "< 15 (Très Douce)",
        hardnessScale2: "15-25 (Douce)",
        hardnessScale3: "25-35 (Moyenne)",
        hardnessScale4: "> 35 (Dure)",
        
        // Tooltips
        streetMapTooltip: "Carte de Rue",
        minimalMapTooltip: "Carte Minimale",
        satelliteMapTooltip: "Vue Satellite"
    }
};

/**
 * Get current language from localStorage or default to Turkish
 */
function getCurrentLanguage() {
    return localStorage.getItem('waterQualityLanguage') || 'tr';
}

/**
 * Set current language and save to localStorage
 */
function setCurrentLanguage(lang) {
    localStorage.setItem('waterQualityLanguage', lang);
}

/**
 * Get localized text
 * @param {string} key - The key to look up
 * @param {string} lang - Optional language override
 */
function getText(key, lang = null) {
    const currentLang = lang || getCurrentLanguage();
    return LOCALIZATION[currentLang]?.[key] || LOCALIZATION['tr'][key] || key;
}

/**
 * Update all UI text with current language
 */
function updateUILanguage() {
    const lang = getCurrentLanguage();
    
    // Dispatch custom event to notify all components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}
