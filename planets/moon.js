import moonNormalJpg from '../textures/moon_normal.jpg';
import moonJpg from '../textures/moon.jpg';
import {getOrbitXY} from '../TrigHelpers';
import * as THREE from 'three';

export default function CreateMoon() {
    // SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
    // radius — sphere radius. Default is 1.
    // widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
    // heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
    // phiStart — specify horizontal starting angle. Default is 0.
    // phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
    // thetaStart — specify vertical starting angle. Default is 0.
    // thetaLength — specify vertical sweep angle size. Default is Math.PI.
    const moonTexture = new THREE.TextureLoader().load(moonJpg);
    //the normal adds 'surface for light to bounce off of' adding simple realism
    const moonNormalTexture = new THREE.TextureLoader().load(moonNormalJpg);
    const moon = new THREE.Mesh(
        new THREE.SphereGeometry(0.25, 32, 32),
        new THREE.MeshStandardMaterial({
            map: moonTexture,
            normalMap: moonNormalTexture
        })
    );

    moon.earthDegree = 0;
    moon.distanceFromPlanet = -1.75;
    moon.position.z = 0.04;
    moon.position.x = moon.distanceFromPlanet;

    moon.Orbit = (planet) => {
        moon.earthDegree += 0.5;
        moon.position.x = planet.x + moon.distanceFromPlanet;
        moon.position.y = planet.y + moon.distanceFromPlanet;
        moon.position.z = planet.z + moon.distanceFromPlanet;
        const newMoonPosition = getOrbitXY(moon.earthDegree, moon.distanceFromPlanet);
        moon.position.x = newMoonPosition.x;
        moon.position.y = newMoonPosition.y;
        moon.position.z = newMoonPosition.y - (newMoonPosition.y / 10);
    };

    moon.animate = () => {
        moon.rotation.x += 0.001;
        moon.rotation.y += 0.005;
    }

    return moon;
}