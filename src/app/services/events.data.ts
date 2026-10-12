import { Language } from './language.service';

export interface EventStory {
  id: string;
  badge: string;
  title: string;
  description: string;
  perks: string[];
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

export interface EventsSectionHeader {
  eyebrow: string;
  title: string;
  subtitle: string;
  waInquiryPrefix: string;
}

export const ALL_EVENTS_SECTIONS: Record<Language, EventsSectionHeader> = {
  fr: {
    eyebrow: "CÉLÉBRATIONS D'EXCEPTION & MOMENTS UNIQUES",
    title: "Mariages, Demandes & Événements Privés",
    subtitle: "Nous métamorphosons le désert marocain en un décor magique pour vos moments les plus précieux. Organisation sur-mesure clé en main.",
    waInquiryPrefix: "Bonjour Medade Travel, je souhaite organiser un événement privé :"
  },
  en: {
    eyebrow: "EXCLUSIVE CELEBRATIONS & PRIVATE MOMENTS",
    title: "Weddings, Proposals & Milestone Celebrations",
    subtitle: "We transform the Moroccan desert into a breathtaking setting for life's most unforgettable moments. Complete bespoke planning.",
    waInquiryPrefix: "Hello Medade Travel, I would like to plan a private event:"
  },
  ar: {
    eyebrow: "مناسبات استثنائية ولحظات لا تُنسى",
    title: "أعراس راقية، طلب زواج واحتفالات سنوية خاصة",
    subtitle: "نحول سحر الصحراء المغربية إلى مشهد أسطوري لتخليد أثمن لحظات حياتكم بتنظيم متكامل ومتقن حسب الطلب.",
    waInquiryPrefix: "مرحباً ميداد ترافل، أود الاستفسار عن تنظيم مناسبة خاصة في الصحراء:"
  },
  es: {
    eyebrow: "CELEBRACIONES EXCLUSIVAS Y MOMENTOS ÚNICOS",
    title: "Bodas, Pedidas de Mano y Aniversarios",
    subtitle: "Convertimos el desierto de Marruecos en un escenario inolvidable para sus momentos más especiales. Organización a medida.",
    waInquiryPrefix: "Hola Medade Travel, deseo organizar un evento privado:"
  },
  it: {
    eyebrow: "CELEBRAZIONI ESCLUSIVE & MOMENTI SPECIALI",
    title: "Matrimoni, Proposte di Nozze & Anniversari",
    subtitle: "Trasformiamo il deserto marocchino in una cornice indimenticabile per i vostri momenti più preziosi. Organizzazione su misura.",
    waInquiryPrefix: "Buongiorno Medade Travel, desidero organizzare un evento privato:"
  },
  de: {
    eyebrow: "EXKLUSIVE FEIERN & BESONDERE ANLÄSSE",
    title: "Hochzeiten, Heiratsanträge & Jubiläen",
    subtitle: "Wir verwandeln die marokkanische Wüste in eine zauberhafte Kulisse für Ihre wertvollsten Momente. Maßgeschneiderte Organisation.",
    waInquiryPrefix: "Hallo Medade Travel, ich möchte ein privates Event in der Wüste anfragen:"
  },
  pt: {
    eyebrow: "CELEBRAÇÕES EXCLUSIVAS E MOMENTOS ÚNICOS",
    title: "Casamentos, Pedidos de Casamento e Aniversários",
    subtitle: "Transformamos o deserto marroquino num cenário memorável para os seus momentos mais especiais. Organização sob medida.",
    waInquiryPrefix: "Olá Medade Travel, gostaria de organizar um evento privado:"
  },
  nl: {
    eyebrow: "EXCLUSIEVE EVENEMENTEN & BIJZONDERE MOMENTEN",
    title: "Bruiloften, Huwelijksaanzoeken & Jubilea",
    subtitle: "Wij transformeren de Marokkaanse woestijn in een magisch decor voor uw meest dierbare momenten. Volledig op maat georganiseerd.",
    waInquiryPrefix: "Hallo Medade Travel, ik wil graag een privé-evenement aanvragen:"
  }
};

export const ALL_EVENTS_DATA: Record<Language, EventStory[]> = {
  fr: [
    {
      id: 'mariage',
      badge: 'MARIAGES AU DÉSERT',
      title: 'Célébrations de Mariage Clé en Main',
      description: 'Scénographie féerique dans les dunes ou les collines d\'Agafay. Tentes de réception drapées, grand dîner aux chandelles, musiciens traditionnels et logistique VIP complète.',
      perks: [
        'Dîner de gala raffiné sous les étoiles',
        'Scénographie orientale, tapis & lanternes',
        'Gestion logistique & navettes privées pour vos invités'
      ],
      imageUrl: 'assets/events/event-wedding.jpg',
      ctaText: 'Organiser votre mariage sur devis',
      ctaLink: '#booking'
    },
    {
      id: 'demande-mariage',
      badge: 'DEMANDE EN MARIAGE',
      title: 'Demande en Mariage Secrète & Romantique',
      description: 'Un décor intime dressé sur la crête d\'une dune au crépuscule. Allée de bougies scintillantes, tapis nomades, champagne frais et émotion pure pour un « Oui » inoubliable.',
      perks: [
        'Mise en scène intime et secrète au coucher du soleil',
        'Chemin de lanternes dorées & pétales de roses',
        'Discrétion totale & coupe de champagne dans les dunes'
      ],
      imageUrl: 'assets/events/event-proposal.jpg',
      ctaText: 'Planifier votre demande sur devis',
      ctaLink: '#booking'
    },
    {
      id: 'anniversaire',
      badge: 'ANNIVERSAIRES & SOIRÉES',
      title: 'Anniversaires & Soirées Célestes Privées',
      description: 'Fêtez votre anniversaire ou votre renouvellement de vœux autour d\'un grand feu de camp nomade. Bivouac privatisé, méchoui d\'honneur et ambiance musicale live sous la Voie Lactée.',
      perks: [
        'Bivouac ou lounge nomade entièrement privatisé',
        'Dîner gastronomique marocain ou barbecue nomade',
        'Animation musicale live au coin du feu (Gnawa ou acoustique)'
      ],
      imageUrl: 'assets/events/event-anniversary.jpg',
      ctaText: 'Demander un devis événement',
      ctaLink: '#booking'
    }
  ],
  en: [
    {
      id: 'mariage',
      badge: 'DESERT WEDDINGS',
      title: 'Turnkey Desert Wedding Celebrations',
      description: 'A fairy-tale setting in the Agafay hills or Sahara dunes. Elegant drapery, candlelit banquet tables, live traditional musicians, and seamless private logistics.',
      perks: [
        'Gala dinner under the starlit canopy',
        'Authentic Moroccan lantern & floral styling',
        'Complete transport coordination & VIP guest shuttles'
      ],
      imageUrl: 'assets/events/event-wedding.jpg',
      ctaText: 'Plan your wedding on quote',
      ctaLink: '#booking'
    },
    {
      id: 'demande-mariage',
      badge: 'MARRIAGE PROPOSAL',
      title: 'Secret & Romantic Sunset Proposal',
      description: 'An intimate hideaway atop a golden dune at twilight. Soft Berber rugs, a path of flickering lanterns, chilled champagne, and pure emotion for an unforgettable "Yes".',
      perks: [
        'Secret sunset staging in untouched dunes',
        'Golden brass lanterns & fresh flower accents',
        'Absolute privacy & champagne celebration'
      ],
      imageUrl: 'assets/events/event-proposal.jpg',
      ctaText: 'Plan your proposal on quote',
      ctaLink: '#booking'
    },
    {
      id: 'anniversaire',
      badge: 'ANNIVERSARIES & MILESTONES',
      title: 'Private Birthdays & Celestial Celebrations',
      description: 'Celebrate milestone anniversaries and birthdays around a crackling campfire under the Milky Way. Private nomad lounge, gourmet feast, and live fireside acoustic melodies.',
      perks: [
        'Fully privatized desert camp or nomad lounge',
        'Gourmet Moroccan feast or fireside barbecue',
        'Live acoustic Gnawa or desert lute performance'
      ],
      imageUrl: 'assets/events/event-anniversary.jpg',
      ctaText: 'Request event quote on WhatsApp',
      ctaLink: '#booking'
    }
  ],
  ar: [
    {
      id: 'mariage',
      badge: 'أعراس الصحراء الفاخرة',
      title: 'تنظيم أعراس متكاملة في قلب الصحراء',
      description: 'أجواء ساحرة وديكورات خيالية بين تلال أكافاي أو رمال مرزوكة. خيام استقبال ملوكية، مأدبة عشاء على ضوء الشموع، فرق موسيقية تراثية، وتنسيق لوجستي فندقي كامل.',
      perks: [
        'عشاء ملكي فاخر تحت أضواء النجوم والشموع',
        'ديكور مغربي أصيل بالفوانيس الذهبية والزهور',
        'خدمات نقل سياحي خاصة وشاملة لجميع الضيوف'
      ],
      imageUrl: 'assets/events/event-wedding.jpg',
      ctaText: 'طلب تنظيم زفاف حسب الطلب',
      ctaLink: '#booking'
    },
    {
      id: 'demande-mariage',
      badge: 'طلب زواج رومانسي',
      title: 'طلب زواج استثنائي في سرية تامة',
      description: 'موقع سري خاص على قمة الكثبان الذهبية وقت الغروب. زرابي بربرية فاخرة، ممر من الفوانيس المضيئة، وأجواء هادئة رومانسية للحظة لا تتكرر.',
      perks: [
        'إعداد سري متقن على رمال الصحراء وقت الغروب',
        'ممشى فوانيس مغربية تقليدية وباقات ورود',
        'خصوصية تامة واحتفال راقٍ بالأجواء الشاعرية'
      ],
      imageUrl: 'assets/events/event-proposal.jpg',
      ctaText: 'تنسيق طلب الزواج حسب الطلب',
      ctaLink: '#booking'
    },
    {
      id: 'anniversaire',
      badge: 'أعياد ميلاد ومناسبات سنوية',
      title: 'احتفالات الذكرى وأعياد الميلاد الخاصة',
      description: 'احتفلوا بأعياد ميلادكم ومناسباتكم العائلية حول نار المخيم الدافئة. مخيم خاص، مأدبة شواء مغربية فاخرة، وموسيقى تراثية حية تحت سماء الصحراء الصافية.',
      perks: [
        'حجز مخيم أو صالون صحراوي بخصوصية كاملة',
        'مأدبة عشاء مغربية تقليدية أو شواء بدوي',
        'عزف موسيقي حي كناوي حول نار المخيم'
      ],
      imageUrl: 'assets/events/event-anniversary.jpg',
      ctaText: 'طلب عرض سعر للمناسبة على واتساب',
      ctaLink: '#booking'
    }
  ],
  es: [
    {
      id: 'mariage',
      badge: 'BODAS EN EL DESIERTO',
      title: 'Bodas Mágicas Llave en Mano',
      description: 'Una escenografía de ensueño en Agafay o Merzouga. Jaimas de recepción, cena de gala a la luz de las velas, músicos tradicionales y logística VIP completa.',
      perks: [
        'Cena de gala refinada bajo las estrellas',
        'Decoración oriental con alfombras y faroles bereberes',
        'Coordinación de traslados privados para todos sus invitados'
      ],
      imageUrl: 'assets/events/event-wedding.jpg',
      ctaText: 'Organizar su boda bajo presupuesto',
      ctaLink: '#booking'
    },
    {
      id: 'demande-mariage',
      badge: 'PEDIDA DE MANO',
      title: 'Pedida de Mano Íntima y Romántica',
      description: 'Un rincón secreto sobre una duna al atardecer. Camino de faroles encendidos, alfombras bereberes, champán y emoción absoluta para un "Sí" eterno.',
      perks: [
        'Puesta en escena secreta al atardecer en las dunas',
        'Camino de faroles dorados y flores frescas',
        'Intimidad absoluta y brindis con champán'
      ],
      imageUrl: 'assets/events/event-proposal.jpg',
      ctaText: 'Planificar su pedida de mano',
      ctaLink: '#booking'
    },
    {
      id: 'anniversaire',
      badge: 'ANIVERSARIOS Y FIESTAS',
      title: 'Aniversarios y Noches Mágicas Privadas',
      description: 'Celebre su fecha especial junto a una gran hoguera bajo la Vía Láctea. Campamento privatizado, cena gourmet y música en directo.',
      perks: [
        'Bivouac o salón nómada completamente privatizado',
        'Cena gastronómica marroquí o barbacoa nómada',
        'Música tradicional en vivo junto al fuego'
      ],
      imageUrl: 'assets/events/event-anniversary.jpg',
      ctaText: 'Solicitar presupuesto para evento',
      ctaLink: '#booking'
    }
  ],
  it: [
    {
      id: 'mariage',
      badge: 'MATRIMONI NEL DESERTO',
      title: 'Matrimoni Esclusivi Chiavi in Mano',
      description: 'Una scenografia fiabesca tra le dune di Merzouga o le colline di Agafay. Tende di ricevimento, banchetto a lume di candela e logistica impeccabile.',
      perks: [
        'Cena di gala raffinata sotto la volta celeste',
        'Allestimento orientale con lanterne e tappeti berberi',
        'Logistica completa e navette VIP per gli invitati'
      ],
      imageUrl: 'assets/events/event-wedding.jpg',
      ctaText: 'Organizza il tuo matrimonio su preventivo',
      ctaLink: '#booking'
    },
    {
      id: 'demande-mariage',
      badge: 'PROPOSTA DI MATRIMONIO',
      title: 'Proposta di Matrimonio Segreta e Romantica',
      description: 'Un angolo riservato in cima alle dune dorate al tramonto. Tappeti nomadi, percorso di lanterne accese, champagne e magia pura per un "Sì" indimenticabile.',
      perks: [
        'Allestimento segreto al calar del sole nel deserto',
        'Sentiero di lanterne dorate e fiori freschi',
        'Intimità assoluta e brindisi romantico'
      ],
      imageUrl: 'assets/events/event-proposal.jpg',
      ctaText: 'Pianifica la proposta su preventivo',
      ctaLink: '#booking'
    },
    {
      id: 'anniversaire',
      badge: 'ANNIVERSARI & FESTE',
      title: 'Anniversari e Serate Stellari Private',
      description: 'Festeggiate le vostre ricorrenze attorno al fuoco sotto la Via Lattea. Bivacco privatizzato, cena gourmet marocchina e musica dal vivo.',
      perks: [
        'Campo o lounge berbero totalmente privatizzato',
        'Cena tradizionale gourmet o barbecue sotto le stelle',
        'Musica tradizionale dal vivo attorno al falò'
      ],
      imageUrl: 'assets/events/event-anniversary.jpg',
      ctaText: 'Richiedi preventivo evento',
      ctaLink: '#booking'
    }
  ],
  de: [
    {
      id: 'mariage',
      badge: 'WÜSTENHOCHZEITEN',
      title: 'Schlüsselfertige Hochzeitsfeiern in der Wüste',
      description: 'Ein märchenhaftes Ambiente in den Dünen von Merzouga oder Agafay. Festzelte, Galadinner bei Kerzenschein, traditionelle Musiker und VIP-Logistik.',
      perks: [
        'Exklusives Galadinner unter dem Sternenhimmel',
        'Orientalische Dekoration mit Laternen und Teppichen',
        'Komplette Shuttles und VIP-Betreuung Ihrer Gäste'
      ],
      imageUrl: 'assets/events/event-wedding.jpg',
      ctaText: 'Hochzeit auf Anfrage planen',
      ctaLink: '#booking'
    },
    {
      id: 'demande-mariage',
      badge: 'HEIRATSANTRAG',
      title: 'Romantischer Heiratsantrag bei Sonnenuntergang',
      description: 'Eine geheime Kulisse auf dem Kamm einer goldenen Düne zur Dämmerung. Laternenweg, Berberteppiche, Champagner und pure Romantik für ein unvergessliches „Ja“.',
      perks: [
        'Diskrete Kulisse zum spektakulären Sonnenuntergang',
        'Weg aus orientalischen Laternen und frischen Blumen',
        'Absolute Zweisamkeit und Champagner-Anstoß'
      ],
      imageUrl: 'assets/events/event-proposal.jpg',
      ctaText: 'Antrag auf Anfrage anfragen',
      ctaLink: '#booking'
    },
    {
      id: 'anniversaire',
      badge: 'JUBILÄEN & PRIVATE FEIERN',
      title: 'Jubiläen & Sternenfeiern im Wüstencamp',
      description: 'Feiern Sie besondere Ehrentage am knisternden Lagerfeuer unter der Milchstraße. Privatisiertes Camp, Festmahl und traditionelle Live-Musik.',
      perks: [
        'Vollständig privatisiertes Wüstencamp oder Lounge',
        'Marokkanisches Festmahl oder Wüsten-Barbecue',
        'Live-Musik am Lagerfeuer'
      ],
      imageUrl: 'assets/events/event-anniversary.jpg',
      ctaText: 'Event-Angebot via WhatsApp anfragen',
      ctaLink: '#booking'
    }
  ],
  pt: [
    {
      id: 'mariage',
      badge: 'CASAMENTOS NO DESERTO',
      title: 'Celebrações de Casamento Chave na Mão',
      description: 'Cenário de conto de fadas nas dunas de Merzouga ou em Agafay. Tendas de receção, jantar de gala à luz de velas e apoio logístico de excelência.',
      perks: [
        'Jantar de gala requintado sob as estrelas',
        'Decoração oriental autêntica com lanternas e tapetes',
        'Transportes VIP e coordenação de convidados'
      ],
      imageUrl: 'assets/events/event-wedding.jpg',
      ctaText: 'Planear casamento sob orçamento',
      ctaLink: '#booking'
    },
    {
      id: 'demande-mariage',
      badge: 'PEDIDO DE CASAMENTO',
      title: 'Pedido de Casamento Romântico e Secreto',
      description: 'Um espaço íntimo no cimo de uma duna dourada ao entardecer. Caminho de lanternas, tapetes nómadas, champanhe e pura emoção.',
      perks: [
        'Montagem secreta ao pôr do sol no deserto',
        'Caminho de lanternas douradas e flores frescas',
        'Privacidade total e brinde inesquecível'
      ],
      imageUrl: 'assets/events/event-proposal.jpg',
      ctaText: 'Organizar pedido de casamento',
      ctaLink: '#booking'
    },
    {
      id: 'anniversaire',
      badge: 'ANIVERSÁRIOS E FESTAS',
      title: 'Aniversários e Noites Mágicas Privadas',
      description: 'Celebre momentos marcantes junto a uma fogueira sob a Via Láctea. Acampamento privatizado, menu gastronómico e música ao vivo.',
      perks: [
        'Acampamento ou lounge totalmente privatizado',
        'Jantar gastronómico marroquino ou churrasco nómada',
        'Animação musical ao vivo junto à fogueira'
      ],
      imageUrl: 'assets/events/event-anniversary.jpg',
      ctaText: 'Pedir orçamento para evento',
      ctaLink: '#booking'
    }
  ],
  nl: [
    {
      id: 'mariage',
      badge: 'WOESTIJNBRUILOFTEN',
      title: 'Exclusieve Woestijnbruiloften op Maat',
      description: 'Een sprookjesachtig decor in de duinen van Merzouga of Agafay. Receptietenten, galadiner bij kaarslicht, traditionele muziek en VIP-logistiek.',
      perks: [
        'Verfijnd galadiner onder de sterrenhemel',
        'Oosterse sfeer met traditionele lantaarns en kleden',
        'Volledig vervoer en shuttleservice voor uw gasten'
      ],
      imageUrl: 'assets/events/event-wedding.jpg',
      ctaText: 'Bruiloft op offerte aanvragen',
      ctaLink: '#booking'
    },
    {
      id: 'demande-mariage',
      badge: 'HUWELIJKSAANZOEK',
      title: 'Romantisch & Geheim Huwelijksaanzoek',
      description: 'Een intieme setting op de top van een gouden zandduin bij zonsondergang. Lantaarnpad, Berberkleden, champagne en pure magie voor een onvergetelijk „Ja”.',
      perks: [
        'Geheime enscenering bij zonsondergang in de duinen',
        'Pad van koperen lantaarns en verse bloemen',
        'Volledige privacy en toost met champagne'
      ],
      imageUrl: 'assets/events/event-proposal.jpg',
      ctaText: 'Aanzoek plannen via WhatsApp',
      ctaLink: '#booking'
    },
    {
      id: 'anniversaire',
      badge: 'JUBILEA & PRIVÉFEESTEN',
      title: 'Jubilea & Feesten onder de Sterrenhemel',
      description: 'Vier uw speciale gelegenheid bij een knapperend kampvuur onder de Melkweg. Privékamp, gastronomisch diner en live muziek.',
      perks: [
        'Volledig geprivatiseerd woestijnkamp of lounge',
        'Marokkaans feestmaal of woestijnbarbecue',
        'Live traditionele muziek rond het kampvuur'
      ],
      imageUrl: 'assets/events/event-anniversary.jpg',
      ctaText: 'Evenement offerte aanvragen',
      ctaLink: '#booking'
    }
  ]
};
