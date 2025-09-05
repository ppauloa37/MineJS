    var ui = document.createElement("canvas")
    ui.className = "ui"
    ui.width = innerWidth
    ui.style.display = "none"
    document.body.appendChild(ui)
    var m = ui.getContext("2d")

    var init = document.getElementById("intie")
    var single = document.getElementById("singleb")
    var multi = document.getElementById("multi")
    var chartset = document.getElementById("charset")
    var world = document.getElementById("098626")
    var playworld = document.getElementById("playworld")
    var deleteworld = document.getElementById("deleteworld")
    var editworld = document.getElementById("editworld")
    var game = document.getElementsByClassName("game")
    var point = document.getElementById("point")
    var centerx = ((0 + innerWidth) / 2) + "px"
    var centery = ((0 + innerHeight) / 2) + "px"

    single.addEventListener("click", () => {
      chartset.style.display = "block"
      document.getElementById("single").style.display = "block"
      init.style.display = "none"
    })
    world.addEventListener("click", () => {
      world.style.border = "1px solid white"
      playworld.classList.remove("model")
      playworld.classList.add("true")
      deleteworld.classList.remove("model")
      deleteworld.classList.add("true")
      editworld.classList.remove("model")
      editworld.classList.add("true")
    })
    playworld.addEventListener("click", () => {
      if (world.style.border === "1px solid white") {
        chartset.style.display = "none"
        game[1].style.display = "block"
        point.style.left = centerx
        point.style.top = centery
        point.style.display = "block"
      }
    })

    var inventory = function(x, y, w, h) {
      m.fillStyle = "rgb(0, 255, 255)"
      m.fillRect(x, y, w, h)
    }

    inventory(50, 20, 20, 20)

    entre.addEventListener('click', () => {
      window.location.href = 'https://miningames.netlify.app/login=login?pag=mineJS?pss=login'
      if (window.location.href.includes("127.0.0.1:5500")) {
        window.location.href = 'miningsite/'
      }
    })
    
    var container = document.getElementById("intie")
    var progressBar = document.getElementById("progressbar")
    var playworld = document.getElementById("playworld")
    var yvector = 0;
    var treesArray = [];
    var centerx = ((0 + innerWidth) / 2) + "px"
    var centery = ((0 + innerHeight) / 2) + "px"
    var assets = document.getElementById("assets")
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
        y: 8,
        z: 0,
      }
    }
    var imports = function() {
        progressBar.style.position = "absolute"
        progressBar.style.top = centery - 500
        document.getElementsByClassName("progress")[0].style.top = centery
    }
    imports()
    import * as THREE from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r179/build/three.module.js';

      var jumpspeed = 0;
      var jumpmax = 3;
      var jumpspeeddown = 0;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(player.camera.FOV, window.innerWidth / window.innerHeight, 0.1, 1000);
      const moveDirection = new THREE.Vector3();
      const LoadingManager = new THREE.LoadingManager()

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      scene.background = new THREE.Color("rgb(0, 100, 255)")
      THREE.DefaultLoadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
        console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
        var progress = (itemsLoaded / itemsTotal);
        progressBar.style.width = progress + "%"
      };

      THREE.DefaultLoadingManager.onLoad = function ( ) {
        console.log( 'Loading Complete!');
        setInterval(() => {
          document.getElementById("progressui").style.display = "none"
        }, 9000)
        assets.textContent = "Preparando para inicialização: " + "Carregando assets"
      };

      THREE.DefaultLoadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
        console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
        var progress = (itemsLoaded / itemsTotal + itemsLoaded / 0.62);
        progressBar.style.width = progress + "%"

        assets.textContent = "Carregando:" + url
        console.log(progress)
      };

      THREE.DefaultLoadingManager.onError = function ( url ) {
        console.log( 'There was an error loading ' + url );
      };
    const loader = new THREE.TextureLoader();
    
    assets.textContent = "Carregando: Requisição de texturas"
    console.log("Loading: Requisition Textures")
    const materials = [
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/grass.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/grass.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/grasstop.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/grass.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/grass.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/grass.png')}),
    ];

    const materialsdirt = [
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/dirt.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/dirt.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/dirt.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/dirt.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/dirt.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/dirt.png')}),
    ];
    const materialsstone1 = [
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/stone1.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/stone1.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/stone1.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/stone1.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/stone1.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('https://cdn.jsdelivr.net/gh/ppauloa37/MineJS@0.8.2.2/contents/img/stone1.png')}),
    ];
    const materialsber = [
      new THREE.MeshBasicMaterial({map: loader.load('bet.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('bet.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('bet.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('bet.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('bet.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('bet.png')}),
    ];
    const materialsleaf = [
      new THREE.MeshBasicMaterial({map: loader.load('leaf.gif')}),
      new THREE.MeshBasicMaterial({map: loader.load('leaf.gif')}),
      new THREE.MeshBasicMaterial({map: loader.load('leaf.gif')}),
      new THREE.MeshBasicMaterial({map: loader.load('leaf.gif')}),
      new THREE.MeshBasicMaterial({map: loader.load('leaf.gif')}),
      new THREE.MeshBasicMaterial({map: loader.load('leaf.gif')}),
    ];
    const materialsiron = [
      new THREE.MeshBasicMaterial({map: loader.load('Iron_minering.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('Iron_minering.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('Iron_minering.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('Iron_minering.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('Iron_minering.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('Iron_minering.png')}),
    ];
    const materialscarvon = [
      new THREE.MeshBasicMaterial({map: loader.load('mineringcarvon.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('mineringcarvon.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('mineringcarvon.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('mineringcarvon.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('mineringcarvon.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('mineringcarvon.png')}),
    ];
    const materialsshadow = [
      new THREE.MeshBasicMaterial({map: loader.load('Shadow.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('Shadow.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('Shadow.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('Shadow.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('Shadow.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('Shadow.png')}),
    ];
        const materialsvoid = [
      new THREE.MeshBasicMaterial({map: loader.load('void.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('void.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('void.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('void.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('void.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('void.png')}),
    ];
        const materialssky = [
      new THREE.MeshBasicMaterial({map: loader.load('sky.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('sky.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('sky.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('sky.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('sky.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('sky.png')}),
    ];
var assets = document.getElementById("assets")

var worldxyz = []
    for(var cubesx = 0; cubesx < 50; cubesx++) {
      worldxyz = []
      assets.textContent = "Carregando: Gerando terreno"
      console.log("Loading: Creating terrain")
      for(var cubesy = 0; cubesy < 1; cubesy++) {
        worldxyz = []
        for(var cubesz = 0; cubesz < 50; cubesz++) {
          worldxyz = true
          const geometry = new THREE.BoxGeometry(1, 1, 1);
          const cube = new THREE.Mesh(geometry, materialsstone1);
          scene.add(cube);

          cube.position.set(cubesx-20, cubesy, cubesz-20)

          const geometry2 = new THREE.BoxGeometry(1, 1, 1);
          const cube2 = new THREE.Mesh(geometry, materialsstone1);
          scene.add(cube2);

          cube2.position.set(cubesx-20, cubesy+1, cubesz-20)

          const geometry3 = new THREE.BoxGeometry(1, 1, 1);
          const cube3 = new THREE.Mesh(geometry, materialsstone1);
          scene.add(cube3);

          cube3.position.set(cubesx-20, cubesy+2, cubesz-20)

          const geometry4 = new THREE.BoxGeometry(1, 1, 1);
          const cube4 = new THREE.Mesh(geometry, materialsdirt);
          scene.add(cube4);

          cube4.position.set(cubesx-20, cubesy+3, cubesz-20)

          const geometry5 = new THREE.BoxGeometry(1, 1, 1);
          const cube5 = new THREE.Mesh(geometry, materialsdirt);
          scene.add(cube5);

          cube5.position.set(cubesx-20, cubesy+4, cubesz-20)

          const geometry6 = new THREE.BoxGeometry(1, 1, 1);
          const cube6 = new THREE.Mesh(geometry, materialsdirt);
          scene.add(cube6);

          cube6.position.set(cubesx-20, cubesy+5, cubesz-20)

          const geometry7 = new THREE.BoxGeometry(1, 1, 1);
          const cube7 = new THREE.Mesh(geometry, materialsdirt);
          scene.add(cube7);

          cube7.position.set(cubesx-20, cubesy+6, cubesz-20)

          const geometry8 = new THREE.BoxGeometry(1, 1, 1);
          const cube8 = new THREE.Mesh(geometry, materials);
          scene.add(cube8);

          cube8.position.set(cubesx-20, cubesy+7, cubesz-20)
        }
      }
    }

    // Generation trees
  var assets = document.getElementById("assets")

var trees = function(unit, dis, disz) {
      treesArray.forEach(tree => {
          scene.remove(tree);
      });
      assets.textContent = "Carregando: JAVA Colocando arvores"
      console.log("Loading: JAVA new trees")
      for (var tree = 0; tree<20; tree++) {
        var randomx = Math.random() * (unit + 0 + 1) + 0;
        var randomz = Math.random() * (unit + 0 + 1) + 0;
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const cube = new THREE.Mesh(geometry, materialsber);
        scene.add(cube);

        cube.position.set(Math.floor(randomx-dis), 9,Math.floor(randomz-disz))

        const geometry1 = new THREE.BoxGeometry(1, 1, 1);
        const cube1 = new THREE.Mesh(geometry, materialsber);
        scene.add(cube1);

        cube1.position.set(Math.floor(randomx-dis), 8,Math.floor(randomz-disz))

        const geometry2 = new THREE.BoxGeometry(1, 1, 1);
        const cube2 = new THREE.Mesh(geometry, materialsleaf);
        scene.add(cube2);

        cube2.position.set(Math.floor(randomx-dis), 10,Math.floor(randomz-disz))

        const geometry3 = new THREE.BoxGeometry(1, 1, 1);
        const cube3 = new THREE.Mesh(geometry, materialsleaf);
        scene.add(cube3);

        cube3.position.set(Math.floor(randomx-dis)-1, 10,Math.floor(randomz-disz))

        const geometry4 = new THREE.BoxGeometry(1, 1, 1);
        const cube4 = new THREE.Mesh(geometry, materialsleaf);
        scene.add(cube3);

        cube4.position.set(Math.floor(randomx-dis), 10,Math.floor(randomz-disz)-1)

        const geometry5 = new THREE.BoxGeometry(1, 1, 1);
        const cube5 = new THREE.Mesh(geometry, materialsleaf);
        scene.add(cube3);

        cube5.position.set(Math.floor(randomx-dis), 11,Math.floor(randomz-disz))

      }
    }
    // Minings generation
    // for (var mineringsX = 0; mineringsX<10; mineringsX++) {
    //   for (var mineringsY = 0; mineringsY<10; mineringsY++) {
    //     for (var mineringsZ = 0; mineringsZ<10; mineringsY++) {

    //     }
    //   }
    // }
    assets.textContent = "Carregando: Sprite animações"
    console.log("Loading: Sprite animations")
    function animate() {
        requestAnimationFrame(animate)

        camera.position.set(player.position.x, player.position.y, player.position.z)
        camera.rotation.set(player.camera.angle.x, player.camera.angle.y, player.camera.angle.z)

        camera.getWorldDirection(moveDirection);

        camera.position.add(moveDirection.multiplyScalar(1));

        renderer.render(scene, camera);

        if (player.position.y >= jumpmax+8) {
          jumpspeeddown += 0.01
          player.position.y -= jumpspeeddown;
          
        }
    }
    animate()

    document.body.addEventListener("keydown", (e) => {
      var speed = 1;
      if (chartset.style.display === "none") {
        if (speed >= 10) {
          player.camera.FOV = 10;
        }
        if (e.key === "w") {
          if (Math.floor(player.camera.angle.y) === -2 || Math.floor(player.camera.angle.y) === -1) {
            player.position.x += speed;
          }
          if (Math.floor(player.camera.angle.y) === -2 || Math.floor(player.camera.angle.y) === 0) {
            player.position.z -= speed;
          }
          if (Math.floor(player.camera.angle.y) === 2 || Math.floor(player.camera.angle.y) === 3) {
            player.position.x -= speed;
          }
          if (Math.floor(player.camera.angle.y) === -4 || Math.floor(player.camera.angle.y) === 0 || Math.floor(player.camera.angle.y) === -3) {
            player.position.z += speed;
          }
          if (Math.floor(player.camera.angle.y) === 4) {
            player.position.z -= speed;
          }
          if (Math.floor(player.camera.angle.y) === -5 || Math.floor(player.camera.angle.y) === -8) {
            player.position.x -= speed;
          }
          if (Math.floor(player.camera.angle.y) === 8) {
            player.position.x += speed;
          }
          if (Math.floor(player.camera.angle.y) === -6 || Math.floor(player.camera.angle.y) === -7 || Math.floor(player.camera.angle.y) === 6 || Math.floor(player.camera.angle.y) === 7) {
            player.position.z -= speed;
          }

        }

        if (e.key === "s") {
          player.position.x += 1;
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
        if (e.key === " ") {
          if (player.position.y <= jumpmax+8) {
            player.position.y +=  0.5;
          }
          else {
            player.position.y -= 0.5
          }
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
      document.getElementsByClassName("ui")[0].style.display = "block"
      document.getElementsByClassName("ui")[0].style.position = "absolute"
      document.getElementsByClassName("ui")[0].style.top = "85%"
      document.getElementsByClassName("ui")[0].width = innerWidth
      trees(300, 50, 50)
    })
    trees(300, 50, 50)
    trees(300, 50, 50)
    trees(300, 50, 50)
