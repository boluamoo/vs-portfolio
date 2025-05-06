import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Personal Blog",
      description:
        "A responsive blog website built with HTML, CSS, and vanilla JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      github: "#",
    },
    {
      title: "Weather App",
      description:
        "A simple weather application that fetches and displays current weather data.",
      tags: ["HTML", "CSS", "JavaScript", "API"],
      image:
        "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&q=80",
      github: "#",
    },
    {
      title: "To-Do List",
      description:
        "A to-do list application with CRUD functionality, built with vanilla JS.",
      tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My Projects
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Here are some of the personal projects I've built to practice my
          skills and explore new technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-50 text-purple-dark text-xs px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              {/* <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
