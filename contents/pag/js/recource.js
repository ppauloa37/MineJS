    var init = document.getElementById("intie")
    var single = document.getElementById("singleb")
    var multi = document.getElementById("multi")
    var chartset = document.getElementById("charset")
    var world = document.getElementById("098626")
    var playworld = document.getElementById("playworld")
    var deleteworld = document.getElementById("deleteworld")
    var editworld = document.getElementById("editworld")
    var game = document.getElementsByClassName("game")

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
      }
    })
