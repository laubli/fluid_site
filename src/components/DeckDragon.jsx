import { useState, useRef } from 'react';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Stars, OrbitControls } from "@react-three/drei";
import Carte from './Carte';

import dragSouls from '../assets/objets/DragSouls.fbx';
import courroux_d_arackor from '../assets/objets/Courroux_d_arckachor.fbx';
import felnya from '../assets/objets/Felnya.fbx';
import guerrier_simple from '../assets/objets/guerrier_simple.fbx';
import SEOGORNDRAK from '../assets/objets/SEOGORNDRAK.fbx';
import serpentine from '../assets/objets/Serpentine_d_arendelle.fbx';
import sort2sang from '../assets/objets/sort2sang.fbx';


const Model = ({ obj }) => {
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={modelRef}>
      <primitive object={obj} />
    </mesh>
  );
};


function Deck() {

  return (
    <div className="cartes-container">
      <div className="cartes-grid">
        <Carte position={[0,-3,0]} carte={courroux_d_arackor}/>
        <Carte position={[0,-3,0]} carte={SEOGORNDRAK}/>
        <Carte position={[0,-3,0]} carte={serpentine}/>
      </div>
    </div>
  );
};

export default Deck;
