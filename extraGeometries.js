import headShotJpg from './textures/headShot.jpg';
import resumeDescJpg from './textures/resume_desc.jpg';
import * as THREE from 'three';

export default function CreateMyFace() {
    //texture mapping
    const myFaceTexture = new THREE.TextureLoader().load(headShotJpg);
    const myFace = new THREE.Mesh(
      new THREE.BoxGeometry(0.5,0.5,0.5),
      new THREE.MeshBasicMaterial({ map: myFaceTexture})
    );

      myFace.animate = () => {
        myFace.rotation.x += 0.001;
        myFace.rotation.y += 0.001;
      };

    return myFace;
}
  
export function CreateResumeBlock() {  
    const resumeTexture = new THREE.TextureLoader().load(resumeDescJpg);
    const resumeBlock = new THREE.Mesh(
      new THREE.BoxGeometry(10,9,1),
      new THREE.MeshBasicMaterial({ map: resumeTexture})
    );
    return resumeBlock;
}