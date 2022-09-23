let erdvesDydis = 0; //nusakomas koks bus erdves dydis (gali buti kintamas)
let levelis = 1; // nustatomas levelio lygis, pagal ji priesu kiekis
let priesoJudejimoGreitis = 1000; // nustatomas prieso judejimo greitis
let planeX;
let planeY;
let planeDirection = 0; // nusako lektuvo padeti : 0 - 12val; 1 - 9val; 2 - 3val; 3- 6val;
const enemyBunch = [];
let points = 0; // surinkti taskai
document.getElementById("mygtukas01").addEventListener("click", touchSpace); //paleidimo mygtukas

//lektuvo valdymas
document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowUp") {
    eliminatePlane();
    planeDirection = 0;
    planeMoving(0, 1);
  }
  if (event.code == "ArrowDown") {
    eliminatePlane();
    planeDirection = 3;
    planeMoving(0, -1);
  }
  if (event.code == "ArrowLeft") {
    eliminatePlane();
    planeDirection = 1;
    planeMoving(1, 0);
  }
  if (event.code == "ArrowRight") {
    eliminatePlane();
    planeDirection = 2;
    planeMoving(-1, 0);
  }
});

//f-ja skirta erdvės sūkurimui
function touchSpace() {
  firstTime();
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
  //pirmines lektuvo kordinates ir nupiesimas
  planeX = (erdvesDydis - 1) / 2;
  planeX = parseInt(planeX);
  planeY = erdvesDydis - 2;
  planeY = parseInt(planeY);
  touchPlane(planeX, planeY);
  enemyCreation(levelis);
  drawEnemyPosition();
  movingEnemy();
}

//f-ja skirta nupiesti lektuvui
function touchPlane(x, y) {
  //pagrindinio tasko pazymejimas
  let pixelID = "pixel" + y + "/" + x;
  document.getElementById(pixelID).classList.add("plane");
  //toliau viskas sparnu sukurimas direction
  if (planeDirection == 0) {
    y = y + 1;
    x = x - 1;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.add("plane");
    }
    x = x + 2;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.add("plane");
    }
  }
  if (planeDirection == 1) {
    y = y - 1;
    x = x + 1;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.add("plane");
    }
    y = y + 2;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.add("plane");
    }
  }
  if (planeDirection == 2) {
    y = y - 1;
    x = x - 1;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.add("plane");
    }
    y = y + 2;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.add("plane");
    }
  }
  if (planeDirection == 3) {
    y = y - 1;
    x = x - 1;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.add("plane");
    }
    x = x + 2;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.add("plane");
    }
  }
}

//j-ja skirta istrinti lektuvui
function eliminatePlane() {
  let pixelID = "pixel" + planeY + "/" + planeX;
  document.getElementById(pixelID).classList.remove("plane");
  let y = planeY;
  let x = planeX;
  if (planeDirection == 0) {
    y = y + 1;
    x = x - 1;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.remove("plane");
    }
    x = x + 2;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.remove("plane");
    }
  }
  if (planeDirection == 1) {
    y = y - 1;
    x = x + 1;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.remove("plane");
    }
    y = y + 2;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.remove("plane");
    }
  }
  if (planeDirection == 2) {
    y = y - 1;
    x = x - 1;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.remove("plane");
    }
    y = y + 2;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.remove("plane");
    }
  }
  if (planeDirection == 3) {
    y = y - 1;
    x = x - 1;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.remove("plane");
    }
    x = x + 2;
    if (x > -1 && x < erdvesDydis && y > -1 && y < erdvesDydis) {
      pixelID = "pixel" + y + "/" + x;
      document.getElementById(pixelID).classList.remove("plane");
    }
  }
}

//f-ja skirta lektuvo judejimui. Paduodam du skaicius kiek reiketu pajudinti kordinates
function planeMoving(x, y) {
  planeX = planeX - x;
  planeY = planeY - y;
  if (
    //apribojimas del erdves ribu
    planeX == erdvesDydis ||
    planeY == erdvesDydis ||
    planeX == -1 ||
    planeY == -1
  ) {
    planeX = planeX + x;
    planeY = planeY + y;
    touchPlane(planeX, planeY);
  } else {
    touchPlane(planeX, planeY);
  }
}

