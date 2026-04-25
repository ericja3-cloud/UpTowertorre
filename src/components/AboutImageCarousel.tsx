import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Importação dinâmica de todas as imagens da pasta correspondente
const imagesMap = import.meta.glob("@/assets/NOVAS FOTOS/referencia-monitoramento/*.{png,jpg,jpeg,PNG,JPG,JPEG}", {
  eager: true,
  import: "default",
});

// Extrair URLs únicas baseadas no nome do arquivo (basename) para evitar duplicatas
const uniqueImages = Object.entries(imagesMap).reduce((acc, [path, url]) => {
  const fileName = path.split('/').pop()?.toLowerCase();
  if (fileName && !acc.some(img => img.fileName === fileName)) {
    acc.push({ fileName, url: url as string });
  }
  return acc;
}, [] as { fileName: string, url: string }[]).map(img => img.url);

// Embaralhar as imagens para uma experiência dinâmica
const images = [...uniqueImages].sort(() => Math.random() - 0.5);

const AboutImageCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-card group">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          })
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {images.map((src, index) => (
            <CarouselItem key={index} className="pl-0 basis-full h-full">
              <div className="relative w-full h-full bg-white/5 animate-pulse">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  loading={index <= 2 ? "eager" : "lazy"}
                  className="w-full h-full object-cover object-center opacity-0 transition-opacity duration-500"
                  onLoad={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.classList.replace("opacity-0", "opacity-100");
                    img.parentElement?.classList.remove("animate-pulse");
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Overlay gradiente suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
        
        {/* Botões de Navegação */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
          <CarouselPrevious className="static translate-x-0 translate-y-0 bg-black/20 backdrop-blur-md border-white/10 text-white hover:bg-primary/20 hover:border-primary/50 transition-all pointer-events-auto" />
          <CarouselNext className="static translate-x-0 translate-y-0 bg-black/20 backdrop-blur-md border-white/10 text-white hover:bg-primary/20 hover:border-primary/50 transition-all pointer-events-auto" />
        </div>

        {/* Indicadores de progresso */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === current ? "w-8 bg-primary" : "w-2 bg-white/30"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default AboutImageCarousel;

