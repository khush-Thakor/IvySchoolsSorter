
var selection = "";
var collegeNames = ["Brown","Columbia","Cornell","Dartmouth","Harvard","Princeton","University of Pennsylvania","Yale"]
var collegeImages = ["collegeImages/brownImage.png","collegeImages/columbiaImage.png","collegeImages/cornellImage.png","collegeImages/dartmouthImage.png","collegeImages/harvardImage.jpg","collegeImages/princetonImage.png","collegeImages/uPennImage.png","collegeImages/yaleImage.png"]
var acceptanceRatesList =[5.4,3.7,8.7,6.17,3.43,5.63,5.68,4.62];
console.log("Done");
const acceptanceRates = new Map();
const collegeImagesMap = new Map();
collegeImagesMap.set("Brown","brownImage.png");
collegeImagesMap.set("Columbia","columbiaImage.png");
collegeImagesMap.set("Cornell","cornellImage.png");
collegeImagesMap.set("Dartmouth","dartmouthImage.png");
collegeImagesMap.set("Harvard","harvardImage.jpg");
collegeImagesMap.set("Princeton","princetonImage.png");
collegeImagesMap.set("University of Pennsylvania","uPennImage.png");
collegeImagesMap.set("Yale","yaleImage.png");

acceptanceRates.set(5.4,"Brown");
acceptanceRates.set(3.7,"Columbia");
acceptanceRates.set(8.7,"Cornell");
acceptanceRates.set(6.17,"Dartmouth");
acceptanceRates.set(3.43,"Harvard");
acceptanceRates.set(5.63,"Princeton");
acceptanceRates.set(5.68,"University of Pennsylvania");
acceptanceRates.set(4.62,"Yale");

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
  sortAcceptanceRates();
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

function sortAcceptanceRates(){
  acceptanceRatesList.sort(function(a,b){
    return b-a
  });
  let namesSorted = [" "," "," "," "," "," "," "," "];
  for (let i = 0;i<8;i++){
    namesSorted[i] = acceptanceRates.get(acceptanceRatesList[i]);
  }
  for (let i = 0;i<8;i++){
    collegeNames[i] = namesSorted[i];
  }
  for (let i = 0;i<8;i++){
    collegeImages[i] = collegeImagesMap.get(namesSorted[i]);
  }
  updateScreen();
}
function updateScreen(){
  for (let i = 1;i<9;i++){
    document.getElementById("collegeImage"+i).src = collegeImages[i-1];
    document.getElementById("/collegeImages/collegeImage"+i).src = collegeImages[i-1];
  }
}
