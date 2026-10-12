import { Injectable, signal, computed } from '@angular/core';
import { CIRCUITS_PAGE_DATA, DESTINATIONS_PAGE_DATA, CONTACT_PAGE_DATA } from './language-pages.data';
import { ALL_CIRCUITS_DATA } from './circuits.data';

export type Language = 'fr' | 'en' | 'ar' | 'es' | 'it' | 'de' | 'pt' | 'nl';
export type CircuitTranslation = Circuit;
export type DestinationTranslation = any;

export interface LanguageMeta {
  code: Language;
  name: string;
  flag: string;
  short: string;
  dir: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷', short: 'FR', dir: 'ltr' },
  { code: 'en', name: 'English', flag: '🇬🇧', short: 'EN', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇲🇦', short: 'AR', dir: 'rtl' },
  { code: 'es', name: 'Español', flag: '🇪🇸', short: 'ES', dir: 'ltr' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', short: 'IT', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', short: 'DE', dir: 'ltr' },
  { code: 'pt', name: 'Português', flag: '🇵🇹', short: 'PT', dir: 'ltr' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', short: 'NL', dir: 'ltr' },
];

export interface CircuitDay {
  dayNumber: number;
  title: string;
  description: string;
  stops: string[];
}

export interface Circuit {
  id: string;
  name: string;
  duration: string;
  pace: string;
  badge: string;
  priceNote: string;
  summary: string;
  transportOffer: string;
  imageUrl: string;
  inclusions: string[];
  days: CircuitDay[];
}

export interface ExperienceStory {
  id: string;
  badge: string;
  title: string;
  description: string;
  perks: string[];
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<Language>('fr');

  // Computed active language metadata
  currentMeta = computed(() => {
    return SUPPORTED_LANGUAGES.find(l => l.code === this.currentLang()) || SUPPORTED_LANGUAGES[0];
  });

  isRtl = computed(() => this.currentLang() === 'ar');

  get circuitsPage(): any {
    return CIRCUITS_PAGE_DATA[this.currentLang()] || CIRCUITS_PAGE_DATA['fr'];
  }

  get destinationsPage(): any {
    return DESTINATIONS_PAGE_DATA[this.currentLang()] || DESTINATIONS_PAGE_DATA['fr'];
  }

  get contactPage(): any {
    return CONTACT_PAGE_DATA[this.currentLang()] || CONTACT_PAGE_DATA['fr'];
  }

  get destinations(): any[] {
    return [];
  }

  constructor() {
    if (typeof window !== 'undefined') {
      if (window.location && window.location.search) {
        const params = new URLSearchParams(window.location.search);
        const qLang = params.get('lang') as Language;
        if (qLang && SUPPORTED_LANGUAGES.some(l => l.code === qLang)) {
          this.setLanguage(qLang);
          return;
        }
      }
      if (window.localStorage) {
        const saved = localStorage.getItem('medade_lang_v2') as Language;
        if (saved && SUPPORTED_LANGUAGES.some(l => l.code === saved)) {
          this.setLanguage(saved);
          return;
        }
      }
    }
    this.applyLanguage('fr');
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('medade_lang_v2', lang);
    }
    this.applyLanguage(lang);
  }

  private applyLanguage(lang: Language) {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      html.lang = lang;
      if (lang === 'ar') {
        html.dir = 'rtl';
        document.body.classList.add('rtl-mode');
      } else {
        html.dir = 'ltr';
        document.body.classList.remove('rtl-mode');
      }
    }
  }

  // UI dictionary for 8 languages
  get ui() {
    const lang = this.currentLang();
    const d: Record<Language, any> = {
      fr: {
        brandTag: 'AGENCE LOCALE • MARRAKECH & DÉSERT',
        menuLabel: 'MENU',
        navHome: 'Accueil',
        navCircuits: 'Circuits Phares',
        navExperiences: 'Expériences',
        navTransport: 'Transport VIP',
        navBooking: 'Devis & Contact',
        btnBookRoom: 'DEMANDER UN DEVIS',
        btnBookActivities: 'CIRCUITS & AVENTURES',
        btnWhatsApp: 'WhatsApp Direct',
        btnCallDirect: 'Appel Direct',
        btnDiscussWhatsApp: 'Discuter sur WhatsApp 24/7',
        floatingWhatsApp: 'Devis WhatsApp 24/7',
        footerDesc: 'Spécialiste marocain des circuits privés dans le désert et du transport touristique haut de gamme au départ de Marrakech.',
        footerHeadingCircuits: 'Circuits Populaires',
        footerHeadingContact: 'Réservations & Devis',
        footerPhoneLabel: 'Téléphone :',
        footerAssistanceLabel: 'Assistance 24/7 :',
        footerWaAvailability: 'WhatsApp direct sans intermédiaire',
        footerCopyright: '© 2026 Medade Travel. Tous droits réservés. Marrakech, Maroc.'
      },
      en: {
        brandTag: 'LOCAL AGENCY • MARRAKECH & SAHARA',
        menuLabel: 'MENU',
        navHome: 'Home',
        navCircuits: 'Signature Tours',
        navExperiences: 'Experiences',
        navTransport: 'VIP Transport',
        navBooking: 'Quote & Contact',
        btnBookRoom: 'REQUEST A QUOTE',
        btnBookActivities: 'TOURS & ADVENTURES',
        btnWhatsApp: 'Direct WhatsApp',
        btnCallDirect: 'Direct Call',
        btnDiscussWhatsApp: 'Chat on WhatsApp 24/7',
        floatingWhatsApp: 'Instant WhatsApp Quote',
        footerDesc: 'Morocco luxury desert tour operator and private VIP transportation departing from Marrakech with direct fair pricing.',
        footerHeadingCircuits: 'Popular Tours',
        footerHeadingContact: 'Bookings & Enquiries',
        footerPhoneLabel: 'Phone:',
        footerAssistanceLabel: '24/7 Support:',
        footerWaAvailability: 'Direct WhatsApp with local team',
        footerCopyright: '© 2026 Medade Travel. All rights reserved. Marrakech, Morocco.'
      },
      ar: {
        brandTag: 'وكالة محلية • مراكش والصحراء المغربية',
        menuLabel: 'القائمة',
        navHome: 'الرئيسية',
        navCircuits: 'الجولات الرئيسية',
        navExperiences: 'تجارب السفر',
        navTransport: 'النقل السياحي',
        navBooking: 'طلب حجز واستفسار',
        btnBookRoom: 'طلب عرض سعر',
        btnBookActivities: 'الجولات والمغامرات',
        btnWhatsApp: 'واتساب مباشر',
        btnCallDirect: 'اتصال مباشر',
        btnDiscussWhatsApp: 'محادثة واتساب 24/7',
        floatingWhatsApp: 'حجز فوري عبر واتساب',
        footerDesc: 'وكالتكم المغربية المتخصصة في جولات الصحراء الفاخرة والنقل السياحي الراقي انطلاقاً من مراكش بأفضل الأسعار المباشرة.',
        footerHeadingCircuits: 'الجولات الأكثر طلباً',
        footerHeadingContact: 'الحجوزات والتواصل',
        footerPhoneLabel: 'الهاتف:',
        footerAssistanceLabel: 'دعم على مدار الساعة:',
        footerWaAvailability: 'خدمة واتساب مباشرة بدون وسيط',
        footerCopyright: '© 2026 ميداد ترافل. جميع الحقوق محفوظة. مراكش، المغرب.'
      },
      es: {
        brandTag: 'AGENCIA LOCAL • MARRAKECH Y DESIERTO',
        menuLabel: 'MENÚ',
        navHome: 'Inicio',
        navCircuits: 'Circuitos Destacados',
        navExperiences: 'Experiencias',
        navTransport: 'Transporte VIP',
        navBooking: 'Presupuesto y Contacto',
        btnBookRoom: 'SOLICITAR PRESUPUESTO',
        btnBookActivities: 'CIRCUITOS Y AVENTURAS',
        btnWhatsApp: 'WhatsApp Directo',
        btnCallDirect: 'Llamada Directa',
        btnDiscussWhatsApp: 'Chatear por WhatsApp 24/7',
        floatingWhatsApp: 'Presupuesto Rápido WhatsApp',
        footerDesc: 'Especialista local marroquí en circuitos por el desierto y transporte turístico privado desde Marrakech sin intermediarios.',
        footerHeadingCircuits: 'Circuitos Populares',
        footerHeadingContact: 'Reservas y Contacto',
        footerPhoneLabel: 'Teléfono:',
        footerAssistanceLabel: 'Asistencia 24/7:',
        footerWaAvailability: 'WhatsApp directo con el equipo local',
        footerCopyright: '© 2026 Medade Travel. Todos los derechos reservados. Marrakech, Marruecos.'
      },
      it: {
        brandTag: 'AGENZIA LOCALE • MARRAKECH E DESERTO',
        menuLabel: 'MENU',
        navHome: 'Home',
        navCircuits: 'I Nostri Tour',
        navExperiences: 'Esperienze',
        navTransport: 'Trasporto VIP',
        navBooking: 'Preventivo e Contatto',
        btnBookRoom: 'RICHIEDI UN PREVENTIVO',
        btnBookActivities: 'TOUR & AVVENTURE',
        btnWhatsApp: 'WhatsApp Diretto',
        btnCallDirect: 'Chiamata Diretta',
        btnDiscussWhatsApp: 'Chatta su WhatsApp 24/7',
        floatingWhatsApp: 'Preventivo WhatsApp Immediato',
        footerDesc: 'Specialista locale marocchino in tour nel deserto e trasporto turistico privato da Marrakech a prezzi diretti.',
        footerHeadingCircuits: 'Tour Principali',
        footerHeadingContact: 'Prenotazioni e Info',
        footerPhoneLabel: 'Telefono:',
        footerAssistanceLabel: 'Supporto 24/7:',
        footerWaAvailability: 'WhatsApp diretto con il nostro team',
        footerCopyright: '© 2026 Medade Travel. Tutti i diritti riservati. Marrakech, Marocco.'
      },
      de: {
        brandTag: 'LOKALE AGENTUR • MARRAKESCH & SAHARA',
        menuLabel: 'MENÜ',
        navHome: 'Startseite',
        navCircuits: 'Top-Rundreisen',
        navExperiences: 'Erlebnisse',
        navTransport: 'VIP-Transport',
        navBooking: 'Angebot & Kontakt',
        btnBookRoom: 'ANGEBOT ANFORDERN',
        btnBookActivities: 'TOUREN & ABENTEUER',
        btnWhatsApp: 'Direkt per WhatsApp',
        btnCallDirect: 'Direktanruf',
        btnDiscussWhatsApp: 'WhatsApp-Chat 24/7',
        floatingWhatsApp: 'Schnelles WhatsApp-Angebot',
        footerDesc: 'Ihr lokaler marokkanischer Reiseveranstalter für Wüstentouren und erstklassigen VIP-Transport ab Marrakesch ohne Zwischenhändler.',
        footerHeadingCircuits: 'Beliebte Rundreisen',
        footerHeadingContact: 'Buchungen & Kontakt',
        footerPhoneLabel: 'Telefon:',
        footerAssistanceLabel: '24/7 Kundendienst:',
        footerWaAvailability: 'Direkter WhatsApp-Service vor Ort',
        footerCopyright: '© 2026 Medade Travel. Alle Rechte vorbehalten. Marrakesch, Marokko.'
      },
      pt: {
        brandTag: 'AGÊNCIA LOCAL • MARRAQUEXE E DESERTO',
        menuLabel: 'MENU',
        navHome: 'Início',
        navCircuits: 'Circuitos Exclusivos',
        navExperiences: 'Experiências',
        navTransport: 'Transporte VIP',
        navBooking: 'Orçamento e Contacto',
        btnBookRoom: 'PEDIR ORÇAMENTO',
        btnBookActivities: 'CIRCUITOS E AVENTURAS',
        btnWhatsApp: 'WhatsApp Direto',
        btnCallDirect: 'Chamada Direta',
        btnDiscussWhatsApp: 'Falar no WhatsApp 24/7',
        floatingWhatsApp: 'Orçamento Imediato no WhatsApp',
        footerDesc: 'Especialista local em excursões pelo deserto marroquino e transporte turístico privado a partir de Marraquexe.',
        footerHeadingCircuits: 'Circuitos Populares',
        footerHeadingContact: 'Reservas e Contacto',
        footerPhoneLabel: 'Telefone:',
        footerAssistanceLabel: 'Apoio 24/7:',
        footerWaAvailability: 'WhatsApp direto sem intermediários',
        footerCopyright: '© 2026 Medade Travel. Todos os direitos reservados. Marraquexe, Marrocos.'
      },
      nl: {
        brandTag: 'LOKALE REISORGANISATIE • MARRAKECH & WOESTIJN',
        menuLabel: 'MENU',
        navHome: 'Home',
        navCircuits: 'Populaire Rondreizen',
        navExperiences: 'Ervaringen',
        navTransport: 'VIP Vervoer',
        navBooking: 'Offerte & Contact',
        btnBookRoom: 'OFFERTE AANVRAGEN',
        btnBookActivities: 'TOURS & AVONTUUR',
        btnWhatsApp: 'Direct WhatsApp',
        btnCallDirect: 'Direct Bellen',
        btnDiscussWhatsApp: 'Chat via WhatsApp 24/7',
        floatingWhatsApp: 'Direct WhatsApp Offerte',
        footerDesc: 'Lokale Marokkaanse specialist in woestijnrondreizen en comfortabel privévervoer vanuit Marrakech tegen eerlijke directe tarieven.',
        footerHeadingCircuits: 'Populaire Reizen',
        footerHeadingContact: 'Boekingen & Contact',
        footerPhoneLabel: 'Telefoon:',
        footerAssistanceLabel: '24/7 Assistentie:',
        footerWaAvailability: 'Rechtstreeks contact via WhatsApp',
        footerCopyright: '© 2026 Medade Travel. Alle rechten voorbehouden. Marrakech, Marokko.'
      }
    };
    return d[lang] || d['fr'];
  }

