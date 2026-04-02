import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const ParallaxImage = ({ src, alt, width, height, className = "" }: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.1, 1.15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const yPos = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y: yPos });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ perspective: "800px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePos({ x: 0, y: 0 });
      }}
    >
      <motion.div
        style={{ y, scale }}
        animate={{
          rotateY: isHovering ? mousePos.x * 5 : 0,
          rotateX: isHovering ? -mousePos.y * 5 : 0,
        }}
        transition={{
          rotateX: { type: "spring", stiffness: 150, damping: 20 },
          rotateY: { type: "spring", stiffness: 150, damping: 20 },
        }}
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={width}
          height={height}
          className="w-full h-auto block"
        />
      </motion.div>

      {/* Subtle light reflection overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isHovering
            ? `radial-gradient(circle at ${(mousePos.x + 1) * 50}% ${(mousePos.y + 1) * 50}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
            : "none",
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default ParallaxImage;
