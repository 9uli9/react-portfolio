import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "../components/ProjectCard";
import Carousel from "../components/Carousel";
import projectsData from "../data/projects.json";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="text-black min-h-screen font-sans">
      <section className="text-center py-20 bg-gradient-to-b from-white to-gray-200 pt-32 text-black">
        <h2 className="text-4xl font-lacquer font-extrabold mb-4">
          Julia Szewczuk
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          A passionate student who loves design.
        </p>
        <a
          href="#contact"
          className="bg-green-600 font-lacquer text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition"
        >
          Let's Connect
        </a>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-bold text-black mb-6">About Me</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm in my 3rd year of a Level 8 bachelor's degree in Creative
              Computing. Currently seeking an internship opportunity to further
              develop my skills in UI/UX design and front-end development by
              working on real-world projects. I'm quite passionate about
              user-centered design, from initial concepts to polished
              interfaces, with hands-on experience in prototyping in Figma to
              ensure functionality and aesthetics. Skilled in front-end
              development with HTML, CSS, and frameworks such as Bootstrap,
              Tailwind, and Sass. Experience in React for developing dynamic,
              responsive, and interactive user interfaces. Proficient in Figma
              for creating high- and low-fidelity prototypes.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="/images/profile.jfif"
              alt="Profile Picture"
              className="rounded-full w-32 h-32 border-4 border-green-600 mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-black mb-6">My Journey</h3>
          <Carousel>
            <div className="text-center p-6 border-green-600">
              <h4 className="text-xl font-semibold text-black mb-2">
                Early Days
              </h4>
              <div className="text-gray-700">
                I first became interested in computers and the web but had no
                coding experience. After exploring business courses, I was drawn
                to the digital side and decided to study Creative Computing at
                IADT. I started with basic HTML and CSS, which felt intimidating
                at first. Despite the challenges, I embraced the learning
                process, grew more confident, and developed a strong passion for
                technology and coding.
              </div>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-semibold text-black mb-2">
                Professional Growth
              </h4>
              <p className="text-gray-700">
                As I advanced in my studies, I transitioned into full-stack
                development, broadening my skills to include both front-end and
                back-end technologies. Mastering JavaScript, I began building
                dynamic web applications with React, learning how to create
                rich, interactive user experiences. I also delved into back-end
                development with PHP and Laravel, gaining expertise in building
                robust, scalable server-side applications. My understanding of
                databases, RESTful APIs, and version control systems like Git
                also expanded, allowing me to work more effectively on
                collaborative projects and in team environments.
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-semibold text-black mb-2">
                Current Focus
              </h4>
              <p className="text-gray-700">
                Currently, I'm focusing on enhancing my skills in cloud
                computing with AWS and networking through Cisco courses, gaining
                expertise in cloud architecture and network management.
                Alongside this, I'm pursuing a passion for UX/UI design to
                create user-friendly, intuitive digital experiences. My goal is
                to combine my technical knowledge with strong design principles,
                enabling me to build both functional and visually appealing
                solutions.
              </p>
            </div>
          </Carousel>
        </div>
      </section>

      <section id="projects" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-black mb-6">Projects</h3>
          <Carousel>
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                links={project.links}
                images={project.images}
                slug={project.slug}
              />
            ))}
          </Carousel>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-black mb-6">Contact</h3>
          <p className="text-gray-700 mb-6">
            Feel free to reach out to me for collaborations, freelance projects,
            or just to say hi!
          </p>
          <div className="flex space-x-6 justify-center">
            <a
              href="https://github.com/9uli9"
              className="text-2xl text-gray-800 hover:text-gray-700"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/julia-szewczuk-918151289/"
              className="text-2xl text-gray-800 hover:text-gray-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:julia5szewczuk@gmail.com"
              className="text-2xl text-gray-800 hover:text-gray-700"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-6 text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Julia Szewczuk. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
