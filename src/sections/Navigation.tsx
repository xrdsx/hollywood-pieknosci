import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'O MNIE', href: '#about' },
  { label: 'USŁUGI', href: '#services' },
  { label: 'GALERIA', href: '#gallery' },
  { label: 'KONTAKT', href: '#contact' },
];

const booksyUrl =
  'https://booksy.com/pl-pl/237841_hollywood-pieknosci_fryzjer_23280_lodz#ba_s=seo';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-elegant ${
          isScrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a
              href="#"
              className="font-heading text-2xl font-medium tracking-wide text-foreground hover:text-champagne transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              HOLLYWOOD PIĘKNOŚCI
            </a>

            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-xs font-body font-medium tracking-[0.15em] text-foreground hover:text-champagne transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-6 py-3 bg-foreground text-cream text-xs font-medium tracking-[0.15em] hover:bg-champagne transition-colors duration-400"
            >
              ZAREZERWUJ ONLINE
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-champagne transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-500 ease-elegant md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`font-heading text-3xl text-foreground hover:text-champagne transition-all duration-500 ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 px-8 py-4 bg-foreground text-cream text-sm font-medium tracking-[0.15em] hover:bg-champagne transition-all duration-500 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            ZAREZERWUJ ONLINE
          </a>
        </div>
      </div>
    </>
  );
}
