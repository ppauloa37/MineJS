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
