import { useEffect, useRef, useState } from "react";
import { useFrame, useThree, ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";

interface CubeProps {
  color: string;
  globalRotation: React.MutableRefObject<number>;
}

const InteractiveCube = ({ color, globalRotation }: CubeProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [resetting, setResetting] = useState(false);

  const isInteracting = useRef(false);
  const lastInteractionTime = useRef(Date.now());
  const lastPointer = useRef<[number, number] | null>(null);

  const { gl } = useThree(); // Get canvas

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const rot = groupRef.current.rotation;
    const now = Date.now();

    if (isInteracting.current && now - lastInteractionTime.current > 1200) {
      isInteracting.current = false;
      setResetting(true);
    }

    if (isInteracting.current) return;

    if (resetting) {
      rot.x = THREE.MathUtils.damp(rot.x, 0, 5, delta);
      rot.z = THREE.MathUtils.damp(rot.z, 0, 5, delta);
      rot.y = THREE.MathUtils.damp(rot.y, globalRotation.current, 5, delta);

      if (
        Math.abs(rot.x) < 0.01 &&
        Math.abs(rot.z) < 0.01 &&
        Math.abs(rot.y - globalRotation.current) < 0.01
      ) {
        rot.x = 0;
        rot.z = 0;
        rot.y = globalRotation.current;
        setResetting(false);
      }

      return;
    }

    // Default: follow global spin
    rot.y = globalRotation.current;
    rot.x = 0;
    rot.z = 0;
  });

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    const bounds = gl.domElement.getBoundingClientRect();
    lastPointer.current = [e.clientX - bounds.left, e.clientY - bounds.top];
    isInteracting.current = true;
    lastInteractionTime.current = Date.now();
    setResetting(false);

    window.addEventListener("pointermove", handleGlobalPointerMove);
    window.addEventListener("pointerup", handleGlobalPointerUp);
  };

  const handleGlobalPointerMove = (e: PointerEvent) => {
    if (!isInteracting.current || !groupRef.current || !lastPointer.current)
      return;

    const bounds = gl.domElement.getBoundingClientRect();
    const pointerX = e.clientX - bounds.left;
    const pointerY = e.clientY - bounds.top;

    const [prevX, prevY] = lastPointer.current;
    const deltaX = pointerX - prevX;
    const deltaY = pointerY - prevY;

    groupRef.current.rotation.y += deltaX * 0.01;
    groupRef.current.rotation.x += deltaY * 0.01;

    lastPointer.current = [pointerX, pointerY];
    lastInteractionTime.current = Date.now();
  };

  const handleGlobalPointerUp = () => {
    lastPointer.current = null;
    isInteracting.current = false;
    setResetting(true);

    window.removeEventListener("pointermove", handleGlobalPointerMove);
    window.removeEventListener("pointerup", handleGlobalPointerUp);
  };

  useEffect(() => {
    return () => {
      // placeholder for cleanup
    };
  }, []);

  return (
    <group ref={groupRef}>
      <mesh
        onPointerDown={handlePointerDown}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
        scale={isHovered ? 1.1 : 1}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>
    </group>
  );
};

export default InteractiveCube;
