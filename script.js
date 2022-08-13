/* Function for moveable header of the site */

window.onscroll = function() {myHeaderState()};
function myHeaderState(){
  const block = document.getElementById("header-top");
  const header = document.getElementById("header-bottom");
  const offSet = header.offsetTop;

  if (window.pageYOffset > offSet){

    header.style.position = "fixed";
    header.style.top = 0;
    block.style.paddingBottom = "90px";
  } 
  if (window.pageYOffset < 37){
    header.style.position = "static";
    block.style.paddingBottom = "10px";
  }
}

/* Function for tab in the site page */

function openContent(event, contentId){
  var i
  const content = document.getElementsByClassName("div-miss");
  const button = document.getElementsByClassName("buttonTabs");
  const defTab = document.getElementById("def-tab");

  defTab.style.display = "none";

  for (i = 0; i < content.length; i++){
    content[i].style.display = "none";
  }
  for (i = 0; i < button.length; i++){
    button[i].className = button[i].className.replace(" active", "")
  }
  document.getElementById(contentId).style.display = "block";
  event.currentTarget.className += " active";
}

/* Button arrow */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img-container");
  document.getElementById("imgShow").style.display = "none";

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; 
}