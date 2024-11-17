gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scrollDist",
      start: "0 0",
      end: "100% 100%",
      scrub: 1,
    },
  })
  .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
  .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
  .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
  .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
  .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
  .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
  .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);

const arrowBtn = document.querySelector("#arrow-btn");

arrowBtn.addEventListener("mouseenter", () => {
  gsap.to(".arrow", {
    y: 10,
    duration: 0.8,
    ease: "back.inOut(3)",
    overwrite: "auto",
  });
});

arrowBtn.addEventListener("mouseleave", () => {
  gsap.to(".arrow", {
    y: 0,
    duration: 0.5,
    ease: "power3.out",
    overwrite: "auto",
  });
});

arrowBtn.addEventListener("click", () => {
  gsap.to(window, {
    scrollTo: innerHeight,
    duration: 1.5,
    ease: "power1.inOut",
  });
});

gsap.timeline({
  scrollTrigger: {
    trigger: "main", // 対象要素
    start: "top top", // スクロール開始位置
    end: "700px top", // 500pxスクロールした時点で解除
    onLeave: () => {
      const mainElement = document.querySelector("main");
      // fixed解除 + translateX適用
      mainElement.style.transition = "0s";
      mainElement.style.position = "absolute"; //static
      // mainElement.style.transform = "translateX(-50%)";
      mainElement.style.opacity = "0";
      mainElement.style.height = "0px";
      mainElement.style.zIndex = "100";
      mainElement.style.pointerEvents = "none";
    },
    onEnterBack: () => {
      const mainElement = document.querySelector("main");
      // スクロールで戻ってきた時にfixedを再適用
      mainElement.style.position = "fixed";
      // mainElement.style.transform = ""; // 元に戻す
      mainElement.style.opacity = "1";
      mainElement.style.height = "";
      mainElement.style.zIndex = "100";
      mainElement.style.pointerEvents = "";
      mainElement.style.transition = "0.7s";
    },
    // markers: true, // 開発中の確認用にスクロール位置を可視化
  },
});

gsap.timeline({
  scrollTrigger: {
    trigger: "main", // 対象要素
    start: "top top", // スクロール開始位置
    end: "400px top", // 500pxスクロールした時点で解除
    onLeave: () => {
      const mainElement = document.querySelector("main");
      // fixed解除 + translateX適用
      mainElement.style.transition = "0.7s";
      mainElement.style.opacity = "0";
    },
    onEnterBack: () => {
      const mainElement = document.querySelector("main");
      // スクロールで戻ってきた時にfixedを再適用

      mainElement.style.opacity = "1";
    },
    // markers: true, // 開発中の確認用にスクロール位置を可視化
  },
});
