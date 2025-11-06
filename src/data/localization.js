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
        satelliteMapTooltip: "Uydu Görünümü",
        
        // Info Button
        infoToggle: "Bilgi",
        infoTitle: "Bilgi",
        infoAboutTitle: "Uygulama Hakkında",
        infoAboutContent: "Bu uygulama, farklı su kaynaklarından alınan su kalitesi verilerini görselleştirmek için tasarlanmıştır. Harita üzerinde farklı parametreleri inceleyebilir ve karşılaştırabilirsiniz.",
        infoParametersTitle: "Ölçülen Parametreler",
        infoPhDescription: "Suyun asitlik/alkalinlik seviyesi (6.5-8.5 ideal)",
        infoChlorineDescription: "Dezenfeksiyon için kullanılan klor miktarı (0.05-0.25 mg/L önerilir)",
        infoHardnessDescription: "Sudaki kalsiyum ve magnezyum mineral miktarı (15-35 °dH orta)",
        infoHowToUseTitle: "Nasıl Kullanılır",
        infoHowToUse1: "Harita üzerindeki işaretleyicilere tıklayarak detaylı bilgi alın",
        infoHowToUse2: "Farklı veri katmanlarını seçerek interpolasyon haritalarını görüntüleyin",
        infoHowToUse3: "Sağ üst köşedeki seçenekler menüsünden görünümü özelleştirin",
        infoHowToUse4: "İşaretleyici türünü simge veya daire olarak değiştirebilirsiniz",
        infoDataSourceTitle: "Veri Kaynağı",
        infoDataSourceContent: "Veriler çeşitli su kaynaklarından doğrudan ölçümlerle toplanmıştır. Güncel tarih: Kasım 2025",
        infoFooter: "Between the Pipes",
        
        // About Button
        aboutToggle: "Biz Kimiz",
        aboutTitle: "Biz Kimiz",
        aboutMissionTitle: "Misyonumuz",
        aboutMissionContent: "Su kalitesinin herkes için anlaşılır ve erişilebilir olmasını sağlamak. İçme suyunun kalitesini şeffaf bir şekilde paylaşarak, toplum sağlığına katkıda bulunmayı hedefliyoruz.",
        aboutTeamTitle: "Ekibimiz",
        aboutTeamContent: "Between the Pipes, su kalitesi ve çevre sağlığı konusunda tutkulu bir öğrenci ekibi tarafından geliştirilmiştir. Bilim ve teknoloji kullanarak topluma faydalı çözümler üretmeyi amaçlıyoruz.",
        aboutProjectTitle: "Proje Hakkında",
        aboutProjectContent: "Bu proje, İstanbul'daki farklı su kaynaklarından toplanan gerçek verilerle su kalitesini görselleştirmektedir. pH, klor ve sertlik gibi önemli parametreleri harita üzerinde interaktif olarak sunmaktayız.",
        aboutContactTitle: "İletişim",
        aboutContactContent: "Sorularınız ve önerileriniz için bizimle iletişime geçebilirsiniz. Birlikte daha temiz ve sağlıklı bir gelecek için çalışalım!",
        aboutFooter: "Sağlıklı su, sağlıklı gelecek",
        
        // Process Button
        processToggle: "Sürecimiz",
        processTitle: "Sürecimiz",
        processOverviewTitle: "Genel Bakış",
        processOverviewContent: "Su kalitesi verilerini toplamak ve analiz etmek için kapsamlı bir bilimsel süreç izledik. Bu süreç, veri toplama, laboratuvar analizi ve dijital görselleştirme aşamalarından oluşmaktadır.",
        processStepsTitle: "Adım Adım Süreç",
        processStep1Title: "Örnekleme Noktalarının Belirlenmesi",
        processStep1Content: "İstanbul'un farklı bölgelerinden musluk suyu, su sebili ve arıtma tesisi örnekleme noktaları seçildi.",
        processStep2Title: "Su Örneklerinin Toplanması",
        processStep2Content: "Steril numune kaplarında, uygun koşullarda su örnekleri toplandı ve etiketlendi.",
        processStep3Title: "Laboratuvar Analizleri",
        processStep3Content: "pH kağıdı, pH metre ve SuTest cihazları kullanılarak pH, klor ve sertlik değerleri ölçüldü.",
        processStep4Title: "Veri Kaydı ve Doğrulama",
        processStep4Content: "Tüm ölçümler sistematik olarak kaydedildi ve çapraz kontrol ile doğrulandı.",
        processStep5Title: "Dijital Görselleştirme",
        processStep5Content: "Veriler, bu web uygulamasında interaktif haritalar ve interpolasyon katmanları olarak görselleştirildi.",
        processMethodsTitle: "Kullanılan Yöntemler",
        processMethodsContent: "Ölçümlerimizde üç farklı yöntem kullandık: pH kağıdı (kolorimetrik), pH metre (elektrometrik) ve SuTest cihazı. Klor ölçümleri için DPD yöntemi, sertlik ölçümleri için titrasyon yöntemi uygulandı. Tüm veriler üç kez tekrarlanarak güvenilirlik sağlandı.",
        processResultsTitle: "Sonuçlar",
        processResultsContent: "Toplanan veriler, İstanbul'daki su kalitesinin bölgesel farklılıklarını ortaya koydu. Harita üzerindeki görselleştirmeler, su kalitesi parametrelerinin coğrafi dağılımını anlaşılır kılmaktadır.",
        processFooter: "Bilimsel yöntemlerle güvenilir veriler"
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
        satelliteMapTooltip: "Satellite View",
        
        // Info Button
        infoToggle: "Information",
        infoTitle: "Information",
        infoAboutTitle: "About This Application",
        infoAboutContent: "This application is designed to visualize water quality data collected from various water sources. You can examine and compare different parameters on the map.",
        infoParametersTitle: "Measured Parameters",
        infoPhDescription: "Acidity/alkalinity level of water (6.5-8.5 ideal)",
        infoChlorineDescription: "Amount of chlorine used for disinfection (0.05-0.25 mg/L recommended)",
        infoHardnessDescription: "Amount of calcium and magnesium minerals in water (15-35 °dH medium)",
        infoHowToUseTitle: "How to Use",
        infoHowToUse1: "Click on markers on the map to get detailed information",
        infoHowToUse2: "Select different data layers to view interpolation maps",
        infoHowToUse3: "Customize the view from the options menu in the top right corner",
        infoHowToUse4: "You can change the marker type to icon or circle",
        infoDataSourceTitle: "Data Source",
        infoDataSourceContent: "Data is collected through direct measurements from various water sources. Current date: November 2025",
        infoFooter: "Between the Pipes",
        
        // About Button
        aboutToggle: "About Us",
        aboutTitle: "About Us",
        aboutMissionTitle: "Our Mission",
        aboutMissionContent: "To make water quality understandable and accessible for everyone. We aim to contribute to public health by transparently sharing drinking water quality information.",
        aboutTeamTitle: "Our Team",
        aboutTeamContent: "Between the Pipes is developed by a passionate student team focused on water quality and environmental health. We aim to create beneficial solutions for society using science and technology.",
        aboutProjectTitle: "About the Project",
        aboutProjectContent: "This project visualizes water quality using real data collected from various water sources in Istanbul. We present important parameters such as pH, chlorine, and hardness interactively on the map.",
        aboutContactTitle: "Contact",
        aboutContactContent: "Feel free to contact us with your questions and suggestions. Let's work together for a cleaner and healthier future!",
        aboutFooter: "Healthy water, healthy future",
        
        // Process Button
        processToggle: "Our Process",
        processTitle: "Our Process",
        processOverviewTitle: "Overview",
        processOverviewContent: "We followed a comprehensive scientific process to collect and analyze water quality data. This process consists of data collection, laboratory analysis, and digital visualization stages.",
        processStepsTitle: "Step-by-Step Process",
        processStep1Title: "Determining Sampling Points",
        processStep1Content: "Sampling points were selected from different regions of Istanbul including tap water, water fountains, and treatment facilities.",
        processStep2Title: "Collecting Water Samples",
        processStep2Content: "Water samples were collected in sterile sample containers under appropriate conditions and labeled.",
        processStep3Title: "Laboratory Analysis",
        processStep3Content: "pH, chlorine, and hardness values were measured using pH paper, pH meter, and SuTest devices.",
        processStep4Title: "Data Recording and Validation",
        processStep4Content: "All measurements were systematically recorded and verified through cross-checking.",
        processStep5Title: "Digital Visualization",
        processStep5Content: "Data was visualized in this web application as interactive maps and interpolation layers.",
        processMethodsTitle: "Methods Used",
        processMethodsContent: "We used three different methods in our measurements: pH paper (colorimetric), pH meter (electrometric), and SuTest device. DPD method for chlorine measurements and titration method for hardness measurements were applied. All data was repeated three times to ensure reliability.",
        processResultsTitle: "Results",
        processResultsContent: "The collected data revealed regional differences in water quality in Istanbul. The visualizations on the map make the geographical distribution of water quality parameters understandable.",
        processFooter: "Reliable data through scientific methods"
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
        satelliteMapTooltip: "Vue Satellite",
        
        // Info Button
        infoToggle: "Information",
        infoTitle: "Information",
        infoAboutTitle: "À Propos de Cette Application",
        infoAboutContent: "Cette application est conçue pour visualiser les données de qualité de l'eau collectées à partir de diverses sources d'eau. Vous pouvez examiner et comparer différents paramètres sur la carte.",
        infoParametersTitle: "Paramètres Mesurés",
        infoPhDescription: "Niveau d'acidité/alcalinité de l'eau (6.5-8.5 idéal)",
        infoChlorineDescription: "Quantité de chlore utilisée pour la désinfection (0.05-0.25 mg/L recommandé)",
        infoHardnessDescription: "Quantité de minéraux de calcium et de magnésium dans l'eau (15-35 °dH moyen)",
        infoHowToUseTitle: "Comment Utiliser",
        infoHowToUse1: "Cliquez sur les marqueurs sur la carte pour obtenir des informations détaillées",
        infoHowToUse2: "Sélectionnez différentes couches de données pour afficher les cartes d'interpolation",
        infoHowToUse3: "Personnalisez la vue depuis le menu d'options dans le coin supérieur droit",
        infoHowToUse4: "Vous pouvez changer le type de marqueur en icône ou cercle",
        infoDataSourceTitle: "Source de Données",
        infoDataSourceContent: "Les données sont collectées par des mesures directes de diverses sources d'eau. Date actuelle: Novembre 2025",
        infoFooter: "Between the Pipes",
        
        // About Button
        aboutToggle: "Qui Sommes-Nous",
        aboutTitle: "Qui Sommes-Nous",
        aboutMissionTitle: "Notre Mission",
        aboutMissionContent: "Rendre la qualité de l'eau compréhensible et accessible pour tous. Nous visons à contribuer à la santé publique en partageant de manière transparente les informations sur la qualité de l'eau potable.",
        aboutTeamTitle: "Notre Équipe",
        aboutTeamContent: "Between the Pipes est développé par une équipe d'étudiants passionnés par la qualité de l'eau et la santé environnementale. Nous visons à créer des solutions bénéfiques pour la société en utilisant la science et la technologie.",
        aboutProjectTitle: "À Propos du Projet",
        aboutProjectContent: "Ce projet visualise la qualité de l'eau en utilisant des données réelles collectées à partir de diverses sources d'eau à Istanbul. Nous présentons des paramètres importants tels que le pH, le chlore et la dureté de manière interactive sur la carte.",
        aboutContactTitle: "Contact",
        aboutContactContent: "N'hésitez pas à nous contacter pour vos questions et suggestions. Travaillons ensemble pour un avenir plus propre et plus sain!",
        aboutFooter: "Eau saine, avenir sain",
        
        // Process Button
        processToggle: "Notre Processus",
        processTitle: "Notre Processus",
        processOverviewTitle: "Aperçu",
        processOverviewContent: "Nous avons suivi un processus scientifique complet pour collecter et analyser les données de qualité de l'eau. Ce processus comprend la collecte de données, l'analyse en laboratoire et la visualisation numérique.",
        processStepsTitle: "Processus Étape par Étape",
        processStep1Title: "Détermination des Points d'Échantillonnage",
        processStep1Content: "Les points d'échantillonnage ont été sélectionnés dans différentes régions d'Istanbul, y compris l'eau du robinet, les fontaines d'eau et les installations de traitement.",
        processStep2Title: "Collecte d'Échantillons d'Eau",
        processStep2Content: "Des échantillons d'eau ont été collectés dans des contenants stériles dans des conditions appropriées et étiquetés.",
        processStep3Title: "Analyses en Laboratoire",
        processStep3Content: "Les valeurs de pH, de chlore et de dureté ont été mesurées à l'aide de papier pH, de pH-mètre et de dispositifs SuTest.",
        processStep4Title: "Enregistrement et Validation des Données",
        processStep4Content: "Toutes les mesures ont été systématiquement enregistrées et vérifiées par recoupement.",
        processStep5Title: "Visualisation Numérique",
        processStep5Content: "Les données ont été visualisées dans cette application Web sous forme de cartes interactives et de couches d'interpolation.",
        processMethodsTitle: "Méthodes Utilisées",
        processMethodsContent: "Nous avons utilisé trois méthodes différentes dans nos mesures: papier pH (colorimétrique), pH-mètre (électrométrique) et dispositif SuTest. La méthode DPD pour les mesures de chlore et la méthode de titrage pour les mesures de dureté ont été appliquées. Toutes les données ont été répétées trois fois pour assurer la fiabilité.",
        processResultsTitle: "Résultats",
        processResultsContent: "Les données collectées ont révélé des différences régionales dans la qualité de l'eau à Istanbul. Les visualisations sur la carte rendent compréhensible la distribution géographique des paramètres de qualité de l'eau.",
        processFooter: "Des données fiables grâce aux méthodes scientifiques"
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
