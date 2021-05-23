import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
});

//dynamic pixelratio according to device
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

camera.position.setZ(15);

const torus = CreateTorus(0x420069);
scene.add(torus);

//pointlight, focused light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
//ambient light
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


//makes the site interactive with mouse, even mousewheel
const controls = new OrbitControls(camera, renderer.domElement);

//generate a sphere with random position
function addStar(){
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( {color: 0xffffff});
  const star = new THREE.Mesh( geometry, material );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );

  star.position.set(x, y, z);
  scene.add(star);
}
//add 200 stars
Array(200).fill().forEach(addStar);

//background textures
const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

//demonstrate texture mapping
const myFaceTexture = new THREE.TextureLoader().load('headShot.jpg');
const myFace = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({ map: myFaceTexture})
);
scene.add(myFace);

const moon = CreateMoon();
scene.add(moon);
moon.position.z = 15;
moon.position.setX(-10);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // moon.rotation.x += 0.05;
  // moon.rotation.y += 0.075;
  // moon.rotation.z += 0.05;

  // myFace.rotation.y = 0.01;
  // myFace.rotation.z = 0.01;
  // myFace.position.x += 0.09;
  // myFace.position.z += 0.09;

  // camera.position.z = t * -0.01;
  // camera.position.x = t * -0.0002;
  // camera.rotation.y = t * -0.0002;
}
//add the scrolling effect
//document.body.onscroll = moveCamera;

//run animation loop and change objects in each frame
function animate(){
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  moon.rotation.x += 0.001;
  moon.rotation.y += 0.005;

  myFace.rotation.y = 0.01;
  myFace.rotation.z = 0.01;

  controls.update();

  renderer.render(scene, camera);
};

animate()

function CreateMoon() {
  // SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
  // radius — sphere radius. Default is 1.
  // widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
  // heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
  // phiStart — specify horizontal starting angle. Default is 0.
  // phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
  // thetaStart — specify vertical starting angle. Default is 0.
  // thetaLength — specify vertical sweep angle size. Default is Math.PI.
  const moonTexture = new THREE.TextureLoader().load('moon.jpg');
  //the normal adds 'surface for light to bounce off of' adding simple realism
  const moonNormalTexture = new THREE.TextureLoader().load('moon_normal.jpg');
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
      normalMap: moonNormalTexture
    })
  );
  return moon;
}

function CreateTorus(color){
// TorusGeometry(radius : Float, tube : Float, radialSegments : Integer, tubularSegments : Integer, arc : Float)
// radius - Radius of the torus, from the center of the torus to the center of the tube. Default is 1.
// tube — Radius of the tube. Default is 0.4.
// radialSegments — Default is 8
// tubularSegments — Default is 6.
// arc — Central angle. Default is Math.PI * 2. 
const geometry = new THREE.TorusGeometry( 25, 1, 16, 100 );
const material = new THREE.MeshStandardMaterial( { color: color });
const torus = new THREE.Mesh( geometry, material);

return torus;
}

function helperExamples(theScene, lightSource) {
  //lightHelper is a little object int he scene to represent the invisible lights
const lightHelper = new THREE.PointLightHelper(lightSource);

//gridhelper paints a grid
const gridHelper = new THREE.GridHelper(200, 50);

theScene.add(lightHelper, gridHelper);
}

function deg2rad(degrees){
  return degrees * (Math.PI / 180);
}

function getOrbitXY(deg, distance){
  const radians = deg2rad(deg);
  return {
    x: Math.cos(radians) * distance,
    y: Math.sin(radians) * distance
  }
}