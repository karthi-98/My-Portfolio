import { useEffect, useState } from "react";
import { icons } from "../../Constants/constants";

const Navigation = () => {
  const classNameA =
    "text-base text-text font-medium py-2 px-3  hover:bg-gradient-to-tr hover:from-gradientyfrom hover:to-yellow rounded-lg";

  const [ScrollDirection, setScrollDirection] = useState("");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    function updateScrollDirection() {
      const scrollY = window.scrollY;
      const direction = scrollY < lastScrollY ? "down" : "up";
      if (
        direction != ScrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    }
    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [ScrollDirection]);

  return (
    <header
      className={`px-6 py-4 flex justify-between items-center font-jost sticky transition-all duration-300 ${
        ScrollDirection === "down" ? "top-0 bg-white shadow-md" : "-top-24"
      } `}
    >
      <h1 className="text-2xl text-text font-medium">My Portfolio</h1>
      <nav className="flex gap-2">
        <a className={`${classNameA}`} href="#">
          Home
        </a>
        <a className={`${classNameA}`} href="#skills">
          Skills
        </a>
        <a className={`${classNameA}`} href="#profExp">
          Prof. Exp
        </a>
        <a className={`${classNameA}`} href="#education">
          Education
        </a>
        <a className={`${classNameA}`} href="#contact">
          Contact
        </a>
        <a className={`${classNameA}`} href="#aboutsite">
          About Site
        </a>
      </nav>
      <section
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://drive.google.com/file/d/1UulqpNT9TGkM9BMSWW0_GIYpm011VD4u/view?usp=drive_link",
            "_blank"
          );
        }}
        className="flex gap-3 rounded-md bg-gradient-to-tr from-gradientyfrom to-yellow cursor-pointer px-4 py-2 items-center hover:border-solid"
      >
        <h1 className="text-black text-sm font-medium">Download Resume</h1>
        {/* <section className="p-2 w-13  bg-bgs rounded-full">
          <img src={icons.download} width="8px" />
        </section> */}
      </section>
    </header>
  );
};

export default Navigation;
