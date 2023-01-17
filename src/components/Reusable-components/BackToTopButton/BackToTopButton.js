import { useEffect, useState } from "react";
import "./BackToTopButton.css";

export default function BackToTopButton() {
  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollToTopButton(true);
      } else {
        setScrollToTopButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollToTopButton && (
        <button className='scroll-to-top-btn' onClick={scrollToTop}>
          &uarr;
        </button>
      )}
    </>
  );
}
