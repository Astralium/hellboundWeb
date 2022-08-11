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

const image_list = [
  "./media/img/P5R_Portrait_Sumire_NoGlasses_Sad.png",
  "./media/img/shubham.jpg",
  "./media/img/264539.png",
  "./media/img/Surprised_Kasumi.png",
  "./media/img/embrksm.png",
  "./media/img/IMG-20220808-WA0027.jpg"
];
var i = 0;

function arrowClick(){
  console.time("concatenation");
  i--;
  switch(i){
    case -1:
      i++;
      document.getElementById("imageShown").src = image_list[i];
      console.timeEnd("concatenation");
    default:
      document.getElementById("imageShown").src = image_list[i];
      console.timeEnd("concatenation");
  }
}

function arrowClick2(){
  console.time("concatenation");
  i++;
  switch(i){
    case image_list.length:
      i--
      document.getElementById("imageShown").src = image_list[i];
      console.timeEnd("concatenation");
    default:
      document.getElementById("imageShown").src = image_list[i];
      console.timeEnd("concatenation");
  }
}