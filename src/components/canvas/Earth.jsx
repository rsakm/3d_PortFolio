import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    // Validate and fix geometry if needed
    earth.scene.traverse((child) => {
      if (child.isMesh) {
        // Ensure geometry is valid
        if (!child.geometry.boundingSphere || 
            isNaN(child.geometry.boundingSphere.radius)) {
          child.geometry.computeBoundingSphere();
        }
        
        // Validate position attributes
        const position = child.geometry.attributes.position;
        if (position) {
          const array = position.array;
          for (let i = 0; i < array.length; i++) {
            if (isNaN(array[i])) {
              array[i] = 0; // Reset invalid values to 0
            }
          }
          position.needsUpdate = true;
        }
      }
    });
  }, [earth]);

  return (
    <primitive 
      object={earth.scene} 
      scale={2.5} 
      position-y={0} 
      rotation-y={0} 
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;