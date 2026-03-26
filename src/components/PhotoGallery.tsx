import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import gallery1 from "@/assets/foto1.jpg";
import gallery2 from "@/assets/foto2.jpg";
import gallery3 from "@/assets/foto3.jpg";
import gallery4 from "@/assets/foto4.jpg";
import gallery5 from "@/assets/foto5.jpg";
import gallery6 from "@/assets/foto6.jpg";
import gallery7 from "@/assets/foto7.jpg";
import gallery8 from "@/assets/foto8.jpg";
import gallery9 from "@/assets/foto9.jpg";
import gallery10 from "@/assets/foto10.jpg";
import gallery11 from "@/assets/foto11.jpg";
import gallery12 from "@/assets/foto12.jpg";
import gallery13 from "@/assets/foto13.jpg";
import gallery14 from "@/assets/foto14.jpg";
import gallery15 from "@/assets/foto15.jpg";

const photos = [
  { src: gallery1, caption: "Nuestras primeras fotos juntos 😁" },
  { src: gallery2, caption: "Nuestro primer paseo, ya había algo pero no sabíamos 😊" },
  { src: gallery3, caption: "Un día antes de que me dijeras que sí 😍" },
  { src: gallery4, caption: "Nuestra primera cita. Nuestro primer beso 😘" },
  { src: gallery5, caption: "Otra salidita, bonita sonrisa mi amor ☺️" },
  { src: gallery6, caption: "Más momentos felices, siempre juntos 🤗" },
  { src: gallery7, caption: "Nuestro segundo paseo. Volveremos allá, te lo prometo 😎" },
  { src: gallery8, caption: "Cuando conociste a mi madre. Siempre me pregunta por ti 👫" },
  { src: gallery9, caption: "Todo es risa y diversión, me encanta 😉" },
  { src: gallery10, caption: "Cuando yo conocí a tu mami, me cae bien mi suegra 🧑‍🦳" },
  { src: gallery11, caption: "Otro viajecito. Nuestra primera vez 🙈" },
  { src: gallery12, caption: "Una segunda vez, saliendo y compartiendo 😻" },
  { src: gallery13, caption: "Sólo comiendo amor. Y la dieta? 🍕" },
  { src: gallery14, caption: "El mejor viaje, y que mejor ufff. Hay que repetir 🥰" },
  { src: gallery15, caption: "El segundo mejor viaje, ufff que hermoso 😏" },
];

const PhotoGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer relative overflow-hidden rounded-lg petal-shadow"
            onClick={() => setSelected(i)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="font-body text-primary-foreground text-sm md:text-base italic">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 p-2 text-primary-foreground hover:text-rose-light transition-colors"
              >
                <X size={28} />
              </button>
              <img
                src={photos[selected].src}
                alt={photos[selected].caption}
                className="w-full rounded-lg petal-shadow"
              />
              <p className="text-center mt-4 font-body text-primary-foreground text-lg italic">
                {photos[selected].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;
