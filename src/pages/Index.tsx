import { motion } from "framer-motion";
import { Heart, Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-roses.png";
import roseDivider from "@/assets/rose-divider.jpg";
import FallingPetals from "@/components/FallingPetals";
import PhotoGallery from "@/components/PhotoGallery";
import HeartDivider from "@/components/HeartDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">

      <audio controls loop className="fixed top-4 left-4 z-50">
        <source src="/promise.mp3" type="audio/mpeg" />
        Tu navegador no encuentra el archivo.
      </audio>

      <FallingPetals />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Rosas románticas" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative text-center z-10 px-4"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="mx-auto mb-4 text-rose-light" size={40} fill="currentColor" />
          </motion.div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary-foreground mb-4 drop-shadow-lg">
            Jonás ~ Gabriela
          </h1>
          <p className="font-body text-xl md:text-2xl text-primary-foreground/90 italic tracking-wide">
            Un año y medio de amor
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-primary-foreground/80">
            <Calendar size={16} />
            <span className="font-body text-sm tracking-widest uppercase">18 meses juntos</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Love Letter */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Sparkles className="mx-auto mb-6 text-gold" size={28} />
            <h2 className="font-display text-5xl md:text-7xl text-gradient-romantic mb-8">
              Para ti, con mucho cariño
            </h2>
            <div className="glass-romantic rounded-2xl p-8 md:p-12">
              <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/90 italic">
                Gabriela, cada día a tu lado es un regalo que atesoro con todo mi corazón.
                Han pasado 18 meses desde que nuestras vidas se entrelazaron y no puedo
                imaginar un mundo sin tu sonrisa, sin tus abrazos, sin tus besos, sin tu amor.
              </p>
              <HeartDivider />
              <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/90 italic">
                Eres mi razón de sonreír cada mañana, mi paz en las tormentas
                y la persona con quien quiero compartir cada aventura.
                Gracias por ser tú, por ser mía, por ser nuestra historia.
              </p>
              <HeartDivider />
              <p className="font-body text-xl md:text-2xl text-primary font-semibold">
                Te amo.
              </p>
              <p className="font-display text-3xl text-accent mt-4">
                — Jonás
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parallax divider */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={roseDivider}
          alt="Rosa"
          loading="lazy"
          width={1200}
          height={512}
          className="w-full h-full object-cover"
          style={{ transform: "scale(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Gallery */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-5xl md:text-7xl text-gradient-romantic mb-4">
              Nuestros Momentos significativos
            </h2>
            <p className="font-body text-muted-foreground text-lg italic">
              Cada foto cuenta una historia de amor
            </p>
          </motion.div>
          <PhotoGallery />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 px-4 bg-blush/50">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl text-gradient-romantic text-center mb-16"
          >
            Nuestra Historia
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-rose-light/50 -translate-x-1/2" />
            {[
              { date: "Día 1", text: "El día que todo cambió. Nuestras miradas se encontraron y supe que eras especial." },
              { date: "Primer mes", text: "Las mariposas no paraban. Cada mensaje tuyo era mi momento favorito del día." },
              { date: "6 meses", text: "Medio año de descubrir el amor en ti, ya me estabas enamorando." },
              { date: "1 año", text: "Un año entero amándote. Celebramos lo que hemos construido juntos." },
              { date: "18 meses", text: "Hoy. Aquí. Más enamorado que nunca. Quisiera que podamos seguir compartiendo más tiempo juntos. Esto es solo el comienzo, mi amor." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <span className="font-display text-2xl text-primary">{item.date}</span>
                  <p className="font-body text-foreground/80 mt-2 italic text-sm md:text-base">{item.text}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-blush z-10" />
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center px-4 romantic-gradient">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Heart className="mx-auto mb-4 text-primary-foreground animate-heartbeat" size={32} fill="currentColor" />
          <p className="font-display text-4xl md:text-6xl text-primary-foreground mb-2">
            Te amo, Gabriela
          </p>
          <p className="font-body text-primary-foreground/80 italic text-lg">
            Por lo que hemos logrado y lo mucho que lograremos ♥
          </p>
          <p className="font-body text-primary-foreground/60 text-sm mt-8">
            Con todo mi amor — Jonás
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
