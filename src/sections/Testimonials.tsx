import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: 'Wizyta przebiegła bardzo pomyślnie. Pani Patrycja bardzo przemiła i konkretna osoba. Widać, że zna się na swojej robocie. Klimatyczny, mały salon fryzjerski. Czułam się jak u siebie w domu. Usługę poprzedziła konsultacja dotycząca tego co chcę mieć na głowie. Czułam się wysłuchana, zrozumiana, ale też dałam wolną rękę specjalistce. Absolutnie nie żałuję, wyszłam zadowolona. Zmiany są dobre.',
    author: 'Katarzyna',
    role: 'Ocena 5/5 - Strzyżenie włosy średnie',
  },
  {
    text: 'Bardzo dziękuję za super fryzurę, a to niełatwe przy moich kręconych włosach. Wrócę na pewno, zwłaszcza, że pani Patrycja jest bardzo sympatyczna i czułam się jakbym rozmawiała z najlepszą koleżanką.',
    author: 'Anna',
    role: 'Ocena 5/5 - Strzyżenie włosy długie',
  },
  {
    text: 'Jestem bardzo zadowolona z wizyty. Pani Patrycja dokładnie wyjaśniła mi jaką mam strukturę włosa i zarekomendowała odpowiednie strzyżenie, tak żeby włosy się dobrze układały. Wszystko przebiegło w bardzo przyjemnej atmosferze, a efekt jest przepiękny. Polecam serdecznie!',
    author: 'Katarzyna',
    role: 'Ocena 5/5 - Strzyżenie włosy długie',
  },
  {
    text: 'Moja pierwsza wizyta u pani Patrycji była bardzo pozytywnym doświadczeniem. Pani Patrycja to niezwykle profesjonalna fryzjerka z ogromną wiedzą, która potrafi świetnie doradzić i wszystko dokładnie wyjaśnić. W salonie panuje miła, komfortowa atmosfera, a usługa została wykonana z dużą starannością. Wyszłam bardzo zadowolona i na pewno wrócę ponownie. Serdecznie polecam!',
    author: 'Magdalena',
    role: 'Ocena 5/5 - Strzyżenie włosy długie',
  },
];

export function Testimonials() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-xs font-body font-medium tracking-[0.2em] text-champagne mb-4 transition-all duration-800 ease-elegant ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            OPINIE
          </span>
          <h2
            className={`font-heading text-4xl lg:text-5xl xl:text-6xl font-light text-foreground transition-all duration-800 ease-elegant ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Co Mówią <span className="italic">Klienci</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`relative transition-all duration-800 ease-elegant ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <Quote size={40} className="text-champagne/40" />
          </div>

          {/* Testimonial Content */}
          <div className="relative min-h-[520px] sm:min-h-[430px] lg:min-h-[380px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 text-center transition-all duration-500 ease-elegant ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0 pointer-events-auto'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-8 pointer-events-none'
                    : 'opacity-0 translate-x-8 pointer-events-none'
                }`}
              >
                <p className="font-heading text-xl lg:text-2xl xl:text-3xl font-light text-foreground leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-body text-sm font-medium text-foreground tracking-wide">
                    {testimonial.author}
                  </p>
                  <p className="text-xs font-body text-muted-foreground tracking-[0.1em] uppercase mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={goToPrev}
              className="p-2 text-foreground hover:text-champagne transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-champagne w-6'
                      : 'bg-warm-gray hover:bg-champagne/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 text-foreground hover:text-champagne transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
