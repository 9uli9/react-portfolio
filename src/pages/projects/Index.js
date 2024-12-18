import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import projectsJSON from "../../data/projects.json";
import "../../index.css";

const Index = () => {
  const [projectList] = useState(projectsJSON || []);
  const [selectedCategory, setSelectedCategory] = useState("");

  const uniqueCategories = [
    "All Categories",
    ...new Set(projectList.flatMap((project) => project.categories)),
  ];

  const filteredProjects =
    selectedCategory === "" || selectedCategory === "All Categories"
      ? projectList
      : projectList.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  return (
    <>
      <div className="bg-white p-8 mb-6 rounded-md shadow-md sticky top-0 z-10">
        <h2 className="text-4xl text-center font-extrabold mb-2">
          All My Projects
        </h2>
        <div className="font-lacquer text-black px-6 py-3 rounded-lg font-medium transition text-black transition">
          <div className="flex justify-center space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-gray-300 px-4 py-2 rounded-md"
            >
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug || index}
                title={project.title}
                technologies={project.technologies}
                images={project.images}
                slug={project.slug}
              />
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
