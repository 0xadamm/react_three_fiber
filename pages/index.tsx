import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import TexturedSpheres from "../components/TexturedSpheres";
import Lights from "../components/Lights";
import Ground from "../components/Ground";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Tree = () => {
  const model = useLoader(GLTFLoader, "./models/tree.glb");
  console.log(model);
  model.scene.traverse(object => {
    if (object.isObject3D) {
      object.castShadow = true;
    }
  });
  return <primitive object={model.scene} />;
};

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
        <TexturedSpheres />
        <Tree />
        <Lights />
        <Ground />
      </Canvas>
    </div>
  );
};

export default Home;
