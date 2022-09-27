import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Object3D } from "three";

const Trees = () => {
  const model = useLoader(GLTFLoader, "./models/tree.glb");
  console.log(model);
  model.scene.traverse(object => {
    if (object.isObject3D) {
      object.castShadow = true;
    }
  });
  return (
    <object3D position={[5, 3, 0]}>
      <primitive object={model.scene} />;
    </object3D>
  );
};

export default Trees;
