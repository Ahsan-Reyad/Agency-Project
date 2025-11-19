import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    const staggerEls = Array.from(document.querySelectorAll(".stagger"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // if element has data-delay attribute, set inline transition-delay
            const delay = el.getAttribute("data-delay");
            if (delay) el.style.transitionDelay = `${delay}ms`;

            // activate reveal
            el.classList.add("active");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));
    staggerEls.forEach((el) => observer.observe(el));

    // For stagger: when in view add active which triggers child delays
    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            staggerObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    staggerEls.forEach((el) => staggerObserver.observe(el));

    return () => {
      observer.disconnect();
      staggerObserver.disconnect();
    };
  }, []);
}
