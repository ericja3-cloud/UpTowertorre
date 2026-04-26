import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

// IDs de posts do Instagram da @up.tower
const IG_POST_IDS = [
  "DXhI6P9kfl_",
  "DQh8flPkbj5",
  "DQSp27tkfpJ", 
  "DE0yKmXRcx9", 
  "C76mQBJOI7T",
  "CxghgDVJl1O",
  "Cw3CGNqJNr1"
];

const InstagramSection = () => {
  return (
    <section className="relative py-24 bg-secondary bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse-glow" />
            <h2 className="font-heading text-3xl md:text-5xl text-gradient-silver uppercase">
              Acompanhe no Instagram
            </h2>
          </div>
          <a
            href="https://www.instagram.com/up.tower/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-lg"
          >
            @up.tower
          </a>
        </motion.div>

        <div className="relative w-full px-6 md:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              AutoScroll({
                speed: 1,
                playOnInit: true,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {IG_POST_IDS.map((id, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/3 lg:basis-1/4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="p-1 cursor-pointer group">
                        <div className="overflow-hidden rounded-xl border border-border shadow-md bg-background flex items-center justify-center relative mx-auto transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-xl group-hover:z-10" style={{ maxWidth: '300px' }}>
                          <div className="absolute inset-0 z-20" />
                          <iframe
                            src={`https://www.instagram.com/p/${id}/embed`}
                            className="w-full pointer-events-none"
                            height="336"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency={true}
                            allow="encrypted-media"
                            title={`Instagram Post ${index + 1}`}
                          ></iframe>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[400px] w-[95vw] p-0 overflow-hidden bg-background border border-border rounded-xl">
                      <iframe
                        src={`https://www.instagram.com/p/${id}/embed`}
                        className="w-full"
                        height="600"
                        frameBorder="0"
                        scrolling="yes"
                        allowTransparency={true}
                        allow="encrypted-media"
                        title={`Instagram Post ${index + 1} Expandido`}
                      ></iframe>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
