/* Function for moveable header of the site */

window.onscroll = function() {myHeaderState()};
function myHeaderState(){
  const block = document.getElementById("header-top");
  const header = document.getElementById("header-bottom");
  const offSet = header.offsetTop;

  if (window.pageYOffset > offSet){
    console.log(window.pageYOffset);
    console.log(offSet);

    header.style.position = "fixed";
    header.style.top = 0;
    block.style.paddingBottom = "90px";
  } 
  if (window.pageYOffset < 37){
    header.style.position = "static";
    block.style.paddingBottom = "10px";
  }
}

function openContent(contentId){
  var i
  const content = document.getElementsByClassName("div-miss");
  for (i = 0; i < content.length; i++){
    content[i].style.display = "none";
  }
  document.getElementById(contentId).style.display = "block"
}