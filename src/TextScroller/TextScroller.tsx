



import React, { useEffect, useState } from "react";
import "./TextScroller.css"; // Import your CSS styles

const Scroller: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner?.children || []);

        scrollerContent.forEach((item: Element) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner?.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div>
      <div className="scroller" data-speed="slow">
        <ul className="tag-list scroller__inner">
          {[
            "JavaScript",
            "C++",
            "Python",
            "Java",
            "React",
            "NextJs",
            "Node",
            "Express",
            "WebSocket",
            "TailwindCss",
            "Php",
            "MongoDb",
            "PostSql",
            "Redis",
          ].map((tag, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={hoveredIndex === index ? "hovered" : ""}
              style={{
                filter: hoveredIndex !== null && hoveredIndex !== index ? "blur(2px)" : "none",
              }}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Scroller;

