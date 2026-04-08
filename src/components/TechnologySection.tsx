import { motion } from "framer-motion";
import { Camera, Wifi, Sun, Radio, Zap, Cpu, Shield } from "lucide-react";
import camerasImg from "@/assets/cameras-equipment.jpg";

const techItems = [
  { icon: Camera, label: "Câmeras de alta resolução" },
  { icon: Wifi, label: "Monitoramento remoto" },
  { icon: Sun, label: "Iluminação integrada" },
  { icon: Radio, label: "Sistemas de transmissão" },
  { icon: Zap, label: "Operação contínua" },
];

const TechnologySection = () => {
  return (
    <section id="tecnologia" className="relative py-24 bg-background bg-grid-pattern overflow-hidden">
      {/* Subtle overlay to fade the pattern towards the edges/center if needed, or just keep it simple */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-primary animate-pulse-glow" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary block">
                Tecnologia de Ponta
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 font-bold leading-tight uppercase">
              <div className="overflow-hidden">
                <motion.span 
                  variants={{
                    hidden: { y: "110%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
                  }}
                  className="text-gradient-silver block pt-4 interactive-cursor"
                >
                  TECNOLOGIA
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  variants={{
                    hidden: { y: "110%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 } }
                  }}
                  className="text-gradient-silver block"
                >
                  EMBARCADA
                </motion.span>
              </div>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                As torres da UP Tower®️ utilizam equipamentos de alta qualidade e tecnologia consolidada no mercado, garantindo elevado nível de confiabilidade, estabilidade operacional e desempenho contínuo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com sistemas embarcados de última geração, nossas soluções contam com câmeras de alta resolução, monitoramento perimetral, conectividade avançada e transmissão de dados em tempo real, assegurando eficiência operacional em diferentes cenários.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Além disso, as torres possuem estrutura preparada para operação contínua, bem como integração com centrais de monitoramento e plataformas inteligentes, ampliando a capacidade de controle e resposta das operações.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Camera, label: "Câmeras de alta resolução" },
                { icon: Shield, label: "Monitoramento perimetral" },
                { icon: Wifi, label: "Conectividade avançada" },
                { icon: Radio, label: "Transmissão em tempo real" },
                { icon: Zap, label: "Operação contínua" },
                { icon: Cpu, label: "Plataformas inteligentes" },
              ].map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3 bg-secondary rounded-sm border border-border"
                >
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-xs text-foreground font-medium">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <img
              src={camerasImg}
              alt="Equipamentos e câmeras de segurança"
              loading="lazy"
              width={1280}
              height={720}
              className="w-full rounded-sm shadow-card"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
