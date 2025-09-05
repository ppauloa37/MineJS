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
