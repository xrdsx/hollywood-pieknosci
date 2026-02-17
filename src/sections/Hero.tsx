import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen py-20 lg:py-0">
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center lg:pr-16">
            {/* Label */}
            <span
              className={`inline-block text-xs font-body font-medium tracking-[0.2em] text-muted-foreground mb-6 transition-all duration-800 ease-elegant ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              SALON FRYZJERSKI
            </span>

            {/* Title */}
            <h1
              className={`font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] tracking-tight text-foreground mb-8 transition-all duration-800 ease-elegant ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              HOLLYWOOD
              <br />
              <span className="italic">PIĘKNOŚCI</span>
            </h1>

            {/* Subtitle */}
            <p
              className={`font-body text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md mb-10 transition-all duration-800 ease-elegant ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Tworzę fryzury, które podkreślają Twoją naturalną elegancję.
              Każde strzyżenie to dzieło sztuki inspirowane światem mody.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-800 ease-elegant ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-cream text-xs font-medium tracking-[0.15em] hover:bg-champagne transition-colors duration-400"
              >
                UMÓW WIZYTĘ
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
              <button
                onClick={() => scrollToSection('#gallery')}
                className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground text-xs font-medium tracking-[0.15em] hover:bg-foreground hover:text-cream transition-all duration-400"
              >
                ZOBACZ PORTFOLIO
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative h-[50vh] lg:h-screen lg:absolute lg:right-0 lg:top-0 lg:w-1/2">
            <div
              className={`relative w-full h-full overflow-hidden transition-all duration-1000 ease-elegant ${
                isLoaded
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <img
                src="/images/hero.jpg"
                alt="Elegantna fryzura"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cream/30 via-transparent to-transparent lg:block hidden" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div
        className={`absolute bottom-12 left-6 lg:left-12 hidden lg:block transition-all duration-800 ease-elegant ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1000ms' }}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-champagne" />
          <span className="text-xs font-body tracking-[0.2em] text-muted-foreground">
            HOLLYWOOD PIĘKNOŚCI
          </span>
        </div>
      </div>
    </section>
  );
}
