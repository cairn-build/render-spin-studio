import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo1 from "@/assets/anr-logo-1.png";
import logo2 from "@/assets/anr-logo-2.png";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Catalogue", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-stone-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo section */}
          <div className="flex items-center justify-between w-full">
            <img src={logo1} alt="ANR Logo 1" className="h-12 filter brightness-0 invert" />
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-stone-800">
                ANR Concrete Studio
              </div>
            </div>
            <img src={logo2} alt="ANR Logo 2" className="h-12 filter brightness-0 invert" />
          </div>
          
          {/* Navigation links */}
          <div className="flex space-x-8 ml-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-stone-800 text-white"
                    : "text-stone-600 hover:text-stone-800 hover:bg-stone-100"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;