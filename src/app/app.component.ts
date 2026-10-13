import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { LanguageService, Language, SUPPORTED_LANGUAGES, LanguageMeta } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Medade Travel';
  isScrolled = false;
  mobileMenuOpen = false;
  langDropdownOpen = false;

  langService = inject(LanguageService);
  private router = inject(Router);

  languages: LanguageMeta[] = SUPPORTED_LANGUAGES;

  // Direct phone & WhatsApp coordinates (NO emails)
  primaryPhone = '+212 6 37 05 31 31';
  secondaryPhone = '+212 6 37 17 09 09';
  whatsappNumber = '212637053131';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.lang-selector-wrapper')) {
      this.langDropdownOpen = false;
    }
  }

  get currentMeta(): LanguageMeta {
    return this.langService.currentMeta();
  }

  toggleLangDropdown(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.langDropdownOpen = !this.langDropdownOpen;
  }

  selectLanguage(lang: Language) {
    this.langService.setLanguage(lang);
    this.langDropdownOpen = false;
    this.mobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.mobileMenuOpen = false;
    this.langDropdownOpen = false;
    if (typeof document !== 'undefined') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  openWhatsAppDirect() {
    const text = encodeURIComponent(
      this.currentMeta.code === 'ar'
        ? 'مرحباً ميداد ترافل، أود الاستفسار عن برامجكم السياحية وخدمات النقل الخاص.'
        : 'Bonjour Medade Travel, je souhaite me renseigner sur vos circuits dans le désert et vos options de transport privé.'
    );
    window.open(`https://wa.me/${this.whatsappNumber}?text=${text}`, '_blank');
  }
}
