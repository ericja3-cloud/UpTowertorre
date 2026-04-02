import { motion } from "framer-motion";
import { Target } from "lucide-react";
import towerDestaque from "@/assets/destaque-tower.jpg";
import ParallaxImage from "./ParallaxImage";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-24 bg-secondary bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center p-8 order-2 md:order-1"
          >
            <div className="max-w-[75%] w-full">
              <ParallaxImage
                src={towerDestaque}
                alt="Up Tower® - Torre de Vigilância em destaque"
                width={1280}
                height={720}
                className="shadow-card"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  staggerChildren: 0.1,
                  duration: 0.7
                }
              }
            }}
            className="order-1 md:order-2"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 bg-primary/10 rounded-lg border border-primary/20 backdrop-blur-sm">
                <Target className="w-5 h-5 text-primary animate-pulse-glow" />
              </div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary block">
                Sobre a Solução
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
                  REFERÊNCIA EM
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  variants={{
                    hidden: { y: "110%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 } }
                  }}
                  className="text-gradient-silver block pt-2 pb-4"
                >
                  MONITORAMENTO MÓVEL
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
                A Up Tower® - Torre de Vigilância é referência em monitoramento móvel, oferecendo uma solução estratégica que une mobilidade radical, eficiência operacional e presença ostensiva definitiva em campo.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Com estrutura elevada e sistemas de inteligência integrados, nossas torres proporcionam uma visão privilegiada de 360° do ambiente, atuando diretamente na prevenção contra crimes e no controle em tempo real de situações de alto risco.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
