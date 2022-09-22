const erdvesDydis = 20; //nusakomas koks bus erdves dydis (gali buti kintamas)
let planeX;
let planeY;
document.getElementById("mygtukas01").addEventListener("click", touchSpace); //paleidimo mygtukas

//lektuvo valdymas
document.addEventListener("keydown", (event) => {
  //   alert(event.code);
  if (event.code == "ArrowUp") {
    planeMoving(0, 1);
  }
  if (event.code == "ArrowDown") {
    planeMoving(0, -1);
  }
  if (event.code == "ArrowLeft") {
    planeMoving(1, 0);
  }
  if (event.code == "ArrowRight") {
    planeMoving(-1, 0);
  }
});

//f-ja skirta erdvės sūkurimui
function touchSpace() {
  document.getElementById("mygtukas01").remove();
  for (i = 0; i < erdvesDydis; i++) {
    let eilute = document.createElement("div");
    eilute.id = "row" + i;
    eilute.className = "row";
    document.body.appendChild(eilute);
    for (a = 0; a < erdvesDydis; a++) {
      let pikselis = document.createElement("div");
      pikselis.id = "pixel" + i + "/" + a;
      pikselis.className = "pixel";
      document.getElementById(eilute.id).appendChild(pikselis);
    }
  }
  touchPlane();
}

//f-ja skirta sukurti lektuvui
function touchPlane() {
  planeX = (erdvesDydis - 1) / 2;
  planeX = parseInt(planeX);
  planeY = erdvesDydis - 1;
  planeY = parseInt(planeY);
  let pixelID = "pixel" + planeY + "/" + planeX;
  console.log(pixelID);
  document.getElementById(pixelID).classList.add("plane");
}

//f-ja skirta lektuvo judejimui. Paduodam du skaicius kiek reiketu pajudinti kordinates
function planeMoving(x, y) {
  let pixelID = "pixel" + planeY + "/" + planeX;
  document.getElementById(pixelID).classList.remove("plane");
  planeX = planeX - x;
  planeY = planeY - y;
  pixelID = "pixel" + planeY + "/" + planeX;
  document.getElementById(pixelID).classList.add("plane");
}
