import earthJpg from '../textures/earthmap1k.jpg';
import cloudJpg from '../textures/earthcloudmap.jpg';
import * as THREE from 'three';

export default function CreateEarth(cloud = true) {
  const earthTexture = new THREE.TextureLoader().load(earthJpg);
  const sphere = new THREE.SphereGeometry(1, 32, 32);
  const meshMaterial = new THREE.MeshStandardMaterial({
    map: earthTexture,
  });
  const earth = new THREE.Mesh(
    sphere,
    meshMaterial
  );

  //cloud layer
  if (cloud) {
    var geometry = new THREE.SphereGeometry(0.51, 32, 32)
    var material = new THREE.MeshPhongMaterial({
      map: new THREE.Texture(cloudJpg),
      side: THREE.DoubleSide,
      opacity: 0.8,
      transparent: true,
      depthWrite: false,
    });
    var cloudMesh = new THREE.Mesh(geometry, material)
    earth.add(cloudMesh)
  }

  earth.animate = () => {
    earth.rotation.x += 0.00001;
    earth.rotation.y += 0.0004;
  };
  return earth;
}