import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Lights from "../components/Lights";
import Ground from "../components/Ground";
import Trees from "../components/Trees";

const Home: NextPage = () => {
  const testing = true;
  return (
    <div className="container">
      <Canvas shadows camera={{ position: [0, 10, 0] }}>
        {testing ? <Stats /> : null}
        {testing ? (
          <axesHelper /*creates an axes helper on the object */ args={[2]} />
        ) : null}
        {testing ? (
          <gridHelper /*creates an grid in the scene */ args={[10, 10]} />
        ) : null}
        <OrbitControls />
        <Trees />

        <Lights />
        <Ground />
      </Canvas>
    </div>
  );
};

export default Home;
