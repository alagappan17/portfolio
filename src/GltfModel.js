  import React, { useRef, useState } from "react";
  import { useLoader, useFrame } from "@react-three/fiber";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
  import { useEffect } from "react";


  const GltfModel = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, hover] = useState(false);
    // const { actions } = useAnimations(gltf);

    useEffect(() => {
      document.body.style.cursor = hovered ? 'grab' : 'auto'
    }, [hovered])

    useFrame((state, delta) => {
      if(!hovered)
        ref.current.rotation.y += 0.008
      else {
        ref.current.rotation.y += 0.002
      }
    });

    // useEffect(() => {
    //   const clips = Object.values(gltf.animations);
    //   const action = actions[0];
    //   if (action) {
    //     action.play();
    //     action.setLoop(THREE.LoopRepeat); // Set the loop mode if needed (optional)
    //   }
    // }, [actions, gltf]);

    // useEffect(() => {
    //   const mixer = new THREE.AnimationMixer(gltf.scene);
    //   const clips = gltf.animations;
    //   const actions = clips.map((clip) => mixer.clipAction(clip));
    //   console.log(actions);
    //   // actions.forEach((action) => action.play());
    //   actions[0].play();
    //   // return () => mixer.stopAllAction();
    // }, [gltf]);

    return (
      <>
        <primitive
          ref={ref}
          object={gltf.scene}
          position={position}
          // scale={hovered ? scale * 1.2 : scale}
          scale={scale}
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}
        />
      </>
    );
  };

  export default GltfModel;