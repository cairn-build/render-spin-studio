import { useState } from "react";
import { FilterBar } from "@/components/FilterBar";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductModal } from "@/components/ProductModal";
import { Product } from "@/types/Product";
import { products } from "@/data/products";

const Catalogue = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedFilter === "All"
      ? products
      : products.filter((product) => product.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            ANR Concrete Studio
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Explore our collection of bespoke concrete finishes for fireplaces,
            countertops, walls, and luxury furnishings
          </p>
        </div>
      </div>

      {/* Filter and Grid */}
      <div className="container mx-auto px-6 py-12">
        <FilterBar
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />

        <ProductGrid
          products={filteredProducts}
          onProductSelect={setSelectedProduct}
        />
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Catalogue;