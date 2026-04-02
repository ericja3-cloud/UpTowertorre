import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Truck } from "lucide-react";
import vehicleImg2 from "@/assets/vehicle-operation2.jpg";
import ParallaxImage from "./ParallaxImage";

const MobilitySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="mobilidade" ref={containerRef} className="relative py-24 bg-secondary bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photos Container - Order 2 on mobile, Order 2 on desktop (matching alternating pattern) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center p-8 order-2"
          >
            <div className="max-w-[75%] w-full">
              <ParallaxImage
                src={vehicleImg2}
                alt="Unidade Móvel Up Tower® com mastro estendido"
                width={1280}
                height={720}
                className="shadow-card"
              />
            </div>
          </motion.div>

          {/* Text Container - Order 1 on mobile, Order 1 on desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  staggerChildren: 0.1,
                  duration: 0.7
                }
              }
            }}
            className="order-1"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 bg-primary/10 rounded-lg border border-primary/20 backdrop-blur-sm">
                <Truck className="w-5 h-5 text-primary animate-pulse-glow" />
              </div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary block">
                Mobilidade Operacional
              </span>
            </motion.div>
            
            <h2 className="font-heading text-4xl md:text-6xl mb-8 font-bold leading-[1.1] tracking-tight uppercase">
              <div className="overflow-hidden">
                <motion.span 
                  variants={{
                    hidden: { y: "110%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
                  }}
                  className="text-gradient-silver block pt-4 interactive-cursor"
                >
                  AGILIDADE PARA
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  variants={{
                    hidden: { y: "110%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 } }
                  }}
                  className="text-gradient-silver block pt-1 pb-2"
                >
                  OPERAÇÕES DINÂMICAS
                </motion.span>
              </div>
            </h2>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Além das torres, a Up Tower® - Torre de Vigilância conta com unidades veiculares blindadas e preparadas para operações móveis de alta performance, ideais para cenários que exigem deslocamento tático e resposta imediata.
              </p>
              <div className="flex items-center gap-3 p-4 glass-card rounded-xl border border-white/5 w-fit">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-base text-foreground font-semibold">
                  Mastros de até <span className="text-primary tracking-wider">12 metros</span> de altura
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobilitySection;
