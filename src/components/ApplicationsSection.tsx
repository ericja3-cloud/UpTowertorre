import { motion } from "framer-motion";
import { Users, Car, Factory, ShieldAlert, Truck, HeartPulse, TreePine, MapPin } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import DynamicPhotoCarousel from "./DynamicPhotoCarousel";

const applications = [
  { icon: Users, title: "Eventos", desc: "Monitoramento estratégico para eventos de grande porte e aglomerações." },
  { icon: ShieldAlert, title: "Áreas Públicas", desc: "Segurança e vigilância em praças, parques e zonas urbanas." },
  { icon: Truck, title: "Vias e Rodovias", desc: "Controle de tráfego e segurança em rodovias e vias expressas." },
  { icon: Factory, title: "Obras", desc: "Proteção de ativos e monitoramento de canteiros de construção." },
  { icon: MapPin, title: "Logística", desc: "Gestão pátios, docas e centros de distribuição logística." },
  { icon: ShieldAlert, title: "Segurança Pública", desc: "Apoio a operações táticas e policiamento ostensivo." },
  { icon: HeartPulse, title: "Emergências", desc: "Pronto atendimento e coordenação em situações críticas." },
  { icon: TreePine, title: "Espaços de Lazer", desc: "Tranquilidade e segurança em clubes, resorts e áreas recreativas." },
];

const ApplicationsSection = () => {
  return (
    <section id="aplicacoes" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl text-gradient-silver mb-6 leading-[1.3] uppercase py-0">
            Aplicações Estratégicas
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Soluções versáteis desenvolvidas para atender aos mais rigorosos padrões de segurança em diversos cenários operacionais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <TiltCard>
                <div className="group relative overflow-hidden rounded-2xl p-8 flex flex-col items-center text-center h-full glass-card glass-card-hover border border-white/5 hover:border-white/20 transition-all min-h-[320px] justify-center shadow-2xl">
                  {/* Glowing background hint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-primary/20 mx-auto w-fit p-5 text-primary rounded-2xl backdrop-blur-xl mb-6 border border-primary/20 group-hover:border-primary/50 transition-all duration-500 transform group-hover:scale-110 shadow-lg shadow-primary/10">
                      <app.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="font-heading text-2xl text-gradient-silver mb-4 font-bold tracking-tight uppercase">
                      {app.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {app.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Photo Carousel - Real Operation Photos */}
        <DynamicPhotoCarousel />
      </div>
    </section>
  );
};

export default ApplicationsSection;
