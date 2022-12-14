import { useTexture } from "@react-three/drei";

const TexturedSpheres = () => {
  const map = useTexture("./textures/metal_plate_diff_1k.png");
  const displacementMap = useTexture("./textures/metal_plate_disp_1k.png");
  const normalMap = useTexture("./textures/metal_plate_nor_gl_1k.png");
  const roughnessMap = useTexture("./textures/metal_plate_rough_1k.png");
  return (
    <>
      <mesh scale={[0.5, 0.5, 0.5]} position={[0, 1, 0]} castShadow>
        <sphereGeometry args={[1, 1000, 1000]} />
        <meshStandardMaterial
          // wireframe
          map={map}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          // displacementMap={displacementMap}
          // displacementScale={0.09}
        />
      </mesh>
    </>
  );
};

export default TexturedSpheres;
