import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import logo from "@/assets/logo_up.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Slightly more time for a better cinematic feel

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 1, ease: [0.33, 1, 0.68, 1] }
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#07080a] p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] }
            }}
            className="relative flex flex-col items-center"
          >
            {/* Logo with Subtle Glow */}
            <div className="w-32 h-32 mb-10 relative flex items-center justify-center">
              {/* Outer Glow Halo - More subtle to avoid blurring edges */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/5 blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.img
                src={logo}
                alt="Logo Up Tower®"
                className="w-full h-auto relative z-10"
                animate={{ 
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Refined Spinning Ring */}
              <motion.div 
                className="absolute -inset-6 rounded-full border-t-[1.5px] border-primary/30 border-r border-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
