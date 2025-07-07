import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Product } from "@/types/Product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const SharedRotationManager = ({
  rotationRef,
}: {
  rotationRef: React.MutableRefObject<number>;
}) => {
  useFrame((_, delta) => {
    rotationRef.current += delta * 0.5;
  });
  return null;
};

export const ProductGrid = ({
  products,
  onProductSelect,
}: ProductGridProps) => {
  const globalRotationRef = useRef(0);

  return (
    <>
      {/* Single hidden canvas to drive shared rotation */}
      <Canvas
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          top: "-9999px",
          left: "-9999px",
        }}
      >
        <SharedRotationManager rotationRef={globalRotationRef} />
      </Canvas>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            globalRotation={globalRotationRef}
            onSelect={onProductSelect}
          />
        ))}
      </div>
    </>
  );
};
