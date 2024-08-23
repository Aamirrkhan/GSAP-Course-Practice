var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageBox = document.querySelectorAll("#image");

main.addEventListener("mousemove", function (e) {
  // console.log(e);
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    // duration: 1,
    // ease: "back.out",
  });
});


imageBox.forEach(item => {
  item.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More"
    console.log("mouse Enter")
    gsap.to(cursor, {
      scale:3,
      backgroundColor: "#ffffff85"
    });
  });
  item.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    console.log("mouse Leave")
    gsap.to(cursor, {
      scale:1,
      backgroundColor: "#fff"
    });
  });
});