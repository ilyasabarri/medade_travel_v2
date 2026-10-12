import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService, Circuit, ExperienceStory } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  langService = inject(LanguageService);

  primaryPhone = '+212 6 62 63 60 95';
  secondaryPhone = '+212 6 37 05 31 31';
  whatsappNumber = '212662636095';

  activeCircuitId = 'circuit-1';
  expandedDayIndex: { [key: string]: number | null } = {
    'circuit-1': 0,
    'circuit-2': 0,
    'circuit-3': 0
  };

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

  get circuits(): Circuit[] {
    return this.langService.circuits;
  }

  get currentCircuit(): Circuit {
    return this.circuits.find(c => c.id === this.activeCircuitId) || this.circuits[0];
  }

  get experiences(): ExperienceStory[] {
    return this.langService.experiences;
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
