import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";
import { Environment } from '@react-three/drei'

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  const handleModelError = (error, errorInfo) => {
    console.error("An error occurred while loading the 3D model:", error, errorInfo);
    return (<div>Error loading Model</div>)
  };
  return (
    <ErrorBoundary onCatch={handleModelError}>
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
    </ErrorBoundary>
  );
};

export default ModelViewer;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.props.onCatch(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>An error occurred while loading the 3D model.</p>
          {/* You can include additional information about the error if needed */}
        </div>
      );
    }

    return this.props.children;
  }
}