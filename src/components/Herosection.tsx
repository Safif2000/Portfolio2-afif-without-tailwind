import { useEffect, useState } from 'react';
import styles1 from '../app/styles/Herosection.module.css';

const Herosection = () => {
  const [typingText, setTypingText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const typingTexts = ['Web Developer', 'Student'];

  useEffect(() => {
    const currentText = typingTexts[currentWordIndex];
    const typingInterval = setInterval(() => {
      if (typingText.length < currentText.length) {
        setTypingText((prev) => prev + currentText[typingText.length]);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypingText('');
          setCurrentWordIndex((prev) => (prev + 1) % typingTexts.length);
        }, 1000);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [typingText, currentWordIndex, typingTexts]); // Ensured typingTexts is in dependencies

  return (
    <section className={styles1.heroSection}>
      <div className={styles1.heroContainer}>
        <div className={styles1.heroLeftColumn}>
          <div className={styles1.subheading}>Hello!</div>
          <h1 className={styles1.heroHeading}>
            I&apos;m <span className={styles1.heroHeadingSpan}>Syed Muhammad Afif</span> {/* Apostrophe escaped */}
          </h1>
          <span id="typing-animation" className={styles1.typingText}>
            {typingText}
          </span>
          <br />
          <h2 className={styles1.heroSubtitle}>Front-end developer</h2>

          <div className={styles1.heroButtonContainer}>
            <button
              className={styles1.heroButton}
              onClick={() => {
                const element = document.getElementById('project-section');
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
            >
              My Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
