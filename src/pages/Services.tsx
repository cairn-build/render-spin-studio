import { useState, useRef } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { Product } from "@/types/Product";
import { ProductCard } from "@/components/ProductCard";
import sceltaLogo from "@/assets/scelta-1.png";
import anrLogo from "@/assets/anr-1.png";

interface ServiceCategory {
  name: string;
  description: string;
  catalogueItems: Product[];
}

const Services = () => {
  const [expandedServices, setExpandedServices] = useState<string[]>([]);
  const globalRotationRef = useRef(0);

  const toggleService = (serviceName: string) => {
    setExpandedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((name) => name !== serviceName)
        : [...prev, serviceName]
    );
  };

  const serviceCategories: ServiceCategory[] = [
    {
      name: "Countertops",
      description:
        "We create stunning custom concrete countertops for kitchens, bars, patios, and service areas. Our countertops are designed to be both functional and beautiful, with various finishes and edge profiles to match your style.",
      catalogueItems: products.filter((p) => p.category === "Countertops"),
    },
    {
      name: "Bathroom Solutions",
      description:
        "Transform your bathroom with our custom concrete vanities, sinks, and ADA compliant solutions. We specialize in creating seamless, water-resistant finishes that are both durable and elegant.",
      catalogueItems: products.filter((p) => p.category === "Bathroom"),
    },
    {
      name: "Fireplaces",
      description:
        "Enhance your living space with custom concrete fireplace surrounds, mantels, and hearths. Our designs create a striking focal point while providing excellent heat resistance and durability.",
      catalogueItems: products.filter((p) => p.category === "Fireplaces"),
    },
    {
      name: "Landscaping Features",
      description:
        "Beautify your outdoor spaces with concrete capstones, planters, and benches. Our landscaping solutions are weather-resistant and designed to complement your outdoor aesthetic.",
      catalogueItems: products.filter((p) => p.category === "Landscaping"),
    },
    {
      name: "Fire Features",
      description:
        "Create stunning outdoor entertainment areas with our custom fire bowls, tables, and pots. These features combine functionality with artistic design for memorable outdoor experiences.",
      catalogueItems: products.filter((p) => p.category === "Fire Features"),
    },
    {
      name: "Shower Systems",
      description:
        "Complete your bathroom renovation with our custom concrete shower floor pans and wall tiles. Designed for optimal drainage and easy maintenance while providing a luxurious feel.",
      catalogueItems: products.filter((p) => p.category === "Shower Systems"),
    },
    {
      name: "Custom Furniture",
      description:
        "Elevate your space with bespoke concrete furniture including dining tables, conference tables, and patio furniture. Each piece is crafted to your specifications and built to last.",
      catalogueItems: products.filter((p) => p.category === "Furniture"),
    },
    {
      name: "Range Hoods",
      description:
        "Complete your kitchen design with custom concrete range hoods that combine superior functionality with striking visual appeal.",
      catalogueItems: products.filter((p) => p.category === "Range Hoods"),
    },
    {
      name: "Stair Treads",
      description:
        "Enhance safety and style with our custom concrete stair treads, designed for both interior and exterior applications with non-slip finishes available.",
      catalogueItems: products.filter((p) => p.category === "Stair Treads"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
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
            What We Offer
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Comprehensive concrete solutions for your home and business
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-6 py-12">
        <div className="space-y-4">
          {serviceCategories.map((service) => {
            const isExpanded = expandedServices.includes(service.name);

            return (
              <div
                key={service.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleService(service.name)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-stone-800">
                    {service.name}
                  </h3>
                  {isExpanded ? (
                    <ChevronDown className="h-5 w-5 text-stone-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-stone-600" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-stone-100">
                    <p className="text-stone-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {service.catalogueItems.length > 0 && (
                      <div>
                        <h4 className="font-medium text-stone-800 mb-3">
                          Available Options:
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.catalogueItems.map((item) => (
                            <span
                              key={item.id}
                              className="inline-block px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm"
                            >
                              {item.subcategory || item.title}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {service.catalogueItems.slice(0, 3).map((product) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              globalRotation={globalRotationRef}
                              onSelect={() => {}} // No modal in services page
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
