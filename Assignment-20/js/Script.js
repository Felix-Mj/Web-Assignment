var ImagescC = document.getElementById("crousal");
var imageSrc = ["./Images/", "./Images/s2.jpg"];
let index = 0
ImagescC.src = imageSrc[index];
async function test() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  changeImage()
}
function changeImage() {
    ImagescC.src = imageSrc[index];
    test();
    index++
    if (index == imageSrc.length){
        index = 0
    }
}
test()