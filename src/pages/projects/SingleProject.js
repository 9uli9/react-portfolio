import { useParams } from "react-router-dom";
import projectsJSON from "../../data/projects.json";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../../index.css";

const SingleProject = () => {
  const { slug } = useParams();
  const project = projectsJSON.find((proj) => proj.slug === slug);

  const buttonClass =
    "flex items-center bg-green-600 font-lacquer text-white px-6 py-3 mb-2 rounded-lg font-medium hover:bg-gray-700 transition text-white hover:text-gray-200 space-x-2";

  if (!project) {
    return (
      <p className="text-white text-center mt-12 animate-pulse">
        Project not found!
      </p>
    );
  }

  const liveProjectLink = project.links.find(
    (link) => link.title.toLowerCase() === "live project"
  )?.url;

  return (
    <div className="container mx-auto px-6 mt-12 max-w-4xl bg-white rounded-lg shadow-xl p-8 transition-transform transform">
      <h1 className="text-4xl font-extrabold text-black mb-4 text-center italic">
        {project.title}
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 relative">
        <p className="text-black-800 text-sm italic">{project.description}</p>

        <p className="text-sm text-black-400 text-right">
          Year: {project.date}
        </p>
      </div>

      {liveProjectLink && (
        <div className="mb-6">
          <div className="mb-6 h-96">
            <iframe
              src={liveProjectLink}
              title="Live Project"
              className="w-3/4 h-full border-2 border-gray-300 rounded-lg mx-auto"
              allowFullScreen
            />
          </div>
        </div>
      )}
    

      {project.images.length > 0 && (
        <div className="mb-6 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.images.map((img, idx) => (
              <div key={idx} className="transition-transform transform">
                <img
                  src={img.url}
                  alt={img.caption}
                  className="rounded-lg shadow-md w-full h-40"
                />
                {img.caption && (
                  <p className="text-gray-400 text-sm mt-2 italic">
                    {img.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-4">
        <h5 className="font-medium text-black mb-2">Categories:</h5>
        <ul className="flex flex-wrap space-x-2 text-sm text-gray-600">
          {project.categories.map((categories, index) => (
            <li key={index} className="bg-gray-200 px-2 py-1 rounded-lg">
              {categories}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h5 className="font-medium text-black mb-2">Technologies:</h5>
        <ul className="flex flex-wrap space-x-2 text-sm text-gray-600">
          {project.technologies.map((technologies, index) => (
            <li key={index} className="bg-gray-200 px-2 py-1 rounded-lg">
              {technologies}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 flex space-x-4">
        <a
          href={project.gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          <FaGithub />
          <span>View GitHub Repository</span>
        </a>

        {project.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            <FaExternalLinkAlt />
            <span>{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SingleProject;
