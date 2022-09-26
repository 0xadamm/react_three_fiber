import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const Trees = () => {
  const model = useLoader(GLTFLoader, "./models/tree.glb");
  console.log(model);
  model.scene.traverse(object => {
    if (object.isObject3D) {
      object.castShadow = true;
    }
  });
  return <primitive object={model.scene} />;
};

export default Trees;
