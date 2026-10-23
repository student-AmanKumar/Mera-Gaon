
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

/* ==========================================
   SMOOTH SCROLL
========================================== */

if (
    document.querySelector("#smooth-wrapper") &&
    document.querySelector("#smooth-content")
) {
    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 4,
        effects: true
    });
}

const mm = gsap.matchMedia();
const headphone = document.querySelector("#headphones");


/* ==========================================
   INTRO ANIMATIONS
========================================== */

if (headphone) {
    gsap.from(headphone, {
        autoAlpha: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        ease: "power1.inOut"
    });
}

if (document.querySelector(".section1 .heading")) {
    const split = SplitText.create(".section1 .heading", {
        type: "chars, words, lines",
        mask: "lines"
    });

    gsap.from(split.chars, {
        yPercent: () => gsap.utils.random(-100, 100),
        rotation: () => gsap.utils.random(-30, 30),
        autoAlpha: 0,
        ease: "back.out(1.5)",
        stagger: {
            amount: 0.5,
            from: "random"
        },
        duration: 1.5
    });
}


/* ==========================================
   DESKTOP
========================================== */

mm.add("(min-width: 991px)", () => {
    if (!headphone) return;

    gsap.to(headphone, {
        scrollTrigger: {
            trigger: "#section2",
            start: "top bottom",
            end: "center center",
            scrub: true
        },
        y: "100%",
        x: "50%",
        width: "47vw",
        rotation: 90,
        ease: "power1.inOut",
        immediateRender: false
    });

    gsap.to(headphone, {
        scrollTrigger: {
            trigger: "#section3",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        },
        y: "350%",
        x: 0,
        width: "45vw",
        rotation: 35,
        ease: "power1.inOut",
        immediateRender: false
    });

    gsap.to(headphone, {
        scrollTrigger: {
            trigger: "#section4",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        },
        y: "420%",
        width: "50vw",
        rotation: 0,
        ease: "power1.inOut",
        immediateRender: false
    });

    gsap.to(headphone, {
        scrollTrigger: {
            trigger: "#section5",
            start: "top bottom",
            end: "center bottom",
            scrub: true
        },
        y: "580%",
        width: "37vw",
        ease: "power1.inOut",
        immediateRender: false
    });

    gsap.to(headphone, {
        scrollTrigger: {
            trigger: "#section5",
            start: "center bottom",
            end: "bottom bottom",
            scrub: true
        },
        y: "870%",
        width: "30vw",
        ease: "power1.inOut",
        immediateRender: false
    });

    gsap.from("#section2 .content-wrapper", {
        scrollTrigger: {
            trigger: "#section2",
            start: "-50% bottom",
            end: "center center",
            scrub: true
        },
        y: "140%",
        ease: "power1.inOut"
    });

    gsap.from("#section3 .heading", {
        scrollTrigger: {
            trigger: "#section3",
            start: "top bottom",
            end: "center center",
            scrub: true
        },
        y: "140%",
        ease: "power1.inOut"
    });

    gsap.from("#section4 img", {
        scrollTrigger: {
            trigger: "#section4",
            start: "top bottom",
            end: "center center",
            scrub: true
        },
        width: 0,
        opacity: 0,
        ease: "power1.inOut"
    });

    gsap.from("#section6 .content-wrapper", {
        scrollTrigger: {
            trigger: "#section6",
            start: "top bottom",
            end: "center center",
            scrub: true
        },
        y: "40%",
        ease: "power1.inOut"
    });
});


/* ==========================================
   TABLET
========================================== */

