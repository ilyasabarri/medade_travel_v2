import { Language } from './language.service';

export interface ActivityItem {
  id: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  duration: string;
  location: string;
  highlight: string;
  imageUrl: string;
}

export interface ActivitiesSectionHeader {
  eyebrow: string;
  title: string;
  subtitle: string;
  sliderHint: string;
  bookBtn: string;
  waInquiryPrefix: string;
}

export const ALL_ACTIVITIES_SECTIONS: Record<Language, ActivitiesSectionHeader> = {
  fr: {
    eyebrow: "SENSATIONS, AVENTURE & DÉCOUVERTE",
    title: "Activités & Loisirs au Désert",
    subtitle: "Du pilotage de buggy sur les crêtes dorées au survol paisible en montgolfière, vivez des expériences insolites encadrées par des experts locaux.",
    sliderHint: "Glissez ou utilisez les flèches pour découvrir toutes les activités",
    bookBtn: "Réserver cette activité sur WhatsApp",
    waInquiryPrefix: "Bonjour Medade Travel, je souhaite réserver ou me renseigner sur l'activité :"
  },
  en: {
    eyebrow: "THRILLS, ADVENTURE & DISCOVERY",
    title: "Desert Adventures & Activities",
    subtitle: "From adrenaline-packed buggy rides across sand dunes to serene sunrise hot air ballooning, discover unforgettable desert activities.",
    sliderHint: "Swipe or use arrows to explore all desert activities",
    bookBtn: "Book this activity via WhatsApp",
    waInquiryPrefix: "Hello Medade Travel, I would like to book or inquire about the activity:"
  },
  ar: {
    eyebrow: "حماس، مغامرة واكتشاف",
    title: "أنشطة ومغامرات الصحراء",
    subtitle: "من قيادة الباجي والكواد على الكثبان الذهبية إلى التحليق بالمنطاد عند الشروق، عيشوا تجارب استثنائية مع مرشدين محليين محترفين.",
    sliderHint: "اسحب أو استخدم الأسهم لاستكشاف جميع الأنشطة",
    bookBtn: "حجز هذا النشاط عبر واتساب",
    waInquiryPrefix: "مرحباً ميداد ترافل، أود حجز أو الاستفسار عن النشاط التالي:"
  },
  es: {
    eyebrow: "EMOCIÓN, AVENTURA Y DESCUBRIMIENTO",
    title: "Actividades y Aventuras en el Desierto",
    subtitle: "Desde safaris en buggy por las dunas hasta majestuosos paseos en globo al amanecer, disfrute de experiencias inolvidables.",
    sliderHint: "Deslice o use las flechas para explorar todas las actividades",
    bookBtn: "Reservar esta actividad por WhatsApp",
    waInquiryPrefix: "Hola Medade Travel, deseo reservar o consultar la actividad:"
  },
  it: {
    eyebrow: "EMOZIONI, AVVENTURA & MERAVIGLIA",
    title: "Attività ed Emozioni nel Deserto",
    subtitle: "Dall'avventura in buggy sulle dune al volo in mongolfiera all'alba, vivete esperienze straordinarie guidati da professionisti locali.",
    sliderHint: "Scorri o usa le frecce per scoprire tutte le attività",
    bookBtn: "Prenota questa attività su WhatsApp",
    waInquiryPrefix: "Buongiorno Medade Travel, desidero prenotare o chiedere info sull'attività:"
  },
  de: {
    eyebrow: "ABENTEUER, NERVENKITZEL & ENTDECKUNG",
    title: "Wüstenaktivitäten & Abenteuer",
    subtitle: "Von dynamischen Buggy-Touren über Sanddünen bis hin zu Ballonfahrten bei Sonnenaufgang – unvergessliche Erlebnisse mit lokalen Guides.",
    sliderHint: "Wischen oder Pfeile nutzen, um alle Aktivitäten zu entdecken",
    bookBtn: "Diese Aktivität per WhatsApp anfragen",
    waInquiryPrefix: "Hallo Medade Travel, ich möchte folgende Aktivität anfragen:"
  },
  pt: {
    eyebrow: "EMOÇÃO, AVENTURA E DESCOBERTA",
    title: "Atividades e Aventuras no Deserto",
    subtitle: "De passeios de buggy nas dunas a sobrevoos de balão ao nascer do sol, desfrute de experiências únicas com guias locais.",
    sliderHint: "Deslize ou use as setas para explorar todas as atividades",
    bookBtn: "Reservar esta atividade no WhatsApp",
    waInquiryPrefix: "Olá Medade Travel, gostaria de reservar ou obter informações sobre a atividade:"
  },
  nl: {
    eyebrow: "AVONTUUR, ACTIE & ONTDEKKING",
    title: "Woestijnactiviteiten & Avontuur",
    subtitle: "Van opwindende buggytochten over de zandduinen tot vredige ballonvaarten bij zonsopgang met ervaren lokale gidsen.",
    sliderHint: "Veeg of gebruik de pijlen om alle activiteiten te ontdekken",
    bookBtn: "Deze activiteit reserveren via WhatsApp",
    waInquiryPrefix: "Hallo Medade Travel, ik wil graag deze activiteit reserveren of navragen:"
  }
};

