var myArray = {
    "User": "admin",
    "Password": "admin"
};

function myAlert(){
  var output = "User: " + myArray.User + "\n" + "Password: " + myArray.Password;
  alert(output);
}
function myColor(){
  document.getElementById("div3").style.backgroundColor = "#141619";
}
function myColor2(){
  document.getElementById("div3").style.backgroundColor = "#2E3339";
}

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