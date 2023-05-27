import { icons, images } from "../../Constants/constants";
import Button from "../../StyledComps/Button";

const Home = () => {
  return (
    <main id="#" className="flex gap-8 h-[75vh] py-[7vh] justify-center">
      <aside className="w-[75vw] rounded-[40px] flex gap-32 items-center justify-center">
        <section className="font-dancing text-black px-16 py-16  w-[35vw] flex flex-col h-full justify-between items-center gap-8">
          <p className="text-3xl">
            I'm <span className="font-extrabold text-4xl">Karthick</span>
          </p>
          <p className="font-poppins  text-center leading-9 [word-spacing:3px]">
            As a software developer, I am a versatile problem solver who crafts
            elegant and efficient code, transforming complex ideas into
            functional and user-friendly applications.
          </p>
          <section className="flex gap-5 items-center">
            <Button
              onClick={() =>
                (window.location.href = "mailto:karthi.98p@gmail.com")
              }
            >
              Contact Me
            </Button>
            <img
              onClick={() =>
                window.open("https://github.com/karthi-98", "_blank")
              }
              src={icons.github}
              className="cursor-pointer transition duration-200 hover:scale-110 w-7 h-7"
            />
            <img
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/karthick-p-878063130/",
                  "_blank"
                )
              }
              src={icons.linkedln}
              width="25px"
              height="20px"
              className="cursor-pointer transition duration-200 hover:scale-110  w-7 h-7"
            />
          </section>
        </section>
        <img src={images.myimg} className="h-4/5 rounded-lg shadow-2xl" />
      </aside>
    </main>
  );
};

export default Home;

//bg-gradient-to-b from-[#7AE2D7] to-[#7AE2D7]
