import { motion } from "framer-motion";
import { ScanFace, CarFront, Monitor, Radio, Link } from "lucide-react";
import monitoringCenter from "@/assets/monitoring-center.jpg";
import ParallaxImage from "./ParallaxImage";

const features = [
  { icon: ScanFace, label: "Reconhecimento facial" },
  { icon: CarFront, label: "Leitura de placas de veículos" },
  { icon: Monitor, label: "Integração com centrais operacionais" },
  { icon: Radio, label: "Apoio a tecnologias de segurança pública" },
];

const IntegrationSection = () => {
  return (
    <section id="integracao" className="relative py-24 bg-background bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo Container - Order 2 on mobile, Order 1 on desktop (interleaved) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center p-8 order-2 md:order-1"
          >
            <div className="max-w-[75%] w-full">
              <ParallaxImage
                src={monitoringCenter}
                alt="Central de monitoramento"
                width={1280}
                height={720}
                className="shadow-card"
              />
            </div>
          </motion.div>

          {/* Text Container - Order 1 on mobile, Order 2 on desktop */}
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
                <Link className="w-5 h-5 text-primary animate-pulse-glow" />
              </div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary block">
                Integração com Sistemas
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
                  CENTRAIS DE
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
                  MONITORAMENTO
                </motion.span>
              </div>
            </h2>

            <div className="space-y-4">
              {features.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="flex items-center gap-4 p-5 glass-card rounded-xl border border-white/5 hover:border-white/20 transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-base text-foreground font-semibold tracking-tight">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
