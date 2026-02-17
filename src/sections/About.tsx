import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`relative transition-all duration-800 ease-elegant ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/about.jpg`}
                alt="Patrycja Kaźmierska-Skałban - Fryzjerka"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-champagne/30 -z-10" />
          </div>

          <div className="lg:pl-8">
            <span
              className={`inline-block text-xs font-body font-medium tracking-[0.2em] text-champagne mb-4 transition-all duration-800 ease-elegant ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              O MNIE
            </span>

            <h2
              className={`font-heading text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-8 transition-all duration-800 ease-elegant ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Twoja
              <br />
              <span className="italic">Fryzjerka</span>
            </h2>

            <div
              className={`w-16 h-px bg-champagne mb-8 transition-all duration-600 ease-elegant ${
                isVisible ? 'w-16' : 'w-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            />

            <div className="space-y-6 mb-10">
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed transition-all duration-800 ease-elegant ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                Jestem fryzjerem stylistą z tytułem czeladnika, który ukończyłam z wyróżnieniem.
                Od 10 lat z pełnym zaangażowaniem tworzę koloryzacje i metamorfozy, w których
                najważniejsze są jakość, precyzja i indywidualne podejście do każdej klientki.
              </p>
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed transition-all duration-800 ease-elegant ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                Fryzjerstwo to mój wyuczony zawód i jednocześnie pasja, którą rozwijam poprzez
                regularne szkolenia oraz doskonalenie technik koloryzacji i stylizacji. Pracuję
                świadomie - dbając nie tylko o efekt wizualny, ale również o kondycję i strukturę
                włosa.
              </p>
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed transition-all duration-800 ease-elegant ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                W swojej pracy wspieram się także wiedzą trychologiczną. Trychologia stanowi dla
                mnie uzupełnienie i wsparcie codziennej praktyki fryzjerskiej - pozwala lepiej
                zrozumieć potrzeby skóry głowy oraz dobrać bezpieczne rozwiązania pielęgnacyjne.
                Zdrowa skóra głowy to fundament pięknych włosów, dlatego traktuję ją jako ważny
                element procesu, jednak to profesjonalne fryzjerstwo i stylizacja pozostają w
                centrum mojej pracy.
              </p>
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed transition-all duration-800 ease-elegant ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                Łączę doświadczenie, wiedzę i estetykę, tworząc efekty, które są nie tylko piękne,
                ale również trwałe i bezpieczne dla włosów.
              </p>
            </div>

            <div
              className={`transition-all duration-800 ease-elegant ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <p className="font-heading text-2xl italic text-foreground mb-1">
                Patrycja Kaźmierska-Skałban
              </p>
              <p className="text-xs font-body tracking-[0.15em] text-muted-foreground uppercase">
                Fryzjerka HOLLYWOOD PIĘKNOŚCI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
