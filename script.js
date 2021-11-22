

var collegeNames = ["Brown","Columbia","Cornell","Dartmouth","Harvard","Princeton","University of Pennsylvania","Yale"]

var collegeImages = ["collegeImages/brownImage.png","collegeImages/columbiaImage.png","collegeImages/cornellImage.png","collegeImages/dartmouthImage.png","collegeImages/harvardImage.png","collegeImages/princetonImage.png","collegeImages/uPennImage.png","collegeImages/yaleImage.png"];
var acceptanceRatesList =[5.4,3.7,8.7,6.17,3.43,5.63,5.68,4.62];
var studentSizesList = [9948,6000,23620,4170,23731,8856,21785,14810];
var collegeRatiosList = [6,6.1,9,7,5,5.1,6.2,4];
const acceptanceRates = new Map();
const studentSizes = new Map();
const collegeImagesMap = new Map();
const collegeRatiosMap = new Map();

for (let i = 0;i<8;i++){
  collegeImagesMap.set(collegeNames[i],collegeImages[i]);
  acceptanceRates.set(acceptanceRatesList[i],collegeNames[i]);
  studentSizes.set(studentSizesList[i],collegeNames[i]);
  collegeRatiosMap.set(collegeRatiosList[i],collegeNames[i]);
}


window.onload = function(){
let button = document.getElementById("dropDownButton");
let e = document.getElementById("acceptanceRateButton");
let k = document.getElementById("studentSizeButton");
let c = document.getElementById("studentRatioButton");
document.getElementById('collegeInformation').style.display = "none";
scrollingElement = (document.scrollingElement || document.body);
for (let i = 1;i<9;i++){
  document.getElementById("collegeName"+i).innerHTML = i+". "+collegeNames[i-1];
  document.getElementById("collegeImage"+i).src = collegeImages[i-1];
}

e.addEventListener("click",function(){
  document.getElementById("dropDownButton").innerHTML = "Acceptance Rate";
  sortAcceptanceRates();
});
k.addEventListener("click",function(){
  document.getElementById("dropDownButton").innerHTML = "Student Size";
  sortStudentSizes();
});
c.addEventListener("click",function(){
  document.getElementById("dropDownButton").innerHTML = "Staff Size";
  sortStudentRatios();
});

for (let i = 0;i<8;i++){
  document.getElementById("collegeButton"+(i+1)).addEventListener("click",function (){
    document.getElementById('collegeInformation').style.display = "block";
    document.getElementById("collegeImage").src = collegeImages[i];
    document.getElementById("collegeAcceptanceRateText").innerHTML = acceptanceRatesList[i];
    document.getElementById("collegeStudentSizeText").innerHTML = studentSizesList[i];
    if (collegeRatiosList[i]==6.1||collegeRatiosList[i]==6.2)
    document.getElementById("collegeRatioText").innerHTML = "6:1";
    else if(collegeRatiosList[i]==5.1)
    document.getElementById("collegeRatioText").innerHTML = "5:1";
    else
    document.getElementById("collegeRatioText").innerHTML = collegeRatiosList[i]+":1";
    scrollSmoothToBottom();
  });
}

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

function sortStudentSizes(){
studentSizesList.sort(function(a,b){
  return b-a
});
let namesSorted = [" "," "," "," "," "," "," "," "];
for (let i = 0;i<8;i++){
  namesSorted[i] = studentSizes.get(studentSizesList[i]);
}
for (let i = 0;i<8;i++){
  collegeNames[i] = namesSorted[i];
}
for (let i = 0;i<8;i++){
  collegeImages[i] = collegeImagesMap.get(namesSorted[i]);
}
updateScreen();
}

function sortStudentRatios(){
  collegeRatiosList.sort(function(a,b){
    return b-a;
  });
  let namesSorted = [" "," "," "," "," "," "," "," "];
  for(let i = 0;i<8;i++){
    namesSorted[i] = collegeRatiosMap.get(collegeRatiosList[i]);
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
    document.getElementById("collegeName"+i).innerHTML = i+". "+collegeNames[i-1];
  }
}
function scrollSmoothToBottom (id) {
  $(scrollingElement).animate({
     scrollTop: document.body.scrollHeight
  }, 500);
}
