import { useEffect, useState } from 'react';

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
    <section className="text-gray-600 body-font bg-[#292524] ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-start"> {/* Change from items-center to items-start */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 text-left"> {/* Ensure text is left aligned */}
          <div className="text text-white">
            <span className="subheading text-lg">Hello!</span>
            <h1 className="mb-4 mt-3 text-4xl font-semibold">
              I'm <span className="text-primary">Syed Muhammad Afif</span>
            </h1>
            
            <span id="typing-animation" className="text-2xl font-light">
              {typingText}
            </span>
            <br />
            <h2 className="text-xl mt-4">Front-end developer</h2>
          </div>

          <div className="flex justify-start mt-8"> {/* Align button to the left */}
            <button
              className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg rounded-sm"
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