export const ALL_ACTIVITIES_DATA: Record<Language, ActivityItem[]> = {
  fr: [
    {
      id: 'buggy-quad',
      category: 'Sensation & Vitesse',
      badge: 'Sensations Fortes',
      title: 'Excursion Buggy & Quad dans les Dunes',
      description: 'Pilotez des buggys modernes et quads puissants sur les crêtes de sable d’Agafay ou Merzouga, encadrés par des guides professionnels agréés.',
      duration: '2 Heures / Demi-journée',
      location: 'Désert d’Agafay & Merzouga',
      highlight: 'Casques, gants & briefing de sécurité inclus',
      imageUrl: 'assets/activities/activity-buggy.jpg'
    },
    {
      id: 'dromadaire',
      category: 'Tradition & Poésie',
      badge: 'Incontournable Berbère',
      title: 'Caravane de Dromadaires au Coucher du Soleil',
      description: 'Traversez les dunes dorées au rythme paisible de la caravane chamelière coiffée du chèche saharien, au moment magique du crépuscule.',
      duration: '1h à 2h au crépuscule',
      location: 'Dunes de Merzouga & Agafay',
      highlight: 'Chèche traditionnel offert & pause thé à la menthe',
      imageUrl: 'assets/activities/activity-camel.jpg'
    },
    {
      id: 'montgolfiere',
      category: 'Aérien & Féerique',
      badge: 'Vue Panoramique VIP',
      title: 'Survol en Montgolfière au Lever du Soleil',
      description: 'Prenez de la hauteur au-dessus du désert et des montagnes de l’Atlas embrasées par le soleil naissant, suivi d’un petit-déjeuner berbère sous tente caïdale.',
      duration: 'Vol 1h (Matinée complète)',
      location: 'Marrakech & Vue Atlas',
      highlight: 'Petit-déjeuner traditionnel & certificat de vol',
      imageUrl: 'assets/activities/activity-balloon.jpg'
    },
    {
      id: 'sandboarding',
      category: 'Glisse & Aventure',
      badge: 'Fun & Plein Air',
      title: 'Sandboarding sur les Crêtes du Sahara',
      description: 'Dévalez les pentes vertigineuses de sable fin de l’Erg Chebbi sur une planche de glisse spécialement conçue. Une aventure amusante accessible à toute la famille.',
      duration: 'Session libre ou encadrée',
      location: 'Grandes dunes de Merzouga',
      highlight: 'Planches de glisse professionnelles & cire fournies',
      imageUrl: 'assets/activities/activity-sandboarding.jpg'
    },
    {
      id: 'astronomie',
      category: 'Nocturne & Contemplation',
      badge: 'Ciel le Plus Pur',
      title: 'Soirée Astronomie & Observation au Télescope',
      description: 'Admirez la Voie Lactée, les nébuleuses et les anneaux de Saturne grâce à des télescopes motorisés dans l’un des ciels nocturnes les plus clairs du globe.',
      duration: 'Soirée sous les étoiles',
      location: 'Bivouac Merzouga & Agafay',
      highlight: 'Télescope de haute précision & thé au coin du feu',
      imageUrl: 'assets/activities/activity-stargazing.jpg'
    }
  ],
  en: [
    {
      id: 'buggy-quad',
      category: 'Speed & Thrills',
      badge: 'Adrenaline Rush',
      title: 'Buggy & Quad Safari across Golden Dunes',
      description: 'Take the wheel of high-performance off-road buggies and quad bikes over the sculpted sands of Agafay or Merzouga with licensed instructors.',
      duration: '2 Hours / Half-Day',
      location: 'Agafay Desert & Merzouga',
      highlight: 'Full safety gear, helmets & briefing included',
      imageUrl: 'assets/activities/activity-buggy.jpg'
    },
    {
      id: 'dromadaire',
      category: 'Tradition & Serenity',
      badge: 'Timeless Classic',
      title: 'Sunset Camel Caravan Trek',
      description: 'Ride across golden dunes in authentic nomad style wearing traditional scarves as the sun dips beneath the desert horizon.',
      duration: '1 to 2 Hours at sunset',
      location: 'Merzouga Dunes & Agafay',
      highlight: 'Traditional nomad scarf & mint tea stop included',
      imageUrl: 'assets/activities/activity-camel.jpg'
    },
    {
      id: 'montgolfiere',
      category: 'Sky & Wonder',
      badge: 'VIP Panoramic View',
      title: 'Sunrise Hot Air Balloon Flight',
      description: 'Soar gently over the Moroccan desert and snow-tipped Atlas peaks in the golden morning light, followed by a royal Berber breakfast under canvas.',
      duration: '1 Hour Flight (Morning experience)',
      location: 'Marrakech & Atlas View',
      highlight: 'Berber breakfast tent & flight certificate',
      imageUrl: 'assets/activities/activity-balloon.jpg'
    },
    {
      id: 'sandboarding',
      category: 'Action & Adventure',
      badge: 'Outdoor Fun',
      title: 'Sandboarding on Majestic Sahara Dunes',
      description: 'Glide effortlessly down the towering golden dunes of Erg Chebbi on specialized desert sandboards. An exhilarating rush for all skill levels.',
      duration: 'Open or guided session',
      location: 'High dunes of Merzouga',
      highlight: 'Sandboards & wax provided with easy instruction',
      imageUrl: 'assets/activities/activity-sandboarding.jpg'
    },
    {
      id: 'astronomie',
      category: 'Night & Wonder',
      badge: 'Crystal Clear Skies',
      title: 'Stargazing & Deep Sky Telescope Night',
      description: 'Gaze into the Milky Way, distant star clusters, and planets through high-magnification astronomical telescopes far away from city lights.',
      duration: 'Evening starlight session',
      location: 'Deep Desert Camp',
      highlight: 'High-precision telescope & fireside mint tea',
      imageUrl: 'assets/activities/activity-stargazing.jpg'
    }
  ],
  ar: [
    {
      id: 'buggy-quad',
      category: 'حماس وسرعة',
      badge: 'مغامرة مشوقة',
      title: 'رحلات الباجي والكواد على الكثبان الرملية',
      description: 'استمتعوا بقيادة مركبات الباجي الحديثة ودراجات الكواد القوية فوق تلال رمال أكافاي أو مرزوكة برفقة مرشدين محترفين ومعتمدين.',
      duration: 'ساعتان / نصف يوم',
      location: 'صحراء أكافاي ومرزوكة',
      highlight: 'خوذات ومعدات سلامة متكاملة وإرشادات شاملة',
      imageUrl: 'assets/activities/activity-buggy.jpg'
    },
    {
      id: 'dromadaire',
      category: 'أصالة وتراث',
      badge: 'تجربة بربرية أصيلة',
      title: 'قافلة الجمال عند غروب الشمس الذهبي',
      description: 'رحلة شاعرية على ظهور الجمال باللباس الصحراوي التقليدي فوق قمم الرمال الساحرة لحظة مغيب الشمس.',
      duration: 'ساعة إلى ساعتين وقت الغروب',
      location: 'كثبان مرزوكة وأكافاي',
      highlight: 'شاش صحراوي تذكاري واستراحة شاي بالنعناع',
      imageUrl: 'assets/activities/activity-camel.jpg'
    },
    {
      id: 'montgolfiere',
      category: 'تحليق وسحر',
      badge: 'إطلالة بانورامية VIP',
      title: 'رحلة المنطاد الهوائي مع شروق الشمس',
      description: 'حلقوا فوق سماء الصحراء وسلسلة جبال الأطلس الشامخة مع خيوط الفجر الأولى، تليها وجبة إفطار مغربية تقليدية تحت الخيمة.',
      duration: 'ساعة طيران (صباح كامل)',
      location: 'مراكش وإطلالة الأطلس',
      highlight: 'فطور مغربي ملكي وشهادة طيران تذكارية',
      imageUrl: 'assets/activities/activity-balloon.jpg'
    },
    {
      id: 'sandboarding',
      category: 'تزلج ومرح',
      badge: 'رياضة رملية ممتعة',
      title: 'التزلج على رمال الصحراء الكبرى (ساندبورد)',
      description: 'انزلقوا بحرية وسرعة فوق المنحدرات الرملية الذهبية الشاهقة لمرزوكة على ألواح تزلج مخصصة تناسب الكبار والصغار.',
      duration: 'جلسة حرة أو بتوجيه مرشد',
      location: 'كثبان عرق الشبي بمرزوكة',
      highlight: 'ألواح تزلج احترافية متوفرة وشمع مخصص',
      imageUrl: 'assets/activities/activity-sandboarding.jpg'
    },
    {
      id: 'astronomie',
      category: 'فلك وتأمل',
      badge: 'سماء نقية خالية من التلوث',
      title: 'سهرة رصد النجوم والكواكب بالتلسكوب',
      description: 'استكشفوا مجرة درب التبانة والكواكب وحلقات زحل عبر تلسكوبات فلكية متطورة في إحدى أنقى بقاع الأرض لرصد النجوم.',
      duration: 'أمسية ليلية بعد العشاء',
      location: 'مخيمات مرزوكة وأكافاي',
      highlight: 'تلسكوب دقيق وشاي ساخن حول نار المخيم',
      imageUrl: 'assets/activities/activity-stargazing.jpg'
    }
  ],
  es: [
    {
      id: 'buggy-quad',
      category: 'Velocidad y Emoción',
      badge: 'Adrenalina Pura',
      title: 'Excursión en Buggy y Quad por las Dunas',
      description: 'Conduzca buggys modernos y potentes quads por las crestas de arena de Agafay o Merzouga guiados por monitores profesionales.',
      duration: '2 Horas / Medio Día',
      location: 'Desierto de Agafay y Merzouga',
      highlight: 'Cascos, guantes y equipo de seguridad incluidos',
      imageUrl: 'assets/activities/activity-buggy.jpg'
    },
    {
      id: 'dromadaire',
      category: 'Tradición y Calma',
      badge: 'Clásico Bereber',
      title: 'Caravana de Dromedarios al Atardecer',
      description: 'Cruce las dunas doradas al ritmo pausado de los dromedarios con el pañuelo tradicional bereber en el momento mágico del ocaso.',
      duration: '1 a 2 Horas al atardecer',
      location: 'Dunas de Merzouga y Agafay',
      highlight: 'Turbante bereber de regalo y pausa de té',
      imageUrl: 'assets/activities/activity-camel.jpg'
    },
    {
      id: 'montgolfiere',
      category: 'Aéreo y Mágico',
      badge: 'Vistas Panorámicas VIP',
      title: 'Paseo en Globo Aerostático al Amanecer',
      description: 'Elévese sobre el desierto y las cumbres del Atlas con los primeros rayos de sol, seguido de un desayuno tradicional en jaima bereber.',
      duration: '1 Hora de vuelo (Mañana)',
      location: 'Marrakech y Vistas al Atlas',
      highlight: 'Desayuno bereber y certificado de vuelo',
      imageUrl: 'assets/activities/activity-balloon.jpg'
    },
    {
      id: 'sandboarding',
      category: 'Aventura y Deslizamiento',
      badge: 'Diversión al Aire Libre',
      title: 'Sandboarding en las Dunas del Sahara',
      description: 'Deslícese por las altas dunas de Erg Chebbi con tablas especialmente diseñadas. Una experiencia emocionante para todas las edades.',
      duration: 'Sesión libre o guiada',
      location: 'Grandes dunas de Merzouga',
      highlight: 'Tablas profesionales y cera incluidas',
      imageUrl: 'assets/activities/activity-sandboarding.jpg'
    },
    {
      id: 'astronomie',
      category: 'Nocturno y Estrellas',
      badge: 'Cielo Puro Sin Contaminación',
      title: 'Observación Astronómica con Telescopio',
      description: 'Admire la Vía Láctea, nebulosas y planetas a través de telescopios astronómicos en uno de los cielos más limpios del planeta.',
      duration: 'Noche bajo las estrellas',
      location: 'Campamento en el desierto',
      highlight: 'Telescopio de precisión y té junto al fuego',
      imageUrl: 'assets/activities/activity-stargazing.jpg'
    }
  ],
  it: [
    {
      id: 'buggy-quad',
      category: 'Velocità & Adrenalina',
      badge: 'Brivido nel Deserto',
      title: 'Safari in Buggy e Quad tra le Dune',
      description: 'Guidate potenti buggy e quad fuoristrada sulle dune di sabbia dorata di Agafay o Merzouga con guide autorizzate.',
      duration: '2 Ore / Mezza giornata',
      location: 'Deserto di Agafay & Merzouga',
      highlight: 'Casco, guanti e briefing di sicurezza inclusi',
      imageUrl: 'assets/activities/activity-buggy.jpg'
    },
    {
      id: 'dromadaire',
      category: 'Tradizione & Poesia',
      badge: 'Classico Berbero',
      title: 'Carovana di Dromedari al Tramonto',
      description: 'Attraversate le dune dorate al ritmo rilassato dei dromedari indossando la kefiah tradizionale durante la magica ora dorata.',
      duration: 'Da 1 a 2 Ore al crepuscolo',
      location: 'Dune di Merzouga & Agafay',
      highlight: 'Sciarpa berbera in omaggio e pausa tè',
      imageUrl: 'assets/activities/activity-camel.jpg'
    },
    {
      id: 'montgolfiere',
      category: 'Volo & Incanto',
      badge: 'Panoramica VIP',
      title: 'Volo in Mongolfiera all\'Alba',
      description: 'Sorvolate il deserto e le montagne dell\'Atlante baciate dalle prime luci del mattino, seguito da una colazione tipica in tenda.',
      duration: 'Volo di 1 ora (Mattina)',
      location: 'Marrakech e Vista Atlante',
      highlight: 'Colazione tipica e attestato di volo',
      imageUrl: 'assets/activities/activity-balloon.jpg'
    },
    {
      id: 'sandboarding',
      category: 'Sport & Divertimento',
      badge: 'Scivolata sulla Sabbia',
      title: 'Sandboarding sulle Grandi Dune del Sahara',
      description: 'Scivolate giù dai pendii dorati di Erg Chebbi con tavole da sabbia professionali. Un\'esperienza divertente per tutti.',
      duration: 'Sessione guidata o libera',
      location: 'Alte dune di Merzouga',
      highlight: 'Tavole da sabbia e sciolina fornite',
      imageUrl: 'assets/activities/activity-sandboarding.jpg'
    },
    {
      id: 'astronomie',
      category: 'Notte & Stelle',
      badge: 'Cielo Purissimo',
      title: 'Serata di Astronomia con Telescopio',
      description: 'Esplorate costellazioni, pianeti e la Via Lattea grazie a telescopi di precisione nel cielo incontaminato del Sahara.',
      duration: 'Serata dopo cena',
      location: 'Bivacco nel deserto',
      highlight: 'Telescopio professionale e tè attorno al falò',
      imageUrl: 'assets/activities/activity-stargazing.jpg'
    }
  ],
  de: [
    {
      id: 'buggy-quad',
      category: 'Tempo & Adrenalin',
      badge: 'Offroad-Abenteuer',
      title: 'Buggy- & Quad-Safari durch die Dünen',
      description: 'Steuern Sie moderne Offroad-Buggys und kraftvolle Quads über die goldenen Sandkämme von Agafay oder Merzouga mit lizenzierten Guides.',
      duration: '2 Stunden / Halbtags',
      location: 'Wüste Agafay & Merzouga',
      highlight: 'Helme, Handschuhe & Sicherheitseinweisung inklusive',
      imageUrl: 'assets/activities/activity-buggy.jpg'
    },
    {
      id: 'dromadaire',
      category: 'Tradition & Ruhe',
      badge: 'Echtes Berber-Erlebnis',
      title: 'Kamel-Karawane zum Sonnenuntergang',
      description: 'Reiten Sie im traditionellen Beduinen-Stil über die sanften Dünen im magischen Licht der untergehenden Wüstensonne.',
      duration: '1 bis 2 Stunden zur Dämmerung',
      location: 'Dünen von Merzouga & Agafay',
      highlight: 'Traditionelles Wüstentuch & Minztee-Pause',
      imageUrl: 'assets/activities/activity-camel.jpg'
    },
    {
      id: 'montgolfiere',
      category: 'Himmlisch & Magisch',
      badge: 'VIP-Panoramaflug',
      title: 'Heißluftballonfahrt bei Sonnenaufgang',
      description: 'Schweben Sie sanft über die Wüste und das Atlasgebirge im ersten Morgenlicht, gefolgt von einem traditionellen Berber-Frühstück.',
      duration: '1 Stunde Flug (Vormittag)',
      location: 'Marrakesch & Atlas-Blick',
      highlight: 'Berber-Frühstück im Zelt & Flugzertifikat',
      imageUrl: 'assets/activities/activity-balloon.jpg'
    },
    {
      id: 'sandboarding',
      category: 'Sport & Action',
      badge: 'Dünenspaß',
      title: 'Sandboarding auf den Sahara-Dünen',
      description: 'Gleiten Sie auf speziellen Boards die steilen Sanddünen von Erg Chebbi hinab. Ein rasantes Vergnügen für Groß und Klein.',
      duration: 'Freie oder begleitete Session',
      location: 'Hohe Dünen von Merzouga',
      highlight: 'Profi-Boards und Wachs gestellt',
      imageUrl: 'assets/activities/activity-sandboarding.jpg'
    },
    {
      id: 'astronomie',
      category: 'Sternenhimmel & Kosmos',
      badge: 'Kristallklarer Wüstenhimmel',
      title: 'Astronomie-Abend & Teleskop-Beobachtung',
      description: 'Beobachten Sie die Milchstraße, Saturnringe und Galaxien durch professionelle Teleskope fernab jeglicher Lichtverschmutzung.',
      duration: 'Abendliche Sternstunde',
      location: 'Tiefes Wüstencamp',
      highlight: 'Präzisionsteleskop & Minztee am Lagerfeuer',
      imageUrl: 'assets/activities/activity-stargazing.jpg'
    }
  ],
  pt: [
    {
      id: 'buggy-quad',
      category: 'Velocidade e Emoção',
      badge: 'Adrenalina Total',
      title: 'Safari de Buggy e Moto-Quatro nas Dunas',
      description: 'Pilote potentes buggys e moto-quatro pelas cristas de areia de Agafay ou Merzouga com instrutores profissionais credenciados.',
      duration: '2 Horas / Meio dia',
      location: 'Deserto de Agafay e Merzouga',
      highlight: 'Capacetes, luvas e instruções incluídas',
      imageUrl: 'assets/activities/activity-buggy.jpg'
    },
    {
      id: 'dromadaire',
      category: 'Tradição e Paz',
      badge: 'Clássico Bérbere',
      title: 'Caravana de Dromedários ao Pôr do Sol',
      description: 'Atravesse as dunas douradas no ritmo tranquilo dos dromedários usando o lenço tradicional nómada durante o poente.',
      duration: '1 a 2 Horas ao entardecer',
      location: 'Dunas de Merzouga e Agafay',
      highlight: 'Lenço tradicional de oferta e pausa para chá',
      imageUrl: 'assets/activities/activity-camel.jpg'
    },
    {
      id: 'montgolfiere',
      category: 'Voo e Magia',
      badge: 'Vista Panorâmica VIP',
      title: 'Voo de Balão de Ar Quente ao Amanhecer',
      description: 'Sobrevoe o deserto e os picos do Atlas iluminados pelos primeiros raios de sol, seguido de pequeno-almoço tradicional.',
      duration: '1 Hora de voo (Manhã)',
      location: 'Marraquexe e Vista Atlas',
      highlight: 'Pequeno-almoço bérbere e certificado de voo',
      imageUrl: 'assets/activities/activity-balloon.jpg'
    },
    {
      id: 'sandboarding',
      category: 'Ação e Desporto',
      badge: 'Diversão na Areia',
      title: 'Sandboarding nas Grandes Dunas do Saara',
      description: 'Deslize pelas encostas douradas de Erg Chebbi em pranchas concebidas para areia. Aventura garantida para todas as idades.',
      duration: 'Sessão livre ou acompanhada',
      location: 'Altas dunas de Merzouga',
      highlight: 'Pranchas profissionais e cera incluídas',
      imageUrl: 'assets/activities/activity-sandboarding.jpg'
    },
    {
      id: 'astronomie',
      category: 'Noite e Cosmos',
      badge: 'Céu Mais Puro',
      title: 'Noite de Astronomia com Telescópio',
      description: 'Explore a Via Láctea, constelações e planetas através de telescópios motorizados sob o céu límpido do deserto.',
      duration: 'Sessão noturna',
      location: 'Acampamento no deserto',
      highlight: 'Telescópio de alta precisão e chá na fogueira',
      imageUrl: 'assets/activities/activity-stargazing.jpg'
    }
  ],
  nl: [
    {
      id: 'buggy-quad',
      category: 'Snelheid & Actie',
      badge: 'Volle Adrenaline',
      title: 'Buggy- & Quadsafari over de Duinen',
      description: 'Bestuur moderne buggies en quads over de zandruggen van Agafay of Merzouga onder professionele begeleiding.',
      duration: '2 Uur / Halve dag',
      location: 'Agafay Woestijn & Merzouga',
      highlight: 'Helmen, handschoenen & veiligheidsbriefing inbegrepen',
      imageUrl: 'assets/activities/activity-buggy.jpg'
    },
    {
      id: 'dromadaire',
      category: 'Traditie & Rust',
      badge: 'Berber Klassieker',
      title: 'Kamelenkaravaan bij Zonsondergang',
      description: 'Trek door de gouden duinen op een rustig kamelentempo met traditionele woestijnsjaal tijdens het magische schemeruur.',
      duration: '1 tot 2 Uur bij zonsondergang',
      location: 'Merzouga Duinen & Agafay',
      highlight: 'Traditionele sjaal & munttheestop inbegrepen',
      imageUrl: 'assets/activities/activity-camel.jpg'
    },
    {
      id: 'montgolfiere',
      category: 'Vlucht & Verwondering',
      badge: 'VIP Panoramavlucht',
      title: 'Luchtballonvaart bij Zonsopgang',
      description: 'Zweef over de woestijn en de toppen van het Atlasgebergte in het vroege ochtendlicht, gevolgd door een traditioneel ontbijt.',
      duration: '1 Uur vliegen (Ochtendprogramma)',
      location: 'Marrakech & Atlas Uitzicht',
      highlight: 'Traditioneel ontbijt & vliegcertificaat',
      imageUrl: 'assets/activities/activity-balloon.jpg'
    },
    {
      id: 'sandboarding',
      category: 'Actie & Fun',
      badge: 'Duinpret',
      title: 'Sandboarding op de Hoge Duinen van de Sahara',
      description: 'Glijd met speciale sandboards van de steile zandduinen van Erg Chebbi af. Een fantastische ervaring voor jong en oud.',
      duration: 'Vrije of begeleide sessie',
      location: 'Hoge duinen van Merzouga',
      highlight: 'Professionele sandboards & wax voorzien',
      imageUrl: 'assets/activities/activity-sandboarding.jpg'
    },
    {
      id: 'astronomie',
      category: 'Nacht & Sterren',
      badge: 'Kristalheldere Hemel',
      title: 'Astronomie-avond & Telescoopobservatie',
      description: 'Bekijk de Melkweg, planeten en sterrenstelsels door krachtige telescopen onder een van de donkerste hemels ter wereld.',
      duration: 'Avondsessie na het diner',
      location: 'Woestijnkamp diep in de Sahara',
      highlight: 'Precisietelescoop & muntthee bij het kampvuur',
      imageUrl: 'assets/activities/activity-stargazing.jpg'
    }
  ]
};
