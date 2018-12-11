var pDemo = document.getElementById("demo")
  var imageSrc = document.getElementById("img")
  // document.getElementById("demo").InnerHTML = "hello Universe"
  // document.getElementsByClassName("demo2").InnerHTML = "haha"
  pDemo.innerHTML = "hello universe"

  document.getElementById("img").src = "https://images.unsplash.com/photo-1544264883-7ef90b95ca34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
  pDemo.style.color = "red"

  //EVENT HANDLERS
  // onclick=js
  // element.addEventListener(event, function, useCapture)
  // element.addEventlistener ("click" funtion(){
  // //   do something
//   // })
// <!-- 
//     Element.addEventListener() -->

var colors = ["red","green"]
var btn = document.getElementById("btn")

btn.addEventListener("click", changeColor)
function changeColor(){
  document.body.style.backgroundColor = colors[Math.floor.random() * colors.length)]
}