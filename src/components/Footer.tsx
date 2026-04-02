import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo_up.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <a href="#">
              <img src={logo} alt="Up Tower® - Torre de Vigilância" className="h-10" />
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@uptower?si=ryarIx8P-D4-9rGm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg text-gradient-silver uppercase tracking-wider">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                <span className="font-semibold text-foreground">WhatsApp:</span> +55 (11) 93492-2000
              </p>
              <p className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                <span className="font-semibold text-foreground">Email:</span> contato@uptower.com.br
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg text-gradient-silver uppercase tracking-wider">Localização</h3>
            <div className="text-sm text-muted-foreground leading-relaxed">
              <p>Rua Eudóxia Castello Branco, 360</p>
              <p>Vila Suissa, Mogi das Cruzes - SP</p>
              <p>CEP 08810-040</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Up Tower® - Torre de Vigilância. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
