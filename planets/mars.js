import marsJpg from '../textures/marsmap1k.jpg';
import marsBumpJpg from '../textures/marsbump1k.jpg';
import * as THREE from 'three';

export default function Createmars() {
    const marsTexture = new THREE.TextureLoader().load(marsJpg);
    const marsBumpTexture = new THREE.TextureLoader().load(marsBumpJpg);
    const sphere = new THREE.SphereGeometry(0.8, 32, 32);
    const meshMaterial = new THREE.MeshStandardMaterial({
        map: marsTexture,
        normalMap: marsBumpTexture
    });
    const mars = new THREE.Mesh(
        sphere,
        meshMaterial
    );

    mars.position.z = 20;

    mars.animate = () => {
        mars.rotation.x += 0.0004;
        mars.rotation.y += 0.001;
    };
    return mars;
}