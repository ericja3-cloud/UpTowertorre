import { motion } from "framer-motion";
import { Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contato" className="relative py-24 bg-background border-t border-border bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Headset className="w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse-glow" />
            <h2 className="font-heading text-3xl md:text-5xl text-gradient-silver">
              ENTRE EM CONTATO
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Preencha o formulário abaixo e nossa equipe retornará o mais breve possível.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h3 className="font-heading text-xl text-gradient-silver mb-4 uppercase tracking-wider">Endereço</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rua Eudóxia Castello Branco, 360<br />
                Vila Suissa, Mogi das Cruzes - SP<br />
                CEP 08810-040
              </p>
            </div>
            
            <div>
              <h3 className="font-heading text-xl text-gradient-silver mb-4 uppercase tracking-wider">Contato</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground flex items-center gap-2">
                  <span className="font-semibold text-foreground">Tel:</span> +55 (11) 93492-2000
                </p>
                <p className="text-muted-foreground flex items-center gap-2">
                  <span className="font-semibold text-foreground">Email:</span> contato@uptower.com.br
                </p>
              </div>
            </div>

            <div className="aspect-video w-full bg-muted rounded-xl overflow-hidden border border-border">
              <iframe
                title="Localização da Up Tower®"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3658.2675971485603!2d-46.17387432367504!3d-23.523821060233486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd716f44d5a9d1%3A0x7d6a5d7c3d9a1c8!2sR.%20Eud%C3%B3xia%20Castello%20Branco%2C%20360%20-%20Vila%20Suissa%2C%20Mogi%20das%20Cruzes%20-%20SP%2C%2008810-040!5e0!3m2!1spt-BR!2sbr!4v1711925000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <form
              action="https://formspree.io/f/YOUR_FORMSPREE_ID_HERE"
              method="POST"
              className="space-y-6 bg-card border border-border p-8 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome Completo
                  </label>
                  <Input id="name" name="nome" placeholder="Ex: João da Silva" className="bg-background" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <Input id="email" name="email" type="email" placeholder="contato@empresa.com.br" className="bg-background" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Empresa
                  </label>
                  <Input id="company" name="empresa" placeholder="Nome da sua empresa" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Telefone / WhatsApp
                  </label>
                  <Input id="phone" name="telefone" type="tel" placeholder="(11) 99999-9999" className="bg-background" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="mensagem"
                  placeholder="Como podemos te ajudar?"
                  rows={5}
                  className="bg-background resize-none"
                  required
                />
              </div>

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto bg-gradient-silver text-primary-foreground font-heading text-lg px-12 hover:opacity-90 transition-opacity shadow-silver border-0"
                >
                  ENVIAR MENSAGEM
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
