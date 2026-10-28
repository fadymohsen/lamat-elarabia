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
  "modern-facade-design-trends-saudi-arabia",
  "commercial-fit-out-renovation-saudi-arabia",
  "villa-building-journey-saudi-arabia",
  "choosing-right-contractor-saudi-arabia",
  "epoxy-flooring-factories-shops-saudi-arabia",
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
  "modern-facade-design-trends-saudi-arabia": {
    slug: "modern-facade-design-trends-saudi-arabia",
    title: {
      ar: "اتجاهات تصميم الواجهات المعمارية الحديثة في السعودية 2026",
      en: "Modern Facade Design Trends in Saudi Arabia: 2026 Guide",
    },
    subtitle: {
      ar: "الخامات والأنماط التي تشكّل واجهات الفلل والمباني التجارية في السعودية، واشتراطات الكود السعودي التي تحكمها",
      en: "Materials, styles, climate performance, and code requirements shaping villas, commercial buildings, and mixed-use developments across Saudi Arabia",
    },
    description: {
      ar: "استعراض لاتجاهات تصميم الواجهات المعمارية التي تشكّل الفلل والمباني التجارية والمشاريع متعددة الاستخدامات في السعودية 2026: الخامات، الأنماط، والأداء الحراري.",
      en: "Explore the facade design trends shaping villas, commercial buildings, and mixed-use developments across Saudi Arabia in 2026 — materials, styles, climate performance, and code requirements.",
    },
    keywords: {
      ar: [
        "تصميم الواجهات المعمارية", "واجهات حجرية فلل", "واجهات زجاجية تجارية",
        "ألوان الواجهات الحديثة", "كسوة GRC", "اشتراطات الكود السعودي للواجهات",
        "لمعة العربية مقاولات", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "modern facade design Saudi Arabia", "stone facade KSA", "glass curtain wall villa",
        "facade colors trends", "GRC facade cladding", "SBC facade requirements",
        "Lamaat Al-Arabiya facade", "facade contractor Riyadh",
      ],
    },
    sections: {
      ar: [
        {
          title: "لماذا أصبح تصميم الواجهة قرارًا أكبر",
          body: "قبل عقد من الزمن، كانت كثير من الواجهات السكنية في السعودية تعتمد نطاقًا ضيقًا من الكسوة الحجرية واللياسة المدهونة. أما اليوم، فيطلب العملاء مزيجًا أوسع — حجر مدمج مع شاشات معدنية، وواجهات زجاجية ستائرية للمباني التجارية، وتفاصيل GRC (خرسانة مقواة بالزجاج) كانت تُعد قبل سنوات خيارًا مخصصًا باهظ التكلفة. ثلاث قوى تدفع هذا التحول: ارتفاع توقعات المشترين في سوق عقاري تنافسي، واشتراطات تصميم بلدية تفضّل بشكل متزايد مشاهد شوارع مميزة، ودروس مستفادة من واجهات لم تؤدِّ جيدًا تحت حرارة الشمس في السعودية.\n\nهذه النقطة الأخيرة أهم مما يدركه كثير من أصحاب المنازل. فالواجهة ليست سطحًا فقط — إنها جزء من الغلاف الإنشائي الذي يتفاعل مباشرة مع أنظمة العزل الحراري والمائي خلفها. فتصميم واجهة لافت يتجاهل الحركة الحرارية أو تصريف المياه أو التهوية خلف الكسوة سيُطوّر تشققات أو بقعًا أو ترسبات خلال مواسم قليلة — ولهذا يجب التخطيط لتصميم الواجهة وهندسة الغلاف الإنشائي معًا، لا تسليمهما لفريقين منفصلين.",
        },
        {
          title: "أنماط الواجهات الرائجة في السعودية لعام 2026",
          body: "الحجر الطبيعي والمصنّع بأطر بسيطة: يظل الحجر الخامة الأكثر طلبًا للفلل، لكن أسلوب التطبيق تغيّر: الألواح كبيرة الحجم بفواصل محدودة الظهور، مقترنة بأطر نوافذ معدنية داكنة، حلّت محل أنماط الحجر المجزأة بكثافة. درجات الحجر الجيري والرملي التي تعكس طابع المنطقة لا تزال رائجة، وغالبًا ما تُدمج مع خامة واحدة مغايرة كلمسة تباين.\n\nالواجهات الزجاجية الستائرية للمباني التجارية ومتعددة الاستخدامات: تظل أنظمة الواجهات الزجاجية الستائرية مهيمنة على واجهات الطابق الأرضي والطوابق العليا — لكن بشكل متزايد تُحدَّد بزجاج ذي إشعاعية منخفضة (Low-E) للتحكم في اكتساب الحرارة الشمسية، وهو اشتراط يرتبط مباشرة ببنود كفاءة الطاقة في الكود السعودي.\n\nتفاصيل الـ GRC (الخرسانة المقواة بالزجاج): تتيح ألواح GRC إعادة إنتاج أنماط هندسية معقدة — غالبًا مستوحاة من المشربية التقليدية — بحجم كبير وبوزن خفيف وتكلفة أقل مقارنة بالحجر المنحوت. والنمط المثقّب يعمل أيضًا كمظلة شمسية تقلل من اكتساب الحرارة المباشر على الواجهات الغربية والجنوبية.\n\nتركيبة الخامات المتعددة: بدلًا من خامة كسوة واحدة لكامل الواجهة، تطلب تصاميم 2026 بشكل متزايد توزيعًا مدروسًا للخامات: حجر عند القاعدة للمتانة والحضور الملموس، شاشات معدنية أو ألواح GRC في الطوابق العلوية للنمط والتظليل، وزجاج يتركز حيث تهم الإطلالة والإضاءة الطبيعية أكثر.\n\nألوان أكثر دكانة وتشبعًا: رغم أن درجات الأبيض والبيج لا تزال شائعة لخصائصها العاكسة للحرارة، هناك إقبال متزايد على لمسات الرمادي الداكن والبرونزي والطيني العميق — تُستخدم بشكل انتقائي عند المدخل أو إطارات النوافذ أو الزعانف الرأسية بدلًا من تغطية الواجهة كاملة، بما يوازن بين التميز البصري والأداء الحراري.",
        },
        {
          title: "مقارنة سريعة لخامات الواجهات",
          body: "الحجر الطبيعي: الأنسب للفلل والواجهات الفاخرة — ثقيل ويحتاج تخطيطًا إنشائيًا داعمًا.\n\nألواح GRC: الأنسب للأنماط والتظليل والزخارف التراثية — خفيف وقابل للتخصيص واقتصادي عند التنفيذ بحجم كبير.\n\nالواجهة الزجاجية الستائرية: الأنسب للمباني التجارية ومتعددة الاستخدامات — يتطلب زجاجًا Low-E للتحكم الحراري.\n\nالكسوة/الشاشات المعدنية: الأنسب للألواح المميزة والتظليل الشمسي — يحتاج طلاءً مقاومًا للتآكل في المناطق الساحلية.\n\nاللياسة/المحارة المصقولة: الأنسب للفلل ذات الميزانية المحدودة — تكلفة أقل، تتطلب عزلًا مائيًا جيدًا تحتها.",
        },
        {
          title: "اعتبارات الكود السعودي للبناء بخصوص الواجهات",
          body: "تصميم الواجهات في السعودية ليس جماليًا بحتًا — فهو يتقاطع مع عدة بنود في الكود السعودي: التثبيت الإنشائي ومقاومة أحمال الرياح لأنظمة الكسوة، واشتراطات مقاومة الحريق للخامات المستخدمة فوق ارتفاعات معينة، ومعايير كفاءة الطاقة التي تحكم نسب الزجاج ومعامل اكتساب الحرارة الشمسية للواجهات التجارية. كما تطبّق البلديات في الرياض وجدة وغيرها من المدن الكبرى بشكل متزايد اشتراطات تصميم خاصة بها فوق الحد الأدنى للكود، خصوصًا للواجهات التجارية المطلة على الشوارع. اعتماد تصميم واجهة بسلاسة يعني التحقق من هذه الاشتراطات في مرحلة الفكرة — لا بعد اعتماد المخططات النهائية.",
        },
        {
          title: "أخطاء شائعة في تصميم الواجهات",
          body: "اختيار الكسوة قبل هندسة الغلاف الإنشائي، ما يؤدي إلى تعارض بين فكرة التصميم وما يمكن للهيكل دعمه فعليًا.\n\nتجاهل فواصل التمدد الحراري، ما يسبب تشققات في ألواح الحجر وGRC خلال سنوات قليلة.\n\nالإفراط في التزجيج على الواجهات الغربية دون تظليل كافٍ، ما يرفع أحمال التبريد بشكل كبير.\n\nتخطي نموذج تجريبي للواجهة، ما يسبب مفاجآت في اللون أو الملمس عند بدء التركيب الكامل.\n\nالتقليل من تقدير متطلبات الصيانة — بعض أنظمة الكسوة الفاخرة تحتاج معدات وصول خاصة للتنظيف والفحص يجب تخطيطها ضمن تصميم المبنى.",
        },
        {
          title: "كيف تُحسب تكلفة مشاريع الواجهات عادة",
          body: "تتحدد تكلفة مشاريع الواجهات في السعودية وفق اختيار الخامة (الحجر الطبيعي والواجهات الزجاجية الستائرية في الفئة الفاخرة، واللياسة المصقولة في الفئة الاقتصادية)، وتعقيد الواجهة (الواجهات متعددة الخامات أغلى لكل متر مربع من الجدران المسطحة أحادية الخامة)، ومتطلبات الدعم الإنشائي للخامات الأثقل، وما إذا كان المشروع يحتاج تصنيعًا مخصصًا — كأنماط GRC المصممة خصيصًا — مقابل ألواح بمقاسات قياسية.",
        },
      ],
      en: [
        {
          title: "Why Facade Design Has Become a Bigger Decision",
          body: "A decade ago, many residential facades in Saudi Arabia defaulted to a narrow range of stone cladding and painted render. Today, clients are asking for a wider mix — stone combined with metal screens, glass curtain walls on commercial frontages, and GRC (glass-reinforced concrete) detailing that would have been considered a premium, custom option a few years ago. Three forces are driving this shift: rising buyer expectations in a competitive real estate market, municipal design guidelines that increasingly favor distinctive streetscapes, and lessons learned from facades that didn't perform well in Saudi heat and sun exposure.\n\nThat last point matters more than most homeowners realize. A facade is not just a surface — it's part of the building envelope that interacts directly with the insulation and waterproofing systems behind it. A striking facade design that ignores thermal movement, water drainage, or ventilation behind the cladding will develop cracking, staining, or efflorescence within a few seasons — which is why facade design and building envelope engineering need to be planned together, not handed to separate teams.",
        },
        {
          title: "Facade Styles Trending in Saudi Arabia for 2026",
          body: "Natural and Engineered Stone with Minimalist Framing: Stone remains the most requested material for villas, but the application has changed: large-format panels with minimal visible joints, paired with dark metal window frames, have replaced the heavily segmented stone patterns common a decade ago. Limestone and sandstone tones that echo the regional landscape remain popular, often combined with one contrasting accent material.\n\nGlass Curtain Walls for Commercial and Mixed-Use Buildings: For retail, office, and mixed-use developments, glass curtain wall systems continue to dominate street-level and upper-floor facades — but increasingly specified with high-performance, low-emissivity (low-E) coated glass to control solar heat gain, a requirement that connects directly to SBC energy-efficiency provisions.\n\nGRC (Glass-Reinforced Concrete) Detailing: GRC panels allow intricate geometric patterns — often inspired by traditional mashrabiya screening — to be reproduced at scale, lightweight, and cost-effectively compared to carved stone. The perforated pattern also functions as solar shading, reducing direct heat gain on west- and south-facing elevations.\n\nMixed-Material Composition: Rather than a single cladding material across an entire elevation, 2026 facade briefs increasingly call for deliberate material zoning: stone at the base for durability and tactile presence, metal screens or GRC panels at upper levels for pattern and shading, and glazing concentrated where views and daylight matter most.\n\nDarker, More Saturated Color Palettes: While white and beige tones remain common for their heat-reflective properties, there's a growing appetite for charcoal, bronze, and deep terracotta accents — used selectively on entry features, window surrounds, or vertical fins rather than across full elevations, balancing visual distinctiveness with thermal performance.",
        },
        {
          title: "Facade Materials: Quick Comparison",
          body: "Natural stone: Best for villas and high-end facades — heavy, needs structural support planning.\n\nGRC panels: Best for pattern, screening, and heritage motifs — lightweight, customizable, cost-effective at scale.\n\nGlass curtain wall: Best for commercial and mixed-use — requires low-E glazing for heat control.\n\nMetal cladding/screens: Best for accent panels and solar shading — needs corrosion-resistant coating in coastal areas.\n\nTextured render/plaster: Best for budget-conscious villas — lower cost, requires quality waterproofing beneath.",
        },
        {
          title: "Saudi Building Code Considerations for Facades",
          body: "Facade design in Saudi Arabia isn't purely aesthetic — it intersects with several SBC provisions: structural attachment and wind-load resistance for cladding systems, fire-rating requirements for materials used above certain building heights, and energy-efficiency standards that govern glazing ratios and solar heat gain coefficients on commercial facades. Municipalities in Riyadh, Jeddah, and other major cities also increasingly apply their own design review guidelines on top of SBC minimums, particularly for street-facing commercial frontages. Getting a facade design approved smoothly means checking these requirements at the concept stage — not after drawings are finalized.",
        },
        {
          title: "Common Facade Design Mistakes",
          body: "Choosing cladding before the building envelope is engineered, leading to conflicts between the design intent and what the structure can actually support.\n\nIgnoring thermal expansion joints, which causes cracking in stone and GRC panels within a few years.\n\nOver-glazing west-facing elevations without adequate shading, dramatically increasing cooling loads.\n\nSkipping a facade mockup or sample panel, resulting in color or texture surprises once full-scale installation begins.\n\nUnderestimating maintenance access — some premium cladding systems require specific access equipment for cleaning and inspection that should be planned into the building design.",
        },
        {
          title: "How Facade Costs Are Typically Structured",
          body: "Facade project costs in Saudi Arabia are driven by material selection (natural stone and curtain wall systems sit at the premium end, textured render at the economical end), elevation complexity (articulated, multi-material facades cost more per square meter than flat single-material walls), structural support requirements for heavier materials, and whether the project needs custom fabrication — as with bespoke GRC patterns — versus standard panel sizes.",
        },
      ],
    },
    whyUs: {
      ar: [
        "تصميم الواجهة كجزء من الغلاف الإنشائي الكامل بالتنسيق مع الهندسة الإنشائية والعزل",
        "خبرة تنفيذ تتجاوز 20 عامًا في الرياض وجدة والقصيم",
        "تنسيق بين اختيار الخامة والأداء الحراري واشتراطات الكود السعودي",
        "تنفيذ واجهات حجرية وزجاجية وGRC ومعدنية بأعلى معايير الجودة",
        "أنظمة واجهات تحافظ على مظهرها وأدائها لعقود",
      ],
      en: [
        "Facade design handled as part of the full building envelope — coordinated with structural engineering and insulation",
        "20+ years of delivery experience across Riyadh, Jeddah, and Qassim",
        "Coordination between material selection, thermal performance, and SBC code compliance",
        "Execution of stone, glass, GRC, and metal facades to the highest quality standards",
        "Facade systems that hold their appearance and performance for decades",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "صمّم واجهة تؤدي بنفس كفاءة مظهرها", description: "في لمعة العربية، يُدار تصميم الواجهة كجزء من الغلاف الإنشائي الكامل — بالتنسيق مع الهندسة الإنشائية والعزل منذ أولى مراحل التصميم.", button: "احصل على استشارة" },
      en: { title: "Design a Facade That Performs as Well as It Looks", description: "At Lamaat Al-Arabiya, facade design is handled as part of the full building envelope — coordinated with structural engineering, insulation, and waterproofing from the earliest design stages.", button: "Get a Consultation" },
    },
  },
  "commercial-fit-out-renovation-saudi-arabia": {
    slug: "commercial-fit-out-renovation-saudi-arabia",
    title: {
      ar: "تجديد وتأهيل المساحات التجارية والمكاتب في السعودية (Fit-out)",
      en: "Commercial Fit-Out & Renovation in Saudi Arabia: A Complete Guide",
    },
    subtitle: {
      ar: "الفرق بين التشطيب الأول وإعادة التأهيل، المراحل، التكلفة، وكيفية تقليل التعطيل على العمل",
      en: "The difference between first fit-out and refurbishment, phases, costs, and how to minimize business disruption",
    },
    description: {
      ar: "دليل شامل عن تجديد وتأهيل المساحات التجارية والمكاتب في السعودية: الفرق بين التشطيب الأول وإعادة التأهيل، المراحل، التكلفة، وكيفية تقليل التعطيل على العمل.",
      en: "A complete guide to commercial fit-out and renovation in Saudi Arabia — the difference between first fit-out and refurbishment, phases, costs, and how to minimize business disruption.",
    },
    keywords: {
      ar: [
        "تجديد المساحات التجارية", "فيت اوت تجاري", "تجديد مكاتب", "تهيئة محلات تجارية",
        "تكلفة تجديد مساحة تجارية", "تنفيذ ليلي للتجديد",
        "لمعة العربية مقاولات", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "commercial fit-out and renovation Saudi Arabia", "office fit-out Saudi Arabia",
        "retail shop renovation", "shell and core vs fit-out",
        "commercial space renovation cost", "after-hours renovation",
        "Lamaat Al-Arabiya fit-out", "commercial renovation Riyadh",
      ],
    },
    sections: {
      ar: [
        {
          title: "الفيت أوت مقابل التشطيب الأول: ما الفرق؟",
          body: "مشروع التشطيب الداخلي لأول مرة يبدأ من هيكل خام: أرضيات خرسانية، جدران غير مشطبة، ولا أنظمة ميكانيكية أو كهربائية أو سباكة مُركّبة. أما الفيت أوت (Fit-out)، فيبدأ عادة من مساحة \"شل آند كور\" (Shell & Core) تحتوي بالفعل على أنظمة المبنى الأساسية، والعمل يتمحور حول بناء الداخل ليناسب علامة تجارية ومتطلبات تشغيلية محددة: القواطع، الأرضيات، الأسقف، الإضاءة، عناصر الهوية البصرية، والتجهيزات.\n\nأما إعادة التأهيل (Renovation) فهي فئة ثالثة بالكامل — تعني إعادة صياغة مساحة سبق تشطيبها واستخدامها، غالبًا مع التخطيط حول عقد إيجار قائم، أو ساعات عمل، أو نشاط تجاري يجب أن يستمر خلال التنفيذ. كل سيناريو من هذه السيناريوهات الثلاثة يحتاج أسلوب تسلسل مختلفًا، ولهذا فإن تحديد نطاق المشروع بدقة من البداية أهم مما يتوقعه معظم العملاء.",
        },
        {
          title: "الصناعي والتجاري والمكتبي: أولويات فيت أوت مختلفة",
          body: "المحلات والمساحات التجارية: تُبنى مشاريع الفيت أوت التجاري حول اتساق العلامة التجارية وتجربة العميل: ألوان وتشطيبات محددة للعلامة، أرضيات متينة تتحمل الحركة الكثيفة، إضاءة مصممة حول عرض المنتجات، وغالبًا جدول زمني ضيق — إذ تُنفَّذ كثير من مشاريع الفيت أوت التجاري داخل المولات والشوارع التجارية ليلًا أو خلال عطلة نهاية الأسبوع لتجنب الإغلاق خلال ساعات العمل.\n\nالمكاتب: تُعطي مشاريع فيت أوت المكاتب الأولوية لكفاءة التخطيط، والراحة الصوتية، وتقسيم مناطق التكييف بين الأقسام المختلفة، وبشكل متزايد، التصاميم المرنة الملائمة للعمل الهجين. كما يجب التخطيط مبكرًا لبنية الكابلات الخاصة بأنظمة تقنية المعلومات والصوت والصورة.\n\nالمطاعم والمنشآت الفندقية: تحمل مشاريع هذا القطاع طبقات إضافية: أنظمة تهوية المطابخ ومصائد الدهون، والأسطح المطابقة لمعايير سلامة الغذاء، ومتطلبات مكافحة الحريق الخاصة بالمطابخ التجارية — وكلها تحتاج تنسيقًا مع إجراءات اعتماد الدفاع المدني بالتوازي مع رخصة البناء العامة.",
        },
        {
          title: "مراحل مشروع التهيئة والتجديد التجاري النموذجي",
          body: "مسح الموقع وتقييم الوضع القائم — التأكد مما هو موجود فعليًا خلف الجدران والأسقف قبل اعتماد التصميم، إذ لا تطابق مخططات الشل آند كور دائمًا الواقع المُنفَّذ.\n\nالتصميم وتنسيق التراخيص — تصميم المخطط، تنسيق الأنظمة الميكانيكية والكهربائية والسباكة، والحصول على اعتمادات البلدية والدفاع المدني قبل بدء العمل.\n\nالهدم وإزالة التشطيبات القائمة (في حالات التجديد) — إزالة التشطيبات أو القواطع أو التجهيزات التي يجب استبدالها، وغالبًا ما تتطلب تحضير سطح مثل السندبلاست حيث يجب إزالة الطلاءات القديمة أو التآكل قبل تطبيق تشطيبات جديدة.\n\nالتمديدات الأولية للأنظمة — الكهرباء، مجاري التكييف، السباكة، وكابلات البيانات قبل إغلاق الجدران.\n\nالقواطع والأسقف والأرضيات — مرحلة البناء الأساسية.\n\nالتشطيبات والهوية البصرية — الدهانات، تغطيات الجدران، اللافتات، النجارة، والتجهيزات.\n\nالمعاينات النهائية والتسليم — اعتماد الدفاع المدني، معاينة البلدية، ومعالجة قائمة الملاحظات قبل استلام المستأجر للمساحة.",
        },
        {
          title: "تقليل التعطيل على نشاط تجاري قائم",
          body: "بالنسبة لأعمال التجديد داخل نشاط تجاري يجب أن يستمر، التسلسل هو كل شيء. من الأساليب الشائعة:\n\nمناطق عمل مرحلية، بحيث يُجدَّد قسم واحد بينما تبقى بقية المساحة مفتوحة للعملاء أو الموظفين.\n\nالجدولة بعد ساعات العمل أو ليلًا، وهو شائع خصوصًا للمحلات داخل المولات النشطة حيث لا يمكن الوصول نهارًا.\n\nجدولة مكثفة في عطلة نهاية الأسبوع، لضغط الأعمال المزعجة أو المعطلة في نوافذ الإغلاق.\n\nاحتواء الغبار والضوضاء، باستخدام قواطع مؤقتة وأنظمة ضغط سلبي حتى لا تتأثر المناطق النشطة بالأعمال القريبة.\n\nالمقاول الذي سبق له تنسيق مشاريع فيت أوت داخل مولات ومستشفيات ومباني مكتبية نشطة يعرف كيف يسلسل العمل لتقليل الأثر على النشاط التجاري.",
        },
        {
          title: "عوامل التكلفة والجدول الزمني",
          body: "تتفاوت تكلفة مشاريع الفيت أوت والتجديد في السعودية بشكل كبير وفق:\n\nنطاق أعمال الأنظمة — المساحة ذات السعة الكهربائية والتكييف الكافية مسبقًا تكلف أقل بكثير من مساحة تحتاج ترقية ميكانيكية كاملة.\n\nدرجة التشطيب — تشطيبات المتاجر الرائدة أو المنشآت الفندقية أغلى بكثير من تشطيبات المكاتب القياسية.\n\nقيود ساعات العمل — العمل بعد ساعات الدوام أو في عطلات نهاية الأسبوع يحمل عادة تكلفة إضافية.\n\nتعقيد الهدم — إزالة التشطيبات القديمة، خصوصًا عند وجود تجهيزات قائمة ثقيلة، تضيف تكلفة ووقتًا.\n\nمدة الاعتمادات — الجدول الزمني لاعتماد الدفاع المدني والبلدية للمساحات ذات الاستخدام الغذائي أو العام قد يؤثر على الجدول الكلي للمشروع أكثر من أعمال التنفيذ نفسها.",
        },
        {
          title: "أخطاء شائعة في مشاريع الفيت أوت التجاري",
          body: "اعتماد التصميم قبل المسح الفعلي للوضع القائم، ما يؤدي إلى تعارض بين التصميم وبنية الأنظمة الفعلية خلف الجدران.\n\nالتقليل من تقدير مدة الاعتمادات، خصوصًا للمطاعم والمساحات التي تحتاج اعتماد الدفاع المدني.\n\nاختيار التشطيبات دون مراعاة الحركة ومتطلبات التنظيف، ما يسبب تآكلًا مبكرًا.\n\nعدم التخطيط لاستمرارية العمل أثناء التجديد، ما يؤدي لخسارة إيرادات يمكن تجنبها.\n\nتخطي قائمة ملاحظات تفصيلية قبل التسليم، ما يدفع معالجة العيوب إلى فترة تشغيل المستأجر بدلًا من قبل الافتتاح.\n\nإهمال التنسيق مع إدارة المول أو المبنى بخصوص ساعات التسليم ومسارات نقل المواد، ما قد يؤخر بدء العمل فعليًا رغم جاهزية الفريق.",
        },
      ],
      en: [
        {
          title: "Fit-Out vs. First-Time Finishing: What's the Difference?",
          body: "A first interior finishing project starts from a bare shell: concrete floors, unfinished walls, and no mechanical, electrical, or plumbing systems in place. Fit-out, by contrast, usually starts from a \"shell and core\" space that already has base building systems installed, and the work is about building out the interior to suit a specific tenant's brand and operational needs: partitions, flooring, ceilings, lighting, branding elements, and fixtures.\n\nRenovation is a third category entirely — it means reworking a space that has already been finished and used, often while planning around an existing lease, operating hours, or a business that needs to keep running during the work. Each of these three scenarios needs a different sequencing approach, which is why scoping the project correctly at the outset matters more than most clients expect.",
        },
        {
          title: "Industrial, Retail, and Office: Different Fit-Out Priorities",
          body: "Retail and Commercial Shops: Retail fit-outs are driven by brand consistency and customer experience: specific brand colors and finishes, durable flooring that holds up to heavy foot traffic, lighting designed around merchandising, and often a tight turnaround — many retail fit-outs in malls and commercial strips are scheduled overnight or over a weekend to avoid closing during trading hours.\n\nOffices: Office fit-outs prioritize layout efficiency, acoustic comfort, HVAC zoning for different departments, and increasingly, flexible or hybrid-work-friendly layouts. Cabling infrastructure for IT and AV systems also needs to be planned early, since retrofitting cable routes after partitions and ceilings are closed up is expensive and disruptive.\n\nRestaurants and Hospitality: These fit-outs carry additional layers: kitchen ventilation and grease-trap systems, food-safety-compliant surfaces, and fire-suppression requirements specific to commercial kitchens — all of which need to be coordinated with civil defense approval processes alongside the general building permit.",
        },
        {
          title: "The Typical Fit-Out and Renovation Process",
          body: "Site survey and existing-conditions assessment — confirming what's actually behind the walls and ceiling before design finalizes, since shell-and-core drawings don't always match as-built reality.\n\nDesign and permit coordination — layout design, MEP coordination, and securing municipal and civil defense approvals before work begins.\n\nDemolition and strip-out (for renovations) — removing existing finishes, partitions, or fixtures that are being replaced, often requiring surface prep such as sandblasting where old coatings or corrosion need to be removed before new finishes go on.\n\nMEP rough-in — electrical, HVAC ducting, plumbing, and data cabling installed before walls close up.\n\nPartitioning, ceilings, and flooring — the core build-out phase.\n\nFinishes and branding — paint, wall coverings, signage, millwork, and fixtures.\n\nFinal inspections and handover — civil defense sign-off, municipal inspection, and snag-list resolution before the tenant takes occupancy.",
        },
        {
          title: "Minimizing Disruption to an Operating Business",
          body: "For renovations happening inside a business that needs to keep operating, sequencing is everything. Common approaches include:\n\nPhased work zones, renovating one section while the rest of the space remains open to customers or staff.\n\nAfter-hours and overnight scheduling, particularly common for retail units inside active malls where daytime access isn't possible.\n\nWeekend-intensive scheduling, compressing noisy or disruptive work (demolition, major MEP changes) into closure windows.\n\nDust and noise containment, using temporary partitions and negative-pressure setups so active areas aren't affected by construction happening nearby.\n\nA contractor who has coordinated fit-outs inside active malls, hospitals, and office buildings knows how to sequence work so the business impact is minimized — this is usually the single biggest factor separating a smooth renovation from one that damages customer experience during the work itself.",
        },
        {
          title: "Cost and Timeline Factors",
          body: "Fit-out and renovation costs in Saudi Arabia vary significantly based on:\n\nScope of MEP work — a space with adequate existing electrical and HVAC capacity costs far less to fit out than one needing a full mechanical upgrade.\n\nFinish grade — flagship retail or hospitality finishes cost considerably more than standard office-grade finishes.\n\nWorking-hours restrictions — after-hours or weekend-only work typically carries a premium due to labor scheduling and reduced daily working windows.\n\nDemolition complexity — removing old finishes, especially where heavy existing fixtures are involved, adds both cost and time.\n\nApproval timeline — civil defense and municipal approval timelines for food service and public-occupancy spaces can affect the overall project schedule more than the construction work itself.",
        },
        {
          title: "Common Mistakes in Commercial Fit-Out Projects",
          body: "Finalizing the design before the as-built survey, leading to clashes between the design and the actual MEP infrastructure behind the walls.\n\nUnderestimating approval lead time, especially for restaurants and spaces requiring civil defense sign-off.\n\nChoosing finishes without checking foot-traffic and cleaning requirements, leading to premature wear.\n\nNot planning for business continuity during renovation, resulting in avoidable revenue loss.\n\nSkipping a detailed snag list before handover, pushing defect resolution into the tenant's operating period instead of before opening.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة تنفيذ فيت أوت وتجديد تجاري تتجاوز 20 عامًا في الرياض وجدة والقصيم",
        "تنفيذ داخل مولات ومباني مكتبية ومنشآت نشطة مع تقليل التعطيل على العمل",
        "جدولة مرنة تشمل العمل الليلي وعطلات نهاية الأسبوع",
        "تنسيق كامل مع البلدية والدفاع المدني للحصول على الاعتمادات",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "20+ years of commercial fit-out and renovation experience across Riyadh, Jeddah, and Qassim",
        "Execution inside active malls, office buildings, and operating facilities with minimal business disruption",
        "Flexible scheduling including overnight and weekend work",
        "Full coordination with municipality and civil defense for approvals",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هيّئ مساحتك مع مقاول يفهم بيئات العمل الحية", description: "تنفذ لمعة العربية مشاريع التهيئة والتجديد التجاري في الرياض وجدة والقصيم — من المحلات والمكاتب إلى التشطيبات التجارية واسعة النطاق للمولات والمطارات — بجدولة مصممة للحفاظ على استمرار عملك.", button: "احصل على استشارة" },
      en: { title: "Fit Out Your Space With a Contractor That Understands Live Business Environments", description: "Lamaat Al-Arabiya delivers commercial fit-out and renovation projects across Riyadh, Jeddah, and Qassim — from retail units and offices to large-scale commercial finishing for malls and airports — with scheduling built around keeping your business running.", button: "Get a Consultation" },
    },
  },
  "villa-building-journey-saudi-arabia": {
    slug: "villa-building-journey-saudi-arabia",
    title: {
      ar: "من الفكرة إلى الواقع: رحلة بناء فيلا أحلامك في السعودية",
      en: "From Vision to Reality: The Journey of Building Your Dream Villa in Saudi Arabia",
    },
    subtitle: {
      ar: "ما يبدو عليه بناء فيلا فعليًا، مرحلة بمرحلة — كما يصفه عملاؤنا",
      en: "What building a villa actually looks and feels like, stage by stage — as our clients describe it",
    },
    description: {
      ar: "بناء الفيلا ليس مجرد جدول زمني إنشائي — إنه رحلة عاطفية. هذا هو شكل وملمس هذه الرحلة فعليًا، من أول رسمة إلى يوم الاستلام.",
      en: "Building a villa isn't just a construction timeline — it's an emotional journey. Here's what that journey actually looks and feels like, from the first sketch to move-in day.",
    },
    keywords: {
      ar: [
        "بناء فيلا الأحلام في السعودية", "تجربة بناء فيلا", "مراحل بناء الفيلا",
        "رحلة بناء منزل في السعودية", "شعور بناء فيلا", "يوم استلام الفيلا",
        "بناء فيلا الرياض", "بناء فيلا جدة", "بناء فيلا القصيم",
        "لمعة العربية للمقاولات", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "building a dream villa in Saudi Arabia", "villa building experience", "stages of building a villa",
        "building a home journey KSA", "what it feels like to build a villa", "villa move-in day",
        "villa construction Riyadh", "villa building Jeddah", "Lamaat Al-Arabiya villa",
      ],
    },
    sections: {
      ar: [
        {
          title: "اللحظة التي تتوقف فيها عن كونها حلمًا وتبدأ كخطة",
          body: "تبدأ معظم رحلات الفيلا قبل أول اجتماع مع المقاول بوقت طويل. تبدأ في محادثات على مائدة العشاء — \"ماذا لو انفتح المطبخ على الحديقة\"، \"نحتاج مجلسًا يشعرنا بالدفء لا بالرسمية\"، \"غرف الأطفال يجب أن تتشارك ممرًا لا جدارًا\". هذه الرغبات الصغيرة والمحددة هي نقطة البداية الحقيقية، قبل وجود أي رسمة بوقت طويل.\n\nأصعب جزء في هذه المرحلة المبكرة ليس اختيار الطراز. إنه ترجمة شعور — الطريقة التي تريد أن يشعرك بها المنزل عندما تدخل إليه بعد يوم طويل — إلى شيء يمكن للمهندس والمقاول تنفيذه فعليًا. هذه الترجمة لا تنجح إلا عندما يأخذ من يبني منزلك وقتًا كافيًا للاستماع أولًا.",
        },
        {
          title: "مشاهدة الأرض تتحول إلى شكل",
          body: "هناك نوع محدد من الإثارة يحدث عندما تبدأ أعمال الحفر — عندما تضع الأوتاد والخيوط أخيرًا علامات توضح أين سيكون بابك الأمامي، وصالتك، ونوافذ غرف أطفالك. بالنسبة لمعظم العملاء، هذه أول مرة يشعر المشروع فيها بأنه حقيقي لا نظري. يمكنك أن تمشي على محيط منزلك المستقبلي قبل وضع بلوكة واحدة، وتقريبًا كل عميل يفعل ذلك، أكثر من مرة.\n\nهذه المرحلة تمر بسرعة وتبدو شبه صامتة من الخارج — حفر، أعمال أساسات، قواعد — لكنها المرحلة التي تحدد كل ما يليها. المنزل الذي سيصمد لعقود يكسب قوته هنا، بهدوء، قبل أن يراه أحد.",
        },
        {
          title: "الهيكل يرتفع",
          body: "ثم تأتي المرحلة التي تفاجئ معظم أصحاب الفلل لأول مرة: كم يبدو الهيكل سريعًا في الارتفاع بمجرد أن تبدأ الأعمدة والكمرات في التركيب. ما كان أرضًا مسطحة قبل أسابيع قليلة أصبح له ارتفاع، وغرف يمكنك المشي فيها، وخط سقف يرتفع في السماء. كثيرًا ما يخبرنا العملاء أن هذه المرحلة هي أول مرة \"يبدو فيها المنزل كشيء ما\" — رغم أن الحرفية الحقيقية لا تزال أمامها.\n\nوهي أيضًا المرحلة التي تُتخذ فيها قرارات مبكرة عن جودة بناء الفيلا — من النوع الذي لا يظهر في جولة معاينة سريعة، لكنه يهم بشكل كبير خلال العشرين سنة القادمة — كل يوم، سواء كان أحد يراقب أم لا.",
        },
        {
          title: "المنتصف الطويل والهادئ",
          body: "إذا كانت أعمال الحفر وارتفاع الهيكل هما اللحظتان المثيرتان في البداية والنهاية، فإن المرحلة الوسطى — رفع الجدران، تمديد الأنظمة، تركيب السقف — هي حيث يُختبَر الصبر. هذه المرحلة التي يصفها العملاء غالبًا بأنها \"لا تبدو أنها تتحرك\"، رغم أنه خلف الكواليس، تُتخذ فيها قرارات أكثر من أي نقطة أخرى في المشروع: أين يذهب كل مفتاح، كيف ستُضاء كل غرفة، أي تشطيبات سيُعاش معها فعليًا للعقد القادم.\n\nهذه أيضًا المرحلة التي يكسب فيها المقاول الجيد أكبر قدر من الثقة — ليس من خلال تقدم مرئي مثير، بل من خلال تواصل ثابت عن ما يحدث ولماذا، حتى عندما يكون \"ما يحدث\" أمرًا غير مبهر مثل تمديدات الكهرباء الأولية.",
        },
        {
          title: "المرحلة التي تشعر فيها أخيرًا أن المنزل أصبح لك",
          body: "ثم يحدث التحول الذي لا يحضّرك له أحد بالكامل: اليوم الذي تُطلى فيه أول طبقة دهان، أو يُركَّب أول بلاط، وفجأة يتوقف المنزل عن الشعور كموقع بناء ويبدأ بالشعور كمنزل. هنا يفعل التشطيب الداخلي شيئًا لا يمكن للعمل الإنشائي فعله أبدًا — يحوّل مساحة مبنية إلى مساحة معيوشة. كثيرًا ما يقول العملاء أن هذه المرحلة هي حين يبدؤون بزيارة الموقع أكثر، ليس لأن هناك المزيد لمراجعته، بل لأنه بدأ يبدو حقيقيًا.\n\nخيارات بدت نظرية على لوح الخامات — درجة حجر، تشطيب خزانة، درجة إضاءة — تصبح فجأة ملمس الحياة اليومية.",
        },
        {
          title: "يوم الاستلام",
          body: "وأخيرًا، يأتي يوم يتذكره كل عميل بتفاصيل محددة، سينمائية تقريبًا: أول مرة يفتح فيها باب منزله الخاص، ويمشي في غرف كانت رسمة وأصبحت الآن ملكه ببساطة، ويقف في مطبخ بدأ كتعليق عابر على مائدة عشاء منذ أشهر أو سنوات.\n\nهذه اللحظة هي السبب الكامل الذي جعل المرحلة الوسطى الطويلة، والقرارات الإنشائية الهادئة، ومئات الخيارات الصغيرة طوال الطريق، تستحق الصبر الذي تطلبته.",
        },
        {
          title: "ما يجعل الرحلة أسهل",
          body: "بالنظر إلى الخلف، يذكر معظم العملاء نفس الأمور القليلة التي صنعت الفرق الأكبر في شعورهم بالتجربة:\n\n• إخبارهم بالحقيقة مبكرًا، حتى عندما كانت الحقيقة تأخيرًا أو تكلفة لم يخططوا لها.\n• وجود شخص واحد يتصلون به، بدلًا من البحث عن إجابات عبر عشرة مقاولين فرعيين.\n• رؤية الموقع بانتظام، حتى خلال المرحلة الوسطى \"المملة\"، حتى لا يشعروا أن النتيجة النهائية منفصلة عن العملية.\n• الثقة بمن يتخذ القرارات التي لا يرونها — خيارات الهيكل والأنظمة التي لا تظهر إلا بعد سنوات، في منزل يصمد أو لا يصمد.",
        },
        {
          title: "اللحظات الصغيرة التي لا تُذكر في أي عقد",
          body: "لا أحد يكتب في العقد \"اللحظة التي يرى فيها الأبناء غرفتهم لأول مرة\" أو \"الشعور عند اختيار اللون النهائي لجدار المجلس بعد نقاشات طويلة في المنزل\". لكن هذه هي اللحظات التي يتذكرها العملاء أكثر من أي جدول زمني أو بند تعاقدي. نحن نراها تتكرر مع كل أسرة تقريبًا: الجدة التي تطلب زاوية هادئة قرب النافذة، الأب الذي يقيس المسافة بين المطبخ وطاولة الطعام بخطواته أكثر من مرة، الأم التي تتخيل رائحة القهوة في صباح أول يوم.",
        },
        {
          title: "عندما يتغير شيء في منتصف الطريق",
          body: "من الطبيعي جدًا أن تتغير رغبة ما في منتصف المشروع — عائلة تكبر، أو فكرة جديدة تظهر بعد رؤية غرفة فعليًا لأول مرة بدل تخيلها على ورق. الرحلات الجيدة ليست تلك التي تسير بلا أي تغيير، بل تلك التي تتعامل مع التغيير بمرونة وصراحة، بدلًا من محاولة فرض الخطة الأصلية رغم تغيّر الحاجة الحقيقية.",
        },
        {
          title: "كل رحلة فيلا مختلفة — وهذا هو المقصود",
          body: "لا توجد أسرتان تسيران في هذا الطريق بنفس الطريقة. بعضهم يتحرك بسرعة وحسم؛ وآخرون يحتاجون وقتًا ليشعروا باليقين حول كل خيار. كلاهما طبيعي تمامًا، وشريك المقاولات المناسب يتكيف مع سرعة الأسرة، لا العكس.",
        },
        {
          title: "سرنا هذا الطريق مع مئات الأسر",
          body: "في لمعة العربية، بنينا فللًا في الرياض وجدة والقصيم — لكن ما نتذكره أكثر ليس الهياكل نفسها. إنه محادثات مائدة العشاء التي بدأت كل واحدة منها، وأيام الاستلام التي أنهتها.\n\nوبعد سنوات من استلام المفتاح، يظل شيء واحد ثابتًا في كل القصص التي نسمعها من عملائنا: لا أحد يتذكر تفاصيل الجدول الزمني أو أرقام الفواتير بقدر ما يتذكر شعور الدخول لأول مرة إلى منزل لم يكن موجودًا إلا في خيالهم قبل أشهر.",
        },
      ],
      en: [
        {
          title: "The Moment It Stops Being a Dream and Starts Being a Plan",
          body: "Most villa journeys begin long before the first contractor meeting. They begin in conversations at the dinner table — \"what if the kitchen opened onto the garden,\" \"we need a majlis that feels warm, not formal,\" \"the kids' rooms should share a hallway but not a wall.\" These small, specific wishes are the real starting point, long before a single drawing exists.\n\nThe hardest part of this early stage isn't choosing a style. It's translating a feeling — the way you want the house to feel when you walk in after a long day — into something an architect and a contractor can actually build. That translation only works when the people building your home take the time to listen first.",
        },
        {
          title: "Watching the Plot Become a Shape",
          body: "There's a specific kind of excitement that happens when the groundbreaking begins — when stakes and string lines finally mark out where your front door, your living room, your children's windows will be. For most clients, this is the first time the project feels real rather than theoretical. You can walk the outline of your future home before a single block is laid, and almost everyone does, more than once.\n\nThis stage moves fast and feels almost silent from the outside — excavation, foundation work, footings — but it's the stage that determines everything that follows. A home that will stand for decades earns its strength here, quietly, before anyone can see it.",
        },
        {
          title: "The Skeleton Rising",
          body: "Then comes the part that surprises most first-time villa owners: how quickly the structure seems to rise once columns and beams start going up. What was a flat plot a few weeks ago suddenly has height, rooms you can walk through, a roofline against the sky. Clients often tell us this is the stage where the house first \"looks like something\" — even though the real craftsmanship is still ahead.\n\nIt's also the stage where early decisions about villa construction quality — the kind that don't show up in a walkthrough but matter enormously over the following twenty years — are being made every single day, whether or not anyone is watching.",
        },
        {
          title: "The Long, Quiet Middle",
          body: "If the groundbreaking and the rising structure are the exciting bookends, the middle stretch — walls going up, systems being routed, roofing going on — is where patience gets tested. This is the stage clients describe most often as \"it doesn't feel like it's moving,\" even when, behind the scenes, more decisions are being made than at any other point in the project: where every switch goes, how every room will be lit, which finishes will actually be lived with for the next decade.\n\nThis is also where a good contractor earns the most trust — not through dramatic visible progress, but through steady communication about what's happening and why, even when the \"what\" is something as unglamorous as electrical rough-in.",
        },
        {
          title: "The Stage Where It Finally Feels Like Yours",
          body: "Then comes the shift nobody quite prepares you for: the day the first coat of paint goes on, or the first tile is set, and suddenly the house stops feeling like a construction site and starts feeling like a home. This is where interior finishing does something structural work never can — it turns a built space into a lived one. Clients often say this is the stage they start visiting the site more often, not because there's more to check, but because it's starting to feel real.\n\nChoices that felt abstract on a materials board — a stone tone, a cabinet finish, a lighting temperature — suddenly become the texture of daily life.",
        },
        {
          title: "Move-In Day",
          body: "And then, eventually, there's a day that every client remembers in specific, almost cinematic detail: the first time they unlock their own front door, walk through rooms that used to be a drawing and are now simply theirs, and stand in a kitchen that started as someone's offhand comment at a dinner table months or years earlier.\n\nThis moment is the entire reason the long middle stretch, the quiet structural decisions, and the hundreds of small choices along the way were worth the patience they required.",
        },
        {
          title: "What Makes the Journey Easier",
          body: "Looking back, most clients say the same few things made the biggest difference in how the experience felt, not just how the house turned out:\n\n• Being told the truth early, even when the truth was a delay or a cost they hadn't planned for.\n• Having one person to call, rather than chasing answers across a dozen subcontractors.\n• Seeing the site regularly, even during the \"boring\" middle stretch, so the finished product never felt disconnected from the process.\n• Trusting the people making the decisions they couldn't see — the structural and systems choices that don't show up until years later, in a home that holds up or doesn't.",
        },
        {
          title: "The Small Moments No Contract Ever Mentions",
          body: "No contract ever lists \"the moment the kids see their room for the first time,\" or \"how it feels to finally settle on the majlis wall color after weeks of back-and-forth at home.\" But these are the moments clients remember longer than any timeline or line item. We see them repeat with almost every family: a grandmother asking for a quiet corner near a window, a father pacing out the distance between the kitchen and the dining table more than once just to be sure, a mother already imagining the smell of coffee on the first morning.",
        },
        {
          title: "When Something Changes Midway Through",
          body: "It's completely normal for a wish to shift partway through a project — a family grows, or a new idea emerges once a room can actually be seen rather than imagined on paper. The good journeys aren't the ones with zero changes; they're the ones where change is handled with flexibility and honesty, rather than forcing the original plan despite a genuinely different need.",
        },
        {
          title: "Every Villa Journey Is Different — and That's the Point",
          body: "No two families walk this path the same way. Some move fast and decisively; others take time to feel certain about every choice. Both are completely normal, and the right contracting partner adjusts to the pace of the family, not the other way around.",
        },
        {
          title: "We've Walked This Road With Hundreds of Families",
          body: "At Lamaat Al-Arabiya, we've built villas across Riyadh, Jeddah, and Qassim — but what we remember most isn't the structures themselves. It's the dinner-table conversations that started each one, and the move-in days that finished them.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة بناء فلل تتجاوز 20 عامًا في الرياض وجدة والقصيم",
        "تواصل مستمر وشفاف في كل مرحلة من مراحل البناء",
        "مرونة في التعامل مع التغييرات أثناء المشروع",
        "شخص واحد مسؤول عن التنسيق بدلًا من عشرات المقاولين الفرعيين",
        "تسليم مفتاح — من محادثة مائدة العشاء إلى يوم الاستلام",
      ],
      en: [
        "20+ years of villa building experience across Riyadh, Jeddah, and Qassim",
        "Consistent, transparent communication at every stage of construction",
        "Flexibility to handle changes midway through the project",
        "One point of contact instead of chasing a dozen subcontractors",
        "Turnkey delivery — from the dinner-table conversation to move-in day",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "إذا كنت تقف في بداية رحلة فيلتك الخاصة", description: "سنكون سعداء بالسير فيها معك — بدءًا بمحادثة، لا بعقد.", button: "ابدأ المحادثة" },
      en: { title: "If you're standing at the beginning of your own villa journey", description: "We'd be glad to walk it with you — starting with a conversation, not a contract.", button: "Start the Conversation" },
    },
  },
  "choosing-right-contractor-saudi-arabia": {
    slug: "choosing-right-contractor-saudi-arabia",
    title: {
      ar: "كيف تختار شريك المقاولات المناسب لمشروعك في السعودية",
      en: "How to Choose the Right Contracting Partner for Your Project in Saudi Arabia",
    },
    subtitle: {
      ar: "ما يفرّق فعليًا بين شريك مقاولات تقدر تثق فيه وآخر يعرّضك للمخاطر",
      en: "What actually separates a trustworthy contracting partner from a risky one",
    },
    description: {
      ar: "اختيار المقاول من أهم القرارات في أي مشروع بناء. هذا ما يفرّق فعليًا بين شريك مقاولات تقدر تثق فيه وآخر يعرّضك للمخاطر في السعودية.",
      en: "Choosing a contractor is one of the biggest decisions in any build. Here's what actually separates a trustworthy contracting partner from a risky one in Saudi Arabia.",
    },
    keywords: {
      ar: [
        "اختيار مقاول في السعودية", "كيف تختار شركة مقاولات", "مقاول موثوق في السعودية",
        "أسئلة تسألها لمقاول الفيلا", "علامات تحذيرية من المقاول", "شركة مقاولات موثوقة في السعودية",
        "لمعة العربية للمقاولات", "لمعه العربية", "لمعة", "لمعه",
        "مقاول فلل الرياض", "مقاول جدة", "مقاول القصيم",
      ],
      en: [
        "choosing a contractor in Saudi Arabia", "how to pick a contracting company", "trusted contractor KSA",
        "villa contractor questions to ask", "contractor red flags", "reliable construction company Saudi Arabia",
        "Lamaat Al-Arabiya contractor", "contractor Riyadh Jeddah Qassim",
      ],
    },
    sections: {
      ar: [
        {
          title: "السؤال الحقيقي وراء السؤال",
          body: "عندما يسأل عميل \"كيف أختار مقاولًا جيدًا؟\"، فإن ما يسأله فعليًا هو: من يمكنني أن أثق أنه لن يختفي في منتصف الطريق، أو يختصر في أمور لن ألاحظها إلا بعد فوات الوقت، أو يرفع الفاتورة بهدوء؟ هذا هو السؤال الحقيقي، ويستحق إجابة حقيقية — لا قائمة عامة تتكرر في كل نتيجة بحث عن \"تحقق من ترخيصه\".",
        },
        {
          title: "العلامات التي تهم فعليًا",
          body: "المقاول الذي يبدأ بسعر قبل أن يفهم مساحتك، وجدولك الزمني، وحاجات أسرتك، أو هوية علامتك التجارية، يبيعك رقمًا لا حلًا. أما من يستحق الثقة فيقضي وقتًا حقيقيًا في فهم المشروع قبل تسعيره.\n\nانظر إلى مشاريع المقاول المكتملة — فيلا هنا، وحدة تجارية هناك، مسجد أو منشأة عامة في مكان آخر. هل تبقى الجودة ثابتة، أم تتغير حسب ميزانية العميل؟ المقاول الذي يستحق التوظيف يعامل فيلا متوسطة بنفس العناية التي يعامل بها مشروعًا تجاريًا رائدًا.\n\nكل مشروع حقيقي يواجه عقبات — تأخر خامة، تعديل تصميم، ظرف في الموقع لم يتوقعه أحد. الفرق بين مقاول تحتفظ به ومقاول تستبعده ليس في حدوث المشاكل؛ بل في كيفية علمك بها — منه، مبكرًا، أم من شرخ في جدارك بعد ستة أشهر.",
        },
        {
          title: "الترخيص ومطابقة الكود: أمر مفترض لا ميزة تسويقية",
          body: "أي مقاول يستحق العمل معه يعمل بالفعل ضمن الكود السعودي للبناء كحد أدنى، لا كخاصية إضافية يعلن عنها لإظهار الثقة. إذا بدأت شركة عرضها التسويقي بـ \"نحن نلتزم بالكود\"، فاسأل نفسك لماذا احتاج ذلك للذكر من البداية.",
        },
        {
          title: "لا يختفي بعد التسليم",
          body: "المصافحة عند التسليم ليست نهاية العلاقة — بل اللحظة التي تكتشف فيها إن كانت تعني شيئًا من الأساس. المقاول الذي يرد عندما تتصل به بخصوص مشكلة صغيرة بعد ثمانية أشهر يقول لك شيئًا عن نظرته للعلاقة. ومن يصمت لم يكن شريكًا حقيقيًا أصلًا.",
        },
        {
          title: "العلامات التحذيرية التي لا يخبرك بها أحد",
          body: "• عرض سعر أقل بشكل مثير للشك من كل العروض الأخرى، دون توضيح واضح لما يختلف في أسلوبهم. أحدٌ يدفع ثمن هذا الفارق — وغالبًا أنت، لاحقًا، من جودة العمل.\n• التردد في كتابة نطاق العمل. وعد شفهي عن \"ما هو مشمول\" لا يعني شيئًا بعد بدء التنفيذ.\n• غياب نقطة اتصال واحدة واضحة. إذا كان كل سؤال يتنقل بين ثلاثة أشخاص بثلاث إجابات مختلفة، فالمشروع سيشعرك بالشيء نفسه.\n• الضغط لاتخاذ قرار سريع. المقاول الجيد يريدك واثقًا من القرار، لا متسرعًا فيه.\n• محفظة أعمال كلها تصاميم افتراضية، بلا مشاريع منفذة. التصاميم الافتراضية تُظهر النية. المشاريع المنفذة تُظهر القدرة.",
        },
        {
          title: "الثقة لا تُبنى من إعلان واحد",
          body: "كثير من الشركات تستثمر في حملة تسويقية لافتة، وصور احترافية لمشاريع لم تنفذها هي نفسها، ومراجعات لا تعرف مصدرها الحقيقي. هذا لا يعني أن كل شركة تسوّق نفسها بشكل جيد تخدعك — لكنه يعني أن التسويق وحده لا يكفي كمعيار. الطريقة الأضمن هي أن تطلب التحقق من مصدر كل مشروع يُعرض عليك: هل هو مشروعهم فعليًا؟ هل يمكنك زيارته أو التحدث مع صاحبه؟",
        },
        {
          title: "حجم الشركة ليس هو المعيار الحاسم",
          body: "من الأخطاء الشائعة الافتراض أن الشركة الأكبر هي الأكثر أمانًا، أو أن الشركة الأصغر ستكون أرخص وأسرع بالضرورة. الحقيقة أعقد من ذلك. شركة كبيرة قد تكون أكثر استقرارًا ماليًا، لكنها قد تعاملك كرقم في قائمة مشاريع ضخمة. شركة أصغر قد تعطيك اهتمامًا شخصيًا أكبر، لكنها قد لا تملك نفس عمق الموارد عند حدوث أزمة. المعيار الحقيقي ليس الحجم، بل مدى وضوح كل شركة في شرح كيف ستتعامل مع مشروعك بالتحديد.",
        },
        {
          title: "كيف تبدو المحادثة الأولى الجيدة",
          body: "أقوى إشارة مبكرة لا تأتي من كتيب تسويقي — بل من طريقة حديث المقاول معك في الاجتماع الأول. هل يسألك كيف ستستخدم المساحة فعليًا، لا فقط كيف يجب أن تبدو؟ هل يذكر أمورًا لم تفكر فيها — التهوية، الصيانة المستقبلية، كيف سيتحمل التصميم صيف السعودية؟ هذا الحس في التفكير بخطوات أبعد منك هو بالضبط ما تدفع ثمنه، ويظهر في المحادثة قبل أن يظهر في الموقع بكثير.",
        },
        {
          title: "المشاريع ثنائية اللغة وعابرة الحدود تحتاج طبقة إضافية من الثقة",
          body: "بالنسبة للعملاء العاملين بين السعودية والمنطقة الأوسع، أو من ينسقون بين أطراف عربية وإنجليزية، وضوح التواصل ليس رفاهية — بل النقطة التي تفشل المشاريع فيها بهدوء. مواصفات تضيع في الترجمة، اعتمادات تعني شيئًا مختلفًا لكل طرف، جداول زمنية تنحرف لأن أحدًا لم يرصد سوء فهم مبكرًا.",
        },
        {
          title: "أسئلة تستحق أن تُسأل قبل التوقيع على أي شيء",
          body: "1. \"هل يمكنني رؤية مشروع أنهيته منذ سنة على الأقل، والتحدث مع ذلك العميل؟\"\n2. \"ماذا يحدث فعليًا إذا احتجنا تغيير شيء في منتصف المشروع؟\"\n3. \"من بالضبط سأتصل به إذا حدث خطأ ما — اليوم، وبعد سنة من الآن؟\"\n4. \"ما الأمر الذي لا يسأل العملاء عنه عادة لكن يجب أن يسألوا؟\"\n\nهذا السؤال الأخير يخبرك أكثر من أي سؤال آخر. الإجابة تكشف إن كنت تتحدث مع من بنى أشياء فعليًا، أم من باعها فقط.",
        },
        {
          title: "لماذا يستحق هذا القرار وقتًا أكبر مما يحصل عليه عادة",
          body: "كثير من الناس يقضون وقتًا أطول في اختيار سيارة مما يقضونه في اختيار من سيبني المكان الذي سيعيشون فيه أو يديرون منه أعمالهم للعشرين سنة القادمة. هذا مفهوم — فالعملية غير مألوفة، وكل مقاول يبدو واثقًا في الاجتماع. لكن تكلفة الخطأ في هذا القرار لا تُقاس بالإزعاج. بل تُقاس بالمال والوقت والإحباط الهادئ الذي يأتي من العيش داخل اختصارات شخص آخر.",
        },
        {
          title: "اللحظة التي تكشف كل شيء: كيف يتعامل المقاول مع خطأ",
          body: "لا يوجد مشروع بلا أخطاء صغيرة. اللحظة الحقيقية التي تكشف قيمة المقاول ليست أثناء سير العمل بسلاسة، بل عندما يحدث خطأ ويحتاج أحد أن يتحمل مسؤوليته. هل يبادر بالاعتذار ويقترح حلًا، أم يحاول تبرير الأمر أو إلقاء اللوم على طرف آخر؟ هذه اللحظة، وإن بدت صغيرة، تخبرك أكثر من أي عقد موقّع عن نوع العلاقة التي ستعيشها طوال المشروع.",
        },
        {
          title: "شريك، لا مجرد مقاول",
          body: "في لمعة العربية، بنينا سمعتنا في الرياض وجدة والقصيم على كوننا المقاول الذي يعود إليه العملاء لمشروعهم التالي — لا فقط من أنهى المشروع السابق. من الفلل إلى التشطيبات التجارية واسعة النطاق، تنطبق نفس الصراحة، ونفس وضوح التواصل، ونفس المعيار، سواء كانت الميزانية متوسطة أو كان المشروع رائدًا.\n\nسواء كان مشروعك فيلا في الرياض، أو وحدة تجارية في جدة، أو منشأة في القصيم، فإن أول قرار تتخذه بشأنه هو الأهم: من ستختار ليحوّل الفكرة إلى واقع تعيش فيه أو تعمل منه لسنوات طويلة قادمة.",
        },
      ],
      en: [
        {
          title: "The Question Behind the Question",
          body: "When a client asks \"how do I choose a good contractor,\" what they're really asking is: who can I trust not to disappear halfway through, cut corners I won't notice until it's too late, or quietly pad the invoice? That's the real question, and it deserves a real answer — not a generic list of \"check their license\" advice that every search result repeats.",
        },
        {
          title: "Signals That Actually Matter",
          body: "A contractor who starts with a price before understanding your space, your timeline, your family's needs, or your brand's identity is selling you a number, not a solution. The ones worth trusting spend real time understanding the project before they quote it — because a serious estimate can't exist without that understanding.\n\nLook across a contractor's completed projects — a villa here, a commercial unit there, a mosque or public facility somewhere else. Does the quality hold steady, or does it swing depending on the client's budget? A contractor worth hiring treats a modest villa with the same care as a flagship commercial build.\n\nEvery real project hits friction — a material delay, a design change, a site condition nobody anticipated. The difference between a contractor you keep and one you fire isn't whether problems happen; it's whether you hear about them from them, early, or from a crack in your wall six months later.",
        },
        {
          title: "Licensing and Code Compliance: A Given, Not a Selling Point",
          body: "Any contractor worth working with is already operating within the Saudi Building Code as a baseline, not a bonus feature they advertise to seem trustworthy. If a company leads with \"we follow the code\" as its main pitch, ask yourself why that needed saying at all.",
        },
        {
          title: "They Don't Disappear After Handover",
          body: "The handshake at handover isn't the end of the relationship — it's the point where you find out if it ever meant anything. A contractor who responds when you call about a small issue eight months later is telling you something about how they see the relationship. One who goes silent was never really a partner to begin with.",
        },
        {
          title: "The Red Flags Nobody Tells You About",
          body: "• A quote that's suspiciously lower than everyone else's, with no clear explanation of what's different about their approach. Someone is paying for that gap — usually you, later, in quality.\n• Reluctance to put the scope in writing. A verbal promise about \"what's included\" means nothing once work begins.\n• No clear single point of contact. If every question bounces between three different people with three different answers, the project will feel that way too.\n• Pressure to decide fast. A good contractor wants you confident in the decision, not rushed into it.\n• A portfolio that's all renderings, no finished work. Renderings show intention. Finished projects show capability.",
        },
        {
          title: "Trust Isn't Built From One Good Ad",
          body: "Plenty of companies invest heavily in a polished marketing campaign, professional photography of projects they didn't actually build, and reviews whose source you can't verify. That doesn't mean every well-marketed company is misleading you — but it does mean marketing alone isn't a reliable filter. The safer approach is to ask to verify the source of every project shown to you: is it genuinely theirs? Can you visit it, or speak to the person who lives or works there?",
        },
        {
          title: "Company Size Isn't the Deciding Factor",
          body: "A common mistake is assuming a bigger company is automatically safer, or that a smaller one will necessarily be cheaper and faster. The reality is more nuanced. A large company may be more financially stable, but it may also treat you as one line item in a long project list. A smaller company may give you more personal attention, but may not have the same depth of resources if something goes wrong. The real measure isn't size — it's how clearly each company explains how they'll handle your specific project, with its specific scale and requirements.",
        },
        {
          title: "What a Good First Conversation Looks Like",
          body: "The best early signal isn't in a brochure — it's in how a contractor talks to you in the first meeting. Do they ask about how you'll actually use the space, not just what it should look like? Do they mention things you hadn't thought of — ventilation, future maintenance, how the design will hold up to Saudi summers? That instinct to think a few steps ahead of you is exactly what you're paying for, and it shows up in conversation long before it shows up on-site.",
        },
        {
          title: "Bilingual, Cross-Border Projects Need an Extra Layer of Trust",
          body: "For clients working across Saudi Arabia and the wider region, or coordinating between Arabic- and English-speaking stakeholders, communication clarity isn't a nice-to-have — it's where projects quietly go wrong. Specifications that get lost in translation, approvals that mean something different to each party, timelines that drift because nobody flagged a misunderstanding early.",
        },
        {
          title: "Questions Worth Asking Before You Sign Anything",
          body: "1. \"Can I see a project you finished at least a year ago, and can I talk to that client?\"\n2. \"What happens, in practice, if we need to change something mid-project?\"\n3. \"Who exactly will I be calling if something goes wrong — today, and a year from now?\"\n4. \"What's the one thing clients usually don't ask about that they should?\"\n\nThat last question tells you more than any of the others. The answer reveals whether you're talking to someone who's actually built things, or someone who's only sold them.",
        },
        {
          title: "Why This Decision Deserves More Time Than It Usually Gets",
          body: "Most people spend more time choosing a car than choosing who builds the place they'll live or run their business from for the next twenty years. That's understandable — the process is unfamiliar, and every contractor sounds confident in a meeting. But the cost of getting this one decision wrong isn't measured in inconvenience. It's measured in money, time, and the quiet frustration of living inside someone else's shortcuts.",
        },
        {
          title: "A Partner, Not Just a Contractor",
          body: "At Lamaat Al-Arabiya, we've built our reputation across Riyadh, Jeddah, and Qassim on being the contractor clients call back for their next project — not just the one who finished the last one. From villas to large-scale commercial finishing, the same honesty, the same clear communication, and the same standard apply, whether the budget is modest or the project is a flagship.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة تتجاوز 20 عامًا في الرياض وجدة والقصيم",
        "نقطة اتصال واحدة واضحة طوال المشروع",
        "شفافية كاملة في التكاليف والجداول الزمنية والتأخيرات",
        "جودة ثابتة سواء كان المشروع فيلا أو تشطيبًا تجاريًا",
        "دعم مستمر بعد التسليم — لا نختفي بعد المصافحة",
      ],
      en: [
        "20+ years of experience across Riyadh, Jeddah, and Qassim",
        "One clear point of contact throughout the entire project",
        "Full transparency on costs, timelines, and delays",
        "Consistent quality whether the project is a villa or a commercial fit-out",
        "Ongoing support after handover — we don't disappear after the handshake",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "لديك مشروع في بالك؟", description: "لنبدأ المحادثة الأولى — بلا ضغط، فقط وضوح.", button: "ابدأ المحادثة" },
      en: { title: "Have a project in mind?", description: "Let's have the first conversation — no pressure, just clarity.", button: "Start the Conversation" },
    },
  },
  "epoxy-flooring-factories-shops-saudi-arabia": {
    slug: "epoxy-flooring-factories-shops-saudi-arabia",
    title: {
      ar: "ارضيات الايبوكسي للمصانع والمحلات التجارية في السعودية: الدليل الشامل",
      en: "Industrial & Commercial Epoxy Flooring in Saudi Arabia: The Complete Guide for Factories and Retail Shops",
    },
    subtitle: {
      ar: "أرضيتان مختلفتان تمامًا، وشريك ايبوكسي واحد موثوق — من أرضية المصنع إلى واجهة المحل",
      en: "Two Very Different Floors, One Trusted Epoxy Partner — From Factory Floors to Storefronts",
    },
    description: {
      ar: "دليل متخصص عن أعمال الايبوكسي للمصانع والمحلات التجارية في السعودية: الأنظمة الصناعية الثقيلة، تجهيز الأسطح، الالتزام بمعايير السلامة، مدة التنفيذ، والصيانة، من خبراء لمعة العربية للمقاولات.",
      en: "A specialized guide to epoxy flooring for factories and commercial shops in Saudi Arabia: industrial-grade systems, surface prep, safety compliance, installation timelines, and maintenance — from Lamaat Al-Arabia Contracting.",
    },
    keywords: {
      ar: [
        "ارضيات ايبوكسي للمصانع والمحلات التجارية", "ايبوكسي صناعي للمصانع", "ايبوكسي مقاوم للكيماويات",
        "ارضيات ايبوكسي محلات تجارية", "ايبوكسي مضاد للكهرباء الساكنة", "تركيب ايبوكسي الرياض",
        "لمعة العربية للمقاولات", "لمعه العربية", "لمعة", "لمعه",
      ],
      en: [
        "industrial and commercial epoxy flooring Saudi Arabia", "factory floor coating Saudi Arabia", "chemical-resistant epoxy",
        "retail epoxy flooring", "anti-static epoxy flooring", "epoxy flooring installation Riyadh",
        "Lamaat Al-Arabiya epoxy", "epoxy flooring contractor KSA",
      ],
    },
    sections: {
      ar: [
        {
          title: "لماذا يحتاج المصانع والمحلات التجارية إلى نهج مختلف في تنفيذ الايبوكسي",
          body: "كثيرًا ما يُنظر إلى أرضيات الايبوكسي كمنتج واحد، لكن صالة الإنتاج في مصنع ومعرضًا تجاريًا يطلبان من هذا المنتج مهمتين مختلفتين تمامًا. فصالة الإنتاج تحتاج نظامًا يتحمل حركة الرافعات الشوكية، وتسرب الزيوت، والعمل المتواصل على مدار الساعة دون أن يتشقق. أما المحل أو الصيدلية فيحتاج لمسة لامعة تعكس هوية العلامة التجارية، وتُنفَّذ بسرعة تكفي ألا يخسر المحل يوم عمل كامل. وغالبًا ما تكون أرضية الايبوكسي مجرد طبقة واحدة ضمن نطاق تشطيب أوسع يشمل الأرضيات والجدران والتجهيزات، إلا أن التعامل مع المصنع والمحل كمشروع واحد هو السبب الأبرز وراء فشل كثير من أعمال الايبوكسي. هذا الدليل يستعرض الحالتين كل على حدة، لتتمكن من إبلاغ مقاول التنفيذ بالتوقعات الصحيحة منذ البداية.",
        },
        {
          title: "أرضيات المصانع: ما الذي يجب أن يوفره الايبوكسي الصناعي الثقيل",
          body: "تعيش الأرضية الصناعية في ظروف لا يراها معرض تجاري أبدًا، لذا يجب اختيار النظام وفق الاستخدام الفعلي لا بند \"طلاء ايبوكسي\" عام:\n\n• فئة الأحمال وحركة المرور — حركة الرافعات الشوكية وعربات النقل المستمرة تستدعي نظامًا أكثر سماكة يُطبَّق بالمسطرين أو نظام رش ثقيل، لا طبقة ذاتية التسوية رقيقة.\n• مقاومة الزيوت والمواد الكيميائية — ورش الصيانة ومناطق تخزين المواد الكيميائية تحتاج تركيبات مقاومة للزيوت والأحماض والمذيبات حتى لا تتلف السطح الخرساني عند أي تسرب.\n• الحماية من الكهرباء الساكنة — خطوط تجميع الإلكترونيات وغرف المعدات الحساسة تتطلب ايبوكسي موصل أو مُبدِّد للشحنات الساكنة لمنع أي تلف ناتج عن التفريغ الكهربائي.\n• سطح صحي خالٍ من الفواصل — منشآت تصنيع الأغذية والأدوية تحتاج سطحًا متصلًا يقاوم تراكم البكتيريا ويتحمل الغسيل المتكرر.\n• تركيبات سريعة التصلب — المصانع التي لا تحتمل توقفًا طويلًا غالبًا ما تحتاج أنظمة تصل إلى قوة تحمل كاملة خلال ساعات لا أيام.\n\nاختيار الفئة الخاطئة هنا هو السبب الأول لفشل أرضيات المصانع مبكرًا؛ فالايبوكسي ذاتي التسوية المختار لرخص سعره لن يصمد في ممر رافعة شوكية.",
        },
        {
          title: "تجهيز أرضية المصنع: لماذا تحدد عملية التجهيز نجاح العمل بالكامل",
          body: "عدد أكبر من مشاريع الايبوكسي الصناعي يفشل بسبب ضعف تجهيز السطح أكثر مما يفشل بسبب الايبوكسي نفسه. فالأرضيات الصناعية القديمة غالبًا ما تكون ملوّثة بسنوات من الزيوت والشحوم والأتربة المتغلغلة التي لا يزيلها المسح أو السنفرة الخفيفة. يجب فتح السطح الخرساني ميكانيكيًا عبر السنفرة الماسية أو السفع بالكاشطات، ليلتصق الايبوكسي بسطح نظيف وسليم بدلًا من الجلوس فوق طبقة ملوّثة ستتقشر لاحقًا. وللمنشآت التي تحتاج مساحة تجهيز مخصصة وفق المعايير الدولية، تغطي خدمة تجهيز غرف السفع الرملي وتركيب المضخات الميكانيكية لدينا هذا النوع من البنية التحتية، بما يشمل أنظمة التهوية والتحكم بالأتربة واستعادة مادة السفع.",
        },
        {
          title: "الايبوكسي التجاري والمحلات: مصمم من أجل الهوية والسرعة وحركة الزوار",
          body: "تُقيَّم أرضية المحل أو المعرض أو المطعم بمعايير مختلفة تمامًا، وأبرزها:\n\n• مظهر يعكس الهوية التجارية — الايبوكسي ذاتي التسوية بلون العلامة التجارية، أو التشطيب المعدني شبه الرخامي للمعارض الفاخرة، أصبح بديلًا لما كان يتطلب سابقًا حجرًا مستوردًا.\n• سرعة التنفيذ — غالبية مشاريع الايبوكسي التجاري تُجدوَل ليلًا أو خلال عطلة نهاية الأسبوع تحديدًا حتى لا يخسر المحل أيام عمله، إذ تسمح التركيبات سريعة التصلب بإعادة الفتح خلال 24-48 ساعة من آخر طبقة.\n• النظافة وسهولة التعقيم — الصيدليات والمقاهي والمحلات الغذائية تستفيد من السطح نفسه الخالي من الفواصل الذي تعتمد عليه المصانع، لكن بتشطيب جمالي.\n• التحمل أمام حركة الزوار والعربات — عربات التسوق والحركة اليومية للزوار تُجهد الأرضية بشكل مختلف عن المعدات الصناعية، لذا تُختار الطبقة العلوية لمقاومة الخدوش لا التعرض الكيميائي.\n\nوغالبًا ما يندرج هذا النوع من أعمال الايبوكسي التجاري ضمن نطاق أوسع من أعمال التشطيبات التجارية — الأرضيات والواجهات والإضاءة والأعمال الكهروميكانيكية للمولات والمعارض والمنشآت الفندقية.",
        },
        {
          title: "السلامة والالتزام بالكود لا تحتمل التهاون في الحالتين",
          body: "سواء كان الأمر يتعلق بممر في مستودع أو مدخل محل تجاري، فإن الأرضية الجميلة غير الآمنة تمثل مسؤولية قانونية. المواد المانعة للانزلاق ضرورية في أي منطقة معرضة للماء أو الزيوت أو الغسيل المتكرر — وتنطبق هذه المعايير على غرف الغسيل الصناعية ومداخل المحلات في موسم الأمطار على حد سواء. وبخلاف مقاومة الانزلاق، فإن معايير مقاومة الحريق، ومتطلبات السلامة المهنية، ووثائق الفحص للمنشآت التجارية والصناعية تندرج جميعها تحت الكود السعودي للبناء.",
        },
        {
          title: "يوم التنفيذ: عمل على مراحل في المصانع مقابل عمل خارج أوقات الدوام في المحلات",
          body: "يختلف القطاعان أيضًا اختلافًا تامًا في طريقة جدولة التنفيذ. ففي المصانع، يُقسَّم العمل عادة قسمًا تلو الآخر، بالتنسيق مع فترات التوقف المخطط لها للصيانة، بحيث يتوقف جزء من خط الإنتاج فقط في كل مرة، مع وضع حواجز ولافتات تحمي المناطق المُعالَجة من حركة الأقدام أو المركبات المبكرة. أما في المحلات والمعارض، فيُغلَق المكان بالكامل لفترة قصيرة ومكثفة — ليلًا، أو خلال عطلة نهاية الأسبوع، أو عند إعادة تهيئة المحل المجدولة — مع حماية المعروضات والتجهيزات وتسليم المساحة جاهزة للعمل. والمقاول الذي يخطط تسلسل العمل وفق ساعات تشغيلك الفعلية، لا وفق مساحة الأرضية فقط، هو من يجعل التوقف محسوبًا في الحالتين.",
        },
        {
          title: "الحفاظ على أداء الأرضية: الصيانة حسب القطاع",
          body: "تختلف احتياجات الصيانة بقدر اختلاف التنفيذ. فأرضيات المصانع تحتاج تنظيفًا فوريًا لأي تسرب كيميائي أو زيتي، وفحصًا دوريًا للممرات عالية الحركة لرصد التآكل، ودورة إعادة طلاء مبنية على حجم الحمل الفعلي لا على تاريخ ثابت في التقويم. أما أرضيات المحلات والمعارض فتحتاج مسحًا رطبًا يوميًا بمنظف متعادل الحموضة، وحماية من الأثاث المسحوب أو الأتربة المجلوبة من الخارج، وتجديدًا دوريًا للطبقة العلوية للحفاظ على اللمعان واللون — روتين أخف بكثير، لكنه يحمي نوعًا مختلفًا تمامًا من الاستثمار: المظهر الذي يراه الزبون.",
        },
        {
          title: "عوامل التكلفة والمدة الزمنية التي يجب التخطيط لها",
          body: "تُحدَّد تكلفة أرضية المصنع أساسًا بناءً على المساحة، وفئة الحمل وحركة المرور المطلوبة، ومستوى التعرض الكيميائي، وعدد الطبقات التي تستلزمها حالة السطح بعد التجهيز — فالسطح شديد التلوث يضيف تكلفة تجهيز قبل وضع أي طبقة ايبوكسي. أما تكلفة أرضية المحل فتعتمد أكثر على تعقيد التشطيب (طبقة لونية بسيطة مقابل نظام معدني أو زخرفي)، والمساحة الإجمالية، وأي فرق سعري ناتج عن الجدولة خارج أوقات الدوام. وفي الحالتين، اطلب عرض سعر يفصل بين تجهيز السطح ونظام الايبوكسي نفسه وأي ميزات سلامة أو زخرفية إضافية، لتقارن بين العروض على أساس واحد.",
        },
        {
          title: "لست متأكدًا من نوع الايبوكسي المناسب لمشروعك؟",
          body: "يركز هذا الدليل تحديدًا على المصانع والمحلات التجارية، لكن أرضيات الايبوكسي تغطي أيضًا الفلل والمرائب وغرف الخوادم، ولكل منها متطلباته الخاصة. للاطلاع على شرح شامل لكل الأنواع — ذاتي التسوية، الصناعي الثقيل، المعدني، الرقائق الملونة، والمضاد للكهرباء الساكنة — راجع دليلنا الشامل لأرضيات الايبوكسي الذي يستعرض خطوات التركيب ومقارنة الايبوكسي بالأرضيات التقليدية.",
        },
        {
          title: "الأسئلة الشائعة",
          body: "هل يمكن استخدام نفس الايبوكسي للمصنع والمحل؟\nليس كمنتج واحد. التركيبة الأساسية قد تتشابه، لكن السماكة والمواد المضافة والتشطيب تُحدَّد بشكل مختلف تبعًا لحركة الرافعات والتعرض الكيميائي مقابل حركة الزوار ومظهر العلامة التجارية.\n\nكم يستغرق إغلاق أرضية المصنع؟\nيعتمد ذلك على النظام والمساحة، لكن تنفيذ العمل على مراحل مع تركيبات سريعة التصلب يُبقي معظم المنشآت تعمل بطاقة جزئية بدلًا من التوقف الكامل.\n\nهل يمكن أن يبقى المحل مفتوحًا أثناء التركيب؟\nلا — يجب إغلاق المساحة التي تُطلى بالكامل أثناء مدة التصلب، ولهذا تُجدوَل معظم مشاريع المحلات التجارية ليلًا أو خلال عطلة نهاية الأسبوع بدلًا من أوقات الدوام.\n\nهل الايبوكسي المانع للانزلاق أغلى سعرًا؟\nتضيف المادة المانعة للانزلاق تكلفة بسيطة، لكنها أقل بكثير من تكلفة أي حادث انزلاق في غرفة غسيل أو مدخل أو منطقة عمل رطبة.\n\nكم مرة تحتاج أرضية الايبوكسي الصناعية إلى إعادة طلاء؟\nيعتمد ذلك على حجم الحركة ومستوى التعرض الكيميائي أكثر من اعتماده على جدول زمني ثابت — والفحص الدوري للممرات عالية الاستخدام هو الطريقة الأدق لتحديد موعد إعادة الطلاء التالية.",
        },
      ],
      en: [
        {
          title: "Why Factories and Shops Need a Different Approach to Epoxy",
          body: "Epoxy flooring is often talked about as a single product, but a factory floor and a retail showroom ask it to do two completely different jobs. A production hall needs a system that survives forklift traffic, spilled oils, and round-the-clock operation without cracking. A boutique or pharmacy needs a glossy, on-brand finish installed fast enough that the shop barely loses a trading day. Epoxy is usually just one layer within a wider finishing scope, alongside flooring, walls, and fit-out, but treating factories and shops as the same project is where most epoxy failures start. This guide walks through both worlds separately, so you can brief your contractor with the right expectations from day one.",
        },
        {
          title: "Factory Floors: What Heavy-Duty Industrial Epoxy Must Deliver",
          body: "An industrial floor lives under conditions a showroom never sees. The system has to be specified around the actual use, not a generic \"epoxy coating\" line item:\n\n• Load and traffic class — continuous forklift and pallet-jack traffic calls for a thicker, trowel-applied or heavy-duty broadcast system rather than a thin self-leveling coat.\n• Chemical and oil resistance — workshops, maintenance bays, and chemical storage areas need formulations resistant to oils, acids, and solvents so spills don't eat into the slab.\n• Anti-static (ESD) protection — electronics assembly lines and sensitive equipment rooms require conductive or dissipative epoxy to prevent static discharge damage.\n• Hygienic, seamless finish — food-processing and pharmaceutical facilities need a joint-free surface that resists bacterial growth and tolerates frequent washdown.\n• Fast-cure formulations — plants that can't afford a long shutdown often need systems that reach foot-traffic and full-load strength within hours rather than days.\n\nPicking the wrong category here is the single most common cause of early failure on a factory floor — a self-leveling epoxy chosen for its price will not survive a forklift aisle.",
        },
        {
          title: "Getting the Factory Floor Ready: Why Surface Preparation Decides Everything",
          body: "More industrial epoxy jobs fail from poor surface preparation than from the epoxy itself. Older factory slabs are typically contaminated with years of embedded oil, grease, and dust that a mop or light sanding will never remove. The concrete needs to be mechanically opened up through diamond grinding or abrasive blasting, so the epoxy bonds to sound, clean substrate instead of sitting on a contaminated film that eventually peels. For facilities that also need a dedicated preparation area built to standard, our sandblasting room setup and mechanical pump installation service covers this kind of infrastructure, built to international standards for ventilation, dust control, and abrasive recovery.",
        },
        {
          title: "Commercial & Retail Epoxy: Built for Brand, Speed and Foot Traffic",
          body: "A shop, showroom, or restaurant floor is judged by completely different criteria. Here the priorities are:\n\n• Appearance that matches the brand — self-leveling glossy epoxy in a brand color, or a metallic/marbled finish for a premium showroom look, replaces what used to require imported stone.\n• Speed of installation — most retail epoxy projects are scheduled overnight or over a weekend precisely so the business doesn't lose trading days; fast-cure systems let a shop reopen within 24–48 hours of the final coat.\n• Hygiene and cleanability — pharmacies, cafés, and food outlets benefit from the same joint-free, easy-to-sanitize surface that factories rely on, just in a decorative finish.\n• Durability under foot and cart traffic — shopping carts, trolleys, and daily foot traffic wear a floor differently than industrial equipment, so the topcoat is selected for scratch and scuff resistance rather than chemical exposure.\n\nThis retail-focused epoxy work typically sits inside a broader commercial finishing scope — flooring, facades, lighting, and MEP for malls, showrooms, and hospitality spaces.",
        },
        {
          title: "Safety and Code Compliance Are Non-Negotiable in Both Settings",
          body: "Whether it's a warehouse aisle or a shop entrance, a floor that looks good but isn't safe is a liability. Anti-slip additives are essential in any area exposed to water, oil, or heavy washdown — factory wash bays and shop entrances during rainy season both qualify. Beyond slip resistance, fire-rating, occupational safety requirements, and inspection documentation for commercial and industrial facilities all fall under the Saudi Building Code.",
        },
        {
          title: "Installation Day: Phased Work in Factories vs. After-Hours Work in Shops",
          body: "The two sectors also differ completely in how the work itself is scheduled. Factories are usually treated section by section, coordinated with planned maintenance shutdowns so only part of the production line is offline at any time, with barriers and signage protecting cured areas from early foot or vehicle traffic. Shops and showrooms are typically closed off entirely for a short, intensive window — overnight, over a weekend, or during a scheduled store refresh — with fixtures and merchandise protected and the space handed back ready to trade. A contractor who plans the sequence around your operating hours, not just the floor area, is what keeps downtime predictable in both cases.",
        },
        {
          title: "Keeping the Floor Performing: Maintenance by Sector",
          body: "Maintenance needs diverge just as much as installation does. Factory floors need prompt clean-up of chemical or oil spills, periodic inspection of high-traffic aisles for wear, and a recoat cycle based on actual load rather than a fixed date. Retail floors need daily damp-mopping with a pH-neutral cleaner, protection from dragged furniture or tracked-in grit, and an occasional topcoat refresh to keep the gloss and color looking new — a lighter routine, but one protecting a different kind of investment: the customer-facing appearance of the business.",
        },
        {
          title: "Cost and Timeline Factors to Plan For",
          body: "A factory floor is priced mainly on area, the required load/traffic class, chemical exposure level, and how many coats the surface condition demands after preparation — a badly contaminated slab adds preparation cost before a drop of epoxy is applied. A shop floor is priced more on finish complexity (plain color versus metallic or decorative), total area, and any premium for after-hours or weekend scheduling. In both cases, ask for a scope that separates preparation, the epoxy system itself, and any extra safety or decorative features, so you're comparing like-for-like between quotes.",
        },
        {
          title: "Not Sure Which Epoxy System Fits Your Project?",
          body: "This guide focuses specifically on factories and commercial shops, but epoxy flooring also covers villas, garages, and server rooms with their own requirements. For a full breakdown of every type — self-leveling, heavy-duty industrial, metallic, flake/quartz, and anti-static — see our complete epoxy flooring guide, which walks through the installation process and how epoxy compares with traditional flooring.",
        },
        {
          title: "Frequently Asked Questions",
          body: "Can the same epoxy be used for a factory and a shop?\nNot as a single product. The base chemistry is similar, but thickness, additives, and finish are specified differently for forklift and chemical exposure versus foot traffic and brand appearance.\n\nHow long does a factory floor need to be shut down?\nIt depends on the system and area, but phasing the work section by section with fast-cure formulations keeps most facilities running at partial capacity rather than shutting down entirely.\n\nCan a shop stay open during installation?\nNo — the coated area must be fully closed while the epoxy cures, which is why most retail projects are scheduled overnight or over a weekend rather than during trading hours.\n\nIs anti-slip epoxy more expensive?\nThe additive adds a modest cost, but it's far cheaper than the liability of a slip-and-fall incident in a wash bay, entrance, or wet-process area.\n\nHow often does an industrial epoxy floor need recoating?\nIt depends on traffic volume and chemical exposure rather than a fixed schedule — periodic inspection of high-wear aisles is the most reliable way to plan the next recoat.",
        },
      ],
    },
    whyUs: {
      ar: [
        "خبرة منذ عام 2005 في تنفيذ أرضيات المصانع الصناعية وأرضيات المحلات التجارية على حد سواء",
        "قدرة داخلية على تجهيز الأسطح، تشمل السفع الرملي المخصص والسنفرة الميكانيكية",
        "فريق فني يحدد فئة الايبوكسي المناسبة لكل استخدام، لا طبقة واحدة لكل الحالات",
        "جدولة تُبنى على ساعات تشغيل منشأتك، من التوقف المرحلي للمصانع إلى التركيب الليلي للمحلات",
        "تغطية شاملة: الرياض – جدة – القصيم – جميع مناطق المملكة",
      ],
      en: [
        "Experience since 2005 delivering both industrial factory floors and commercial retail epoxy projects",
        "In-house surface-preparation capability, including dedicated sandblasting and mechanical grinding",
        "Technical team that specifies the right epoxy class per use case — not a one-size-fits-all coating",
        "Scheduling built around your operating hours, from phased factory shutdowns to overnight shop installs",
        "Full coverage: Riyadh – Jeddah – Qassim – all Saudi regions",
      ],
    },
    areas: {
      ar: ["الرياض ومنطقة الرياض", "جدة ومنطقة مكة المكرمة", "القصيم وبريدة", "جميع مناطق المملكة"],
      en: ["Riyadh & Riyadh Region", "Jeddah & Makkah Region", "Qassim & Buraydah", "All regions across Saudi Arabia"],
    },
    cta: {
      ar: { title: "هل تخطط لمشروع أرضيات ايبوكسي لمصنعك أو منشأتك التجارية؟", description: "تواصل مع فريق لمعة العربية للحصول على استشارة فنية مجانية ونطاق عمل مبني على ساعات تشغيل منشأتك الفعلية.", button: "اطلب استشارة مجانية" },
      en: { title: "Planning an Epoxy Flooring Project for Your Factory or Commercial Space?", description: "Get in touch with the Lamaat Al-Arabia team for a free technical consultation and a scope built around your facility's actual operating hours.", button: "Get a Free Consultation" },
    },
  },
};
