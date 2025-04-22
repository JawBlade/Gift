import React, { useEffect, useRef } from "react";
import Polaroid from "./Polaroid";
import Image1 from "/Images/Image_1.png";
import Image2 from "/Images/Image_2.png";
import Image3 from "/Images/Image_3.png";
import Image4 from "/Images/Image_4.png";
import Image5 from "/Images/Image_5.png";
import Image6 from "/Images/Image_6.png";

function ImageSlider() {
  const scrollerRef = useRef(null);

  const images = [
    { src: Image1, caption: "Image 1" },
    { src: Image2, caption: "Image 2" },
    { src: Image3, caption: "Image 3" },
    { src: Image4, caption: "Image 4" },
    { src: Image5, caption: "Image 5" },
    { src: Image6, caption: "Image 6" },
  ];

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      scroller.setAttribute("data-animated", "true");
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(clone);
      });
    }
  }, []);

  return (
    <div
      className="scroller"
      data-speed="slow"
      data-direction="left"
      ref={scrollerRef}
    >
      <div className="scroller__inner">
        {images.map((img, index) => (
          <Polaroid key={index} src={img.src} caption={img.caption} />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
