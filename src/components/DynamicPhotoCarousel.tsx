import { motion } from "framer-motion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

// Importação dinâmica de TODAS as imagens de TODAS as novas pastas
const allImagesMap = import.meta.glob("@/assets/NOVAS FOTOS/**/*.{png,jpg,jpeg,PNG,JPG,JPEG}", {
  eager: true,
  import: "default",
});

// Nota: Arquivos .HEIC foram removidos do glob pois não são suportados nativamente pela maioria dos navegadores.

// Extrair URLs únicas e embaralhar
const uniqueImages = Array.from(new Set(Object.values(allImagesMap) as string[]));
const images = [...uniqueImages]
  .sort(() => Math.random() - 0.5)
  .slice(0, 24);

const DynamicPhotoCarousel = () => {
  return (
    <div className="mt-20 relative px-4 md:px-12">
      <div className="flex flex-col items-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="h-[1px] w-12 bg-primary/30" />
          <span className="text-xs font-bold tracking-[.4em] uppercase text-primary/60">
            Operação em Campo
          </span>
          <div className="h-[1px] w-12 bg-primary/30" />
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-heading text-gradient-silver uppercase tracking-tight font-bold text-center">
          Nossas unidades móveis em ação
        </h3>
      </div>

      <div className="pb-12 relative group">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1.5,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            })
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {images.map((src, index) => (
              <CarouselItem key={index} className="pl-6 basis-auto">
                <motion.div
                  className="relative w-[220px] md:w-[400px] h-[350px] md:h-[650px] rounded-2xl overflow-hidden group/card transition-all duration-500 bg-white/5"
                  whileHover={{ scale: 1.02, y: -8 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={src}
                    alt={`UP Tower Operação ${index}`}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index < 4 ? "high" : "low"}
                    className="w-full h-full object-cover transition-all duration-700 group-hover/card:scale-110 opacity-0"
                    onLoad={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.classList.replace("opacity-0", "opacity-100");
                      img.parentElement?.classList.remove("animate-pulse");
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30 group-hover/card:opacity-60 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-8 translate-y-4 group-hover/card:translate-y-0 transition-all duration-500">
                    <span className="text-white font-heading text-xl font-bold tracking-tight uppercase block shadow-text-lg">
                      UP Tower<span className="text-[0.5em] align-top relative top-[0.1em] text-inherit">®</span>
                    </span>
                    <span className="text-primary text-xs font-bold tracking-widest uppercase opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                      Tecnologia e Performance
                    </span>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 -translate-x-1/2 bg-black/20 backdrop-blur-md border-white/10 hover:bg-primary/20 hover:text-primary transition-all opacity-0 group-hover:opacity-100" />
            <CarouselNext className="right-0 translate-x-1/2 bg-black/20 backdrop-blur-md border-white/10 hover:bg-primary/20 hover:text-primary transition-all opacity-0 group-hover:opacity-100" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default DynamicPhotoCarousel;
