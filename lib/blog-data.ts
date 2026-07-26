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
};
