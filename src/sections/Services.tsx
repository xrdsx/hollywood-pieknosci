import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Scissors, Palette, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Strzyżenie męskie',
    description:
      'Klasyczne i nowoczesne cięcie męskie dopasowane do rysów twarzy oraz stylu. Czas: 30 min.',
    price: '70,00 zł',
  },
  {
    icon: Scissors,
    title: 'Strzyżenie włosy średnie',
    description:
      'Precyzyjne strzyżenie damskie dla włosów średniej długości z indywidualnym wykończeniem. Czas: 1h 10 min.',
    price: '110,00 zł',
  },
  {
    icon: Palette,
    title: '3D Odrost + Refleksy (włosy średnie)',
    description:
      'Wielowymiarowa koloryzacja odrostu i refleksów dla naturalnego, świetlistego efektu. Czas: 2h 15 min.',
    price: '290,00 zł',
  },
  {
    icon: Palette,
    title: 'Baleyage włosy średnie',
    description:
      'Zaawansowana koloryzacja baleyage budująca miękkie przejścia kolorystyczne. Czas: 3h.',
    price: '450,00 zł+',
  },
  {
    icon: Palette,
    title: 'Air Touch włosy średnie',
    description:
      'Precyzyjna technika Air Touch dla czystych, płynnych przejść i bardzo naturalnego efektu. Czas: 4h.',
    price: '560,00 zł',
  },
  {
    icon: Sparkles,
    title: 'Konsultacja trychologiczna',
    description:
      'Szczegółowa konsultacja skóry głowy i włosów z doborem planu pielęgnacji i terapii. Czas: 1h 30 min.',
    price: '170,00 zł',
  },
];

export function Services() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.15,
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span
            className={`inline-block text-xs font-body font-medium tracking-[0.2em] text-champagne mb-4 transition-all duration-800 ease-elegant ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            USŁUGI
          </span>
          <h2
            className={`font-heading text-4xl lg:text-5xl xl:text-6xl font-light text-foreground transition-all duration-800 ease-elegant ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Moje <span className="italic">Specjalności</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white border border-warm-gray p-8 lg:p-10 transition-all duration-500 ease-elegant hover:-translate-y-2 hover:shadow-elegant ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-8">
                <service.icon
                  size={32}
                  className="text-champagne stroke-[1.5]"
                />
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl lg:text-3xl font-medium text-foreground mb-4">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Price */}
              <div className="pt-6 border-t border-warm-gray">
                <span className="text-xs font-body tracking-[0.15em] text-champagne uppercase">
                  {service.price}
                </span>
              </div>

              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-champagne scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
