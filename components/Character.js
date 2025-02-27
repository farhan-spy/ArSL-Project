import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Character = ({currentAnimationName}) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/asl.glb')
    const { actions } = useAnimations(animations, group)
    console.log(actions);

    useEffect (() =>{
        actions [currentAnimationName] .reset().fadeIn(0.5).play();
        return ()=> actions[currentAnimationName].fadeOut(0.5);
    },[currentAnimationName])
    return (
      <group ref={group} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="moe_70">
                  <group name="moe_Skeleton_71">
                    <group name="GLTF_created_0">
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <skinnedMesh
                        name="Object_8"
                        geometry={nodes.Object_8.geometry}
                        material={materials.Wolf3D_Avatar}
                        skeleton={nodes.Object_8.skeleton}
                      />
                      <group name="Wolf3D_Avatar_69" />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    )
}

useGLTF.preload('/asl.glb')
export default Character
