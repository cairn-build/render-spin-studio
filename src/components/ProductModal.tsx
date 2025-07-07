
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/Product";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

interface CubeProps {
  color: string;
}

const DetailedCube = ({ color }: CubeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.2}
        metalness={0.3}
      />
    </mesh>
  );
};

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-stone-800">
            {product.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-80 bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg overflow-hidden">
            <Canvas camera={{ position: [4, 4, 4], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.3} />
              <DetailedCube color={product.color} />
              <OrbitControls 
                enableZoom={true} 
                autoRotate 
                autoRotateSpeed={1}
                enablePan={true}
              />
            </Canvas>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Description</h3>
              <p className="text-stone-600 leading-relaxed">{product.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Dimensions</h3>
              <p className="text-stone-600 font-mono bg-stone-50 px-3 py-2 rounded">
                {product.dimensions}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Material</h3>
              <p className="text-stone-600">{product.material}</p>
            </div>
            
            <div className="flex gap-4">
              <div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Category</h3>
                <div className="inline-block px-4 py-2 bg-stone-800 text-white rounded-full text-sm">
                  {product.category}
                </div>
              </div>
              {product.subcategory && (
                <div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">Type</h3>
                  <div className="inline-block px-4 py-2 bg-stone-600 text-white rounded-full text-sm">
                    {product.subcategory}
                  </div>
                </div>
              )}
            </div>
            
            <div className="pt-4">
              <Button 
                onClick={onClose}
                className="w-full bg-stone-800 hover:bg-stone-700 text-white py-3"
              >
                Close Details
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
