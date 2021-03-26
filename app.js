var next = document.getElementById("nextbtn");
var back = document.getElementById("backbtn");
var image = document.getElementById("image");
var description = document.getElementById("description");
var currentImage = 0;

//image array
var images = [
  {
link: "bg0.png",
text: "From Sandviksfjellet."
},
{
  link: "bg2.png",
  text: "Torget"
},
{
link: "bg1.png",
text: "Smitt & smau"
},
{
link: "nosy.png",
text: "Turist"
}
];

//Next event handler
next.addEventListener("click",function (){
  currentImage = currentImage + 1;
  if (currentImage === images.length){
currentImage = 0;
}
image.src = images[currentImage].link;
discription.textContent = images[currentImage].text;
});

//Back event handler
back.addEventListener("click",function () {
  currentImage = currentImage -1;
  if (currentImage === -1){
    currentImage = image.length -1;
  }
  image.src = images[currentImage].link;
  discription.textContent = images[currentImage].text;


});