mm.add("(min-width: 601px) and (max-width: 990px)", () => {
    if (!headphone) return;

    gsap.to(headphone, {
        scrollTrigger: {
            trigger: "#section2",
            start: "top bottom",
            end: "center center",
            scrub: true
        },
        y: "92%",
        x: "10%",
        width: "65vw",
        rotation: 45,
        ease: "power1.inOut"
    });

    gsap.to(headphone, {
        scrollTrigger: {
            trigger: "#section3",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        },
        y: "220%",
        x: 0,
        width: "60vw",
        rotation: 20,
        ease: "power1.inOut"
    });

    gsap.to(headphone, {
        scrollTrigger: {
            trigger: "#section4",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        },
        y: "350%",
        width: "60vw",
        rotation: 0,
        ease: "power1.inOut"
    });

    gsap.to(headphone, {
        scrollTrigger: {
            trigger: "#section5",
            start: "top bottom",
            end: "center bottom",
            scrub: true
        },
        y: "500%",
        width: "45vw",
        ease: "power1.inOut"
    });

    gsap.to(headphone, {
        scrollTrigger: {
            trigger: "#section5",
            start: "center bottom",
            end: "bottom bottom",
            scrub: true
        },
        y: "650%",
        width: "40vw",
        ease: "power1.inOut"
    });
});


/* ==========================================
   MOBILE
   One timeline controls the headphone.
========================================== */

mm.add("(max-width: 600px)", () => {
    if (!headphone) return;

    const main = document.querySelector("#main");
    const section2 = document.querySelector("#section2");
    const section3 = document.querySelector("#section3");
    const section4 = document.querySelector("#section4");
    const section5 = document.querySelector("#section5");
    const section6 = document.querySelector("#section6");

    if (!main) return;

    /*
      Keep the existing hero image placement.
      Do not reset xPercent or force a new position.
    */

    gsap.set(headphone, {
        autoAlpha: 1,
        scale: 1,
        force3D: true
    });

    const getDocumentTop = (element) => {
        let top = 0;
        let current = element;

        while (current) {
            top += current.offsetTop || 0;
            current = current.offsetParent;
        }

        return top;
    };

    const journey = gsap.timeline({
        scrollTrigger: {
            trigger: main,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true
        }
    });

    if (section2) {
        journey.to(headphone, {
            y: () => window.innerHeight * 0.75,
            x: "5vw",
            rotation: 30,
            width: "60vw",
            ease: "none"
        });
    }

    if (section3) {
        journey.to(headphone, {
            y: () => window.innerHeight * 1.65,
            x: 0,
            rotation: 15,
            width: "55vw",
            ease: "none"
        });
    }

    if (section4) {
        journey.to(headphone, {
            y: () => window.innerHeight * 2.7,
            rotation: 0,
            width: "50vw",
            ease: "none"
        });
    }

    if (section5) {
        journey.to(headphone, {
            y: () => window.innerHeight * 3.3,
            rotation: -8,
            width: "42vw",
            ease: "none"
        });
    }

    /*
      FINAL APPEARANCE:
      Move the same headphone image towards
      the visual centre of section6.
    */

    if (section6) {
        journey.to(headphone, {
            y: () => {
                const imageTop = getDocumentTop(headphone);
                const sectionTop = getDocumentTop(section6);

                return (
                    sectionTop +
                    section6.offsetHeight / 2 -
                    imageTop -
                    headphone.offsetHeight / 2
                );
            },
            x: 0,
            rotation: 0,
            width: "58vw",
            autoAlpha: 1,
            scale: 1,
            ease: "none"
        });
    }

    const refresh = () => ScrollTrigger.refresh();

    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);
    window.addEventListener("orientationchange", refresh);

    requestAnimationFrame(refresh);

    return () => {
        window.removeEventListener("load", refresh);
        window.removeEventListener("resize", refresh);
        window.removeEventListener("orientationchange", refresh);
        journey.scrollTrigger?.kill();
        journey.kill();
    };
});


/* ==========================================
   REFRESH AFTER PAGE LOAD
========================================== */

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});

(() => {
  "use strict";

  // Discourage common DevTools shortcuts.
  // This does not disable browser DevTools.
  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    const devToolsShortcut =
      event.key === "F12" ||
      (event.ctrlKey && event.shiftKey &&
        ["i", "j", "c"].includes(key)) ||
      (event.metaKey && event.altKey &&
        ["i", "j", "c"].includes(key));

    if (devToolsShortcut) {
      event.preventDefault();
    }
  });
})();

document.addEventListener("keydown", function (e) {
    const key = e.key.toLowerCase();

    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey &&
         ["i", "j", "c"].includes(key)) ||
        (e.ctrlKey && key === "u")
    ) {
        e.preventDefault();
        e.stopPropagation();
    }
}, true);

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
