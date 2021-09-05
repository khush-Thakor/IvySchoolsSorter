
var selection = "";
var collegeNames = ["Brown","Columbia","Cornell","Dartmouth","Harvard","Princeton","University of Pennsylvania","Yale"]
var collegeImages = ["brownImage.png","columbiaImage.png","cornellImage.png","dartmouthImage.png","harvardImage.jpg","princetonImage.png","uPennImage.png","yaleImage.png"]
var acceptanceRates  = [];

window.onload = function(){
let button = document.getElementById("dropDownButton");
let e = document.getElementById("acceptanceRateButton");
let k = document.getElementById("studentSizeButton");
let c = document.getElementById("staffSizeButton");
for (let i = 1;i<9;i++){
  document.getElementById("collegeName"+i).innerHTML = collegeNames[i-1];
  document.getElementById("collegeImage"+i).src = collegeImages[i-1];
}


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
