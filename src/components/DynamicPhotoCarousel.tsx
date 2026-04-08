import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Import the new photos provided by the user in the folder 'FOTO UPTOWE NOVAS '
// Using the exact filenames found on the disk (1.png through 7.png)
import img1 from "@/assets/FOTO UPTOWE NOVAS /1.png";
import img2 from "@/assets/FOTO UPTOWE NOVAS /2.png";
import img3 from "@/assets/FOTO UPTOWE NOVAS /3.png";
import img4 from "@/assets/FOTO UPTOWE NOVAS /4.png";
import img5 from "@/assets/FOTO UPTOWE NOVAS /5.png";
import img6 from "@/assets/FOTO UPTOWE NOVAS /6.png";
import img7 from "@/assets/FOTO UPTOWE NOVAS /7.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

const DynamicPhotoCarousel = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  // Duplicate images for infinite loop effect
  const dualImages = [...images, ...images];

  return (
    <div className="mt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <div className="flex flex-col items-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="h-[1px] w-12 bg-primary/30" />
          <span className="text-xs font-bold tracking-[.4em] uppercase text-primary/60">
            Operação em Campo
          </span>
          <div className="h-[1px] w-12 bg-primary/30" />
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-heading text-gradient-silver uppercase tracking-tight font-bold">
          Nossas Torres em Ação
        </h3>
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-12">
        <motion.div
          animate={{
            x: [0, -2200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex space-x-6 w-fit h-[250px] md:h-[350px]"
        >
          {dualImages.map((src, index) => (
            <motion.div
              key={index}
              className="relative min-w-[220px] md:min-w-[400px] h-full rounded-2xl overflow-hidden glass-card border border-white/10 group hover:border-primary/30 transition-all duration-500 shadow-2xl"
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <img
                src={src}
                alt={`UP Tower Operação ${index}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-8 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-white font-heading text-xl font-bold tracking-tight uppercase block shadow-text-lg">
                  UP Tower®
                </span>
                <span className="text-primary text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  Tecnologia e Performance
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DynamicPhotoCarousel;
