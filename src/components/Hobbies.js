import React from "react";
import styles from "../styles/Hobbies.module.css";
import BeforeAfterSlider from "./BeforeAfterSlider";

const photos = [
  {
    id: 1,
    before: "/images/foto1-original.jpg",
    after: "/images/foto1-editada.jpg",
    title: "Ave en primer plano",
    description: "Ajuste de contraste y color para destacar al ave en primer plano y suavizar el fondo desenfocado.",
  },
  {
    id: 2,
    before: "/images/foto2-original.jpg",
    after: "/images/foto2-editada.jpg",
    title: "Valle entre montañas",
    description: "Ajuste de contraste y profundidad para mejorar la visibilidad del valle y reforzar la atmósfera del paisaje.",
  },
  {
    id: 3,
    before: "/images/foto3-original.jpg",
    after: "/images/foto3-editada.jpg",
    title: "Mariposa sobre flor silvestre",
    description: "Ajuste de contraste y color para resaltar los patrones de la mariposa y mejorar la textura de la vegetación.",
  },
  {
    id: 4,
    before: "/images/foto4-original.jpg",
    after: "/images/foto4-editada.jpg",
    title: "Instante en la naturaleza",
    description: "Corrección de contraste y nitidez para destacar la estructura de la planta y el entorno natural.",
  },
];

function Hobbies() {
  return (
    <section id="hobbies" className={styles.hobbiesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hobbies</h2>

        <p className={styles.intro}>
        Además del desarrollo de software, la fotografía es uno de mis hobbies favoritos. 
        Me gusta capturar momentos y editarlos, ya que creo que cada imagen puede contar 
        una historia diferente según quién la observe.
        </p>

        <h3 className={styles.subtitle}>Antes y después</h3>

        <div className={styles.gallery}>
          {photos.map((photo) => (
            <div key={photo.id} className={styles.card}>
              <BeforeAfterSlider
                before={photo.before}
                after={photo.after}
                altBefore={`${photo.title} original`}
                altAfter={`${photo.title} editada`}
              />
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>{photo.title}</h4>
                <p className={styles.cardText}>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;