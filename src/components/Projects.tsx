"use client";
import Image from 'next/image';
import pro1 from '../app/images/pro 1.jpeg';
import pro2 from '../app/images/pro 2.jpeg';
import pro3 from '../app/images/pro 3.jpeg';
import pro4 from '../app/images/pro 4.jpeg';
import pro5 from '../app/images/pro 5.jpeg';
import pro6 from '../app/images/pro 6.jpeg';

const Projects = () => {
  return (
    <section className="bg-[#292524] ftco-section py-20" id="project-section">
      <div className="container mx-auto">
        <div className="row justify-center mb-5 pb-5">
          <div className="col-md-7 text-center">
            <h1 className="text-4xl font-bold text-gray-300 mb-4">Projects</h1>
            <h2 className="text-3xl mb-4">Projects</h2>
            <p className="text-lg text-gray-400">Below are some CLI-based projects made using TypeScript and Node.js.</p>
          </div>
        </div>
    
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="ftco-animate flex justify-center items-center">
            <div className="blog-entry justify-content-center">
              <a href="#" className="block w-full h-64 bg-cover bg-center rounded-lg hover:scale-105 transform transition-all">
                <Image 
                  src={pro1} 
                  alt="Simple Calculator" 
                  width={200} 
                  height={200} 
                  className="rounded-lg mx-auto"
                />
              </a>
              <div className="text mt-3 text-center">
                <h3 className="heading text-xl font-semibold text-white mb-2"><a href="#">Simple Calculator</a></h3>
                <p className="text-lg text-gray-400">This is a simple CLI-based calculator built using TypeScript.</p>
              </div>
            </div>
          </div>
    
          {/* Project 2 */}
          <div className="ftco-animate flex justify-center items-center">
            <div className="blog-entry justify-content-center">
              <a href="#" className="block w-full h-64 bg-cover bg-center rounded-lg hover:scale-105 transform transition-all">
                <Image 
                  src={pro2}  
                  alt="Simple ATM Machine" 
                  width={300} 
                  height={200} 
                  className="rounded-lg mx-auto"
                />
              </a>
              <div className="text mt-3 text-center">
                <h3 className="heading text-xl font-semibold text-white mb-2"><a href="#">Simple ATM Machine</a></h3>
                <p className="text-lg text-gray-400">This is a simple CLI-based ATM machine built using TypeScript.</p>
              </div>
            </div>
          </div>
    
          {/* Project 3 */}
          <div className="ftco-animate flex justify-center items-center">
            <div className="blog-entry justify-content-center">
              <a href="#" className="block w-full h-64 bg-cover bg-center rounded-lg hover:scale-105 transform transition-all">
                <Image 
                  src={pro3}  
                  alt="Currency Converter" 
                  width={300} 
                  height={200} 
                  className="rounded-lg mx-auto"
                />
              </a>
              <div className="text mt-3 text-center">
                <h3 className="heading text-xl font-semibold text-white mb-2"><a href="#">Currency Converter</a></h3>
                <p className="text-lg text-gray-400">This is a simple CLI-based currency converter built using TypeScript.</p>
              </div>
            </div>
          </div>
    
          {/* Project 4 */}
          <div className="ftco-animate flex justify-center items-center">
            <div className="blog-entry justify-content-center">
              <a href="#" className="block w-full h-64 bg-cover bg-center rounded-lg hover:scale-105 transform transition-all">
                <Image 
                  src={pro4} 
                  alt="Number Guessing Game" 
                  width={300} 
                  height={400} 
                  className="rounded-lg mx-auto"
                />
              </a>
              <div className="text mt-3 text-center">
                <h3 className="heading text-xl font-semibold text-white mb-2"><a href="#">Number Guessing Game</a></h3>
                <p className="text-lg text-gray-400">This is a simple CLI-based number guessing game built using TypeScript.</p>
              </div>
            </div>
          </div>
    
          {/* Project 5 */}
          <div className="ftco-animate flex justify-center items-center">
            <div className="blog-entry justify-content-center">
              <a href="#" className="block w-full h-64 bg-cover bg-center rounded-lg hover:scale-105 transform transition-all">
                <Image 
                  src={pro5}  
                  alt="To-Do List" 
                  width={400} 
                  height={500}  
                  className="rounded-lg mx-auto"
                />
              </a>
              <div className="text mt-3 text-center">
                <h3 className="heading text-xl font-semibold text-white mb-2"><a href="#">To-Do List</a></h3>
                <p className="text-lg text-gray-400">This is a simple CLI-based to-do list built using TypeScript.</p>
              </div>
            </div>
          </div>
    
          {/* Project 6 */}
          <div className="ftco-animate flex justify-center items-center">
            <div className="blog-entry justify-content-center">
              <a href="#" className="block w-full h-64 bg-cover bg-center rounded-lg hover:scale-105 transform transition-all">
                <Image 
                  src={pro6}  
                  alt="Adventure Game" 
                  width={400} 
                  height={500} 
                  className="rounded-lg mx-auto"
                />
              </a>
              <div className="text mt-3 text-center">
                <h3 className="heading text-xl font-semibold text-white mb-2"><a href="#">Adventure Game</a></h3>
                <p className="text-lg text-gray-400">This is a simple CLI-based adventure game built using TypeScript.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
