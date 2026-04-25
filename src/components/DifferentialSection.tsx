import { motion } from "framer-motion";
import { Shield, Award, CheckCircle2 } from "lucide-react";
import DifferentialImageCarousel from "./DifferentialImageCarousel";

const DifferentialSection = () => {
  return (
    <section id="diferencial" className="relative py-24 bg-secondary bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center p-8 order-2 md:order-1"
          >
            <div className="w-full lg:scale-110 origin-left transition-transform duration-700">
              <DifferentialImageCarousel />
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
                <Award className="w-5 h-5 text-primary animate-pulse-glow" />
              </div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary block">
                Exclusividade
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
                  ESTRUTURA
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
                  ÚNICA NO MERCADO
                </motion.span>
              </div>
            </h2>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="space-y-10"
            >
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                A UP Tower<span className="text-[0.5em] align-top relative top-[0.1em] text-inherit">®</span> desenvolveu uma solução de monitoramento móvel com tecnologia patenteada, sendo única no Brasil, sem equivalentes no mercado nacional.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Fruto de um planejamento estratégico focado em inovação e eficiência operacional, nossas torres de vigilância unem engenharia própria, design funcional e tecnologia embarcada de alto desempenho, entregando uma solução exclusiva, robusta e altamente eficaz para operações de segurança.
              </p>

              {/* Enhanced Authority Badge */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-float">
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/10 blur-[50px] rounded-full" />
                  
                  <div className="relative">
                    <div className="p-4 bg-primary/20 rounded-full border border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.2)]">
                      <Shield className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-1 border border-white/10 text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-center md:text-left space-y-1">
                    <h4 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground uppercase leading-none">
                      A ÚNICA TORRE DE <br className="hidden md:block" />
                      <span className="text-primary italic">VIGILÂNCIA MÓVEL</span>
                    </h4>
                    <p className="text-lg font-bold tracking-[0.1em] text-muted-foreground uppercase opacity-80 leading-none">
                      Patenteada no Brasil
                    </p>
                  </div>
                </div>
                <div className="mt-8 text-center md:text-left">
                  <p className="text-2xl md:text-4xl font-black tracking-[0.1em] text-primary uppercase drop-shadow-[0_0_20px_rgba(255,165,0,0.2)]">
                    PATENTE REGISTRADA <br /> Nº BR 202025016829-0
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
