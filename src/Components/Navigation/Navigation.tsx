import { useEffect, useState } from "react";
import { useCycle } from "framer-motion";
import useFetch from "../../Hooks/useFetch";

const Navigation = () => {
  const [mobileOpen, setmobileOpen] = useCycle(false, true);
  const { fetchedData } = useFetch();

  const toggleMenuBar = () => {
    setmobileOpen();
  };

  const classNameA =
    "mobile:w-fit text-base text-text font-medium py-2 px-3 hover:bg-gradient-to-tr hover:from-gradientyfrom hover:to-yellow rounded-lg mobile:text-lg";

  const mobile = `mobile:flex-col mobile:pt-16 mobile:gap-5 mobile:fixed transition-all duration-200 mobile:bg-yellow mobile:w-full mobile:h-screen mobile:top-0 mobile:ml-[-25px] mobile:pl-10 ${
    !mobileOpen ? "mobile:opacity-0 mobile:hidden" : "mobile:opacity-100"
  }`;
  const [ScrollDirection, setScrollDirection] = useState("");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    function updateScrollDirection() {
      const scrollY = window.scrollY;
      const direction = scrollY < lastScrollY ? "down" : "up";
      if (
        direction !== ScrollDirection &&
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
      <nav className={`flex gap-2 ${mobile}`}>
        <a onClick={toggleMenuBar} className={`${classNameA}`} href="#home">
          Home
        </a>
        <a onClick={toggleMenuBar} className={`${classNameA}`} href="#skills">
          Skills
        </a>
        <a onClick={toggleMenuBar} className={`${classNameA}`} href="#profExp">
          Prof. Exp
        </a>
        <a
          onClick={toggleMenuBar}
          className={`${classNameA}`}
          href="#education"
        >
          Education
        </a>
        <a onClick={toggleMenuBar} className={`${classNameA}`} href="#links">
          Links
        </a>
      </nav>
      <section
        onClick={(e) => {
          e.preventDefault();
          window.open(fetchedData.google_drive_link, "_blank");
        }}
        className="flex gap-3 rounded-md bg-gradient-to-tr from-gradientyfrom to-yellow cursor-pointer px-4 py-2 items-center hover:border-solid"
      >
        <h1 className="text-black text-sm font-medium">Download Resume</h1>
      </section>
      <div
        onClick={() => setmobileOpen()}
        className={`hidden mobile:block mobile:z-10 transition-all duration-200 ${
          mobileOpen && "mobile:fixed mobile:right-0 mobile:pr-6"
        }`}
      >
        {!mobileOpen ? (
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nO3WwQkAIAwDwIzezesWKuEO8jf4aBIAHpmSZEuS1w9QJK0/MiUBAPLBRTbj0zoatySpKTIlAQDywUU249M6GrckqSkyJQEg1x3OPOvHECpbTAAAAABJRU5ErkJggg=="
            width={25}
            alt="Menu Open"
          />
        ) : (
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABN0lEQVR4nO3ZTWrDMBCG4fcoXfQkLZTuK83CSc6eRc8QAk0hJWBDMTFxJM1oLPRBdsYzj34S2YGenp6e1vIKhIr1w9hDVl6AI/ALHLCPABfgOwczIa7jxxojI2Kqn4yJY/PXGWaHfnYLtW89FRkVi5kRrZqWGNGuZYExGzDNQuZLWBQK1tiHxQtXQ5RsoDqiRCNuEDkNuUOkNOYW8UyD7hFrGt0M4tFhr9bhMyv3Rn8zM7EWsylEMxBpYWkNLWx2aeHrNy40uv93jXtMXIFwj4lPINxiYgLCHSZkINxgQgFEdUxYKJzzm2COCQoIc0xQRJhhAvBjdMQQLczXAuJ2ptKKlMbcW06XnFf7BZ40h5SbfQBnw5mYZz4zJ+A99WYTxhoxx2QhpnxW/jN0AN4q1u/p6emhfP4AxlR3VfJGRpkAAAAASUVORK5CYII="
            width={25}
            alt="Menu Close"
          />
        )}
      </div>
    </header>
  );
};

export default Navigation;
