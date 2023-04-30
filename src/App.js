
import React, { Suspense, useState } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from './components/Nav';
import Shop from './components/Shop';
import Accueil from './components/Accueil';
import DeckGuerrier from './components/DeckGuerrier';
import DeckDragon from './components/DeckDragon';
import { Loader, Html } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Nav/>
        <Accueil/>
      </>,
    },
    {
      path: "/deck/guerrier",
      element: <>  
        <Nav/>
        <DeckGuerrier/>
      </>,
    },
    {
      path: "/deck/dragon",
      element: <>
        <Nav/>
        <DeckDragon/>
      </>,
    },
    {
      path: "/shop",
      element: <>
        <Nav/>
        <Shop/>
      </>,
    },
  ]);

  return <RouterProvider router={router}/>;
};


export default App;