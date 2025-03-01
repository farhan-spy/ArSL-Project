import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Character = ({ currentAnimationName }) => {
    const group = useRef();

    // Load the Draco-compressed model with DracoLoader enabled
    const { nodes, materials, animations } = useGLTF('/asl.glb', 'https://www.gstatic.com/draco/v1/decoders/');

    const { actions } = useAnimations(animations, group);

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
    );
};

// Preload model with Draco decoding enabled
useGLTF.preload('/asl.glb', 'https://www.gstatic.com/draco/v1/decoders/');

export default Character;
