import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import authorityImg from "@/assets/authority-gcm.jpg";
import ParallaxImage from "./ParallaxImage";

const AuthoritySection = () => {
  return (
    <section className="relative py-24 bg-background bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center p-8 order-2"
          >
            <div className="max-w-[75%] w-full">
              <ParallaxImage
                src={authorityImg}
                alt="Operação com Guarda Civil Municipal"
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
                <ShieldCheck className="w-5 h-5 text-primary animate-pulse-glow" />
              </div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary block">
                Autoridade
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
                  MAIS DE 15 ANOS
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
                  DE ATUAÇÃO
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
                Com mais de 15 anos de excelência operacional, a Up Tower® - Torre de Vigilância consolidou uma trajetória de autoridade inquestionável em segurança tática.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Atuamos em parceria estratégica com a Guarda Civil Municipal de Mogi das Cruzes, provendo a infraestrutura de monitoramento mais avançada do estado.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
