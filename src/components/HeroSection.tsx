import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield } from "lucide-react";
import heroImage from "../assets/destaque-tower.jpg";
import backgroundVideo from "@/assets/UPTOWER RENDER NOVO.mp4";

const Typewriter = ({ text, delay = 0, className = "", cursor = true }: { text: string, delay?: number, className?: string, cursor?: boolean }) => {
  const letters = Array.from(text);
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.04, delayChildren: delay }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, display: "none" },
            visible: { opacity: 1, display: "inline" }
          }}
        >
          {letter}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle"
        />
      )}
    </motion.div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 250]);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime >= videoRef.current.duration - 5) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute -inset-[20%] w-[140%] h-[140%]" style={{ y }}>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Torre de vigilância"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video
            ref={videoRef}
            src={backgroundVideo}
            autoPlay
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 vignette-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5
              }
            }
          }}
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="inline-flex items-center gap-2.5 mb-10 px-5 py-2.5 border border-primary/40 rounded-full bg-primary/10 backdrop-blur-md animate-float"
          >
            <div className="relative flex-shrink-0 w-7 h-7">
              <div className="absolute inset-0 rounded-full border-2 border-primary flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-background animate-pulse" />
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
              Patente Oficial Registrada no Brasil
            </span>
          </motion.div>
  
          <div className="font-heading mb-10">
            <Typewriter 
              text="A ÚNICA TORRE DE" 
              delay={0.8}
              cursor={false}
              className="text-gradient-silver text-xl md:text-3xl tracking-[0.15em] font-bold mb-2 uppercase"
            />
            
            <Typewriter 
              text="VIGILÂNCIA MÓVEL" 
              delay={1.6}
              cursor={false}
              className="text-gradient-silver text-4xl md:text-7xl font-black mb-3 uppercase tracking-tighter interactive-cursor"
            />

            <Typewriter 
              text="PATENTEADA NO BRASIL." 
              delay={2.5}
              className="text-gradient-silver text-2xl md:text-4xl font-semibold uppercase tracking-tight"
            />
          </div>
  
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 3.8 } }
            }}
            className="text-lg text-muted-foreground/90 max-w-2xl mx-auto mb-14 leading-relaxed font-medium md:text-xl md:px-12"
          >
            Mobilidade estratégica, presença ostensiva e monitoramento inteligente em um único sistema de segurança de alta tecnologia.
          </motion.p>
  
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { delay: 4.2 } }
            }}
          >
            <a
              href="#contato"
              className="inline-block relative overflow-hidden px-14 py-5 rounded-sm font-heading text-xl shadow-silver text-primary-foreground bg-[length:200%_100%] bg-gradient-silver animate-[shimmer_3s_ease-in-out_infinite] transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
            >
              ENTRE EM CONTATO
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 5 }}
          className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