  // Philosophy quote section (Le Bédouin inspired)
  get philosophy() {
    const lang = this.currentLang();
    const d: Record<Language, any> = {
      fr: {
        quote: '« DÉCOUVRIR LE MAROC D’UNE AUTRE MANIÈRE »',
        lead: 'Vivez une immersion authentique au départ de Marrakech, entre les dunes dorées du Sahara, les sommets majestueux de l’Atlas et l’air marin d’Essaouira.',
        text: 'Medade Travel vous accompagne avec des circuits privatifs sur-mesure, des bivouacs de charme sous les étoiles et une flotte de véhicules récents avec chauffeurs dédiés. Sans intermédiaire, nous vous garantissons des tarifs justes et une hospitalité marocaine d’exception.',
        btnText: 'EN SAVOIR PLUS SUR NOS CIRCUITS'
      },
      en: {
        quote: '"DISCOVER MOROCCO IN A DIFFERENT WAY"',
        lead: 'Experience genuine Moroccan immersion departing from Marrakech, amidst the golden Sahara dunes, majestic High Atlas peaks, and the Atlantic breeze of Essaouira.',
        text: 'Medade Travel offers bespoke private journeys, charming luxury desert camps under starlit skies, and a modern fleet of vehicles with dedicated local chauffeurs. With zero middleman fees, we provide honest rates and exceptional hospitality.',
        btnText: 'DISCOVER OUR SIGNATURE TOURS'
      },
      ar: {
        quote: '« اكتشفوا سحر المغرب برؤية أصيلة ومختلفة »',
        lead: 'عيشوا تجربة سفر فريدة انطلاقاً من مراكش بين كثبان رمال الصحراء الذهبية، قمم جبال الأطلس الشامخة، وسواحل الصويرة الأطلسية الساحرة.',
        text: 'ميداد ترافل ترافقكم بجولات خاصة ومصممة حسب رغبتكم، مخيمات صحراوية ساحرة تحت أضواء النجوم، وأسطول سيارات حديثة مع سائقين محترفين. نضمن لكم أسعاراً مباشرة دون وسيط مع كرم الضيافة المغربية الأصيلة.',
        btnText: 'استكشفوا برامجنا السياحية'
      },
      es: {
        quote: '« DESCUBRIR MARRUECOS DE UNA FORMA DIFERENTE »',
        lead: 'Viva una inmersión auténtica desde Marrakech, entre las dunas doradas del Sahara, las cumbres del Atlas y la brisa atlántica de Essaouira.',
        text: 'Medade Travel le ofrece circuitos privados a medida, campamentos bereberes bajo las estrellas y una flota moderna con chóferes dedicados. Sin intermediarios, con precios directos y la más cálida hospitalidad marroquí.',
        btnText: 'MÁS INFORMACIÓN SOBRE NUESTROS CIRCUITOS'
      },
      it: {
        quote: '« SCOPRI IL MAROCCO IN UN MODO DIVERSO »',
        lead: 'Vivi un’immersione autentica con partenza da Marrakech, tra le dune dorate del Sahara, le vette dell’Atlante e la brezza oceanica di Essaouira.',
        text: 'Medade Travel offre tour privati su misura, bivacchi di charme sotto le stelle e veicoli moderni con autisti esperti. Senza intermediari, garantiamo prezzi equi e un’ospitalità impeccabile.',
        btnText: 'SCOPRI I NOSTRI TOUR'
      },
      de: {
        quote: '„MAROKKO AUF EINE NEUE WEISE ERLEBEN“',
        lead: 'Erleben Sie eine unvergessliche Reise ab Marrakesch, zwischen den goldenen Dünen der Sahara, den Gipfeln des Atlasgebirges und der Atlantikküste von Essaouira.',
        text: 'Medade Travel begleitet Sie mit maßgeschneiderten privaten Rundreisen, stimmungsvollen Wüstencamps unter dem Sternenhimmel und einer modernen Fahrzeugflotte mit erfahrenen Fahrern. Direkt ohne Zwischenhändler.',
        btnText: 'MEHR ÜBER UNSERE RUNDREISEN'
      },
      pt: {
        quote: '« DESCOBRIR MARROCOS DE UMA FORMA DIFERENTE »',
        lead: 'Viva uma imersão autêntica com partida de Marraquexe, entre as dunas do Saara, os cumes do Atlas e a brisa marinha de Essaouira.',
        text: 'A Medade Travel organiza circuitos privados à medida, acampamentos de charme sob as estrelas e viaturas recentes com motoristas experientes, com preços diretos e hospitalidade exemplar.',
        btnText: 'CONHECER OS NOSSOS CIRCUITOS'
      },
      nl: {
        quote: '„ONTDEK MAROKKO OP EEN ANDERE MANIER“',
        lead: 'Beleef een authentieke droomreis vanuit Marrakech, tussen de gouden duinen van de Sahara, het Hoge Atlasgebergte en de Atlantische kust van Essaouira.',
        text: 'Medade Travel verzorgt op maat gemaakte privérondreizen, sfeervolle woestijnkampen onder de sterrenhemel en moderne voertuigen met privéchauffeur tegen directe, eerlijke tarieven.',
        btnText: 'BEKIJK ONZE RONDREIZEN'
      }
    };
    return d[lang] || d['fr'];
  }

  // Hero section localized content and trust badges
  get hero() {
    const lang = this.currentLang();
    const d: Record<Language, any> = {
      fr: {
        title: "L'Âme du Maroc, l'Élégance du Voyage",
        subtitle: "Circuits privatifs sur-mesure au départ de Marrakech, bivouacs de charme sous les étoiles et transport haut de gamme avec chauffeur dédié ou véhicule sans chauffeur dès 450 DH/jour.",
        badges: {
          fairPrice: 'Tarifs directs sans intermédiaire',
          transport: 'Transport dès 450 DH / jour',
          support: 'Assistance WhatsApp 24/7'
        }
      },
      en: {
        title: "The Soul of Morocco, The Elegance of Travel",
        subtitle: "Bespoke private journeys departing from Marrakech, luxury starlit desert camps, and premium transport with dedicated chauffeur or self-drive vehicle from 450 MAD/day.",
        badges: {
          fairPrice: 'Direct local rates, no middleman',
          transport: 'Transport from 450 MAD / day',
          support: '24/7 WhatsApp assistance'
        }
      },
      ar: {
        title: "روح المغرب الأصيل وسحر السفر الراقي",
        subtitle: "جولات سياحية خاصة انطلاقاً من مراكش، مخيمات فاخرة تحت أضواء النجوم، ونقل سياحي راقٍ مع سائق خاص أو كراء سيارات ابتداءً من 450 درهم/اليوم بدون وسيط.",
        badges: {
          fairPrice: 'سعر محلي مباشر بدون وسيط',
          transport: 'نقل سياحي ابتداءً من 450 درهم/يوم',
          support: 'دعم واستجابة واتساب 24/7'
        }
      },
      es: {
        title: "El Alma de Marruecos, la Elegancia del Viaje",
        subtitle: "Circuitos privados a medida desde Marrakech, campamentos bajo las estrellas y transporte VIP con chófer dedicado o alquiler sin conductor desde 450 MAD/día.",
        badges: {
          fairPrice: 'Precios directos sin intermediarios',
          transport: 'Transporte desde 450 MAD / día',
          support: 'Asistencia WhatsApp 24/7'
        }
      },
      it: {
        title: "L'Anima del Marocco, l'Eleganza del Viaggio",
        subtitle: "Tour privati su misura con partenza da Marrakech, bivacchi di lusso sotto le stelle e veicoli recenti con autista o a noleggio da 450 MAD/giorno.",
        badges: {
          fairPrice: 'Tariffe dirette senza intermediari',
          transport: 'Trasporto da 450 MAD / giorno',
          support: 'Assistenza WhatsApp 24/7'
        }
      },
      de: {
        title: "Die Seele Marokkos, die Eleganz des Reisens",
        subtitle: "Maßgeschneiderte private Rundreisen ab Marrakesch, Wüstencamps unterm Sternenhimmel und VIP-Transport mit Chauffeur oder Mietwagen ab 450 MAD/Tag.",
        badges: {
          fairPrice: 'Direktpreise ohne Zwischenhändler',
          transport: 'Transport ab 450 MAD / Tag',
          support: '24/7 WhatsApp-Betreuung'
        }
      },
      pt: {
        title: "A Alma de Marrocos, a Elegância da Viagem",
        subtitle: "Circuitos privados a partir de Marraquexe, acampamentos de charme sob as estrelas e transporte VIP com motorista dedicado ou aluguer desde 450 MAD/dia.",
        badges: {
          fairPrice: 'Preços diretos sem intermediários',
          transport: 'Transporte a partir de 450 MAD / dia',
          support: 'Apoio WhatsApp 24/7'
        }
      },
      nl: {
        title: "De Ziel van Marokko, de Elegantie van het Reizen",
        subtitle: "Privérondreizen op maat vanuit Marrakech, luxe woestijnkampen onder de sterren en modern vervoer met privéchauffeur of autoverhuur vanaf 450 MAD/dag.",
        badges: {
          fairPrice: 'Directe tarieven zonder tussenpersonen',
          transport: 'Vervoer vanaf 450 MAD / dag',
          support: '24/7 WhatsApp-ondersteuning'
        }
      }
    };
    return d[lang] || d['fr'];
  }

