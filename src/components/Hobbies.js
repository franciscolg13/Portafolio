import React from "react";
import styles from "../styles/Hobbies.module.css";

const photos = [
  {
    id: 1,
    src: "/images/foto1.jpg",
    title: "Paisaje urbano",
    description: "Capturando formas, luces y contraste en la ciudad.",
  },
  {
    id: 2,
    src: "/images/foto2.jpg",
    title: "Naturaleza",
    description: "Momentos de calma, color y composición natural.",
  },
  {
    id: 3,
    src: "/images/foto3.jpg",
    title: "Retrato artístico",
    description: "Expresión, emoción y narrativa visual.",
  },
  {
    id: 4,
    src: "/images/foto4.jpg",
    title: "Detalles",
    description: "Pequeños elementos que cuentan grandes historias.",
  },
];

function Hobbies() {
  return (
    <section id="hobbies" className={styles.hobbiesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hobbies</h2>

        <p className={styles.intro}>
          Además del desarrollo de software, uno de mis hobbies principales es
          la fotografía. Me gusta capturar paisajes, escenas urbanas y detalles
          que transmitan emociones, atmósferas e historias a través de la
          imagen.
        </p>

        <div className={styles.photographyBlock}>
          <h3 className={styles.subtitle}>Portfolio de Fotografía</h3>
          <p className={styles.description}>
            La fotografía me permite explorar la creatividad, la composición
            visual y la atención al detalle, habilidades que también aplico en
            mis proyectos de desarrollo.
          </p>

          <div className={styles.gallery}>
            {photos.map((photo) => (
              <div key={photo.id} className={styles.card}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  className={styles.image}
                />
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{photo.title}</h4>
                  <p className={styles.cardText}>{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;