import headShotJpg from './textures/headShot.jpg';
import resumeDescJpg from './textures/resume_desc.jpg';

export function CreateMyFace() {
    //texture mapping
    const myFaceTexture = new THREE.TextureLoader().load(headShotJpg);
    const myFace = new THREE.Mesh(
      new THREE.BoxGeometry(3,3,3),
      new THREE.MeshBasicMaterial({ map: myFaceTexture})
    );
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