  // Circuits showcase section localized labels
  get circuitsSection() {
    const lang = this.currentLang();
    const d: Record<Language, any> = {
      fr: {
        eyebrow: 'NOS CIRCUITS & SÉJOURS PHARES',
        title: 'Les 3 Circuits Phares au Maroc',
        subtitle: 'Sélectionnez un circuit pour explorer son itinéraire exclusif et réserver directement sans intermédiaire.',
        viewFull: 'Voir le programme complet →',
        transportLabel: 'Transport au choix :',
        inclusionsTitle: 'Prestations incluses dans ce programme :',
        bookBtn: 'Réserver ce Circuit sur WhatsApp',
        dayByDayTitle: 'Itinéraire Détaillé Jour par Jour :',
        dayPrefix: 'Jour',
        stopsLabel: 'Points d\'intérêt :'
      },
      en: {
        eyebrow: 'OUR SIGNATURE TOURS & JOURNEYS',
        title: 'The 3 Signature Morocco Tours',
        subtitle: 'Select a tour to explore its detailed day-by-day itinerary and book directly without middleman.',
        viewFull: 'View full itinerary →',
        transportLabel: 'Transport choice:',
        inclusionsTitle: 'Included in this itinerary:',
        bookBtn: 'Book This Tour via WhatsApp',
        dayByDayTitle: 'Detailed Day-by-Day Itinerary:',
        dayPrefix: 'Day',
        stopsLabel: 'Key highlights:'
      },
      ar: {
        eyebrow: 'الجولات والرحلات الرئيسية',
        title: 'الجولات الثلاث الأكثر طلباً بالمغرب',
        subtitle: 'اختر جولتك المفضلة واطلع على تفاصيل خط السير يوماً بيوم مع حجز مباشر عبر واتساب.',
        viewFull: 'عرض البرنامج الكامل ←',
        transportLabel: 'نقل مرن متاح :',
        inclusionsTitle: 'الخدمات المشمولة في هذا البرنامج :',
        bookBtn: 'طلب حجز هذا البرنامج على واتساب',
        dayByDayTitle: 'خط السير المفصل يوماً بيوم :',
        dayPrefix: 'اليوم',
        stopsLabel: 'المحطات الرئيسية :'
      },
      es: {
        eyebrow: 'NUESTROS CIRCUITOS DESTACADOS',
        title: 'Los 3 Circuitos Emblemáticos en Marruecos',
        subtitle: 'Seleccione un circuito para explorar su itinerario día a día y reservar directamente sin intermediarios.',
        viewFull: 'Ver itinerario completo →',
        transportLabel: 'Transporte a elegir:',
        inclusionsTitle: 'Servicios incluidos en este programa:',
        bookBtn: 'Reservar este Circuito por WhatsApp',
        dayByDayTitle: 'Itinerario Detallado Día por Día:',
        dayPrefix: 'Día',
        stopsLabel: 'Puntos de interés:'
      },
      it: {
        eyebrow: 'I NOSTRI TOUR DI PUNTA',
        title: 'I 3 Tour Emblematici in Marocco',
        subtitle: 'Seleziona un tour per scoprire l’itinerario giorno per giorno e prenotare direttamente senza intermediari.',
        viewFull: 'Visualizza il programma completo →',
        transportLabel: 'Scelta del trasporto:',
        inclusionsTitle: 'Servizi inclusi in questo programma:',
        bookBtn: 'Prenota questo Tour su WhatsApp',
        dayByDayTitle: 'Itinerario Dettagliato Giorno per Giorno:',
        dayPrefix: 'Giorno',
        stopsLabel: 'Punti di interesse:'
      },
      de: {
        eyebrow: 'UNSERE TOP-RUNDREISEN',
        title: 'Die 3 Beliebtesten Rundreisen in Marokko',
        subtitle: 'Wählen Sie eine Rundreise, um den detaillierten Tagesablauf einzusehen und direkt ohne Zwischenhändler zu buchen.',
        viewFull: 'Vollständiges Programm ansehen →',
        transportLabel: 'Transport nach Wahl:',
        inclusionsTitle: 'In dieser Rundreise enthaltene Leistungen:',
        bookBtn: 'Diese Rundreise via WhatsApp anfragen',
        dayByDayTitle: 'Detaillierter Reiseverlauf Tag für Tag:',
        dayPrefix: 'Tag',
        stopsLabel: 'Wichtigste Stationen:'
      },
      pt: {
        eyebrow: 'OS NOSSOS CIRCUITOS EXCLUSIVOS',
        title: 'Os 3 Circuitos Emblemáticos em Marrocos',
        subtitle: 'Selecione um circuito para explorar o seu itinerário dia a dia e reservar diretamente sem intermediários.',
        viewFull: 'Ver o programa completo →',
        transportLabel: 'Transporte à escolha:',
        inclusionsTitle: 'Serviços incluídos neste programa:',
        bookBtn: 'Reservar este Circuito no WhatsApp',
        dayByDayTitle: 'Itinerário Detalhado Dia a Dia:',
        dayPrefix: 'Dia',
        stopsLabel: 'Pontos de interesse:'
      },
      nl: {
        eyebrow: 'ONZE SIGNATURE RONDREIZEN',
        title: 'De 3 Meest Populaire Rondreizen in Marokko',
        subtitle: 'Kies een rondreis om het dag-tot-dag programma te bekijken en boek rechtstreeks zonder tussenpersonen.',
        viewFull: 'Bekijk het volledige programma →',
        transportLabel: 'Vervoer naar keuze:',
        inclusionsTitle: 'Inbegrepen in dit reisprogramma:',
        bookBtn: 'Deze Rondreis Reserveren via WhatsApp',
        dayByDayTitle: 'Gedetailleerd Reisprogramma per Dag:',
        dayPrefix: 'Dag',
        stopsLabel: 'Belangrijkste hoogtepunten:'
      }
    };
    return d[lang] || d['fr'];
  }

  // Experiences showcase section localized labels
  get experiencesSection() {
    const lang = this.currentLang();
    const d: Record<Language, any> = {
      fr: {
        eyebrow: "L'ART DU VOYAGE AU MAROC",
        title: 'Des Expériences Uniques & Raffinées',
        subtitle: 'De la quiétude des bivouacs sahariens à notre flotte de transport privé, nous façonnons vos plus beaux souvenirs.'
      },
      en: {
        eyebrow: 'THE ART OF MOROCCAN TRAVEL',
        title: 'Unique & Refined Experiences',
        subtitle: 'From the tranquility of Saharan luxury camps to our VIP private fleet, we craft unforgettable memories.'
      },
      ar: {
        eyebrow: 'تجارب السفر والاستجمام',
        title: 'تجارب وخدمات استثنائية',
        subtitle: 'من ليالي الصحراء الساحرة إلى أسطول النقل الخاص الفاخر، صممنا كل تفصيلة لراحتكم وسعادتكم.'
      },
      es: {
        eyebrow: 'EL ARTE DE VIAJAR POR MARRUECOS',
        title: 'Experiencias Únicas y Refinadas',
        subtitle: 'Desde la serenidad de los campamentos del Sahara hasta nuestra flota de transporte privado VIP, creamos sus mejores recuerdos.'
      },
      it: {
        eyebrow: "L'ARTE DEL VIAGGIO IN MAROCCO",
        title: 'Esperienze Uniche e Raffinate',
        subtitle: 'Dalla magia dei bivacchi sahariani alla nostra flotta di trasporto VIP, diamo forma ai vostri ricordi più belli.'
      },
      de: {
        eyebrow: 'DIE KUNST DES REISENS IN MAROKKO',
        title: 'Einzigartige & Exklusive Erlebnisse',
        subtitle: 'Von der Ruhe stilvoller Wüstencamps bis hin zu unserem VIP-Fahrservice gestalten wir Ihre unvergesslichsten Momente.'
      },
      pt: {
        eyebrow: 'A ARTE DE VIAJAR EM MARROCOS',
        title: 'Experiências Únicas e Refinadas',
        subtitle: 'Da serenidade dos acampamentos no Saara à nossa frota de transporte VIP, cuidamos de cada detalhe para as suas melhores memórias.'
      },
      nl: {
        eyebrow: 'DE KUNST VAN REIZEN IN MAROKKO',
        title: 'Unieke & Exclusieve Reiservaringen',
        subtitle: 'Van de rust in sfeervolle Sahara-kampen tot onze privé VIP-vervoersvloot, wij creëren uw mooiste herinneringen.'
      }
    };
    return d[lang] || d['fr'];
  }

  // The 3 Signature Tours (identical to v1 with all days, stops, and durations across all 8 languages)
  get circuits(): Circuit[] {
    const lang = this.currentLang();
    return ALL_CIRCUITS_DATA[lang] || ALL_CIRCUITS_DATA['fr'];
  }

