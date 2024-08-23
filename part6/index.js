function textBreak() {
  var h1 = document.querySelector("h1");

  var h1Text = h1.textContent;

  var textSlipt = h1Text.split("");
  var halfValue = textSlipt.length / 2; // Text length divide kia khe 
  console.log(halfValue);
  var clutter = "";
  textSlipt.forEach(function (e, id) {
    if (id < halfValue) {
      clutter += `<span class="a">${e}</span>`;
    }
    else{
      clutter += `<span class="b">${e}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
textBreak();

gsap.from("h1 .a", {
  y: 80,
  duration: 0.6,
  stagger: 0.15,
  delay:0.5,
  opacity:0
});
gsap.from("h1 .b", {
  y: 80,
  duration: 0.6,
  stagger: -0.15,
  delay:0.5,
  opacity:0
})
