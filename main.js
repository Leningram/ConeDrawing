const applyBtn = document.querySelector("#apply"),
    inputHeight = document.querySelector("#height"),
    inputRadius = document.querySelector("#radius"),
    inputSegments = document.querySelector("#segments");

const renderBlock = document.querySelector(".cone");

let height = 5,
    radius = 2,
    segments = 4;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 15;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderBlock.appendChild(renderer.domElement);

const animate = function () {
    requestAnimationFrame(animate);
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    renderer.render(scene, camera);
};

let geometry = new THREE.ConeGeometry(radius, height, segments);
let material = new THREE.MeshBasicMaterial({ color: 0x5555555 });
let cone = new THREE.Mesh(geometry, material);
scene.add(cone);

animate();

applyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scene.remove(cone);
    height = inputHeight.value;
    radius = inputRadius.value;
    segments = inputSegments.value;
    geometry = new THREE.ConeGeometry(height, radius, segments);
    material = new THREE.MeshBasicMaterial({ color: 0x5555555 });
    cone = new THREE.Mesh(geometry, material);
    scene.add(cone);
});
