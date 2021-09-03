var selection = "";

window.onload = function(){
let button = document.getElementById("dropDownButton");
let e = document.getElementById("acceptanceRateButton");
let k = document.getElementById("studentSizeButton");
let c = document.getElementById("staffSizeButton");
button.innerHTMl = "Khush";
e.addEventListener("click",function(){
  selection = "acceptanceRate";
  button.innerHTMl = "Khush";
});
k.addEventListener("click",function(){
  selection = "studentSize";
});
c.addEventListener("click",function(){
  selection = "staffSize";
});
}