  // Alternating Luxury Experience Stories (Le Bédouin style: Bivouacs, Fleet VIP, Activities)
  get experiences(): ExperienceStory[] {
    const lang = this.currentLang();
    const map: Record<Language, ExperienceStory[]> = {
      fr: [
        {
          id: 'bivouacs',
          badge: 'IMMERSION SAHARIENNE',
          title: 'Bivouacs Nomades & Nuits Étoilées',
          description: 'Au cœur des dunes de Merzouga ou sur les collines minérales d’Agafay, nos campements allient authenticité berbère et confort absolu. Lits douillets, tentes privatives climatisées/chauffées, dîners raffinés aux chandelles et veillées musicales autour du feu de camp.',
          perks: ['Tentes privatives avec salle de bain intégrée', 'Dîner traditionnel 3 plats sous les étoiles', 'Feu de camp et animation musicale gnaoua'],
          imageUrl: 'assets/star-lit-nights.jpeg',
          ctaText: 'Découvrir nos bivouacs',
          ctaLink: '#circuits'
        },
        {
          id: 'flotte-vip',
          badge: 'TRANSPORT & MOBILITÉ',
          title: 'Chauffeurs Privés & Flotte de Prestige',
          description: 'Voyagez à travers le Maroc avec sérénité grâce à notre flotte de Mercedes V-Class spacieux, SUV et 4x4 tout-terrain récents. Nos chauffeurs professionnels, courtois et multilingues, s’adaptent à vos horaires et vos envies d’arrêts photos spontanés.',
          perks: ['Véhicules récents, climatisés et désinfectés', 'Chauffeurs agréés et bilingues à votre écoute', 'Formule location sans chauffeur dès 450 DH/jour'],
          imageUrl: 'assets/taghazout-morocco.jpeg',
          ctaText: 'Voir nos options de transport',
          ctaLink: '#transport'
        },
        {
          id: 'activites',
          badge: 'AVENTURE & DÉTENTE',
          title: 'Activités & Sensations au Désert',
          description: 'Donnez vie à vos envies d’évasion : escapades en quad ou buggy dans le désert d’Agafay, balades poétiques à dos de dromadaire au coucher du soleil, déjeuners au bord de piscines panoramiques et dîners spectacles enchanteurs.',
          perks: ['Guides certifiés et matériel récent sécurisé', 'Formules adaptées aux familles et couples', 'Départs quotidiens avec navette privative'],
          imageUrl: 'assets/agafay-amanjena.jpeg',
          ctaText: 'Demander un devis activités',
          ctaLink: '#booking'
        }
      ],
      en: [
        {
          id: 'bivouacs',
          badge: 'SAHARA IMMERSION',
          title: 'Nomadic Luxury Camps & Starlit Nights',
          description: 'In the heart of the Merzouga dunes or the rocky hills of Agafay, our desert camps blend Berber authenticity with supreme comfort. Plush beds, private en-suite tents, candlelit dinners, and fireside acoustic musical evenings.',
          perks: ['Private luxury tents with en-suite bathrooms', '3-course traditional dinner under the stars', 'Campfire with live Gnawa musical performance'],
          imageUrl: 'assets/star-lit-nights.jpeg',
          ctaText: 'Explore our desert camps',
          ctaLink: '#circuits'
        },
        {
          id: 'flotte-vip',
          badge: 'TRANSPORT & MOBILITY',
          title: 'Private Chauffeurs & Modern Fleet',
          description: 'Travel across Morocco with peace of mind in our spacious Mercedes V-Class vans, premium SUVs, and 4x4 vehicles. Our experienced, bilingual drivers cater entirely to your pace, comfort, and spontaneous photo stops.',
          perks: ['Recent, fully air-conditioned vehicles', 'Certified bilingual professional drivers', 'Self-drive rental option from 450 MAD/day'],
          imageUrl: 'assets/taghazout-morocco.jpeg',
          ctaText: 'View transport options',
          ctaLink: '#transport'
        },
        {
          id: 'activites',
          badge: 'ADVENTURE & RECREATION',
          title: 'Desert Adventures & Bespoke Activities',
          description: 'Experience exhilarating quad and buggy safaris through the Agafay stone desert, sunset camel treks, relaxation by panoramic oasis swimming pools, and mesmerizing evening dinner shows.',
          perks: ['Certified guides and modern safety gear', 'Options suitable for families and couples', 'Daily departures with private round-trip transfers'],
          imageUrl: 'assets/agafay-amanjena.jpeg',
          ctaText: 'Enquire about activities',
          ctaLink: '#booking'
        }
      ],
      ar: [
        {
          id: 'bivouacs',
          badge: 'سحر الصحراء',
          title: 'مخيمات بدوية فاخرة وليالٍ تحت النجوم',
          description: 'في قلب كثبان مرزوكة أو فوق تلال أكافاي الساحرة، تجمع مخيماتنا بين الأصالة المغربية والراحة الفندقية التامة. أسرّة مريحة، خيام مجهزة بحمامات خاصة، عشاء فاخر على ضوء الشموع، وسهرات موسيقية حول نار المخيم.',
          perks: ['خيام خاصة فاخرة مجهزة بحمام مدمج', 'عشاء مغربي تقليدي 3 أطباق تحت النجوم', 'جلسات نار المخيم مع أنغام كناوة التراثية'],
          imageUrl: 'assets/star-lit-nights.jpeg',
          ctaText: 'اكتشفوا مخيماتنا الصحراوية',
          ctaLink: '#circuits'
        },
        {
          id: 'flotte-vip',
          badge: 'النقل والراحة',
          title: 'سائقون خاصون وأسطول سيارات حديث',
          description: 'سافروا في أرجاء المغرب بكل راحة وأمان مع أسطول سيارات مرسيدس في-كلاس، وسيارات دفع رباعي 4x4 حديثة ومكيفة. سائقونا المحترفون والمطلعون على مسارات المغرب رهن إشارتكم في كل خطوة.',
          perks: ['سيارات حديثة، نظيفة ومكيفة بالكامل', 'سائقون معتمدون وذوو خبرة واسعة', 'خيار كراء سيارة بدون سائق ابتداءً من 450 درهم/يوم'],
          imageUrl: 'assets/taghazout-morocco.jpeg',
          ctaText: 'اطلعوا على خيارات النقل',
          ctaLink: '#transport'
        },
        {
          id: 'activites',
          badge: 'مغامرات وأنشطة',
          title: 'أنشطة ومغامرات استثنائية في الصحراء',
          description: 'استمتعوا بجولات الكواد والباجي الممتعة في صحراء أكافاي، ركوب الجمال عند غروب الشمس، استرخاء بجانب المسابح البانورامية، وأمسيات عشاء ساحرة مع عروض الفلكلور المغربي.',
          perks: ['مرشدون معتمدون ومعدات سلامة حديثة', 'برامج مناسبة للعائلات والأزواج', 'انطلاق يومي مع خدمة نقل خاص ومباشر'],
          imageUrl: 'assets/agafay-amanjena.jpeg',
          ctaText: 'طلب حجز الأنشطة',
          ctaLink: '#booking'
        }
      ],
      es: [
        {
          id: 'bivouacs',
          badge: 'INMERSIÓN EN EL SAHARA',
          title: 'Campamentos Nómadas y Noches Estrelladas',
          description: 'En el corazón de Merzouga o en las colinas de Agafay, nuestros campamentos combinan autenticidad bereber y confort absoluto. Jaimas con baño privado, cenas a la luz de las velas y música junto a la hoguera.',
          perks: ['Jaimas privadas con baño completo', 'Cena tradicional de 3 platos bajo las estrellas', 'Hoguera con música tradicional gnawa'],
          imageUrl: 'assets/star-lit-nights.jpeg',
          ctaText: 'Descubrir nuestros campamentos',
          ctaLink: '#circuits'
        },
        {
          id: 'flotte-vip',
          badge: 'TRANSPORTE Y MOVILIDAD',
          title: 'Chóferes Privados y Flota de Prestigio',
          description: 'Viaje por Marruecos con total tranquilidad en nuestras furgonetas Mercedes V-Class y 4x4 modernos. Chóferes bilingües y experimentados que se adaptan a su ritmo.',
          perks: ['Vehículos modernos y climatizados', 'Chóferes profesionales a su disposición', 'Alquiler sin chófer desde 450 MAD/día'],
          imageUrl: 'assets/taghazout-morocco.jpeg',
          ctaText: 'Ver opciones de transporte',
          ctaLink: '#transport'
        },
        {
          id: 'activites',
          badge: 'AVENTURA Y OCIO',
          title: 'Aventuras y Actividades en el Desierto',
          description: 'Disfrute de safaris en quad y buggy por Agafay, paseos en dromedario al atardecer, piscinas panorámicas y mágicas cenas espectáculo.',
          perks: ['Guías certificados y equipo de seguridad', 'Ideal para familias y parejas', 'Salidas diarias con traslados privados'],
          imageUrl: 'assets/agafay-amanjena.jpeg',
          ctaText: 'Consultar actividades',
          ctaLink: '#booking'
        }
      ],
      it: [
        {
          id: 'bivouacs',
          badge: 'IMMERSIONE NEL SAHARA',
          title: 'Campi Nomadi di Lusso e Notti Stellate',
          description: 'Tra le dune di Merzouga o le colline di Agafay, i nostri campi fondono l’autenticità berbera con il comfort moderno: tende con bagno privato, cene a lume di candela e musica attorno al fuoco.',
          perks: ['Tende private di lusso con bagno interno', 'Cena tradizionale a 3 portate sotto le stelle', 'Falò serale con musica gnaoua'],
          imageUrl: 'assets/star-lit-nights.jpeg',
          ctaText: 'Scopri i nostri campi',
          ctaLink: '#circuits'
        },
        {
          id: 'flotte-vip',
          badge: 'TRASPORTO E MOBILITÀ',
          title: 'Autisti Privati e Flotta di Pregio',
          description: 'Esplorate il Marocco con la massima serenità a bordo di Mercedes V-Class e 4x4 recenti. Autisti professionisti bilingui sempre disponibili per il vostro comfort.',
          perks: ['Veicoli recenti e climatizzati', 'Autisti esperti al vostro servizio', 'Noleggio auto senza conducente da 450 MAD/giorno'],
          imageUrl: 'assets/taghazout-morocco.jpeg',
          ctaText: 'Vedi opzioni di trasporto',
          ctaLink: '#transport'
        },
        {
          id: 'activites',
          badge: 'AVVENTURA E RELAX',
          title: 'Avventure e Attività nel Deserto',
          description: 'Giri emozionanti in quad e buggy ad Agafay, passeggiate in dromedario al tramonto, relax a bordo piscina panoramica e suggestive cene spettacolo.',
          perks: ['Guide certificate e massima sicurezza', 'Formule perfette per coppie e famiglie', 'Partenze giornaliere con transfer privato'],
          imageUrl: 'assets/agafay-amanjena.jpeg',
          ctaText: 'Richiedi info attività',
          ctaLink: '#booking'
        }
      ],
      de: [
        {
          id: 'bivouacs',
          badge: 'SAHARA-ERLEBNIS',
          title: 'Nomadencamps & Nächte unter den Sternen',
          description: 'Inmitten der Dünen von Merzouga oder den Hügeln von Agafay vereinen unsere Wüstencamps traditionelle Berberkultur mit höchstem Komfort: komfortable Betten, private Zelte mit eigenem Bad und stimmungsvolle Lagerfeuer.',
          perks: ['Private Luxuszelte mit eigenem Bad', 'Traditionelles 3-Gänge-Menü unterm Sternenhimmel', 'Lagerfeuer mit traditioneller Gnawa-Musik'],
          imageUrl: 'assets/star-lit-nights.jpeg',
          ctaText: 'Unsere Wüstencamps entdecken',
          ctaLink: '#circuits'
        },
        {
          id: 'flotte-vip',
          badge: 'TRANSPORT & MOBILITÄT',
          title: 'Private Chauffeure & Moderner Fuhrpark',
          description: 'Reisen Sie entspannt durch Marokko in geräumigen Mercedes V-Klasse Vans und modernen 4x4 Geländewagen. Unsere erfahrenen Chauffeure richten sich ganz nach Ihren Wünschen.',
          perks: ['Neueste klimatisierte Fahrzeuge', 'Erfahrene mehrsprachige Chauffeure', 'Mietwagen ohne Fahrer ab 450 MAD/Tag'],
          imageUrl: 'assets/taghazout-morocco.jpeg',
          ctaText: 'Transportoptionen ansehen',
          ctaLink: '#transport'
        },
        {
          id: 'activites',
          badge: 'ABENTEUER & ERHOLUNG',
          title: 'Wüstenabenteuer & Maßgeschneiderte Aktivitäten',
          description: 'Erleben Sie aufregende Quad- und Buggy-Touren durch die Steinwüste von Agafay, Kamelritte zum Sonnenuntergang, Panoramapools und bezaubernde Dinnershows.',
          perks: ['Geprüfte Guides und moderne Ausrüstung', 'Ideal für Paare und Familien', 'Tägliche Abfahrten mit Privattransfer'],
          imageUrl: 'assets/agafay-amanjena.jpeg',
          ctaText: 'Aktivitäten anfragen',
          ctaLink: '#booking'
        }
      ],
      pt: [
        {
          id: 'bivouacs',
          badge: 'IMERSÃO SAARIANA',
          title: 'Acampamentos Nómadas & Noites Estreladas',
          description: 'Nas dunas de Merzouga ou em Agafay, os nossos acampamentos combinam autenticidade e conforto: tendas privadas com casa de banho, jantares à luz de velas e música tradicional junto à fogueira.',
          perks: ['Tendas privadas com casa de banho privativa', 'Jantar tradicional de 3 pratos sob as estrelas', 'Fogueira e música gnaoua ao vivo'],
          imageUrl: 'assets/star-lit-nights.jpeg',
          ctaText: 'Conhecer os nossos acampamentos',
          ctaLink: '#circuits'
        },
        {
          id: 'flotte-vip',
          badge: 'TRANSPORTE E MOBILIDADE',
          title: 'Motoristas Privados & Frota de Prestígio',
          description: 'Viaje por Marrocos com total conforto em carrinhas Mercedes V-Class e viaturas 4x4 recentes. Motoristas profissionais bilíngues inteiramente dedicados ao seu bem-estar.',
          perks: ['Viaturas recentes e climatizadas', 'Motoristas qualificados e pontuais', 'Aluguer sem motorista desde 450 MAD/dia'],
          imageUrl: 'assets/taghazout-morocco.jpeg',
          ctaText: 'Ver opções de transporte',
          ctaLink: '#transport'
        },
        {
          id: 'activites',
          badge: 'AVENTURA E LAZER',
          title: 'Aventuras e Atividades no Deserto',
          description: 'Experimente passeios de moto-quatro e buggy em Agafay, passeios de dromedário ao pôr do sol, relaxamento junto à piscina e jantares espetáculo fascinantes.',
          perks: ['Guias certificados e segurança total', 'Perfeito para casais e famílias', 'Saídas diárias com transfer privado'],
          imageUrl: 'assets/agafay-amanjena.jpeg',
          ctaText: 'Saber mais sobre atividades',
          ctaLink: '#booking'
        }
      ],
      nl: [
        {
          id: 'bivouacs',
          badge: 'SAHARA BELEVING',
          title: 'Nomadenkampen & Nachten onder de Sterrenhemel',
          description: 'Tussen de zandduinen van Merzouga of de heuvels van Agafay combineren onze kampen Berberse gastvrijheid met modern comfort: luxe tenten met eigen badkamer, diners bij kaarslicht en muziek bij het kampvuur.',
          perks: ['Privétenten met eigen badkamer', 'Traditioneel 3-gangendiner onder de sterren', 'Kampvuur met traditionele Gnawa-muziek'],
          imageUrl: 'assets/star-lit-nights.jpeg',
          ctaText: 'Ontdek onze woestijnkampen',
          ctaLink: '#circuits'
        },
        {
          id: 'flotte-vip',
          badge: 'VERVOER & MOBILITEIT',
          title: 'Privéchauffeurs & Luxe Wagenpark',
          description: 'Reis zorgeloos door Marokko in onze ruime Mercedes V-Klasse busjes en moderne 4x4 terreinwagens met ervaren meertalige chauffeurs.',
          perks: ['Moderne voertuigen met airconditioning', 'Gecertificeerde privéchauffeurs', 'Autohuur zonder chauffeur vanaf 450 MAD/dag'],
          imageUrl: 'assets/taghazout-morocco.jpeg',
          ctaText: 'Bekijk vervoersopties',
          ctaLink: '#transport'
        },
        {
          id: 'activites',
          badge: 'AVONTUUR & ONTSPANNING',
          title: 'Woestijnavonturen & Activiteiten op Maat',
          description: 'Beleef spectaculaire quad- en buggytours door Agafay, kamelenritten bij zonsondergang, ontspanning aan panoramische zwembaden en betoverende dinnershows.',
          perks: ['Gecertificeerde gidsen en veiligheidsuitrusting', 'Ideaal voor koppels en gezinnen', 'Dagelijkse transfers vanaf uw riad'],
          imageUrl: 'assets/agafay-amanjena.jpeg',
          ctaText: 'Activiteiten aanvragen',
          ctaLink: '#booking'
        }
      ]
    };
    return map[lang] || map['fr'];
  }

