import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import Character from '../components/Character'
import { OrbitControls } from '@react-three/drei'

const index = () => {

  const [allAnimation, setAllAnimation] = useState([
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
  ]);
  

  const [currentAnimationName, setCurrentAnimationName] = useState("ain");

  return (
    <div className="w-[100vw] h-[100vh] relative">
      {/* 3D Scene */}
      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
  <OrbitControls 
    target={[0, 0.8, 0]} // Lower the focus point more
    minDistance={2} 
    maxDistance={5} 
  />
  <ambientLight />
  <directionalLight position={[-5, 5, 5]} />
  <Character currentAnimationName={currentAnimationName} />
</Canvas>



      {/* Keyboard-style Buttons (Small, Centered, and 10px from Bottom) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 
                grid grid-cols-7 gap-2 bg-gray-800 p-4 rounded-lg shadow-xl" dir="rtl">
  {allAnimation.map(({ name, label }) => (
    <button
      key={name}
      onClick={() => setCurrentAnimationName(name)}
      className="bg-gray-900 text-white px-4 py-2 text-lg rounded-md shadow-md 
                 hover:bg-gray-700 active:scale-95 transition-transform"
    >
      {label}
    </button>
  ))}
</div>
    </div>
  );
};

export default index;
