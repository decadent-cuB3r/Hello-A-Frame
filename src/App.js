import 'aframe';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Scene,
  Box,
  Sphere,
  Cylinder,
  Plane,
  Sky,
} from '@belivvr/aframe-react';

function App() {
  return (
    <Scene>
      <Sky src='assets/images/vr.jpg'>
      </Sky>
    </Scene>
  );
}

export default App;
