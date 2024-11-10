import { useEffect, useState } from 'react';
import styles1 from '../app/styles/Herosection.module.css'; // Import custom CSS

const Herosection = () => {
  const [typingText, setTypingText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const typingTexts = ['Web Developer', 'Student'];

  useEffect(() => {
    const currentText = typingTexts[currentWordIndex];
    const typingInterval = setInterval(() => {
      if (typingText.length < currentText.length) {
        // Continue typing the current word
        setTypingText((prev) => prev + currentText[typingText.length]);
      } else {
        // Once the current word is fully typed, move to the next one
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypingText(''); // Clear the text after a short delay
          setCurrentWordIndex((prev) => (prev + 1) % typingTexts.length); // Move to the next word
        }, 1000); // Pause after finishing typing before moving to the next word
      }
    }, 200); // Adjust typing speed here (200ms)

    return () => clearInterval(typingInterval); // Cleanup the interval when component unmounts
  }, [typingText, currentWordIndex]);

  return (
    <section className={styles1.heroSection}>
      <div className={styles1.heroContainer}>
        <div className={styles1.heroLeftColumn}>
          <div className={styles1.subheading}>Hello!</div>
          <h1 className={styles1.heroHeading}>
            I'm <span className={styles1.heroHeadingSpan}>Syed Muhammad Afif</span>
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
                const element = document.getElementById("project-section");
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
