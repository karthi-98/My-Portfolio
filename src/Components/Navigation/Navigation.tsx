import { useEffect, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const Navigation = () => {
  const [mobileOpen, setmobileOpen] = useCycle(false, true);

  const classNameA =
    "text-base text-text font-medium py-2 px-3  hover:bg-gradient-to-tr hover:from-gradientyfrom hover:to-yellow rounded-lg mobile:text-lg";

  const mobile =
    "mobile:flex mobile:flex-col mobile:absolute mobile:-top-[2.6rem] mobile:left-0 mobile:pl-5 mobile:pt-5 mobile:gap-5";
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
      <h1 className="text-xl text-text font-medium mobile:text-lg">
        My Portfolio
      </h1>
      {mobileOpen && (
        <nav className={`flex gap-2 ${mobile}`}>
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
        </nav>
      )}
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
      </section>
      <div>
        <button
          className="hidden mobile:block mobile:z-10"
          onClick={() => setmobileOpen()}
        >
          {mobileOpen ? (
            <h1 className="z-10">Close</h1>
          ) : (
            <h1 className="z-10">Open</h1>
          )}
        </button>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              transition={{ stiffness: 1 }}
              variants={{ open: { x: "0%" }, closed: { x: "-100%" } }}
              animate="open"
              initial="closed"
              exit="closed"
              className=" fixed -z-10 -top-10 left-0 w-screen h-screen bg-yellow"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;
