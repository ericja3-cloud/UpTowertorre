import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Fast spring for the outer ring (fluid but responsive)
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 400 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 400 });

  // Instant or ultra-fast spring for the inner dot
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 800 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 800 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      // Offset by half the cursor size (16px) to center it
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, .interactive-cursor');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);
    
    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer Ring - Fluid Trail */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-[9999] hidden md:block transition-transform duration-300 ${
          isHovering ? "scale-[2.2] bg-primary/20 border-primary/40 backdrop-invert" : "scale-100"
        }`}
        style={{
          x: ringX,
          y: ringY,
        }}
      />
      
      {/* Inner Dot - Precision Indicator (Instante) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[10000] hidden md:block translate-x-[11.5px] translate-y-[11.5px]"
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </>
  );
};

export default MagneticCursor;
