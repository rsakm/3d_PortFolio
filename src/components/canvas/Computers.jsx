import React, { Suspense, useEffect, useState, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf", true); // Draco compression

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      {!isMobile && (
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={512} // Reduced from 1024
        />
      )}
      <pointLight intensity={0.5} /> {/* Reduced intensity */}
      <primitive
        object={scene}
        scale={isMobile ? 0.5 : 0.75} // Smaller scale for mobile
        position={isMobile ? [0, -2.5, -1.5] : [0, -4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop={isMobile ? "never" : "demand"}
      shadows={!isMobile} // Disable shadows on mobile
      dpr={isMobile ? 1 : [1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        powerPreference: isMobile ? "low-power" : "high-performance",
        antialias: false,
        alpha: true
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enabled={!isMobile} // Disable orbit controls on mobile
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;