import { Canvas } from '@react-three/fiber'
import React, { useState, Suspense, useMemo } from 'react';
import Character from '../components/Character'
import { OrbitControls, Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 text-3xl font-bold text-white">
        {progress.toFixed(0)}% loaded
      </div>
    </Html>
  );
};

const Index = () => {
  const allAnimation = useMemo(() => [
    { name: "aleph", label: "ا" }, { name: "baa", label: "ب" }, { name: "ta", label: "ت" },
    { name: "thaa", label: "ث" }, { name: "jeem", label: "ج" }, { name: "haa", label: "ح" },
    { name: "khaa", label: "خ" }, { name: "dal", label: "د" }, { name: "dhal", label: "ذ" },
    { name: "ra", label: "ر" }, { name: "zay", label: "ز" }, { name: "seen", label: "س" },
    { name: "sheen", label: "ش" }, { name: "saad", label: "ص" }, { name: "dhad", label: "ض" },
    { name: "taa", label: "ط" }, { name: "dha", label: "ظ" }, { name: "ain", label: "ع" },
    { name: "ghain", label: "غ" }, { name: "fa", label: "ف" }, { name: "gaaf", label: "ق" },
    { name: "kaaf", label: "ك" }, { name: "laam", label: "ل" }, { name: "meem", label: "م" },
    { name: "nun", label: "ن" }, { name: "ha", label: "ه" }, { name: "waw", label: "و" },
    { name: "yaa", label: "ي" }
  ], []);

  const [currentAnimationName, setCurrentAnimationName] = useState("ain");

  return (
    <div className="w-[100vw] h-[100vh] relative bg-gray-100">
      {/* 🌟 Beautiful Heading */}
      <h1 className="absolute top-5 left-1/2 -translate-x-1/2 text-3.5xl md:text-4xl font-extrabold text-gray-900 drop-shadow-lg">
        ArSL Learning Hub
      </h1>

      {/* 3D Scene */}
      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
        <OrbitControls 
          target={[0, 0.8, 0]}
          minDistance={2} 
          maxDistance={5}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5} 
          maxPolarAngle={Math.PI / 2.5}
          minAzimuthAngle={-Math.PI / 4} 
          maxAzimuthAngle={Math.PI / 4}  
        />
        <ambientLight intensity={2} />
        <directionalLight position={[-5, 5, 5]} />
        <Suspense fallback={<Loader />}>
          <Character currentAnimationName={currentAnimationName} />
        </Suspense>
      </Canvas>

      {/* Keyboard-style Buttons */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 
            grid grid-cols-7 gap-3 keyboard-container p-4 rounded-xl shadow-2xl 
            w-[85vw] max-w-[800px] overflow-y-auto bg-white border border-gray-300" dir="rtl">
        {allAnimation.map(({ name, label }) => (
          <button
            key={name}
            onClick={() => setCurrentAnimationName(name)}
            className="bg-gray-300 text-gray-900 text-xl px-5 py-2 
                       md:text-lg md:px-4 md:py-2 
                       sm:text-base sm:px-3 sm:py-1 
                       rounded-md shadow-md hover:bg-gray-400 active:scale-95 transition-all"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Index;
