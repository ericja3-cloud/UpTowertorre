import { motion } from "framer-motion";
import { LayoutGrid, Users, Car, Factory, ShieldAlert } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import appEvents from "@/assets/app-events.jpg";
import appParking from "@/assets/app-parking.jpg";
import appConstruction from "@/assets/app-construction.jpg";
import appUrban from "@/assets/app-urban.jpg";
import TiltCard from "@/components/ui/TiltCard";

const applications = [
  { icon: Users, title: "Eventos", desc: "Grandes aglomerações de pessoas", image: appEvents },
  { icon: Car, title: "Estacionamentos", desc: "Controle e vigilância de áreas abertas", image: appParking },
  { icon: Factory, title: "Obras e Indústrias", desc: "Áreas industriais e canteiros de obra", image: appConstruction },
  { icon: ShieldAlert, title: "Segurança Urbana", desc: "Apoio a operações públicas", image: appUrban },
];

const ApplicationsSection = () => {
  return (
    <section id="aplicacoes" className="relative py-24 bg-secondary bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <LayoutGrid className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary block">
              Aplicações
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-gradient-silver mb-4">
            ONDE A UP TOWER® ATUA
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Solução estratégica que auxilia as forças de segurança, ampliando o controle, a visibilidade e a capacidade de resposta.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {applications.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-full interactive-cursor">
                    <TiltCard>
                      <div className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer h-full glass-card glass-card-hover border border-white/5 hover:border-white/20 transition-all">
                        <img
                          src={app.image}
                          alt={app.title}
                          loading="lazy"
                          width={640}
                          height={800}
                          className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                        
                        <div 
                          className="absolute bottom-0 left-0 right-0 p-8 flex flex-col transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                          style={{ transform: "translateZ(80px)" }}
                        >
                          <div className="bg-primary/20 w-fit p-3 text-primary rounded-xl backdrop-blur-xl mb-4 border border-primary/20 group-hover:border-primary/50 transition-colors">
                            <app.icon className="w-6 h-6" />
                          </div>
                          <h3 className="font-heading text-3xl text-gradient-silver mb-2 font-bold tracking-tight">{app.title}</h3>
                          <p className="text-base text-muted-foreground line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {app.desc}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] md:max-w-5xl p-2 bg-background/20 border-border/20 shadow-2xl backdrop-blur-md">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-md"
                  />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
