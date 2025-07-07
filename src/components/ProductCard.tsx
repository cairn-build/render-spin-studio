
import { useState, useRef } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Product } from "@/types/Product";
import * as THREE from "three";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

interface CubeProps {
  color: string;
}

const InteractiveCube = ({ color }: CubeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current && !isUserInteracting) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsUserInteracting(true);
  };

  const handlePointerUp = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsUserInteracting(false);
  };

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      scale={hovered ? 1.1 : 1}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
};

export const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer group">
      <div className="h-64 bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
        <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <InteractiveCube color={product.color} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            enableRotate={true}
          />
        </Canvas>
        <div className="absolute top-2 left-2 pointer-events-none">
          <div className="text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Double-click to view details
          </div>
        </div>
      </div>
      
      <div 
        className="p-6"
        onDoubleClick={() => onSelect(product)}
      >
        <h3 className="text-xl font-bold text-stone-800 mb-2">
          {product.title}
        </h3>
        <div className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-sm rounded-full">
          {product.category}
        </div>
      </div>
    </div>
  );
};
