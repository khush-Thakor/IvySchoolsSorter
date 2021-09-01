var collegeNames = ["harvard", "yale", "princeton","columbia","brown","dartmouth","uPenn","cornell"];

for (let i = 1;i<9;i++){
  if (i==1)
  document.getElementById("collegeImage"+i.toString()).src = "harvardImage.jpg"
  
  document.getElementById("collegeImage"+i.toString()).src = collegeNames[i-1]+"Image.png";
  console.log(collegeNames[i-1]+"Image.png");
}

document.getElementById("backButtonArea").style.display = 'none';
for (let i = 1; i < 9; i++) {
document.getElementById("button"+i.toString()).addEventListener("click",function(){
  nextButton();
});
}
document.getElementById('backButton').addEventListener("click",function(){
  backButton();
});

function nextButton(){
  document.getElementById('welcomePage').style.display = 'none';
  document.getElementById("backButtonArea").style.display = 'block';
}
function backButton(){
  document.getElementById('welcomePage').style.display = 'block';
  document.getElementById("backButtonArea").style.display = 'none';
}
