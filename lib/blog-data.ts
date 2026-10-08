export interface BlogPost {
  slug: string;
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  description: { ar: string; en: string };
  keywords: { ar: string[]; en: string[] };
  sections: { ar: BlogSection[]; en: BlogSection[] };
  whyUs: { ar: string[]; en: string[] };
  areas: { ar: string[]; en: string[] };
  cta: { ar: { title: string; description: string; button: string }; en: { title: string; description: string; button: string } };
}

interface BlogSection {
  title: string;
  body: string;
}

export const BLOG_SLUGS = [
  "villa-construction",
  "mosque-construction",
  "commercial-finishing",
  "sandblasting",
  "vision-2030-smart-cities-construction",
  "commercial-finishing-malls-airports",
  "turnkey-villa-construction-guide",
  "mosque-jamea-construction-standards",
  "mep-contracting-electrical-plumbing-hvac",
  "industrial-sandblasting-surface-prep",
  "construction-site-safety-ksa",
  "construction-quality-standards-ksa",
  "eurotech-me-official-agent-saudi-arabia-it-solutions",
  "choosing-general-contractor-riyadh-jeddah-qassim",
  "building-maintenance-services-ksa",
  "psychology-of-space-commercial-fitouts",
  "hidden-roi-premium-mep-systems",
  "advanced-waterproofing-guide",
  "smart-home-villa-construction",
  "epoxy-flooring-guide-saudi-arabia",
  "interior-finishing-guide-saudi-arabia",
  "modern-construction-equipment-saudi-arabia",
  "saudi-building-code-safety-guide",
  "preventive-maintenance-contracts-buildings",
  "building-permits-regulations-guide-saudi-arabia",
  "industrial-facility-finishing-factories",
  "commercial-supply-building-finishing-materials",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

export const BLOG_POSTS: Record<BlogSlug, BlogPost> = {
  "villa-construction": {
    slug: "villa-construction",
    title: {
      ar: "بناء فلل عظم وتشطيب – تسليم مفتاح",
      en: "Villa Construction & Finishing – Turnkey Delivery",
    },
    subtitle: {
      ar: "من الأساسات إلى التشطيب الكامل في الرياض وجدة والقصيم",
      en: "From Foundation to Full Finishing in Riyadh, Jeddah & Qassim",
    },
    description: {
      ar: "لمعة العربية للمقاولات – بناء فلل عظم وتشطيب كامل بنظام تسليم مفتاح. تشطيبات داخلية وخارجية، أعمال كهروميكانيكية، تصميم وتنفيذ بأعلى معايير الجودة. خبرة +20 عامًا في الرياض وجدة والقصيم.",
      en: "Lamaat Al-Arabiya Contracting – Villa construction from foundation to turnkey delivery. Shell & core, interior/exterior finishing, MEP systems. 20+ years in Riyadh, Jeddah & Qassim.",
    },
    keywords: {
      ar: [
        "بناء فلل عظم وتشطيب", "بناء فلل تسليم مفتاح", "شركة بناء فلل في الرياض",
        "بناء فلل القصيم", "بناء فلل جدة", "تشطيب فلل داخلي وخارجي",
        "مقاول فلل السعودية", "لمعة العربية بناء فلل", "لمعه العربية", "لمعة", "لمعه",
        "شركة مقاولات فلل الرياض", "فلل تسليم مفتاح المملكة",
      ],
      en: [
        "villa construction Saudi Arabia", "turnkey villa Riyadh", "villa building Qassim",
        "villa finishing Jeddah", "shell and core villa KSA", "residential construction Saudi",
        "villa contractor Riyadh", "Lamaat Al-Arabiya villa",
      ],
    },
    sections: {
      ar: [
        {
          title: "بناء العظم (الهيكل الإنشائي)",
          body: "تنفيذ كامل للأعمال الإنشائية: حفر وتأسيس، صب الأساسات والقواعد، أعمال الخرسانة المسلحة، بناء الجدران، وصب الأسقف. نلتزم بالمخططات الهندسية المعتمدة ومعايير كود البناء السعودي.",
        },
        {
          title: "التشطيبات الداخلية",
          body: "أعمال البياض والدهانات، تركيب الأرضيات (رخام، بورسلان، باركيه)، تركيب الأبواب الداخلية والنوافذ، أعمال الجبس والديكورات، تركيب المطابخ والخزائن المدمجة.",
        },
        {
          title: "التشطيبات الخارجية",
          body: "تنفيذ واجهات حجرية وطوب، أعمال العزل المائي والحراري، تركيب النوافذ الخارجية والأبواب الرئيسية، تنسيق الحدائق والمسابح والأسوار الخارجية.",
        },
        {
          title: "الأعمال الكهروميكانيكية",
          body: "تمديدات كهربائية كاملة وأنظمة إضاءة ذكية، تمديدات سباكة وصرف صحي، أنظمة تكييف مركزي (HVAC)، أنظمة إنذار حريق وسلامة.",
        },
        {
          title: "تسليم مفتاح",
          body: "تسليم الفيلا جاهزة للسكن بكل تفاصيلها: من الأثاث المدمج إلى أنظمة المنزل الذكي. فحص شامل لجميع الأنظمة والتشطيبات قبل التسليم مع ضمان على جميع الأعمال.",
        },
      ],
      en: [
        {
          title: "Shell & Core (Structural Works)",
          body: "Complete structural works: excavation and foundation, reinforced concrete works, wall construction, and roof casting. We adhere to approved engineering plans and Saudi Building Code standards.",
        },
        {
          title: "Interior Finishing",
          body: "Plastering and painting, flooring installation (marble, porcelain, parquet), interior doors and windows, gypsum works and decorations, kitchen and built-in wardrobe installation.",
        },
        {
          title: "Exterior Finishing",
          body: "Stone and brick facades, waterproofing and thermal insulation, exterior windows and main doors, landscaping, swimming pools, and perimeter walls.",
        },
        {
          title: "MEP Systems",
          body: "Complete electrical systems and smart lighting, plumbing and drainage, central HVAC systems, fire alarm and safety systems.",
        },
        {
          title: "Turnkey Delivery",
          body: "Villa delivered fully ready for occupancy: from built-in furniture to smart home systems. Comprehensive inspection of all systems and finishes before handover with warranty on all works.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة +20 عامًا في بناء الفلل السكنية الفاخرة",
        "سوابق أعمال موثقة في مشاريع فلل كبرى (فلل المزيرعي – الرياض)",
        "التزام صارم بكود البناء السعودي ومعايير الجودة",
        "فريق هندسي متكامل: مدني، معماري، كهرباء، ميكانيكا",
        "جدول زمني واضح وشفاف مع تقارير تقدم دورية",
        "ضمان شامل على جميع الأعمال الإنشائية والتشطيبات",
      ],
      en: [
        "20+ years of experience building luxury residential villas",
        "Documented track record in major villa projects (Al-Muzairie Villas – Riyadh)",
        "Strict compliance with Saudi Building Code and quality standards",
        "Complete engineering team: civil, architectural, electrical, mechanical",
        "Clear and transparent timeline with periodic progress reports",
        "Comprehensive warranty on all construction and finishing works",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "جاهز لبناء فيلا أحلامك؟", description: "تواصل معنا للحصول على استشارة مجانية وعرض سعر تفصيلي لبناء فيلتك.", button: "اطلب عرض سعر" },
      en: { title: "Ready to Build Your Dream Villa?", description: "Contact us for a free consultation and detailed quote for your villa construction.", button: "Request a Quote" },
    },
  },

  "mosque-construction": {
    slug: "mosque-construction",
    title: {
      ar: "بناء مساجد وجوامع",
      en: "Mosque & Jamea Construction",
    },
    subtitle: {
      ar: "تنفيذ وتشطيب دور العبادة بأعلى معايير الجودة والإتقان",
      en: "Building Houses of Worship to the Highest Standards of Quality",
    },
    description: {
      ar: "لمعة العربية للمقاولات – متخصصون في بناء المساجد والجوامع في المملكة العربية السعودية. من الأساسات إلى التشطيب الكامل، المآذن والقباب وقاعات الصلاة ودورات المياه. خبرة +20 عامًا.",
      en: "Lamaat Al-Arabiya Contracting – Specialized mosque and jamea construction across Saudi Arabia. From foundation to finishing, minarets, domes, prayer halls, and ablution areas. 20+ years of experience.",
    },
    keywords: {
      ar: [
        "مقاولات بناء مساجد وجوامع بالمملكة", "بناء مساجد في السعودية", "شركة بناء مساجد الرياض",
        "بناء جوامع القصيم", "بناء مساجد جدة", "تشطيب مساجد", "تنفيذ مساجد وجوامع",
        "مقاول مساجد السعودية", "لمعة العربية بناء مساجد", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "mosque construction Saudi Arabia", "jamea building KSA", "mosque contractor Riyadh",
        "mosque building Qassim", "mosque construction Jeddah", "prayer hall construction",
        "Islamic architecture contractor", "Lamaat Al-Arabiya mosque",
      ],
    },
    sections: {
      ar: [
        { title: "الأعمال الإنشائية", body: "تنفيذ كامل للهيكل الإنشائي: أساسات وقواعد، أعمدة وجدران، قاعات صلاة واسعة بتصميم يراعي الحمولات والفراغات الكبيرة. بناء المآذن والقباب بدقة هندسية عالية." },
        { title: "التشطيبات الداخلية", body: "تركيب الرخام والجرانيت للأرضيات والجدران، أعمال الجبس والزخارف الإسلامية، تركيب المحراب والمنبر، أنظمة الإضاءة المتخصصة، تركيب السجاد والفرش." },
        { title: "التشطيبات الخارجية", body: "واجهات حجرية وزخارف إسلامية، بناء وتشطيب المآذن والقباب، أعمال العزل المائي والحراري، تنسيق الساحات الخارجية والمواقف." },
        { title: "الأنظمة الكهروميكانيكية", body: "أنظمة تكييف مركزي مصممة للمساحات الواسعة، أنظمة صوت وميكروفونات متخصصة، إضاءة داخلية وخارجية، أنظمة إطفاء حريق وسلامة." },
        { title: "المرافق المساندة", body: "بناء وتشطيب دورات المياه ومرافق الوضوء، غرف الإمام والمؤذن، مكتبات ومصليات نسائية، مواقف سيارات وساحات خارجية." },
      ],
      en: [
        { title: "Structural Works", body: "Complete structural construction: foundations, columns and walls, spacious prayer halls designed for large loads and open spaces. Precise engineering for minarets and domes." },
        { title: "Interior Finishing", body: "Marble and granite flooring and walls, gypsum works and Islamic decorations, mihrab and minbar installation, specialized lighting systems, carpet and furnishing installation." },
        { title: "Exterior Finishing", body: "Stone facades and Islamic ornamental work, minaret and dome finishing, waterproofing and thermal insulation, courtyard and parking area landscaping." },
        { title: "MEP Systems", body: "Central HVAC systems designed for large spaces, specialized sound and microphone systems, interior and exterior lighting, fire suppression and safety systems." },
        { title: "Supporting Facilities", body: "Ablution facilities and restrooms, imam and muezzin rooms, libraries and women's prayer areas, parking lots and outdoor courtyards." },
      ],
    },
    whyUs: {
      ar: [
        "خبرة +20 عامًا في تنفيذ مشاريع حكومية وأوقاف",
        "فهم عميق لمتطلبات التصميم المعماري الإسلامي",
        "سوابق أعمال في بناء مساجد ومرافق دينية",
        "التزام بمعايير الجودة والسلامة في جميع مراحل العمل",
        "فريق هندسي متكامل ومتخصص",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "20+ years of experience in government and endowment projects",
        "Deep understanding of Islamic architectural design requirements",
        "Track record in mosque and religious facility construction",
        "Commitment to quality and safety standards at every stage",
        "Complete and specialized engineering team",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "المدينة المنورة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "Madinah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تخطط لبناء مسجد أو جامع؟", description: "تواصل معنا للحصول على استشارة مجانية وعرض سعر شامل لمشروعك.", button: "اطلب عرض سعر" },
      en: { title: "Planning to Build a Mosque?", description: "Contact us for a free consultation and comprehensive quote for your project.", button: "Request a Quote" },
    },
  },

  "commercial-finishing": {
    slug: "commercial-finishing",
    title: {
      ar: "تشطيبات تجارية للمولات والمطارات",
      en: "Commercial Finishing – Malls & Airports",
    },
    subtitle: {
      ar: "تنفيذ وتشطيب مجمعات تجارية بمعايير عالمية",
      en: "Expert Finishing for Commercial Complexes to International Standards",
    },
    description: {
      ar: "لمعة العربية للمقاولات – تشطيبات تجارية احترافية للمولات والمطارات والمجمعات التجارية. تشطيبات داخلية وخارجية، أعمال كهروميكانيكية، تسليم مشاريع كبرى متكاملة. خبرة +20 عامًا.",
      en: "Lamaat Al-Arabiya Contracting – Expert commercial finishing for malls, airports, and commercial complexes. Interior & exterior finishing, MEP systems, and turnkey project delivery. 20+ years experience.",
    },
    keywords: {
      ar: [
        "تشطيبات تجارية للمولات والمطارات", "تنفيذ وتشطيب مجمعات تجارية",
        "شركة تشطيبات داخلية وخارجية", "تشطيبات مولات الرياض", "تشطيبات مطارات السعودية",
        "تشطيبات تجارية جدة", "تشطيبات تجارية القصيم", "مقاول تشطيبات مشاريع كبرى",
        "لمعة العربية تشطيبات", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "commercial finishing Saudi Arabia", "mall finishing Riyadh", "airport finishing KSA",
        "commercial complex finishing", "interior finishing malls", "commercial contractor Saudi",
        "Lamaat Al-Arabiya commercial finishing", "large-scale finishing projects",
      ],
    },
    sections: {
      ar: [
        { title: "تشطيبات المولات والمراكز التجارية", body: "تنفيذ تشطيبات داخلية وخارجية للمولات والمراكز التجارية: أرضيات رخام وجرانيت، واجهات زجاجية وألومنيوم، أنظمة إضاءة تجارية، تكسيات جدران وأسقف معلقة، تجهيز المحلات والوحدات التجارية." },
        { title: "تشطيبات المطارات", body: "تنفيذ أعمال التشطيب في المطارات وفق أعلى المعايير الدولية: أرضيات عالية التحمل، أنظمة سقف معلق متخصصة، واجهات كرتن وول، أعمال كلادينج، أنظمة إنارة متقدمة." },
        { title: "تشطيبات الفنادق والمطاعم", body: "تشطيبات فاخرة للفنادق والمطاعم والمقاهي: ديكورات داخلية مميزة، تركيب أقواس خشبية وزخارف، واجهات نحاسية وحجرية، أنظمة إضاءة معلقة وتصاميم معمارية فريدة." },
        { title: "الأعمال الكهروميكانيكية التجارية", body: "أنظمة تكييف مركزي للمساحات الكبيرة، تمديدات كهربائية تجارية وأنظمة طاقة احتياطية، أنظمة إطفاء حريق وسلامة متقدمة، أنظمة سباكة وصرف صحي تجارية." },
        { title: "تشطيبات خارجية تجارية", body: "واجهات كلادينج وكرتن وول، أعمال حجر وطوب زخرفي، لافتات وعلامات تجارية مضيئة، تنسيق مداخل ومواقف سيارات ومناطق تحميل." },
      ],
      en: [
        { title: "Mall & Shopping Center Finishing", body: "Interior and exterior finishing for malls and shopping centers: marble and granite flooring, glass and aluminum facades, commercial lighting systems, wall cladding and suspended ceilings, retail unit fit-out." },
        { title: "Airport Finishing", body: "Airport finishing works to the highest international standards: high-durability flooring, specialized suspended ceiling systems, curtain wall facades, cladding works, advanced lighting systems." },
        { title: "Hotel & Restaurant Finishing", body: "Luxury finishing for hotels, restaurants, and cafes: distinctive interior decorations, wooden arches and ornamental installations, copper and stone facades, pendant lighting and unique architectural designs." },
        { title: "Commercial MEP Systems", body: "Central HVAC for large spaces, commercial electrical systems and backup power, advanced fire suppression and safety systems, commercial plumbing and drainage." },
        { title: "Commercial Exterior Finishing", body: "Cladding and curtain wall facades, decorative stone and brick work, illuminated commercial signage, entrance, parking, and loading area landscaping." },
      ],
    },
    whyUs: {
      ar: [
        "خبرة +20 عامًا في تنفيذ مشاريع تجارية كبرى",
        "سوابق أعمال: فنادق، محلات تجارية، مراكز تجميل، مطاعم",
        "التزام صارم بالمعايير القياسية وجودة التنفيذ",
        "فريق متخصص في التشطيبات التجارية والديكورات الداخلية",
        "القدرة على تنفيذ مشاريع ضخمة بجدول زمني محكم",
        "تغطية جغرافية: الرياض – جدة – القصيم – المملكة بالكامل",
      ],
      en: [
        "20+ years of experience in major commercial project execution",
        "Track record: hotels, retail stores, beauty centers, restaurants",
        "Strict adherence to international standards and execution quality",
        "Specialized team in commercial finishing and interior decoration",
        "Capability to execute large-scale projects on tight schedules",
        "Geographic coverage: Riyadh – Jeddah – Qassim – all of Saudi Arabia",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل لديك مشروع تشطيب تجاري؟", description: "تواصل معنا للحصول على استشارة مجانية وعرض سعر مفصّل لمشروعك التجاري.", button: "اطلب عرض سعر" },
      en: { title: "Have a Commercial Finishing Project?", description: "Contact us for a free consultation and detailed quote for your commercial project.", button: "Request a Quote" },
    },
  },

  sandblasting: {
    slug: "sandblasting",
    title: {
      ar: "تجهيز غرف السفع الرملي وتركيب المضخات الميكانيكية",
      en: "Sandblasting Room Setup & Mechanical Pump Installation",
    },
    subtitle: {
      ar: "تجهيز وإنشاء غرف السفع الرملي وتركيب المضخات الميكانيكية بأعلى المعايير",
      en: "Sandblasting Room Construction & Mechanical Pump Installation to the Highest Standards",
    },
    description: {
      ar: "لمعة العربية للمقاولات – تجهيز وإنشاء غرف السفع الرملي وتركيب المضخات الميكانيكية بالرياض والقصيم وجدة. تصميم وبناء غرف السفع وفق المعايير القياسية الدولية، وتركيب وصيانة المضخات الميكانيكية للمنشآت الصناعية.",
      en: "Lamaat Al-Arabiya Contracting – Sandblasting room setup and mechanical pump installation in Riyadh, Jeddah & Qassim. Design and construction of sandblasting rooms to international standards, plus mechanical pump installation and maintenance for industrial facilities.",
    },
    keywords: {
      ar: [
        "تجهيز غرف السفع الرملي", "إنشاء غرف سفع رملي بالرياض والقصيم",
        "تركيب مضخات ميكانيكية", "تجهيز غرف السفع الرملي الصناعي",
        "بناء غرف سفع رملي للمصانع", "تركيب مضخات صناعية",
        "صيانة المضخات الميكانيكية", "لمعة العربية سفع رملي",
        "لمعه العربية", "لمعة", "لمعه", "sandblasting room setup",
      ],
      en: [
        "sandblasting room setup Riyadh", "sandblasting room construction Saudi Arabia",
        "mechanical pump installation KSA", "sandblasting room Qassim",
        "industrial pump installation", "sandblasting chamber construction",
        "mechanical pump maintenance Saudi", "Lamaat Al-Arabiya sandblasting room",
      ],
    },
    sections: {
      ar: [
        { title: "تصميم وإنشاء غرف السفع الرملي", body: "تصميم وتجهيز غرف السفع الرملي المتكاملة وفق المعايير القياسية الدولية، بما يشمل أنظمة التهوية والتحكم بالغبار وأنظمة استرجاع المواد الكاشطة، لضمان بيئة عمل آمنة وفعالة." },
        { title: "تجهيز أنظمة التهوية والترشيح", body: "تركيب أنظمة تهوية وترشيح متطورة لغرف السفع الرملي لضمان جودة الهواء وسلامة العاملين، وفق معايير السلامة والصحة المهنية المعتمدة." },
        { title: "تركيب المضخات الميكانيكية", body: "تركيب وتشغيل المضخات الميكانيكية بجميع أنواعها للمنشآت الصناعية، بما يشمل مضخات الطرد المركزي ومضخات الإزاحة الإيجابية ومضخات الضغط العالي." },
        { title: "صيانة وتشغيل المضخات", body: "خدمات صيانة دورية ووقائية للمضخات الميكانيكية لضمان استمرارية التشغيل وكفاءة الأداء، مع توفير قطع الغيار الأصلية والدعم الفني المتخصص." },
        { title: "تجهيز الغرف وفق المعايير الدولية", body: "بناء وتجهيز غرف السفع الرملي وفق المعايير القياسية الدولية (ISO 8501، SSPC، NACE) لضمان جودة التجهيز وسلامة بيئة العمل." },
      ],
      en: [
        { title: "Sandblasting Room Design & Construction", body: "Design and setup of fully integrated sandblasting rooms according to international standards, including ventilation systems, dust control, and abrasive recovery systems to ensure a safe and efficient working environment." },
        { title: "Ventilation & Filtration Systems", body: "Installation of advanced ventilation and filtration systems for sandblasting rooms to ensure air quality and worker safety, in compliance with occupational health and safety standards." },
        { title: "Mechanical Pump Installation", body: "Installation and commissioning of all types of mechanical pumps for industrial facilities, including centrifugal pumps, positive displacement pumps, and high-pressure pumps." },
        { title: "Pump Maintenance & Operation", body: "Periodic and preventive maintenance services for mechanical pumps to ensure operational continuity and performance efficiency, with original spare parts and specialized technical support." },
        { title: "Room Setup to International Standards", body: "Construction and setup of sandblasting rooms according to international standards (ISO 8501, SSPC, NACE) to ensure quality preparation and a safe working environment." },
      ],
    },
    whyUs: {
      ar: [
        "خبرة +20 عامًا في القطاع الصناعي والإنشائي",
        "التزام صارم بالمعايير القياسية الدولية (ISO، SSPC، NACE)",
        "فريق فني متخصص في تجهيز غرف السفع وتركيب المضخات",
        "سوابق أعمال مع مصانع ومنشآت كبرى في المملكة",
        "تغطية جغرافية شاملة: الرياض – القصيم – جدة",
        "تقارير فحص وجودة معتمدة لكل مشروع",
      ],
      en: [
        "20+ years of experience in the industrial & construction sector",
        "Strict adherence to international standards (ISO, SSPC, NACE)",
        "Specialized technical team in sandblasting room setup & pump installation",
        "Proven track record with major factories and facilities in Saudi Arabia",
        "Full geographic coverage: Riyadh – Qassim – Jeddah",
        "Certified inspection and quality reports for every project",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "القصيم وبريدة", "جدة ومنطقة مكة المكرمة", "المنطقة الشرقية", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Qassim & Buraydah", "Jeddah & Makkah Region", "Eastern Province", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تحتاج تجهيز غرف سفع رملي أو تركيب مضخات ميكانيكية؟", description: "تواصل معنا للحصول على استشارة فنية مجانية وعرض سعر مخصص لمشروعك.", button: "اطلب عرض سعر" },
      en: { title: "Need Sandblasting Room Setup or Mechanical Pump Installation?", description: "Contact us for a free technical consultation and customized quote for your project.", button: "Request a Quote" },
    },
  },

  "vision-2030-smart-cities-construction": {
    slug: "vision-2030-smart-cities-construction",
    title: {
      ar: "رؤية السعودية 2030 وتوجهات مستقبل قطاع البناء بالمملكة",
      en: "Vision 2030 and the Future of Construction in Saudi Arabia",
    },
    subtitle: {
      ar: "كيف تعيد رؤية 2030 تشكيل قطاع المقاولات والبناء في المملكة",
      en: "Sustainability, Smart Cities and Rising Contractor Standards Across the Kingdom",
    },
    description: {
      ar: "تعيد رؤية 2030 تشكيل قطاع المقاولات السعودي عبر الاستدامة والمدن الذكية والتقنيات الحديثة المتطورة. تعرف على أبرز التوجهات التي تقود شركات البناء بالمملكة.",
      en: "Vision 2030 is redefining Saudi construction with sustainability, smart cities and advanced technology. See the trends shaping contractors across the Kingdom.",
    },
    keywords: {
      ar: ["رؤية 2030 والمقاولات", "المدن الذكية السعودية", "البناء المستدام المملكة", "مستقبل المقاولات السعودية", "تقنيات البناء الرياض", "توجهات قطاع المقاولات السعودي"],
      en: ["Vision 2030 construction", "smart cities Saudi Arabia", "sustainable construction KSA", "future of construction Saudi Arabia", "construction technology Riyadh", "Saudi construction industry trends"],
    },
    sections: {
      ar: [
        {
          title: "الاستدامة تتحول إلى ممارسة معيارية",
          body: "أصبحت أنظمة التكييف الموفرة للطاقة، وتصميم السباكة المراعي لاستهلاك المياه، وتوريد المواد المستدامة، تنتقل من كونها تحسينات اختيارية إلى ممارسة متوقعة، خصوصًا في المشاريع الحكومية والخاصة الكبرى المرتبطة بأهداف التنمية الوطنية.",
        },
        {
          title: "المدن الذكية والبنية التحتية المتكاملة",
          body: "يتطلب تطوير المدن الذكية تصميم المباني مع مراعاة التقنية المتكاملة منذ اليوم الأول، بدءًا من الأنظمة الكهربائية الداعمة للتحكم الذكي وصولًا إلى بنية تحتية تستشرف احتياجات الاتصال المستقبلية. يرتبط هذا مباشرة بكيفية تخطيط وتركيب الأنظمة الكهروميكانيكية.",
        },
        {
          title: "ارتفاع المعايير المطلوبة من المقاولين",
          body: "مع تحديث قطاع المقاولات في المملكة، يُتوقع من المقاولين تلبية معايير أعلى في السلامة والتوثيق وضمان الجودة. الشركات ذات السجل الطويل في تنفيذ المشاريع الحكومية والخاصة في وضع جيد لمواكبة هذا التحول، بعد أن بنت بالفعل العمليات الداخلية التي تدفع رؤية 2030 القطاع بأكمله نحوها.",
        },
      ],
      en: [
        {
          title: "Sustainability Becomes Standard Practice",
          body: "Energy-efficient HVAC systems, water-conscious plumbing design, and sustainable material sourcing are shifting from optional upgrades to expected practice, particularly on government and large private projects tied to national development goals.",
        },
        {
          title: "Smart Cities and Integrated Infrastructure",
          body: "Smart city development calls for buildings designed with integrated technology in mind from day one — from electrical systems that support smart controls to infrastructure that anticipates future connectivity needs. This connects directly to how MEP systems are planned and installed.",
        },
        {
          title: "Rising Standards for Contractors",
          body: "As the Kingdom's construction sector modernizes, contractors are expected to meet higher standards for safety, documentation and quality assurance. Companies with a long track record of government and private project delivery are well positioned to meet this shift, having already built the internal processes that Vision 2030 is pushing the wider industry toward.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة تتجاوز 20 عامًا في السوق السعودي",
        "مشاركة فعلية في مشاريع حكومية وخاصة",
        "الجمع بين الخبرة الهندسية والنهج الحديث في البناء",
        "شريك طويل الأمد في مسيرة تنمية المملكة",
        "تغطية شاملة: الرياض – جدة – القصيم",
      ],
      en: [
        "More than 20 years in the Saudi market",
        "Active participation in government and private development projects",
        "Engineering expertise combined with a modern construction approach",
        "Positioned as a long-term partner in the Kingdom's development journey",
        "Full coverage: Riyadh – Jeddah – Qassim",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "كن شريكًا معنا في مسيرة التنمية", description: "تواصل مع لمعة العربية للمقاولات للحصول على استشارة مجانية حول مشروعك القادم.", button: "تواصل معنا" },
      en: { title: "Partner With Us in the Kingdom's Development", description: "Contact Lamaat Al-Arabiya Contracting for a free consultation on your next project.", button: "Contact Us" },
    },
  },

  "commercial-finishing-malls-airports": {
    slug: "commercial-finishing-malls-airports",
    title: {
      ar: "تشطيبات المولات والمطارات التجارية الكبرى في السعودية",
      en: "Commercial Finishing for Malls, Airports & Hotels in KSA",
    },
    subtitle: {
      ar: "تشطيبات تجارية واسعة النطاق للمولات والمطارات والفنادق بمعايير عالمية",
      en: "Large-Scale Commercial Finishing for Malls, Airports and Hotels to International Standards",
    },
    description: {
      ar: "استكشف ما يشمله تنفيذ تشطيبات المشاريع التجارية الكبرى مثل المولات والمطارات والفنادق في السعودية، ولماذا يهم الالتزام بالمعايير العالمية في كل مرحلة تنفيذ.",
      en: "Explore what large-scale commercial finishing involves for malls, airports and hotels in Saudi Arabia, and why international-standard execution matters.",
    },
    keywords: {
      ar: ["تشطيبات تجارية السعودية", "مقاول تشطيب مولات", "تشطيب مطارات المملكة", "تشطيب فنادق الرياض", "تجهيز محلات تجارية السعودية", "مقاول تجاري جدة", "تشطيبات واسعة النطاق"],
      en: ["commercial finishing Saudi Arabia", "mall finishing contractor", "airport finishing KSA", "hotel finishing Riyadh", "retail fit-out Saudi Arabia", "commercial contractor Jeddah", "large-scale finishing"],
    },
    sections: {
      ar: [
        {
          title: "ماذا تشمل التشطيبات التجارية",
          body: "تشمل التشطيبات التجارية الأرضيات، وكسوة الجدران، وأنظمة الأسقف، ودمج الإضاءة، والبنية التحتية للافتات، وتنسيق التخصصات الدقيقة كأعمال الزجاج والنجارة الفنية. وفي المولات والمطارات تحديدًا، يجب أن يراعي التشطيب الحركة العالية جدًا للزوار، مما يجعل متانة المواد بأهمية المظهر الجمالي.",
        },
        {
          title: "العمل وفق المعايير العالمية",
          body: "أصبحت المطارات والمشاريع التجارية الكبرى في السعودية خاضعة بشكل متزايد لمعايير عالمية في المواد والسلامة من الحريق وإمكانية الوصول. يحتاج المقاولون إلى عمليات موثقة ومنفذين معتمدين وسجل ناجح في اجتياز فحوصات جهات خارجية، وهو نفس الانضباط الذي نطبقه في معايير الجودة عبر جميع أنواع المشاريع.",
        },
        {
          title: "تنفيذ الأعمال أثناء استمرار التشغيل",
          body: "تجري كثير من مشاريع التشطيب التجاري في مساحات تبقى مشغّلة جزئيًا، كجناح في مول قيد التجديد بينما تبقى المحلات المجاورة مفتوحة، أو صالة مطار يتم تحديثها ليلًا بين مواعيد الرحلات. يتطلب ذلك جدولة دقيقة، والتحكم بالضوضاء والغبار، وتنسيقًا وثيقًا مع إدارة المرفق، وهنا يكتسب المقاول ذو الخبرة سمعته.",
        },
      ],
      en: [
        {
          title: "What Commercial Finishing Covers",
          body: "Commercial finishing includes flooring, wall cladding, ceiling systems, lighting integration, signage infrastructure, and the coordination of specialty trades like glazing and millwork. In malls and airports specifically, finishing must also account for extremely high foot traffic, meaning material durability is as important as appearance.",
        },
        {
          title: "Working to International Standards",
          body: "Airports and large commercial developments in Saudi Arabia are increasingly held to international benchmarks for materials, fire safety, and accessibility. Contractors need documented processes, certified installers, and a track record of passing third-party inspections — the same discipline we apply to our quality standards across every project type.",
        },
        {
          title: "Phasing Work Around Live Operations",
          body: "Many commercial finishing projects happen in spaces that stay partially operational — a mall wing under renovation while stores next door remain open, or an airport terminal upgraded overnight between flight schedules. This requires careful phasing, noise and dust control, and close coordination with facility management, which is where an experienced general contractor earns its reputation.",
        },
      ],
    },
    whyUs: {
      ar: [
        "فريق عمل يضم أكثر من 150 مختصًا",
        "عملاء من المطورين الخاصين إلى المؤسسات الكبرى",
        "الحجم والانضباط اللازمين للتعامل مع مشاريع بأي حجم",
        "تسليم ضمن الجدول الزمني ووفق المواصفات",
        "سجل أعمال: فنادق، محلات تجارية، مراكز تجميل، مطاعم",
      ],
      en: [
        "Team of 150+ professionals",
        "Clients ranging from private developers to major institutions",
        "Scale and discipline to handle commercial projects of any size",
        "Delivered on schedule and to specification",
        "Track record: hotels, retail stores, beauty centers, restaurants",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل لديك مشروع تشطيب تجاري كبير؟", description: "تواصل معنا للحصول على عرض سعر مجاني ومخصص لمشروعك.", button: "احصل على عرض سعر" },
      en: { title: "Have a Large Commercial Finishing Project?", description: "Contact us for a free, tailored quote for your project.", button: "Get a Free Quote" },
    },
  },

  "turnkey-villa-construction-guide": {
    slug: "turnkey-villa-construction-guide",
    title: {
      ar: "دليل شامل لبناء الفلل بنظام تسليم مفتاح في السعودية",
      en: "Turnkey Villa Construction Guide for Saudi Homeowners",
    },
    subtitle: {
      ar: "من الحفر حتى التسليم النهائي في الرياض وجدة والقصيم",
      en: "From Foundation to Handover in Riyadh, Jeddah and Qassim",
    },
    description: {
      ar: "تخطط لبناء فيلا بنظام تسليم مفتاح؟ تعرف كيف تنفذ شركة لمعة العربية مشروعك من الأساسات حتى التشطيب النهائي في الرياض وجدة والقصيم بالتزام تام بالجودة والمواعيد.",
      en: "Planning turnkey villa construction in Saudi Arabia? Learn how Lamaat Al-Arabiya delivers foundation-to-finish villas in Riyadh, Jeddah and Qassim on schedule.",
    },
    keywords: {
      ar: ["بناء فلل تسليم مفتاح", "مقاول فلل الرياض", "بناء فلل جدة", "بناء فلل القصيم", "مقاولات سكنية السعودية", "تشطيب فلل السعودية", "لمعة العربية للمقاولات"],
      en: ["turnkey villa construction Saudi Arabia", "villa contractor Riyadh", "villa construction Jeddah", "villa building Qassim", "residential contractor KSA", "villa finishing Saudi Arabia", "Lamaat Al-Arabiya villas"],
    },
    sections: {
      ar: [
        {
          title: "ماذا يعني نظام تسليم مفتاح فعليًا",
          body: "يجمع مشروع الفيلا بنظام تسليم مفتاح بين أعمال العظم الإنشائي، والتشطيبات الداخلية والخارجية، والأنظمة الكهروميكانيكية ضمن عقد واحد وجهة مسؤولة واحدة. بدلًا من تنسيق مقاولين منفصلين للخرسانة والكهرباء والسباكة والتشطيب، يتعامل العميل مع فريق واحد من مرحلة التنسيق مع التصميم وحتى الاستلام النهائي، مما يقلل التأخير ويمنح المالك جدولًا زمنيًا وميزانية واضحة وثابتة.",
        },
        {
          title: "مراحل مشروع الفيلا تسليم مفتاح",
          body: "يمر بناء الفيلا تسليم مفتاح عادة بمراحل تجهيز الموقع والحفر، ثم الأساسات وأعمال الخرسانة الإنشائية، فالبناء والأسقف، ثم التمديدات الكهروميكانيكية الأولية، تليها التشطيبات الداخلية والخارجية، وأخيرًا الفحص النهائي قبل التسليم. تُفحص كل مرحلة قبل بدء التالية، وهنا تظهر قيمة المقاول ذي الخبرة الفعلية كمشروع فلل المزيرعي بالرياض.",
        },
        {
          title: "لماذا تهم مراقبة الجودة في بناء الفلل",
          body: "تُسكن الفلل لعقود طويلة، لذا فإن أي تقصير أثناء التنفيذ يظهر لاحقًا على شكل تشققات أو تسريبات أو أعطال كهربائية. يلتزم المقاول المنضبط بتطبيق معايير الجودة في كل مرحلة، من فحص المواد إلى الفحوصات الإنشائية وتفاوتات التشطيب، بحيث يؤدي المنزل المكتمل أداءً يوازي جماله.",
        },
      ],
      en: [
        {
          title: "What Turnkey Construction Really Means",
          body: "A turnkey villa project bundles structural work (the shell), interior and exterior finishing, and MEP systems into a single contract with a single point of accountability. Instead of coordinating separate contractors for concrete, electrical, plumbing and finishing, the client works with one team from design coordination through handover. This reduces delays caused by miscommunication between subcontractors and gives owners a clear, fixed timeline and budget.",
        },
        {
          title: "The Phases of a Turnkey Villa Project",
          body: "A typical turnkey villa build moves through site preparation and excavation, foundation and structural concrete work, masonry and roofing, MEP rough-in (electrical, plumbing, HVAC), interior and exterior finishing, and final inspection before handover. Each phase is inspected before the next begins — where an experienced general contractor adds real value in catching issues early, as demonstrated in projects like the Al-Muzairi Villas in Riyadh.",
        },
        {
          title: "Why Quality Control Matters for Villas",
          body: "Villas are lived in for decades, so shortcuts during construction show up later as cracks, leaks, or failing electrical systems. A disciplined contractor follows quality standards at every stage — material inspection, structural checks, and finishing tolerances — so the finished villa performs as well as it looks.",
        },
      ],
    },
    whyUs: {
      ar: [
        "فريق عمل يضم أكثر من 150 موظفًا",
        "خبرة تتجاوز 20 عامًا في السوق السعودي",
        "سجل أعمال يشمل مشاريع سكنية حكومية وخاصة",
        "جهة اتصال واحدة من التصميم حتى المعاينة النهائية",
        "جدولة شفافة وحرفية معتمدة",
      ],
      en: [
        "150+ person team with 20+ years of Saudi market experience",
        "Portfolio spanning government and private residential projects",
        "Single point of contact from design through final walkthrough",
        "Transparent scheduling and certified workmanship",
        "Letters of appreciation from government and private entities",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "جاهز لبناء فيلا أحلامك بنظام تسليم مفتاح؟", description: "تواصل معنا للحصول على استشارة مجانية وعرض سعر تفصيلي.", button: "اطلب عرض سعر" },
      en: { title: "Ready to Build Your Turnkey Villa?", description: "Contact us for a free consultation and detailed quote.", button: "Request a Quote" },
    },
  },

  "mosque-jamea-construction-standards": {
    slug: "mosque-jamea-construction-standards",
    title: {
      ar: "معايير بناء المساجد والجوامع في المملكة العربية السعودية",
      en: "Mosque & Jamea Construction Standards in Saudi Arabia",
    },
    subtitle: {
      ar: "من القباب والمآذن إلى قاعات الصلاة ومرافق الوضوء",
      en: "From Domes and Minarets to Prayer Halls and Ablution Areas",
    },
    description: {
      ar: "تعرف على المعايير الهندسية والصوتية ومعايير التشطيبات المعتمدة في بناء المساجد والجوامع بالسعودية، من المآذن والقباب إلى تجهيز قاعات الصلاة والمرافق المساندة.",
      en: "Discover the engineering standards behind mosque and jamea construction in Saudi Arabia, from minarets and domes to prayer hall acoustics and accessibility.",
    },
    keywords: {
      ar: ["بناء مساجد السعودية", "بناء جوامع المملكة", "مقاول مساجد الرياض", "بناء مآذن", "بناء قباب مساجد", "مقاول منشآت دينية", "صوتيات قاعة الصلاة"],
      en: ["mosque construction Saudi Arabia", "jamea construction KSA", "mosque contractor Riyadh", "minaret construction", "mosque dome building", "religious facility contractor", "prayer hall acoustics"],
    },
    sections: {
      ar: [
        {
          title: "الاعتبارات الإنشائية: القباب والمآذن",
          body: "تحمل القباب والمآذن أحمالًا إنشائية فريدة تختلف عن المباني السكنية أو التجارية العادية. تُعد تفاصيل الخرسانة المسلحة، وحسابات تحمل الرياح للمآذن العالية، والقوالب الهندسية الدقيقة، عناصر أساسية لتجنب التشققات والهبوط على المدى الطويل، ما يتطلب مقاولين يمتلكون قدرة هندسية إنشائية حقيقية لا مجرد خبرة تشطيب.",
        },
        {
          title: "الصوتيات وتصميم قاعة الصلاة",
          body: "تؤثر صوتيات قاعة الصلاة مباشرة على وضوح صوت الإمام لكل مصلٍّ. يجب التخطيط لارتفاع السقف ومواد الأسطح وأنظمة الصوت أثناء التنفيذ وليس بعده، وبالتزامن مع تصميم التكييف والإضاءة المناسبين، تصبح خبرة الأعمال الكهروميكانيكية عاملًا حاسمًا في راحة المسجد اليومية.",
        },
        {
          title: "التشطيبات ومرافق الوضوء وإمكانية الوصول",
          body: "تتطلب مرافق الوضوء أنظمة سباكة وصرف وتسخين مياه موثوقة تتحمل الاستخدام اليومي المكثف، بينما يجب أن توازن مواد التشطيب كالرخام والبلاط وأعمال الخط بين المتانة والطابع التقليدي. كما تُعد إمكانية الوصول لكبار السن وذوي الاحتياجات الخاصة، بما يشمل المنحدرات والمصليات المخصصة، معيارًا نراعيه في كل تصميم.",
        },
      ],
      en: [
        {
          title: "Structural Considerations: Domes and Minarets",
          body: "Domes and minarets carry unique structural loads that differ from standard residential or commercial buildings. Reinforced concrete detailing, wind-load calculations for tall minarets, and precise geometric formwork are essential to avoid cracking and long-term settlement. Getting this right requires contractors with genuine structural engineering capability, not just finishing experience.",
        },
        {
          title: "Acoustics and Prayer Hall Design",
          body: "A prayer hall's acoustics directly affect how clearly the imam's voice reaches every worshipper. Ceiling height, surface materials, and sound system integration all need to be planned during construction — not retrofitted afterward. Combined with proper HVAC and lighting design, MEP contracting expertise becomes critical to a mosque's day-to-day comfort.",
        },
        {
          title: "Finishing, Ablution Areas and Accessibility",
          body: "Ablution (wudu) areas require reliable plumbing, drainage and water heating systems that can handle heavy daily use, while finishing materials — marble, tile, calligraphy work — must balance durability with traditional aesthetics. Accessibility for elderly worshippers and people with disabilities, including ramps and dedicated prayer areas, is also a standard we build into every design.",
        },
      ],
    },
    whyUs: {
      ar: [
        "التعامل مع كل مشروع مسجد كالتزام طويل الأمد تجاه المجتمع",
        "نفس الانضباط المطبق في العقود الحكومية والتجارية",
        "تنسيق الأعمال الإنشائية والكهروميكانيكية والتشطيبات تحت مظلة واحدة",
        "مقاول واحد مسؤول من بدء الحفر وحتى يوم الافتتاح",
        "خبرة +20 عامًا في مشاريع الأوقاف والمنشآت الدينية",
      ],
      en: [
        "Every mosque project treated as a long-term commitment to the community",
        "Same rigor applied to government and commercial contracts",
        "Structural, MEP and finishing work coordinated under one roof",
        "Single accountable contractor from groundbreaking to opening day",
        "20+ years of experience in religious and endowment projects",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "المدينة المنورة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "Madinah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تخطط لبناء مسجد أو جامع؟", description: "تواصل معنا للحصول على استشارة مجانية وعرض سعر شامل لمشروعك.", button: "اطلب استشارة" },
      en: { title: "Planning a Mosque or Jamea Project?", description: "Contact us for a free consultation and comprehensive quote.", button: "Request a Consultation" },
    },
  },

  "mep-contracting-electrical-plumbing-hvac": {
    slug: "mep-contracting-electrical-plumbing-hvac",
    title: {
      ar: "الأعمال الكهروميكانيكية في مشاريع البناء بالمملكة السعودية",
      en: "MEP Contracting in Saudi Arabia: Electrical, Plumbing, HVAC",
    },
    subtitle: {
      ar: "أنظمة الكهرباء والسباكة والتكييف في المشاريع السكنية والتجارية والدينية",
      en: "Electrical, Plumbing and HVAC Systems for Residential, Commercial and Religious Projects",
    },
    description: {
      ar: "تشكل الأنظمة الكهروميكانيكية عصب أي مبنى ناجح. تعرف كيف تضمن أعمال الكهرباء والسباكة والتكييف سلامة وكفاءة المشاريع السكنية والتجارية في أنحاء المملكة.",
      en: "MEP systems make or break a building. See how electrical, plumbing and HVAC contracting keeps Saudi construction projects safe, efficient and code-compliant.",
    },
    keywords: {
      ar: ["مقاول كهروميكانيكال السعودية", "مقاول كهرباء الرياض", "مقاول سباكة جدة", "مقاول تكييف المملكة", "التزام الدفاع المدني", "كهرباء وسباكة وتكييف السعودية", "صيانة كهروميكانيكية"],
      en: ["MEP contractor Saudi Arabia", "electrical contractor Riyadh", "plumbing contractor Jeddah", "HVAC contractor KSA", "civil defense compliance", "mechanical electrical plumbing Saudi Arabia", "MEP maintenance"],
    },
    sections: {
      ar: [
        {
          title: "الأنظمة الكهربائية: السلامة وتخطيط السعة",
          body: "تحتاج المباني الحديثة إلى أنظمة كهربائية مصممة بالحجم المناسب للاستخدام الحالي والتوسع المستقبلي، مع تأريض صحيح وحماية للدوائر وتوازن للأحمال. يُعد التخطيط الكهربائي الضعيف سببًا رئيسيًا لمخاطر الحريق والتعديلات المكلفة لاحقًا، ولهذا يجب تصميم الأعمال الكهربائية بالتوازي مع الخطط الإنشائية والتشطيب وليس إضافتها لاحقًا.",
        },
        {
          title: "أنظمة السباكة والمياه",
          body: "تغطي السباكة أنظمة التزويد والصرف والمياه الساخنة، ويجب أن تراعي ضغط المياه وجودتها في السعودية. يُعد هذا الأمر حساسًا خصوصًا في المنشآت عالية الاستخدام مثل المساجد ذات مرافق الوضوء، والمباني التجارية ذات الحركة اليومية الكثيفة.",
        },
        {
          title: "التكييف والالتزام بمتطلبات الدفاع المدني",
          body: "نظرًا لمناخ المملكة، فإن تصميم التكييف ليس خيارًا بل ضرورة تحدد راحة الساكنين وتكاليف الطاقة طوال عمر المبنى. يجب دمج الالتزام بمتطلبات الدفاع المدني، بما يشمل أنظمة إطفاء الحريق والإنذار ومسارات الإخلاء الآمنة، مع تصميم التكييف والكهرباء منذ البداية، لا كبند فحص نهائي فقط.",
        },
      ],
      en: [
        {
          title: "Electrical Systems: Safety and Capacity Planning",
          body: "Modern buildings need electrical systems sized correctly for current use and future expansion, with proper grounding, circuit protection, and load balancing. Poor electrical planning is a leading cause of both fire risk and costly retrofits, which is why electrical work should be designed alongside structural and finishing plans, not bolted on afterward.",
        },
        {
          title: "Plumbing and Water Systems",
          body: "Plumbing covers supply, drainage, and hot water systems, and needs to account for Saudi Arabia's water pressure and quality conditions. This is especially critical in high-use facilities like mosques with ablution areas, and commercial buildings with heavy daily traffic.",
        },
        {
          title: "HVAC and Civil Defense Compliance",
          body: "Given the Kingdom's climate, HVAC design is not optional — it determines occupant comfort and energy costs for the life of the building. Civil defense compliance, including fire suppression, alarm systems and safe egress routes, must be integrated with HVAC and electrical design from the start, not treated as a final inspection checklist.",
        },
      ],
    },
    whyUs: {
      ar: [
        "أعمال الكهرباء والسباكة والتكييف والدفاع المدني ضمن خدمات متكاملة",
        "تقديم الخدمات كجزء من مشاريع المقاولات العامة أو كخدمات مستقلة",
        "تغطية في الرياض وجدة والقصيم",
        "صيانة مستمرة متاحة بعد تسليم المشروع",
        "خبرة في المشاريع السكنية والتجارية والدينية",
      ],
      en: [
        "Integrated electrical, plumbing, HVAC and civil defense services",
        "Available as part of general contracting or as standalone services",
        "Coverage in Riyadh, Jeddah and Qassim",
        "Ongoing maintenance available after project handover",
        "Experience across residential, commercial and religious projects",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تحتاج خدمات كهروميكانيكية لمشروعك؟", description: "تواصل معنا للحصول على استشارة فنية مجانية وعرض سعر مخصص.", button: "اطلب عرض سعر" },
      en: { title: "Need MEP Services for Your Project?", description: "Contact us for a free technical consultation and customized quote.", button: "Request a Quote" },
    },
  },

  "industrial-sandblasting-surface-prep": {
    slug: "industrial-sandblasting-surface-prep",
    title: {
      ar: "خدمات السفع الرملي الصناعي ومعايير الجودة المعتمدة",
      en: "Industrial Sandblasting Services and Surface Prep Standards",
    },
    subtitle: {
      ar: "تجهيز الأسطح للهياكل الفولاذية والخزانات والأنابيب في المملكة العربية السعودية",
      en: "Surface Preparation for Steel Structures, Tanks and Pipelines in Saudi Arabia",
    },
    description: {
      ar: "تعرف على أعمال السفع الرملي الصناعي لمعالجة الأسطح المعدنية والهياكل والخزانات والأنابيب، ولماذا تهم معايير ISO وSSPC وNACE في حماية المنشآت الصناعية من التآكل.",
      en: "Understand industrial sandblasting for structural steel, tanks and pipelines, and why ISO, SSPC, NACE standards matter for corrosion protection today.",
    },
    keywords: {
      ar: [
        "السفع الرملي الصناعي السعودية", "سفع رملي الرياض", "سفع رملي القصيم",
        "معايير تجهيز الأسطح ISO", "معايير SSPC", "معايير NACE للطلاء",
        "حماية من التآكل السعودية", "معالجة الأسطح المعدنية",
      ],
      en: [
        "industrial sandblasting Saudi Arabia", "sandblasting Riyadh", "sandblasting Qassim",
        "surface preparation ISO", "SSPC standards", "NACE coating standards",
        "corrosion protection KSA", "steel structure sandblasting",
      ],
    },
    sections: {
      ar: [
        {
          title: "لماذا يحدد تجهيز السطح عمر الطلاء",
          body: "جودة الطلاء لا تتجاوز جودة السطح الذي وُضع عليه. تُظهر بيانات الصناعة باستمرار أن جودة تجهيز السطح هي العامل الأكبر في فشل الطلاء، أكثر أهمية حتى من منتج الطلاء نفسه. يحقق السفع الرملي درجة الخشونة المحددة التي تتطلبها أنظمة الطلاء المختلفة للالتصاق الصحيح.",
        },
        {
          title: "المعايير العالمية: ISO وSSPC وNACE",
          body: "يتبع السفع الرملي الاحترافي معايير عالمية معتمدة. يحدد معيار ISO 8501 درجات النظافة البصرية، وتضع SSPC مواصفات تجهيز الأسطح المستخدمة على نطاق واسع في أمريكا الشمالية وبشكل متزايد في الخليج، بينما تنظّم معايير NACE (المعروفة الآن باسم AMPP) مكافحة التآكل لمنشآت النفط والغاز والصناعة. يُعد الالتزام بهذه المعايير ضروريًا للمشاريع المرتبطة بعملاء صناعيين وشركاء دوليين.",
        },
        {
          title: "التطبيقات: الهياكل الفولاذية والخزانات والأنابيب",
          body: "يُستخدم السفع الرملي لتجهيز الفولاذ الإنشائي قبل الطلاء، وتنظيف خزانات التخزين من الداخل والخارج، ومعالجة خطوط الأنابيب قبل طلاء الحماية، وترميم المعدات في المنشآت الصناعية والتصنيعية. تتطلب كل تطبيقة وسيطًا كاشطًا ودرجة سفع مختلفة، ولهذا فإن الفنيين ذوي الخبرة، لا المعدات وحدها، هم من يحددون جودة النتيجة.",
        },
      ],
      en: [
        {
          title: "Why Surface Preparation Determines Coating Life",
          body: "A coating is only as good as the surface underneath it. Industry data consistently shows that surface preparation quality is the single biggest factor in coating failure — more important than the coating product itself. Sandblasting achieves the specific surface profile (roughness) that different coating systems require to adhere correctly.",
        },
        {
          title: "International Standards: ISO, SSPC and NACE",
          body: "Professional sandblasting follows internationally recognized standards. ISO 8501 defines visual cleanliness grades, SSPC (Society for Protective Coatings) sets surface preparation specifications used widely in North America and increasingly in the Gulf, and NACE (now AMPP) standards govern corrosion control for oil, gas and industrial facilities. Working to these standards is essential for projects tied to industrial clients and international partners.",
        },
        {
          title: "Applications: Steel Structures, Tanks and Pipelines",
          body: "Sandblasting is used to prepare structural steel before painting, clean the interior and exterior of storage tanks, treat pipelines before protective coating, and refurbish equipment in industrial and manufacturing facilities. Each application requires different abrasive media and blast profiles, which is why experienced operators — not just equipment — determine the quality of the result.",
        },
      ],
    },
    whyUs: {
      ar: [
        "تطبيق معايير عالمية لتجهيز الأسطح في كل مشروع",
        "فنيون ذوو خبرة يحددون جودة النتيجة لا المعدات وحدها",
        "أعمال وفق معايير ISO 8501 وSSPC وNACE (AMPP)",
        "خبرة في الهياكل الفولاذية والخزانات وخطوط الأنابيب",
        "تغطية في الرياض والقصيم وجميع مناطق المملكة",
      ],
      en: [
        "International surface prep standards applied on every project",
        "Experienced operators — not just equipment — determine quality",
        "ISO 8501, SSPC and NACE (AMPP) compliant processes",
        "Structural steel, storage tanks and pipeline experience",
        "Coverage in Riyadh, Qassim and all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تحتاج خدمات السفع الرملي الصناعي؟", description: "تواصل معنا للحصول على استشارة مجانية وعرض سعر لمشروع السفع الرملي.", button: "اطلب عرض سعر" },
      en: { title: "Need Industrial Sandblasting Services?", description: "Contact us for a free consultation and quote for your sandblasting project.", button: "Request a Quote" },
    },
  },

  "construction-site-safety-ksa": {
    slug: "construction-site-safety-ksa",
    title: {
      ar: "كيف تحافظ شركات المقاولات على سلامة مواقع العمل بالمملكة",
      en: "Construction Site Safety: Protecting Teams and Projects",
    },
    subtitle: {
      ar: "معدات الوقاية الشخصية وأنظمة السلامة والتدريب المستمر في جميع أنواع المشاريع",
      en: "PPE, Safety Systems and Continuous Training Across All Project Types",
    },
    description: {
      ar: "سلامة الموقع أساس نجاح أي مشروع إنشائي. تعرف كيف تطبق شركات المقاولات السعودية معدات الوقاية الشخصية ونظم السلامة والتدريب المستمر لحماية الفرق والمشاريع.",
      en: "Site safety protects workers, timelines and budgets. Learn how leading Saudi contractors apply PPE, safety systems and training to prevent site accidents.",
    },
    keywords: {
      ar: [
        "سلامة مواقع العمل السعودية", "معايير السلامة في المقاولات",
        "معدات الوقاية الشخصية للبناء", "سلامة الدفاع المدني الرياض",
        "سلامة مكان العمل المقاول", "تدريب السلامة في البناء",
      ],
      en: [
        "construction site safety Saudi Arabia", "safety standards contracting KSA",
        "PPE construction sites", "civil defense safety Riyadh",
        "workplace safety contractor", "safety training construction",
      ],
    },
    sections: {
      ar: [
        {
          title: "معدات الوقاية الشخصية كحد أدنى",
          body: "تُعد الخوذات وأحذية السلامة والملابس عالية الوضوح ومعدات الحماية الخاصة بكل مهمة الحد الأدنى المطلوب في أي موقع نشط. لكن معدات الوقاية وحدها لا تمنع الحوادث؛ إنها تقلل من شدة الحوادث التي كان يجب أن تمنعها إجراءات أكثر صرامة من الأساس.",
        },
        {
          title: "أنظمة السلامة المطبقة والالتزام بالدفاع المدني",
          body: "تعني سلامة الموقع الفعالة تطبيق إجراءات صارمة: التحكم في الدخول، وفحص المعدات، والحماية من السقوط في الأعمال المرتفعة، وخطط استجابة واضحة للطوارئ. في المشاريع التي تتضمن تركيب الكهرباء أو السباكة أو التكييف، يتداخل هذا مباشرة مع الالتزام بالدفاع المدني والأعمال الكهروميكانيكية، لأن سلامة الحريق والسلامة الكهربائية مرتبطتان ارتباطًا وثيقًا.",
        },
        {
          title: "التدريب المستمر بدلًا من التوجيه لمرة واحدة",
          body: "يجب ألا يكون تدريب السلامة توجيهًا يحدث مرة واحدة فقط. يبقي التدريب التنشيطي المستمر، والإحاطات الخاصة بكل مرحلة جديدة من العمل، وقنوات الإبلاغ الواضحة عن المخاطر، الوعي بالسلامة نشطًا بدلًا من معاملته كبند يُنجز عند بداية المشروع فقط.",
        },
      ],
      en: [
        {
          title: "Personal Protective Equipment as a Baseline",
          body: "Helmets, safety boots, high-visibility clothing, and task-specific protective gear are the minimum requirement on any active site. But PPE alone does not prevent accidents — it reduces the severity of incidents that stricter procedures should be preventing in the first place.",
        },
        {
          title: "Enforced Safety Systems and Civil Defense Compliance",
          body: "Effective site safety means enforced procedures: controlled access, equipment inspections, fall protection on elevated work, and clear emergency response plans. On projects involving electrical, plumbing or HVAC installation, this overlaps directly with civil defense and MEP compliance, since fire safety and electrical safety are closely linked.",
        },
        {
          title: "Continuous Training Over One-Time Onboarding",
          body: "Safety training should not be a one-time orientation. Ongoing refresher training, site-specific briefings for new phases of work, and clear reporting channels for hazards keep safety awareness active rather than treating it as a box to check at project start.",
        },
      ],
    },
    whyUs: {
      ar: [
        "تطبيق متطلبات معدات الوقاية الشخصية في جميع المواقع النشطة",
        "التحكم في دخول الموقع وفحص المعدات بصرامة",
        "تدريب مستمر على السلامة لأكثر من 150 موظف",
        "خطط استجابة واضحة للطوارئ في كل مشروع",
        "سجل سلامة في المشاريع السكنية والتجارية والصناعية",
      ],
      en: [
        "PPE requirements enforced across all active sites",
        "Controlled site access and equipment inspections",
        "Continuous safety training for our 150+ team members",
        "Clear emergency response plans on every project",
        "Safety track record across residential, commercial and industrial sites",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل أنت مستعد لمناقشة متطلبات السلامة في مشروعك؟", description: "تواصل معنا للحصول على استشارة مجانية حول معايير سلامة الموقع وتخطيط المشروع.", button: "تواصل معنا" },
      en: { title: "Ready to Discuss Your Project Safety Requirements?", description: "Contact us for a free consultation on site safety standards and project planning.", button: "Contact Us" },
    },
  },

  "construction-quality-standards-ksa": {
    slug: "construction-quality-standards-ksa",
    title: {
      ar: "معايير الجودة في المقاولات وأثرها على نجاح المشروع",
      en: "Quality Standards in Construction: Why They Matter Most",
    },
    subtitle: {
      ar: "من اختيار المواد إلى الفحص النهائي – ضبط الجودة في كل مرحلة",
      en: "From Material Selection to Final Inspection – Quality Control at Every Stage",
    },
    description: {
      ar: "الجودة لم تعد رفاهية في عالم المقاولات بل ضرورة لنجاح المشروع. تعرف كيف يقلل تطبيق معايير الجودة الصارمة من الأخطاء والهدر ويعزز ثقة العميل في كل مرحلة.",
      en: "Quality control at every stage, from material sourcing to final inspection, reduces rework and delays. Learn how quality standards protect your budget.",
    },
    keywords: {
      ar: [
        "معايير الجودة في المقاولات", "ضبط الجودة الإنشائية", "فحص المشاريع السعودية",
        "منع عيوب البناء", "ضمان جودة المقاول", "جودة البناء الرياض",
      ],
      en: [
        "construction quality standards Saudi Arabia", "quality control contracting",
        "project inspection KSA", "construction defects prevention",
        "contractor quality assurance", "building quality Riyadh",
      ],
    },
    sections: {
      ar: [
        {
          title: "اختيار المواد والتحقق منها",
          body: "تبدأ الجودة قبل بدء التنفيذ، بتوريد مواد موثقة تلبي مواصفات المشروع. يُعد استبدال المواد غير الموثقة أو الأقل جودة لتوفير التكلفة أحد أكثر الأسباب شيوعًا لمشكلات إنشائية وتشطيبية طويلة الأمد.",
        },
        {
          title: "الفحص على مراحل متعددة",
          body: "بدلًا من الاكتفاء بالفحص عند اكتمال المشروع، يقوم المقاول المهتم بالجودة بفحص العمل في كل مرحلة: الأساسات، الإنشاء، التمديدات الكهروميكانيكية الأولية، والتشطيب، بحيث تُكتشف المشكلات وتُصحَّح وهي لا تزال قليلة التكلفة.",
        },
        {
          title: "التوثيق وثقة العملاء",
          body: "تعني عمليات الجودة أيضًا التوثيق: سجلات الفحص، وشهادات المطابقة، والتواصل الواضح مع العملاء حول ما تم تنفيذه وأسبابه. هذه الشفافية هي ما يكسب العملاء المتكررين والعقود الحكومية على مدى أكثر من 20 عامًا في سوق تنافسي.",
        },
      ],
      en: [
        {
          title: "Material Selection and Verification",
          body: "Quality starts before construction begins, with sourcing verified materials that meet project specifications. Substituting unverified or lower-grade materials to save cost is one of the most common causes of long-term structural and finishing problems.",
        },
        {
          title: "Stage-by-Stage Inspection",
          body: "Rather than inspecting only at project completion, quality-focused contractors check work at every phase — foundation, structural, MEP rough-in, and finishing — so issues are caught and corrected while they are still inexpensive to fix.",
        },
        {
          title: "Documentation and Client Trust",
          body: "Quality processes also mean documentation: inspection records, certificates of compliance, and clear communication with clients about what was done and why. This transparency is what earns repeat clients and government contracts over 20+ years in a competitive market.",
        },
      ],
    },
    whyUs: {
      ar: [
        "فريق يضم أكثر من 150 موظفًا يطبق نفس الانضباط في الجودة في كل مشروع",
        "شهادات وخطابات شكر من جهات حكومية وخاصة على مدى 20 عامًا",
        "فحص مرحلي موثق من الأساسات حتى التشطيب النهائي",
        "توريد مواد موثقة تلبي مواصفات كل مشروع",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "150+ team members applying the same quality discipline across every project",
        "Certificates and letters of appreciation from government and private entities over 20 years",
        "Documented stage-by-stage inspection from foundation to finishing",
        "Verified material sourcing meeting every project's specifications",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تريد ضمان جودة مشروعك الإنشائي؟", description: "تواصل معنا للحصول على استشارة مجانية حول معايير الجودة والتنفيذ.", button: "تواصل معنا" },
      en: { title: "Want to Ensure Quality on Your Construction Project?", description: "Contact us for a free consultation on quality standards and project execution.", button: "Contact Us" },
    },
  },

  "eurotech-me-official-agent-saudi-arabia-it-solutions": {
    slug: "eurotech-me-official-agent-saudi-arabia-it-solutions",
    title: {
      ar: "لمعة العربية – الوكيل الرسمي لحلول EuroTech ME التقنية في المملكة العربية السعودية",
      en: "Lamaat Al-Arabiya – Official Agent of EuroTech ME IT Solutions in Saudi Arabia",
    },
    subtitle: {
      ar: "حلول تقنية معلومات متكاملة لقطاع المقاولات والتشييد في المملكة",
      en: "Integrated IT Solutions for the Contracting and Construction Sector in the Kingdom",
    },
    description: {
      ar: "لمعة العربية للمقاولات وكيل رسمي لشركة EuroTech ME في المملكة العربية السعودية، نوفر حلول تقنية متطورة لإدارة مشاريع البناء والمقاولات. أنظمة BIM وإدارة المشاريع والبنية التحتية الرقمية لتحسين كفاءة التشييد.",
      en: "Lamaat Al-Arabiya Contracting is the official agent of EuroTech ME in Saudi Arabia, providing advanced IT solutions for construction and contracting project management. BIM systems, project management, and digital infrastructure to improve construction efficiency.",
    },
    keywords: {
      ar: [
        "EuroTech ME الوكيل الرسمي السعودية", "حلول تقنية المعلومات للمقاولات",
        "برامج إدارة مشاريع البناء", "BIM المملكة العربية السعودية",
        "تقنيات البناء الذكي", "لمعة العربية EuroTech",
        "حلول رقمية للمقاولين", "إدارة مشاريع التشييد",
        "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "EuroTech ME official agent Saudi Arabia", "IT solutions construction Saudi Arabia",
        "construction project management software KSA", "BIM Saudi Arabia",
        "smart construction technology", "Lamaat Al-Arabiya EuroTech",
        "digital solutions contractors", "construction project management",
      ],
    },
    sections: {
      ar: [
        {
          title: "من هي EuroTech ME ولماذا هذه الشراكة مهمة؟",
          body: "EuroTech ME شركة تقنية متخصصة في تقديم حلول تقنية المعلومات المتكاملة لقطاعي المقاولات والتشييد في منطقة الشرق الأوسط. تجمع هذه الشراكة بين خبرة لمعة العربية الميدانية الممتدة لأكثر من 20 عامًا في السوق السعودي وبين الحلول التقنية المتطورة من EuroTech ME، لتقديم منظومة متكاملة تربط الجانب الإنشائي بالجانب الرقمي في إدارة المشاريع.",
        },
        {
          title: "حلول إدارة المشاريع الإنشائية",
          body: "توفر EuroTech ME منظومة متكاملة لإدارة مشاريع البناء تشمل: برامج الجدولة الزمنية ومتابعة التقدم، وأنظمة إدارة الوثائق والعقود، وأدوات مراقبة التكاليف والميزانية في الوقت الفعلي، وتقارير الجودة والسلامة الرقمية. تُوظّف لمعة العربية هذه الأدوات في مشاريعها الكبرى لضمان الدقة في التسليم والالتزام بالمواصفات.",
        },
        {
          title: "تقنية BIM والتحول الرقمي في التشييد",
          body: "يشهد قطاع البناء السعودي تحولًا رقميًا متسارعًا تدفعه متطلبات رؤية 2030 والمشاريع العملاقة. تتيح حلول BIM (نمذجة معلومات البناء) من EuroTech ME تصور المشروع بالكامل رقميًا قبل الشروع في التنفيذ، مما يكشف التعارضات الهندسية مبكرًا ويقلل التعديلات المكلفة ويوحّد عمل الفرق الإنشائية والمعمارية والكهروميكانيكية في بيئة بيانات مشتركة.",
        },
        {
          title: "البنية التحتية الرقمية لمواقع البناء",
          body: "تتجاوز حلول EuroTech ME البرمجيات لتشمل البنية التحتية الرقمية لمواقع البناء: شبكات الاتصال الميداني، وأنظمة المراقبة والسلامة بالكاميرات والاستشعار، وبوابات الدخول الذكي لتتبع العمالة، وأنظمة إدارة المعدات والأصول. توفر هذه الحلول لإدارة المشاريع رؤية ميدانية لحظية تُعزز القرار وتضبط الجداول الزمنية.",
        },
        {
          title: "الدعم الفني والتدريب في المملكة",
          body: "بصفتها الوكيل الرسمي، تقدم لمعة العربية الدعم الفني الكامل لمنتجات وحلول EuroTech ME داخل المملكة العربية السعودية، بما يشمل التركيب والتهيئة، وتدريب الفرق الهندسية وفرق المشاريع، والدعم الفني المستمر، وتحديثات الأنظمة. يضمن ذلك استمرارية التشغيل وأقصى استفادة من الاستثمار التقني لعملاء القطاع.",
        },
      ],
      en: [
        {
          title: "Who is EuroTech ME and Why Does This Partnership Matter?",
          body: "EuroTech ME is a technology company specializing in integrated IT solutions for the contracting and construction sectors across the Middle East. This partnership combines Lamaat Al-Arabiya's 20+ years of field experience in the Saudi market with EuroTech ME's advanced technology solutions, delivering a comprehensive ecosystem that bridges the physical and digital dimensions of project management.",
        },
        {
          title: "Construction Project Management Solutions",
          body: "EuroTech ME provides an integrated construction project management suite including: scheduling and progress tracking software, document and contract management systems, real-time cost and budget monitoring tools, and digital quality and safety reporting. Lamaat Al-Arabiya deploys these tools on major projects to ensure precision in delivery and compliance with specifications.",
        },
        {
          title: "BIM Technology and Digital Transformation in Construction",
          body: "Saudi Arabia's construction sector is undergoing rapid digital transformation driven by Vision 2030 requirements and mega-projects. EuroTech ME's BIM (Building Information Modeling) solutions allow an entire project to be visualized digitally before construction begins, detecting engineering clashes early, reducing costly rework, and unifying the work of structural, architectural, and MEP teams in a shared data environment.",
        },
        {
          title: "Digital Infrastructure for Construction Sites",
          body: "EuroTech ME solutions extend beyond software to include digital infrastructure for construction sites: field communication networks, camera and sensor safety monitoring systems, smart access gates for workforce tracking, and equipment and asset management systems. These solutions give project management real-time field visibility to sharpen decisions and keep schedules on track.",
        },
        {
          title: "Technical Support and Training in the Kingdom",
          body: "As the official agent, Lamaat Al-Arabiya provides full technical support for EuroTech ME products and solutions within Saudi Arabia, covering installation and configuration, training for engineering and project teams, ongoing technical support, and system updates. This ensures continuity of operations and maximum return on technology investment for sector clients.",
        },
      ],
    },
    whyUs: {
      ar: [
        "الوكيل الرسمي المعتمد لـ EuroTech ME في المملكة العربية السعودية",
        "دعم فني محلي كامل بفريق متخصص داخل المملكة",
        "خبرة ميدانية +20 عامًا في قطاع المقاولات السعودي",
        "تكامل الحلول التقنية مع العمليات الإنشائية الفعلية",
        "تدريب وتأهيل الفرق الهندسية لأقصى استفادة من الأنظمة",
        "تغطية جغرافية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "Certified official agent of EuroTech ME in Saudi Arabia",
        "Full local technical support with a specialized in-Kingdom team",
        "20+ years of field experience in the Saudi contracting sector",
        "Seamless integration of technology solutions with actual construction operations",
        "Engineering team training to maximize system value",
        "Full geographic coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "المنطقة الشرقية", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "Eastern Province", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تريد معرفة المزيد عن حلول EuroTech ME؟", description: "تواصل مع لمعة العربية للحصول على استشارة مجانية وعرض تفصيلي لأنسب الحلول التقنية لمشروعك.", button: "تواصل معنا" },
      en: { title: "Want to Learn More About EuroTech ME Solutions?", description: "Contact Lamaat Al-Arabiya for a free consultation and a detailed overview of the right IT solutions for your project.", button: "Contact Us" },
    },
  },

  "choosing-general-contractor-riyadh-jeddah-qassim": {
    slug: "choosing-general-contractor-riyadh-jeddah-qassim",
    title: {
      ar: "كيف تختار شركة مقاولات موثوقة في الرياض وجدة والقصيم",
      en: "Choosing a General Contractor in Riyadh, Jeddah or Qassim",
    },
    subtitle: {
      ar: "دليل عملي لاختيار المقاول المناسب لمشروعك",
      en: "A practical guide to selecting the right contractor for your project",
    },
    description: {
      ar: "اختيار شركة المقاولات المناسبة قرار مصيري لأي مشروع. قارن بين الخبرة والشهادات المعتمدة وسجل الأعمال السابقة لاختيار شريك موثوق في الرياض أو جدة أو القصيم.",
      en: "Selecting a general contractor is a major decision. Compare experience, certifications and project portfolio to find a trusted partner in Riyadh or Jeddah.",
    },
    keywords: {
      ar: ["شركة مقاولات السعودية", "اختيار مقاول الرياض", "شركة إنشاءات جدة", "كيف تختار مقاولًا", "أفضل مقاول القصيم", "مقاول موثوق المملكة", "شهادات المقاول"],
      en: ["general contractor Saudi Arabia", "contractor selection Riyadh", "construction company Jeddah", "how to choose a contractor", "best contractor Qassim", "trusted contractor KSA", "contractor certifications"],
    },
    sections: {
      ar: [
        {
          title: "سجل الأعمال في مشاريع مماثلة",
          body: "أفضل مؤشر على أداء المقاول المستقبلي هو أعماله السابقة. اطلب أمثلة على مشاريع مكتملة مماثلة في الحجم والنوع لمشروعك، سواء سكنية أو دينية أو تجارية أو صناعية، واطلب إن أمكن رؤية النتائج النهائية أو التحدث مع عملاء سابقين.",
        },
        {
          title: "الشهادات والاعتراف الحكومي",
          body: "تشير خطابات الشكر والتقدير، والخبرة في المشاريع الحكومية، والشهادات القطاعية، إلى أن المقاول قد اجتاز تدقيق عملاء جادين من قبل. المقاول الذي يمتلك سجلًا موثقًا في تنفيذ مشاريع حكومية وخاصة قد أثبت بالفعل التزامه بمعايير المطابقة والجودة المهمة لمشروعك.",
        },
        {
          title: "تنوع الخدمات والمسؤولية من جهة واحدة",
          body: "المقاولون الذين يقدمون المقاولات العامة والخدمات الفنية (الكهرباء والسباكة والتكييف) وتوريد المواد تحت مظلة واحدة يقللون من مخاطر التنسيق الناتجة عن التعامل مع عدة موردين. هذه هي الميزة الأساسية لنظام تسليم مفتاح؛ شريك واحد مسؤول بدلًا من عدة أطراف منفصلة.",
        },
      ],
      en: [
        {
          title: "Track Record on Comparable Projects",
          body: "A contractor's past work is the best predictor of future performance. Ask for examples of completed projects similar in scale and type to yours — residential, religious, commercial or industrial — and, where possible, ask to see the finished results or speak with past clients.",
        },
        {
          title: "Certifications and Government Recognition",
          body: "Letters of appreciation, government project experience, and industry certifications signal that a contractor has passed scrutiny from serious clients before. A contractor with a documented history of government and private project delivery has already demonstrated the compliance and quality standards that matter for your project.",
        },
        {
          title: "Range of Services and Single-Point Accountability",
          body: "Contractors who offer general contracting, technical services (electrical, plumbing, HVAC) and material supply under one roof reduce the coordination risk that comes with juggling multiple vendors. This is the core advantage of a turnkey approach — one accountable partner instead of several disconnected ones.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة تتجاوز 20 عامًا في السوق السعودي",
        "فريق عمل يضم أكثر من 150 موظفًا",
        "مكاتب في الرياض وجدة والقصيم",
        "سجل أعمال يشمل الفلل والمساجد والتشطيبات التجارية والخدمات الصناعية",
        "شريك واحد مسؤول من التصميم حتى التسليم",
      ],
      en: [
        "20+ years in the Saudi market",
        "150+ person team",
        "Offices in Riyadh, Jeddah and Qassim",
        "Portfolio spanning villas, mosques, commercial finishing and industrial services",
        "Single accountable partner from design to handover",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تبحث عن مقاول موثوق لمشروعك؟", description: "تواصل معنا للحصول على استشارة مجانية وعرض سعر تفصيلي.", button: "احصل على استشارة" },
      en: { title: "Looking for a Trusted Contractor?", description: "Contact us for a free consultation and detailed quote.", button: "Get a Consultation" },
    },
  },

  "building-maintenance-services-ksa": {
    slug: "building-maintenance-services-ksa",
    title: {
      ar: "خدمات صيانة المباني للمنازل والمنشآت التجارية بالسعودية",
      en: "Building Maintenance Services for Homes and Businesses",
    },
    subtitle: {
      ar: "الصيانة الوقائية والعلاجية لحماية عقارك على المدى الطويل",
      en: "Preventive and reactive upkeep to protect your property long-term",
    },
    description: {
      ar: "الصيانة الدورية تطيل عمر المبنى وتحافظ على قيمته السوقية. تعرف كيف تغطي خدمات الصيانة المتخصصة أعمال الكهرباء والسباكة والتكييف والإنشاءات في السعودية.",
      en: "Regular maintenance extends a building's lifespan and value. See how professional maintenance covers electrical, plumbing, HVAC and structural upkeep.",
    },
    keywords: {
      ar: ["صيانة المباني السعودية", "صيانة المرافق الرياض", "صيانة العقارات المملكة", "مقاول صيانة تكييف", "صيانة كهربائية جدة", "خدمات الصيانة القصيم"],
      en: ["building maintenance Saudi Arabia", "facility maintenance Riyadh", "property maintenance KSA", "HVAC maintenance contractor", "electrical maintenance Jeddah", "maintenance services Qassim"],
    },
    sections: {
      ar: [
        {
          title: "الصيانة الوقائية مقابل الصيانة العلاجية",
          body: "الصيانة الوقائية، أي الفحوصات والخدمات المجدولة قبل حدوث أي عطل، أقل تكلفة بكثير من الإصلاحات العلاجية بعد تعطل النظام. تفقد أنظمة التكييف على وجه الخصوص كفاءتها تدريجيًا، والصيانة الدورية تكتشف المشكلات قبل أن تتحول إلى استبدال كامل.",
        },
        {
          title: "صيانة الكهرباء والسباكة",
          body: "تتدهور الأنظمة الكهربائية مع الوقت بفعل الاستخدام والتعرض البيئي وتغيّر متطلبات الأحمال، بينما تواجه أنظمة السباكة التآكل والتسريبات ومشكلات الضغط. الفحص الدوري لكلا النظامين يطيل عمر المبنى ويقلل من مخاطر الأعطال المفاجئة.",
        },
        {
          title: "صيانة الإنشاءات والتشطيبات",
          body: "يجب معالجة التشققات وتسرب المياه وتآكل التشطيبات فور ظهورها، لأن المشكلات الصغيرة المهملة تميل إلى التفاقم؛ فقد يتحول تشقق بسيط اليوم إلى إصلاح إنشائي غدًا. تُعد الفحوصات الإنشائية الدورية مهمة بشكل خاص للمباني القديمة والمساحات التجارية عالية الحركة.",
        },
      ],
      en: [
        {
          title: "Preventive vs. Reactive Maintenance",
          body: "Preventive maintenance — scheduled inspections and servicing before something fails — is significantly cheaper than reactive repairs after a system breaks down. HVAC systems, in particular, lose efficiency gradually, and regular servicing catches problems before they turn into full replacements.",
        },
        {
          title: "Electrical and Plumbing Upkeep",
          body: "Electrical systems degrade over time through wear, environmental exposure and changing load demands, while plumbing systems face corrosion, leaks and pressure issues. Routine inspection of both extends the life of the building and reduces the risk of sudden failures.",
        },
        {
          title: "Structural and Finishing Maintenance",
          body: "Cracks, water infiltration and finishing wear should be addressed as soon as they appear, since minor issues left unaddressed tend to compound — a small crack today can become a structural repair tomorrow. Regular structural checks are especially important for older buildings and high-traffic commercial spaces.",
        },
      ],
    },
    whyUs: {
      ar: [
        "صيانة الكهرباء والسباكة والتكييف والأعمال الإنشائية تحت مظلة واحدة",
        "معايير جودة مرتفعة كتلك المطبقة في مشاريع الإنشاء الجديدة",
        "خدمة وقائية وعلاجية للعقارات السكنية والتجارية",
        "تغطية في الرياض وجدة والقصيم",
        "خبرة تتجاوز 20 عامًا في السوق السعودي",
      ],
      en: [
        "Electrical, plumbing, HVAC and structural maintenance under one roof",
        "Same quality standards applied to new construction",
        "Preventive and reactive service for residential and commercial properties",
        "Coverage in Riyadh, Jeddah and Qassim",
        "20+ years of Saudi market experience",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تحتاج خدمات صيانة لمبناك؟", description: "تواصل معنا لجدولة زيارة صيانة والحصول على تقييم مجاني.", button: "اطلب زيارة صيانة" },
      en: { title: "Need Maintenance Services for Your Building?", description: "Contact us to schedule a maintenance visit and get a free assessment.", button: "Schedule a Visit" },
    },
  },

  "psychology-of-space-commercial-fitouts": {
    slug: "psychology-of-space-commercial-fitouts",
    title: {
      ar: "سيكولوجية المساحات: كيف تقود التشطيبات التجارية نجاح الأعمال",
      en: "The Psychology of Space: How Commercial Fit-Outs Drive Business Success",
    },
    subtitle: {
      ar: "التصميم الذكي للمساحات التجارية كأداة استراتيجية لتعزيز المبيعات والإنتاجية",
      en: "Smart Commercial Space Design as a Strategic Tool for Sales and Productivity",
    },
    description: {
      ar: "القيمة الحقيقية للتشطيب التجاري المنفذ جيداً تكمن في علم النفس. كيف يجعل المكان عملاءك يشعرون؟ وكيف يؤثر على إنتاجية الموظفين؟ في لمعة العربية نتعامل مع التشطيبات التجارية كأداة استراتيجية للأعمال.",
      en: "The true value of a well-executed commercial fit-out lies in psychology. How does the space make your customers feel? How does it affect employee productivity? At Lamat El-Arabia, we approach commercial finishing as a strategic business tool.",
    },
    keywords: {
      ar: [
        "تشطيبات تجارية السعودية", "تصميم مساحات تجارية", "تشطيب مولات",
        "تشطيب مكاتب شركات", "سيكولوجية التصميم الداخلي", "تشطيبات متاجر التجزئة",
        "أعمال كهروميكانيكية تجارية", "واجهات زجاجية", "لمعة العربية تشطيبات",
        "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "commercial fit-out Saudi Arabia", "commercial space design", "mall finishing KSA",
        "corporate office fit-out", "psychology of space design", "retail store finishing",
        "commercial MEP services", "curtain wall systems", "Lamaat Al-Arabiya finishing",
      ],
    },
    sections: {
      ar: [
        {
          title: "التصميم لتجربة العميل",
          body: "يساهم التخطيط والإضاءة والأرضيات في رحلة العميل. بالنسبة لمساحات التجزئة، يشجع التصميم المفتوح والمضاء جيداً مع أرضيات الإيبوكسي أو البورسلين عالية الجودة العملاء على البقاء لفترة أطول. تضمن أعمالنا المعمارية المتخصصة أن تتوافق المساحة المادية مع هوية علامتك التجارية، مما يخلق جواً جذاباً يعزز المبيعات.",
        },
        {
          title: "تعزيز إنتاجية الموظفين",
          body: "بالنسبة لمكاتب الشركات، يؤثر التشطيب بشكل مباشر على القوى العاملة. إن دمج الضوء الطبيعي من خلال الواجهات الزجاجية المتقدمة، جنباً إلى جنب مع العزل الصوتي المناسب، يقلل من التوتر ويزيد من التركيز. علاوة على ذلك، تضمن أنظمة التكييف عالية الكفاءة - وهي جزء من خدماتنا الكهروميكانيكية الأساسية - مناخاً مريحاً على مدار العام.",
        },
        {
          title: "الميزة التنافسية المطلقة",
          body: "إن الاستثمار في التشطيبات التجارية الممتازة ليس مجرد تكلفة تشغيلية؛ بل هو استثمار مباشر في كيفية إدراك علامتك التجارية. تضمن الشراكة مع مقاول متكامل أن كل التفاصيل، من ألواح السقف إلى التركيبات الكهربائية، تعمل معاً لخلق بيئة مهيأة للنجاح.",
        },
      ],
      en: [
        {
          title: "Designing for the Customer Experience",
          body: "The layout, lighting, and flooring all contribute to the customer journey. For retail spaces, a well-lit, open-plan design with high-quality epoxy or porcelain flooring encourages customers to linger longer. Our specialized architectural works ensure that the physical space aligns with your brand identity, creating an inviting atmosphere that drives sales.",
        },
        {
          title: "Boosting Employee Productivity",
          body: "For corporate offices, the fit-out directly impacts the workforce. Integrating natural light through advanced curtain walls, combined with proper acoustic insulation, reduces stress and increases focus. Furthermore, highly efficient HVAC systems—part of our core MEP services—ensure a comfortable climate year-round.",
        },
        {
          title: "The Ultimate Competitive Advantage",
          body: "Investing in premium commercial finishing is not just an operational expense; it is a direct investment in your brand's perception. Partnering with a comprehensive contractor ensures that every detail, from the ceiling tiles to the electrical fittings, works together to create an environment primed for success.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة تتجاوز 20 عامًا في التشطيبات التجارية الكبرى",
        "تنفيذ متكامل: أعمال معمارية وكهروميكانيكية تحت مظلة واحدة",
        "تصميم مساحات يعكس هوية العلامة التجارية ويعزز تجربة العميل",
        "أنظمة تكييف وإضاءة عالية الكفاءة لبيئة عمل مثالية",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "20+ years of experience in large-scale commercial finishing",
        "Integrated execution: architectural and MEP works under one roof",
        "Space design that reflects brand identity and enhances customer experience",
        "High-efficiency HVAC and lighting systems for an optimal work environment",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تخطط لتشطيب مساحة تجارية؟", description: "تواصل معنا للحصول على استشارة مجانية وتصور متكامل لمشروعك التجاري.", button: "اطلب استشارة" },
      en: { title: "Planning a Commercial Fit-Out?", description: "Contact us for a free consultation and a comprehensive vision for your commercial project.", button: "Get a Consultation" },
    },
  },

  "hidden-roi-premium-mep-systems": {
    slug: "hidden-roi-premium-mep-systems",
    title: {
      ar: "العائد الخفي على الاستثمار من أنظمة الكهروميكانيكا (MEP) الممتازة",
      en: "The Hidden ROI of Premium MEP Systems in Construction",
    },
    subtitle: {
      ar: "لماذا تُعد أنظمة MEP عالية الجودة استثماراً طويل الأمد وليست تكلفة إضافية",
      en: "Why High-Quality MEP Systems Are a Long-Term Investment, Not an Extra Cost",
    },
    description: {
      ar: "الأنظمة الميكانيكية والكهربائية والسباكة (MEP) هي الجهاز العصبي لأي مبنى حديث. تعرف لماذا يكلفك التوفير في أنظمة MEP أكثر على المدى الطويل وكيف يحقق الاستثمار في الجودة عائداً قوياً عاماً بعد عام.",
      en: "MEP systems are the central nervous system of any modern building. Learn why cutting corners on MEP costs you more long-term and how investing in quality delivers a strong ROI year after year.",
    },
    keywords: {
      ar: [
        "أنظمة كهروميكانيكية السعودية", "MEP مقاولات", "تكييف مركزي الرياض",
        "سباكة عالية الجودة", "كهرباء مباني", "كفاءة الطاقة المباني",
        "صيانة أنظمة MEP", "مقاول كهروميكانيكي", "لمعة العربية كهروميكانيكا",
        "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "MEP systems Saudi Arabia", "MEP contracting KSA", "HVAC systems Riyadh",
        "premium plumbing construction", "electrical systems buildings", "energy efficiency buildings",
        "MEP maintenance Saudi", "MEP contractor", "Lamaat Al-Arabiya MEP",
      ],
    },
    sections: {
      ar: [
        {
          title: "لماذا تكلفك أنظمة الكهروميكانيكا الرخيصة أكثر",
          body: "في عالم المقاولات، يعد التوفير المفرط في أنظمة MEP خلال مرحلة البناء الأولية خطأً فادحاً. تؤدي الأسلاك دون المستوى، أو مجاري التكييف المصممة بشكل سيئ، أو مواد السباكة منخفضة الجودة حتماً إلى أعطال متكررة. إن تكلفة الإصلاحات بأثر رجعي، والتوقف عن العمل، وهدر الطاقة تتجاوز بكثير الوفورات الأولية.",
        },
        {
          title: "العائد على الاستثمار (ROI) من الجودة",
          body: "تعمل أنظمة التكييف المتقدمة والإضاءة الذكية على تقليل استهلاك الكهرباء بشكل كبير. في المناخات الحارة، يعتبر نظام التبريد المحسن العامل الأكبر في تقليل النفقات الشهرية. المواد الممتازة والتركيب الخبير يعني تسربات أقل، وأعطال كهربائية أقل، وعمراً أطول للعقار. كما تحمي الشبكات الكهربائية وأنظمة مكافحة الحرائق القوية الأرواح والأصول، مما يضمن الامتثال الصارم للوائح الدفاع المدني.",
        },
        {
          title: "ميزة المقاول المتكامل",
          body: "من خلال اختيار مقاول عام مثل لمعة العربية يتعامل مع أنظمة الكهروميكانيكا داخلياً جنباً إلى جنب مع الأعمال المدنية، يتجنب أصحاب المشاريع سوء الفهم والتأخير الذي غالباً ما يتسبب فيه تعدد المقاولين من الباطن. والنتيجة هي مبنى سلس وعالي الكفاءة يحقق عائداً قوياً على الاستثمار عاماً بعد عام.",
        },
      ],
      en: [
        {
          title: "Why Cheap MEP Costs You More",
          body: "In the contracting world, cutting corners on MEP systems during the initial construction phase is a critical mistake. Substandard wiring, poorly designed HVAC ducts, or low-quality plumbing materials inevitably lead to frequent breakdowns. The cost of retroactive repairs, operational downtime, and energy waste far exceeds the initial savings.",
        },
        {
          title: "The Return on Investment (ROI) of Quality",
          body: "Advanced HVAC and smart lighting systems significantly lower electricity consumption. In hot climates, an optimized cooling system is the biggest factor in reducing monthly overheads. Premium materials and expert installation mean fewer leaks, fewer electrical faults, and a longer lifespan for the property. Robust electrical and fire-fighting networks protect lives and assets, ensuring strict compliance with civil defense regulations.",
        },
        {
          title: "The Integrated Contractor Advantage",
          body: "By choosing a general contractor like Lamat El-Arabia that handles MEP in-house alongside civil works, project owners avoid the miscommunications and delays often caused by multiple subcontractors. The result is a seamless, highly efficient building that delivers a strong return on investment year after year.",
        },
      ],
    },
    whyUs: {
      ar: [
        "تنفيذ أعمال الكهرباء والسباكة والتكييف والدفاع المدني داخلياً",
        "مواد وأنظمة عالية الجودة تضمن كفاءة الطاقة وطول العمر",
        "مقاول متكامل: أعمال مدنية وكهروميكانيكية تحت إدارة واحدة",
        "التزام صارم بلوائح الدفاع المدني ومعايير السلامة",
        "خبرة +20 عامًا في المشاريع السكنية والتجارية والصناعية",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "In-house electrical, plumbing, HVAC and civil defense execution",
        "Premium materials and systems ensuring energy efficiency and longevity",
        "Integrated contractor: civil and MEP works under one management",
        "Strict compliance with civil defense regulations and safety standards",
        "20+ years of experience across residential, commercial and industrial projects",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تحتاج أنظمة كهروميكانيكية عالية الجودة لمشروعك؟", description: "تواصل معنا للحصول على استشارة فنية مجانية وعرض سعر مخصص لأنظمة MEP.", button: "اطلب عرض سعر" },
      en: { title: "Need Premium MEP Systems for Your Project?", description: "Contact us for a free technical consultation and customized MEP quote.", button: "Request a Quote" },
    },
  },

  "advanced-waterproofing-guide": {
    slug: "advanced-waterproofing-guide",
    title: {
      ar: "لا تنتظر المطر: الدليل الشامل لأنظمة العزل المائي المتقدمة",
      en: "Don't Wait for the Rain: The Ultimate Guide to Advanced Waterproofing",
    },
    subtitle: {
      ar: "حماية استباقية من تسرب المياه للمباني السكنية والتجارية في المملكة العربية السعودية",
      en: "Proactive Water Intrusion Protection for Residential and Commercial Buildings in Saudi Arabia",
    },
    description: {
      ar: "يعد تلف المياه أحد أكثر القوى تدميراً وصمتاً في العقارات. تعرف على كيفية حماية مبناك من التسربات المائية باستخدام أنظمة العزل المائي المتقدمة مع لمعة العربية للمقاولات.",
      en: "Water damage is one of the most silent yet destructive forces in real estate. Learn how to protect your building from water intrusion using advanced waterproofing systems with Lamat El-Arabia Contracting.",
    },
    keywords: {
      ar: [
        "عزل مائي الرياض", "عزل أسطح السعودية", "عزل مائي مباني", "شركة عزل مائي جدة",
        "عزل حمامات وخزانات", "أغشية بيتومينية", "عزل مائي بولي يوريثين",
        "مقاول عزل مائي المملكة", "لمعة العربية عزل مائي", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "waterproofing Saudi Arabia", "roof waterproofing Riyadh", "building waterproofing KSA",
        "bituminous membrane waterproofing", "polyurethane waterproofing", "waterproofing contractor Jeddah",
        "advanced waterproofing systems", "Lamaat Al-Arabiya waterproofing",
      ],
    },
    sections: {
      ar: [
        {
          title: "فهم العزل المائي في البناء الحديث",
          body: "العزل المائي هو عملية هندسية مدنية متخصصة مصممة لمنع المياه من اختراق غلاف المبنى. وهو ضروري للأسطح والأقبية والحمامات والجدران الخارجية. في لمعة العربية، نقوم بتنفيذ طبقات متعددة من الحماية باستخدام الأغشية البيتومينية عالية الجودة، وسوائل البولي يوريثين، والطلاءات الأسمنتية.",
        },
        {
          title: "مخاطر إهمال العزل المائي",
          body: "يمكن أن يؤدي تسرب المياه إلى صدأ حديد التسليح داخل الخرسانة، مما يؤدي إلى ضعف هيكلي تدريجي بمرور الوقت. كما تولد البيئات الرطبة العفن الفطري الذي يؤثر بشدة على جودة الهواء الداخلي وصحة الشاغلين. علاوة على ذلك، يؤدي تقشر الطلاء وانتفاخ الجدران وتلطخ الأسقف إلى تدمير الجاذبية البصرية للمساحات التجارية والسكنية على حد سواء، مما يرفع تكاليف الصيانة بشكل كبير.",
        },
        {
          title: "نهج شامل لعزل مائي فعّال",
          body: "العزل المائي الفعال لا يقتصر فقط على وضع طلاء؛ بل يتطلب إعداداً دقيقاً للسطح، وميولاً مناسبة للتصريف، ودمجاً سلساً مع أنظمة السباكة في المبنى. من خلال معالجة هذه الأعمال المدنية الحيوية أثناء البناء أو التجديدات المستهدفة، يمكن لأصحاب العقارات حماية استثماراتهم ضد التغيرات المناخية غير المتوقعة وأعطال السباكة.",
        },
      ],
      en: [
        {
          title: "Understanding Waterproofing in Modern Construction",
          body: "Waterproofing is a specialized civil engineering process designed to prevent water from penetrating a building's envelope. It is essential for roofs, basements, bathrooms, and exterior walls. At Lamat El-Arabia, we implement multiple layers of protection using high-grade bituminous membranes, polyurethane liquids, and cementitious coatings.",
        },
        {
          title: "The Dangers of Neglecting Waterproofing",
          body: "Water seepage can rust reinforcing steel inside concrete, leading to structural weakening over time. Damp environments breed mold and mildew, which severely impact indoor air quality and occupant health. Peeling paint, blistering walls, and stained ceilings ruin the visual appeal of commercial and residential spaces, driving up maintenance costs significantly.",
        },
        {
          title: "A Holistic Approach to Effective Waterproofing",
          body: "Effective waterproofing is not just about applying a coating; it requires precise surface preparation, proper sloping for drainage, and seamless integration with the building's plumbing systems. By addressing these critical civil works during construction or targeted renovations, property owners can safeguard their investments against unexpected weather changes and plumbing failures.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة تتجاوز 20 عامًا في أعمال العزل المائي السكنية والتجارية",
        "استخدام أفضل الأغشية والمواد: بيتوميني، بولي يوريثين، أسمنتي",
        "تنفيذ متكامل يشمل الإعداد والتطبيق والاختبار وضمان الجودة",
        "فرق متخصصة ومعتمدة في أعمال العزل وحماية المباني",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "20+ years of experience in residential and commercial waterproofing",
        "Use of premium materials: bituminous, polyurethane, and cementitious systems",
        "Integrated execution covering surface prep, application, testing, and quality assurance",
        "Specialized certified teams in waterproofing and building protection works",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تعاني من مشاكل تسرب المياه في مبناك؟", description: "تواصل معنا للحصول على تقييم مجاني وحل متكامل لأنظمة العزل المائي.", button: "اطلب تقييماً مجانياً" },
      en: { title: "Dealing with Water Leakage in Your Building?", description: "Contact us for a free assessment and a comprehensive waterproofing solution.", button: "Get a Free Assessment" },
    },
  },

  "smart-home-villa-construction": {
    slug: "smart-home-villa-construction",
    title: {
      ar: "تجهيز فيلتك للمستقبل: دمج تقنيات المنزل الذكي أثناء البناء",
      en: "Future-Proofing Your Villa: Integrating Smart Home Tech During Construction",
    },
    subtitle: {
      ar: "لماذا يبدأ المنزل الذكي الحقيقي من مرحلة التصميم المعماري وليس بعد الانتهاء من البناء",
      en: "Why a Truly Smart Home Starts at the Architectural Design Phase, Not After Construction",
    },
    description: {
      ar: "إن بناء منزل ذكي يبدأ قبل وقت طويل من نقل الأثاث. تعرف كيف تضمن لمعة العربية دمج أسلاك التحكم الذكي وأنظمة الأمن والتكييف الآلي بسلاسة في هيكل فيلتك منذ البداية.",
      en: "Building a smart home starts long before the furniture is moved in. Learn how Lamat El-Arabia seamlessly integrates smart control wiring, security systems, and automated HVAC into your villa's structure from day one.",
    },
    keywords: {
      ar: [
        "منزل ذكي الرياض", "فيلا ذكية السعودية", "دمج تقنية المنزل الذكي", "أتمتة المنازل السعودية",
        "أنظمة أمن منازل ذكية", "تكييف ذكي فيلا", "إضاءة ذكية منازل",
        "مقاول فيلا ذكية الرياض", "لمعة العربية منزل ذكي", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "smart home villa Saudi Arabia", "smart villa construction Riyadh", "home automation KSA",
        "integrated smart home wiring", "smart HVAC villa", "intelligent lighting villa",
        "smart security systems villa", "Lamaat Al-Arabiya smart home",
      ],
    },
    sections: {
      ar: [
        {
          title: "لماذا يجب دمج التقنية الذكية مبكراً؟",
          body: "غالباً ما يتضمن تعديل منزل مكتمل بالتكنولوجيا الذكية أسلاكاً مكشوفة قبيحة المظهر أو اعتماداً على شبكات لاسلكية غير مستقرة. من خلال التخطيط للأتمتة خلال المراحل المدنية والكهروميكانيكية الأولية، تضمن لمعة العربية دمج الأسلاك المعقدة ومراكز الخوادم وشبكات الاستشعار بسلاسة في الجدران والأسقف دون أي تشويه بصري.",
        },
        {
          title: "الميزات الذكية الرئيسية التي يجب تضمينها في فيلتك",
          body: "تتعلم أنظمة التكييف الذكية روتينك، مما يحسن استخدام الطاقة مع ضمان برودة الفيلا في اللحظة التي تخطو فيها للداخل. كما توفر كاميرات المراقبة السلكية والتحكم في الوصول البيومتري والأقفال الذكية أماناً لا مثيل له دون المساس بالجماليات. علاوة على ذلك، يتم ضبط الستائر الآلية والإضاءة الديناميكية تلقائياً بناءً على الوقت من اليوم، مما يعزز الأجواء ويوفر الكهرباء.",
        },
        {
          title: "دور المقاول العام في بناء الفيلا الذكية",
          body: "يتطلب تنفيذ فيلا ذكية تنسيقاً دقيقاً بين المصممين المعماريين والمهندسين الكهربائيين. وبصفتنا شركة مقاولات متكاملة، فإننا نسد هذه الفجوة. نحن نبني البنية التحتية المادية المصممة لدعم التكنولوجيا المتقدمة للغد، مما يضمن أن منزل أحلامك مجهز حقاً للمستقبل.",
        },
      ],
      en: [
        {
          title: "Why Integrate Smart Tech Early?",
          body: "Retrofitting a completed house with smart technology often involves unsightly exposed wiring or reliance on unstable wireless networks. By planning automation during the initial civil and MEP stages, Lamat El-Arabia ensures that complex wiring, server hubs, and sensor networks are seamlessly built into the walls and ceilings without any visual disruption.",
        },
        {
          title: "Key Smart Features to Include in Your Villa",
          body: "Smart HVAC systems learn your routine, optimizing energy usage while ensuring the villa is cool the moment you step inside. Hardwired IP cameras, biometric access control, and smart locks offer unparalleled security without compromising aesthetics. Motorized curtains and dynamic lighting adjust automatically based on the time of day, enhancing the ambiance and saving electricity.",
        },
        {
          title: "The Role of the General Contractor in Building a Smart Villa",
          body: "Executing a smart villa requires precise coordination between architectural designers and electrical engineers. As an integrated contracting firm, we bridge this gap. We build the physical infrastructure tailored to support the advanced technology of tomorrow, ensuring your dream home is truly future-proofed.",
        },
      ],
    },
    whyUs: {
      ar: [
        "تخطيط متكامل للأنظمة الذكية منذ مرحلة التصميم المعماري",
        "تمديدات كهربائية وشبكية متخصصة مخفية داخل الجدران والأسقف",
        "تنسيق كامل بين فرق الهندسة المعمارية والكهربائية والميكانيكية",
        "خبرة في تنفيذ أنظمة الأمن والتكييف والإضاءة الذكية",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "Integrated smart system planning from the architectural design phase",
        "Specialized electrical and network cabling concealed within walls and ceilings",
        "Full coordination between architectural, electrical, and mechanical engineering teams",
        "Expertise in implementing smart security, HVAC, and lighting systems",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تخطط لبناء فيلا ذكية؟", description: "تواصل معنا للحصول على استشارة مجانية ووضع خطة متكاملة لدمج التقنيات الذكية في فيلتك.", button: "اطلب استشارة" },
      en: { title: "Planning to Build a Smart Villa?", description: "Contact us for a free consultation and a comprehensive plan to integrate smart technology into your villa.", button: "Get a Consultation" },
    },
  },

  "epoxy-flooring-guide-saudi-arabia": {
    slug: "epoxy-flooring-guide-saudi-arabia",
    title: {
      ar: "أرضيات الايبوكسي: الأنواع والمميزات ومجالات الاستخدام في السعودية 2026",
      en: "Epoxy Flooring: Types, Benefits, and Applications in Saudi Arabia 2026",
    },
    subtitle: {
      ar: "من الايبوكسي الصناعي إلى السكني – دليل متكامل لاختيار النوع الأنسب لمشروعك",
      en: "From Industrial to Residential – A Complete Guide to Choosing the Right Type for Your Project",
    },
    description: {
      ar: "دليل شامل عن أرضيات الايبوكسي في السعودية: الأنواع، المميزات، مجالات الاستخدام، خطوات التركيب، ونصائح الصيانة، من خبراء لمآت العربية للمقاولات.",
      en: "A complete guide to epoxy flooring in Saudi Arabia: types, benefits, applications, installation steps, and maintenance tips from the experts at Lamaat Al-Arabia Contracting.",
    },
    keywords: {
      ar: [
        "الايبوكسي", "أرضيات ايبوكسي", "ايبوكسي صناعي", "ارضيات ايبوكسي للمصانع",
        "دهان ايبوكسي", "شركة ايبوكسي في السعودية", "أرضيات ايبوكسي الرياض",
        "ايبوكسي ذاتي التسوية", "ايبوكسي معدني", "لمعة العربية ايبوكسي",
        "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "epoxy flooring Saudi Arabia", "industrial epoxy", "epoxy flooring for factories",
        "epoxy coating", "epoxy flooring company Saudi Arabia", "self-leveling epoxy Riyadh",
        "metallic epoxy flooring KSA", "Lamaat Al-Arabia epoxy flooring",
      ],
    },
    sections: {
      ar: [
        {
          title: "ما هو الايبوكسي وكيف يعمل؟",
          body: "الايبوكسي هو نوع من الراتنجات (البوليمرات) السائلة التي تُطبَّق على الأرضيات الخرسانية في عدة طبقات، لتتصلب بعد ذلك وتُكوّن سطحًا صلبًا، لامعًا، وخاليًا من الفواصل. تتفاعل مادة الايبوكسي كيميائيًا مع مادة مقسّية (Hardener) لتكوين رابطة قوية تلتصق بالسطح الخرساني، وتُنتج طبقة مقاومة للاحتكاك والمواد الكيميائية وتحمل الأوزان الثقيلة.",
        },
        {
          title: "أنواع أرضيات الايبوكسي",
          body: "تتعدد أنواع أرضيات الايبوكسي بحسب الاستخدام والمظهر: الايبوكسي ذاتي التسوية للمساحات التجارية والمعارض، والايبوكسي الصناعي الثقيل لتحمل الأحمال الكبيرة والمعدات في المصانع، والايبوكسي المعدني الذي يعطي مظهرًا ثلاثي الأبعاد يشبه الرخام للفلل الفاخرة، والايبوكسي بالرقائق الملونة للمرائب والمناطق الرياضية، إضافة إلى الايبوكسي المضاد للكهرباء الساكنة لغرف الخوادم والمنشآت الإلكترونية.",
        },
        {
          title: "أبرز مميزات أرضيات الايبوكسي",
          body: "سطح متصل خالٍ من الفواصل يمنع تجمع الأتربة والبكتيريا، مقاومة عالية للمواد الكيميائية والبقع، متانة طويلة الأمد تتحمل حركة المرور الكثيفة والأحمال الثقيلة. يمنح مظهرًا احترافيًا عصريًا مع خيارات تصميم متعددة، كما تُضاف بعض أنواعه مواد مانعة للانزلاق لتحسين معايير السلامة في المنشآت الصناعية. يتميز كذلك بسرعة التركيب مقارنة بالأرضيات التقليدية مما يقلل من فترة توقف العمل.",
        },
        {
          title: "خطوات تركيب أرضيات الايبوكسي",
          body: "يمر تركيب أرضيات الايبوكسي عبر مراحل فنية دقيقة: تجهيز السطح الخرساني بإزالة الأتربة والزيوت عبر السنفرة الميكانيكية أو السندبلاست، ثم إصلاح الشقوق والفجوات، وتطبيق طبقة الأساس (Primer) لضمان التصاق قوي، ثم تركيب طبقة الايبوكسي الرئيسية وفق النوع المختار، وأخيرًا تطبيق الطبقة الواقية النهائية (Top Coat) وإجراء الفحص الشامل قبل التسليم. التطبيق في ظروف جوية غير مناسبة من أكثر أسباب فشل الطبقة شيوعًا.",
        },
        {
          title: "الايبوكسي مقابل الأرضيات التقليدية",
          body: "رغم أن تكلفة التركيب الأولية قد تكون متقاربة مع الأرضيات التقليدية كالبورسلين أو الرخام، إلا أن انخفاض تكاليف الصيانة على مدى سنوات يجعل الايبوكسي خيارًا اقتصاديًا في البيئات الصناعية والتجارية عالية الاستخدام. يتميز بسرعة التنفيذ ومقاومته للرطوبة، غير أنه غير مناسب للمساحات الخارجية المكشوفة للشمس المباشرة دون معالجة خاصة مقاومة للأشعة فوق البنفسجية.",
        },
      ],
      en: [
        {
          title: "What Is Epoxy Flooring and How Does It Work?",
          body: "Epoxy is a type of liquid resin (polymer) applied to concrete floors in multiple layers, which then cures into a hard, glossy, seamless surface. The epoxy resin chemically reacts with a hardener to form a strong bond that adheres to the concrete substrate, producing a layer resistant to abrasion and chemicals, capable of withstanding heavy loads.",
        },
        {
          title: "Types of Epoxy Flooring",
          body: "Epoxy flooring comes in several types: Self-Leveling Epoxy for commercial spaces and showrooms requiring a clean, professional look; Heavy-Duty Industrial Epoxy engineered for forklift traffic and heavy loads in factories and warehouses; Metallic Epoxy creating a striking 3D marble-like finish for luxury villas and showrooms; Flake/Quartz Epoxy blending colored flakes for garages and recreation areas; and Anti-Static Epoxy for server rooms and electronics facilities requiring ESD control.",
        },
        {
          title: "Key Benefits of Epoxy Flooring",
          body: "A seamless, joint-free surface prevents dust and bacteria buildup, making daily cleaning significantly easier. High resistance to chemicals and stains suits industrial environments. Long-term durability withstands heavy traffic and loads with minimal wear, reducing long-term maintenance costs. It delivers a professional, modern appearance with multiple design options. Anti-slip additives can be incorporated for improved safety, and relatively fast installation reduces facility downtime.",
        },
        {
          title: "The Epoxy Flooring Installation Process",
          body: "Installation involves precise technical stages: surface preparation by removing dust, oils, and cracks through mechanical grinding or sandblasting; concrete repair to address any cracks; primer application for strong adhesion; main epoxy layer installation per the selected type; top coat application for scratch and UV resistance; and a final inspection for bubbles or defects. Working with a specialized team is essential — applying epoxy under unsuitable temperature or humidity conditions is one of the most common causes of coating failure.",
        },
        {
          title: "Epoxy vs. Traditional Flooring",
          body: "While initial installation costs may be comparable to porcelain tile or marble, lower maintenance costs over the years often make epoxy the more economical choice in high-traffic industrial and commercial environments. It offers faster installation and forms a sealed moisture barrier protecting the concrete beneath. However, epoxy is not well-suited to outdoor areas with extended direct sunlight exposure without special UV-resistant treatment, where certain stone floors remain better suited.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة منذ عام 2005 في تطبيق أرضيات الايبوكسي الصناعية والتجارية والسكنية",
        "فريق فني مؤهل في تجهيز الأسطح واختيار المواد المناسبة لكل بيئة استخدام",
        "خدمات متكاملة تشمل السندبلاست وتجهيز الأسطح ضمن أعمال التشطيبات",
        "تنفيذ دقيق وفق المواصفات مع ضمان شامل على جميع الأعمال",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "Experience since 2005 in industrial, commercial, and residential epoxy flooring",
        "Qualified technical team in surface preparation and selecting the right materials for each use case",
        "Integrated services including sandblasting and surface preparation within finishing works",
        "Precise execution per specifications with a full warranty on all works",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تفكر في تركيب أرضية ايبوكسي لمنشأتك؟", description: "تواصل مع فريق لمآت العربية لتحديد النوع الأنسب لاحتياجاتك والحصول على استشارة فنية مجانية.", button: "اطلب استشارة مجانية" },
      en: { title: "Thinking About Epoxy Flooring for Your Facility?", description: "Get in touch with the Lamaat Al-Arabia team to identify the right type for your needs and get a free technical consultation.", button: "Get a Free Consultation" },
    },
  },

  "interior-finishing-guide-saudi-arabia": {
    slug: "interior-finishing-guide-saudi-arabia",
    title: {
      ar: "التشطيب الداخلي للفلل والشقق في السعودية: الدليل الشامل 2026",
      en: "Interior Finishing for Villas & Apartments in Saudi Arabia: The Complete 2026 Guide",
    },
    subtitle: {
      ar: "من أعمال التأسيس حتى التشطيبات النهائية – مراحل ومستويات وعوامل التكلفة",
      en: "From First-Fix to Final Finishes – Stages, Quality Levels, and Cost Factors",
    },
    description: {
      ar: "دليلك الكامل للتشطيب الداخلي في السعودية 2026: المراحل، الأنواع، عوامل التكلفة، وأهم الأخطاء الشائعة، مع نصائح من خبراء لمآت العربية للمقاولات.",
      en: "A complete guide to interior finishing in Saudi Arabia for 2026: stages, types, cost factors, and common mistakes to avoid, with expert tips from Lamaat Al-Arabia Contracting.",
    },
    keywords: {
      ar: [
        "التشطيب الداخلي", "تشطيب شقق", "تشطيب فلل", "مراحل التشطيب",
        "شركة تشطيبات في السعودية", "تشطيب داخلي فاخر", "تشطيب داخلي الرياض",
        "مراحل التشطيب الداخلي", "تكلفة تشطيب فيلا", "مقاول تشطيب موثوق",
        "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "interior finishing Saudi Arabia", "villa finishing KSA", "apartment finishing",
        "interior fit-out Riyadh", "luxury interior finishing", "interior finishing stages",
        "villa finishing cost Saudi Arabia", "reliable finishing contractor KSA",
        "Lamaat Al-Arabia interior finishing",
      ],
    },
    sections: {
      ar: [
        {
          title: "ما هو التشطيب الداخلي ولماذا يستحق اهتمامك؟",
          body: "التشطيب الداخلي هو مجموعة الأعمال التي تُنفذ بعد استكمال الهيكل الإنشائي للمبنى، وتشمل كل ما يظهر للعين ويُلمس يوميًا: الأرضيات، الجدران، الأسقف، الأبواب، الدهانات، والتشطيبات الكهربائية والصحية الظاهرة. جودة التشطيب تحدد العمر الافتراضي للمواد والتجهيزات، والراحة اليومية وكفاءة المساحة، والقيمة السوقية للعقار عند البيع أو التأجير، وتكاليف الصيانة المستقبلية.",
        },
        {
          title: "مراحل التشطيب الداخلي خطوة بخطوة",
          body: "ينفَّذ التشطيب الداخلي وفق تسلسل هندسي دقيق: أعمال التأسيس (السباكة والكهرباء) داخل الجدران قبل إغلاقها، ثم العزل المائي والحراري خاصة في الأسطح والحمامات، ثم اللياسة وتجهيز الأسطح، ثم تركيب قواطع الأبواب والأرضيات (رخام، بورسلين، باركيه، أو إيبوكسي)، ثم أعمال الجبس والأسقف المعلقة والإضاءة المخفية، وأخيرًا الدهانات والتركيبات النهائية. أي إخلال بهذا الترتيب يؤدي إلى مشاكل باهظة التكلفة لاحقًا.",
        },
        {
          title: "أنواع ومستويات التشطيب الداخلي",
          body: "يتدرج التشطيب حسب مستوى الجودة من الاقتصادي (مواد جيدة بأسعار معقولة) إلى المتوسط (توازن بين الجودة والتكلفة وهو الأكثر طلبًا) إلى الفاخر (مواد مستوردة وتصاميم مخصصة) وصولًا إلى فائق الفخامة للقصور والمشاريع الفندقية. وحسب النمط التصميمي يتراوح بين الحديث (خطوط بسيطة وألوان محايدة) والكلاسيكي (تفاصيل مزخرفة وأعمال جبس معقدة) والنيو كلاسيك الذي يجمع البساطة العصرية بالفخامة الكلاسيكية.",
        },
        {
          title: "أبرز الأخطاء الشائعة عند التشطيب الداخلي",
          body: "تخطي مرحلة التخطيط الهندسي المسبق والبدء بالتنفيذ دون مخططات واضحة للكهرباء والسباكة، واختيار المقاول بناءً على الأقل سعرًا فقط، والترتيب غير الصحيح لمراحل التنفيذ مما يؤدي لإعادة العمل وهدر المواد، وسوء تخطيط أماكن المفاتيح والمقابس، وعدم فحص أعمال السباكة والعزل المائي بدقة قبل إغلاق الأرضيات، وغياب الإشراف الهندسي المتخصص أثناء التنفيذ.",
        },
        {
          title: "نصائح عملية لاختيار شركة تشطيب داخلي موثوقة",
          body: "راجع أعمالًا سابقة فعلية وليس فقط صور العروض التقديمية. تأكد من وجود فريق هندسي مختص للإشراف اليومي. اطلب عقدًا واضحًا يحدد المواد والمواصفات والجدول الزمني وبنود الضمان. تحقق من قدرة الشركة على تنسيق التخصصات المختلفة (كهرباء، سباكة، تكييف، ديكور) تحت مظلة واحدة. اسأل عن مدة الضمان على أعمال العزل والسباكة والكهرباء، وقارن بين عروض أسعار متعددة مبنية على نفس المواصفات الفنية.",
        },
      ],
      en: [
        {
          title: "What Is Interior Finishing, and Why Does It Matter?",
          body: "Interior finishing covers all the work carried out after a building's structural shell is complete — everything you see and touch daily: flooring, walls, ceilings, doors, paint, and the visible electrical and plumbing fittings. Finishing quality determines the lifespan of interior materials and fixtures, daily comfort and space efficiency, the property's market value when sold or rented, and future maintenance costs.",
        },
        {
          title: "The Interior Finishing Process, Step by Step",
          body: "Interior finishing follows a precise engineering sequence: first-fix electrical and plumbing work inside walls before they're closed; waterproofing and thermal insulation on roofs, bathrooms, and kitchens; plastering and surface preparation; door frame and flooring installation (marble, porcelain, parquet, or epoxy); gypsum work, suspended ceilings, and concealed lighting; then painting and final fixtures. Disrupting this order often leads to costly rework — following it with a specialized contractor saves time and money.",
        },
        {
          title: "Types and Levels of Interior Finishing",
          body: "Quality levels range from Economy (good materials at reasonable prices for budget projects) to Standard/Mid-range (the most requested tier balancing quality and cost) to Super Luxe (imported materials and custom designs) to Ultra Luxe (fully bespoke solutions for palaces and hospitality projects). Design styles include Modern (clean lines, neutral colors, open layouts), Classic (ornate detailing and elaborate gypsum work), and Neo-classic — the most requested style in the Saudi market today — blending contemporary simplicity with classic elegance.",
        },
        {
          title: "The Most Common Interior Finishing Mistakes",
          body: "Skipping the engineering planning phase and starting without clear electrical and plumbing layouts. Choosing a contractor based on price alone without evaluating experience or past work. Executing phases out of sequence, leading to rework and wasted materials. Poor planning of switch and socket placement — costly and difficult to fix once walls are closed. Inadequate inspection of plumbing and waterproofing before floors and walls are sealed. Lack of specialized engineering supervision during execution.",
        },
        {
          title: "Tips for Choosing a Reliable Interior Finishing Contractor",
          body: "Review actual completed projects, not just renders, and ask to visit a finished site. Confirm a dedicated engineering team supervises daily execution. Request a clear contract specifying materials, specifications, timeline, and warranty terms. Check the contractor's ability to coordinate all disciplines (electrical, plumbing, HVAC, decor) under one roof. Ask about warranty periods on insulation, plumbing, and electrical work. Compare multiple quotes built on identical technical specifications for a fair comparison.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة تزيد عن 20 عامًا في تشطيبات الفلل والمجمعات السكنية والمشاريع التجارية",
        "فريق يضم أكثر من 150 كوادر فنية متخصصة في مختلف تخصصات التشطيب",
        "تنسيق متكامل بين الكهرباء والسباكة والتكييف والديكور تحت إشراف هندسي واحد",
        "نظام تسليم مفتاح يضمن جودة التنفيذ في كل مرحلة مع ضمان شامل بعد التسليم",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "20+ years of experience in villa, residential compound, and commercial finishing",
        "Team of more than 150 qualified technical professionals across all finishing disciplines",
        "Integrated coordination between electrical, plumbing, HVAC, and decor under one engineering oversight",
        "Turnkey delivery system ensuring quality at every stage with a comprehensive post-handover warranty",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تخطط لمشروع تشطيب داخلي لفيلتك أو منشأتك التجارية؟", description: "تواصل مع فريق لمآت العربية للحصول على استشارة واستعراض أعمالنا السابقة في الرياض وجدة والقصيم.", button: "اطلب استشارة" },
      en: { title: "Planning an Interior Finishing Project for Your Villa or Commercial Facility?", description: "Get in touch with the Lamaat Al-Arabia team for a consultation and to review our completed projects across Riyadh, Jeddah, and Qassim.", button: "Get a Consultation" },
    },
  },

  "modern-construction-equipment-saudi-arabia": {
    slug: "modern-construction-equipment-saudi-arabia",
    title: {
      ar: "المعدات الحديثة في البناء: كيف غيّرت الشدات الميكانيكية وجه النجارة الإنشائية",
      en: "Modern Construction Equipment: How Mechanical Formwork Transformed Structural Carpentry",
    },
    subtitle: {
      ar: "من الشدات الخشبية إلى الأنظمة الميكانيكية – سرعة وجودة وتوفير في مشاريع البناء",
      en: "From Timber Formwork to Mechanical Systems – Speed, Quality & Savings in Construction Projects",
    },
    description: {
      ar: "تعرّف على دور المعدات الحديثة في البناء، وكيف رفعت الشدات الميكانيكية كفاءة النجارة الإنشائية وسرّعت أعمال العظم بدقة أعلى وتكلفة أقل.",
      en: "Learn how modern construction equipment and mechanical formwork systems have elevated structural carpentry efficiency, accelerating shell & core works with higher precision and lower cost.",
    },
    keywords: {
      ar: [
        "المعدات الحديثة في البناء", "الشدات الميكانيكية", "نجارة البناء", "النجارة الإنشائية",
        "أعمال العظم", "شركة مقاولات في السعودية", "شدات معدنية", "شدات خشبية",
        "لمعة العربية مقاولات", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "modern construction equipment Saudi Arabia", "mechanical formwork KSA", "structural carpentry",
        "shell and core works", "formwork systems", "construction contractor Saudi Arabia",
        "steel formwork vs timber", "Lamaat Al-Arabiya construction",
      ],
    },
    sections: {
      ar: [
        {
          title: "الشدات الميكانيكية: ثورة في نجارة البناء الحديثة",
          body: "اعتمدت النجارة التقليدية لعقود على الأخشاب والدعامات الخشبية التي تُقصّ وتُثبّت في الموقع قطعة قطعة. أما الشدات الميكانيكية فهي أنظمة جاهزة مصنّعة من الفولاذ أو الألمنيوم، تُركّب بوصلات محكمة وتُفك وتُعاد استخدامها عشرات المرات. وتشمل أشهر أنواعها: شدات الجدران والأعمدة المعدنية، والشدات المنزلقة والمتسلقة للأبراج، ودعامات الأسقف القابلة للتعديل، وأنظمة الشدات الطاولية. الثورة الحقيقية تكمن في قابلية إعادة الاستخدام: الشدة الخشبية تخدم مرتين أو ثلاثاً، بينما المعدنية تخدم مئات الدورات.",
        },
        {
          title: "دور المعدات الحديثة في رفع كفاءة النجارة الإنشائية",
          body: "تسريع دورة الطابق لتُقاس بالأيام لا بالأسابيع بفضل الشدات الجاهزة وأبراج الرفع. جودة سطح خرساني أعلى بفضل الألواح المعدنية المغطاة بالفيلم التي تعطي أسطحاً مستوية ومتطابقة. تقليل الهدر بالقص المسبق والوحدات المعيارية. دعم الجودة والمتانة بمنع تسرب الأسمنت من الفواصل وتقليل ظاهرة التعشيش. الاستفادة من الخرسانة الجاهزة والمضخات عالية القدرة داخل شدة قوية ومحكمة.",
        },
        {
          title: "التقنيات الحديثة: نحو بناء أسرع وأكثر دقة",
          body: "نمذجة معلومات البناء (BIM) للتخطيط المسبق واكتشاف التعارضات قبل التنفيذ. أجهزة المسح بالليزر والمحطات المتكاملة تضبط المناسيب بدقة المليمترات. المسح ثلاثي الأبعاد والطائرات المسيّرة لمتابعة تقدم الأعمال. الحساسات والمراقبة الذكية لتحديد الوقت الأمثل لفك الشدة. الأنظمة الوقائية المدمجة مع الشدة لتقليل حوادث السقوط. تدريب الكوادر عنصر جوهري لأن الشدة الميكانيكية تتطلب فنيين يعرفون تسلسل التركيب وحدود التحميل.",
        },
        {
          title: "واجهة المبنى وأهميتها بعد اكتمال الهيكل",
          body: "بعد اكتمال الهيكل الخرساني تأتي الواجهة لتتحدث باسم المبنى. أهميتها تشمل: الحماية من الظروف الجوية كحرارة الصيف والغبار والرطوبة الساحلية، وكفاءة الطاقة حيث تخفض الواجهة المعزولة أحمال التكييف، والقيمة السوقية حيث ترفع الواجهة الجذابة سعر البيع والإيجار، والاتساق مع الهيكل حيث تنعكس جودة الشدة على استواء الواجهة. ننصح بالتفكير في الواجهة منذ مرحلة التصميم الإنشائي لا بعد الانتهاء من العظم.",
        },
        {
          title: "أسباب اختلاف تكاليف أعمال العظم من منطقة لأخرى",
          body: "طبيعة التربة والأساسات: التربة الضعيفة أو ذات المياه الجوفية المرتفعة ترفع تكلفة الأساسات. أسعار مواد البناء والنقل: المسافة إلى مصانع الخرسانة والحديد تؤثر على السعر. توفر العمالة الماهرة: المدن الكبرى قد تشهد ضغطاً على العمالة الفنية. الظروف المناخية: الصب في الأجواء الحارة يتطلب معالجة خاصة. طبيعة المشروع: عدد الأدوار وتعقيد الأعمدة والبلاطات تحدد نوع الشدة المطلوبة. حجم الشركة ومعداتها: الشركة المجهزة بمعدات ملكها تنجز أسرع وتتحكم بالتكلفة.",
        },
      ],
      en: [
        {
          title: "Mechanical Formwork: A Revolution in Modern Structural Carpentry",
          body: "Traditional carpentry relied for decades on timber props cut and fixed piece by piece on site. Mechanical formwork systems, made from steel or aluminium, use precision connectors and can be reused dozens of times. Key types include wall and column panel systems, slip and climbing forms for towers, adjustable steel shores for slabs, and table formwork units lifted by crane from floor to floor. The real breakthrough is reusability: timber serves two or three pours, while steel systems last hundreds of cycles, steadily lowering the cost per square metre.",
        },
        {
          title: "How Modern Equipment Elevates Structural Carpentry Efficiency",
          body: "Floor cycle times are measured in days rather than weeks thanks to pre-assembled formwork and lifting towers. Film-faced steel panels produce flat, uniform concrete surfaces that need less plastering, shortening the finishing phase. Pre-cut modules and standardised units slash on-site waste. Tight panel joints prevent cement leakage and reduce honeycombing inside the concrete mass. High-capacity pumps paired with robust formwork improve pour quality and reduce the risk of localised collapse.",
        },
        {
          title: "Digital Technologies: Faster and More Precise Construction",
          body: "BIM (Building Information Modelling) enables pre-construction planning and clash detection between structural and MEP elements. Laser surveying and total stations set levels and axes to millimetre accuracy. 3D scanning and drones track progress and compare as-built conditions against the design. Embedded sensors monitor concrete maturity to determine the optimal stripping time instead of guesswork. Integrated safety rails and platforms built into the formwork itself reduce fall incidents. Workforce training remains essential because mechanical formwork demands technicians who understand assembly sequences and load limits.",
        },
        {
          title: "Why Building Facades Matter After the Structure Is Complete",
          body: "Once the concrete frame is finished, the facade becomes the building's public face. Its importance goes beyond aesthetics: it shields against harsh weather — summer heat, dust, and coastal humidity; a well-insulated facade cuts cooling loads and electricity bills; an attractive facade raises sale and rental values and gives the project a clear visual identity; and formwork quality directly affects facade flatness — a precise frame means an easier, cheaper cladding installation. We recommend planning the facade from the structural design stage, not after shell & core is done.",
        },
        {
          title: "Why Shell & Core Costs Vary by Region",
          body: "Soil conditions and foundations: weak, sandy, or high-water-table soils increase foundation costs. Material and transport prices: distance from concrete and steel plants affects the final price. Skilled labour availability: major cities may face skilled-trade shortages that push wages up. Climate: hot-weather concrete pours require special curing and admixtures. Project complexity: the number of floors, column layouts, and slab shapes determine formwork type and cost. Contractor capacity: a firm that owns its equipment completes work faster and controls costs better than one that rents everything.",
        },
      ],
    },
    whyUs: {
      ar: [
        "أكثر من 20 عامًا من الخبرة في أعمال العظم والتنفيذ الإنشائي",
        "أنظمة شدات ميكانيكية حديثة مملوكة للشركة",
        "فريق هندسي متخصص في تصميم الشدات وحساب الأحمال",
        "التزام بمعايير الكود السعودي وإجراءات السلامة في كل مرحلة",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "20+ years of experience in shell & core and structural execution",
        "Company-owned modern mechanical formwork systems",
        "Specialised engineering team for formwork design and load calculations",
        "Full compliance with Saudi Building Code and safety procedures at every stage",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تبحث عن شريك إنشائي يمتلك معدات حديثة؟", description: "تواصل معنا لمناقشة مشروعك والحصول على عرض سعر مفصّل لأعمال العظم والتشطيب.", button: "اطلب عرض سعر" },
      en: { title: "Looking for a Construction Partner with Modern Equipment?", description: "Contact us to discuss your project and get a detailed quote for shell & core and finishing works.", button: "Request a Quote" },
    },
  },

  "saudi-building-code-safety-guide": {
    slug: "saudi-building-code-safety-guide",
    title: {
      ar: "وسائل الأمان والكود السعودي: دليلك لسلامة المنشآت والمشاريع الإنشائية",
      en: "Safety Standards & the Saudi Building Code: Your Guide to Structural and Site Safety",
    },
    subtitle: {
      ar: "الكود السعودي للبناء، وسائل الأمان، مقارنة بالكود الإماراتي، التراخيص، التأمين، واختبار التربة",
      en: "Saudi Building Code, Safety Measures, UAE Code Comparison, Permits, Insurance & Soil Testing",
    },
    description: {
      ar: "دليل شامل عن الكود السعودي للبناء ووسائل الأمان والسلامة المهنية، ومقارنته بالكود الإماراتي، مع أهمية التراخيص والتأمين واختبار التربة واختيار شركة المقاولات.",
      en: "A comprehensive guide to the Saudi Building Code, construction safety measures, occupational health standards, a comparison with the UAE code, and the importance of permits, insurance, soil testing, and choosing the right contractor.",
    },
    keywords: {
      ar: [
        "الكود السعودي للبناء", "وسائل الأمان في البناء", "السلامة المهنية", "الكود الإماراتي",
        "تراخيص البناء", "اختبار التربة", "شركة مقاولات", "معايير البناء الخليجي",
        "لمعة العربية مقاولات", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "Saudi Building Code", "construction safety standards KSA", "occupational safety construction",
        "UAE building code comparison", "building permits Saudi Arabia", "soil testing construction",
        "construction contractor safety", "Lamaat Al-Arabiya safety",
      ],
    },
    sections: {
      ar: [
        {
          title: "الكود السعودي: المعيار الأساسي للسلامة الإنشائية",
          body: "كود البناء السعودي (SBC) هو المرجع الفني الموحد لأعمال التصميم والإنشاء في المملكة، وتشرف عليه اللجنة الوطنية لكود البناء السعودي. يتكوّن من أجزاء متخصصة تشمل: الاشتراطات المعمارية والإنشائية (الأحمال، الأساسات، الخرسانة المسلحة، المنشآت الفولاذية)، واشتراطات الحماية من الحريق (مسارات الهروب، أنظمة الإنذار والإطفاء)، والأنظمة الميكانيكية والكهربائية والصحية، وترشيد الطاقة والعزل الحراري. قيمة الكود أنه يوحّد اللغة الفنية بين المالك والمصمم والمقاول.",
        },
        {
          title: "وسائل الأمان: حماية المنشآت وموقع التنفيذ",
          body: "تنقسم وسائل الأمان إلى قسمين: أمان المنشأة بعد التسليم (تصميم إنشائي يراعي الأحمال والزلازل، جودة الخرسانة والحديد، أنظمة الحماية من الحريق، عزل ضد الرطوبة والحرارة)، وأمان الموقع أثناء التنفيذ (تأمين الحفريات، سلامة الشدات والأعمال المؤقتة وفحصها قبل كل صب، حواجز حماية من السقوط، تنظيم حركة الآليات والرافعات). تكتمل الصورة بالتفتيش الدوري والتوثيق لكل مرحلة قبل الانتقال لما بعدها.",
        },
        {
          title: "دليل السلامة المهنية وفقاً لاشتراطات الكود السعودي",
          body: "معدات الوقاية الشخصية: خوذات وأحذية وسترات عاكسة وقفازات وأحزمة أمان. العمل على المرتفعات: سقالات معتمدة ومنصات آمنة وتدريب العاملين. إدارة الأحمال والرافعات: فحص المعدات وتشغيلها بمشغلين مؤهلين فقط. الكهرباء المؤقتة: لوحات معزولة ومؤرّضة. الحماية من الحرارة: توفير المياه والظلال والالتزام بقرار منع العمل وقت الظهيرة صيفاً. الاستعداد للطوارئ: خطة إخلاء وحقائب إسعافات أولية. مسؤول سلامة متفرغ في المشاريع الكبيرة.",
        },
        {
          title: "الكود السعودي والكود الإماراتي: مقارنة هندسية شاملة",
          body: "أوجه التوافق: كلا البلدين يعتمد على مرجعيات عالمية حديثة، ويشترط كلاهما معايير الجودة والسلامة، ويفرض إجراءات حماية من الإجهاد الحراري. أوجه الاختلاف: في السعودية كود وطني موحد، بينما تعمل الإمارات بأكواد تختلف من إمارة لأخرى. يختلف التركيز بحسب التربة والمناخ وطبيعة المدن. لكل دولة جهات ترخيص وتفتيش ومنصات ومتطلبات مستندات خاصة. لا تفترض أن تصميماً معتمداً في بلد يُقبل تلقائياً في الآخر.",
        },
        {
          title: "تراخيص البناء والتأمين واختبار التربة",
          body: "رخصة البناء هي الضمان النظامي بأن مشروعك خضع لمراجعة الجهات المختصة عبر منصة بلدي. التأمين يشمل تأمين أخطار المقاولين والمسؤولية تجاه الغير والعمال والعيوب الخفية. اختبار التربة يُفضَّل إجراؤه قبل الشراء لمعرفة التكلفة الحقيقية للأساسات والوقاية من مخاطر التربة الانتفاشية والسبخية، ولتقييم السعر العادل للأرض. شركات المقاولات المصنفة تتفوق على المقاول الفرد بالفريق الهندسي المتكامل والقدرة المالية والالتزام النظامي.",
        },
        {
          title: "أخطاء شائعة تخالف اشتراطات الكود والسلامة",
          body: "البدء قبل اكتمال الترخيص يعرّض المشروع للإيقاف والغرامات. إهمال فحص عينات الخرسانة لا يكشف المقاومة الفعلية. تقليص بنود السلامة لتوفير التكلفة قد يؤدي لحادث يكلف أضعافه. تعديل المخططات في الموقع دون اعتماد هندسي قد يخلّ بتوزيع الأحمال. غياب التوثيق يُضعف موقف المالك عند أي نزاع. الوقاية من هذه الأخطاء لا تحتاج لميزانية كبيرة بل لانضباط وإدارة واعية.",
        },
      ],
      en: [
        {
          title: "The Saudi Building Code: The Foundation of Structural Safety",
          body: "The Saudi Building Code (SBC) is the unified technical reference for all design and construction work in the Kingdom, overseen by the National Committee for the Saudi Building Code. It comprises specialised sections covering: architectural and structural requirements (loads, foundations, reinforced concrete, steel structures), fire protection (escape routes, alarm and suppression systems), mechanical, electrical and plumbing systems, and energy conservation and thermal insulation. The Code's value lies in establishing a common technical language among owners, designers, and contractors.",
        },
        {
          title: "Safety Measures: Protecting the Structure and the Site",
          body: "Safety splits into two linked areas. Post-handover building safety includes structural design accounting for live, dead, wind, and seismic loads; tested concrete and steel quality; fire-protection systems with rated doors, escape routes, and sprinklers; and moisture and thermal insulation. On-site execution safety covers excavation shoring and barriers, formwork inspection before every pour, fall-protection nets and guardrails, and controlled crane and heavy-equipment zones. The picture is completed by periodic inspection and documentation — every phase is checked and signed off before the next begins.",
        },
        {
          title: "Occupational Safety Under Saudi Building Code Requirements",
          body: "PPE includes hard hats, safety boots, reflective vests, gloves, goggles, and harnesses matched to the task. Working at height requires certified scaffolding, safe platforms, and trained operators. Crane and load management demands equipment inspections and qualified operators only. Temporary electrics must use earthed, insulated panels with code-compliant wiring. Heat-stress protection means providing water, shade, and rest breaks, and observing the midday work ban during summer. Emergency readiness requires a clear evacuation plan, first-aid kits, and trained responders. Large projects need a dedicated full-time safety officer.",
        },
        {
          title: "Saudi Building Code vs. UAE Building Code: A Comprehensive Comparison",
          body: "Similarities: both countries base their codes on recognised international standards, both require quality and safety compliance before licensing and handover, and both mandate heat-stress protections for workers. Differences: Saudi Arabia uses a single national code under one national committee, while the UAE operates with codes that vary by emirate — Dubai and Abu Dhabi each have their own requirements, plus federal fire and life-safety codes. Each country — and each emirate — has its own licensing and inspection authorities, platforms, and document requirements. Never assume a design approved in one country is automatically accepted in the other.",
        },
        {
          title: "Building Permits, Insurance & Soil Testing",
          body: "A building permit is not just paperwork — it is the legal guarantee that your project has been reviewed by the competent authorities through the Baladi platform. Insurance typically covers contractors' all-risks, third-party liability, worker protection, and latent-defect coverage. Soil testing is ideally done before purchasing the land to reveal the true foundation cost, guard against risks like expansive or sabkha soils, and provide an objective basis for price negotiation. Classified contracting companies outperform individual contractors through integrated engineering teams, financial resilience, regulatory compliance, and transparent cost reporting.",
        },
        {
          title: "Common Mistakes That Violate Code and Safety Requirements",
          body: "Starting before the permit is issued exposes the project to fines, stoppages, and demolition orders. Skipping concrete sample testing means the actual strength remains unknown. Cutting safety line items to save cost can lead to an accident that costs many times more and halts work for weeks. Modifying structural drawings on site without engineering approval can compromise load distribution. Failing to document inspection results and supervision reports weakens the owner's position in any dispute or warranty claim. Preventing these mistakes requires discipline and informed management, not a bigger budget.",
        },
      ],
    },
    whyUs: {
      ar: [
        "التزام صارم بالكود السعودي للبناء في كل مرحلة من مراحل التنفيذ",
        "فريق سلامة مهنية متفرغ ومؤهل لإدارة مخاطر الموقع",
        "خبرة تتجاوز 20 عامًا في المشاريع السكنية والتجارية والصناعية",
        "توثيق هندسي شامل وتقارير فحص دورية لكل مرحلة",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "Strict compliance with the Saudi Building Code at every construction stage",
        "Dedicated, qualified occupational safety team for on-site risk management",
        "20+ years of experience across residential, commercial, and industrial projects",
        "Comprehensive engineering documentation and periodic inspection reports for every phase",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تبحث عن شركة مقاولات ملتزمة بأعلى معايير السلامة؟", description: "تواصل معنا للحصول على استشارة أولية ومناقشة متطلبات مشروعك وفق الكود السعودي.", button: "اطلب استشارة" },
      en: { title: "Looking for a Contractor Committed to the Highest Safety Standards?", description: "Contact us for an initial consultation and to discuss your project requirements under the Saudi Building Code.", button: "Get a Consultation" },
    },
  },
  "preventive-maintenance-contracts-buildings": {
    slug: "preventive-maintenance-contracts-buildings",
    title: {
      ar: "عقود الصيانة الدورية الوقائية للمباني: الدرع الذي يحمي استثمارك العقاري",
      en: "Preventive Maintenance Contracts: The Shield That Protects Your Real Estate Investment",
    },
    subtitle: {
      ar: "صيانة دورية شاملة للكهرباء والسباكة والتكييف وأنظمة السلامة في المباني التجارية والسكنية والصناعية",
      en: "Comprehensive Periodic Maintenance for Electrical, Plumbing, HVAC & Safety Systems in Commercial, Residential & Industrial Buildings",
    },
    description: {
      ar: "دليل شامل عن عقود الصيانة الدورية الوقائية للمباني: الفرق بين الصيانة الوقائية والطارئة، ما يشمله العقد، الجدول الزمني المثالي، الفوائد المالية، وكيفية اختيار شركة صيانة معتمدة. لمعة العربية للمقاولات – خبرة +20 عامًا.",
      en: "A comprehensive guide to preventive maintenance contracts for buildings: reactive vs. preventive maintenance, what the contract covers, the ideal inspection schedule, financial benefits, and how to choose a certified provider. Lamaat Al-Arabiya Contracting – 20+ years of experience.",
    },
    keywords: {
      ar: [
        "عقود صيانة دورية", "صيانة وقائية مباني", "صيانة مباني تجارية", "صيانة فلل",
        "صيانة تكييف السعودية", "صيانة كهرباء وسباكة", "شركة صيانة مباني الرياض",
        "عقد صيانة شامل", "لمعة العربية مقاولات", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "preventive maintenance contracts", "building maintenance Saudi Arabia", "HVAC maintenance KSA",
        "commercial building maintenance", "villa maintenance contract", "electrical plumbing maintenance",
        "maintenance contractor Riyadh", "Lamaat Al-Arabiya maintenance",
      ],
    },
    sections: {
      ar: [
        {
          title: "ما الفرق بين الصيانة الوقائية والصيانة الطارئة؟",
          body: "الصيانة الطارئة (Reactive Maintenance) هي ما يحدث حين تتعطل وحدة كهربائية أو يتسرب خط مياه، فتتصل بفني لإصلاح المشكلة فورًا. هذا النمط يبدو أرخص على المدى القصير لأنك لا تدفع شيئًا حتى تحدث المشكلة، لكنه في الحقيقة الأسلوب الأغلى على المدى الطويل، لأن الأعطال الطارئة تأتي دائمًا مصحوبة بثلاث تكاليف خفية: توقف النشاط، السعر المرتفع لخدمة الطوارئ، وضرر إضافي قد يلحق بأجزاء أخرى من النظام نتيجة العطل الأصلي.\n\nالصيانة الدورية الوقائية (Preventive Maintenance) هي عكس ذلك تمامًا: فحص وصيانة دورية مجدولة مسبقًا لكل الأنظمة الحيوية في المبنى، قبل ظهور أي عطل، بهدف اكتشاف علامات التآكل المبكرة ومعالجتها قبل أن تتحول إلى أعطال كاملة. الفارق يشبه الفرق بين زيارة الطبيب لفحص دوري سنوي، وبين الذهاب للطوارئ بعد تجاهل الأعراض لأشهر.",
        },
        {
          title: "ماذا يشمل عقد الصيانة الدورية عند لمعة العربية؟",
          body: "عقد الصيانة الشامل الذي نقدمه يغطي الأنظمة الأساسية التي تحدد تشغيل أي مبنى، تجاريًا كان أو سكنيًا أو صناعيًا:\n\nالكهرباء: فحص اللوحات الكهربائية الرئيسية والفرعية، قياس الأحمال، التأكد من سلامة التأريض، وفحص نقاط الاتصال المعرّضة للسخونة الزائدة التي قد تسبب حرائق كهربائية.\n\nالسباكة: فحص شبكات المياه والصرف، الكشف المبكر عن أي تسريبات داخل الجدران أو تحت الأرضيات، وصيانة المضخات وخزانات المياه.\n\nالتكييف (HVAC): تنظيف الفلاتر والملفات، فحص غاز التبريد، صيانة الضواغط، وهي الخدمة الأعلى طلبًا في المناخ السعودي حيث يعمل نظام التكييف بأقصى طاقته لشهور متواصلة.\n\nالدفاع المدني والسلامة: فحص أنظمة الإنذار والإطفاء، التأكد من صلاحية طفايات الحريق، واختبار مخارج الطوارئ وأنظمة الإضاءة الاحتياطية.",
        },
        {
          title: "الجدول الزمني المثالي لفحوصات الصيانة",
          body: "ليست كل الأنظمة تحتاج نفس وتيرة الفحص. جدول الصيانة الفعّال عادة ما يتوزع كالتالي:\n\nفحوصات شهرية: أنظمة الإنذار والإطفاء، فلاتر التكييف في المواسم شديدة الحرارة، واللوحات الكهربائية في المنشآت الصناعية عالية الاستهلاك.\n\nفحوصات ربع سنوية: شبكات السباكة الرئيسية، مضخات المياه، وأنظمة الإضاءة الاحتياطية.\n\nفحوصات نصف سنوية وسنوية: صيانة شاملة لوحدات التكييف المركزية، اختبار شامل لأنظمة الدفاع المدني، وفحص الهيكل الإنشائي الظاهر (الشروخ، تسرب المياه، تآكل الواجهات).\n\nهذا التوزيع يضمن أن الأنظمة الأكثر عرضة للأعطال المفاجئة (كالكهرباء والتكييف) تحظى بمتابعة أقرب، بينما تُفحص الأنظمة الأبطأ تدهورًا على فترات أوسع.",
        },
        {
          title: "الفوائد المالية لعقود الصيانة الدورية",
          body: "الصيانة الوقائية ليست بندًا في ميزانية \"النفقات\"، بل هي أداة لحماية قيمة الأصل نفسه:\n\nخفض تكاليف الطوارئ بشكل كبير: إصلاح عطل مبكر يكلف عادة جزءًا يسيرًا مما يكلفه إصلاح نفس العطل بعد تفاقمه.\n\nإطالة العمر الافتراضي للأنظمة: وحدة تكييف تخضع لصيانة دورية منتظمة قد تعمل لسنوات إضافية مقارنة بأخرى مهملة.\n\nالحفاظ على القيمة السوقية للعقار: المبنى الموثّق بسجل صيانة منتظم أكثر جاذبية عند البيع أو التأجير من مبنى بلا سجل صيانة واضح.\n\nتقليل مخاطر التوقف التشغيلي: لمنشأة تجارية أو صناعية، كل ساعة توقف غير مخطط لها تعني خسارة مباشرة في الإيرادات.",
        },
        {
          title: "من يحتاج عقد صيانة دورية؟",
          body: "عمليًا، أي مبنى يُستخدم بشكل مستمر يحتاج خطة صيانة وقائية، لكن الحاجة تصبح حرجة بشكل خاص في:\n\nالمولات والمراكز التجارية: حيث يعني توقف التكييف أو الإضاءة في ساعة ذروة خسارة مباشرة لعشرات المحلات في وقت واحد.\n\nالمصانع والمنشآت الصناعية: حيث يرتبط توقف أي نظام كهروميكانيكي بتوقف خط إنتاج كامل.\n\nالفلل الفاخرة والمجمعات السكنية الراقية: حيث يتوقع الساكن مستوى خدمة لا يقبل بالأعطال المفاجئة.\n\nالمنشآت الحكومية والتعليمية: التي تخضع لمعايير سلامة صارمة ولا تحتمل التوقف المفاجئ لأي نظام حيوي.",
        },
        {
          title: "ما الذي يحدد تكلفة عقد الصيانة الدورية؟",
          body: "مساحة المبنى ونوعه: صيانة مول تجاري بمساحة عشرات الآلاف من الأمتار تختلف جذريًا عن صيانة فيلا سكنية.\n\nعدد الأنظمة المشمولة: عقد يغطي الكهرباء والسباكة والتكييف والسلامة معًا أغلى من عقد يغطي نظامًا واحدًا فقط، لكنه غالبًا أوفر على المدى الطويل من توقيع أربعة عقود منفصلة.\n\nعمر المبنى وحالة الأنظمة الحالية: مبنى جديد بأنظمة حديثة يحتاج فحصًا روتينيًا أخف من مبنى قديم تراكمت فيه مشاكل لم تُعالج لسنوات.\n\nعدد الزيارات الدورية المتفق عليها: عقد بزيارات شهرية أشمل من عقد بزيارات ربع سنوية، وهذا ينعكس على السعر.\n\nمن المهم عدم الانجراف وراء أرخص عرض فقط، بل مقارنة ما يشمله كل عقد بالتفصيل: عدد الزيارات، الأنظمة المغطاة، وما إذا كانت قطع الغيار الأساسية مشمولة أم تُحتسب بشكل منفصل.",
        },
      ],
      en: [
        {
          title: "Preventive Maintenance vs. Reactive Maintenance",
          body: "Reactive maintenance is what happens when an electrical unit fails or a water line leaks, and you call a technician to fix it immediately. This looks cheaper in the short term because you pay nothing until something breaks — but it's actually the more expensive approach over time, because emergency failures always carry three hidden costs: operational downtime, premium emergency-service pricing, and secondary damage that can spread to other parts of the system from the original fault.\n\nPreventive maintenance is the opposite: a pre-scheduled, recurring inspection and servicing routine for every critical building system, performed before any failure occurs, aimed at catching early wear signs and addressing them before they become full breakdowns. The difference is the same as an annual physical checkup versus an ER visit after ignoring symptoms for months.",
        },
        {
          title: "What Our Maintenance Contract Covers",
          body: "Our comprehensive maintenance contract covers the core systems that determine how any building — commercial, residential, or industrial — actually runs:\n\nElectrical: Inspecting main and sub-distribution panels, measuring loads, verifying grounding integrity, and checking connection points prone to overheating, which can lead to electrical fires.\n\nPlumbing: Inspecting water supply and drainage networks, early detection of leaks inside walls or under floors, and servicing pumps and water tanks.\n\nHVAC: Cleaning filters and coils, checking refrigerant levels, and servicing compressors — the single most in-demand service in the Saudi climate, where AC systems run at full capacity for months at a time.\n\nCivil Defense & Safety: Inspecting alarm and firefighting systems, verifying fire extinguishers are valid and functional, and testing emergency exits and backup lighting systems.",
        },
        {
          title: "The Ideal Inspection Schedule",
          body: "Not every system needs the same inspection frequency. An effective maintenance schedule typically breaks down as follows:\n\nMonthly checks: Alarm and firefighting systems, AC filters during peak-heat months, and electrical panels in high-consumption industrial facilities.\n\nQuarterly checks: Main plumbing networks, water pumps, and backup lighting systems.\n\nSemi-annual and annual checks: Comprehensive servicing of central AC units, full testing of civil defense systems, and a visual inspection of the visible structure (cracks, water seepage, facade wear).\n\nThis distribution ensures the systems most prone to sudden failure — electrical and HVAC — receive closer monitoring, while slower-degrading systems are inspected at wider intervals.",
        },
        {
          title: "The Financial Case for Preventive Maintenance Contracts",
          body: "Preventive maintenance isn't a line item under \"expenses\" — it's a tool for protecting the value of the asset itself:\n\nSignificantly lower emergency repair costs: Catching an issue early typically costs a fraction of fixing the same issue after it escalates.\n\nExtended equipment lifespan: An AC unit under regular preventive maintenance can run for additional years compared to one that's neglected.\n\nPreserved market value: A building with a documented, regular maintenance record is far more attractive at sale or lease than one with no clear maintenance history.\n\nReduced downtime risk: For a commercial or industrial facility, every hour of unplanned downtime is a direct hit to revenue.",
        },
        {
          title: "Who Actually Needs a Preventive Maintenance Contract?",
          body: "Practically speaking, any continuously-used building benefits from a preventive maintenance plan, but the need becomes critical for:\n\nMalls and retail centers, where an AC or lighting failure during peak hours means dozens of shops lose business simultaneously.\n\nFactories and industrial facilities, where any electromechanical system going down halts an entire production line.\n\nLuxury villas and premium residential complexes, where occupants expect a service level that doesn't tolerate sudden breakdowns.\n\nGovernment and educational facilities, which operate under strict safety standards and can't tolerate a sudden outage of any critical system.",
        },
        {
          title: "What Determines the Cost of a Maintenance Contract?",
          body: "Building size and type: Maintaining a tens-of-thousands-of-square-meter mall is fundamentally different from maintaining a residential villa.\n\nNumber of systems covered: A contract covering electrical, plumbing, HVAC, and safety together costs more than one covering a single system — but it's typically more economical long-term than signing four separate contracts.\n\nBuilding age and current system condition: A new building with modern systems needs lighter routine checks than an older one with years of unaddressed issues.\n\nNumber of agreed-upon periodic visits: A monthly-visit contract is more comprehensive than a quarterly one, and pricing reflects that.\n\nIt's worth avoiding the temptation to simply pick the cheapest quote — instead, compare what each contract actually covers in detail: number of visits, systems included, and whether core spare parts are included or billed separately.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة تتجاوز 20 عامًا في صيانة المباني التجارية والسكنية والصناعية",
        "فريق فني متعدد التخصصات: كهرباء، سباكة، تكييف، وأنظمة سلامة",
        "تقارير فحص دورية موثقة وخطة استجابة واضحة للطوارئ",
        "عقود صيانة مصممة حسب طبيعة كل مبنى واستخدامه",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "20+ years of experience maintaining commercial, residential, and industrial buildings",
        "Multi-disciplinary technical team: electrical, plumbing, HVAC, and safety systems",
        "Documented periodic inspection reports and a clear emergency response plan",
        "Maintenance contracts tailored to each building's nature and use",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تحتاج عقد صيانة دورية لمبناك؟", description: "تواصل معنا لتصميم خطة صيانة وقائية تناسب طبيعة مبناك واستخدامه وتحمي استثمارك العقاري على المدى الطويل.", button: "اطلب عرض سعر" },
      en: { title: "Need a Preventive Maintenance Contract for Your Building?", description: "Contact us to design a preventive maintenance plan tailored to your building's nature and use, protecting your real estate investment long-term.", button: "Get a Quote" },
    },
  },
  "building-permits-regulations-guide-saudi-arabia": {
    slug: "building-permits-regulations-guide-saudi-arabia",
    title: {
      ar: "دليلك الشامل لرخص البناء والاشتراطات النظامية في السعودية",
      en: "Your Complete Guide to Building Permits & Regulatory Requirements in Saudi Arabia",
    },
    subtitle: {
      ar: "خطوات استخراج رخصة البناء، فحص التربة، الاشتراطات حسب نوع المشروع، والمستندات المطلوبة",
      en: "Permit Steps, Soil Testing, Requirements by Project Type & Required Documents",
    },
    description: {
      ar: "دليل شامل لرخص البناء والاشتراطات النظامية في السعودية: خطوات استخراج الرخصة عبر منصة بلدي، فحص التربة، الاشتراطات حسب نوع المشروع، المستندات المطلوبة، وأخطاء شائعة تعطل المشاريع. لمعة العربية للمقاولات – خبرة +20 عامًا.",
      en: "A complete guide to building permits and regulatory requirements in Saudi Arabia: permit steps via the Balady platform, soil testing, requirements by project type, required documents, and common mistakes that delay projects. Lamaat Al-Arabiya Contracting – 20+ years of experience.",
    },
    keywords: {
      ar: [
        "رخصة بناء السعودية", "اشتراطات البناء", "منصة بلدي", "فحص تربة",
        "رخصة إشغال", "اشتراطات البلدية", "تراخيص بناء الرياض", "رخصة بناء جدة",
        "شركة مقاولات مرخصة", "لمعة العربية مقاولات", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "building permit Saudi Arabia", "Balady platform permit", "construction regulations KSA",
        "soil testing Saudi Arabia", "occupancy permit Saudi", "building requirements Riyadh",
        "licensed contractor Saudi Arabia", "Lamaat Al-Arabiya permits",
      ],
    },
    sections: {
      ar: [
        {
          title: "لماذا رخصة البناء ليست مجرد ورقة؟",
          body: "يظن كثيرون أن رخصة البناء إجراء شكلي يُستخرج بسرعة بمجرد تقديم المخططات. الحقيقة أن الرخصة هي محصلة نهائية لسلسلة من الفحوصات والموافقات: مطابقة المخطط لاشتراطات البلدية، التأكد من توافق استخدام الأرض مع الغرض من المبنى (سكني، تجاري، صناعي)، والتحقق من عدم تعارض المشروع مع أي ارتدادات أو ارتفاعات محددة نظامًا لتلك المنطقة بالذات.\n\nرخصة البناء الصادرة بشكل صحيح ليست فقط شرطًا قانونيًا للبدء بالتنفيذ، بل هي أيضًا حماية لصاحب المشروع نفسه: فبدونها، قد يواجه أوامر إيقاف العمل، أو حتى الهدم الجزئي في حالات المخالفات الجسيمة، بعد إنفاق مبالغ كبيرة على التنفيذ.",
        },
        {
          title: "خطوات استخراج رخصة البناء في السعودية",
          body: "العملية في جوهرها تمر بمراحل متسلسلة:\n\nالتأكد من الصك والمخطط المساحي: قبل أي شيء، يجب التأكد من أن حدود الأرض في الصك مطابقة للواقع، وأن المخطط المساحي معتمد من الجهة المختصة.\n\nاستخراج كروكي الأرض واشتراطات البناء: عبر منصة \"بلدي\" أو مكاتب الهندسة المعتمدة، يتم الحصول على اشتراطات البناء الخاصة بالقطعة تحديدًا: نسبة البناء المسموحة، الارتدادات الأمامية والجانبية والخلفية، والارتفاع الأقصى المسموح.\n\nإعداد المخططات الهندسية المعتمدة: يقوم مكتب هندسي معتمد بإعداد المخططات المعمارية والإنشائية والكهروميكانيكية، بما يتوافق تمامًا مع الاشتراطات المستخرجة.\n\nتقديم الطلب والحصول على الرخصة: تُقدَّم المخططات عبر منصة بلدي، وتتم مراجعتها من قبل البلدية، وقد يُطلب تعديلات قبل الموافقة النهائية وإصدار رخصة البناء رسميًا.\n\nرخصة الإشغال بعد الانتهاء: بعد اكتمال التنفيذ، يُستخرج تقرير إنجاز وفحص نهائي، يليه إصدار رخصة الإشغال التي تسمح رسميًا باستخدام المبنى.",
        },
        {
          title: "فحص التربة: الخطوة التي يتجاهلها كثيرون قبل شراء الأرض",
          body: "واحدة من أكثر الأخطاء شيوعًا، وأكثرها كلفة، هي شراء الأرض وتصميم المبنى قبل إجراء فحص تربة فعلي. فحص التربة يحدد نوع الأساسات المناسبة (سطحية أو عميقة)، ومدى تحمل التربة، ووجود أي مشاكل جيولوجية كالتربة الانتفاشية المنتشرة في بعض مناطق المملكة.\n\nتخطي هذه الخطوة قد يبدو توفيرًا في الوقت والمال في البداية، لكنه غالبًا ما ينتهي بأحد سيناريوهين مكلفين: إما تصميم أساسات مبالغ فيها \"احتياطًا\" لتغطية المجهول، مما يرفع التكلفة دون داعٍ، أو الأسوأ، تصميم أساسات غير كافية تظهر مشاكلها (شروخ، هبوط غير متساوٍ) بعد سنوات من البناء.",
        },
        {
          title: "الاشتراطات النظامية حسب نوع المشروع",
          body: "تختلف الاشتراطات النظامية بشكل جوهري حسب طبيعة المشروع:\n\nالمشاريع السكنية: تركز الاشتراطات على نسبة البناء، الارتدادات، وعدد الأدوار المسموح به حسب تصنيف المنطقة السكنية.\n\nالمشاريع التجارية: تضاف اشتراطات إضافية خاصة بمواقف السيارات، مخارج الطوارئ، وأحمال الحريق، نظرًا لارتفاع الكثافة البشرية المتوقعة.\n\nالمنشآت الصناعية: تخضع لاشتراطات أكثر تعقيدًا تتعلق بالمسافات الأمنية، معالجة النفايات، وأنظمة السلامة الصناعية، وغالبًا ما تحتاج موافقات إضافية من جهات متخصصة.\n\nالمنشآت الدينية (المساجد والجوامع): لها اشتراطات مختلفة تمامًا تتعلق بالمساحات المخصصة للصلاة، اتجاه القبلة، ومرافق الوضوء، وغالبًا ما تمر بمسار موافقات منفصل عبر الجهات المعنية بالشؤون الدينية.",
        },
        {
          title: "المستندات الأساسية التي ستحتاجها قبل التقديم",
          body: "تختلف تفاصيل المستندات المطلوبة قليلًا حسب البلدية ونوع المشروع، لكن هناك مجموعة أساسية تتكرر في معظم الحالات:\n\nصك الملكية ساري وخالٍ من أي نزاع أو رهن يمنع التصرف في الأرض.\n\nالمخطط المساحي المعتمد من الجهة المختصة، مطابقًا لحدود الصك فعليًا على الأرض.\n\nكروكي الاشتراطات الصادر من البلدية والمحدد لنسبة البناء والارتدادات والارتفاعات.\n\nالمخططات الهندسية الكاملة (معمارية، إنشائية، كهروميكانيكية) من مكتب هندسي معتمد.\n\nتقرير فحص التربة، خصوصًا للمشاريع التجارية والصناعية والمباني متعددة الأدوار.\n\nتفويض رسمي في حال كان من يقدّم الطلب غير مالك الأرض شخصيًا.",
        },
        {
          title: "تكلفة التأخير: ماذا يحدث عند إهمال الجانب النظامي؟",
          body: "البدء في التنفيذ دون رخصة نهائية معتمدة قد يؤدي إلى:\n\nأوامر إيقاف فوري للعمل، مع ما يترتب عليه من تكاليف تأخير وتوقف العمالة والمعدات في الموقع.\n\nغرامات مالية تختلف حسب حجم المخالفة ونوعها.\n\nصعوبة الحصول على التمويل البنكي، إذ تشترط أغلب البنوك وجود رخصة بناء سارية ضمن شروط تمويل المشاريع العقارية.\n\nتعقيد عملية البيع أو التسجيل العقاري لاحقًا، في حال كان المبنى منفَّذًا جزئيًا أو كليًا خارج نطاق الرخصة الأصلية.\n\nفي المقابل، مشروع يسير وفق مسار نظامي صحيح منذ اليوم الأول يتحرك بسرعة أكبر في كل مرحلة لاحقة، من التمويل إلى التسجيل إلى البيع أو التأجير.",
        },
      ],
      en: [
        {
          title: "Why a Building Permit Isn't Just a Piece of Paper",
          body: "Many people assume a building permit is a formality, quickly issued once drawings are submitted. In reality, the permit is the end result of a chain of checks and approvals: confirming the design matches municipal requirements, verifying the land-use classification matches the building's purpose (residential, commercial, industrial), and confirming the project doesn't violate any setbacks or height limits specific to that particular zone.\n\nA properly issued building permit isn't just a legal prerequisite to start construction — it also protects the project owner. Without it, you can face stop-work orders, or even partial demolition in cases of serious violations, after already spending significant money on execution.",
        },
        {
          title: "Steps to Obtain a Building Permit in Saudi Arabia",
          body: "The process follows a sequential path:\n\nVerify the Title Deed and Survey Map: Before anything else, confirm the land boundaries in the title deed actually match reality on the ground, and that the survey map is approved by the relevant authority.\n\nObtain the Land Sketch and Building Requirements: Through the \"Balady\" platform or licensed engineering offices, you obtain the specific building requirements for that exact plot: allowed building ratio, front/side/rear setbacks, and maximum permitted height.\n\nPrepare Approved Engineering Drawings: A licensed engineering office prepares the architectural, structural, and electromechanical drawings, fully matching the requirements obtained in the previous step.\n\nSubmit the Application and Obtain the Permit: Drawings are submitted through the Balady platform and reviewed by the municipality. Revisions may be requested before final approval and official permit issuance.\n\nOccupancy Permit After Completion: Once construction is complete, a completion and final inspection report is issued, followed by an occupancy permit that officially allows the building to be used.",
        },
        {
          title: "Soil Testing: The Step Many People Skip Before Buying Land",
          body: "One of the most common — and most costly — mistakes is buying the land and designing the building before running an actual soil test. Soil testing determines the appropriate foundation type (shallow or deep), the soil's load-bearing capacity, and whether there are any geological issues, such as expansive soil, which is present in certain regions of the Kingdom.\n\nSkipping this step might look like a time and cost saving at first, but it usually ends in one of two expensive scenarios: either an over-engineered, overly conservative foundation designed \"just in case\" to cover the unknown — inflating cost unnecessarily — or worse, an inadequate foundation whose problems (cracks, uneven settling) only show up years after construction, when repairs are far more costly and complex.",
        },
        {
          title: "Regulatory Requirements by Project Type",
          body: "Regulatory requirements differ fundamentally depending on the nature of the project:\n\nResidential projects: Requirements focus on building ratio, setbacks, and the number of floors permitted based on the residential zone classification.\n\nCommercial projects: Additional requirements apply around parking, emergency exits, and fire loads, given the higher expected human density.\n\nIndustrial facilities: Subject to more complex requirements around safety distances, waste handling, and industrial safety systems, and typically require additional approvals from specialized authorities.\n\nReligious facilities (mosques): Follow an entirely different set of requirements related to prayer-area space, qibla direction, and ablution facilities, usually going through a separate approval track with religious affairs authorities.",
        },
        {
          title: "Key Documents You'll Need Before Applying",
          body: "Exact document requirements vary slightly by municipality and project type, but a core set repeats across most cases:\n\nA valid title deed, free of any dispute or lien that would prevent dealing with the land.\n\nAn approved survey map, actually matching the title deed boundaries on the ground.\n\nA requirements sketch issued by the municipality, specifying building ratio, setbacks, and height limits.\n\nComplete engineering drawings (architectural, structural, electromechanical) from a licensed engineering office.\n\nA soil test report, particularly for commercial, industrial, and multi-story projects.\n\nAn official authorization, if the applicant isn't the landowner personally.\n\nPreparing these documents precisely from the start significantly reduces the number of review and revision cycles with the municipality.",
        },
        {
          title: "The Cost of Delay: What Happens When the Regulatory Side Is Ignored?",
          body: "Starting construction without a final approved permit can lead to:\n\nImmediate stop-work orders, along with the resulting cost of delay and idle labor and equipment on site.\n\nFinancial penalties, varying by the size and nature of the violation.\n\nDifficulty securing bank financing, since most banks require a valid building permit as a condition for real estate project financing.\n\nComplications in future sale or property registration, if the building was partially or fully executed outside the scope of the original permit.\n\nBy contrast, a project that follows the correct regulatory path from day one moves faster at every subsequent stage — financing, registration, sale, or lease.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة تتجاوز 20 عامًا في التعامل مع البلديات والجهات الرقابية",
        "إدارة المسار النظامي كاملًا: من اشتراطات القطعة إلى رخصة الإشغال",
        "فريق هندسي معتمد لإعداد المخططات المطابقة للاشتراطات من المرة الأولى",
        "تنسيق مباشر مع مكاتب فحص التربة والمكاتب الهندسية المعتمدة",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "20+ years of experience dealing with municipalities and regulatory authorities",
        "Full regulatory path management: from plot requirements to occupancy permit",
        "Licensed engineering team preparing compliant drawings from the first submission",
        "Direct coordination with soil testing firms and licensed engineering offices",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "تخطط لمشروعك القادم وتحتاج من يتولى الجانب النظامي؟", description: "تواصل معنا لإدارة مسار الترخيص والتنفيذ معًا، من اشتراطات القطعة إلى رخصة الإشغال.", button: "اطلب استشارة" },
      en: { title: "Planning Your Next Project and Need the Regulatory Side Handled?", description: "Contact us to manage the full permitting and execution path — from plot requirements to occupancy permit.", button: "Get a Consultation" },
    },
  },
  "industrial-facility-finishing-factories": {
    slug: "industrial-facility-finishing-factories",
    title: {
      ar: "تشطيب وتجهيز المنشآت الصناعية والمصانع: من الهيكل الخرساني إلى التشغيل الكامل",
      en: "Industrial Facility & Factory Construction: From Concrete Shell to Full Operation",
    },
    subtitle: {
      ar: "أرضيات صناعية، عزل حراري وصوتي، أنظمة كهروميكانيكية، سفع رملي، ومعايير السلامة للمنشآت الصناعية",
      en: "Industrial Flooring, Thermal & Acoustic Insulation, MEP Systems, Sandblasting & Safety Standards for Industrial Facilities",
    },
    description: {
      ar: "دليل شامل لتشطيب وتجهيز المنشآت الصناعية والمصانع: الأرضيات الصناعية، العزل، الأنظمة الكهروميكانيكية، السفع الرملي، متطلبات السلامة، واختيار مواد التشطيب المناسبة. لمعة العربية للمقاولات – خبرة +20 عامًا.",
      en: "A comprehensive guide to finishing and equipping industrial facilities and factories: industrial flooring, insulation, MEP systems, sandblasting, safety requirements, and choosing the right finishing materials. Lamaat Al-Arabiya Contracting – 20+ years of experience.",
    },
    keywords: {
      ar: [
        "تشطيب مصانع", "تجهيز منشآت صناعية", "أرضيات صناعية", "إيبوكسي صناعي",
        "سفع رملي", "أنظمة كهروميكانيكية مصانع", "سلامة منشآت صناعية",
        "مقاول مصانع السعودية", "لمعة العربية مقاولات", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "industrial facility finishing", "factory fit-out Saudi Arabia", "industrial flooring KSA",
        "industrial epoxy flooring", "sandblasting industrial", "MEP systems factories",
        "industrial safety standards", "Lamaat Al-Arabiya industrial",
      ],
    },
    sections: {
      ar: [
        {
          title: "ما الذي يميز تشطيب المنشآت الصناعية عن المشاريع الأخرى؟",
          body: "الفارق الجوهري هو أن كل قرار تصميمي في مصنع له تبعات تشغيلية مباشرة. اختيار نوع الأرضية ليس قرارًا جماليًا بل قرارًا هندسيًا يحدد قدرة المبنى على تحمل أحمال المعدات الثقيلة والحركة المستمرة للرافعات الشوكية. اختيار نظام التهوية ليس مسألة راحة بل مسألة سلامة مهنية في بيئة قد تحتوي على أبخرة أو غبار صناعي. حتى اختيار الدهانات يتحدد بمدى مقاومتها الكيميائية، لا بجمال اللون.\n\nهذا يعني أن تصميم منشأة صناعية يبدأ من دراسة العملية التشغيلية نفسها (خط الإنتاج، حركة المواد الخام والمنتج النهائي، متطلبات التخزين)، ثم يُبنى المبنى حول هذه العملية، وليس العكس.",
        },
        {
          title: "مراحل تجهيز مصنع أو منشأة صناعية",
          body: "الأرضيات الصناعية: تختلف جذريًا عن أرضيات المباني الأخرى، إذ يجب أن تتحمل أحمالًا ثقيلة ثابتة ومتحركة، ومقاومة للتآكل الكيميائي في حال التعامل مع مواد كاشطة أو كيميائية. الإيبوكسي الصناعي، والأرضيات الخرسانية المصقولة عالية التحمل، من أكثر الحلول استخدامًا.\n\nالعزل الحراري والصوتي: المصانع التي تحتوي على معدات مولّدة للحرارة أو الضوضاء تحتاج عزلًا مدروسًا يحمي بيئة العمل ويقلل استهلاك الطاقة.\n\nالأنظمة الكهروميكانيكية: العمود الفقري الفعلي لأي منشأة صناعية: توزيع الأحمال الكهربائية بما يتناسب مع استهلاك المعدات الثقيلة، أنظمة التهوية والتبريد الصناعي، وشبكات المياه والصرف الصناعي التي قد تحتاج معالجة خاصة قبل التصريف.\n\nالسفع الرملي والحماية من التآكل: للهياكل المعدنية والخزانات والأنابيب، يُعد السفع الرملي خطوة تحضيرية أساسية قبل أي طلاء واقٍ، لضمان التصاق الطلاء بشكل صحيح وإطالة عمر المنشأة الصناعية ضد الصدأ والتآكل.",
        },
        {
          title: "متطلبات السلامة والدفاع المدني في المنشآت الصناعية",
          body: "تخضع المنشآت الصناعية لمعايير سلامة أكثر صرامة مقارنة بالمباني السكنية والتجارية:\n\nأنظمة إطفاء متخصصة حسب نوع النشاط الصناعي (بعض المواد تتطلب أنظمة إطفاء غير مائية).\n\nمسافات أمنية بين وحدات التخزين والمعدات، خصوصًا في حال وجود مواد قابلة للاشتعال.\n\nمخارج طوارئ محسوبة بدقة وفق عدد العمالة المتوقع في كل وردية.\n\nمعالجة النفايات الصناعية وفق الاشتراطات البيئية قبل أي تصريف أو تخلص منها.\n\nهذه المتطلبات ليست بندًا إضافيًا اختياريًا، بل شرطًا أساسيًا للحصول على التراخيص التشغيلية اللازمة لبدء عمل المصنع رسميًا.",
        },
        {
          title: "اختيار مواد التشطيب الصناعي المناسبة",
          body: "معايير اختيار المواد في البيئة الصناعية تختلف جذريًا عن المباني الأخرى:\n\nمقاومة كيميائية: للأرضيات والجدران المعرضة لمواد كاشطة أو أحماض أو زيوت صناعية.\n\nالقدرة على تحمل الأحمال الثقيلة: سواء الثابتة (المعدات الكبيرة) أو المتحركة (الرافعات الشوكية وعربات النقل).\n\nمقاومة الحريق: خصوصًا في المناطق القريبة من خطوط الإنتاج عالية الحرارة أو التخزين الكيميائي.\n\nسهولة التنظيف والتعقيم: أمر حاسم في الصناعات الغذائية والدوائية تحديدًا.",
        },
        {
          title: "أنواع المنشآت الصناعية التي تحتاج منهجية مختلفة",
          body: "المستودعات ومراكز التوزيع اللوجستي: الأولوية لارتفاع المبنى لاستيعاب الرفوف العالية، وعرض الممرات الداخلية لحركة الرافعات الشوكية، وأنظمة إنذار حريق تتناسب مع كميات التخزين الكبيرة.\n\nالمصانع الغذائية والدوائية: تتطلب معايير نظافة وتعقيم صارمة، أرضيات سهلة التنظيف ومقاومة للبكتيريا، وأنظمة تهوية تمنع تلوث الهواء المتبادل.\n\nالورش ومصانع المعادن: تحتاج أرضيات فائقة التحمل لمقاومة الصدمات والأوزان الثقيلة، وأنظمة تهوية قوية للتعامل مع الغبار المعدني والأبخرة.\n\nمنشآت التخزين الكيميائي: الأكثر تعقيدًا من حيث متطلبات السلامة، إذ تحتاج مسافات أمنية دقيقة، أرضيات مقاومة كيميائيًا بشكل خاص، وأنظمة إطفاء غير تقليدية.",
        },
        {
          title: "التكلفة التقريبية وعوامل التسعير",
          body: "تتفاوت تكلفة مشاريع المنشآت الصناعية بشكل كبير حسب عدة عوامل موضوعية لا يمكن تحديدها برقم ثابت دون دراسة المشروع فعليًا:\n\nطبيعة النشاط الصناعي: مصنع غذائي يحتاج معايير نظافة وتهوية مختلفة تمامًا عن مصنع معدني أو كيميائي.\n\nمساحة المنشأة وارتفاعها: المنشآت ذات الارتفاعات الكبيرة (لاستيعاب الرافعات العلوية مثلًا) تختلف تكلفتها عن المباني الصناعية ذات الطابق الواحد العادي.\n\nمستوى الأتمتة والأنظمة الكهروميكانيكية المطلوبة: كلما زادت درجة التعقيد التقني، زادت تكلفة الأنظمة الداعمة.\n\nموقع المنشأة: القرب من الموانئ أو المناطق الصناعية المخصصة قد يوفر في تكاليف البنية التحتية مقارنة بمواقع أبعد.",
        },
        {
          title: "أخطاء تكلف أصحاب المصانع وقتًا ومالًا",
          body: "تأجيل التفكير في حركة المعدات والرافعات الشوكية حتى مرحلة متأخرة من التصميم، مما يتطلب تعديلات مكلفة لاحقًا في عرض الممرات أو ارتفاع الأبواب.\n\nاختيار أرضيات غير مناسبة لنوع النشاط، فتبدأ بالتآكل أو التشقق بعد أشهر قليلة من التشغيل الفعلي.\n\nإغفال التخطيط لمعالجة النفايات الصناعية من البداية، مما يستدعي تعديلات لاحقة مكلفة للامتثال البيئي.\n\nالتعامل مع مقاولين متعددين لكل نظام على حدة (أرضيات، كهروميكانيك، سفع رملي) دون تنسيق واحد يربط بين جميع الأنظمة.",
        },
      ],
      en: [
        {
          title: "What Sets Industrial Fit-Out Apart From Other Projects?",
          body: "The fundamental difference is that every design decision in a factory has direct operational consequences. Choosing a floor type isn't an aesthetic decision — it's an engineering one that determines the building's ability to handle heavy equipment loads and continuous forklift traffic. Choosing a ventilation system isn't about comfort — it's an occupational safety matter in an environment that may contain fumes or industrial dust. Even paint selection is driven by chemical resistance, not color appeal.\n\nThis means designing an industrial facility starts from studying the operational process itself (production line, raw material and finished product flow, storage requirements), then building the structure around that process — not the other way around.",
        },
        {
          title: "Phases of Fitting Out a Factory or Industrial Facility",
          body: "Industrial flooring: Fundamentally different from other building floors — it must withstand heavy static and dynamic loads and resist chemical corrosion when dealing with abrasive or chemical materials. Industrial epoxy and high-strength polished concrete are among the most widely used solutions.\n\nThermal and acoustic insulation: Factories with heat- or noise-generating equipment need carefully designed insulation that protects the work environment and reduces energy consumption.\n\nMEP systems: The actual backbone of any industrial facility — electrical load distribution matched to heavy equipment consumption, industrial ventilation and cooling systems, and industrial water supply and drainage networks that may require special treatment before discharge.\n\nSandblasting and corrosion protection: For metal structures, tanks, and pipes, sandblasting is an essential preparatory step before any protective coating, ensuring proper paint adhesion and extending the facility's lifespan against rust and corrosion.",
        },
        {
          title: "Safety & Civil Defense Requirements in Industrial Facilities",
          body: "Industrial facilities are subject to stricter safety standards compared to residential and commercial buildings:\n\nSpecialized fire suppression systems based on the type of industrial activity (some materials require non-water-based suppression systems).\n\nSafety distances between storage units and equipment, especially when flammable materials are present.\n\nEmergency exits calculated precisely based on the expected workforce per shift.\n\nIndustrial waste treatment in compliance with environmental regulations before any discharge or disposal.\n\nThese requirements are not optional extras — they are fundamental prerequisites for obtaining the operational licenses needed to officially start factory operations.",
        },
        {
          title: "Choosing the Right Industrial Finishing Materials",
          body: "Material selection criteria in industrial environments differ fundamentally from other buildings:\n\nChemical resistance: For floors and walls exposed to abrasive materials, acids, or industrial oils.\n\nHeavy load capacity: Both static (large machinery) and dynamic (forklifts and transport carts).\n\nFire resistance: Especially in areas near high-temperature production lines or chemical storage.\n\nEase of cleaning and sterilization: Critical in food and pharmaceutical industries specifically.",
        },
        {
          title: "Industrial Facility Types That Need a Different Approach",
          body: "Warehouses and logistics distribution centers: Priority goes to building height (to accommodate high racks and storage systems), internal aisle width for forklift movement, and fire alarm systems scaled to large storage volumes.\n\nFood and pharmaceutical factories: Require strict hygiene and sterilization standards, easy-to-clean antibacterial floors, and ventilation systems that prevent cross-contamination between different production zones.\n\nWorkshops and metal factories: Need ultra-heavy-duty floors to resist impact and heavy weights, powerful ventilation to handle metal dust and welding/cutting fumes, plus stricter sandblasting and corrosion protection standards.\n\nChemical storage facilities: The most complex in terms of safety requirements — precise safety distances, specially chemical-resistant floors, and non-conventional fire suppression systems based on the stored materials.",
        },
        {
          title: "Approximate Cost and Pricing Factors",
          body: "Industrial facility project costs vary significantly based on several objective factors that can't be reduced to a fixed number without an actual project study:\n\nType of industrial activity: A food factory needs entirely different cleanliness and ventilation standards than a metal or chemical plant.\n\nFacility area and height: Facilities with high ceilings (to accommodate overhead cranes, for instance) cost differently than standard single-story industrial buildings.\n\nRequired level of automation and electromechanical systems: The higher the technical complexity, the higher the cost of supporting systems.\n\nFacility location: Proximity to ports or designated industrial zones can save on infrastructure costs compared to more remote sites.",
        },
        {
          title: "Mistakes That Cost Factory Owners Time and Money",
          body: "Postponing equipment and forklift movement planning until a late design stage, requiring costly adjustments to aisle widths or door heights.\n\nChoosing floors unsuitable for the type of activity, leading to erosion or cracking within months of actual operation.\n\nOverlooking industrial waste treatment planning from the start, requiring expensive retrofits for environmental compliance.\n\nUsing multiple separate contractors for each system (flooring, MEP, sandblasting) without a single coordinating party linking all systems together.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة تتجاوز 20 عامًا في تجهيز المنشآت الصناعية والمصانع",
        "أعمال فعلية موثقة في السفع الرملي الصناعي والأنظمة الكهروميكانيكية",
        "إدارة مشروع واحدة متكاملة تربط بين جميع الأنظمة",
        "دراسة طبيعة النشاط التشغيلي قبل وضع أي تصميم",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "20+ years of experience equipping industrial facilities and factories",
        "Documented work in industrial sandblasting and MEP systems",
        "Single integrated project management linking all systems together",
        "Operational process study before any design is drafted",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "تخطط لتجهيز منشأة صناعية أو مصنع؟", description: "تواصل معنا لمناقشة احتياجات مشروعك الصناعي من الهيكل الخرساني إلى التشغيل الكامل.", button: "اطلب استشارة" },
      en: { title: "Planning to Equip an Industrial Facility or Factory?", description: "Contact us to discuss your industrial project needs — from concrete shell to full operation.", button: "Get a Consultation" },
    },
  },
  "commercial-supply-building-finishing-materials": {
    slug: "commercial-supply-building-finishing-materials",
    title: {
      ar: "دليل التوريد التجاري لمواد البناء والتشطيب: كيف تضمن جودة مشروعك من أول خطوة",
      en: "Commercial Supply of Building & Finishing Materials: How to Protect Your Project From Day One",
    },
    subtitle: {
      ar: "مواد بناء أساسية، مواد تشطيب وديكور، مواد نظافة وعناية، وتوريد تجاري بكميات مضمونة الجودة",
      en: "Core Building Materials, Finishing & Decor Products, Cleaning & Care Supplies, and Quality-Guaranteed Commercial Supply",
    },
    description: {
      ar: "دليل شامل للتوريد التجاري لمواد البناء والتشطيب: الفرق بين الشراء الفردي والتوريد التجاري، ما يشمله التوريد، معايير اختيار المورد، وأخطاء شائعة عند شراء المواد بالجملة. لمعة العربية للمقاولات – خبرة +20 عامًا.",
      en: "A comprehensive guide to commercial supply of building and finishing materials: retail vs. commercial supply, what it covers, supplier selection criteria, and common bulk-purchasing mistakes. Lamaat Al-Arabiya Contracting – 20+ years of experience.",
    },
    keywords: {
      ar: [
        "توريد مواد بناء", "توريد تجاري مواد تشطيب", "مواد بناء بالجملة السعودية",
        "مورد مواد بناء الرياض", "توريد بلاط ورخام", "مواد عزل مائي وحراري",
        "شركة توريد مواد بناء", "لمعة العربية مقاولات", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "building materials supply Saudi Arabia", "commercial supply finishing materials",
        "bulk construction materials KSA", "building materials supplier Riyadh",
        "tile marble supply", "waterproofing insulation materials",
        "construction material supplier", "Lamaat Al-Arabiya supply",
      ],
    },
    sections: {
      ar: [
        {
          title: "ما هو التوريد التجاري لمواد البناء؟",
          body: "التوريد التجاري هو عملية تأمين كل ما يحتاجه المشروع من مواد خام ومنتجات تشطيب وتركيبات، بكميات تجارية من مصادر موثوقة ومطابقة للمعايير السعودية والدولية. يشمل ذلك كل شيء من الأسمنت والحديد ومواد العزل، إلى البلاط والدهانات والأدوات الصحية والكهربائية.\n\nالفرق بين \"الشراء\" و\"التوريد التجاري\" هو الفرق بين الدخول لمحل مواد بناء وشراء قطعة بقطعة، وبين وجود شريك واحد يدرس احتياجات مشروعك المادية كاملة، يؤمّنها بأسعار تنافسية، يضمن تجانس الدفعات بين شحنات المادة الواحدة، ويلتزم بجدول توريد مرتبط بمراحل التنفيذ الفعلية.",
        },
        {
          title: "أقسام التوريد التجاري عند لمعة العربية",
          body: "مواد البناء الأساسية: أسمنت، حديد، ركام، عزل مائي وحراري، وأنواع مختلفة من الطوب. هذه المواد تحدد سلامة الهيكل الإنشائي نفسه، ولا مجال للتنازل عن المواصفات أو المصدر.\n\nمواد التشطيب والديكور: بلاط ورخام، دهانات، أبواب ونوافذ، أسقف معلقة، وأدوات صحية وكهربائية. هنا تهم الجماليات إلى جانب المتانة، ويصبح تجانس الدفعات أمرًا حرجًا، خصوصًا في البلاط والرخام حيث يمكن أن يتفاوت اللون بشكل ملحوظ بين دفعة وأخرى.\n\nمواد النظافة والعناية: فئة غالبًا ما تُهمل، لكنها ضرورية لفترة ما بعد التسليم مباشرة: منتجات عناية بأسطح الرخام والسيراميك والإيبوكسي والخشب، ومعدات تنظيف صناعية للمنشآت التجارية والصناعية الكبيرة.",
        },
        {
          title: "لماذا التوريد عبر مقاول واحد أفضل من موردين متعددين؟",
          body: "كثير من أصحاب المشاريع يفضلون التعامل مع موردين منفصلين لكل مادة بحثًا عن أفضل سعر للقطعة الواحدة. هذا منطقي نظريًا، لكنه يخلق ثلاث مشاكل عملية متكررة:\n\nتفاوت الجودة بين الموردين: مادة عزل من مورد ومنتج مشابه بنفس الاسم من مورد آخر قد يؤديان أداءً مختلفًا تمامًا في الواقع.\n\nتأخر التوريد المتسلسل: حين يتأخر مورد واحد في مادة حرجة (الحديد مثلًا)، يتوقف الموقع بالكامل حتى لو كان كل مورد آخر جاهزًا.\n\nغياب نقطة مساءلة واحدة: إذا ظهر عيب في مادة بعد سنة من التسليم، يصبح من الصعب فعليًا تحديد ما إذا كان المقاول أو المورد الرئيسي أو مورد فرعي هو المسؤول.\n\nحين يكون التوريد ضمن نطاق المقاول الرئيسي، تبقى المسؤولية مع طرف واحد، والجودة متسقة عبر المشروع بالكامل.",
        },
        {
          title: "كيف تؤثر جودة المواد على عمر المبنى؟",
          body: "الفرق بين أسمنت مطابق للمواصفات وآخر غير مطابق قد يعني عقودًا من الفرق في عمر المنشأة. والفرق بين عزل مائي أصلي ومنتج مقلّد قد يعني ظهور تسريب بعد موسم شتاء واحد، رغم أن كليهما بدا متطابقًا يوم التركيب.\n\nفي المناخ السعودي تحديدًا، مع تقلبات حادة في درجات الحرارة بين الصيف والشتاء، ورطوبة مرتفعة في المناطق الساحلية كجدة، تصبح مقاومة المواد للتمدد والانكماش الحراري ومقاومتها للرطوبة عوامل حاسمة لا يظهر أثرها إلا بعد سنوات من الاستخدام الفعلي.",
        },
        {
          title: "التوقيت مهم: كيف يؤثر الموسم والموقع على التوريد",
          body: "في الصيف، حين ترتفع درجات الحرارة بشكل حاد في الرياض والقصيم، يمكن أن تتأثر بعض مواد التشطيب الحساسة للحرارة (بعض اللواصق مثلًا) أثناء النقل والتخزين إذا لم تُعامل بشكل صحيح. وفي جدة والمناطق الساحلية، تتطلب الرطوبة العالية تخزينًا دقيقًا لمواد كالأسمنت والجبس لحمايتها من التكتل أو فقدان خصائصها.\n\nكما تتغير مواعيد التوريد مع دورات الطلب في السوق: مواسم الذروة في قطاع المقاولات تضغط على المواد الأساسية كالحديد والأسمنت، مما قد يرفع الأسعار أو يمدد أوقات التسليم إذا لم يُخطط لها مسبقًا.",
        },
        {
          title: "قائمة فحص سريعة قبل توقيع اتفاقية توريد",
          body: "قبل توقيع أي عقد توريد، تأكد أن الاتفاقية تغطي بوضوح:\n\nجدول توريد مرتبط بمراحل التنفيذ، وليس تاريخ توريد عام واحد لكل المواد.\n\nبند واضح يضمن تجانس الدفعات للمواد المرئية (بلاط، رخام، دهانات).\n\nخطة بديلة في حال نقص مادة معينة في السوق، بدلًا من توقف المشروع بالكامل.\n\nشروط ضمان مكتوبة لكل فئة من المواد، وليس ضمانًا عامًا واحدًا غامضًا.\n\nخطة توريد منفصلة لمواد ما بعد التسليم (العناية والصيانة)، إذا كان المشروع منشأة تجارية أو صناعية كبيرة.",
        },
      ],
      en: [
        {
          title: "What Is Commercial Material Supply?",
          body: "In simple terms, it's the process of securing everything a project needs — raw materials, finishing products, and fittings — in commercial quantities, from reliable sources, meeting Saudi and international standards. This spans everything from cement, steel, and insulation materials on one end, to tiles, paints, and sanitary and electrical fittings on the other.\n\nThe difference between \"buying\" and \"commercial supply\" is the difference between walking into a materials shop and purchasing item by item, versus having a single partner who studies your project's full material requirements, secures them at competitive prices, guarantees batch consistency across different shipments of the same material, and commits to a delivery schedule tied to actual construction phases.",
        },
        {
          title: "The Three Pillars of Our Supply Service",
          body: "Core Building Materials: Cement, steel, aggregate, waterproofing and thermal insulation, and various types of brick. These are the materials that determine the integrity of the structure itself — there's no room to compromise on specification or source here.\n\nFinishing & Decor Materials: Tiles and marble, paints, doors and windows, suspended ceilings, and sanitary and electrical fittings. Here, aesthetics matter alongside durability, and batch consistency becomes critical — especially with tile and marble, where color shade can vary noticeably between lots.\n\nCleaning & Care Materials: This category is often overlooked, yet it's essential for the period immediately after handover: surface care products for marble, ceramic, epoxy, and wood, plus industrial cleaning equipment for large commercial and industrial facilities.",
        },
        {
          title: "Why Supply Through One Contractor Beats Multiple Suppliers",
          body: "Many project owners prefer dealing with separate suppliers for each material in search of the best price per item. That's reasonable in theory, but it creates three recurring practical problems:\n\nQuality mismatches between suppliers: Insulation from one supplier and a similarly-named product from another may perform very differently in practice, despite sharing a brand name.\n\nDelivery delays that cascade: When one supplier falls behind on a critical material (rebar, for instance), the entire site can grind to a halt even if every other supplier is ready.\n\nNo single point of accountability: If a material defect appears a year after handover, it becomes genuinely difficult to determine whether the contractor, the main supplier, or a sub-supplier is responsible.\n\nWhen supply is part of the main contractor's scope, accountability stays with one party, quality stays consistent across the entire project, and the delivery schedule is genuinely tied to construction phases.",
        },
        {
          title: "How Material Quality Affects a Building's Lifespan",
          body: "The difference between cement that meets specification and cement that doesn't can mean decades of difference in a structure's lifespan. The difference between genuine waterproofing and an imitation product can mean a leak appearing after a single winter season, even though both looked identical on installation day.\n\nIn the Saudi climate specifically — with sharp temperature swings between summer and winter, and elevated humidity in coastal areas like Jeddah — materials' resistance to thermal expansion and contraction, and their resistance to moisture, become decisive factors whose impact only shows up after years of actual use.",
        },
        {
          title: "Timing Matters: How Season and Region Affect Supply",
          body: "In summer, when temperatures spike sharply in Riyadh and Qassim, certain heat-sensitive finishing materials (some adhesives, for example) can be affected during transport and storage if not handled correctly. In Jeddah and other coastal areas, higher humidity requires careful storage of materials like cement and gypsum to protect them from clumping or losing their properties before use.\n\nDelivery timelines also shift with market demand cycles: peak seasons in the contracting sector put pressure on core materials like steel and cement, which can raise prices or extend lead times if not planned for in advance. This is exactly why a supply partner with established relationships with manufacturers and major distributors matters more than relying on the spot market when a need arises.",
        },
        {
          title: "A Quick Checklist Before You Sign a Supply Agreement",
          body: "Before signing any supply contract, make sure the agreement clearly covers:\n\nA delivery schedule tied to construction phases, not a single generic delivery date for all materials.\n\nA clear clause guaranteeing batch consistency for visible finishing materials (tile, marble, paint).\n\nA backup plan for when a specific material runs short in the market, instead of the entire project stalling.\n\nWritten warranty terms for each material category, not one vague blanket warranty.\n\nA separate supply plan for post-handover materials (care and maintenance), if the project is a large commercial or industrial facility.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة تتجاوز 20 عامًا في السوق السعودي تجمع بين التنفيذ والتوريد تحت سقف واحد",
        "علاقات مباشرة مع المصنّعين والموزعين الرئيسيين لضمان أفضل الأسعار والتوفر",
        "ضمان تجانس الدفعات لمواد التشطيب المرئية (بلاط، رخام، دهانات)",
        "جدول توريد مرتبط فعليًا بمراحل تنفيذ المشروع",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "20+ years in the Saudi market combining execution and supply under one roof",
        "Direct relationships with manufacturers and major distributors for best pricing and availability",
        "Guaranteed batch consistency for visible finishing materials (tile, marble, paint)",
        "Delivery schedule genuinely tied to project execution phases",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "تحتاج شريك توريد موثوق لمشروعك؟", description: "تواصل معنا للحصول على عرض توريد مصمم حسب احتياجات مشروعك، سواء كنت مقاولًا أو مالك مشروع.", button: "اطلب عرض سعر" },
      en: { title: "Need a Reliable Supply Partner for Your Project?", description: "Contact us for a supply quote tailored to your project's needs — whether you're a contractor or a project owner.", button: "Get a Quote" },
    },
  },
};
