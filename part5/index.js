var tl  = gsap.timeline();

tl.to("#full",{
  right: 0,
  duration: 0.5
})
tl.from("#full h4",{
  x: 30,
  opacity:0,
  stagger: 0.3
})


tl.pause()

var menuBtn = document.querySelector("#nav i");
var fullMenu = document.querySelector("#full i")
menuBtn.addEventListener('click',function(){
  tl.play()
})
fullMenu.addEventListener('click',function(){
  tl.from("#full i",{
    opacity: 0,
    duration: 0.3
  })
  tl.reverse()
})