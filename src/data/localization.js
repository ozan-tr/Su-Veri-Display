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
        phScale1: "< 6.5 (Asidik)",
        phScale2: "6.5-7.0 (İdeal)",
        phScale3: "7.0-7.5 (İdeal - Nötr)",
        phScale4: "7.5-8.0 (İdeal)",
        phScale5: "8.0-8.5 (İdeal)",
        phScale6: "> 8.5 (Alkali)",
        chlorineScale1: "< 0.2 (Düşük)",
        chlorineScale2: "0.2-0.35 (İdeal)",
        chlorineScale3: "0.35-0.5 (İdeal)",
        chlorineScale4: "> 0.5 (Yüksek)",
        hardnessScale1: "< 50 (Çok Yumuşak)",
        hardnessScale2: "50-150 (İdeal)",
        hardnessScale3: "150-250 (İdeal)",
        hardnessScale4: "> 250 (Sert)",
        
        // Tooltips
        streetMapTooltip: "Sokak Haritası",
        minimalMapTooltip: "Minimal Harita",
        satelliteMapTooltip: "Uydu Görünümü",
        
        // Info Button
        infoToggle: "Bilgi",
        infoTitle: "Bilgi",
        infoSection1Title: "Deneyin Amacı ve Açıklaması",
        infoSection1Content: "Bu deney, İstanbul'un farklı semtlerinden alınan musluk suyu örneklerinin kalitesini incelemek amacıyla Irmak Caran ve Zeynep Karademir tarafından gerçekleştirilmiştir. Her semtten alınan su örneklerinin pH değeri, sertliği ve klor miktarı ölçülmüş; bu değerler suyun içme ve kullanım kalitesi açısından değerlendirilmiştir. Elde edilen veriler, İstanbul'un farklı bölgelerindeki su özelliklerinin nasıl değiştiğini gözlemlemek ve kent genelindeki su kalitesi hakkında farkındalık oluşturmak amacıyla görselleştirilmiştir.",
        infoSection2Title: "Ölçülen Parametrelerin Açıklaması",
        infoSection2PHTitle: "pH Değeri:",
        infoSection2PHContent: "pH, suyun asidik veya bazik özellik gösterip göstermediğini belirten bir ölçüdür. pH 7, nötrdür (ne asidik ne bazik). 7'nin altındaki değerler asidik, 7'nin üzerindekiler bazik olarak kabul edilir. İçme suları için ideal pH değeri genellikle 6,5 – 8,5 aralığındadır.",
        infoSection2HardnessTitle: "Sertlik (mg CaCO₃/L):",
        infoSection2HardnessContent: "Suyun sertliği, içindeki kalsiyum (Ca²⁺) ve magnezyum (Mg²⁺) iyonlarının miktarına bağlıdır. Sert su, bu minerallerin yüksek olduğu sudur ve sabunla köpürmesi zordur. Çok yumuşak su, borularda aşındırıcı etki gösterebilir. İçme suyu için önerilen sertlik genellikle 50–250 mg/L CaCO₃ aralığındadır.",
        infoSection2ChlorineTitle: "Klor (Cl₂):",
        infoSection2ChlorineContent: "Klor, suyun dezenfeksiyonu amacıyla kullanılan bir maddedir. Mikroorganizmaları öldürerek suyu içme için güvenli hâle getirir. Fazla klor ise suyun tadını ve kokusunu olumsuz etkileyebilir. İçme suyu için önerilen serbest klor miktarı genellikle 0,2 – 0,5 mg/L aralığındadır.",
        infoSection3Title: "Haritanın (Sitenin) Kullanımı",
        infoSection3Content: "Sitemiz, İstanbul haritası üzerine yerleştirilmiş etkileşimli bir yapıdadır. Kullanımı oldukça basittir:",
        infoSection3Point1: "Harita üzerinde görmek istediğiniz semtin üzerine tıklayın.",
        infoSection3Point2: "Karşınıza o semte ait musluk suyu pH, sertlik ve klor değerleri çıkacaktır.",
        infoSection3Point3: "Haritanın lejantında parametrelerin olması gereken değerleri yazmaktadır.",
        infoSection3Point4: "Böylece yaşadığınız bölgedeki suyun kalitesini kolayca diğer semtlerle karşılaştırabilirsiniz.",
        infoSection4Title: "Verilerin Kaynakları",
        infoSection4Content: "Deneyde kullanılan tüm veriler:",
        infoSection4Point1: "Irmak Caran ve Zeynep Karademir tarafından, İstanbul'un farklı semtlerinden toplanan musluk suyu örneklerinden laboratuvar ortamında yapılan doğrudan ölçümler sonucunda elde edilmiştir.",
        infoSection4Point2: "Ölçümler, standart su analizi yöntemlerine uygun olarak yapılmıştır.",
        infoSection4Point3: "pH ölçümleri pH metre ile, sertlik değerleri ve klor miktarı titrasyon yöntemiyle belirlenmiştir.",
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
        phScale1: "< 6.5 (Acidic)",
        phScale2: "6.5-7.0 (Ideal)",
        phScale3: "7.0-7.5 (Ideal - Neutral)",
        phScale4: "7.5-8.0 (Ideal)",
        phScale5: "8.0-8.5 (Ideal)",
        phScale6: "> 8.5 (Alkaline)",
        chlorineScale1: "< 0.2 (Low)",
        chlorineScale2: "0.2-0.35 (Ideal)",
        chlorineScale3: "0.35-0.5 (Ideal)",
        chlorineScale4: "> 0.5 (High)",
        hardnessScale1: "< 50 (Very Soft)",
        hardnessScale2: "50-150 (Ideal)",
        hardnessScale3: "150-250 (Ideal)",
        hardnessScale4: "> 250 (Hard)",
        
        // Tooltips
        streetMapTooltip: "Street Map",
        minimalMapTooltip: "Minimal Map",
        satelliteMapTooltip: "Satellite View",
        
        // Info Button
        infoToggle: "Information",
        infoTitle: "Information",
        infoSection1Title: "Purpose and Description of the Experiment",
        infoSection1Content: "This experiment was conducted by Irmak Caran and Zeynep Karademir with the aim of analyzing the quality of tap water samples collected from different districts of Istanbul. For each district, the pH value, hardness, and chlorine content of the water samples were measured and evaluated in terms of drinking and usage quality. The obtained data were visualized in order to observe how the characteristics of tap water vary across different areas of Istanbul and to raise awareness about the overall water quality in the city.",
        infoSection2Title: "Explanation of the Measured Parameters",
        infoSection2PHTitle: "pH Value:",
        infoSection2PHContent: "The pH value indicates whether water is acidic or basic. A pH of 7 is neutral (neither acidic nor basic). Values below 7 indicate acidity, while values above 7 indicate basicity. For drinking water, the ideal pH range is generally between 6.5 and 8.5.",
        infoSection2HardnessTitle: "Hardness (mg CaCO₃/L):",
        infoSection2HardnessContent: "Water hardness depends on the amount of calcium (Ca²⁺) and magnesium (Mg²⁺) ions present in it. Hard water contains a high concentration of these minerals and does not lather easily with soap. Very soft water, on the other hand, can have a corrosive effect on pipes. The recommended hardness for drinking water is generally between 50 and 250 mg/L CaCO₃.",
        infoSection2ChlorineTitle: "Chlorine (Cl₂):",
        infoSection2ChlorineContent: "Chlorine is a substance used for water disinfection. It kills microorganisms, making the water safe to drink. However, excessive chlorine can negatively affect the taste and smell of the water. For drinking water, the recommended free chlorine concentration is generally between 0.2 and 0.5 mg/L.",
        infoSection3Title: "How to Use the Map (Website)",
        infoSection3Content: "Our website features an interactive map of Istanbul. It is very simple to use:",
        infoSection3Point1: "Click on the district you wish to view on the map.",
        infoSection3Point2: "The pH, hardness, and chlorine values of the tap water from that district will appear on the screen.",
        infoSection3Point3: "The legend of the map shows the ideal value ranges for each parameter.",
        infoSection3Point4: "This allows you to easily compare the water quality in your area with that of other districts in Istanbul.",
        infoSection4Title: "Sources of the Data",
        infoSection4Content: "All data used in this experiment were obtained through:",
        infoSection4Point1: "Direct laboratory measurements conducted by Irmak Caran and Zeynep Karademir using tap water samples collected from various districts of Istanbul.",
        infoSection4Point2: "The measurements were performed in accordance with standard water analysis methods.",
        infoSection4Point3: "pH values were measured using a pH meter, while hardness and chlorine levels were determined by titration in the laboratory.",
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
        phScale1: "< 6,5 (Acide)",
        phScale2: "6,5-7,0 (Idéal)",
        phScale3: "7,0-7,5 (Idéal - Neutre)",
        phScale4: "7,5-8,0 (Idéal)",
        phScale5: "8,0-8,5 (Idéal)",
        phScale6: "> 8,5 (Alcalin)",
        chlorineScale1: "< 0,2 (Faible)",
        chlorineScale2: "0,2-0,35 (Idéal)",
        chlorineScale3: "0,35-0,5 (Idéal)",
        chlorineScale4: "> 0,5 (Élevé)",
        hardnessScale1: "< 50 (Très Douce)",
        hardnessScale2: "50-150 (Idéal)",
        hardnessScale3: "150-250 (Idéal)",
        hardnessScale4: "> 250 (Dure)",
        
        // Tooltips
        streetMapTooltip: "Carte de Rue",
        minimalMapTooltip: "Carte Minimale",
        satelliteMapTooltip: "Vue Satellite",
        
        // Info Button
        infoToggle: "Information",
        infoTitle: "Information",
        infoSection1Title: "Objectif et Description de l'Expérience",
        infoSection1Content: "Cette expérience a été réalisée par Irmak Caran et Zeynep Karademir dans le but d'analyser la qualité de l'eau du robinet prélevée dans différents quartiers d'Istanbul. Pour chaque quartier, les valeurs de pH, la dureté et la teneur en chlore de l'eau ont été mesurées et évaluées en fonction de la qualité de l'eau potable et domestique. Les données obtenues ont été visualisées afin d'observer comment les caractéristiques de l'eau varient d'un quartier à l'autre et de sensibiliser le public à la qualité de l'eau dans l'ensemble de la ville d'Istanbul.",
        infoSection2Title: "Explication des Paramètres Mesurés",
        infoSection2PHTitle: "pH :",
        infoSection2PHContent: "Le pH indique si l'eau présente un caractère acide ou basique. Un pH de 7 est neutre (ni acide ni basique). Les valeurs inférieures à 7 indiquent une eau acide, tandis que les valeurs supérieures à 7 indiquent une eau basique. Pour l'eau potable, la plage idéale du pH se situe généralement entre 6,5 et 8,5.",
        infoSection2HardnessTitle: "Dureté (mg CaCO₃/L) :",
        infoSection2HardnessContent: "La dureté de l'eau dépend de la quantité d'ions calcium (Ca²⁺) et magnésium (Mg²⁺) qu'elle contient. Une eau « dure » contient une forte concentration de ces minéraux et mousse difficilement avec le savon. Une eau trop douce peut être corrosive pour les canalisations. Pour l'eau potable, la dureté recommandée se situe généralement entre 50 et 250 mg/L CaCO₃.",
        infoSection2ChlorineTitle: "Chlore (Cl₂) :",
        infoSection2ChlorineContent: "Le chlore est une substance utilisée pour désinfecter l'eau. Il élimine les micro-organismes et rend l'eau sûre à la consommation. Cependant, un excès de chlore peut altérer le goût et l'odeur de l'eau. Pour l'eau potable, la concentration recommandée en chlore libre se situe généralement entre 0,2 et 0,5 mg/L.",
        infoSection3Title: "Utilisation de la Carte (du Site)",
        infoSection3Content: "Notre site présente une carte interactive d'Istanbul. Son utilisation est très simple :",
        infoSection3Point1: "Cliquez sur le quartier que vous souhaitez consulter.",
        infoSection3Point2: "Les valeurs de pH, de dureté et de chlore de l'eau du robinet de ce quartier apparaîtront à l'écran.",
        infoSection3Point3: "La légende de la carte indique les plages de valeurs idéales pour chaque paramètre.",
        infoSection3Point4: "Vous pouvez ainsi comparer facilement la qualité de l'eau de votre quartier avec celle des autres zones d'Istanbul.",
        infoSection4Title: "Sources des Données",
        infoSection4Content: "Toutes les données utilisées dans cette expérience proviennent de :",
        infoSection4Point1: "Mesures directes effectuées par Irmak Caran et Zeynep Karademir, à partir d'échantillons d'eau du robinet prélevés dans différents quartiers d'Istanbul.",
        infoSection4Point2: "Les analyses ont été réalisées conformément aux méthodes standards d'analyse de l'eau.",
        infoSection4Point3: "Le pH a été mesuré à l'aide d'un pH-mètre, tandis que la dureté et la teneur en chlore ont été déterminées par titration en laboratoire.",
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
