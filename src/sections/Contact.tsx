import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, MapPin, Clock, CalendarCheck, Instagram, Facebook } from 'lucide-react';

const booksyUrl =
  'https://booksy.com/pl-pl/237841_hollywood-pieknosci_fryzjer_23280_lodz#ba_s=seo';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '668 840 184',
    href: 'tel:+48668840184',
  },
  {
    icon: MapPin,
    label: 'Adres',
    value: 'ul. Organizacji "Wolność i Niezawisłość" 4, 91-825 Łódź',
    href: 'https://maps.google.com/?q=Organizacji+Wolnosc+i+Niezawislosc+4,+Lodz',
  },
  {
    icon: Clock,
    label: 'Godziny otwarcia',
    value: 'Wt-Pt: 09:00-20:00, Sob: 08:00-14:00, Nd-Pn: zamknięte',
    href: '#',
  },
];

export function Contact() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.15,
  });

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <span
            className={`inline-block text-xs font-body font-medium tracking-[0.2em] text-champagne mb-4 transition-all duration-800 ease-elegant ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            KONTAKT
          </span>
          <h2
            className={`font-heading text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-6 transition-all duration-800 ease-elegant ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Zarezerwuj <span className="italic">Online</span>
          </h2>
          <p
            className={`font-body text-base text-muted-foreground max-w-md mx-auto transition-all duration-800 ease-elegant ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Najszybciej umówisz wizytę przez Booksy lub telefonicznie.
          </p>
        </div>

        <div
          className={`max-w-[900px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 transition-all duration-800 ease-elegant ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group"
                >
                  <item.icon size={20} className="text-champagne mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-body tracking-[0.15em] text-muted-foreground uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-foreground group-hover:text-champagne transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white border border-warm-gray p-8 lg:p-10 h-fit">
            <h3 className="font-heading text-2xl text-foreground mb-6">
              Rezerwacja
            </h3>

            <div className="space-y-4">
              <a
                href={booksyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-cream text-xs font-medium tracking-[0.15em] hover:bg-champagne transition-colors duration-400"
              >
                <CalendarCheck size={16} />
                ZAREZERWUJ ONLINE
              </a>

              <a
                href="tel:+48668840184"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 border border-foreground text-foreground text-xs font-medium tracking-[0.15em] hover:bg-foreground hover:text-cream transition-all duration-400"
              >
                <Phone size={16} />
                ZADZWOŃ
              </a>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.instagram.com/hollywood.pieknosci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border border-warm-gray text-foreground text-xs font-medium tracking-[0.1em] hover:border-champagne hover:text-champagne transition-colors duration-300"
                >
                  <Instagram size={16} />
                  INSTAGRAM
                </a>
                <a
                  href="https://www.facebook.com/p/Hollywood-Pi%C4%99kno%C5%9Bci-61557942401576/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border border-warm-gray text-foreground text-xs font-medium tracking-[0.1em] hover:border-champagne hover:text-champagne transition-colors duration-300"
                >
                  <Facebook size={16} />
                  FACEBOOK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
