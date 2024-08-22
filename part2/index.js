gsap.from("#page1 .box", {
    opacity: 0,
    duration: 1,
    rotate: 360,
    scale: 0.5,
    scrollTrigger: {
        trigger: "#page1 .box",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 2
    }
})


gsap.to("#page2 .heading", {
    transform: "translateX(-50%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "bottom -100%",
        scrub: 2,
        pin: true
    }
})