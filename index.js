console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});



console.clear();
var gradientTween = new TimelineMax();
var $body = $("body");

//  store color values for each section
var colors = [
  { left: "#1abfea", middle: "#c471ed", right: "#f4515e" },
  { left: "#45a247", middle: "#4c879b", right: "#4c879b" },
  { left: "white", middle: "white", right: "white" },
  { left: "#37ccfd", middle: "#b32fff", right: "#b32fff" }
];

for (let i = 0; i < colors.length; i++) {
  gradientTween.to($body, 1, {
    backgroundImage:
      "-webkit-linear-gradient(-4deg, " +
      colors[i].left +
      " 0%, " +
      colors[i].middle +
      " 50%, " +
      colors[i].right +
      " 90%)"
  });
}

var ctrl = new ScrollMagic.Controller();

var gradientScene = new ScrollMagic.Scene({
  triggerElement: ".wrapper",
  triggerHook: 0,
  duration: "300%"
})
  .addIndicators({ name: "master gradient" })
  .addTo(ctrl)
  .setTween(gradientTween);

$(".section2").each(function() {
  // create scene
  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: "onCenter"
  })
    .on("start", function() {
      console.log("passed trigger");
    })
    .addIndicators({ name: "section" })
    .addTo(ctrl);

  // Get ID of current trigger section ???
  var currentTrigger = $(scene.triggerElement()).attr("id");
  console.log(currentTrigger);
});

function scrollToNextSection() {
  const nextSection = document.querySelector('.about');
  nextSection.scrollIntoView({ behavior: 'smooth' });
}


  