import { useEffect } from "react";

export default function useParallax() {
  useEffect(() => {
    const elems = Array.from(document.querySelectorAll("[data-parallax]"));

    function onScroll() {
      const scrollY = window.scrollY;
      elems.forEach((el) => {
        const speedAttr = el.getAttribute("data-speed") || "0.2";
        const speed = parseFloat(speedAttr);
        // apply small translateY based on element offsetTop
        const offset = (scrollY - el.offsetTop) * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    }

    // throttle with requestAnimationFrame
    let ticking = false;
    function handler() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", handler);
    onScroll();

    return () => window.removeEventListener("scroll", handler);
  }, []);
}
