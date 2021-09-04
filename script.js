
var selection = "";
var acceptanceRates  = [];

window.onload = function(){
let button = document.getElementById("dropDownButton");
let e = document.getElementById("acceptanceRateButton");
let k = document.getElementById("studentSizeButton");
let c = document.getElementById("staffSizeButton");


button.innerHTMl = "Khush";
e.addEventListener("click",function(){
  selection = "acceptanceRate";
  document.getElementById("dropDownButton").innerHTML = "Acceptance Rate";
});
k.addEventListener("click",function(){
  selection = "studentSize";
  document.getElementById("dropDownButton").innerHTML = "Student Size";
});
c.addEventListener("click",function(){
  selection = "staffSize";
  document.getElementById("dropDownButton").innerHTML = "Staff Size";
});
}
