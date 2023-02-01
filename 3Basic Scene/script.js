

console.log(THREE);
// 4 elements to createa a scene
// A scene that will contain objects
// Some objects
// A camera
// A renderer

// scene
const scene = new THREE.Scene();
// red cube
//create a visble object its called Mesh

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "blue" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes
const sizes = {
  width: 800,
  height: 600,
};

//Camera point of view (this is not visible)
// we need to provide parameters, first parameter is the field of view
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3



scene.add(camera);
// Renderer

const canvas = document.querySelector(".webgl");
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(sizes.width/sizes.height)

renderer.render(scene, camera)
