import { useEffect, useState } from 'react';
import Image from 'next/image';
import profileImage from '../app/images/profile.jpg';  // Correct import

const AboutMe = () => {
  const [typingText, setTypingText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const typingTexts = ['Web Developer', 'Student'];

  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [skills, setSkills] = useState([
    { name: 'Next.js', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'Bootstrap', level: 90 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
  ]);

  // Typing effect for the "Web Developer" and "Student" texts
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
  }, [typingText, currentWordIndex]);

  // Animate the skill progress bars
  useEffect(() => {
    const animateSkillProgress = () => {
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach((bar) => {
        const target = bar.dataset.level;
        let progress = 0;
        const interval = setInterval(() => {
          if (progress < target) {
            progress += 1;
            bar.style.width = `${progress}%`;
          } else {
            clearInterval(interval);
          }
        }, 10);
      });
    };

    animateSkillProgress();
  }, []);

  // Animate the "Projects Completed" counter
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
    }, 50); // Adjust speed here for faster or slower animation
  }, []);

  return (
    <section className="bg-[#292524] py-12" id="about-section">
      <div className="container mx-auto flex flex-wrap px-5">
        {/* Profile & Skills Section */}
        <div className="w-full md:w-1/2 lg:w-2/5 p-4">
          <div className="bg-[#201d1b] p-6 rounded-lg shadow-lg text-white">
            {/* Profile Image */}
            <div className="mb-4 flex justify-center">
              <Image
                src={profileImage}
                alt="Profile"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
            {/* Profile Details */}
            <div className="text-sm mb-6 space-y-2">
              <p><span className="font-semibold">Name:</span> S.M AFIF</p>
              <p><span className="font-semibold">Job Role:</span> Front-end dev</p>
              <p><span className="font-semibold">Experience:</span> 1 Year 3 Months</p>
              <p><span className="font-semibold">Address:</span> Karachi, Pakistan</p>
            </div>
            {/* Skills */}
            <div>
              <p className="font-semibold text-lg mb-3">Skills</p>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 h-2 rounded">
                      <div
                        className="progress-bar bg-yellow-500 h-2 rounded"
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

        {/* About Me Section */}
        <div className="w-full md:w-1/2 lg:w-3/5 p-4 mx-auto">
  <div className="text-white">
    <h1 className="text-5xl font-bold text-gray-300 relative mb-6">
      <span className="absolute opacity-10 top-0 left-0">About</span>
      <span className="relative text-white">About Me</span>
    </h1>
    <p className="text-gray-300 mb-6">
      With 1 year of hands-on experience in front-end development, accompanied by a strong foundation in web technologies. Proficient in HTML, CSS, JavaScript, and modern frameworks like React. Demonstrated success in building responsive websites, optimizing user experiences, and collaborating effectively in team-driven projects.
    </p>
    <ul className="space-y-4 text-sm">
  <li className="flex flex-col md:flex-row items-start">
    <span className="font-semibold w-full md:w-1/3">Profile:</span>
    <span className="w-full md:w-2/3">Front-end Developer</span>
  </li>
  <li className="flex flex-col md:flex-row items-start">
    <span className="font-semibold w-full md:w-1/3">Domain:</span>
    <span className="w-full md:w-2/3">Retail, Ecommerce, BFSI & Digital Marketing</span>
  </li>
  <li className="flex flex-col md:flex-row items-start">
    <span className="font-semibold w-full md:w-1/3">Education:</span>
    <span className="w-full md:w-2/3">Software Engineering</span>
  </li>
  <li className="flex flex-col md:flex-row items-start">
    <span className="font-semibold w-full md:w-1/3">Language:</span>
    <span className="w-full md:w-2/3">English, Urdu</span>
  </li>
  <li className="flex flex-col md:flex-row items-start">
    <span className="font-semibold w-full md:w-1/3">Other Skills:</span>
    <span className="w-full md:w-2/3">HTML, CSS, JavaScript, Bootstrap, TypeScript, Next.js</span>
  </li>
  <li className="flex flex-col md:flex-row items-start">
    <span className="font-semibold w-full md:w-1/3">Interests:</span>
    <span className="w-full md:w-2/3">Traveling, Travel Photography, Teaching, Coding</span>
  </li>
</ul>

    
    {/* Projects completed and LinkedIn Button */}
    <div className="mt-10 flex flex-col md:flex-row items-center">
  <span className="font-bold text-yellow-500 text-xl mr-0 md:mr-4 mb-4 md:mb-0">
    {projectsCompleted} + Projects completed
  </span>
  <a
  href="https://www.linkedin.com/in/syed-afif/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold transform transition duration-300 hover:scale-105"
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