  // Transport options
  get transport() {
    const lang = this.currentLang();
    const d: Record<Language, any> = {
      fr: {
        tag: 'SERVICE TRANSPORT & MOBILITÉ',
        title: 'Formules de Transport au Choix',
        subtitle: 'Sillonnez le Maroc en toute liberté au volant d’un véhicule récent ou profitez de l’accompagnement sur-mesure d’un chauffeur dédié.',
        card1: {
          tag: 'Autonomie Complète',
          from: 'À partir de',
          price: '450',
          unit: 'DH / Jour',
          title: 'Location Sans Chauffeur',
          desc: 'Flotte de citadines, berlines et SUV récents et parfaitement entretenus avec climatisation pour découvrir le Maroc à votre propre rythme.',
          perks: ['Véhicules récents et climatisés', 'Prise en charge à l’aéroport ou à votre riad', 'Assistance locale 24/7 & kilométrage adapté', 'Contrat clair et sans frais cachés'],
          btn: 'Réserver Sans Chauffeur'
        },
        card2: {
          tag: 'Service VIP Recommandé',
          from: 'Sérénité & Confort',
          price: 'Sur Devis',
          unit: 'Direct Local',
          title: 'Véhicule avec Chauffeur Dédié',
          desc: 'Mercedes V-Class ou 4x4 spacieux avec chauffeur professionnel bilingue à votre entière disposition pour vos transferts et circuits.',
          perks: ['Chauffeurs courtois, ponctuels et expérimentés', 'Carburant, péages et assurance inclus', 'Arrêts photos, pauses thé et conseils locaux', 'Prise en charge directe à votre hébergement'],
          btn: 'Demander un Chauffeur Dédié'
        }
      },
      en: {
        tag: 'TRANSPORT & MOBILITY SOLUTIONS',
        title: 'Morocco Transport Options of Your Choice',
        subtitle: 'Explore Morocco with total independence behind the wheel or relax with our dedicated private bilingual chauffeur service.',
        card1: {
          tag: 'Total Independence',
          from: 'Starting from',
          price: '450',
          unit: 'MAD / Day',
          title: 'Self-Drive Vehicle Rental',
          desc: 'Modern fleet of air-conditioned city cars and comfortable SUVs to explore Morocco at your personal pace.',
          perks: ['Recent, fully air-conditioned vehicles', 'Airport or hotel/riad pick-up & return', '24/7 local assistance & flexible mileage', 'Transparent agreements with zero hidden fees'],
          btn: 'Book Self-Drive Rental'
        },
        card2: {
          tag: 'VIP Service Recommended',
          from: 'Peace of Mind',
          price: 'On Quote',
          unit: 'Direct Local',
          title: 'Dedicated Private Chauffeur',
          desc: 'Spacious Mercedes V-Class or 4x4 with an experienced, bilingual professional driver entirely at your service for tours and transfers.',
          perks: ['Courteous, punctual and licensed drivers', 'Fuel, tolls, and full passenger insurance included', 'Spontaneous photo stops and insider tips', 'Door-to-door pick-up at your lodging'],
          btn: 'Request a Private Chauffeur'
        }
      },
      ar: {
        tag: 'خدمات النقل والراحة',
        title: 'خيارات النقل السياحي بالمغرب',
        subtitle: 'اكتشفوا المغرب بحرية تامة بقيادة سيارة حديثة أو تمتعوا بأعلى درجات الراحة مع سائق خاص ومحترف رهن إشارتكم.',
        card1: {
          tag: 'حرية واستقلالية',
          from: 'ابتداءً من',
          price: '450',
          unit: 'درهم / اليوم',
          title: 'كراء سيارة بدون سائق',
          desc: 'أسطول سيارات سياحية وسيارات دفع رباعي حديثة ومكيفة تتيح لكم استكشاف المغرب حسب وتيرتكم الخاصة.',
          perks: ['سيارات حديثة ومكيفة بالكامل', 'تسليم واستلام بالمطار أو بمكان الإقامة', 'مساعدة محلية 24/7 وكيلومترات مريحة', 'معاملات واضحة وشفافة بدون مصاريف مخفية'],
          btn: 'حجز سيارة بدون سائق'
        },
        card2: {
          tag: 'خدمة راقية موصى بها',
          from: 'راحة واطمئنان',
          price: 'حسب الطلب',
          unit: 'سعر مباشر',
          title: 'سيارة مع سائق خاص مخصص',
          desc: 'سيارات مرسيدس في-كلاس فاخرة أو دفع رباعي مع سائق محترف ولبق يتحدث لغات متعددة لخدمتكم طيلة الرحلة.',
          perks: ['سائقون محترفون وذوو أخلاق عالية ومرونة تامة', 'شامل المحروقات، رسوم الطرق والتأمين', 'توقف لالتقاط الصور واستراحات الشاي التراثي', 'نقل مباشر من وإلى باب مقر إقامتكم'],
          btn: 'طلب سائق خاص'
        }
      },
      es: {
        tag: 'TRANSPORTE Y MOVILIDAD',
        title: 'Opciones de Transporte a su Elección',
        subtitle: 'Recorra Marruecos con total libertad al volante o relájese con el acompañamiento de nuestros chóferes privados profesionales.',
        card1: {
          tag: 'Total Autonomía',
          from: 'A partir de',
          price: '450',
          unit: 'MAD / Día',
          title: 'Alquiler Sin Chófer',
          desc: 'Flota de turismos y SUV modernos y climatizados para explorar Marruecos a su propio ritmo.',
          perks: ['Vehículos modernos y climatizados', 'Entrega en el aeropuerto o su riad', 'Asistencia local 24/7', 'Tarifas claras sin gastos ocultos'],
          btn: 'Reservar Sin Chófer'
        },
        card2: {
          tag: 'Servicio VIP Recomendado',
          from: 'Tranquilidad y Confort',
          price: 'A Medida',
          unit: 'Directo Local',
          title: 'Vehículo con Chófer Dedicado',
          desc: 'Mercedes V-Class o 4x4 espacioso con chófer profesional bilingüe a su completa disposición para circuitos y traslados.',
          perks: ['Chóferes profesionales, amables y puntuales', 'Combustible, peajes y seguros incluidos', 'Paradas fotográficas y consejos locales', 'Recogida directa en la puerta de su alojamiento'],
          btn: 'Solicitar Chófer Privado'
        }
      },
      it: {
        tag: 'TRASPORTO E MOBILITÀ',
        title: 'Formule di Trasporto a Vostra Scelta',
        subtitle: 'Viaggiate in libertà alla guida di un veicolo recente o affidatevi al servizio su misura di un autista dedicato.',
        card1: {
          tag: 'Autonomia Completa',
          from: 'A partire da',
          price: '450',
          unit: 'MAD / Giorno',
          title: 'Noleggio Senza Conducente',
          desc: 'Flotta di berline e SUV recenti e climatizzati per visitare il Marocco secondo i vostri ritmi.',
          perks: ['Veicoli recenti con aria condizionata', 'Ritiro in aeroporto o al vostro riad', 'Assistenza locale 24/7', 'Condizioni chiare e trasparenti'],
          btn: 'Prenota Senza Conducente'
        },
        card2: {
          tag: 'Servizio VIP Consigliato',
          from: 'Comfort e Serenità',
          price: 'Su Misura',
          unit: 'Diretto Locale',
          title: 'Veicolo con Autista Privato',
          desc: 'Mercedes V-Class o 4x4 con autista esperto bilingue a vostra completa disposizione durante il soggiorno.',
          perks: ['Autisti esperti, cordiali e puntuali', 'Carburante, pedaggi e assicurazione inclusi', 'Soste foto spontanee e consigli autentici', 'Pick-up direttamente presso la struttura'],
          btn: 'Richiedi Autista Privato'
        }
      },
      de: {
        tag: 'TRANSPORT & MOBILITÄT',
        title: 'Transportlösungen nach Maß',
        subtitle: 'Reisen Sie völlig unabhängig im Mietwagen oder genießen Sie die Vorzüge eines privaten Chauffeurs.',
        card1: {
          tag: 'Volle Unabhängigkeit',
          from: 'Ab',
          price: '450',
          unit: 'MAD / Tag',
          title: 'Mietwagen ohne Fahrer',
          desc: 'Moderne, klimatisierte Pkws und SUVs, um Marokko im eigenen Tempo zu entdecken.',
          perks: ['Neueste Fahrzeuge mit Klimaanlage', 'Abholung am Flughafen oder Riad', '24/7 Pannenhilfe vor Ort', 'Transparente Verträge ohne Zusatzkosten'],
          btn: 'Mietwagen Buchen'
        },
        card2: {
          tag: 'Empfohlener VIP-Service',
          from: 'Komfort & Ruhe',
          price: 'Auf Anfrage',
          unit: 'Direkt Vor Ort',
          title: 'Fahrzeug mit Privatchauffeur',
          desc: 'Großraum-Vans von Mercedes oder 4x4 Geländewagen mit erfahrenem Chauffeur für Touren und Transfers.',
          perks: ['Professionelle, pünktliche Fahrer', 'Kraftstoff, Maut und Versicherung inklusive', 'Fotostopps und Geheimtipps', 'Direkte Abholung an Ihrer Unterkunft'],
          btn: 'Privatchauffeur Anfragen'
        }
      },
      pt: {
        tag: 'TRANSPORTE E MOBILIDADE',
        title: 'Opções de Transporte à sua Escolha',
        subtitle: 'Viaje em autonomia ao volante de uma viatura recente ou relaxe com o acompanhamento de um motorista privado.',
        card1: {
          tag: 'Autonomia Total',
          from: 'A partir de',
          price: '450',
          unit: 'MAD / Dia',
          title: 'Aluguer Sem Motorista',
          desc: 'Viaturas ligeiras e SUV climatizados para explorar Marrocos ao seu próprio ritmo.',
          perks: ['Veículos recentes e climatizados', 'Recolha no aeroporto ou no seu riad', 'Assistência local 24/7', 'Contratos claros sem taxas ocultas'],
          btn: 'Reservar Sem Motorista'
        },
        card2: {
          tag: 'Serviço VIP Recomendado',
          from: 'Conforto e Tranquilidade',
          price: 'Sob Consulta',
          unit: 'Direto Local',
          title: 'Viatura com Motorista Privado',
          desc: 'Mercedes V-Class ou 4x4 espaçoso com motorista profissional à sua disposição durante a estadia.',
          perks: ['Motoristas educados e experientes', 'Combustível, portagens e seguros incluídos', 'Paragens fotográficas e dicas locais', 'Recolha direta no seu alojamento'],
          btn: 'Pedir Motorista Privado'
        }
      },
      nl: {
        tag: 'VERVOER & MOBILITEIT',
        title: 'Vervoersopties naar Wens',
        subtitle: 'Ontdek Marokko in alle vrijheid achter het stuur of geniet van de service van een ervaren privéchauffeur.',
        card1: {
          tag: 'Volledige Vrijheid',
          from: 'Vanaf',
          price: '450',
          unit: 'MAD / Dag',
          title: 'Autohuur Zonder Chauffeur',
          desc: 'Moderne vloot van stadsauto\'s en comfortabele SUV\'s om Marokko op eigen tempo te verkennen.',
          perks: ['Recente auto\'s met airconditioning', 'Ophaalservice op vliegveld of bij riad', '24/7 pechhulp & flexibele kilometers', 'Heldere voorwaarden zonder verborgen kosten'],
          btn: 'Huurauto Reserveren'
        },
        card2: {
          tag: 'Aanbevolen VIP-Service',
          from: 'Zorgeloos Comfort',
          price: 'Op Offerte',
          unit: 'Direct Lokaal',
          title: 'Voertuig met Privéchauffeur',
          desc: 'Ruime Mercedes V-Klasse of 4x4 met een meertalige privéchauffeur voor uw rondreizen en transfers.',
          perks: ['Vriendelijke, stipte en ervaren chauffeurs', 'Brandstof, tol en verzekering inbegrepen', 'Fotostops en authentieke lokale tips', 'Rechtstreeks opgehaald bij uw verblijf'],
          btn: 'Privéchauffeur Aanvragen'
        }
      }
    };
    return d[lang] || d['fr'];
  }

