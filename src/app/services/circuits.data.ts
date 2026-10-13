import { Circuit, Language } from './language.service';

export const ALL_CIRCUITS_DATA: Record<Language, Circuit[]> = {
  fr: [
    {
      id: 'circuit-1',
      name: 'Circuit 1 : Cascades d\'Ouzoud, Montagne Ayachi & Dunes de Merzouga',
      duration: '4 Jours / 3 Nuits',
      pace: 'Nature Sauvage, Haut-Atlas & Grand Désert',
      badge: 'Circuit 1 • Proposition N°1',
      priceNote: 'Tarif sur devis',
      summary: 'Une grande odyssée authentique à travers le Maroc préservé. Des spectaculaires Cascades d\'Ouzoud au massif méconnu du Jbel Ayachi avec pique-nique en pleine montagne, jusqu\'à l\'immensité dorée des dunes de Merzouga avec nuit sous la tente berbère. Retour par les Gorges du Todra et les studios cinématographiques d\'Ouarzazate.',
      imageUrl: 'assets/ouzoud-waterfalls.jpeg',
      transportOffer: 'Transport au choix : avec chauffeur privé dédié ou formule sans chauffeur (sur devis personnalisé).',
      inclusions: [
        'Transport au choix : Véhicule récent climatisé avec chauffeur privé dédié OU formule sans chauffeur (sur devis direct)',
        'Prise en charge directe et retour à Marrakech',
        'Déjeuner au pied des splendides Cascades d\'Ouzoud',
        '2 Nuitées en hôtel de charme à Midelt avec petit-déjeuner',
        'Excursion et grand pique-nique en pleine montagne du Jbel Ayachi (Haut-Atlas)',
        '1 Nuitée inoubliable au désert de Merzouga sous la tente berbère traditionnelle',
        'Balade chamelière et coucher de soleil à dos de dromadaire sur les dunes d\'Erg Chebbi',
        'Déjeuner au cœur des impressionnantes Gorges de Todra à Tinghir',
        'Arrêt et visite des célèbres studios cinématographiques internationaux à Ouarzazate',
        'Dernière nuitée à Marrakech pour clôturer le séjour en toute sérénité'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Départ de Marrakech → Cascades d\'Ouzoud (Déjeuner) → Nuitée à Midelt',
          description: 'Départ matinal de Marrakech en direction de Midelt en passant par les grandioses cascades d\'Ouzoud. Déjeuner traditionnel berbère au pied des cascades avec vue panoramique rafraîchissante. Poursuite de la route à travers les paysages du Moyen-Atlas et arrivée à Midelt en fin d\'après-midi. Dîner et nuitée à Midelt.',
          imageUrl: 'assets/ouzoud-waterfalls.jpeg',
          activityLabel: 'Cascades d\'Ouzoud & Pique-Nique Berbère',
          stops: ['Départ Marrakech', 'Cascades d\'Ouzoud', 'Déjeuner aux cascades', 'Moyen-Atlas', 'Passer la nuit à Midelt']
        },
        {
          dayNumber: 2,
          title: 'Petit-déjeuner → Départ en Pique-Nique à la Montagne Ayachi → Midelt',
          description: 'Après un savoureux petit-déjeuner, départ pour une journée d\'évasion montagnarde avec un grand pique-nique au pied du majestueux Jbel Ayachi. Passez toute la journée en pleine montagne du Haut-Atlas au milieu de paysages pastoraux préservés et d\'un air pur revigorant. Retour en fin d\'après-midi pour dormir à Midelt.',
          imageUrl: 'assets/tours/c1-d2-ayachi.jpg',
          activityLabel: 'Pique-Nique en Pleine Montagne du Jbel Ayachi',
          stops: ['Petit-déjeuner à l\'hôtel', 'Départ pique-nique Jbel Ayachi', 'Journée en pleine montagne', 'Haut-Atlas sauvage', 'Dormir à Midelt']
        },
        {
          dayNumber: 3,
          title: 'Midelt → Désert de Merzouga : Coucher de Soleil à Dromadaire & Tente Berbère',
          description: 'Petit-déjeuner à Midelt puis départ en direction du désert saharien de Merzouga en longeant les magnifiques gorges et palmeraies du Ziz. Arrivée aux dunes majestueuses de l\'Erg Chebbi : caravane de dromadaires pour assister au magnifique coucher de soleil sur les crêtes dorées. Dîner traditionnel autour du feu et nuit féérique sous la tente berbère au désert.',
          imageUrl: 'assets/merzouga-dunes.jpeg',
          activityLabel: 'Coucher de Soleil à Dromadaire & Nuit sous la Tente à Merzouga',
          stops: ['Vallée du Ziz & palmeraies', 'Désert de Merzouga', 'Coucher de soleil à dos de dromadaire', 'Nuit sous la tente berbère']
        },
        {
          dayNumber: 4,
          title: 'Merzouga → Gorges de Todra Tinghir (Déjeuner) → Ouarzazate → Marrakech',
          description: 'Petit-déjeuner au désert puis départ vers Marrakech. Déjeuner au cœur des vertigineuses Gorges de Todra à Tinghir. Arrêt à Ouarzazate avec visite des mythiques studios cinématographiques internationaux. Traversée du Haut-Atlas par le col du Tizi n\'Tichka et arrivée en soirée à Marrakech. Passer la nuit à Marrakech. Bon séjour !',
          imageUrl: 'assets/tours/c1-d4-todra.jpg',
          activityLabel: 'Gorges de Todra Tinghir & Studios de Cinéma Ouarzazate',
          stops: ['Gorges de Todra (Tinghir)', 'Déjeuner aux gorges', 'Ouarzazate (Studios de cinéma)', 'Col du Tichka', 'Passer la nuit à Marrakech']
        }
      ]
    },
    {
      id: 'circuit-2',
      name: 'Circuit 2 : "Que du Plaisir" : Marrakech, Montagnes d\'Asni & Nuit VIP à Agafay',
      duration: '3 Jours / 2 Nuits',
      pace: 'Détente, Bien-Être, Activités & Fête',
      badge: 'Circuit "Que du Plaisir"',
      priceNote: 'Tarif sur devis',
      summary: 'Une parenthèse enchantée conçue pour se ressourcer et vibrer. Commencez par la quiétude des montagnes d\'Asni, poursuivez par une journée festive au désert d\'Agafay (piscine panoramique, déjeuner, 1h d\'activité au choix : dromadaire, quad ou buggy, coucher de soleil et grand dîner avec danseuse orientale et cracheur de feu sous tente luxueuse), puis terminez dans un riad au centre de Marrakech avec hammam et massage.',
      imageUrl: 'assets/star-lit-nights.jpeg',
      transportOffer: 'Transport au choix : avec chauffeur dédié ou véhicule sans chauffeur (sur devis personnalisé).',
      inclusions: [
        'Transport privé climatisé avec chauffeur à disposition OU formule sans chauffeur (sur devis direct)',
        '1 Nuitée ressourçante en pleine montagne d\'Atlas à Asni',
        'Accès piscine en plein désert de Marrakech à Agafay & Déjeuner au camp',
        '1 Heure d\'activité au choix : Randonnée Dromadaire, Safari Quad ou Buggy',
        'Assister au coucher de soleil féérique sur les canyons d\'Agafay',
        'Dîner avec grande animation : Danseuse orientale, Cracheur de feu & musique',
        'Passer la nuit sous les tentes luxueuses au désert d\'Agafay',
        'Assister au lever de soleil au désert & Petit-déjeuner gourmand',
        'Hébergement dans un riad de charme au centre de Marrakech',
        'Journée libre avec séance relaxante de Hammam traditionnel & Massage'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Passant la Nuit à Marrakech / Départ Matin → Moulay Brahim → Montagnes d\'Asni',
          description: 'Hébergement au centre de Marrakech. Le matin après le petit-déjeuner, départ en direction de Moulay Brahim et des contreforts de l\'Atlas. Poursuite vers la vallée d\'Asni. Dîner traditionnel savoureux et passer la nuit en pleine montagne d\'Atlas à Asni.',
          imageUrl: 'assets/atlas-mountains-villages.jpeg',
          activityLabel: 'Contreforts du Haut-Atlas & Nuitée Ressourçante à Asni',
          stops: ['Centre de Marrakech', 'Moulay Brahim', 'Haut-Atlas', 'Nuitée en pleine montagne à Asni']
        },
        {
          dayNumber: 2,
          title: 'Asni → Agafay : Piscine, Activité (Dromadaire/Quad/Buggy), Dîner Spectacle & Tente de Luxe',
          description: 'Après le petit-déjeuner, départ vers le désert minéral d\'Agafay. Profitez de la piscine en plein désert de Marrakech et d\'un excellent déjeuner. 1 heure d\'activité au choix : dromadaire, quad ou buggy pour assister au magnifique coucher de soleil. Dîner avec animation festive (danseuse orientale, cracheur de feu). Passer la nuit sous les tentes luxueuses au désert.',
          imageUrl: 'assets/tours/c2-d2-agafay.jpg',
          activityLabel: 'Piscine au Désert, Quad/Buggy & Dîner Spectacle Feu à Agafay',
          stops: ['Piscine en plein désert d\'Agafay', 'Déjeuner au désert', '1h Activité (Dromadaire, Quad ou Buggy)', 'Coucher de soleil', 'Dîner spectacle feu & danseuse', 'Nuit sous les tentes luxueuses']
        },
        {
          dayNumber: 3,
          title: 'Agafay (Lever de Soleil) → Riad au Centre de Marrakech : Journée Libre, Hammam & Massage',
          description: 'Assister au lever de soleil spectaculaire sur les canyons d\'Agafay, petit-déjeuner et départ. Arrivée au centre de Marrakech et hébergement dans un magnifique riad traditionnel. Journée libre avec rituel bien-être : séance de hammam traditionnel et massage relaxant. Bon séjour !',
          imageUrl: 'assets/tours/c2-d3-hammam.jpg',
          activityLabel: 'Lever de Soleil Agafay, Riad Marrakech, Hammam & Massage',
          stops: ['Lever de soleil & petit-déjeuner', 'Départ d\'Agafay', 'Arrivée centre de Marrakech', 'Hébergement en riad', 'Journée libre hammam & massage']
        }
      ]
    },
    {
      id: 'circuit-3',
      name: 'Circuit 3 : "Circuit Mer - Terre" : Essaouira, Taghazout, Agadir & Kasbahs de Ouarzazate',
      duration: '4 Jours / 3 Nuits',
      pace: 'Côte Océane, Culture Solidaire & Kasbahs',
      badge: 'Circuit Mer - Terre',
      priceNote: 'Tarif sur devis',
      summary: 'L\'équilibre parfait entre les vagues de l\'Atlantique et les mystères du Sud marocain. Découvrez Essaouira et sa balade à cheval au bord de la mer au coucher de soleil, l\'ambiance de Taghazout, une journée de solidarité au cœur des associations d\'argan à Agadir avec participation au show, puis franchissez les montagnes vers les célèbres studios de cinéma et l\'ancienne Kasbah du Glaoui à Ouarzazate.',
      imageUrl: 'assets/taghazout-morocco.jpeg',
      transportOffer: 'Transport au choix : avec chauffeur dédié ou véhicule sans chauffeur (sur devis personnalisé).',
      inclusions: [
        'Transport au choix : avec chauffeur dédié OU formule véhicule sans chauffeur (sur devis direct)',
        'Visite d\'Essaouira : anciens quartiers juifs (Mellah) & monuments historiques',
        'Déjeuner au port et balade à dos de cheval au bord de la mer au coucher de soleil',
        'Passer la nuit de charme à Essaouira',
        'Déjeuner les pieds dans l\'eau à Taghazout',
        'Journée de solidarité : visite des associations d\'argan et cosmétique avec participation au show',
        'Passer la nuit à Agadir',
        'Visite des studios cinématographiques internationaux d\'Ouarzazate',
        'Visite de l\'ancienne et prestigieuse Kasbah de Glaoui',
        'Passer la nuit à Ouarzazate',
        'Retour à Marrakech avec journée libre des programmes aux choix et facultatifs'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Marrakech → Essaouira : Anciens Quartiers Juifs, Cheval au Coucher de Soleil & Nuit Océane',
          description: 'Départ de Marrakech vers Essaouira. Arrivée à Essaouira : visite des anciens quartiers juifs (Mellah) et des monuments historiques. Déjeuner traditionnel. Balade à dos de cheval sur la plage et contemplation du coucher de soleil au bord de la mer. Passer la nuit à Essaouira.',
          imageUrl: 'assets/tours/c3-d1-essaouira-horse.jpg',
          activityLabel: 'Mellah d\'Essaouira & Balade à Cheval au Bord de Mer au Coucher de Soleil',
          stops: ['Départ de Marrakech', 'Arrivée Essaouira', 'Visite anciens quartiers juifs & monuments', 'Déjeuner', 'Balade à dos de cheval', 'Coucher de soleil au bord de la mer', 'Passer la nuit à Essaouira']
        },
        {
          dayNumber: 2,
          title: 'Essaouira → Taghazout (Déjeuner) → Agadir : Journée Solidaire Argan & Show Cosmétique',
          description: 'Petit-déjeuner puis départ par la route côtière vers Agadir. Déjeuner à Taghazout face aux spots de l\'océan. Poursuite vers Agadir pour une enrichissante journée de solidarité : visite des associations de femmes productrices d\'argan et produits cosmétiques avec participation au show de fabrication artisanale. Passer la nuit à Agadir.',
          imageUrl: 'assets/taghazout-morocco.jpeg',
          activityLabel: 'Taghazout Océan & Découverte Solidaire de l\'Argan à Agadir',
          stops: ['Petit-déjeuner', 'Départ vers Agadir', 'Déjeuner à Taghazout', 'Journée de solidarité', 'Associations d\'argan & cosmétique', 'Participation au show', 'Passer la nuit à Agadir']
        },
        {
          dayNumber: 3,
          title: 'Agadir → Ouarzazate : Studios Cinématographiques & Ancienne Kasbah de Glaoui',
          description: 'Petit-déjeuner puis départ vers Ouarzazate, la capitale du cinéma marocain. Visite des célèbres studios cinématographiques internationaux où ont été tournés les chefs-d\'œuvre du cinéma. Découverte de l\'impressionnante ancienne Kasbah de Glaoui. Passer la nuit à Ouarzazate.',
          imageUrl: 'assets/tours/c3-d3-kasbah.jpg',
          activityLabel: 'Studios Cinématographiques & Kasbah Historique de Glaoui à Ouarzazate',
          stops: ['Petit-déjeuner', 'Départ vers Ouarzazate', 'Visite des studios cinématographiques', 'Ancienne Kasbah de Glaoui', 'Passer la nuit à Ouarzazate']
        },
        {
          dayNumber: 4,
          title: 'Ouarzazate → Marrakech : Traversée du Haut-Atlas & Journée Libre aux Programmes au Choix',
          description: 'Petit-déjeuner puis départ vers Marrakech à travers les majestueux paysages du col du Tizi n\'Tichka. Arrivée à Marrakech pour une agréable journée libre des programmes aux choix et facultatifs. Bon séjour !',
          imageUrl: 'assets/tours/c3-d4-tizi-tichka.jpg',
          activityLabel: 'Col Panoramique du Tizi n\'Tichka & Retour Triomphal à Marrakech',
          stops: ['Petit-déjeuner', 'Départ vers Marrakech', 'Traversée du Haut-Atlas', 'Journée libre & programmes aux choix facultatifs']
        }
      ]
    }
  ],

  en: [
    {
      id: 'circuit-1',
      name: 'Tour 1: Ouzoud Waterfalls, Ayachi Mountain & Merzouga Dunes',
      duration: '4 Days / 3 Nights',
      pace: 'Untamed Nature, High Atlas & Sahara Desert',
      badge: 'Tour 1 • Best-Seller',
      priceNote: 'Quote on request',
      summary: 'A majestic expedition through hidden Morocco. From the towering Ouzoud Waterfalls and a mountain picnic in the Ayachi range, to the golden dunes of Merzouga with a night in a Berber desert tent. Return via the Todra Gorges and Ouarzazate film studios.',
      imageUrl: 'assets/ouzoud-waterfalls.jpeg',
      transportOffer: 'Transport of your choice: Dedicated private chauffeur OR self-drive vehicle (custom quote on request).',
      inclusions: [
        'Flexible transport: Modern air-conditioned vehicle with dedicated private driver OR self-drive option (on quote)',
        'Direct pick-up and return in Marrakech',
        'Traditional lunch at the foot of the magnificent Ouzoud Waterfalls',
        '2 Nights in a charming Midelt hotel with breakfast and dinner',
        'Outdoor scenic picnic day at the foot of Mount Ayachi (High Atlas)',
        '1 Unforgettable night in Merzouga desert under an authentic Berber tent',
        'Camel trek and sunset over Erg Chebbi golden dunes',
        'Lunch in the heart of the towering Todra Gorges (Tinghir)',
        'Visit to the world-famous cinema studios in Ouarzazate',
        'Final night in Marrakech for a smooth end to your journey'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Departure from Marrakech → Ouzoud Waterfalls (Lunch) → Night in Midelt',
          description: 'Morning departure from Marrakech towards Midelt via the spectacular Ouzoud Waterfalls. Enjoy a traditional Berber lunch facing the falls. Continue through Middle Atlas scenery to arrive in Midelt in the late afternoon. Dinner and overnight in Midelt.',
          imageUrl: 'assets/ouzoud-waterfalls.jpeg',
          activityLabel: 'Ouzoud Waterfalls & Berber Panoramic Lunch',
          stops: ['Marrakech departure', 'Ouzoud Waterfalls', 'Lunch at the falls', 'Middle Atlas', 'Overnight in Midelt']
        },
        {
          dayNumber: 2,
          title: 'Breakfast → Scenic Picnic Excursion at Mount Ayachi → Midelt',
          description: 'After a hearty breakfast, set out for a mountain getaway with a scenic picnic at the foot of Mount Ayachi (Jbel Ayachi). Spend the day in the fresh mountain air surrounded by untouched landscapes. Return to Midelt for dinner and overnight.',
          imageUrl: 'assets/tours/c1-d2-ayachi.jpg',
          activityLabel: 'High Atlas Mountain Luxury Picnic at Mount Ayachi',
          stops: ['Hotel breakfast', 'Jbel Ayachi picnic excursion', 'Full day in high mountains', 'Preserved landscapes', 'Overnight in Midelt']
        },
        {
          dayNumber: 3,
          title: 'Midelt → Merzouga Desert: Sunset Camel Ride & Berber Tent',
          description: 'Breakfast in Midelt, then head south towards the Sahara desert of Merzouga along the dramatic Ziz Gorges and palm oasis valleys. Arrive at Erg Chebbi dunes for a sunset camel caravan. Enjoy nomadic fireside music and sleep under a Berber tent.',
          imageUrl: 'assets/merzouga-dunes.jpeg',
          activityLabel: 'Camel Trek Sunset & Starlit Berber Desert Camp in Merzouga',
          stops: ['Ziz Valley & palm groves', 'Merzouga desert', 'Sunset camel ride', 'Night under Berber tent']
        },
        {
          dayNumber: 4,
          title: 'Merzouga → Todra Gorges (Lunch) → Ouarzazate Film Studios → Marrakech',
          description: 'Desert breakfast, then depart towards Marrakech. Stop and lunch inside the vertical Todra Gorges in Tinghir. Continue to Ouarzazate to tour famous Hollywood movie studios. Cross Tizi n\'Tichka pass and arrive in Marrakech. Have a wonderful stay!',
          imageUrl: 'assets/tours/c1-d4-todra.jpg',
          activityLabel: 'Todra Gorge Cliffs & International Movie Studios in Ouarzazate',
          stops: ['Todra Gorges (Tinghir)', 'Lunch at the gorges', 'Ouarzazate Cinema Studios', 'Tichka Pass', 'Overnight in Marrakech']
        }
      ]
    },
    {
      id: 'circuit-2',
      name: 'Tour 2: "Pure Pleasure": Marrakech, Asni Mountains & VIP Night in Agafay',
      duration: '3 Days / 2 Nights',
      pace: 'Relaxation, Wellness, Desert Fun & Celebration',
      badge: 'Tour 2 • "Pure Pleasure"',
      priceNote: 'Quote on request',
      summary: 'An enchanting escape designed for pure relaxation and celebration. Experience the peace of the Atlas Mountains in Asni, an exciting day in the Agafay Desert (pool access, lunch, 1-hour activity of your choice: camel, quad or buggy, sunset, and grand dinner with belly dancer and fire eater under luxury tent), then a historic Marrakech riad with traditional hammam and massage.',
      imageUrl: 'assets/star-lit-nights.jpeg',
      transportOffer: 'Transport of your choice: with dedicated chauffeur or self-drive vehicle (custom quote).',
      inclusions: [
        'Private air-conditioned transport with chauffeur at disposal OR self-drive option (on quote)',
        '1 Peaceful night in the High Atlas Mountains in Asni',
        'Pool day pass in the desert of Agafay & delicious lunch',
        '1-Hour activity of choice: Camel trek, Quad safari, or Buggy SSV',
        'Magical sunset overlooking Agafay stone canyons',
        'Grand evening spectacle: Oriental belly dancer, fire breather & live music',
        '1 Night under luxury glamping tents in the Agafay Desert',
        'Sunrise view and gourmet nomad breakfast',
        'Accommodation in a charming traditional riad in central Marrakech',
        'Free day with relaxing traditional Moroccan Hammam & Argan oil massage'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Marrakech Center / Morning Departure → Moulay Brahim → Asni Mountains',
          description: 'Morning departure from Marrakech towards Moulay Brahim foothills. Enter the green valley of Asni under Mount Toubkal peaks. Enjoy traditional dinner and sleep surrounded by mountain serenity.',
          imageUrl: 'assets/atlas-mountains-villages.jpeg',
          activityLabel: 'High Atlas Foothills & Scenic Mountain Retreat in Asni',
          stops: ['Marrakech center', 'Moulay Brahim', 'High Atlas foothills', 'Overnight in Asni mountain']
        },
        {
          dayNumber: 2,
          title: 'Asni → Agafay Desert: Pool, Activity (Camel/Quad/Buggy), Dinner Show & Luxury Tent',
          description: 'Breakfast facing mountain peaks then depart to Agafay desert. Relax by the desert pool and enjoy a delicious lunch. In the late afternoon, enjoy 1 hour of your chosen activity (camel, quad, or buggy) during sunset. Gourmet dinner with belly dancing and fire show. Night under luxury desert tents.',
          imageUrl: 'assets/tours/c2-d2-agafay.jpg',
          activityLabel: 'Agafay Desert Pool, Quad/Buggy Sunset & Fire Show Dinner',
          stops: ['Agafay desert pool', 'Desert lunch', '1h Activity (Camel, Quad or Buggy)', 'Sunset', 'Fire show & belly dancer', 'Luxury tent overnight']
        },
        {
          dayNumber: 3,
          title: 'Agafay Sunrise → Marrakech Riad: Free Day, Hammam & Relaxing Massage',
          description: 'Watch the golden sunrise over Agafay canyons, enjoy breakfast and depart. Arrive at central Marrakech riad. Free day with full wellness ritual: authentic Moroccan hammam and relaxing massage. Enjoy your stay!',
          imageUrl: 'assets/tours/c2-d3-hammam.jpg',
          activityLabel: 'Agafay Sunrise, Luxury Marrakech Riad, Traditional Hammam & Massage',
          stops: ['Desert sunrise & breakfast', 'Marrakech center', 'Charming Riad', 'Hammam & Massage', 'Free relaxing day']
        }
      ]
    },
    {
      id: 'circuit-3',
      name: 'Tour 3: "Sea & Sand": Essaouira, Taghazout, Agadir & Ouarzazate Kasbahs',
      duration: '4 Days / 3 Nights',
      pace: 'Ocean Breeze, Solidarity Culture & Historic Kasbahs',
      badge: 'Tour 3 • Sea & Sand',
      priceNote: 'Quote on request',
      summary: 'The perfect harmony between Atlantic ocean waves and the mystical South. Discover Essaouira with sunset horseback riding on the beach, Taghazout surf culture, a solidarity day visiting argan cooperatives and craft show in Agadir, then Hollywood film studios and the Glaoui Kasbah in Ouarzazate.',
      imageUrl: 'assets/taghazout-morocco.jpeg',
      transportOffer: 'Transport of your choice: with dedicated chauffeur or self-drive vehicle (custom quote).',
      inclusions: [
        'Transport of your choice: with dedicated chauffeur OR self-drive option (on quote)',
        'Historical tour of Essaouira: Old Jewish quarters (Mellah) & ramparts',
        'Fresh seafood lunch and sunset horseback riding along the beach',
        '1 Charming night in Essaouira',
        'Oceanfront lunch in Taghazout surf village',
        'Solidarity day: Visiting local argan & cosmetics cooperatives with live craft show',
        '1 Comfortable night in Agadir',
        'Guided visit of international cinema studios in Ouarzazate',
        'Discovery of the historical Kasbah of Glaoui',
        '1 Night in Ouarzazate',
        'Return across the High Atlas to Marrakech with free leisure time'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Marrakech → Essaouira: Jewish Quarter, Seaside Lunch & Sunset Horseback Ride',
          description: 'Morning drive to Atlantic gem Essaouira (Mogador). Visit the historic Mellah and fortress ramparts. Fresh fish lunch at the harbor. Gallop or stroll on horseback on the beach as the sun sets over the ocean. Overnight in Essaouira.',
          imageUrl: 'assets/tours/c3-d1-essaouira-horse.jpg',
          activityLabel: 'Historic Essaouira Mellah & Sunset Beach Horse Riding',
          stops: ['Marrakech departure', 'Essaouira Medina', 'Old Jewish Mellah', 'Port lunch', 'Beach horseback riding', 'Ocean sunset', 'Overnight in Essaouira']
        },
        {
          dayNumber: 2,
          title: 'Essaouira → Taghazout (Lunch) → Agadir: Argan Solidarity Day & Show',
          description: 'Breakfast and scenic coastal drive to Taghazout. Relaxing lunch overlooking world-class surf breaks. Continue to Agadir for a solidarity day: visit women\'s argan and cosmetic cooperatives and participate in traditional craft demonstrations. Overnight in Agadir.',
          imageUrl: 'assets/taghazout-morocco.jpeg',
          activityLabel: 'Taghazout Oceanfront Lunch & Women\'s Argan Cooperative in Agadir',
          stops: ['Atlantic coast drive', 'Taghazout lunch', 'Solidarity day', 'Argan & cosmetic cooperatives', 'Craft show', 'Overnight in Agadir']
        },
        {
          dayNumber: 3,
          title: 'Agadir → Ouarzazate: Cinema Studios & Ancient Glaoui Kasbah',
          description: 'Breakfast and depart through the Souss valley to Hollywood of Morocco, Ouarzazate. Visit renowned film studios where international blockbusters were created. Tour the grand historic Glaoui Kasbah. Dinner and overnight in Ouarzazate.',
          imageUrl: 'assets/tours/c3-d3-kasbah.jpg',
          activityLabel: 'International Cinema Studios & Historic Kasbah Glaoui in Ouarzazate',
          stops: ['Drive to Ouarzazate', 'International film studios', 'Ancient Glaoui Kasbah', 'Overnight in Ouarzazate']
        },
        {
          dayNumber: 4,
          title: 'Ouarzazate → Marrakech: High Atlas Crossing & Free Leisure Time',
          description: 'Breakfast then cross High Atlas peaks through Tizi n\'Tichka pass towards Marrakech. Arrive in Marrakech for a free leisure day with optional programs and shopping in the souks. Have a wonderful stay!',
          imageUrl: 'assets/tours/c3-d4-tizi-tichka.jpg',
          activityLabel: 'Panoramic Tizi n\'Tichka Mountain Pass & Arrival in Marrakech',
          stops: ['Tizi n\'Tichka pass', 'Marrakech arrival', 'Free leisure day', 'Optional activities']
        }
      ]
    }
  ],

  ar: [
    {
      id: 'circuit-1',
      name: 'الرحلة 1: شلالات أوزود، جبل العياشي وكثبان مرزوكة',
      duration: '4 أيام / 3 ليالٍ',
      pace: 'طبيعة عذراء، جبال الأطلس والصحراء الكبرى',
      badge: 'الرحلة 1 • الأكثر طلباً',
      priceNote: 'السعر حسب الطلب',
      summary: 'ملحمة أصيلة عبر سحر المغرب الخفي. من شلالات أوزود الشاهقة إلى جبل العياشي مع نزهة جبلية ساحرة، وصولاً إلى كثبان مرزوكة الذهبية وليلة تحت الخيام البربرية. العودة عبر مضايق تودغى واستوديوهات السينما بورزازات.',
      imageUrl: 'assets/ouzoud-waterfalls.jpeg',
      transportOffer: 'النقل حسب اختياركم: مع سائق خاص رهن إشارتكم أو كراء بدون سائق (عرض سعر مخصص حسب الطلب).',
      inclusions: [
        'نقل سياحي مريح ومكيف مع سائق خاص أو خيار كراء سيارة بدون سائق (حسب الطلب)',
        'انطلاق مباشر من مراكش وعودة مريحة',
        'وجبة غداء تقليدية أمام شلالات أوزود الرائعة',
        'مبيتان في فندق مميز بمدينة ميدلت مع الإفطار والعشاء',
        'خرجة ونزهة غداء كاملة في قلب جبل العياشي (الأطلس الكبير)',
        'ليلة استثنائية في صحراء مرزوكة تحت الخيام البربرية التقليدية',
        'جولة على ظهور الجمال لمشاهدة غروب الشمس الذهبي فوق الكثبان',
        'غداء في مضايق تودغى المهيبة بتنغير',
        'توقف وزيارة استوديوهات السينما العالمية في ورزازات',
        'ليلة ختامية بمدينة مراكش لنهاية رحلة مريحة وممتعة'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'الانطلاق من مراكش ← شلالات أوزود (غداء) ← المبيت بميدلت',
          description: 'انطلاق صباحي من مراكش باتجاه ميدلت عبر شلالات أوزود الرائعة. غداء أمازيغي أمام الشلالات، ثم مواصلة الطريق عبر مناظر الأطلس المتوسط وصولاً إلى ميدلت. عشاء ومبيت بميدلت.',
          imageUrl: 'assets/ouzoud-waterfalls.jpeg',
          activityLabel: 'شلالات أوزود الشامخة وغداء بربري أصيل',
          stops: ['الانطلاق من مراكش', 'شلالات أوزود', 'غداء أمام الشلالات', 'الأطلس المتوسط', 'المبيت بميدلت']
        },
        {
          dayNumber: 2,
          title: 'إفطار الصباح ← نزهة غداء بجبل العياشي (الأطلس الكبير) ← ميدلت',
          description: 'بعد إفطار الصباح، انطلاق في يوم استجمام في الطبيعة مع نزهة غداء عند سفح جبل العياشي الشامخ. قضاء يوم كامل في الهواء النقي وسط الطبيعة العذراء. عودة مساءً والمبيت بميدلت.',
          imageUrl: 'assets/tours/c1-d2-ayachi.jpg',
          activityLabel: 'نزهة جبلية فاخرة في أعالي جبل العياشي',
          stops: ['إفطار بالفندق', 'نزهة جبل العياشي', 'يوم كامل في الجبل', 'طبيعة الأطلس العذراء', 'المبيت بميدلت']
        },
        {
          dayNumber: 3,
          title: 'ميدلت ← صحراء مرزوكة: غروب الشمس على ظهور الجمال والخيمة البربرية',
          description: 'إفطار بميدلت ثم التوجه إلى صحراء مرزوكة مروراً بوادي زيز وواحات تافيلالت. ركوب الجمال لمشاهدة الغروب الأسطوري فوق كثبان عرق الشبي. عشاء تقليدي وموسيقى صحراوية ومبيت تحت الخيمة البربرية.',
          imageUrl: 'assets/merzouga-dunes.jpeg',
          activityLabel: 'رحلة الجمال عند الغروب ومبيت تحت النجوم بمرزوكة',
          stops: ['وادي زيز والواحات', 'صحراء مرزوكة', 'غروب الشمس على الجمال', 'المبيت بالخيمة البربرية']
        },
        {
          dayNumber: 4,
          title: 'مرزوكة ← مضايق تودغى (غداء) ← استوديوهات ورزازات ← مراكش',
          description: 'إفطار في الصحراء ثم الانطلاق نحو مراكش. توقف وغداء في قلب مضايق تودغى الشاهقة بتنغير. التوقف بورزازات وزيارة استوديوهات السينما العالمية. عبور ممر تيشكا والوصول مساءً إلى مراكش للمبيت. إقامة سعيدة!',
          imageUrl: 'assets/tours/c1-d4-todra.jpg',
          activityLabel: 'مضائق تودغى العالية واستوديوهات السينما العالمية بورزازات',
          stops: ['مضايق تودغى بتنغير', 'غداء بالمضايق', 'استوديوهات ورزازات', 'ممر تيشكا', 'المبيت بمراكش']
        }
      ]
    },
    {
      id: 'circuit-2',
      name: 'الرحلة 2: "متعة لا تنتهي": مراكش، جبال أسني وليلة ساحرة بأغفاي',
      duration: '3 أيام / ليلتان',
      pace: 'استجمام، رفاهية، أنشطة وسهرة فنية',
      badge: 'الرحلة 2 • "متعة لا تنتهي"',
      priceNote: 'السعر حسب الطلب',
      summary: 'رحلة مصممة للراحة والانتعاش. تبدأ بهدوء جبال الأطلس في أسني، تليها تجربة مميزة بصحراء أغفاي (مسبح بإطلالة بانورامية، غداء، ساعة كاملة من الأنشطة حسب اختياركم: جمال، كواد أو باغي، غروب الشمس وسهرة عشاء مع راقصة شرقية ونافخ النار تحت خيمة فاخرة)، ثم إقامة برياض أصيل بمراكش مع حمام ومساج.',
      imageUrl: 'assets/star-lit-nights.jpeg',
      transportOffer: 'النقل حسب اختياركم: مع سائق خاص رهن إشارتكم أو كراء بدون سائق (عرض سعر مخصص حسب الطلب).',
      inclusions: [
        'نقل خاص ومكيف مع سائق رهن إشارتكم أو كراء سيارة بدون سائق (حسب الطلب)',
        'ليلة مريحة في قلب جبال الأطلس بمنطقة أسني',
        'دخول مسبح بانورامي بصحراء أغفاي ووجبة غداء لذيذة',
        'ساعة من الأنشطة باختياركم: جولة جمال، سفاري كواد أو باغي',
        'مشاهدة غروب الشمس الخلاب فوق تلال أغفاي الصحراوية',
        'سهرة عشاء فاخرة مع برنامج فني: راقصة شرقية، استعراض النار وموسيقى',
        'مبيت مميز تحت الخيام الفاخرة المجهزة بصحراء أغفاي',
        'مشاهدة شروق الشمس وإفطار صباحي لذيذ',
        'إقامة برياض مغربي تقليدي فاخر بقلب مراكش',
        'يوم حر مع جلسة استرخاء متكاملة: حمام مغربي تقليدي ومساج بالزيوت العطرية'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'وسط مراكش / انطلاق صباحي ← مولاي إبراهيم ← جبال أسني',
          description: 'إقامة بمراكش. الانطلاق صباحاً بعد الإفطار نحو ضريح ومرتفعات مولاي إبراهيم ووادي أسني الأخضر. عشاء محلي ومبيت هادئ في جبال الأطلس بأسني.',
          imageUrl: 'assets/atlas-mountains-villages.jpeg',
          activityLabel: 'سفوح الأطلس الكبير ومبيت هادئ في قرى أسني',
          stops: ['وسط مراكش', 'مولاي إبراهيم', 'جبال الأطلس', 'المبيت بأسني في الجبل']
        },
        {
          dayNumber: 2,
          title: 'أسني ← صحراء أغفاي: مسبح، أنشطة الغروب، عشاء فني وخيمة فاخرة',
          description: 'بعد الإفطار، الانطلاق نحو صحراء أغفاي. الاستمتاع بالمسبح والغداء وسط الصحراء. بعد الظهر، ساعة نشاط باختياركم (جمال أو كواد أو باغي) لمشاهدة الغروب. سهرة عشاء مع راقصة شرقية ونافخ النار، ومبيت تحت الخيام الفاخرة.',
          imageUrl: 'assets/tours/c2-d2-agafay.jpg',
          activityLabel: 'مسبح صحراوي، كواد أو باغي، وسهرة عشاء مع عروض النار بأكفاي',
          stops: ['مسبح صحراء أغفاي', 'غداء بالصحراء', 'ساعة نشاط (جمال/كواد/باغي)', 'غروب الشمس', 'سهرة العشاء والنار', 'المبيت بخيمة فاخرة']
        },
        {
          dayNumber: 3,
          title: 'أغفاي (شروق الشمس) ← رياض بمراكش: يوم حر، حمام ومساج',
          description: 'مشاهدة شروق الشمس فوق الكثبان، إفطار صباحي والعودة إلى مراكش. النزول برياض ساحر في المدينة العتيقة. يوم حر للاسترخاء مع حمام مغربي أصيل ومساج بزيت الأركان. إقامة سعيدة!',
          imageUrl: 'assets/tours/c2-d3-hammam.jpg',
          activityLabel: 'شروق الشمس الساحر بأكفاي، رياض بمراكش، حمام تقليدي ومساج',
          stops: ['شروق الشمس والإفطار', 'وسط مراكش', 'رياض فاخر', 'حمام مغربي ومساج', 'يوم استرخاء حر']
        }
      ]
    },
    {
      id: 'circuit-3',
      name: 'الرحلة 3: "بين البحر والبر": الصويرة، تغازوت، أكادير وقصبات ورزازات',
      duration: '4 أيام / 3 ليالٍ',
      pace: 'نسيم المحيط، تضامن إنساني وقلاع سينمائية',
      badge: 'الرحلة 3 • بين البحر والبر',
      priceNote: 'السعر حسب الطلب',
      summary: 'التوازن المثالي بين أمواج الأطلسي الشامخة وأسرار الجنوب المغربي. اكتشفوا مدينة الصويرة وركوب الخيل على شاطئ البحر وقت الغروب، وأجواء ركوب الأمواج بتغازوت، ويوم تضامني لزيارة تعاونيات الأركان بأكادير وحضور العرض، ثم عبور الجبال نحو استوديوهات السينما وقصبة الكلاوي بورزازات.',
      imageUrl: 'assets/taghazout-morocco.jpeg',
      transportOffer: 'النقل حسب اختياركم: مع سائق خاص رهن إشارتكم أو كراء بدون سائق (عرض سعر مخصص حسب الطلب).',
      inclusions: [
        'نقل مريح مع سائق محترف أو خيار كراء سيارة بدون سائق (حسب الطلب)',
        'زيارة تاريخية لمدينة الصويرة: الملاح القديم والأسوار التاريخية',
        'غداء سمك طازج وجولة خيل على رمال الشاطئ عند غروب الشمس',
        'مبيت مريح في الصويرة',
        'غداء مطل على المحيط في تغازوت',
        'يوم تضامني: زيارة جمعيات وتعاونيات الأركان والتجميل وحضور العرض الحرفي',
        'مبيت بأكادير',
        'زيارة استوديوهات السينما العالمية في ورزازات',
        'زيارة قصبة الكلاوي العريقة ذات الطراز المعماري الفريد',
        'مبيت بورزازات',
        'عودة عبر الأطلس إلى مراكش مع يوم حر وبرامج اختيارية'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'مراكش ← الصويرة: الأحياء التاريخية، غداء بحري وركوب الخيل عند الغروب',
          description: 'الانطلاق من مراكش نحو مدينة الصويرة (موغادور). زيارة حي الملاح التاريخي والأسوار البرتغالية. غداء سمك طازج، ثم جولة على ظهر الخيل على شاطئ المحيط لمشاهدة غروب الشمس الساحر. المبيت بالصويرة.',
          imageUrl: 'assets/tours/c3-d1-essaouira-horse.jpg',
          activityLabel: 'معالم الصويرة التاريخية وركوب الخيل على الشاطئ وقت الغروب',
          stops: ['الانطلاق من مراكش', 'مدينة الصويرة', 'حي الملاح التاريخي', 'غداء بالميناء', 'ركوب الخيل بالشاطئ', 'غروب المحيط', 'المبيت بالصويرة']
        },
        {
          dayNumber: 2,
          title: 'الصويرة ← تغازوت (غداء) ← أكادير: يوم تضامني مع تعاونيات الأركان',
          description: 'إفطار ثم انطلاق عبر الطريق الساحلي. غداء بتغازوت أمام أشهر شواطئ ركوب الأمواج. مواصلة الطريق إلى أكادير ليوم تضامني مميز: زيارة تعاونيات الأركان ومستحضرات التجميل والمشاركة في العرض الحرفي. المبيت بأكادير.',
          imageUrl: 'assets/taghazout-morocco.jpeg',
          activityLabel: 'غداء على شاطئ تغازوت وزيارة تضامنية لتعاونيات الأركان بأكادير',
          stops: ['طريق الساحل الأطلسي', 'غداء بتغازوت', 'يوم تضامني', 'تعاونيات الأركان', 'المشاركة بالعرض', 'المبيت بأكادير']
        },
        {
          dayNumber: 3,
          title: 'أكادير ← ورزازات: استوديوهات السينما وقصبة الكلاوي العريقة',
          description: 'إفطار ثم السفر نحو عاصمة السينما العالمية ورزازات. زيارة استوديوهات التصوير الشهيرة واستكشاف قصبة الكلاوي التاريخية الرائعة. عشاء ومبيت بورزازات.',
          imageUrl: 'assets/tours/c3-d3-kasbah.jpg',
          activityLabel: 'استوديوهات السينما العالمية وقصبة الكلاوي التاريخية بورزازات',
          stops: ['الطريق نحو ورزازات', 'استوديوهات السينما', 'قصبة الكلاوي العريقة', 'المبيت بورزازات']
        },
        {
          dayNumber: 4,
          title: 'ورزازات ← مراكش: ممر تيشكا ويوم حر للأنشطة الاختيارية',
          description: 'إفطار ثم العودة إلى مراكش عبر المناظر الخلابة لممر تيزي نتيشكا بالأطلس الكبير. الوصول إلى مراكش لقضاء يوم حر مع أنشطة وبرامج اختيارية حسب رغبتكم. إقامة سعيدة!',
          imageUrl: 'assets/tours/c3-d4-tizi-tichka.jpg',
          activityLabel: 'منعرجات تيزي نتيشكا البانورامية والعودة إلى مراكش',
          stops: ['ممر تيزي نتيشكا', 'الوصول لمراكش', 'يوم حر للتسوق والراحة', 'أنشطة اختيارية']
        }
      ]
    }
  ],

  es: [
    {
      id: 'circuit-1',
      name: 'Circuito 1: Cascadas de Ouzoud, Montaña Ayachi y Dunas de Merzouga',
      duration: '4 Días / 3 Noches',
      pace: 'Naturaleza Salvaje, Alto Atlas y Gran Desierto',
      badge: 'Circuito 1 • Opción N°1',
      priceNote: 'Tarifa bajo presupuesto',
      summary: 'Una gran odisea auténtica a través del Marruecos más virgen. Desde las espectaculares Cascadas de Ouzoud y un pícnic en el macizo del Jbel Ayachi, hasta la inmensidad dorada de las dunas de Merzouga con noche en jaima bereber. Regreso por las Gargantas del Todra y los estudios de cine de Ouarzazate.',
      imageUrl: 'assets/ouzoud-waterfalls.jpeg',
      transportOffer: 'Transporte a elegir: con chófer privado dedicado o sin conductor (presupuesto personalizado).',
      inclusions: [
        'Transporte a elegir: Vehículo reciente climatizado con chófer privado dedicado O sin conductor (bajo presupuesto)',
        'Recogida y regreso directo en Marrakech',
        'Almuerzo tradicional al pie de las magníficas Cascadas de Ouzoud',
        '2 Noches en hotel con encanto en Midelt con desayuno y cena',
        'Excursión y gran pícnic en plena montaña del Jbel Ayachi (Alto Atlas)',
        '1 Noche inolvidable en el desierto de Merzouga en jaima bereber tradicional',
        'Paseo en camello al atardecer sobre las dunas doradas de Erg Chebbi',
        'Almuerzo en el corazón de las imponentes Gargantas del Todra (Tinghir)',
        'Visita a los famosos estudios cinematográficos de Ouarzazate',
        'Última noche en Marrakech para culminar el viaje con total serenidad'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Salida de Marrakech → Cascadas de Ouzoud (Almuerzo) → Noche en Midelt',
          description: 'Salida temprana de Marrakech hacia Midelt pasando por las grandiosas cascadas de Ouzoud. Almuerzo tradicional bereber frente a las cascadas. Continuación por los paisajes del Medio Atlas y llegada a Midelt al final de la tarde. Cena y alojamiento en Midelt.',
          imageUrl: 'assets/ouzoud-waterfalls.jpeg',
          activityLabel: 'Cascadas de Ouzoud y Almuerzo Panorámico',
          stops: ['Salida de Marrakech', 'Cascadas de Ouzoud', 'Almuerzo junto a las cascadas', 'Medio Atlas', 'Noche en Midelt']
        },
        {
          dayNumber: 2,
          title: 'Desayuno → Pícnic en la Montaña Ayachi → Midelt',
          description: 'Tras un rico desayuno, salida para una jornada de evasión montañosa con pícnic al pie del majestuoso Jbel Ayachi. Pase todo el día en plena naturaleza del Alto Atlas con aire puro. Regreso por la tarde para dormir en Midelt.',
          imageUrl: 'assets/tours/c1-d2-ayachi.jpg',
          activityLabel: 'Pícnic Exclusivo en la Montaña Jbel Ayachi',
          stops: ['Desayuno en el hotel', 'Excursión pícnic Jbel Ayachi', 'Día completo en alta montaña', 'Naturaleza virgen del Atlas', 'Noche en Midelt']
        },
        {
          dayNumber: 3,
          title: 'Midelt → Desierto de Merzouga: Atardecer en Camello y Jaima Bereber',
          description: 'Desayuno en Midelt y viaje al desierto del Sahara en Merzouga a lo largo de las gargantas y palmerales del Ziz. Llegada a las dunas de Erg Chebbi: caravana de camellos para ver la puesta de sol. Cena tradicional y noche mágica en jaima bereber.',
          imageUrl: 'assets/merzouga-dunes.jpeg',
          activityLabel: 'Paseo en Dromedario y Noche Estrellada en Merzouga',
          stops: ['Valle del Ziz y palmerales', 'Desierto de Merzouga', 'Atardecer en dromedario', 'Noche en jaima bereber']
        },
        {
          dayNumber: 4,
          title: 'Merzouga → Gargantas del Todra (Almuerzo) → Estudios de Ouarzazate → Marrakech',
          description: 'Desayuno en el desierto y rumbo a Marrakech. Almuerzo dentro de las verticales Gargantas del Todra en Tinghir. Parada en Ouarzazate para visitar los estudios de cine. Cruce del Alto Atlas por el paso de Tizi n\'Tichka y llegada a Marrakech. ¡Feliz estancia!',
          imageUrl: 'assets/tours/c1-d4-todra.jpg',
          activityLabel: 'Gargantas del Todra y Estudios de Cine de Ouarzazate',
          stops: ['Gargantas del Todra', 'Almuerzo en las gargantas', 'Estudios de Cine Ouarzazate', 'Paso de Tichka', 'Noche en Marrakech']
        }
      ]
    },
    {
      id: 'circuit-2',
      name: 'Circuito 2: "Puro Placer": Marrakech, Montañas de Asni y Noche VIP en Agafay',
      duration: '3 Días / 2 Noches',
      pace: 'Relax, Bienestar, Actividades y Fiesta',
      badge: 'Circuito "Puro Placer"',
      priceNote: 'Tarifa bajo presupuesto',
      summary: 'Una escapada de ensueño diseñada para descansar y celebrar. Comience con la calma de las montañas de Asni, siga con un día festivo en el desierto de Agafay (piscina panorámica, almuerzo, 1h de actividad a elegir: camello, quad o buggy, puesta de sol y gran cena con bailarina oriental y tragafuegos bajo jaima de lujo), y termine en un riad tradicional en el centro de Marrakech con hammam y masaje.',
      imageUrl: 'assets/star-lit-nights.jpeg',
      transportOffer: 'Transporte a elegir: con chófer privado dedicado o sin conductor (presupuesto personalizado).',
      inclusions: [
        'Transporte privado climatizado con chófer a disposición O vehículo sin conductor (bajo presupuesto)',
        '1 Noche revitalizante en plena montaña del Atlas en Asni',
        'Acceso a piscina en el desierto de Agafay y delicioso almuerzo',
        '1 Hora de actividad a elegir: Paseo en Camello, Safari en Quad o Buggy',
        'Puesta de sol mágica sobre los cañones de piedra de Agafay',
        'Cena con gran espectáculo: Bailarina oriental, tragafuegos y música en vivo',
        'Noche en jaimas de lujo en el desierto de Agafay',
        'Amanecer en el desierto y desayuno gourmet nómada',
        'Alojamiento en riad con encanto en el centro de Marrakech',
        'Día libre con sesión relajante de Hammam tradicional marroquí y masaje'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Salida de Marrakech → Moulay Brahim → Montañas de Asni',
          description: 'Salida de Marrakech tras el desayuno hacia Moulay Brahim y las estribaciones del Atlas. Llegada al valle de Asni. Cena tradicional y noche tranquila en plena montaña del Atlas.',
          imageUrl: 'assets/atlas-mountains-villages.jpeg',
          activityLabel: 'Valle del Alto Atlas y Descanso en las Montañas de Asni',
          stops: ['Centro de Marrakech', 'Moulay Brahim', 'Alto Atlas', 'Noche en la montaña de Asni']
        },
        {
          dayNumber: 2,
          title: 'Asni → Desierto de Agafay: Piscina, Actividades, Cena Espectáculo y Jaima de Lujo',
          description: 'Desayuno frente a las cumbres y salida hacia el desierto mineral de Agafay. Disfrute de la piscina panorámica y de un sabroso almuerzo. 1 hora de actividad a elegir (camello, quad o buggy) al atardecer. Cena con bailarina del vientre y tragafuegos. Noche en jaimas de lujo.',
          imageUrl: 'assets/tours/c2-d2-agafay.jpg',
          activityLabel: 'Piscina en Agafay, Safari Quad/Buggy y Cena Espectáculo de Fuego',
          stops: ['Piscina en el desierto', 'Almuerzo en Agafay', '1h Actividad (Camello/Quad/Buggy)', 'Puesta de sol', 'Cena espectáculo y fuego', 'Noche en jaima de lujo']
        },
        {
          dayNumber: 3,
          title: 'Agafay (Amanecer) → Riad en Marrakech: Día Libre, Hammam y Masaje',
          description: 'Amanecer sobre los cañones de Agafay, desayuno y regreso a Marrakech. Alojamiento en riad tradicional en el corazón de la medina. Día libre con ritual de bienestar: hammam y masaje relajante. ¡Feliz estancia!',
          imageUrl: 'assets/tours/c2-d3-hammam.jpg',
          activityLabel: 'Amanecer en Agafay, Riad en Marrakech, Hammam y Masaje Relajante',
          stops: ['Amanecer y desayuno', 'Salida de Agafay', 'Llegada a Marrakech', 'Riad con encanto', 'Día libre con hammam y masaje']
        }
      ]
    },
    {
      id: 'circuit-3',
      name: 'Circuito 3: "Circuito Mar y Tierra": Essaouira, Taghazout, Agadir y Kasbahs de Ouarzazate',
      duration: '4 Días / 3 Noches',
      pace: 'Costa Oceánica, Cultura Solidaria y Kasbahs',
      badge: 'Circuito Mar - Tierra',
      priceNote: 'Tarifa bajo presupuesto',
      summary: 'El equilibrio perfecto entre las olas del Atlántico y el misterio del Sur marroquí. Descubra Essaouira con paseo a caballo por la playa al atardecer, el ambiente surfero de Taghazout, una jornada solidaria visitando cooperativas de argán en Agadir con demostración artesanal, y cruce las montañas hacia los estudios de cine y la histórica Kasbah de Glaoui en Ouarzazate.',
      imageUrl: 'assets/taghazout-morocco.jpeg',
      transportOffer: 'Transporte a elegir: con chófer profesional a su disposición o sin conductor (presupuesto personalizado).',
      inclusions: [
        'Transporte a elegir: con chófer dedicado O alquiler de vehículo sin conductor (bajo presupuesto)',
        'Visita de Essaouira: barrio judío antiguo (Mellah) y murallas históricas',
        'Almuerzo de pescado fresco en el puerto y paseo a caballo por la playa al atardecer',
        '1 Noche con encanto en Essaouira',
        'Almuerzo frente al mar en el pueblo costero de Taghazout',
        'Jornada de solidaridad: visita a cooperativas de argán y cosmética con show artesanal',
        '1 Noche en Agadir',
        'Visita a los estudios cinematográficos internacionales de Ouarzazate',
        'Descubrimiento de la prestigiosa y antigua Kasbah de Glaoui',
        '1 Noche en Ouarzazate',
        'Regreso a Marrakech con día libre para compras y programas opcionales'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Marrakech → Essaouira: Barrio Judío, Caballo al Atardecer y Noche Oceánica',
          description: 'Salida de Marrakech hacia Essaouira. Visita del Mellah y los monumentos históricos. Almuerzo tradicional marinero. Paseo a caballo por la playa mientras se oculta el sol en el océano. Noche en Essaouira.',
          imageUrl: 'assets/tours/c3-d1-essaouira-horse.jpg',
          activityLabel: 'Essaouira Histórica y Paseo a Caballo al Atardecer en la Playa',
          stops: ['Salida de Marrakech', 'Medina de Essaouira', 'Barrio judío Mellah', 'Almuerzo en el puerto', 'Paseo a caballo', 'Atardecer en el mar', 'Noche en Essaouira']
        },
        {
          dayNumber: 2,
          title: 'Essaouira → Taghazout (Almuerzo) → Agadir: Jornada Solidaria y Cooperativas',
          description: 'Desayuno y ruta panorámica por la costa hacia Agadir. Almuerzo en Taghazout frente a las olas. Continuación a Agadir para una jornada solidaria: cooperativas de argán y show de cosmética natural. Noche en Agadir.',
          imageUrl: 'assets/taghazout-morocco.jpeg',
          activityLabel: 'Costa de Taghazout y Cooperativa Solidaria de Argán en Agadir',
          stops: ['Carretera de la costa', 'Almuerzo en Taghazout', 'Jornada solidaria', 'Cooperativas de argán', 'Demostración artesanal', 'Noche en Agadir']
        },
        {
          dayNumber: 3,
          title: 'Agadir → Ouarzazate: Estudios Cinematográficos y Kasbah de Glaoui',
          description: 'Desayuno y salida hacia Ouarzazate, la capital del cine. Visita a los famosos estudios de grabación internacionales y exploración de la antigua Kasbah de Glaoui. Cena y noche en Ouarzazate.',
          imageUrl: 'assets/tours/c3-d3-kasbah.jpg',
          activityLabel: 'Estudios Internacionales de Cine y Kasbah Histórica Glaoui en Ouarzazate',
          stops: ['Rumbo a Ouarzazate', 'Estudios de cine', 'Antigua Kasbah de Glaoui', 'Noche en Ouarzazate']
        },
        {
          dayNumber: 4,
          title: 'Ouarzazate → Marrakech: Cruce del Alto Atlas y Día Libre',
          description: 'Desayuno y regreso a Marrakech a través del impresionante paso de Tizi n\'Tichka en el Alto Atlas. Llegada a Marrakech para disfrutar de un día libre con programas a su elección. ¡Feliz estancia!',
          imageUrl: 'assets/tours/c3-d4-tizi-tichka.jpg',
          activityLabel: 'Paso de Montaña Tizi n\'Tichka y Regreso a Marrakech',
          stops: ['Paso de Tizi n\'Tichka', 'Llegada a Marrakech', 'Día libre y souks', 'Programas opcionales']
        }
      ]
    }
  ],

  it: [
    {
      id: 'circuit-1',
      name: 'Circuito 1: Cascate di Ouzoud, Montagna Ayachi e Dune di Merzouga',
      duration: '4 Giorni / 3 Notti',
      pace: 'Natura Incontaminata, Alto Atlante e Grande Deserto',
      badge: 'Circuito 1 • Proposta N°1',
      priceNote: 'Tariffa su preventivo',
      summary: 'Una grande odissea autentica attraverso il Marocco più puro. Dalle spettacolari Cascate di Ouzoud al massiccio del Jbel Ayachi con picnic in alta quota, fino all\'immensità dorata delle dune di Merzouga con notte in tenda berbera. Ritorno attraverso le Gole del Todra e gli studi cinematografici di Ouarzazate.',
      imageUrl: 'assets/ouzoud-waterfalls.jpeg',
      transportOffer: 'Trasporto a scelta: con autista privato dedicato o senza conducente (preventivo personalizzato).',
      inclusions: [
        'Trasporto climatizzato con autista privato O noleggio senza conducente (su preventivo)',
        'Presa in carico diretta e ritorno a Marrakech',
        'Pranzo tipico ai piedi delle splendide Cascate di Ouzoud',
        '2 Notti in hotel di charme a Midelt con colazione e cena',
        'Escursione e picnic in alta montagna al Jbel Ayachi (Alto Atlante)',
        '1 Notte indimenticabile a Merzouga in tenda berbera tradizionale',
        'Passeggiata in dromedario al tramonto sulle dune dell\'Erg Chebbi',
        'Pranzo nel cuore delle imponenti Gole del Todra a Tinghir',
        'Visita ai famosi studi cinematografici di Ouarzazate',
        'Ultima notte a Marrakech per concludere il viaggio in serenità'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Partenza da Marrakech → Cascate di Ouzoud (Pranzo) → Notte a Midelt',
          description: 'Partenza mattutina da Marrakech verso Midelt passando per le magnifiche cascate di Ouzoud. Pranzo tradizionale berbero con vista rinfrescante. Proseguimento attraverso i paesaggi del Medio Atlante e arrivo a Midelt nel tardo pomeriggio. Cena e notte a Midelt.',
          imageUrl: 'assets/ouzoud-waterfalls.jpeg',
          activityLabel: 'Cascate di Ouzoud e Pranzo Tradizionale',
          stops: ['Partenza Marrakech', 'Cascate di Ouzoud', 'Pranzo alle cascate', 'Medio Atlante', 'Pernottamento a Midelt']
        },
        {
          dayNumber: 2,
          title: 'Colazione → Picnic in Montagna al Jbel Ayachi → Midelt',
          description: 'Dopo un\'ottima colazione, escursione in montagna con picnic ai piedi del maestoso Jbel Ayachi. Giornata all\'aria aperta e natura incontaminata dell\'Alto Atlante. Rientro a Midelt per cena e notte.',
          imageUrl: 'assets/tours/c1-d2-ayachi.jpg',
          activityLabel: 'Picnic Panoramico in Montagna al Jbel Ayachi',
          stops: ['Colazione in hotel', 'Picnic Jbel Ayachi', 'Giornata in montagna', 'Alto Atlante', 'Pernottamento a Midelt']
        },
        {
          dayNumber: 3,
          title: 'Midelt → Deserto di Merzouga: Tramonto in Dromedario e Tenda Berbera',
          description: 'Colazione a Midelt e partenza verso il Sahara di Merzouga costeggiando le spettacolari gole e palmeti dello Ziz. Arrivo alle dune dell\'Erg Chebbi: carovana di dromedari al tramonto, cena attorno al fuoco e notte magica sotto la tenda berbera.',
          imageUrl: 'assets/merzouga-dunes.jpeg',
          activityLabel: 'Carovana di Dromedari al Tramonto e Bivacco a Merzouga',
          stops: ['Valle dello Ziz', 'Deserto di Merzouga', 'Tramonto in dromedario', 'Notte in tenda berbera']
        },
        {
          dayNumber: 4,
          title: 'Merzouga → Gole del Todra (Pranzo) → Studi di Ouarzazate → Marrakech',
          description: 'Colazione nel deserto e partenza per Marrakech. Pranzo nelle ripide Gole del Todra a Tinghir. Sosta a Ouarzazate per visitare i celebri studi cinematografici. Valico dell\'Alto Atlante al Tizi n\'Tichka e arrivo a Marrakech. Buon soggiorno!',
          imageUrl: 'assets/tours/c1-d4-todra.jpg',
          activityLabel: 'Spettacolari Gole del Todra e Studi di Ouarzazate',
          stops: ['Gole del Todra', 'Pranzo nelle gole', 'Studi cinematografici Ouarzazate', 'Passo del Tichka', 'Notte a Marrakech']
        }
      ]
    },
    {
      id: 'circuit-2',
      name: 'Circuito 2: "Puro Piacere": Marrakech, Montagne di Asni e Notte VIP ad Agafay',
      duration: '3 Giorni / 2 Notti',
      pace: 'Relax, Benessere, Attività e Festa',
      badge: 'Circuito "Puro Piacere"',
      priceNote: 'Tariffa su preventivo',
      summary: 'Una parentesi incantevole per rigenerarsi e divertirsi. Iniziate dalla pace delle montagne di Asni, proseguite con una giornata speciale nel deserto di Agafay (piscina panoramica, pranzo, 1 ora di attività a scelta tra dromedario, quad o buggy, tramonto e gran cena con danzatrice orientale e mangiafuoco sotto tenda di lusso), e concludete in un riad nel centro di Marrakech con hammam e massaggio.',
      imageUrl: 'assets/star-lit-nights.jpeg',
      transportOffer: 'Trasporto a scelta: con autisti privati a disposizione o senza conducente (preventivo personalizzato).',
      inclusions: [
        'Trasporto privato climatizzato con autista O noleggio senza conducente (su preventivo)',
        '1 Notte rilassante in montagna ad Asni nell\'Alto Atlante',
        'Accesso piscina panoramica nel deserto di Agafay e pranzo al camp',
        '1 Ora di attività a scelta: Dromedario, Safari Quad o Buggy',
        'Tramonto spettacolare sui canyon rocciosi di Agafay',
        'Cena con grande spettacolo: Danzatrice orientale, mangiafuoco e musica',
        'Pernottamento in tende glamping di lusso nel deserto di Agafay',
        'Alba nel deserto e colazione gourmet',
        'Soggiorno in un riad di charme nel centro di Marrakech',
        'Giornata libera con hammam tradizionale marocchino e massaggio rilassante'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Partenza da Marrakech → Moulay Brahim → Montagne di Asni',
          description: 'Partenza mattutina da Marrakech verso Moulay Brahim e le vette dell\'Atlante. Arrivo nella verde valle di Asni. Cena tipica e pernottamento nella quiete della montagna.',
          imageUrl: 'assets/atlas-mountains-villages.jpeg',
          activityLabel: 'Vetta dell\'Alto Atlante e Notte Rilassante ad Asni',
          stops: ['Centro di Marrakech', 'Moulay Brahim', 'Alto Atlante', 'Notte in montagna ad Asni']
        },
        {
          dayNumber: 2,
          title: 'Asni → Deserto di Agafay: Piscina, Attività, Spettacolo e Tenda di Lusso',
          description: 'Colazione e partenza verso il deserto di Agafay. Relax a bordo piscina e ottimo pranzo. 1 ora di attività a scelta (dromedario, quad o buggy) al tramonto. Cena animata con danzatrice e mangiafuoco. Notte nelle tende di lusso.',
          imageUrl: 'assets/tours/c2-d2-agafay.jpg',
          activityLabel: 'Piscina nel Deserto, Quad/Buggy e Cena con Spettacolo del Fuoco ad Agafay',
          stops: ['Piscina nel deserto', 'Pranzo ad Agafay', '1h Attività (Dromedario/Quad/Buggy)', 'Tramonto', 'Cena spettacolo', 'Notte in tenda di lusso']
        },
        {
          dayNumber: 3,
          title: 'Agafay (Alba) → Riad a Marrakech: Giornata Libera, Hammam e Massaggio',
          description: 'Alba sui canyon di Agafay, colazione e rientro a Marrakech. Alloggio in splendido riad tradizionale. Giornata libera con rituale di benessere: hammam e massaggio all\'olio di argan. Buon soggiorno!',
          imageUrl: 'assets/tours/c2-d3-hammam.jpg',
          activityLabel: 'Alba ad Agafay, Riad a Marrakech, Hammam e Massaggio Benessere',
          stops: ['Alba e colazione', 'Partenza da Agafay', 'Riad a Marrakech', 'Hammam tradizionale e massaggio', 'Giornata libera']
        }
      ]
    },
    {
      id: 'circuit-3',
      name: 'Circuito 3: "Mare e Terra": Essaouira, Taghazout, Agadir e Kasbah di Ouarzazate',
      duration: '4 Giorni / 3 Notti',
      pace: 'Costa Oceanica, Cultura Solidale e Kasbah',
      badge: 'Circuito Mare - Terra',
      priceNote: 'Tariffa su preventivo',
      summary: 'Il perfetto connubio tra le onde dell\'Atlantico e il fascino del Sud marocchino. Scoprite Essaouira e la passeggiata a cavallo sulla spiaggia al tramonto, l\'atmosfera surf di Taghazout, una giornata solidale tra le cooperative di argan ad Agadir con show artigianale, e gli storici studi di cinema e l\'antica Kasbah di Glaoui a Ouarzazate.',
      imageUrl: 'assets/taghazout-morocco.jpeg',
      transportOffer: 'Trasporto a scelta: con autista dedicato o senza conducente (preventivo personalizzato).',
      inclusions: [
        'Trasporto con autista dedicato O noleggio senza conducente (su preventivo)',
        'Visita di Essaouira: antico quartiere ebraico (Mellah) e bastioni',
        'Pranzo al porto con pesce fresco e passeggiata a cavallo sulla spiaggia al tramonto',
        '1 Notte di charme a Essaouira',
        'Pranzo pieds-dans-l\'eau a Taghazout',
        'Giornata solidale: visita alle cooperative femminili di argan e cosmetici con show',
        '1 Notte ad Agadir',
        'Visita agli studi cinematografici internazionali di Ouarzazate',
        'Visita dell\'antica Kasbah di Glaoui',
        '1 Notte a Ouarzazate',
        'Ritorno a Marrakech con giornata libera per programmi facoltativi'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Marrakech → Essaouira: Quartieri Storici, Cavallo al Tramonto e Notte Oceanica',
          description: 'Partenza per Essaouira (Mogador). Visita della medina e del Mellah. Pranzo con pesce fresco. Cavalcata sulla spiaggia ammirando il tramonto sull\'oceano. Pernottamento a Essaouira.',
          imageUrl: 'assets/tours/c3-d1-essaouira-horse.jpg',
          activityLabel: 'Essaouira Storica e Passeggiata a Cavallo sulla Spiaggia al Tramonto',
          stops: ['Partenza Marrakech', 'Medina Essaouira', 'Mellah storico', 'Pranzo al porto', 'Passeggiata a cavallo', 'Tramonto sull\'oceano', 'Notte a Essaouira']
        },
        {
          dayNumber: 2,
          title: 'Essaouira → Taghazout (Pranzo) → Agadir: Giornata Solidale Argan',
          description: 'Colazione e percorso panoramico costiero verso Agadir. Pranzo a Taghazout davanti agli spot di surf. Pomeriggio dedicato alla solidarietà tra cooperative di argan. Notte ad Agadir.',
          imageUrl: 'assets/taghazout-morocco.jpeg',
          activityLabel: 'Taghazout sulla Costa e Cooperativa Solidale dell\'Argan ad Agadir',
          stops: ['Strada costiera', 'Pranzo a Taghazout', 'Giornata solidale', 'Cooperative di argan', 'Show artigianale', 'Notte ad Agadir']
        },
        {
          dayNumber: 3,
          title: 'Agadir → Ouarzazate: Studi Cinematografici e Kasbah di Glaoui',
          description: 'Colazione e viaggio verso la capitale del cinema Ouarzazate. Visita ai teatri di posa di fama mondiale e alla maestosa Kasbah di Glaoui. Cena e notte a Ouarzazate.',
          imageUrl: 'assets/tours/c3-d3-kasbah.jpg',
          activityLabel: 'Studi Cinematografici Internazionali e Kasbah di Glaoui a Ouarzazate',
          stops: ['Verso Ouarzazate', 'Studi cinematografici', 'Antica Kasbah di Glaoui', 'Notte a Ouarzazate']
        },
        {
          dayNumber: 4,
          title: 'Ouarzazate → Marrakech: Alto Atlante e Giornata Libera',
          description: 'Colazione e rientro a Marrakech attraversando il suggestivo passo del Tizi n\'Tichka nell\'Alto Atlante. Giornata libera a Marrakech per souk e relax. Buon soggiorno!',
          imageUrl: 'assets/tours/c3-d4-tizi-tichka.jpg',
          activityLabel: 'Passo Panoramico del Tizi n\'Tichka e Rientro a Marrakech',
          stops: ['Valico Tizi n\'Tichka', 'Arrivo a Marrakech', 'Giornata libera e souk', 'Attività facoltative']
        }
      ]
    }
  ],

  de: [
    {
      id: 'circuit-1',
      name: 'Rundreise 1: Ouzoud-Wasserfälle, Ayachi-Gebirge & Merzouga-Dünen',
      duration: '4 Tage / 3 Nächte',
      pace: 'Wilde Natur, Hoher Atlas & Große Sahara',
      badge: 'Rundreise 1 • Bestseller',
      priceNote: 'Preis auf Anfrage',
      summary: 'Eine authentische Odyssee durch das unberührte Marokko. Von den spektakulären Ouzoud-Wasserfällen und einem Hochgebirgspicknick am Jbel Ayachi bis zu den goldenen Dünen von Merzouga mit Nacht im Berberzelt. Rückkehr über die Todra-Schluchten und Filmstudios von Ouarzazate.',
      imageUrl: 'assets/ouzoud-waterfalls.jpeg',
      transportOffer: 'Transport nach Wahl: mit privatem Chauffeur oder Mietwagen ohne Fahrer (auf Anfrage).',
      inclusions: [
        'Klimatisiertes Fahrzeug mit Chauffeur ODER Mietwagen ohne Fahrer (auf Anfrage)',
        'Direkte Abholung und Rückfahrt in Marrakesch',
        'Traditionelles Mittagessen am Fuße der Ouzoud-Wasserfälle',
        '2 Nächte im Boutique-Hotel in Midelt mit Frühstück und Abendessen',
        'Berg-Exkursion mit großem Picknick am Jbel Ayachi (Hoher Atlas)',
        '1 Unvergessliche Nacht in der Wüste von Merzouga im authentischen Berberzelt',
        'Kamelritt in den Sonnenuntergang auf den goldenen Dünen des Erg Chebbi',
        'Mittagessen in der imposanten Todra-Schlucht bei Tinghir',
        'Besuch der weltberühmten Filmstudios in Ouarzazate',
        'Letzte Übernachtung in Marrakesch für einen entspannten Ausklang'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Marrakesch → Ouzoud-Wasserfälle (Mittagessen) → Übernachtung Midelt',
          description: 'Frühmorgendliche Abfahrt von Marrakesch über die gigantischen Ouzoud-Wasserfälle. Berber-Mittagessen mit erfrischender Aussicht. Fahrt durch das Mittlere Atlasgebirge nach Midelt. Abendessen und Übernachtung.',
          imageUrl: 'assets/ouzoud-waterfalls.jpeg',
          activityLabel: 'Ouzoud-Wasserfälle & Berber-Mittagessen',
          stops: ['Abfahrt Marrakesch', 'Ouzoud-Wasserfälle', 'Mittagessen', 'Mittlerer Atlas', 'Übernachtung Midelt']
        },
        {
          dayNumber: 2,
          title: 'Frühstück → Picknick-Ausflug am Jbel Ayachi → Midelt',
          description: 'Nach einem reichhaltigen Frühstück unternehmen Sie einen ganztägigen Naturausflug mit Picknick am Fuße des mächtigen Jbel Ayachi. Reine Bergluft und unberührte Natur. Rückfahrt nach Midelt zur Übernachtung.',
          imageUrl: 'assets/tours/c1-d2-ayachi.jpg',
          activityLabel: 'Exklusives Berg-Picknick am Jbel Ayachi',
          stops: ['Hotel-Frühstück', 'Picknick-Exkursion Jbel Ayachi', 'Ganzer Tag in den Bergen', 'Hoher Atlas', 'Übernachtung Midelt']
        },
        {
          dayNumber: 3,
          title: 'Midelt → Wüste Merzouga: Kamelritt & Nacht im Berberzelt',
          description: 'Frühstück in Midelt und Fahrt zur Sahara von Merzouga entlang des Ziz-Tals und der Oasen. Ankunft an den Erg-Chebbi-Dünen: Kamelkarawane zum Sonnenuntergang, Festmahl am Lagerfeuer und Nacht im Berberzelt.',
          imageUrl: 'assets/merzouga-dunes.jpeg',
          activityLabel: 'Kamel-Sonnenuntergang & Nacht im Beduinenzelt Merzouga',
          stops: ['Ziz-Tal & Oasen', 'Merzouga-Wüste', 'Sonnenuntergang auf Kamelen', 'Nacht im Berberzelt']
        },
        {
          dayNumber: 4,
          title: 'Merzouga → Todra-Schlucht (Mittagessen) → Filmstudios Ouarzazate → Marrakesch',
          description: 'Wüstenfrühstück und Fahrt Richtung Marrakesch. Mittagessen in der steilen Todra-Schlucht bei Tinghir. Stopp in Ouarzazate zur Besichtigung der Hollywood-Filmstudios. Überquerung des Tizi n\'Tichka-Passes nach Marrakesch. Schöne Reise!',
          imageUrl: 'assets/tours/c1-d4-todra.jpg',
          activityLabel: 'Todra-Schlucht & Filmstudios in Ouarzazate',
          stops: ['Todra-Schlucht', 'Mittagessen in der Schlucht', 'Filmstudios Ouarzazate', 'Tichka-Pass', 'Übernachtung Marrakesch']
        }
      ]
    },
    {
      id: 'circuit-2',
      name: 'Rundreise 2: „Purer Genuss“: Marrakesch, Asni-Berge & VIP-Nacht in Agafay',
      duration: '3 Tage / 2 Nächte',
      pace: 'Erholung, Wellness, Aktivitäten & Feier',
      badge: 'Rundreise „Purer Genuss“',
      priceNote: 'Preis auf Anfrage',
      summary: 'Eine zauberhafte Reise zum Entspannen und Genießen. Starten Sie in der Ruhe der Asni-Berge, erleben Sie einen erlebnisreichen Tag in der Agafay-Steinwüste (Panorama-Pool, Mittagessen, 1h Aktivität nach Wahl: Kamel, Quad oder Buggy, Sonnenuntergang und Fest-Dinner mit Bauchtänzerin und Feuerspucker unter Luxuszelten) und entspannen Sie in einem Riad in Marrakesch mit traditionellem Hammam und Massage.',
      imageUrl: 'assets/star-lit-nights.jpeg',
      transportOffer: 'Transport nach Wahl: mit privatem Chauffeur oder Mietwagen ohne Fahrer (auf Anfrage).',
      inclusions: [
        'Klimatisierter Privatwagen mit Fahrer ODER Mietwagen ohne Fahrer (auf Anfrage)',
        '1 Erholsame Nacht in den Bergen des Hohen Atlas in Asni',
        'Panorama-Pool im Agafay-Wüstencamp & exquisites Mittagessen',
        '1 Stunde Aktivität nach Wahl: Kamelritt, Quad-Safari oder Buggy',
        'Spektakulärer Sonnenuntergang über den Steinhügeln von Agafay',
        'Abenddinner mit Show: Orientalische Bauchtänzerin, Feuerspucker & Live-Musik',
        '1 Übernachtung in luxuriösen Glamping-Zelten in Agafay',
        'Sonnenaufgang in der Wüste & Nomaden-Frühstück',
        'Unterkunft in einem traditionellen Riad im Zentrum von Marrakesch',
        'Freier Tag mit wohltuender marokkanischer Hammam- und Massagebehandlung'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Marrakesch Zentrum / Abfahrt am Morgen → Moulay Brahim → Asni-Berge',
          description: 'Morgendliche Abfahrt von Marrakesch nach Moulay Brahim und in die Ausläufer des Hohen Atlas. Fahrt in das grüne Asni-Tal. Traditionelles Abendessen und Übernachtung in den ruhigen Bergen.',
          imageUrl: 'assets/atlas-mountains-villages.jpeg',
          activityLabel: 'Hoher Atlas & Erholsamer Bergaufenthalt in Asni',
          stops: ['Marrakesch Zentrum', 'Moulay Brahim', 'Hoher Atlas', 'Übernachtung in den Asni-Bergen']
        },
        {
          dayNumber: 2,
          title: 'Asni → Wüste Agafay: Pool, Aktivitäten, Dinnershow & Luxuszelt',
          description: 'Frühstück mit Blick auf die Berggipfel und Fahrt in die Agafay-Wüste. Entspannung am Pool und Mittagessen. 1 Stunde Aktivität (Kamel, Quad oder Buggy) zum Sonnenuntergang. Show-Dinner und Nacht im Luxuszelt.',
          imageUrl: 'assets/tours/c2-d2-agafay.jpg',
          activityLabel: 'Wüstenpool, Quad/Buggy & Feuershow-Dinner in Agafay',
          stops: ['Wüstenpool Agafay', 'Mittagessen', '1h Aktivität (Kamel/Quad/Buggy)', 'Sonnenuntergang', 'Feuershow & Dinner', 'Übernachtung im Luxuszelt']
        },
        {
          dayNumber: 3,
          title: 'Agafay (Sonnenaufgang) → Riad Marrakesch: Freier Tag, Hammam & Massage',
          description: 'Sonnenaufgang über den Canyons von Agafay, Frühstück und Fahrt nach Marrakesch. Bezug eines stilvollen Riads. Freier Tag mit Wellness-Ritual: marokkanisches Hammam und Massage. Schöne Reise!',
          imageUrl: 'assets/tours/c2-d3-hammam.jpg',
          activityLabel: 'Agafay-Sonnenaufgang, Marrakesch-Riad, Hammam & Wellnessmassage',
          stops: ['Sonnenaufgang & Frühstück', 'Abfahrt Agafay', 'Riad Marrakesch', 'Hammam & Massage', 'Freier Tag']
        }
      ]
    },
    {
      id: 'circuit-3',
      name: 'Rundreise 3: „Meer & Wüste“: Essaouira, Taghazout, Agadir & Kasbahs von Ouarzazate',
      duration: '4 Tage / 3 Nächte',
      pace: 'Atlantikküste, Kultur & Historische Kasbahs',
      badge: 'Rundreise Meer - Land',
      priceNote: 'Preis auf Anfrage',
      summary: 'Die perfekte Harmonie zwischen den Wellen des Atlantiks und den Geheimnissen Südmarokkos. Entdecken Sie Essaouira mit Strandausritt im Sonnenuntergang, das Surferflair von Taghazout, einen Tag bei Argan-Kooperativen in Agadir und die Filmstudios sowie die historische Glaoui-Kasbah in Ouarzazate.',
      imageUrl: 'assets/taghazout-morocco.jpeg',
      transportOffer: 'Transport nach Wahl: mit privatem Fahrer oder Mietwagen ohne Fahrer (auf Anfrage).',
      inclusions: [
        'Transport nach Wahl: mit Chauffeur ODER Mietwagen ohne Fahrer (auf Anfrage)',
        'Stadtführung in Essaouira: Altes jüdisches Viertel (Mellah) & Festungsmauern',
        'Frisches Fischessen am Hafen & Strandausritt zu Pferde bei Sonnenuntergang',
        '1 Charmante Übernachtung in Essaouira',
        'Mittagessen am Meer im Surferdorf Taghazout',
        'Besuch von Frauen-Kooperativen für Arganöl & Kosmetik mit Handwerksvorführung',
        '1 Übernachtung in Agadir',
        'Führung durch internationale Filmstudios in Ouarzazate',
        'Besichtigung der alten Glaoui-Kasbah',
        '1 Übernachtung in Ouarzazate',
        'Rückfahrt nach Marrakesch über den Hohen Atlas mit freier Zeit für Souks'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Marrakesch → Essaouira: Jüdisches Viertel, Reiten am Strand & Nacht am Meer',
          description: 'Fahrt zur Atlantikperle Essaouira. Besichtigung des Mellah und der Festungsanlagen. Fischessen am Hafen. Galopp oder Spazierritt am Strand bei Sonnenuntergang. Übernachtung in Essaouira.',
          imageUrl: 'assets/tours/c3-d1-essaouira-horse.jpg',
          activityLabel: 'Historisches Essaouira & Strandausritt zum Sonnenuntergang',
          stops: ['Abfahrt Marrakesch', 'Medina Essaouira', 'Jüdisches Mellah', 'Hafen-Mittagessen', 'Reiten am Strand', 'Sonnenuntergang am Meer', 'Nacht in Essaouira']
        },
        {
          dayNumber: 2,
          title: 'Essaouira → Taghazout (Mittagessen) → Agadir: Argan-Kooperativen',
          description: 'Küstenfahrt nach Taghazout zum Mittagessen am Meer. Weiterfahrt nach Agadir zum Besuch von Frauen-Arganölkooperativen mit Vorführung traditioneller Herstellung. Übernachtung in Agadir.',
          imageUrl: 'assets/taghazout-morocco.jpeg',
          activityLabel: 'Taghazout Ozeanblick & Argan-Frauenkooperative in Agadir',
          stops: ['Atlantikküstenstraße', 'Mittagessen Taghazout', 'Solidaritätstag', 'Argan-Kooperativen', 'Handwerks-Show', 'Übernachtung Agadir']
        },
        {
          dayNumber: 3,
          title: 'Agadir → Ouarzazate: Filmstudios & Historische Glaoui-Kasbah',
          description: 'Fahrt nach Ouarzazate, Marokkos Filmhauptstadt. Besichtigung berühmter Filmstudios und der historischen Glaoui-Kasbah. Abendessen und Übernachtung in Ouarzazate.',
          imageUrl: 'assets/tours/c3-d3-kasbah.jpg',
          activityLabel: 'Internationale Filmstudios & Kasbah von Glaoui in Ouarzazate',
          stops: ['Fahrt nach Ouarzazate', 'Internationale Filmstudios', 'Glaoui-Kasbah', 'Übernachtung Ouarzazate']
        },
        {
          dayNumber: 4,
          title: 'Ouarzazate → Marrakesch: Hoher Atlas & Freier Tag für Souks',
          description: 'Rückfahrt über den spektakulären Tizi n\'Tichka-Pass im Hohen Atlas nach Marrakesch. Zeit zur freien Verfügung für Einkäufe in den Souks. Schöne Reise!',
          imageUrl: 'assets/tours/c3-d4-tizi-tichka.jpg',
          activityLabel: 'Spektakulärer Tizi n\'Tichka-Pass & Rückfahrt nach Marrakesch',
          stops: ['Tizi n\'Tichka-Pass', 'Ankunft Marrakesch', 'Freie Zeit & Souks', 'Optionale Ausflüge']
        }
      ]
    }
  ],

  pt: [
    {
      id: 'circuit-1',
      name: 'Circuito 1: Cascatas de Ouzoud, Montanha Ayachi e Dunas de Merzouga',
      duration: '4 Dias / 3 Noites',
      pace: 'Natureza Selvagem, Alto Atlas e Grande Deserto',
      badge: 'Circuito 1 • Opção N°1',
      priceNote: 'Preço sob orçamento',
      summary: 'Uma autêntica odisseia pelo Marrocos preservado. Das espetaculares Cascatas de Ouzoud e piquenique de montanha no maciço do Jbel Ayachi até à imensidão dourada das dunas de Merzouga com noite em tenda berbere. Regresso pelas Gargantas do Todra e estúdios de cinema de Ouarzazate.',
      imageUrl: 'assets/ouzoud-waterfalls.jpeg',
      transportOffer: 'Transporte à escolha: com motorista privado dedicado ou sem motorista (orçamento personalizado).',
      inclusions: [
        'Transporte recente climatizado com motorista dedicado OU sem motorista (sob orçamento)',
        'Recolha e regresso direto em Marraquexe',
        'Almoço tradicional aos pés das magníficas Cascatas de Ouzoud',
        '2 Noites em hotel de charme em Midelt com pequeno-almoço e jantar',
        'Excursão com grande piquenique de montanha no Jbel Ayachi (Alto Atlas)',
        '1 Noite inesquecível no deserto de Merzouga em tenda berbere tradicional',
        'Passeio de camelo ao pôr do sol sobre as dunas douradas de Erg Chebbi',
        'Almoço no coração das imponentes Gargantas do Todra em Tinghir',
        'Visita aos estúdios de cinema de renome em Ouarzazate',
        'Última noite em Marraquexe para concluir a estadia com toda a serenidade'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Partida de Marraquexe → Cascatas de Ouzoud (Almoço) → Noite em Midelt',
          description: 'Partida matinal de Marraquexe em direção a Midelt passando pelas grandiosas cascatas de Ouzoud. Almoço berbere em frente às cascatas. Travessia do Médio Atlas e chegada a Midelt ao final da tarde. Jantar e pernoite em Midelt.',
          imageUrl: 'assets/ouzoud-waterfalls.jpeg',
          activityLabel: 'Cascatas de Ouzoud & Almoço Típico',
          stops: ['Partida Marraquexe', 'Cascatas de Ouzoud', 'Almoço nas cascatas', 'Médio Atlas', 'Noite em Midelt']
        },
        {
          dayNumber: 2,
          title: 'Pequeno-almoço → Piquenique na Montanha Ayachi → Midelt',
          description: 'Após o pequeno-almoço, excursão à montanha com piquenique aos pés do imponente Jbel Ayachi. Dia em plena natureza pura do Alto Atlas. Regresso a Midelt para jantar e dormir.',
          imageUrl: 'assets/tours/c1-d2-ayachi.jpg',
          activityLabel: 'Piquenique nas Alturas da Montanha Jbel Ayachi',
          stops: ['Pequeno-almoço no hotel', 'Excursão piquenique Jbel Ayachi', 'Dia em alta montanha', 'Alto Atlas puro', 'Noite em Midelt']
        },
        {
          dayNumber: 3,
          title: 'Midelt → Deserto de Merzouga: Pôr do Sol de Camelo e Tenda Berbere',
          description: 'Partida para o deserto do Saara em Merzouga ao longo das gargantas e palmeirais do Ziz. Chegada às dunas de Erg Chebbi: caravana de camelos ao pôr do sol, jantar ao redor da fogueira e noite mágica em tenda berbere.',
          imageUrl: 'assets/merzouga-dunes.jpeg',
          activityLabel: 'Passeio de Dromedário ao Pôr do Sol e Noite em Merzouga',
          stops: ['Vale do Ziz', 'Deserto de Merzouga', 'Pôr do sol de camelo', 'Noite em tenda berbere']
        },
        {
          dayNumber: 4,
          title: 'Merzouga → Gargantas do Todra (Almoço) → Estúdios de Ouarzazate → Marraquexe',
          description: 'Pequeno-almoço no deserto e viagem rumo a Marraquexe. Almoço nas impressionantes Gargantas do Todra em Tinghir. Paragem em Ouarzazate para visitar os estúdios de cinema. Travessia do Alto Atlas pelo passo Tizi n\'Tichka e chegada a Marraquexe. Boa viagem!',
          imageUrl: 'assets/tours/c1-d4-todra.jpg',
          activityLabel: 'Gargantas de Todra & Estúdios de Cinema de Ouarzazate',
          stops: ['Gargantas do Todra', 'Almoço nas gargantas', 'Estúdios de Cinema Ouarzazate', 'Passo Tichka', 'Noite em Marraquexe']
        }
      ]
    },
    {
      id: 'circuit-2',
      name: 'Circuito 2: "Puro Prazer": Marraquexe, Montanhas de Asni e Noite VIP em Agafay',
      duration: '3 Dias / 2 Noites',
      pace: 'Relaxamento, Bem-Estar, Atividades e Festa',
      badge: 'Circuito "Puro Prazer"',
      priceNote: 'Preço sob orçamento',
      summary: 'Uma pausa encantadora para relaxar e celebrar. Comece pela tranquilidade das montanhas de Asni, continue com um dia festivo no deserto de Agafay (piscina panorâmica, almoço, 1h de atividade à escolha: camelo, moto-quatro ou buggy, pôr do sol e grande jantar com dançarina oriental e cuspideiro de fogo sob tenda de luxo) e termine num riad no centro de Marraquexe com hammam e massagem.',
      imageUrl: 'assets/star-lit-nights.jpeg',
      transportOffer: 'Transporte à escolha: com motorista privado dedicado ou sem motorista (orçamento personalizado).',
      inclusions: [
        'Transporte privado climatizado com motorista OU aluguer sem motorista (sob orçamento)',
        '1 Noite repousante em plena montanha do Atlas em Asni',
        'Acesso a piscina panorâmica no deserto de Agafay e almoço requintado',
        '1 Hora de atividade à escolha: Camelo, Moto-quatro ou Buggy',
        'Pôr do sol mágico sobre as colinas minerais de Agafay',
        'Jantar com espetáculo: Dançarina oriental, cuspideiro de fogo e música ao vivo',
        '1 Noite em tendas glamping de luxo no deserto de Agafay',
        'Nascer do sol no deserto e pequeno-almoço nómada',
        'Alojamento em riad tradicional de charme no centro de Marraquexe',
        'Dia livre com sessão relaxante de Hammam tradicional e massagem com óleo de argão'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Partida de Marraquexe → Moulay Brahim → Montanhas de Asni',
          description: 'Partida matinal de Marraquexe rumo a Moulay Brahim e aos contrafortes do Atlas. Chegada ao vale verdejante de Asni. Jantar tradicional e pernoite na serenidade da montanha.',
          imageUrl: 'assets/atlas-mountains-villages.jpeg',
          activityLabel: 'Encostas do Alto Atlas e Serenidade em Asni',
          stops: ['Centro de Marraquexe', 'Moulay Brahim', 'Alto Atlas', 'Noite na montanha de Asni']
        },
        {
          dayNumber: 2,
          title: 'Asni → Deserto de Agafay: Piscina, Atividades, Jantar Espetáculo e Tenda de Luxo',
          description: 'Pequeno-almoço e partida para o deserto mineral de Agafay. Relaxe junto à piscina e desfrute de um almoço saboroso. 1 hora de atividade (camelo, moto-quatro ou buggy) ao entardecer. Jantar animado e noite sob tendas de luxo.',
          imageUrl: 'assets/tours/c2-d2-agafay.jpg',
          activityLabel: 'Piscina no Deserto de Agafay, Quad/Buggy e Espetáculo de Fogo',
          stops: ['Piscina no deserto', 'Almoço em Agafay', '1h Atividade (Camelo/Moto-quatro/Buggy)', 'Pôr do sol', 'Jantar espetáculo e fogo', 'Noite em tenda de luxo']
        },
        {
          dayNumber: 3,
          title: 'Agafay (Nascer do Sol) → Riad em Marraquexe: Dia Livre, Hammam e Massagem',
          description: 'Nascer do sol sobre os desfiladeiros de Agafay, pequeno-almoço e regresso a Marraquexe. Instalação num riad tradicional. Dia livre de bem-estar com hammam marroquino e massagem relaxante. Boa viagem!',
          imageUrl: 'assets/tours/c2-d3-hammam.jpg',
          activityLabel: 'Amanhecer em Agafay, Riad em Marraquexe, Banho Turco e Massagem',
          stops: ['Nascer do sol e pequeno-almoço', 'Partida de Agafay', 'Riad em Marraquexe', 'Hammam tradicional e massagem', 'Dia livre']
        }
      ]
    },
    {
      id: 'circuit-3',
      name: 'Circuito 3: "Circuito Mar e Terra": Essaouira, Taghazout, Agadir e Kasbahs de Ouarzazate',
      duration: '4 Dias / 3 Noites',
      pace: 'Costa Oceânica, Cultura Solidária e Kasbahs',
      badge: 'Circuito Mar - Terra',
      priceNote: 'Preço sob orçamento',
      summary: 'A harmonia perfeita entre as ondas do Atlântico e a magia do Sul marroquino. Descubra Essaouira com passeio a cavalo na praia ao pôr do sol, o ambiente de Taghazout, uma jornada solidária em cooperativas de argão em Agadir e os estúdios de cinema e a histórica Kasbah de Glaoui em Ouarzazate.',
      imageUrl: 'assets/taghazout-morocco.jpeg',
      transportOffer: 'Transporte à escolha: com motorista privado dedicado ou sem motorista (orçamento personalizado).',
      inclusions: [
        'Transporte com motorista dedicado OU viatura sem motorista (sob orçamento)',
        'Visita a Essaouira: antigo bairro judeu (Mellah) e muralhas históricas',
        'Almoço de peixe fresco no porto e passeio a cavalo na praia ao pôr do sol',
        '1 Noite de charme em Essaouira',
        'Almoço à beira-mar na vila costeira de Taghazout',
        'Jornada de solidariedade: visita a cooperativas femininas de argão e cosméticos com demonstração',
        '1 Noite em Agadir',
        'Visita aos estúdios de cinema internacionais de Ouarzazate',
        'Visita à prestigiada e histórica Kasbah de Glaoui',
        '1 Noite em Ouarzazate',
        'Regresso a Marraquexe com dia livre para compras e passeios opcionais'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Marraquexe → Essaouira: Bairros Históricos, Cavalo na Praia e Noite Oceânica',
          description: 'Partida para Essaouira (Mogador). Visita da medina e do Mellah. Almoço de peixe fresco. Passeio a cavalo na praia ao pôr do sol sobre o oceano. Noite em Essaouira.',
          imageUrl: 'assets/tours/c3-d1-essaouira-horse.jpg',
          activityLabel: 'Mellah de Essaouira e Passeio a Cavalo na Praia ao Pôr do Sol',
          stops: ['Partida Marraquexe', 'Medina de Essaouira', 'Mellah judeu', 'Almoço no porto', 'Passeio a cavalo', 'Pôr do sol oceânico', 'Noite em Essaouira']
        },
        {
          dayNumber: 2,
          title: 'Essaouira → Taghazout (Almoço) → Agadir: Cooperativas de Argão e Solidariedade',
          description: 'Percurso panorâmico ao longo da costa. Almoço em Taghazout de frente para o mar. Continuação até Agadir para visita a cooperativas de argão e demonstração artesanal. Noite em Agadir.',
          imageUrl: 'assets/taghazout-morocco.jpeg',
          activityLabel: 'Oceano de Taghazout e Cooperativa Solidária de Argão em Agadir',
          stops: ['Estrada da costa', 'Almoço em Taghazout', 'Jornada solidária', 'Cooperativas de argão', 'Demonstração artesanal', 'Noite em Agadir']
        },
        {
          dayNumber: 3,
          title: 'Agadir → Ouarzazate: Estúdios de Cinema e Kasbah de Glaoui',
          description: 'Partida em direção a Ouarzazate, a capital do cinema em Marrocos. Visita aos estúdios internacionais de filmagem e à imponente Kasbah de Glaoui. Jantar e noite em Ouarzazate.',
          imageUrl: 'assets/tours/c3-d3-kasbah.jpg',
          activityLabel: 'Estúdios de Cinema Internacionais e Kasbah de Glaoui em Ouarzazate',
          stops: ['Rumo a Ouarzazate', 'Estúdios de cinema', 'Antiga Kasbah de Glaoui', 'Noite em Ouarzazate']
        },
        {
          dayNumber: 4,
          title: 'Ouarzazate → Marraquexe: Alto Atlas e Dia Livre',
          description: 'Regresso a Marraquexe através do imponente passo de Tizi n\'Tichka no Alto Atlas. Dia livre em Marraquexe para passear pelos souks e relaxar. Boa viagem!',
          imageUrl: 'assets/tours/c3-d4-tizi-tichka.jpg',
          activityLabel: 'Passo Cénico de Tizi n\'Tichka e Chegada a Marraquexe',
          stops: ['Passo Tizi n\'Tichka', 'Chegada a Marraquexe', 'Dia livre nos souks', 'Atividades opcionais']
        }
      ]
    }
  ],

  nl: [
    {
      id: 'circuit-1',
      name: 'Rondreis 1: Ouzoud-watervallen, Ayachi-gebergte & Merzouga-duinen',
      duration: '4 Dagen / 3 Nachten',
      pace: 'Wilde Natuur, Hoge Atlas & Grote Sahara',
      badge: 'Rondreis 1 • Bestseller',
      priceNote: 'Prijs op aanvraag',
      summary: 'Een grandioze authentieke reis door ongerept Marokko. Van de indrukwekkende Ouzoud-watervallen en een picknick in het Jbel Ayachi-massief tot de gouden duinen van Merzouga met een overnachting in een traditionele Berbertent. Terugkeer via de Todra-kloof en filmstudio\'s van Ouarzazate.',
      imageUrl: 'assets/ouzoud-waterfalls.jpeg',
      transportOffer: 'Vervoer naar keuze: met privéchauffeur of als huurauto zonder chauffeur (offerte op maat).',
      inclusions: [
        'Comfortabel voertuig met privéchauffeur OF huurauto zonder chauffeur (op aanvraag)',
        'Direct ophalen en terugbrengen in Marrakech',
        'Traditionele Berberlunch aan de voet van de Ouzoud-watervallen',
        '2 Nachten in een charmant hotel in Midelt inclusief ontbijt en diner',
        'Excursie met uitgebreide bergpicknick aan de voet van Jbel Ayachi (Hoge Atlas)',
        '1 Onvergetelijke nacht in de Merzouga-woestijn in een authentieke Berbertent',
        'Kamelentocht bij zonsondergang over de gouden duinen van Erg Chebbi',
        'Lunch in het hart van de spectaculaire Todra-kloof in Tinghir',
        'Bezoek aan de beroemde internationale filmstudio\'s in Ouarzazate',
        'Laatste overnachting in Marrakech voor een ontspannen afronding'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Vertrek Marrakech → Ouzoud-watervallen (Lunch) → Overnachting Midelt',
          description: 'Vroeg vertrek vanuit Marrakech richting Midelt via de imposante Ouzoud-watervallen. Traditionele Berberse lunch met uitzicht op het water. Rit door de Midden-Atlas naar Midelt voor diner en overnachting.',
          imageUrl: 'assets/ouzoud-waterfalls.jpeg',
          activityLabel: 'Ouzoud Watervallen & Panoramische Lunch',
          stops: ['Vertrek Marrakech', 'Ouzoud-watervallen', 'Lunch aan watervallen', 'Midden-Atlas', 'Overnachting Midelt']
        },
        {
          dayNumber: 2,
          title: 'Ontbijt → Picknick-excursie Jbel Ayachi → Midelt',
          description: 'Na het ontbijt vertrek voor een bergexcursie met picknick aan de voet van de majestueuze Jbel Ayachi. Een hele dag in de frisse berglucht van de Hoge Atlas. Terugkeer naar Midelt voor de nacht.',
          imageUrl: 'assets/tours/c1-d2-ayachi.jpg',
          activityLabel: 'Luxe Bergpicknick aan de Voet van de Jbel Ayachi',
          stops: ['Hotelontbijt', 'Picknick-excursie Jbel Ayachi', 'Bergtocht', 'Ongerepte Hoge Atlas', 'Overnachting Midelt']
        },
        {
          dayNumber: 3,
          title: 'Midelt → Merzouga-woestijn: Zonsondergang op Kamelen & Berbertent',
          description: 'Ontbijt en rit naar de Sahara van Merzouga langs de Ziz-kloof en oases. Aankomst bij de Erg Chebbi-duinen: kamelentocht bij zonsondergang, diner bij het kampvuur en overnachting in een Berbertent.',
          imageUrl: 'assets/merzouga-dunes.jpeg',
          activityLabel: 'Kamelentocht bij Zonsondergang & Woestijnkamp Merzouga',
          stops: ['Ziz-vallei & oases', 'Merzouga-woestijn', 'Zonsondergang op kamelen', 'Nacht in Berbertent']
        },
        {
          dayNumber: 4,
          title: 'Merzouga → Todra-kloof (Lunch) → Filmstudio\'s Ouarzazate → Marrakech',
          description: 'Woestijnontbijt en vertrek richting Marrakech. Lunch tussen de steile rotswanden van de Todra-kloof. Bezoek aan de filmstudio\'s in Ouarzazate. Rit over de Tizi n\'Tichka-pas naar Marrakech. Goede reis!',
          imageUrl: 'assets/tours/c1-d4-todra.jpg',
          activityLabel: 'Todrakloof Tinghir & Filmstudio\'s van Ouarzazate',
          stops: ['Todra-kloof', 'Lunch in de kloof', 'Filmstudio\'s Ouarzazate', 'Tichka-pas', 'Overnachting Marrakech']
        }
      ]
    },
    {
      id: 'circuit-2',
      name: 'Rondreis 2: „Puur Genieten“: Marrakech, Asni-bergen & VIP-nacht in Agafay',
      duration: '3 Dagen / 2 Nachten',
      pace: 'Ontspanning, Wellness, Activiteiten & Feest',
      badge: 'Rondreis „Puur Genieten“',
      priceNote: 'Prijs op aanvraag',
      summary: 'Een betoverende reis ontworpen om te ontspannen en te genieten. Begin in de rust van de Asni-bergen, geniet van een feestelijke dag in de Agafay-woestijn (panoramisch zwembad, lunch, 1 uur activiteit naar keuze: kameel, quad of buggy, zonsondergang en feestelijk diner met buikdanseres en vuurspuwer onder luxe tent) en sluit af in een traditionele riad in Marrakech met hammam en massage.',
      imageUrl: 'assets/star-lit-nights.jpeg',
      transportOffer: 'Vervoer naar keuze: met privéchauffeur of als huurauto zonder chauffeur (offerte op maat).',
      inclusions: [
        'Privévoertuig met airconditioning en chauffeur OF huurauto zonder chauffeur (op aanvraag)',
        '1 Rustgevende nacht in het Hoge Atlasgebergte in Asni',
        'Toegang tot panoramisch zwembad in het Agafay-kamp en heerlijke lunch',
        '1 Uur activiteit naar keuze: Kamelentocht, Quadsafari of Buggy',
        'Magische zonsondergang over de steenkloven van Agafay',
        'Avonddiner met live show: Buikdanseres, vuurspuwer en muziek',
        '1 Overnachting in luxe glampingtenten in de Agafay-woestijn',
        'Zonsopkomst in de woestijn en nomadenontbijt',
        'Verblijf in een charmante riad in het centrum van Marrakech',
        'Vrije dag met ontspannend traditioneel hammam-ritueel en massage'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Marrakech Centrum / Ochtendvertrek → Moulay Brahim → Asni-bergen',
          description: 'Ochtendvertrek vanuit Marrakech naar Moulay Brahim en de uitlopers van de Atlas. Rit naar de groene Asni-vallei. Traditioneel diner en overnachting in de bergrust.',
          imageUrl: 'assets/atlas-mountains-villages.jpeg',
          activityLabel: 'Hoge Atlas en Authentieke Bergnacht in Asni',
          stops: ['Centrum Marrakech', 'Moulay Brahim', 'Hoge Atlas', 'Nacht in de Asni-bergen']
        },
        {
          dayNumber: 2,
          title: 'Asni → Agafay-woestijn: Zwembad, Activiteiten, Dinershow & Luxetent',
          description: 'Ontbijt en vertrek naar de Agafay-woestijn. Ontspanning aan het zwembad en lunch. 1 uur activiteit (kameel, quad of buggy) bij zonsondergang. Dinershow en overnachting in een luxetent.',
          imageUrl: 'assets/tours/c2-d2-agafay.jpg',
          activityLabel: 'Woestijnzwembad, Quad/Buggy & Spectaculair Vuurshow Diner in Agafay',
          stops: ['Woestijnzwembad Agafay', 'Lunch in het kamp', '1u Activiteit (Kameel/Quad/Buggy)', 'Zonsondergang', 'Dinershow & vuur', 'Nacht in luxetent']
        },
        {
          dayNumber: 3,
          title: 'Agafay (Zonsopkomst) → Riad Marrakech: Vrije Dag, Hammam & Massage',
          description: 'Zonsopkomst boven de canyons van Agafay, ontbijt en rit naar Marrakech. Inchecken in een traditionele riad. Vrije dag met wellness: hammam en arganoliemassage. Goede reis!',
          imageUrl: 'assets/tours/c2-d3-hammam.jpg',
          activityLabel: 'Zonsopgang Agafay, Riad in Marrakech, Hammam & Ontspannende Massage',
          stops: ['Zonsopkomst & ontbijt', 'Vertrek Agafay', 'Riad in Marrakech', 'Hammam & massage', 'Vrije ontspanningsdag']
        }
      ]
    },
    {
      id: 'circuit-3',
      name: 'Rondreis 3: „Zee & Land“: Essaouira, Taghazout, Agadir & Kasbahs van Ouarzazate',
      duration: '4 Dagen / 3 Nachten',
      pace: 'Atlantische Kust, Solidariteit & Historische Kasbahs',
      badge: 'Rondreis Zee - Land',
      priceNote: 'Prijs op aanvraag',
      summary: 'De perfecte balans tussen de golven van de Atlantische Oceaan en de mystiek van Zuid-Marokko. Ontdek Essaouira met een paardrijtocht op het strand bij zonsondergang, de surfsfeer van Taghazout, een solidariteitsdag bij argan-coöperaties in Agadir en de filmstudio\'s en historische Glaoui-kasbah in Ouarzazate.',
      imageUrl: 'assets/taghazout-morocco.jpeg',
      transportOffer: 'Vervoer naar keuze: met privéchauffeur of als huurauto zonder chauffeur (offerte op maat).',
      inclusions: [
        'Vervoer met privéchauffeur OF huurauto zonder chauffeur (op aanvraag)',
        'Stadswandeling in Essaouira: oude Joodse wijk (Mellah) en vestingwallen',
        'Verse vislunch aan de haven en paardrijden op het strand bij zonsondergang',
        '1 Charmante overnachting in Essaouira',
        'Lunch aan zee in het surfdorp Taghazout',
        'Solidariteitsbezoek aan vrouwencoöperaties voor argan en cosmetica met demonstratie',
        '1 Overnachting in Agadir',
        'Bezoek aan de internationale filmstudio\'s in Ouarzazate',
        'Ontdekking van de historische Glaoui-kasbah',
        '1 Overnachting in Ouarzazate',
        'Terugreis naar Marrakech over de Hoge Atlas met vrije tijd voor souks'
      ],
      days: [
        {
          dayNumber: 1,
          title: 'Marrakech → Essaouira: Joodse Wijk, Paardrijden bij Zonsondergang & Zee',
          description: 'Rit naar kustparel Essaouira (Mogador). Bezoek aan de Mellah en de verdedigingswallen. Verse vislunch. Paardrijden over het strand bij zonsondergang. Overnachting in Essaouira.',
          imageUrl: 'assets/tours/c3-d1-essaouira-horse.jpg',
          activityLabel: 'Historisch Essaouira & Paardrijden op het Strand bij Zonsondergang',
          stops: ['Vertrek Marrakech', 'Medina Essaouira', 'Joodse Mellah', 'Havenlunch', 'Paardrijden op strand', 'Zonsondergang op zee', 'Nacht in Essaouira']
        },
        {
          dayNumber: 2,
          title: 'Essaouira → Taghazout (Lunch) → Agadir: Argan-coöperaties',
          description: 'Kustroute naar Taghazout voor lunch met uitzicht op de golven. Verder naar Agadir voor een bezoek aan argan-coöperaties met ambachtelijke demonstratie. Overnachting in Agadir.',
          imageUrl: 'assets/taghazout-morocco.jpeg',
          activityLabel: 'Taghazout aan Zee & Bezoek aan de Vrouwen-Argancoöperatie in Agadir',
          stops: ['Kustweg', 'Lunch in Taghazout', 'Solidariteitsdag', 'Argan-coöperaties', 'Ambachtelijke show', 'Nacht in Agadir']
        },
        {
          dayNumber: 3,
          title: 'Agadir → Ouarzazate: Filmstudio\'s & Historische Glaoui-kasbah',
          description: 'Vertrek naar filmhoofdstad Ouarzazate. Bezoek aan gerenommeerde filmstudio\'s en de imposante Glaoui-kasbah. Diner en overnachting in Ouarzazate.',
          imageUrl: 'assets/tours/c3-d3-kasbah.jpg',
          activityLabel: 'Internationale Filmstudio\'s & Historische Kasbah Glaoui in Ouarzazate',
          stops: ['Richting Ouarzazate', 'Filmstudio\'s', 'Historische Glaoui-kasbah', 'Nacht in Ouarzazate']
        },
        {
          dayNumber: 4,
          title: 'Ouarzazate → Marrakech: Hoge Atlas & Vrije Tijd voor Souks',
          description: 'Terugreis over de spectaculaire Tizi n\'Tichka-pas in de Hoge Atlas naar Marrakech. Vrije tijd in Marrakech voor inkopen in de souks. Goede reis!',
          imageUrl: 'assets/tours/c3-d4-tizi-tichka.jpg',
          activityLabel: 'Panoramische Tizi n\'Tichka Bergpas & Terugkeer naar Marrakech',
          stops: ['Tizi n\'Tichka-pas', 'Aankomst Marrakech', 'Vrije tijd & souks', 'Optionele activiteiten']
        }
      ]
    }
  ]
};
