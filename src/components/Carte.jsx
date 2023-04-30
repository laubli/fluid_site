import { useState, useRef } from 'react';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Stars, OrbitControls } from "@react-three/drei";

import DragSouls from '../assets/objets/DragSouls.fbx';

function MyObject({position, carte}) {
  const fbx = useLoader(FBXLoader, carte);
  console.log("position "+ position);
  return <primitive object={fbx} position={position} rotation={[0, Math.PI / 2, 0]}/>;
}

function Carte({position, carte}) {
 

  return (
    <div className="carte">
      <Canvas >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />          
        <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} zoomSpeed={10} panSpeed={0.5} rotateSpeed={0.4} autoRotate={false} />

        <MyObject position={position} carte={carte}/>
      </Canvas>
    </div>
  );
};

export default Carte;
