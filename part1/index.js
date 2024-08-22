let timeLine = gsap.timeline();

timeLine.from(".nav h1",{
    opacity: 0,
    duration: 0.5,
    y: 20,
    delay:0.5
})
timeLine.from(".menu h6",{
    opacity: 0,
    y: 20,
    stagger: 1
})
timeLine.from(".heading",{
    opacity:0,
    scale: 0.2,
    duration: 0.5
})