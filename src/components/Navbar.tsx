import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import logo from "@/assets/logo_up.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Dynamic values based on scroll
  const navHeight = useTransform(scrollY, [0, 80], ["5rem", "4rem"]);
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(7, 8, 10, 0)", "rgba(7, 8, 10, 0.8)"]
  );
  const navBlur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(16px)"]);
  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
  );

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Diferencial", href: "#diferencial" },
    { label: "Aplicações", href: "#aplicacoes" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <motion.nav 
      style={{ 
        height: navHeight,
        backgroundColor: navBg,
        backdropFilter: navBlur,
        borderBottomColor: navBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
    >
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-30" />
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#" className="interactive-cursor">
          <img src={logo} alt="Up Tower® - Torre de Vigilância" className="h-10" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors interactive-cursor"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-gradient-silver text-primary-foreground px-5 py-2 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap interactive-cursor"
          >
            ENTRE EM CONTATO
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-silver text-primary-foreground px-5 py-2 rounded-sm text-sm font-semibold text-center"
              >
                ENTRE EM CONTATO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
