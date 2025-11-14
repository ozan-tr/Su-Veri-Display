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
        restartTutorial: "Turu Yeniden Başlat",
        
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
        processStep1Title: "1. Numunelerin Toplanması",
        processStep1Content: "Projenin ilk aşamasında İstanbul'un farklı bölgelerinden musluk suyu numuneleri temin edilmiştir. Numuneler öğretmenlerimiz aracılığıyla toplanmış, her birinin geldiği semt veya mahalle açık şekilde not edilmiştir. Numunelerin karışmasını önlemek amacıyla her bir örnek numaralandırılmış ve uygun biçimde etiketlenmiştir.<br><br>Toplama sürecinde kullanılan kaplar steril numune kaplarıdır. Böylece dış etkenlerin (özellikle sabun veya deterjan kalıntılarının) ölçüm sonuçlarını etkilemesi engellenmiştir. Numuneler kapakları sıkıca kapatılarak laboratuvara ulaştırılmış, ölçümler gerçekleştirilene kadar doğrudan güneş ışığı almayan serin bir ortamda saklanmıştır.",
        processStep2Title: "2. pH Ölçümleri",
        processStep2Content: "Suların asidik veya bazik özelliklerini belirlemek amacıyla pH ölçümleri üç farklı yöntemle gerçekleştirilmiştir: <strong>pH metre</strong>, <strong>pH kağıdı</strong> ve <strong>asit-baz titrasyonu</strong>. Bu şekilde hem sayısal doğruluk hem de görsel kontrol sağlanmıştır.<br><br><ul><li><strong>pH metre ölçümü:</strong> Ölçüm öncesinde pH metre 4.00 ve 7.00 tampon çözeltileriyle kalibre edilmiştir. Her bir numune oda sıcaklığında (yaklaşık 25°C) bekletildikten sonra cihazın elektrodu numuneye daldırılarak kararlı ölçüm değeri kaydedilmiştir. Elektrot her ölçüm arasında saf su ile durulanmış ve kurulmuştur.</li><li><strong>pH kağıdı ile ölçüm:</strong> Numunelerin pH değerleri, pH indikatör kağıdıyla da test edilmiştir. Her numuneden bir damla pH kağıdına temas ettirilmiş, meydana gelen renk değişimi üretici firmanın renk skalasıyla karşılaştırılarak pH aralığı belirlenmiştir.</li><li><strong>Titrasyon yöntemi:</strong> Asit-baz titrasyonu kullanılarak pH değeri dolaylı olarak hesaplanmıştır. Bu işlemde fenolftalein indikatörü kullanılmış, numuneye belirli hacimde NaOH veya HCl çözeltisi damlatılarak nötleşme noktası gözlemlenmiştir. Harcanan çözelti miktarına göre pH değeri hesaplanmıştır.</li></ul><br>Üç yöntemin sonuçları karşılaştırılarak ortalama bir pH değeri elde edilmiştir. Bu çoklu ölçüm yaklaşımı, hata payını azaltmayı ve sonuçların güvenilirliğini artırmayı amaçlamıştır.",
        processStep3Title: "3. Klor Ölçümleri",
        processStep3Content: "Suların klor düzeyini belirlemek için <strong>kolorimetrik yöntem</strong> kullanılmıştır. Bu yöntem, sudaki serbest klorun belirli reaktiflerle etkileşmesi sonucu oluşan renk değişimine dayanmaktadır.<br><br>Her bir numuneye önceden belirlenen miktarda <strong>DPD (N,N-dietil-p-fenilendiamin)</strong> reaktifi eklenmiş, birkaç saniye içinde oluşan pembe renk tonunun yoğunluğu gözlemlenmiştir. Renk skalası kullanılarak her bir numunenin serbest klor miktarı mg/L cinsinden belirlenmiştir.<br><br>Bu yöntemle elde edilen veriler, şebeke sularındaki dezenfeksiyon düzeylerinin güvenli sınırlar içinde olup olmadığını değerlendirmek için kullanılmıştır. Ölçümler sırasında reaktiflerin tazeliğine, sıcaklık değişimlerine ve ışık koşullarına dikkat edilmiştir; çünkü bu faktörlerin renk yoğunluğu üzerinde etkisi olabilmektedir.",
        processStep4Title: "4. Sertlik Ölçümleri",
        processStep4Content: "Suyun sertlik derecesi, yani kalsiyum (Ca²⁺) ve magnezyum (Mg²⁺) iyonlarının yoğunluğu, <strong>EDTA titrasyon yöntemi</strong> ile belirlenmiştir. Bu yöntem su kimyasında en yaygın sertlik ölçüm yöntemlerinden biridir.<br><br>Her numuneden belirli bir hacim alınmış, içerisine <strong>amonyum tampon çözeltisi (pH 10)</strong> ve <strong>eriochrome black T</strong> indikatörü eklenmiştir. Çözelti başlangıçta şarap kırmızısı rengini almıştır. Ardından 0.01 M EDTA çözeltisi yavaş yavaş damlatılarak renk değişimi maviye dönene kadar titrasyon yapılmıştır.<br><br>Renk değişiminin gerçekleştiği nokta eşdeğerlik noktası olarak kabul edilmiştir. Harcanan EDTA hacmi kaydedilmiş, bu değer kullanılarak toplam sertlik <strong>mg CaCO₃/L</strong> cinsinden hesaplanmıştır.<br><br>Elde edilen sonuçlar, İstanbul'un farklı bölgelerindeki su sertliği farklarını karşılaştırmak için tablo haline getirilmiştir. Özellikle kireç oranı yüksek bölgelerde sertlik değerlerinin belirgin şekilde arttığı gözlemlenmiştir.",
        processStep5Title: "5. Verilerin Kaydedilmesi ve Analizi",
        processStep5Content: "Tüm ölçüm sonuçları dijital tablolar halinde düzenlenmiştir. Veriler, pH – klor – sertlik parametreleri üzerinden bölgesel olarak sınıflandırılmıştır. Ardından ortalama değerler, minimum ve maksimum aralıklar hesaplanmıştır.<br><br>Sonuçların daha anlaşılır hale getirilmesi amacıyla grafikler hazırlanmış, su kalitesi göstergeleri renk kodlamasıyla sunulmuştur. Bu analiz sayesinde İstanbul'un semtleri arasında belirli farklılıkların olduğu, özellikle sertlik ve klor oranlarında bölgesel değişimler bulunduğu tespit edilmiştir.<br><br>Elde edilen tüm veriler proje raporuna dahil edilerek değerlendirilmiş, sonuçların ilerideki çalışmalar için referans oluşturabileceği sonucuna varılmıştır.",
        processFooter: "Bilimsel yöntemlerle güvenilir veriler",
        
        // Tutorial
        tutorialWelcomeTitle: "Between the Pipes'e Hoş Geldiniz!",
        tutorialWelcomeContent: "İstanbul'daki su kalitesi verilerini keşfetmek için size kısa bir tur sunalım mı? Bu tur, uygulamanın özelliklerini anlamanıza yardımcı olacak.",
        tutorialStart: "Tura Başla",
        tutorialSkip: "Atla",
        tutorialNext: "İleri",
        tutorialFinish: "Bitir",
        optionsMenuTutorialTitle: "Seçenekler Menüsü",
        optionsMenuTutorialContent: "Buradan tüm kontrollere erişebilirsiniz. Dil seçimi, veri katmanları ve harita görünümü ayarlarını burada bulabilirsiniz.",
        languageTutorialTitle: "Dil Seçimi",
        languageTutorialContent: "Uygulamayı Türkçe, İngilizce veya Fransızca kullanabilirsiniz. Seçiminiz tarayıcınızda kaydedilir.",
        layerControlTutorialTitle: "Veri Katmanları",
        layerControlTutorialContent: "Farklı su kalitesi parametrelerini (pH, Klor, Sertlik) görselleştirmek için bu katmanlar arasında geçiş yapın. Her katman, farklı bir parametre için renk interpolasyonu gösterir.",
        infoButtonTutorialTitle: "Bilgi ve Yardım",
        infoButtonTutorialContent: "Bu butonlar deneyin detayları, veri toplama süreci ve ekip hakkında bilgi içerir. Oklar ile modallar arasında geçiş yapabilirsiniz.",
        mapInteractionTutorialTitle: "Harita Kullanımı",
        mapInteractionTutorialContent: "Haritayı yakınlaştırıp uzaklaştırabilir, işaretleyicilere tıklayarak detaylı su kalitesi verilerini görebilirsiniz. İyi keşifler!"
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
        restartTutorial: "Restart Tutorial",
        
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
        processStep1Title: "1. Sample Collection",
        processStep1Content: "In the initial stage of the project, tap water samples were obtained from various districts of Istanbul. The samples were collected through our teachers, and the district or neighborhood from which each sample originated was clearly recorded. To prevent any mix-up, each sample was numbered and appropriately labeled. The containers used for sample collection were sterile sampling bottles, ensuring that external factors, particularly residues from soap or detergent, would not affect the measurement results. The samples were tightly sealed and transported to the laboratory, where they were stored in a cool environment away from direct sunlight until measurements were conducted.",
        processStep2Title: "2. pH Measurements",
        processStep2Content: "To determine the acidic or basic properties of the water, pH measurements were performed using three different methods: <strong>pH meter</strong>, <strong>pH paper</strong>, and <strong>acid-base titration</strong>. This approach ensured both numerical accuracy and visual confirmation.<br><br><ul><li><strong>pH meter measurement:</strong> Prior to measurement, the pH meter was calibrated using pH 4.00 and 7.00 buffer solutions. Each sample was allowed to equilibrate at room temperature (approximately 25°C) before the electrode was immersed, and a stable reading was recorded. The electrode was rinsed with distilled water and dried between measurements.</li><li><strong>pH paper measurement:</strong> A small drop of each sample was applied to pH indicator paper. The resulting color change was compared to the manufacturer's color chart to determine the approximate pH range.</li><li><strong>Titration method:</strong> Indirect pH determination was performed via acid-base titration. Phenolphthalein was used as an indicator, and the sample was titrated with a NaOH or HCl solution until the neutralization point was observed. The volume of solution used was recorded to calculate the pH value.</li></ul><br>The results from all three methods were compared, and an average pH value was calculated. This multi-method approach aimed to reduce errors and increase the reliability of the results.",
        processStep3Title: "3. Chlorine Measurements",
        processStep3Content: "Chlorine levels in the water were determined using a <strong>colorimetric method</strong>, which is based on the color change that occurs when free chlorine reacts with specific reagents.<br><br>A predetermined amount of <strong>DPD (N,N-diethyl-p-phenylenediamine)</strong> reagent was added to each sample. The intensity of the resulting pink coloration was observed within a few seconds. The color scale was used to quantify the free chlorine concentration in mg/L.<br><br>This method provided an assessment of whether the disinfection levels of the tap water were within safe limits. During measurements, the freshness of the reagents, temperature fluctuations, and lighting conditions were carefully controlled, as these factors can affect color intensity.",
        processStep4Title: "4. Hardness Measurements",
        processStep4Content: "Water hardness, referring to the concentration of calcium (Ca²⁺) and magnesium (Mg²⁺) ions, was determined using the <strong>EDTA titration method</strong>, which is widely applied in water chemistry.<br><br>A specific volume of each sample was taken, and <strong>ammonium buffer solution (pH 10)</strong> along with <strong>eriochrome black T</strong> indicator was added. Initially, the solution displayed a wine-red color. Then, 0.01 M EDTA solution was added dropwise until the color changed to blue, indicating the endpoint of titration.<br><br>The volume of EDTA used was recorded, and total hardness was calculated in <strong>mg CaCO₃/L</strong>. The results were tabulated to compare water hardness across different districts of Istanbul. Particularly, regions with high limestone content showed significantly increased hardness values.",
        processStep5Title: "5. Data Recording and Analysis",
        processStep5Content: "All measurement results were organized into digital spreadsheets. The data were classified regionally based on pH, chlorine, and hardness parameters. Average, minimum, and maximum values were then calculated.<br><br>To facilitate understanding, graphs were prepared and water quality indicators were presented using color coding. This analysis revealed notable differences between Istanbul districts, especially in terms of hardness and chlorine levels.<br><br>All collected data were included in the project report for evaluation, and it was concluded that the results could serve as a reference for future studies.",
        
        // Tutorial
        tutorialWelcomeTitle: "Welcome to Between the Pipes!",
        tutorialWelcomeContent: "Would you like a quick tour to explore water quality data across Istanbul? This tour will help you understand the application's features.",
        tutorialStart: "Start Tour",
        tutorialSkip: "Skip",
        tutorialNext: "Next",
        tutorialFinish: "Finish",
        optionsMenuTutorialTitle: "Options Menu",
        optionsMenuTutorialContent: "Access all controls from here. You can find language selection, data layers, and map view settings in this menu.",
        languageTutorialTitle: "Language Selection",
        languageTutorialContent: "You can use the application in Turkish, English, or French. Your choice is saved in your browser.",
        layerControlTutorialTitle: "Data Layers",
        layerControlTutorialContent: "Switch between layers to visualize different water quality parameters (pH, Chlorine, Hardness). Each layer shows color interpolation for a different parameter.",
        infoButtonTutorialTitle: "Information and Help",
        infoButtonTutorialContent: "These buttons contain details about the experiment, data collection process, and team information. You can navigate between modals using arrows.",
        mapInteractionTutorialTitle: "Map Usage",
        mapInteractionTutorialContent: "You can zoom in and out on the map, click on markers to see detailed water quality data. Happy exploring!"
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
        restartTutorial: "Redémarrer le Tutoriel",
        
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
        processStep1Title: "1. Collecte des Échantillons",
        processStep1Content: "Lors de la première étape du projet, des échantillons d'eau du robinet ont été obtenus dans différents quartiers d'Istanbul. Les échantillons ont été collectés par l'intermédiaire de nos enseignants, et le quartier ou le voisinage d'origine de chaque échantillon a été clairement noté. Pour éviter toute confusion, chaque échantillon a été numéroté et étiqueté de manière appropriée.<br><br>Les contenants utilisés pour la collecte des échantillons étaient des flacons stériles, garantissant que des facteurs externes, notamment les résidus de savon ou de détergent, n'influenceraient pas les résultats des mesures. Les échantillons ont été soigneusement fermés et transportés au laboratoire, où ils ont été conservés dans un endroit frais à l'abri de la lumière directe du soleil jusqu'à la réalisation des mesures.",
        processStep2Title: "2. Mesures du pH",
        processStep2Content: "Pour déterminer les propriétés acides ou basiques de l'eau, les mesures du pH ont été réalisées par trois méthodes différentes : <strong>pH-mètre</strong>, <strong>papier pH</strong> et <strong>titrage acide-base</strong>. Cette approche a permis d'assurer à la fois la précision numérique et le contrôle visuel.<br><br><ul><li><strong>Mesure au pH-mètre :</strong> Avant la mesure, le pH-mètre a été étalonné avec des solutions tampon pH 4,00 et 7,00. Chaque échantillon a été laissé à température ambiante (environ 25°C) avant que l'électrode ne soit immergée, et la lecture stable a été enregistrée. L'électrode a été rincée à l'eau distillée et séchée entre les mesures.</li><li><strong>Mesure au papier pH :</strong> Une petite goutte de chaque échantillon a été appliquée sur le papier indicateur. Le changement de couleur obtenu a été comparé à l'échelle de couleur du fabricant pour déterminer la plage approximative de pH.</li><li><strong>Méthode de titrage :</strong> La détermination indirecte du pH a été réalisée par titrage acide-base. La phénolphtaléine a été utilisée comme indicateur, et l'échantillon a été titré avec une solution de NaOH ou HCl jusqu'à l'observation du point de neutralisation. Le volume de solution utilisé a été enregistré pour calculer la valeur du pH.</li></ul><br>Les résultats des trois méthodes ont été comparés et une valeur moyenne de pH a été calculée. Cette approche multi-méthode visait à réduire les erreurs et à augmenter la fiabilité des résultats.",
        processStep3Title: "3. Mesures du Chlore",
        processStep3Content: "Les niveaux de chlore dans l'eau ont été déterminés par une <strong>méthode colorimétrique</strong>, basée sur le changement de couleur qui se produit lorsque le chlore libre réagit avec des réactifs spécifiques.<br><br>Une quantité prédéterminée de réactif <strong>DPD (N,N-diéthyl-p-phénylènediamine)</strong> a été ajoutée à chaque échantillon. L'intensité de la coloration rose résultante a été observée en quelques secondes. L'échelle de couleur a été utilisée pour quantifier la concentration en chlore libre en mg/L.<br><br>Cette méthode a permis d'évaluer si les niveaux de désinfection de l'eau du robinet étaient dans les limites de sécurité. Lors des mesures, la fraîcheur des réactifs, les fluctuations de température et les conditions d'éclairage ont été soigneusement contrôlées, car ces facteurs peuvent influencer l'intensité de la couleur.",
        processStep4Title: "4. Mesures de la Dureté",
        processStep4Content: "La dureté de l'eau, c'est-à-dire la concentration en ions calcium (Ca²⁺) et magnésium (Mg²⁺), a été déterminée par la <strong>méthode de titrage à l'EDTA</strong>, largement utilisée en chimie de l'eau.<br><br>Un volume spécifique de chaque échantillon a été prélevé, et une <strong>solution tampon ammoniacale (pH 10)</strong> ainsi que l'indicateur <strong>eriochrome black T</strong> ont été ajoutés. Initialement, la solution présentait une couleur rouge vin. Ensuite, la solution d'EDTA 0,01 M a été ajoutée goutte à goutte jusqu'à ce que la couleur passe au bleu, indiquant le point final du titrage.<br><br>Le volume d'EDTA utilisé a été enregistré et la dureté totale a été calculée en <strong>mg CaCO₃/L</strong>. Les résultats ont été mis sous forme de tableau pour comparer la dureté de l'eau dans différents quartiers d'Istanbul. En particulier, les zones à forte teneur en calcaire ont présenté des valeurs de dureté nettement plus élevées.",
        processStep5Title: "5. Enregistrement et Analyse des Données",
        processStep5Content: "Tous les résultats des mesures ont été organisés dans des tableaux numériques. Les données ont été classées par région selon les paramètres de pH, chlore et dureté. Les valeurs moyennes, minimales et maximales ont ensuite été calculées.<br><br>Pour faciliter la compréhension, des graphiques ont été préparés et les indicateurs de qualité de l'eau ont été présentés avec un code couleur. Cette analyse a révélé des différences notables entre les quartiers d'Istanbul, notamment en termes de dureté et de taux de chlore.<br><br>Toutes les données collectées ont été intégrées au rapport de projet pour évaluation, et il a été conclu que les résultats pouvaient servir de référence pour de futures études.",
        
        // Tutorial
        tutorialWelcomeTitle: "Bienvenue sur Between the Pipes !",
        tutorialWelcomeContent: "Souhaitez-vous une visite rapide pour explorer les données de qualité de l'eau à Istanbul ? Cette visite vous aidera à comprendre les fonctionnalités de l'application.",
        tutorialStart: "Commencer la visite",
        tutorialSkip: "Passer",
        tutorialNext: "Suivant",
        tutorialFinish: "Terminer",
        optionsMenuTutorialTitle: "Menu des options",
        optionsMenuTutorialContent: "Accédez à tous les contrôles depuis ici. Vous pouvez trouver la sélection de langue, les couches de données et les paramètres de vue de carte dans ce menu.",
        languageTutorialTitle: "Sélection de la langue",
        languageTutorialContent: "Vous pouvez utiliser l'application en turc, anglais ou français. Votre choix est enregistré dans votre navigateur.",
        layerControlTutorialTitle: "Couches de données",
        layerControlTutorialContent: "Basculez entre les couches pour visualiser différents paramètres de qualité de l'eau (pH, Chlore, Dureté). Chaque couche affiche une interpolation de couleur pour un paramètre différent.",
        infoButtonTutorialTitle: "Information et aide",
        infoButtonTutorialContent: "Ces boutons contiennent des détails sur l'expérience, le processus de collecte de données et les informations sur l'équipe. Vous pouvez naviguer entre les modales en utilisant les flèches.",
        mapInteractionTutorialTitle: "Utilisation de la carte",
        mapInteractionTutorialContent: "Vous pouvez zoomer et dézoomer sur la carte, cliquer sur les marqueurs pour voir les données détaillées de qualité de l'eau. Bonne exploration !"
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

// Expose functions globally for use by other components
window.getCurrentLanguage = getCurrentLanguage;
window.setCurrentLanguage = setCurrentLanguage;
window.getText = getText;
window.updateUILanguage = updateUILanguage;
