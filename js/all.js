//loadFade
function loadFade() {
  document.body.style.opacity = "1";
}

//hamMenu
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

let nowMode = localStorage.getItem("mode");

//dark
function darkMode() {
  localStorage.setItem("mode", "dark");

  document.documentElement.style.setProperty("--primary", "#ffe38f");
  document.documentElement.style.setProperty("--info", "#777777");
  document.documentElement.style.setProperty("--word", "#f0f0f0");
  document.documentElement.style.setProperty("--bgc", "#181818");

  document.getElementById("mode-btn").innerHTML = "&#9788;";
}

//white
function whiteMode() {
  localStorage.setItem("mode", "white");

  document.documentElement.style.setProperty("--primary", "#daa300");
  document.documentElement.style.setProperty("--info", "#a3a3a3");
  document.documentElement.style.setProperty("--word", "#181818");
  document.documentElement.style.setProperty("--bgc", "#f0f0f0");

  document.getElementById("mode-btn").innerHTML = "&#9789;";
}

//check mode
function checkMode() {
  if (nowMode === "dark") {
    darkMode();
  } else {
    whiteMode();
  }
}

//change mode
function changeMode() {
  if (nowMode === "dark") {
    nowMode = "white";
    whiteMode();
  } else {
    nowMode = "dark";
    darkMode();
  }
}