  // Fast booking & contact details (strictly 3 travel options, NO emails)
  get contact() {
    const lang = this.currentLang();
    const d: Record<Language, any> = {
      fr: {
        tag: 'RÉSERVATION & DEVIS DIRECT',
        title: 'Demande de Devis & Contact Direct',
        subtitle: 'Remplissez le formulaire ci-dessous pour transmettre votre demande directement à notre équipe à Marrakech sur WhatsApp.',
        formTitle: 'Votre Projet de Voyage',
        formSubtitle: 'Réponse rapide et devis gratuit garanti sans intermédiaire.',
        nameLabel: 'Nom & Prénom *',
        namePlaceholder: 'ex: Sarah Dupont',
        phoneLabel: 'Numéro WhatsApp *',
        phonePlaceholder: '+33 ... ou +212 ...',
        dateLabel: 'Date souhaitée',
        guestsLabel: 'Nombre de personnes',
        guestsOptions: [
          { val: '1', label: '1 voyageur (Solo)' },
          { val: '2', label: '2 voyageurs (Couple / Duo)' },
          { val: '3-4', label: '3 à 4 voyageurs (Famille / Amis)' },
          { val: '5-8', label: '5 à 8 voyageurs (Petit groupe)' },
          { val: '8+', label: 'Plus de 8 personnes (Groupe / Événement)' }
        ],
        // The strictly required 3 options
        travelChoiceLabel: 'Type de prestation souhaité *',
        travelChoices: [
          { val: 'Circuits organisés (Merzouga, Atlas, Ouzoud...)', label: '1. Circuits organisés (Merzouga, Atlas, Ouzoud...)' },
          { val: 'Excursions d\'un jour (Agafay, Essaouira...)', label: '2. Excursions d\'un jour (Agafay, Essaouira...)' },
          { val: 'Transport touristique privé (Navette, Chauffeur, Location)', label: '3. Transport touristique privé (Navette, Chauffeur, Location)' }
        ],
        transportLabel: 'Formule de transport préférée',
        transportOptions: [
          { val: 'Avec chauffeur privé dédié (Service VIP)', label: 'Avec chauffeur privé dédié (Service VIP)' },
          { val: 'Location sans chauffeur (dès 450 DH/jour)', label: 'Location sans chauffeur (dès 450 DH/jour)' }
        ],
        notesLabel: 'Précisions ou demandes particulières',
        notesPlaceholder: 'ex: Nom de votre riad, enfants à bord, célébration particulière...',
        btnSubmit: 'Envoyer ma demande sur WhatsApp',
        directDeskTitle: 'Assistance Directe 24/7',
        phone1: '+212 6 62 63 60 95',
        phone2: '+212 6 37 05 31 31',
        location: 'Marrakech & Maroc entier',
        reasonsTitle: 'Pourquoi Réserver avec Medade Travel ?',
        reasons: [
          { num: '01', title: 'Prix Direct Local', desc: 'Tarifs transparents sans les commissions des plateformes tierces.' },
          { num: '02', title: 'Prise en Charge au Riad', desc: 'Votre chauffeur vient vous chercher directement à votre hébergement.' },
          { num: '03', title: 'Flexibilité & Écoute', desc: 'Modification facile d\'itinéraire jusqu\'à 24h avant votre départ.' },
          { num: '04', title: 'Assistance Réactive', desc: 'Notre équipe locale est joignable sur WhatsApp à tout moment.' }
        ]
      },
      en: {
        tag: 'DIRECT BOOKING & ENQUIRY',
        title: 'Instant Quote & Direct Contact',
        subtitle: 'Fill out the form below to forward your travel request directly to our Marrakech team via WhatsApp.',
        formTitle: 'Your Travel Request',
        formSubtitle: 'Fast response and free quotation with zero third-party commissions.',
        nameLabel: 'Full Name *',
        namePlaceholder: 'e.g. John Miller',
        phoneLabel: 'WhatsApp Phone Number *',
        phonePlaceholder: '+44 ... or +1 ... or +212 ...',
        dateLabel: 'Desired travel date',
        guestsLabel: 'Number of travellers',
        guestsOptions: [
          { val: '1', label: '1 traveller (Solo)' },
          { val: '2', label: '2 travellers (Couple)' },
          { val: '3-4', label: '3 to 4 travellers (Family / Friends)' },
          { val: '5-8', label: '5 to 8 travellers (Small group)' },
          { val: '8+', label: 'More than 8 travellers (Group / Event)' }
        ],
        travelChoiceLabel: 'Selected travel category *',
        travelChoices: [
          { val: 'Circuits organisés (Merzouga, Atlas, Ouzoud...)', label: '1. Multi-day organized tours (Merzouga, Atlas, Ouzoud...)' },
          { val: 'Excursions d\'un jour (Agafay, Essaouira...)', label: '2. Day trips & excursions (Agafay, Essaouira...)' },
          { val: 'Transport touristique privé (Navette, Chauffeur, Location)', label: '3. Private tourist transport (Chauffeur, Shuttle, Rental)' }
        ],
        transportLabel: 'Preferred transport formula',
        transportOptions: [
          { val: 'With dedicated private chauffeur (VIP Service)', label: 'With dedicated private chauffeur (VIP Service)' },
          { val: 'Self-drive rental (from 450 MAD/day)', label: 'Self-drive rental (from 450 MAD/day)' }
        ],
        notesLabel: 'Notes or special requests',
        notesPlaceholder: 'e.g. Hotel/riad name, dietary needs, birthday celebration...',
        btnSubmit: 'Send Request via WhatsApp',
        directDeskTitle: '24/7 Local Assistance',
        phone1: '+212 6 62 63 60 95',
        phone2: '+212 6 37 05 31 31',
        location: 'Marrakech & Across Morocco',
        reasonsTitle: 'Why Book with Medade Travel?',
        reasons: [
          { num: '01', title: 'Fair Direct Local Rates', desc: 'No online middleman fees or hidden commissions.' },
          { num: '02', title: 'Direct Riad Pick-up', desc: 'Your private driver meets you directly at your accommodation.' },
          { num: '03', title: 'Flexible Schedule', desc: 'Modify your itinerary easily up to 24 hours in advance.' },
          { num: '04', title: 'Responsive Support', desc: 'Our Marrakech team is reachable 24/7 on WhatsApp.' }
        ]
      },
      ar: {
        tag: 'طلب حجز واستفسار مباشر',
        title: 'طلب عرض سعر وتواصل مباشر',
        subtitle: 'املأ الاستمارة وتواصل مباشرة مع فريقنا المحلي بمراكش لتأكيد رحلتك بأفضل سعر بدون وسيط.',
        formTitle: 'تفاصيل طلبكم',
        formSubtitle: 'استجابة سريعة وعرض سعر مجاني ودقيق عبر واتساب.',
        nameLabel: 'الاسم الكامل *',
        namePlaceholder: 'مثال: محمد العمري',
        phoneLabel: 'رقم الهاتف (واتساب) *',
        phonePlaceholder: '+212 ... أو +966 ... أو +971 ...',
        dateLabel: 'تاريخ السفر المطلوب',
        guestsLabel: 'عدد المسافرين',
        guestsOptions: [
          { val: '1', label: 'مسافر واحد (فردي)' },
          { val: '2', label: 'مسافران (زوجان)' },
          { val: '3-4', label: '3 إلى 4 مسافرين (عائلة / أصدقاء)' },
          { val: '5-8', label: '5 إلى 8 مسافرين (مجموعة صغيرة)' },
          { val: '8+', label: 'أكثر من 8 مسافرين (مجموعة كبيرة)' }
        ],
        travelChoiceLabel: 'نوع الخدمة المطلوبة *',
        travelChoices: [
          { val: 'Circuits organisés (Merzouga, Atlas, Ouzoud...)', label: '1. جولات سياحية منظمة (مرزوكة، الأطلس، أوزود...)' },
          { val: 'Excursions d\'un jour (Agafay, Essaouira...)', label: '2. رحلات اليوم الواحد (أكافاي، الصويرة...)' },
          { val: 'Transport touristique privé (Navette, Chauffeur, Location)', label: '3. نقل سياحي خاص (سائق خاص، نقل مطار، كراء سيارات)' }
        ],
        transportLabel: 'خيار النقل المفضل',
        transportOptions: [
          { val: 'مع سائق خاص مخصص (خدمة VIP)', label: 'مع سائق خاص مخصص (خدمة VIP)' },
          { val: 'كراء سيارة بدون سائق (ابتداءً من 450 درهم/يوم)', label: 'كراء سيارة بدون سائق (ابتداءً من 450 درهم/يوم)' }
        ],
        notesLabel: 'ملاحظات أو طلبات خاصة',
        notesPlaceholder: 'مثال: اسم الرياض أو الفندق، أطفال، مناسبة خاصة...',
        btnSubmit: 'إرسال الطلب عبر واتساب',
        directDeskTitle: 'تواصل فوري على مدار الساعة',
        phone1: '+212 6 62 63 60 95',
        phone2: '+212 6 37 05 31 31',
        location: 'مراكش والمغرب بأكمله',
        reasonsTitle: 'لماذا تختار ميداد ترافل؟',
        reasons: [
          { num: '01', title: 'سعر محلي مباشر', desc: 'أسعار بدون عمولات المنصات الأجنبية الوسيطة.' },
          { num: '02', title: 'استقبال مباشر بالرياض', desc: 'سائقكم يستقبلكم مباشرة أمام مقر إقامتكم.' },
          { num: '03', title: 'مرونة في المواعيد', desc: 'إمكانية تعديل خط السير بسهولة عبر رسالة واتساب.' },
          { num: '04', title: 'دعم محلي فوري', desc: 'فريقنا متاح في أي وقت للإجابة على كل استفسار.' }
        ]
      },
      es: {
        tag: 'RESERVA Y CONTACTO DIRECTO',
        title: 'Presupuesto Instantáneo y Contacto',
        subtitle: 'Rellene el formulario para enviar su solicitud directamente a nuestro equipo en Marrakech por WhatsApp.',
        formTitle: 'Su Plan de Viaje',
        formSubtitle: 'Respuesta rápida y presupuesto gratuito sin comisiones de intermediarios.',
        nameLabel: 'Nombre y Apellidos *',
        namePlaceholder: 'ej: Carlos Martínez',
        phoneLabel: 'Número de WhatsApp *',
        phonePlaceholder: '+34 ... o +212 ...',
        dateLabel: 'Fecha deseada',
        guestsLabel: 'Número de personas',
        guestsOptions: [
          { val: '1', label: '1 viajero (Solo)' },
          { val: '2', label: '2 viajeros (Pareja)' },
          { val: '3-4', label: '3 a 4 viajeros (Familia / Amigos)' },
          { val: '5-8', label: '5 a 8 viajeros (Grupo pequeño)' },
          { val: '8+', label: 'Más de 8 viajeros (Grupo / Evento)' }
        ],
        travelChoiceLabel: 'Tipo de servicio deseado *',
        travelChoices: [
          { val: 'Circuits organisés (Merzouga, Atlas, Ouzoud...)', label: '1. Circuitos organizados (Merzouga, Atlas, Ouzoud...)' },
          { val: 'Excursions d\'un jour (Agafay, Essaouira...)', label: '2. Excursiones de un día (Agafay, Essaouira...)' },
          { val: 'Transport touristique privé (Navette, Chauffeur, Location)', label: '3. Transporte turístico privado (Chófer, Traslados, Alquiler)' }
        ],
        transportLabel: 'Modalidad de transporte',
        transportOptions: [
          { val: 'Con chófer privado dedicado (Servicio VIP)', label: 'Con chófer privado dedicado (Servicio VIP)' },
          { val: 'Alquiler sin chófer (desde 450 MAD/día)', label: 'Alquiler sin chófer (desde 450 MAD/día)' }
        ],
        notesLabel: 'Comentarios o peticiones especiales',
        notesPlaceholder: 'ej: Nombre del riad, celebración de cumpleaños...',
        btnSubmit: 'Enviar Solicitud por WhatsApp',
        directDeskTitle: 'Atención Directa 24/7',
        phone1: '+212 6 62 63 60 95',
        phone2: '+212 6 37 05 31 31',
        location: 'Marrakech y todo Marruecos',
        reasonsTitle: '¿Por qué Reservar con Medade Travel?',
        reasons: [
          { num: '01', title: 'Precio Local Directo', desc: 'Precios justos sin comisiones de portales externos.' },
          { num: '02', title: 'Recogida en su Riad', desc: 'Su conductor privado le recogerá directamente en su alojamiento.' },
          { num: '03', title: 'Flexibilidad de Horarios', desc: 'Cambios sencillos de itinerario hasta 24h antes.' },
          { num: '04', title: 'Asistencia Local 24/7', desc: 'Nuestro equipo está disponible por WhatsApp en todo momento.' }
        ]
      },
      it: {
        tag: 'PRENOTAZIONE E CONTATTO DIRETTO',
        title: 'Preventivo Immediato e Contatto',
        subtitle: 'Compilate il modulo per inviare la vostra richiesta direttamente al nostro team a Marrakech su WhatsApp.',
        formTitle: 'Il Vostro Progetto di Viaggio',
        formSubtitle: 'Risposta rapida e preventivo gratuito garantito senza commissioni.',
        nameLabel: 'Nome e Cognome *',
        namePlaceholder: 'es: Marco Rossi',
        phoneLabel: 'Numero WhatsApp *',
        phonePlaceholder: '+39 ... o +212 ...',
        dateLabel: 'Data prevista',
        guestsLabel: 'Numero di viaggiatori',
        guestsOptions: [
          { val: '1', label: '1 viaggiatore (Solo)' },
          { val: '2', label: '2 viaggiatori (Coppia)' },
          { val: '3-4', label: '3 a 4 viaggiatori (Famiglia / Amici)' },
          { val: '5-8', label: '5 a 8 viaggiatori (Piccolo gruppo)' },
          { val: '8+', label: 'Più di 8 viaggiatori (Gruppo / Evento)' }
        ],
        travelChoiceLabel: 'Tipo di servizio richiesto *',
        travelChoices: [
          { val: 'Circuits organisés (Merzouga, Atlas, Ouzoud...)', label: '1. Tour organizzati (Merzouga, Atlante, Ouzoud...)' },
          { val: 'Excursions d\'un jour (Agafay, Essaouira...)', label: '2. Escursioni di un giorno (Agafay, Essaouira...)' },
          { val: 'Transport touristique privé (Navette, Chauffeur, Location)', label: '3. Trasporto turistico privato (Autista, Navetta, Noleggio)' }
        ],
        transportLabel: 'Formula di trasporto preferita',
        transportOptions: [
          { val: 'Con autista privato dedicato (Servizio VIP)', label: 'Con autista privato dedicato (Servizio VIP)' },
          { val: 'Noleggio senza conducente (da 450 MAD/giorno)', label: 'Noleggio senza conducente (da 450 MAD/giorno)' }
        ],
        notesLabel: 'Note o richieste particolari',
        notesPlaceholder: 'es: Nome del riad, esigenze alimentari...',
        btnSubmit: 'Invia Richiesta su WhatsApp',
        directDeskTitle: 'Assistenza Diretta 24/7',
        phone1: '+212 6 62 63 60 95',
        phone2: '+212 6 37 05 31 31',
        location: 'Marrakech e tutto il Marocco',
        reasonsTitle: 'Perché Scegliere Medade Travel?',
        reasons: [
          { num: '01', title: 'Prezzo Diretto Locale', desc: 'Nessun ricarico di piattaforme intermediarie.' },
          { num: '02', title: 'Pick-up al Riad', desc: 'Il vostro autista vi aspetta comodamente al vostro alloggio.' },
          { num: '03', title: 'Massima Flessibilità', desc: 'Modifica facile dell\'itinerario fino a 24h prima.' },
          { num: '04', title: 'Supporto Costante', desc: 'Il nostro team è reperibile su WhatsApp in qualunque momento.' }
        ]
      },
      de: {
        tag: 'DIREKTBUCHUNG & ANFRAGE',
        title: 'Sofortangebot & Direkter Kontakt',
        subtitle: 'Füllen Sie das Formular aus, um Ihre Reiseanfrage direkt an unser Team in Marrakesch per WhatsApp zu senden.',
        formTitle: 'Ihre Reiseplanung',
        formSubtitle: 'Schnelle Antwort und kostenloses Angebot ohne Vermittlungsgebühren.',
        nameLabel: 'Vor- und Nachname *',
        namePlaceholder: 'z.B. Michael Weber',
        phoneLabel: 'WhatsApp-Telefonnummer *',
        phonePlaceholder: '+49 ... oder +212 ...',
        dateLabel: 'Gewünschtes Reisedatum',
        guestsLabel: 'Anzahl der Reisenden',
        guestsOptions: [
          { val: '1', label: '1 Reisender (Alleinreisend)' },
          { val: '2', label: '2 Reisende (Paar)' },
          { val: '3-4', label: '3 bis 4 Reisende (Familie / Freunde)' },
          { val: '5-8', label: '5 bis 8 Reisende (Kleine Gruppe)' },
          { val: '8+', label: 'Mehr als 8 Personen (Gruppe / Event)' }
        ],
        travelChoiceLabel: 'Gewünschte Reisekategorie *',
        travelChoices: [
          { val: 'Circuits organisés (Merzouga, Atlas, Ouzoud...)', label: '1. Organisierte Rundreisen (Merzouga, Atlas, Ouzoud...)' },
          { val: 'Excursions d\'un jour (Agafay, Essaouira...)', label: '2. Tagesausflüge (Agafay, Essaouira...)' },
          { val: 'Transport touristique privé (Navette, Chauffeur, Location)', label: '3. Privater Touristentransport (Chauffeur, Transfer, Mietwagen)' }
        ],
        transportLabel: 'Bevorzugter Transport',
        transportOptions: [
          { val: 'Mit persönlichem Privatchauffeur (VIP-Service)', label: 'Mit persönlichem Privatchauffeur (VIP-Service)' },
          { val: 'Mietwagen ohne Fahrer (ab 450 MAD/Tag)', label: 'Mietwagen ohne Fahrer (ab 450 MAD/Tag)' }
        ],
        notesLabel: 'Besondere Wünsche oder Hinweise',
        notesPlaceholder: 'z.B. Name Ihres Riads, besondere Anlässe...',
        btnSubmit: 'Anfrage per WhatsApp Senden',
        directDeskTitle: 'Direkte Hilfe 24/7',
        phone1: '+212 6 62 63 60 95',
        phone2: '+212 6 37 05 31 31',
        location: 'Marrakesch & ganz Marokko',
        reasonsTitle: 'Warum Medade Travel?',
        reasons: [
          { num: '01', title: 'Faire Direktpreise', desc: 'Keine versteckten Gebühren oder Buchungsportale.' },
          { num: '02', title: 'Abholung am Riad', desc: 'Ihr Chauffeur holt Sie direkt an Ihrer Unterkunft ab.' },
          { num: '03', title: 'Flexible Zeitplanung', desc: 'Einfache Anpassung Ihrer Route bis zu 24 Stunden vorher.' },
          { num: '04', title: '24/7 Ansprechpartner', desc: 'Unser lokales Team ist jederzeit über WhatsApp erreichbar.' }
        ]
      },
      pt: {
        tag: 'RESERVA E CONTACTO DIRETO',
        title: 'Orçamento Rápido e Contacto Direto',
        subtitle: 'Preencha o formulário para enviar o seu pedido diretamente à nossa equipa em Marraquexe via WhatsApp.',
        formTitle: 'O Seu Pedido de Viagem',
        formSubtitle: 'Resposta rápida e orçamento gratuito sem comissões de terceiros.',
        nameLabel: 'Nome Completo *',
        namePlaceholder: 'ex: Tiago Silva',
        phoneLabel: 'Número de WhatsApp *',
        phonePlaceholder: '+351 ... ou +212 ...',
        dateLabel: 'Data prevista',
        guestsLabel: 'Número de viajantes',
        guestsOptions: [
          { val: '1', label: '1 viajante (Individual)' },
          { val: '2', label: '2 viajantes (Casal)' },
          { val: '3-4', label: '3 a 4 viajantes (Família / Amigos)' },
          { val: '5-8', label: '5 a 8 viajantes (Grupo pequeno)' },
          { val: '8+', label: 'Mais de 8 viajantes (Grupo grande)' }
        ],
        travelChoiceLabel: 'Categoria de serviço pretendida *',
        travelChoices: [
          { val: 'Circuits organisés (Merzouga, Atlas, Ouzoud...)', label: '1. Circuitos organizados (Merzouga, Atlas, Ouzoud...)' },
          { val: 'Excursions d\'un jour (Agafay, Essaouira...)', label: '2. Excursões de um dia (Agafay, Essaouira...)' },
          { val: 'Transport touristique privé (Navette, Chauffeur, Location)', label: '3. Transporte turístico privado (Motorista, Shuttles, Aluguer)' }
        ],
        transportLabel: 'Opção de transporte preferida',
        transportOptions: [
          { val: 'Com motorista privado dedicado (Serviço VIP)', label: 'Com motorista privado dedicado (Serviço VIP)' },
          { val: 'Aluguer sem motorista (desde 450 MAD/dia)', label: 'Aluguer sem motorista (desde 450 MAD/dia)' }
        ],
        notesLabel: 'Notas ou pedidos especiais',
        notesPlaceholder: 'ex: Nome do riad, celebração especial...',
        btnSubmit: 'Enviar Pedido por WhatsApp',
        directDeskTitle: 'Apoio Local 24/7',
        phone1: '+212 6 62 63 60 95',
        phone2: '+212 6 37 05 31 31',
        location: 'Marraquexe e todo o Marrocos',
        reasonsTitle: 'Porquê a Medade Travel?',
        reasons: [
          { num: '01', title: 'Preço Direto Local', desc: 'Preços sem comissões de intermediários.' },
          { num: '02', title: 'Recolha no seu Riad', desc: 'O seu motorista privado recolhe-o diretamente no alojamento.' },
          { num: '03', title: 'Flexibilidade Total', desc: 'Altere itinerários facilmente até 24 horas antes.' },
          { num: '04', title: 'Apoio Constante', desc: 'A nossa equipa está sempre disponível por WhatsApp.' }
        ]
      },
      nl: {
        tag: 'DIRECTE BOEKING & CONTACT',
        title: 'Directe Offerte & Contact',
        subtitle: 'Vul het formulier in om uw reisaanvraag direct via WhatsApp naar ons team in Marrakech te sturen.',
        formTitle: 'Uw Reisplannen',
        formSubtitle: 'Snel antwoord en gratis offerte zonder tussenkomst van boekingssites.',
        nameLabel: 'Volledige Naam *',
        namePlaceholder: 'bijv. Daan Jansen',
        phoneLabel: 'WhatsApp Telefoonnummer *',
        phonePlaceholder: '+31 ... of +212 ...',
        dateLabel: 'Gewenste reisdatum',
        guestsLabel: 'Aantal reizigers',
        guestsOptions: [
          { val: '1', label: '1 reiziger (Solo)' },
          { val: '2', label: '2 reizigers (Koppel)' },
          { val: '3-4', label: '3 tot 4 reizigers (Familie / Vrienden)' },
          { val: '5-8', label: '5 tot 8 reizigers (Kleine groep)' },
          { val: '8+', label: 'Meer dan 8 reizigers (Groep / Evenement)' }
        ],
        travelChoiceLabel: 'Gewenste reiscategorie *',
        travelChoices: [
          { val: 'Circuits organisés (Merzouga, Atlas, Ouzoud...)', label: '1. Georganiseerde rondreizen (Merzouga, Atlas, Ouzoud...)' },
          { val: 'Excursions d\'un jour (Agafay, Essaouira...)', label: '2. Dagtochten (Agafay, Essaouira...)' },
          { val: 'Transport touristique privé (Navette, Chauffeur, Location)', label: '3. Privé toeristisch vervoer (Chauffeur, Shuttles, Autoverhuur)' }
        ],
        transportLabel: 'Voorkeur voor vervoer',
        transportOptions: [
          { val: 'Met toegewijde privéchauffeur (VIP-service)', label: 'Met toegewijde privéchauffeur (VIP-service)' },
          { val: 'Huurauto zonder chauffeur (vanaf 450 MAD/dag)', label: 'Huurauto zonder chauffeur (vanaf 450 MAD/dag)' }
        ],
        notesLabel: 'Opmerkingen of speciale wensen',
        notesPlaceholder: 'bijv. Naam van uw riad, verjaardag...',
        btnSubmit: 'Aanvraag Verzenden via WhatsApp',
        directDeskTitle: '24/7 Lokale Assistentie',
        phone1: '+212 6 62 63 60 95',
        phone2: '+212 6 37 05 31 31',
        location: 'Marrakech & heel Marokko',
        reasonsTitle: 'Waarom Medade Travel?',
        reasons: [
          { num: '01', title: 'Eerlijke Directe Tarieven', desc: 'Geen provisies aan externe platforms.' },
          { num: '02', title: 'Ophaalservice bij uw Riad', desc: 'Uw privéchauffeur haalt u comfortabel op bij uw verblijf.' },
          { num: '03', title: 'Flexibele Planning', desc: 'Pas uw reis eenvoudig aan tot 24 uur van tevoren.' },
          { num: '04', title: '24/7 WhatsApp Hulp', desc: 'Ons team in Marrakech staat altijd voor u klaar.' }
        ]
      }
    };
    return d[lang] || d['fr'];
  }
}
