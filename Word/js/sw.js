var playworld = document.getElementById("playworld")
    var player = {
      camera: {
        FOV: 100,
        RENDERER: 0,
        angle: {
            x: 0,
            y: 0,
            z: 0,
          }
      },
      position: {
        x: 0,
        y: 4,
        z: 0,
      }
    }
    import * as THREE from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r179/build/three.module.js';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(player.camera.FOV, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    scene.background = new THREE.Color("rgb(0, 100, 255)");

    const loadManager = new THREE.LoadingManager();
    const loader = new THREE.TextureLoader();
    
    const materials = [
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@720fd04/contents/img/grass.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@720fd04/contents/img/grass.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@720fd04/contents/img/grasstop.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@720fd04/contents/img/grass.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@720fd04/contents/img/grass.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@720fd04/contents/img/grass.png')}),
    ];

    loadManager.onLoad = () => {
      const cube = new THREE.Mesh(geometry, materials);
      scene.add(cube);
      cubes.push(cube);  // adicione à nossa lista de cubos para girar
    };

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    for(var cubesx = 0; cubesx < 30; cubesx++) {
      for(var cubesy = 0; cubesy < 3; cubesy++) {
        for(var cubesz = 0; cubesz < 30; cubesz++) {
          const geometry = new THREE.BoxGeometry(1, 1, 1);
          const cube = new THREE.Mesh(geometry, materials);
          scene.add(cube);

          cube.position.set(cubesx, cubesy, cubesz)
        }
      }
    }

    function animate() {
        requestAnimationFrame(animate)

        camera.position.set(player.position.x, player.position.y, player.position.z)
        camera.rotation.set(player.camera.angle.x, player.camera.angle.y, player.camera.angle.z)

        renderer.render(scene, camera);
    }
    animate()

    document.body.addEventListener("keydown", (e) => {
      if (chartset.style.display === "none") {
        if (e.key === "w") {
          player.position.x += 1;
        }
        if (e.key === "s") {
          player.position.x -= 1;
        }
        if (e.key === "d") {
          player.position.z += 1;
        }
        if (e.key === "a") {
          player.position.z -= 1;
        }
        if (e.key === "ArrowUp") {
          player.camera.angle.x += 0.1;
        }
        if (e.key === "ArrowDown") {
          player.camera.angle.x -= 0.1;
        }
        if (e.key === "ArrowLeft") {
          player.camera.angle.y += 0.1;
        }
        if (e.key === "ArrowRight") {
          player.camera.angle.y -= 0.1;
        }
        document.getElementById("x").textContent = player.position.x;
        document.getElementById("y").textContent = player.position.y;
        document.getElementById("z").textContent = player.position.z;
      }
    })
    playworld.addEventListener("click", () => {
      document.getElementById("x").textContent = player.position.x;
      document.getElementById("y").textContent = player.position.y;
      document.getElementById("z").textContent = player.position.z;
    })
