import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { BoxHelper } from "three/src/helpers/BoxHelper";

type Props = {
  isTesting: boolean;
};

const AnimatedBox: React.FC<Props> = ({ isTesting }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    isTesting ? useHelper(meshRef, BoxHelper, "cyan") : null;
  }

  useFrame(() => {
    console.log("Hi");
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    // create box geometry & material
    <mesh visible={true} ref={meshRef} scale={[0.5, 0.5, 0.5]}>
      <boxGeometry attach={"geometry"} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default AnimatedBox;
