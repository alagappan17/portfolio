import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";
import { Environment } from '@react-three/drei'

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  return (
    <Canvas id="canvas-1">
      {/* <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} /> */}
      <Environment preset="forest"background={false} blur={100}/>
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls enablePan={false} enableZoom={false}/>
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;