import { Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'O mnie', href: '#about' },
  { label: 'Usługi', href: '#services' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Kontakt', href: '#contact' },
];

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/hollywood.pieknosci/',
    label: 'Instagram',
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/p/Hollywood-Pi%C4%99kno%C5%9Bci-61557942401576/',
    label: 'Facebook',
  },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-foreground text-cream py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-heading text-3xl font-light tracking-wide text-cream hover:text-champagne transition-colors duration-300 inline-block mb-4"
            >
              HOLLYWOOD PIĘKNOŚCI
            </a>
            <p className="font-body text-sm text-cream/60 leading-relaxed">
              HOLLYWOOD PIĘKNOŚCI
              <br />
              Patrycja Kaźmierska-Skałban
            </p>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-[0.2em] text-cream/40 uppercase mb-6">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="font-body text-sm text-cream/70 hover:text-champagne transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-[0.2em] text-cream/40 uppercase mb-6">
              Social Media
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/70 hover:border-champagne hover:text-champagne hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-cream/10 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-cream/40">
            © 2026 HOLLYWOOD PIĘKNOŚCI. Wszelkie prawa zastrzeżone.
          </p>
          <a
            href="https://kaczmarekmaciej.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body text-cream/40 hover:text-champagne transition-colors duration-300"
          >
            Created by kaczmarekmaciej.netlify.app
          </a>
        </div>
      </div>
    </footer>
  );
}
