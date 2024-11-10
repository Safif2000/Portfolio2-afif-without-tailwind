"use client";
import Image from 'next/image';
import styles from '../app/styles/Project.module.css'

import pro1 from '../app/images/pro 1.jpeg';
import pro2 from '../app/images/pro 2.jpeg';
import pro3 from '../app/images/pro 3.jpeg';
import pro4 from '../app/images/pro 4.jpeg';
import pro5 from '../app/images/pro 5.jpeg';
import pro6 from '../app/images/pro 6.jpeg';

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="project-section">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-md-7">
            <h1 className={styles.headingPrimary}>Projects</h1>
            <h2 className={styles.headingSecondary}>Projects</h2>
            <p className={styles.description}>Below are some CLI-based projects made using TypeScript and Node.js.</p>
          </div>
        </div>

        <div className={`${styles.grid} ${styles.gridCols}`}>
          {/* Project 1 */}
          <div className={styles.projectCard}>
            <a href="#" className={styles.imageContainer}>
              <Image 
                src={pro1} 
                alt="Simple Calculator" 
                width={200} 
                height={200} 
                className={styles.image}
              />
            </a>
            <div className={styles.projectText}>
              <h3 className={styles.projectTitle}><a href="#">Simple Calculator</a></h3>
              <p className={styles.projectDescription}>This is a simple CLI-based calculator built using TypeScript.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.projectCard}>
            <a href="#" className={styles.imageContainer}>
              <Image 
                src={pro2}  
                alt="Simple ATM Machine" 
                width={300} 
                height={200} 
                className={styles.image}
              />
            </a>
            <div className={styles.projectText}>
              <h3 className={styles.projectTitle}><a href="#">Simple ATM Machine</a></h3>
              <p className={styles.projectDescription}>This is a simple CLI-based ATM machine built using TypeScript.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className={styles.projectCard}>
            <a href="#" className={styles.imageContainer}>
              <Image 
                src={pro3}  
                alt="Currency Converter" 
                width={300} 
                height={200} 
                className={styles.image}
              />
            </a>
            <div className={styles.projectText}>
              <h3 className={styles.projectTitle}><a href="#">Currency Converter</a></h3>
              <p className={styles.projectDescription}>This is a simple CLI-based currency converter built using TypeScript.</p>
            </div>
          </div>

          {/* Project 4 */}
          <div className={styles.projectCard}>
            <a href="#" className={styles.imageContainer}>
              <Image 
                src={pro4} 
                alt="Number Guessing Game" 
                width={300} 
                height={400} 
                className={styles.image}
              />
            </a>
            <div className={styles.projectText}>
              <h3 className={styles.projectTitle}><a href="#">Number Guessing Game</a></h3>
              <p className={styles.projectDescription}>This is a simple CLI-based number guessing game built using TypeScript.</p>
            </div>
          </div>

          {/* Project 5 */}
          <div className={styles.projectCard}>
            <a href="#" className={styles.imageContainer}>
              <Image 
                src={pro5}  
                alt="To-Do List" 
                width={400} 
                height={500}  
                className={styles.image}
              />
            </a>
            <div className={styles.projectText}>
              <h3 className={styles.projectTitle}><a href="#">To-Do List</a></h3>
              <p className={styles.projectDescription}>This is a simple CLI-based to-do list built using TypeScript.</p>
            </div>
          </div>

          {/* Project 6 */}
          <div className={styles.projectCard}>
            <a href="#" className={styles.imageContainer}>
              <Image 
                src={pro6}  
                alt="Adventure Game" 
                width={400} 
                height={500} 
                className={styles.image}
              />
            </a>
            <div className={styles.projectText}>
              <h3 className={styles.projectTitle}><a href="#">Adventure Game</a></h3>
              <p className={styles.projectDescription}>This is a simple CLI-based adventure game built using TypeScript.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
