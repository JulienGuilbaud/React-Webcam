import { useEffect, useState,useRef } from 'react';

import "./style.scss"
import { Webcam } from '../webcam/index.js';
import { Canvas } from '../canvas';


export function App() {
    return (<>
    <Webcam/>
    <Canvas/>
    </>
    );
  }