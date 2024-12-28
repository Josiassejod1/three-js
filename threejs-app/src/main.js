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
var newCube = null;

var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

for (let i = 0; i < 10; i++) {
  newCube = cube.clone();
  const randomColor = Math.random() * 0xffffff;
  newCube.material = new THREE.MeshBasicMaterial({ color: randomColor });
  let y = 0;
  let x = 0;

  if (i < 2 && i < 6) {
    y = -3;
  }

  if (i % 3 === 0) {
    x = 0;
  } else {
    x += 3;
  }

  if (i > 6) {
    y = -6;
  }
  newCube.position.set(x, -y, 0);

  scene.add(newCube);
}

cube.position.set(-5, 0, 0);
scene.add(cube);

// capsule
const geometry = new THREE.CapsuleGeometry(1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const capsule = new THREE.Mesh(geometry, material);
capsule.position.set(0, 0, 0);
scene.add(capsule);

// cone
const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
const coneMaterial = new THREE.MeshBasicMaterial({ color: "orange" });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.set(5, 0, 0);
scene.add(cone);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
var element = document.getElementById("app");
element.appendChild(renderer.domElement);
function animate() {
  for (let i = 0; i < scene.children.length; i++) {
    scene.children[i].rotation.x += 0.01;
  }
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
