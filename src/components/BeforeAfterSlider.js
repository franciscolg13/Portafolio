import React, { useRef, useState } from "react";
import styles from "../styles/BeforeAfterSlider.module.css";

function BeforeAfterSlider({ before, after, altBefore, altAfter }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updateSliderPosition = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let newPosition = ((clientX - rect.left) / rect.width) * 100;

    if (newPosition < 0) newPosition = 0;
    if (newPosition > 100) newPosition = 100;

    setSliderPosition(newPosition);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className={styles.wrapper}>
      <div
        ref={containerRef}
        className={styles.imageContainer}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img src={before} alt={altBefore} className={styles.image} />

        <div
          className={styles.afterWrapper}
          style={{ width: `${sliderPosition}%` }}
        >
          <img src={after} alt={altAfter} className={styles.image} />
        </div>

        <div
          className={styles.sliderLine}
          style={{ left: `${sliderPosition}%` }}
        >
          <div className={styles.sliderButton}></div>
        </div>

        <div className={styles.labelsOverlay}>
            <span
                className={styles.labelLeft}
                style={{ opacity: sliderPosition / 100 }}
            >
                Editada
            </span>

            <span
                className={styles.labelRight}
                style={{ opacity: 1 - sliderPosition / 100 }}
            >
                Original
            </span>
            </div>
      </div>
    </div>
  );
}

export default BeforeAfterSlider;