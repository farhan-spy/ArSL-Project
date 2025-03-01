import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Character = ({currentAnimationName}) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/asl.glb')
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
      const action = actions[currentAnimationName];
      if (action) {
        action.reset().fadeIn(0.5).play();
        return () => action.fadeOut(0.5);
      }
    }, [currentAnimationName, actions]);    
    return (
      <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.Wolf3D_Avatar}
          skeleton={nodes.Object_8.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/asl.glb')
export default Character
