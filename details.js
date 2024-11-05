gsap.registerPlugin(ScrollTrigger);

let card = gsap.utils.toArray(".card");

function initCards() {
  animation.clear();
  cardHeight = cards[0].offsetHeight;
  cards.forEach((card, index) => {
    if (index === 0) {
      gsap.set(card, {
        y: 0,
        backgroundColor: "#FDFAFF",
        opacity: 1,
        duration: 0.1
      });
      animation.to(
        card,
        {
          y: -40 * cards.length,
          duration: 0.1,
          opacity: 0
        },
        0
      );
    } else if (index === 1) {
      gsap.set(card, {
        y: cardHeight,
        backgroundColor: "transparent",
        opacity: 1,
        duration: 1
      });
      animation.to(
        card,
        {
          y: -40 * cards.length,
          opacity: 0,
          duration: 0.4
        },
        0
      );
    } else {
      gsap.set(card, {
        y: cardHeight * 2,
        backgroundColor: "transparent",
        opacity: 0,
        duration: 0.1
      });
      animation.to(
        card,
        {
          y: 0,
          duration: 4,
          opacity: 1
        },
        0
      );
    }
  });
}

ScrollTrigger.create({
  trigger: ".section",
  start: "top",
  pin: ".section",
  scrub: true,
  animation,
  pinSpacing: true,
  markers: true,
  invalidateOnRefresh: true,
  onLeave: (e) => console.log(e),
  ease: "Power2.in",
  toggleActions: "restart none restart none"
});
