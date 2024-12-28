import * as THREE from "three";

// Scene, camera, and renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

var cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.set(-5, 0, 0);
scene.add(cube);

const geometry = new THREE.CapsuleGeometry(1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const capsule = new THREE.Mesh(geometry, material);
capsule.position.set(0, 0, 0);
scene.add(capsule);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
var element = document.getElementById("app");
element.appendChild(renderer.domElement);
function animate() {
  cube.rotation.x += 0.01;
  capsule.rotation.y += 0.01;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
