import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, technologies, images, slug }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-300 text-center hover:shadow-xl transition">
      <Link to={`/projects/${slug}`}>
        {images.length > 0 && (
          <img
            src={images[0].url}
            alt={images[0].caption || title}
            className="rounded-md w-full h-max object-cover mb-4"
          />
        )}

        <h4 className="text-2xl font-semibold text-black mb-2">{title}</h4>

        <div className="mb-4 text-left">
        <p className="text-black-800 text-xs italic font-semibold">Technology:</p>
          <ul className="flex flex-wrap space-x-2 text-xs text-gray-600">
            {technologies.map((tech, index) => (
              <li key={index} className="bg-gray-200 px-2 py-1 mt-2 rounded-lg">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
