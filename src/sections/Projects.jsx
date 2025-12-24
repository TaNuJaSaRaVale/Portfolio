import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F8F4EE] px-6 md:px-10 py-28"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2B2B2B] mb-4">
            Projects
          </h2>
          <p className="text-[#4B5563] text-lg">
            A selection of projects showcasing my work in machine learning,
            full-stack web development, and applied problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
