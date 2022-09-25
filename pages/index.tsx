import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import TexturedSpheres from "../components/TexturedSpheres";

const Home: NextPage = () => {
  const testing = true;
  return (
    <div className="container">
      <Canvas>
        {testing ? <Stats /> : null}
        {testing ? (
          <axesHelper /*creates an axes helper on the object */ args={[2]} />
        ) : null}
        {testing ? (
          <gridHelper /*creates an grid in the scene */ args={[10]} />
        ) : null}

        <OrbitControls />
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 5, 5]} />
        <TexturedSpheres />
      </Canvas>
    </div>
  );
};

export default Home;
