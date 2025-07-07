import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectData: { [key: string]: { title: string; description: string } } = {
    "wall-panels": {
      title: "Wall Panels",
      description: "Detailed information about our wall panel projects will be displayed here.",
    },
    "vanities": {
      title: "Vanities",
      description: "Detailed information about our vanity projects will be displayed here.",
    },
    "tables": {
      title: "Tables",
      description: "Detailed information about our table projects will be displayed here.",
    },
  };

  const project = projectData[id || ""];

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
            className="mb-6 text-white border-white hover:bg-white hover:text-stone-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            {project.description}
          </p>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Project Details</h2>
          <p className="text-stone-600 mb-6">
            This page will contain detailed information, images, and specifications for the {project.title.toLowerCase()} project.
          </p>
          <div className="h-64 bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg flex items-center justify-center">
            <p className="text-stone-500">Project gallery will be added here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;