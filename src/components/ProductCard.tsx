import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Product } from "@/types/Product";
import InteractiveCube from "./InteractiveCube";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  globalRotation: React.MutableRefObject<number>;
}

export const ProductCard = ({
  product,
  onSelect,
  globalRotation,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer group">
      <div className="h-64 bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
        <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <InteractiveCube
            color={product.color}
            globalRotation={globalRotation}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
        <div className="absolute top-2 left-2 pointer-events-none">
          <div className="text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Double-click to view details
          </div>
        </div>
      </div>

      <div className="p-6" onDoubleClick={() => onSelect(product)}>
        <h3 className="text-xl font-bold text-stone-800 mb-2">
          {product.title}
        </h3>
        <div className="flex gap-2">
          <div>
            <div className="inline-block px-2 py-0.5 bg-stone-800 text-white rounded-full text-xs">
              {product.category}
            </div>
          </div>
          {product.subcategory && (
            <div>
              <div className="inline-block px-2 py-0.5 bg-stone-600 text-white rounded-full text-xs">
                {product.subcategory}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
