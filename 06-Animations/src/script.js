import * as THREE from "three";

// green sock
import gsap from "gsap";

console.log(gsap);

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object

// BoxGeometry(width, height, depth)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "grey" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Time
// let time = Date.now();
const Clock = new THREE.Clock();

gsap.to(mesh.position,{duration:2, delay: 2, x: 4})





// Animations
const tick = () => {
  // time
  //   const currentTime = Date.now();
  //   const deltaTime = currentTime - time;
  //   time = currentTime
  const elapsedTime = Clock.getElapsedTime();
  camera.position.y = Math.sin(elapsedTime);
  camera.position.x = Math.cos(elapsedTime);
  camera.lookAt(mesh.position);

  // update objects
  //   mesh.rotation.x = deltaTime
  //   mesh.rotation.y = deltaTime
  renderer.render(scene, camera);
  // this will code it on each fram
  window.requestAnimationFrame(tick);
};

tick();
