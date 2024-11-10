import { useEffect, useState } from 'react';
import Image from 'next/image';
import profileImage from '../app/images/profile.jpg';
import styles from '../app/styles/Aboutme.module.css';

const AboutMe = () => {
  const [typingText, setTypingText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const typingTexts = ['Web Developer', 'Student']; // Fixed missing dependency in useEffect

  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [skills] = useState([
    { name: 'Next.js', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'Bootstrap', level: 90 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
  ]);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWordIndex, typingTexts]); // Fixed dependency array



  useEffect(() => {
    const animateSkillProgress = () => {
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach((bar) => {
        if (bar instanceof HTMLElement) {
          const target = parseInt(bar.dataset.level || '0', 10);
          let progress = 0;
          const interval = setInterval(() => {
            if (progress < target) {
              progress += 1;
              bar.style.width = `${progress}%`;
            } else {
              clearInterval(interval);
            }
          }, 10);
        }
      });
    };
  
    animateSkillProgress();
  }, []);
  
  useEffect(() => {
    const targetProjects = 45;
    let count = 0;
    const interval = setInterval(() => {
      if (count < targetProjects) {
        count += 1;
        setProjectsCompleted(count);
      } else {
        clearInterval(interval);
      }
    }, 50);
  }, []);

  return (
    <section className={styles.aboutSection} id="about-section">
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <Image
                src={profileImage}
                alt="Profile"
                width={150}
                height={150}
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileDetails}>
              <p>
                <span className={styles.fontSemibold}>Name:</span> S.M AFIF
              </p>
              <p>
                <span className={styles.fontSemibold}>Job Role:</span> Front-end dev
              </p>
              <p>
                <span className={styles.fontSemibold}>Experience:</span> 1 Year 3 Months
              </p>
              <p>
                <span className={styles.fontSemibold}>Address:</span> Karachi, Pakistan
              </p>
            </div>
            <div className={styles.skills}>
              <p className={styles.skillsTitle}>Skills</p>
              <div className={styles.skillItem}>
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className={styles.skillLabel}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBarBackground}>
                      <div
                        className={`${styles.skillBar} progress-bar`}
                        data-level={skill.level}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutMeSection}>
          <div className={styles.aboutMeContent}>
            <h1 className={styles.heading}>
              <span className={styles.headingOverlay}>About</span>
              <span>About Me</span>
            </h1>
            <p className={styles.aboutMeText}>
              With 1 year of hands-on experience in front-end development, accompanied by a strong foundation in web technologies. Proficient in HTML, CSS, JavaScript, and modern frameworks like React. Demonstrated success in building responsive websites, optimizing user experiences, and collaborating effectively in team-driven projects.
            </p>
            <ul className={styles.profileList}>
              <li>
                <span className={styles.fontSemibold}>Profile:</span> Front-end Developer
              </li>
              <li>
                <span className={styles.fontSemibold}>Domain:</span> Retail, Ecommerce, BFSI & Digital Marketing
              </li>
              <li>
                <span className={styles.fontSemibold}>Education:</span> Software Engineering
              </li>
              <li>
                <span className={styles.fontSemibold}>Language:</span> English, Urdu
              </li>
              <li>
                <span className={styles.fontSemibold}>Other Skills:</span> HTML, CSS, JavaScript, Bootstrap, TypeScript, Next.js
              </li>
              <li>
                <span className={styles.fontSemibold}>Interests:</span> Traveling, Travel Photography, Teaching, Coding
              </li>
            </ul>
            <div className={styles.projectsSection}>
              <span className={styles.projectsCompleted}>{projectsCompleted} + Projects completed</span>
              <a
                href="https://www.linkedin.com/in/syed-afif/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinButton}
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
