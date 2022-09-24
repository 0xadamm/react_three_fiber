import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AnimatedBox = () => {
  //using ref
  const meshRef = useRef<THREE.Mesh>(null);
  // executes on every frame
  useFrame(() => {
    console.log("Hi");
    // checks if mesh exists
    if (meshRef.current) {
      // adds rotation to x axis
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    // create box geometry & material
    <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
      <boxGeometry attach={"geometry"} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default AnimatedBox;
