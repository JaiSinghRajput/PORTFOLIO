import { useState } from "react";
import { ArrowRight, X, Code2, ExternalLink, Github } from "lucide-react";
import type { Project } from "~/types";

interface ProjectsSectionProps {
  projects: Project[];
  featuredOnly?: boolean; // if true, show only featured projects
}

export function ProjectsSection({ projects, featuredOnly = false }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isMobile = false;
  
  // Filter by isFeatured when featuredOnly is true
  const displayedProjects = featuredOnly
    ? projects.filter((p) => p.isFeatured)
    : projects;

  return (
    <section id="projects" className="py-24 section-theme">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-4">
            {featuredOnly ? "Featured Projects" : "All Projects"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work across web, mobile, AI, and more.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project._id}
              className="group relative p-6 rounded-2xl service-card-theme animate-fadeIn border border-border hover:shadow-lg transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Cover Image */}
              <div className="mb-4 rounded-xl overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.shortDescription}
              </p>

              {/* Category */}
              <div className="mb-3">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Learn More */}
              <div
                onClick={() => setSelectedProject(project)}
                className="flex items-center space-x-2 text-primary font-medium cursor-pointer hover:underline"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex ${
              isMobile
                ? "items-end"
                : "items-center justify-center"
            }`}
          >
            <div
              className={`bg-background border border-border shadow-2xl w-full ${
                isMobile
                  ? "rounded-t-2xl max-h-[90vh] overflow-y-auto animate-slideUp"
                  : "rounded-xl p-6 max-w-4xl max-h-[90vh] overflow-y-auto"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4 space-y-6">
                {/* Cover Image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.coverImage}
                    alt={selectedProject.title}
                    className="w-full object-cover"
                  />
                </div>

                {/* Short Description */}
                <div>
                  <h4 className="font-semibold mb-2">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.shortDescription}
                  </p>
                </div>

                {/* Detailed Description */}
                <div>
                  <h4 className="font-semibold mb-2">Details</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Category */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>
                    <strong>Category:</strong> {selectedProject.category}
                  </span>
                </div>

                {/* Technologies */}
                {selectedProject.technologies.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          <Code2 className="w-3 h-3 inline mr-1" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> 
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.repositoryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    <Github className="w-4 h-4" /> 
                    View Code
                  </a>
                </div>

                {/* Featured Badge */}
                {selectedProject.isFeatured && (
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-600 dark:text-yellow-400 px-3 py-2 rounded-lg border border-yellow-400/30">
                    ⭐ Featured Project
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}