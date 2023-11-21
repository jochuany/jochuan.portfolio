//load fade in
function loadFade() {
  document.body.style.opacity = "1";
  checkMode();
}

//hamburger btn toggle
function hamMenu() {
  let ham = document.getElementById("ham-menu");
  ham.classList.toggle("show");

  let lineT = document.getElementById("line1");
  let lineM = document.getElementById("line2");
  let lineB = document.getElementById("line3");

  lineT.classList.toggle("line-1-45");
  lineM.classList.toggle("line-2-disapear");
  lineB.classList.toggle("line-3-45");
}

/*//localStorage setting
let nowMode = localStorage.getItem("mode");

//turn to dark mode
function darkMode() {
  //set localStorage
  localStorage.setItem("mode", "dark");

  //change color
  document.documentElement.style.setProperty("--primary", "#ffe38f");
  document.documentElement.style.setProperty("--info", "#777777");
  document.documentElement.style.setProperty("--word", "#f0f0f0");
  document.documentElement.style.setProperty("--bgc", "#181818");
  document.documentElement.style.setProperty(
    "--alpha-bgc",
    "rgba(24, 24, 24, 0.9)"
  );
  document.documentElement.style.setProperty(
    "--alpha-word",
    "rgba(240, 240, 240, 0.9)"
  );
  document.documentElement.style.setProperty(
    "--alpha-word-light",
    "rgba(240, 240, 240, 0.08)"
  );
  document.documentElement.style.setProperty(
    "--mouse-light",
    "rgba(255, 227, 143, 0.08)"
  );

  //change logo to white
  document.getElementById("logo").src = "../image/00-main/logo-w.png";
}

//turn to white mode
function whiteMode() {
  //set localStorage
  localStorage.setItem("mode", "white");

  //change color
  document.documentElement.style.setProperty("--primary", "#daa300");
  document.documentElement.style.setProperty("--info", "#a3a3a3");
  document.documentElement.style.setProperty("--word", "#181818");
  document.documentElement.style.setProperty("--bgc", "#f0f0f0");
  document.documentElement.style.setProperty(
    "--alpha-bgc",
    "rgba(240, 240, 240, 0.9)"
  );
  document.documentElement.style.setProperty(
    "--alpha-word",
    "rgba(24, 24, 24, 0.9)"
  );
  document.documentElement.style.setProperty(
    "--alpha-word-light",
    "rgba(24, 24, 24, 0.08)"
  );
  document.documentElement.style.setProperty(
    "--mouse-light",
    "rgba(218, 163, 0, 0.06)"
  );

  //change logo to black
  document.getElementById("logo").src = "../image/00-main/logo-b.png";
}

//check right now mode and turn to that mode
function checkMode() {
  if (nowMode === "dark") {
    //if now mode = dark, set to dark mode
    darkMode();
  } else {
    //if now mode = white, set to white mode
    whiteMode();
  }
}

//click mode btn to change mode
function changeMode() {
  if (nowMode === "dark") {
    //if mow mode = dark, change to white mode
    nowMode = "white";
    whiteMode();
  } else {
    //if now mode = white, change to dark mode
    nowMode = "dark";
    darkMode();
  }
}*/

//set mouse
document.addEventListener("mousemove", mouseFollow);

//mouse follow
function mouseFollow(e) {
  let mouse = document.getElementById("mouse");
  mouse.style.left = e.pageX + "px";
  mouse.style.top = e.pageY + "px";
}
