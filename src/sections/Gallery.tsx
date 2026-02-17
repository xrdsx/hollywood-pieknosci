import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X, ZoomIn } from 'lucide-react';

const imageBase = `${import.meta.env.BASE_URL}images/`;

const galleryImages = [
  { src: `${imageBase}gallery-1.jpg`, alt: 'Blonde balayage' },
  { src: `${imageBase}gallery-2.jpg`, alt: 'Chic bob haircut' },
  { src: `${imageBase}gallery-3.jpg`, alt: 'Elegant updo' },
  { src: `${imageBase}gallery-4.jpg`, alt: 'Modern pixie cut' },
  { src: `${imageBase}gallery-5.jpg`, alt: 'Long layered hair' },
  { src: `${imageBase}gallery-6.jpg`, alt: 'Sleek straight hair' },
];

export function Gallery() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span
            className={`inline-block text-xs font-body font-medium tracking-[0.2em] text-champagne mb-4 transition-all duration-800 ease-elegant ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            PORTFOLIO
          </span>
          <h2
            className={`font-heading text-4xl lg:text-5xl xl:text-6xl font-light text-foreground transition-all duration-800 ease-elegant ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Moje <span className="italic">Prace</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative aspect-[4/5] overflow-hidden cursor-pointer group transition-all duration-500 ease-elegant ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-600 ease-elegant group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-500 flex items-center justify-center">
                <ZoomIn
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 lg:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-cream hover:text-champagne transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Portfolio"
            className="max-w-full max-h-full object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
