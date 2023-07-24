//loadFade
function loadFade(){
  document.body.style.opacity="1";
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
