const TopBar = () => {
  return (
    <div className="h-[2.8rem] bg-gradient-to-tr from-gradientyfrom to-yellow border-b-2 border-black flex items-center gap-7 justify-end pr-10 mobile:justify-center  mobile:pr-0">
      <a
        href="tel:+918838143550"
        className="font-medium font-poppins text-[12px]"
      >
        ☎ +91 8838143550
      </a>
      <a
        href="mailto:karthi.98p@gmail.com"
        className="font-medium font-poppins text-[12px]"
      >
        ✉ karthi.98p@gmail.com
      </a>
    </div>
  );
};

export default TopBar;
