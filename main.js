import './style.css';
import ResumeContent from './resume_content.js';
import spaceJpg from './textures/space.jpg';
import CreateEarth from './planets/earth.js';
import CreateMars from './planets/mars.js';
import CreateMoon from './planets/moon.js';
import CreateMyFace from './extraGeometries.js';
import DevStats from './DevStats.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry

//setup resume content
const resumeContent = ResumeContent();
document.querySelector('#content').innerHTML = resumeContent;

//scroll to top button
const scrollToTop = document.querySelector('#scrollToTop');
scrollToTop.addEventListener('click', () => {
  console.log('welp')
  window.scrollTo(0, 0);
});

//add in dev stats, hidden unless you set the mesh it should show stats on
//set in ctor or with setter func
const devStats = DevStats();

const scene = new THREE.Scene();
//background textures
const spaceTexture = new THREE.TextureLoader().load(spaceJpg);
scene.background = spaceTexture;

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = CreateRenderer();

camera.position.z = 1;

//add torus
const torus = CreateTorus(0x420069, 40);
const torus2 = CreateTorus(0x00b300, 30);
scene.add(torus, torus2);

const {pointLight, ambientLight} = CreateLighting();
scene.add(pointLight, ambientLight);

//makes the site interactive with mouse, even mousewheel
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 5;
controls.maxDistance = 50;

//add 200 stars
Array(200).fill().forEach(addStar);

const myFace = CreateMyFace();
myFace.position.z = 0
scene.add(myFace);

const earth = CreateEarth();
scene.add(earth);

const moon = CreateMoon();
scene.add(moon);
//devStats.SetMeshReference(moon, 'moon');

const mars = CreateMars();
scene.add(mars);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  // myFace.rotation.y = 0.01;
  // myFace.rotation.z = 0.01;
  // myFace.position.x += 0.09;
  // myFace.position.z += 0.09;

  camera.position.z = t * -0.01;
  if(camera.position.z < 1)
    camera.position.z = 1;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}
//add the scrolling effect
document.body.onscroll = moveCamera;

//run animation loop and change objects in each frame
function animate(){
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  torus2.rotation.x -= 0.01;
  torus2.rotation.y -= 0.005;
  torus2.rotation.z -= 0.01;

  moon.animate();
  moon.Orbit(earth);

  earth.animate();

  myFace.animate();

  mars.animate();

  devStats.Paint();

  // controls.update();

  renderer.render(scene, camera);
};

animate()

function CreateRenderer() {
  const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('#bg')
  });
  
  //dynamic pixelratio according to device
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  return renderer;
}

function CreateTorus(color, size){
// TorusGeometry(radius : Float, tube : Float, radialSegments : Integer, tubularSegments : Integer, arc : Float)
// radius - Radius of the torus, from the center of the torus to the center of the tube. Default is 1.
// tube — Radius of the tube. Default is 0.4.
// radialSegments — Default is 8
// tubularSegments — Default is 6.
// arc — Central angle. Default is Math.PI * 2. 
const geometry = new THREE.TorusGeometry( size, 1, 16, 100 );

const material = new THREE.MeshStandardMaterial( { color: color });
const torus = new THREE.Mesh( geometry, material);

return torus;
}

//generate a sphere with random position
function addStar(){
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( {color: 0xffffff});
  const star = new THREE.Mesh( geometry, material );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );

  star.position.set(x, y, z);
  scene.add(star);
}

function CreateLighting() {
  //pointlight, focused light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
//ambient light
const ambientLight = new THREE.AmbientLight(0xffffff);
return {pointLight, ambientLight}
}

function helperExamples(lightSource) {
  //lightHelper is a little object int he scene to represent the invisible lights
const lightHelper = new THREE.PointLightHelper(lightSource);

//gridhelper paints a grid
const gridHelper = new THREE.GridHelper(200, 50);
}