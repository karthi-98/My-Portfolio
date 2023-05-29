import { icons, images } from "../../Constants/constants";
import Button from "../../StyledComps/Button";

const Home = () => {
  return (
    <main id="home" className="flex h-fit pt-[3rem] flex-col items-center">
      <aside className="flex items-center justify-center mobile:flex-col-reverse">
        <section className="font-dancing text-black p-16 flex flex-col h-full items-center gap-8 mobile:p-[3rem]">
          <p className="text-3xl">
            I'm <span className="font-extrabold text-4xl">Karthick</span>
          </p>
          <p className="font-jost text-center leading-9 [word-spacing:2.5px] w-[30rem] mobile:w-fit text-[1.1rem]">
            As a software developer, I am a versatile problem solver who crafts
            elegant and efficient code, transforming complex ideas into
            functional and user-friendly applications.
          </p>
          <section className="flex gap-5 items-center ">
            <Button
              onClick={() =>
                (window.location.href = "mailto:karthi.98p@gmail.com")
              }
            >
              Contact Me
            </Button>
            <img
              alt="Github"
              onClick={() =>
                window.open("https://github.com/karthi-98", "_blank")
              }
              src={icons.github}
              className="cursor-pointer transition duration-200 hover:scale-110 w-7 h-7"
            />
            <img
              alt="Linkedln"
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
        <div className="flex justify-center h-[20rem] mobile:h-[12rem] mobile:w-full">
          <img
            alt="karthick"
            src={images.myimg}
            className="rounded-lg shadow-2xl bg-black/40 mobile:h-[12rem] mobile:w-[10rem] object-cover"
          />
        </div>
      </aside>
      <section className="flex items-center gap-4 bg-black/5 w-full justify-center py-10 mt-8 mobile:flex-col mobile:gap-7">
        <img
          alt="AWS Cloud Practitioner Certificate"
          src={images.aws}
          className="h-[8rem]"
        />
        <aside className="flex flex-col gap-3 font-jost ">
          <h1>
            Validation Number:
            <span className="font-medium"> J4C79FMKTBR11C3Y</span>
          </h1>
          <p>
            Issue date: <span className="font-medium">March 3, 2023</span>
          </p>
          <p>
            Expiry date : <span className="font-medium">March 3, 2026</span>
          </p>
        </aside>
      </section>
    </main>
  );
};

export default Home;
