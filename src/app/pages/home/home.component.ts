import { Component, inject, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  LanguageService, 
  Circuit, 
  EventStory, 
  ActivityItem, 
  EventsSectionHeader, 
  ActivitiesSectionHeader 
} from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('heroVideo') heroVideoRef!: ElementRef<HTMLVideoElement>;
  langService = inject(LanguageService);

  primaryPhone = '+212 6 37 05 31 31';
  secondaryPhone = '+212 6 37 17 09 09';
  whatsappNumber = '212637053131';

  activeCircuitId = 'circuit-1';
  expandedDayIndex: { [key: string]: number | null } = {
    'circuit-1': 0,
    'circuit-2': 0,
    'circuit-3': 0
  };

  // Activities 3D Perspective Slider state
  activeActivityIndex = 0;
  autoPlayTimer: any = null;
  isPaused = false;
  touchStartX = 0;
  touchEndX = 0;

  bookingForm = {
    name: '',
    phone: '',
    travelDate: '',
    guests: '2',
    serviceType: '',
    transportOption: '',
    notes: ''
  };

  ngOnInit() {
    this.syncFormDefaults();
  }

  ngAfterViewInit() {
    this.playHeroVideo();
  }

  private playHeroVideo(): void {
    const video = this.heroVideoRef?.nativeElement;
    if (video) {
      video.muted = true;
      video.volume = 0;
      video.play().catch(() => {
        // Fallback: try again after a short delay
        setTimeout(() => video.play().catch(() => {}), 500);
      });
    }
  }

  ngOnDestroy() {
    this.stopSliderAutoplay();
  }

  get circuits(): Circuit[] {
    return this.langService.circuits;
  }

  get currentCircuit(): Circuit {
    return this.circuits.find(c => c.id === this.activeCircuitId) || this.circuits[0];
  }

  get events(): EventStory[] {
    return this.langService.events;
  }

  get experiences(): EventStory[] {
    return this.events;
  }

  get eventsSection(): EventsSectionHeader {
    return this.langService.eventsSection;
  }

  get experiencesSection(): EventsSectionHeader {
    return this.eventsSection;
  }

  get activities(): ActivityItem[] {
    return this.langService.activities;
  }

  get activitiesSection(): ActivitiesSectionHeader {
    return this.langService.activitiesSection;
  }

  get currentActivity(): ActivityItem {
    const list = this.activities;
    return list[this.activeActivityIndex] || list[0];
  }

  get philosophy() {
    return this.langService.philosophy;
  }

  get transportData() {
    return this.langService.transport;
  }

  get contactData() {
    return this.langService.contact;
  }

  get hero() {
    return this.langService.hero;
  }

  get circuitsSection() {
    return this.langService.circuitsSection;
  }

  syncFormDefaults() {
    const choices = this.contactData.travelChoices;
    if (choices && choices.length > 0 && !this.bookingForm.serviceType) {
      this.bookingForm.serviceType = choices[0].val;
    }
    const transportOpts = this.contactData.transportOptions;
    if (transportOpts && transportOpts.length > 0 && !this.bookingForm.transportOption) {
      this.bookingForm.transportOption = transportOpts[0].val;
    }
  }

  selectCircuit(id: string) {
    this.activeCircuitId = id;
    if (this.expandedDayIndex[id] === undefined) {
      this.expandedDayIndex[id] = 0;
    }
  }

  toggleDay(circuitId: string, dayIdx: number) {
    if (this.expandedDayIndex[circuitId] === dayIdx) {
      this.expandedDayIndex[circuitId] = null;
    } else {
      this.expandedDayIndex[circuitId] = dayIdx;
    }
  }

  isDayExpanded(circuitId: string, dayIdx: number): boolean {
    return this.expandedDayIndex[circuitId] === dayIdx;
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    if (typeof document !== 'undefined') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // ACTIVITIES 3D SLIDER LOGIC (Manual navigation only)
  // =========================================================================
  startSliderAutoplay() {
    // Disabled per user requirement: manual navigation only
    this.stopSliderAutoplay();
  }

  stopSliderAutoplay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  pauseSlider() {
    this.isPaused = true;
  }

  resumeSlider() {
    this.isPaused = false;
  }

  nextActivity() {
    const total = this.activities.length;
    if (total === 0) return;
    this.activeActivityIndex = (this.activeActivityIndex + 1) % total;
  }

  prevActivity() {
    const total = this.activities.length;
    if (total === 0) return;
    this.activeActivityIndex = (this.activeActivityIndex - 1 + total) % total;
  }

  goToActivity(idx: number) {
    this.activeActivityIndex = idx;
  }

  onTouchStart(e: TouchEvent) {
    if (e.touches && e.touches.length > 0) {
      this.touchStartX = e.touches[0].clientX;
    }
  }

  onTouchMove(e: TouchEvent) {
    if (e.touches && e.touches.length > 0) {
      this.touchEndX = e.touches[0].clientX;
    }
  }

  onTouchEnd() {
    const diff = this.touchStartX - this.touchEndX;
    const isRtl = this.langService.isRtl();
    // Swiping threshold 40px
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left
        if (isRtl) {
          this.prevActivity();
        } else {
          this.nextActivity();
        }
      } else {
        // Swiped right
        if (isRtl) {
          this.nextActivity();
        } else {
          this.prevActivity();
        }
      }
    }
    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  // Booking / Inquiries via WhatsApp
  bookActivityWhatsApp(activity: ActivityItem) {
    const prefix = this.activitiesSection.waInquiryPrefix;
    const msg = `${prefix} "${activity.title}" (${activity.category} - ${activity.location}). Pourriez-vous me transmettre les disponibilités et un devis personnalisé ?`;
    window.open(`https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  bookEventWhatsApp(event: EventStory) {
    const prefix = this.eventsSection.waInquiryPrefix;
    const msg = `${prefix} "${event.title}" (${event.badge}). Pourriez-vous me transmettre des conseils d'organisation et un devis personnalisé ?`;
    window.open(`https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  bookCircuitWhatsApp(circuit: Circuit) {
    const lang = this.langService.currentLang();
    let msg = '';
    if (lang === 'ar') {
      msg = `مرحباً ميداد ترافل، أود حجز أو الاستفسار عن ${circuit.name} (${circuit.duration}). يرجى تزويدي بالأسعار والتفاصيل.`;
    } else if (lang === 'en') {
      msg = `Hello Medade Travel, I would like to book or inquire about ${circuit.name} (${circuit.duration}). Could you please provide availability and pricing?`;
    } else if (lang === 'es') {
      msg = `Hola Medade Travel, me gustaría reservar o consultar sobre ${circuit.name} (${circuit.duration}). ¿Podrían darme disponibilidad y tarifas?`;
    } else {
      msg = `Bonjour Medade Travel, je souhaite réserver ou me renseigner sur le circuit ${circuit.name} (${circuit.duration}). Pourriez-vous me transmettre vos disponibilités et tarifs ?`;
    }
    window.open(`https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  inquireTransportWhatsApp(typeTitle: string) {
    const msg = `Bonjour Medade Travel, je suis intéressé par votre formule : "${typeTitle}". Quelles sont vos disponibilités et tarifs ?`;
    window.open(`https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  submitBookingWhatsApp() {
    if (!this.bookingForm.name || !this.bookingForm.phone) {
      alert(this.langService.currentLang() === 'ar' ? 'يرجى إدخال الاسم ورقم الهاتف' : 'Veuillez renseigner votre nom et votre numéro de téléphone.');
      return;
    }

    const lines = [
      `*DEMANDE DE DEVIS / RÉSERVATION - MEDADE TRAVEL*`,
      `---------------------------------------`,
      `• *Nom:* ${this.bookingForm.name}`,
      `• *WhatsApp:* ${this.bookingForm.phone}`,
      `• *Prestation:* ${this.bookingForm.serviceType}`,
      `• *Date prévue:* ${this.bookingForm.travelDate || 'À définir'}`,
      `• *Voyageurs:* ${this.bookingForm.guests}`,
      `• *Formule transport:* ${this.bookingForm.transportOption}`,
      this.bookingForm.notes ? `• *Notes / Demandes:* ${this.bookingForm.notes}` : '',
      `---------------------------------------`,
      `_Envoyé depuis le site officiel Medade Travel_`
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(lines)}`, '_blank');
  }

  openDirectWhatsApp() {
    const text = encodeURIComponent(
      this.langService.currentLang() === 'ar'
        ? 'مرحباً ميداد ترافل، أود الاستفسار عن برامجكم السياحية بالمغرب.'
        : 'Bonjour Medade Travel, je souhaite me renseigner sur vos circuits et prestations touristiques au Maroc.'
    );
    window.open(`https://wa.me/${this.whatsappNumber}?text=${text}`, '_blank');
  }
}