//funkcija sukurianti priesininka / -us
function enemyCreation(x) {
  for (let i = 0; i < x; i++) {
    enemyBunch[i] = ["x", "y"];
    enemyBunch[i].x = gautiRandom();
    enemyBunch[i].y = 0;
  }
  for (i = 0; i < enemyBunch.length; i++) {}
}

//f-ja skirta priesu nupiesimui
function drawEnemyPosition() {
  for (i = 0; i < enemyBunch.length; i++) {
    let pixelID = "pixel" + enemyBunch[i].y + "/" + enemyBunch[i].x;
    document.getElementById(pixelID).classList.add("enemy");
    hitPlane(enemyBunch[i].x, enemyBunch[i].y);
  }
}

//f-ja skirta priesu istrynimui
function removeEnemyPosition() {
  for (i = 0; i < enemyBunch.length; i++) {
    let pixelID = "pixel" + enemyBunch[i].y + "/" + enemyBunch[i].x;
    document.getElementById(pixelID).classList.remove("enemy");
  }
}

//f-ja skirta priesu judejimui / perpiesimui
function movingEnemy() {
  removeEnemyPosition();
  for (i = 0; i < enemyBunch.length; i++) {
    if (gautiRandom() < erdvesDydis / 2) {
      //random nusprendziam ar judesim x asimi ar y
      if (planeX < enemyBunch[i].x) {
        enemyBunch[i].x = enemyBunch[i].x - 1;
      }
      if (planeX > enemyBunch[i].x) {
        enemyBunch[i].x = enemyBunch[i].x + 1;
      }
      if (planeX == enemyBunch[i].x) {
        if (planeY < enemyBunch[i].y) {
          enemyBunch[i].y = enemyBunch[i].y - 1;
        }
        if (planeY > enemyBunch[i].y) {
          enemyBunch[i].y = enemyBunch[i].y + 1;
        }
      }
    } else {
      if (planeY < enemyBunch[i].y) {
        enemyBunch[i].y = enemyBunch[i].y - 1;
      }
      if (planeY > enemyBunch[i].y) {
        enemyBunch[i].y = enemyBunch[i].y + 1;
      }
      if (planeY == enemyBunch[i].y) {
        if (planeX < enemyBunch[i].x) {
          enemyBunch[i].x = enemyBunch[i].x - 1;
        }
        if (planeX > enemyBunch[i].x) {
          enemyBunch[i].x = enemyBunch[i].x + 1;
        }
      }
    }
  }
  drawEnemyPosition();
  howMuchPoints(1);
  setTimeout(movingEnemy, priesoJudejimoGreitis);
}

//f-ja skirta skaiciuoti random skaiciui iki maksimalaus galimo duoto dydzio
function gautiRandom() {
  return Math.floor(Math.random() * erdvesDydis);
}

//f-ja skirta pataikymui i lektuva
function hitPlane(x, y) {
  if (planeX == x && planeY == y) {
    alert("PRALAIMETA! \nsurinkta taškų : " + howMuchPoints());
    removeEnemyPosition();
    enemyCreation(levelis);
    points = 0;
  }
}

//f-ja surinktu tasku skaiciavimui
function howMuchPoints(a) {
  a ? (points = points + 1) : null;
  return parseInt(points * levelis * (250 / priesoJudejimoGreitis));
}

//f-ja pirmam paleidimui
function firstTime() {
  erdvesDydis = parseInt(document.getElementById("ivedamasDydis").value);
  levelis = parseInt(document.getElementById("ivedamasLevel").value);
  erdvesDydis ? null : (erdvesDydis = 30);
  erdvesDydis < 10 ? (erdvesDydis = 30) : null;
  levelis > !1 ? null : (levelis = 1);
  priesoJudejimoGreitis = parseInt(
    document.getElementById("ivedamasGreitis").value * 100
  );
  priesoJudejimoGreitis > 1000 ? (priesoJudejimoGreitis = 1000) : null;
  priesoJudejimoGreitis ? null : (priesoJudejimoGreitis = 1000);
  priesoJudejimoGreitis > 100 ? null : (priesoJudejimoGreitis = 100);
  document.getElementById("ivedamasLevel").remove();
  document.getElementById("mygtukas01").remove();
  document.getElementById("instruction1").remove();
  document.getElementById("instruction2").remove();
  document.getElementById("instruction3").remove();
  document.getElementById("ivedamasDydis").remove();
  document.getElementById("ivedamasGreitis").remove();
}
