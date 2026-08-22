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
};
