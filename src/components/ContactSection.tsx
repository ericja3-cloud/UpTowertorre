import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headset, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [state, handleSubmit] = useForm("mpqojzql");

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  return (
    <section id="contato" className="relative py-24 bg-background border-t border-border bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Headset className="w-10 h-10 md:w-12 md:h-12 text-primary animate-pulse-glow" />
            <h2 className="font-heading text-4xl md:text-6xl text-gradient-silver font-bold uppercase tracking-tighter">
              FALE CONOSCO
            </h2>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Pronto para elevar o nível da sua segurança móvel? Nossa equipe especializada está à disposição para consultoria técnica e orçamentos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Informações col-span-2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div className="space-y-6">
              <div className="flex gap-4 p-5 glass-card rounded-xl border border-white/5 group hover:border-primary/20 transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground font-bold uppercase tracking-wider mb-1">Endereço</h3>
                  <p className="text-muted-foreground font-medium">
                    Rua Eudóxia Castello Branco, 360<br />
                    Vila Suissa, Mogi das Cruzes - SP<br />
                    CEP 08810-040
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 glass-card rounded-xl border border-white/5 group hover:border-primary/20 transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground font-bold uppercase tracking-wider mb-1">Telefone</h3>
                  <p className="text-muted-foreground font-medium">+55 (11) 93492-2000</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 glass-card rounded-xl border border-white/5 group hover:border-primary/20 transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground font-bold uppercase tracking-wider mb-1">E-mail</h3>
                  <p className="text-muted-foreground font-medium">contato@uptower.com.br</p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl relative group">
              <iframe
                title="Localização da Up Tower®"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.891348393859!2d-46.15742239999999!3d-23.500422699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd9d95bfd8825%3A0x543c4b948ea6db07!2sR.%20Eud%C3%B3xia%20Castello%20Branco%2C%20360%20-%20Vila%20Suissa%2C%20Mogi%20das%20Cruzes%20-%20SP%2C%2008810-040!5e0!3m2!1spt-BR!2sbr!4v1775111488624!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.8) brightness(1.1) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border-2 border-white/5 rounded-2xl group-hover:border-primary/20 transition-colors" />
            </div>
          </motion.div>

          {/* Formulário col-span-3 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 h-full"
          >
            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center bg-card/50 backdrop-blur-sm border border-primary/20 p-10 rounded-2xl shadow-2xl space-y-6"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gradient-silver mb-2">MENSAGEM ENVIADA!</h3>
                    <p className="text-muted-foreground text-lg">
                      Recebemos sua solicitação técnica. Nossa equipe entrará em contato em breve através do e-mail ou WhatsApp fornecido.
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => window.location.reload()}
                    className="border-primary/20 hover:bg-primary/10"
                  >
                    ENVIAR OUTRA MENSAGEM
                  </Button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="h-full flex flex-col space-y-6 bg-card/50 backdrop-blur-sm border border-white/10 p-6 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold tracking-tight text-foreground/80 uppercase">
                        Nome Completo
                      </label>
                      <Input id="name" name="nome" placeholder="Ex: João da Silva" className="bg-background/80 border-white/5 h-12 focus:border-primary/50 transition-colors" required />
                      <ValidationError prefix="Nome" field="nome" errors={state.errors} className="text-xs text-red-500" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold tracking-tight text-foreground/80 uppercase">
                        E-mail Corporate
                      </label>
                      <Input id="email" name="email" type="email" placeholder="contato@empresa.com.br" className="bg-background/80 border-white/5 h-12 focus:border-primary/50 transition-colors" required />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-bold tracking-tight text-foreground/80 uppercase">
                        Empresa
                      </label>
                      <Input id="company" name="empresa" placeholder="Nome da sua empresa" className="bg-background/80 border-white/5 h-12 focus:border-primary/50 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold tracking-tight text-foreground/80 uppercase">
                        WhatsApp Comercial
                      </label>
                      <Input id="phone" name="telefone" type="tel" placeholder="(11) 99999-9999" className="bg-background/80 border-white/5 h-12 focus:border-primary/50 transition-colors" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 flex-grow">
                    <label htmlFor="message" className="text-sm font-bold tracking-tight text-foreground/80 uppercase">
                      Descreva sua Necessidade
                    </label>
                    <Textarea
                      id="message"
                      name="mensagem"
                      placeholder="Conte-nos brevemente sobre o local da operação..."
                      rows={6}
                      className="bg-background/80 border-white/5 focus:border-primary/50 transition-colors resize-none h-full min-h-[150px]"
                      required
                    />
                    <ValidationError prefix="Mensagem" field="mensagem" errors={state.errors} className="text-xs text-red-500" />
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-center md:justify-start">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "YOUR_SITE_KEY_HERE"}
                        onChange={handleCaptchaChange}
                        theme="dark"
                      />
                    </div>
                    {/* Campo oculto para que o Formspree receba o token */}
                    <input type="hidden" name="g-recaptcha-response" value={captchaToken || ""} />
                  </div>

                  <div className="text-center pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={state.submitting || !captchaToken}
                      className={`w-full md:w-auto bg-gradient-silver text-primary-foreground font-heading text-lg md:text-xl px-4 py-5 md:px-16 md:py-7 hover:opacity-90 transition-all hover:scale-105 shadow-silver border-0 tracking-tight whitespace-normal h-auto min-h-[60px] ${
                        (state.submitting || !captchaToken) ? "opacity-50 grayscale cursor-not-allowed" : ""
                      }`}
                    >
                      {state.submitting ? "ENVIANDO..." : "ENVIAR SOLICITAÇÃO TÉCNICA"}
                    </Button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
