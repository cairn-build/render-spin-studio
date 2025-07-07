import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/projectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData[id || ""];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-800 mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/projects")}>Back to Projects</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 text-white py-16">
        <div className="container mx-auto px-6">
          <Button
            variant="outline"
            onClick={() => navigate("/projects")}
            className="mb-6 text-stone-800 border-stone-800 bg-white hover:bg-stone-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            {project.detailedDescription}
          </p>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Project Details</h2>
          <p className="text-stone-600 mb-6">
            {project.detailedDescription}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image} 
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;