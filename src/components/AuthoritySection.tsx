import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import authorityImg from "@/assets/referencia/central.png";

const AuthoritySection = () => {
  return (
    <section className="relative py-24 bg-background bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.1,
                duration: 0.7
              }
            }
          }}
          className="flex flex-col items-center text-center"
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
              Experiência
            </span>
          </motion.div>
          
            <h2 className="font-heading text-4xl md:text-6xl mb-6 font-bold leading-[1.1] tracking-tight uppercase">
              <div className="overflow-hidden pt-[0.2em] pb-[0.2em] -my-[0.2em]">
                <motion.span 
                  variants={{
                    hidden: { y: "110%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
                  }}
                  className="text-gradient-silver block py-0 interactive-cursor"
                >
                  MAIS DE 15 ANOS
                </motion.span>
              </div>
              <div className="overflow-hidden pt-[0.2em] pb-[0.2em] -my-[0.2em]">
                <motion.span 
                  variants={{
                    hidden: { y: "110%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 } }
                  }}
                  className="text-gradient-silver block py-0"
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
            className="space-y-6 max-w-3xl"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              Com mais de 15 anos de experiência, a UP Tower<span className="text-[0.5em] align-top relative top-[0.1em] text-inherit">®</span> construiu uma trajetória sólida no desenvolvimento de soluções em monitoramento móvel e segurança.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              Atuamos em parceria com órgãos públicos e empresas privadas, contribuindo com infraestrutura avançada de monitoramento e apoiando operações de segurança com tecnologia, eficiência e presença ostensiva.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed font-medium">
              Com histórico de atuação junto a forças de segurança em cidades como Mogi das Cruzes, Itaquaquecetuba e Arujá, reforçamos na prática a confiabilidade e a eficácia das nossas soluções em campo.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
