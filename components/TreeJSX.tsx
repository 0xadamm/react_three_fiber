import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Icosphere005: THREE.SkinnedMesh;
    Icosphere005_1: THREE.SkinnedMesh;
    Bone: THREE.Bone;
  };
  materials: {
    cherryblossom: THREE.MeshStandardMaterial;
    Treebark: THREE.MeshStandardMaterial;
  };
};

export function TreeModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/tree.glb") as GLTFResult;
  const [color, setColor] = useState("pink");
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Bone} />
      <skinnedMesh
        onClick={() => {
          setColor("green");
        }}
        geometry={nodes.Icosphere005.geometry}
        material={materials.cherryblossom}
        skeleton={nodes.Icosphere005.skeleton}
        material-color={color}
      />
      <skinnedMesh
        geometry={nodes.Icosphere005_1.geometry}
        material={materials.Treebark}
        skeleton={nodes.Icosphere005_1.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/tree.glb");
