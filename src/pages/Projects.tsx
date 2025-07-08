import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsData } from "@/data/projectData";
import sceltaLogo from "@/assets/scelta-1.png";
import anrLogo from "@/assets/anr-1.png";

const Projects = () => {
  const navigate = useNavigate();

  const projects = Object.values(projectsData).map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    image: project.images[0], // Use the first image as the cover
  }));

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 pt-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Logos Above Title */}
          <div className="flex justify-center items-center gap-12 mb-6 h-16">
            <div className="h-80 w-auto">
              <img
                src={anrLogo}
                alt="ANR Logo"
                className="h-full w-auto object-contain filter invert"
              />
            </div>
            <div className="w-1/4 max-w-[260px] h-full">
              <img
                src={sceltaLogo}
                alt="Scelta Logo"
                className="w-full h-full object-contain filter invert"
              />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Our Projects
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Explore our portfolio of custom concrete installations and designs
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="h-48 bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-stone-800">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
