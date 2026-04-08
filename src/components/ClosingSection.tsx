import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import towerSunset from "@/assets/tower-sunset.jpg";

const ClosingSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={towerSunset}
          alt="Torre Up Tower® - Torre de Vigilância ao pôr do sol"
          loading="lazy"
          width={1920}
          height={720}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <Rocket className="w-12 h-12 text-primary drop-shadow-[0_0_15px_rgba(226,232,240,0.5)] animate-pulse-glow" />
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-gradient-silver mb-4 leading-tight uppercase">
            NÃO SE TRATA APENAS DE
            <br />
            MONITORAR
          </h2>
          <h3 className="text-xl md:text-2xl text-primary font-bold mb-6 italic uppercase tracking-tighter">
            É sobre dominar o ambiente e antecipar riscos.
          </h3>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed font-medium">
            Com presença ostensiva e mobilidade estratégica, a UP Tower®️ posiciona a segurança no ponto certo, no momento certo — prevenindo ocorrências e elevando o nível de controle das operações.
          </p>
          <a
            href="#contato"
            className="inline-block bg-gradient-silver text-primary-foreground px-12 py-4 rounded-sm font-heading text-xl tracking-wider hover:opacity-90 transition-opacity shadow-silver"
          >
            ENTRE EM CONTATO
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
