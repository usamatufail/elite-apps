import { Animate, Button, Zoom } from "~/components";

const data = [
  {
    img: "/svg/web.icon.svg",
    text: "Creatively Crafted Websites",
  },
  {
    img: "/svg/app.icon.svg",
    text: "Engaging Mobile Apps",
  },
  {
    img: "/svg/user.icon.svg",
    text: "A User-Centric Approach",
  },
  {
    img: "/svg/ux.icon.svg",
    text: "Impeccable User Experience",
  },
];

export const Banner = () => {
  return (
    <section className="min-h-[950px] bg-[url('/banner-bg.png')] bg-cover bg-no-repeat relative z-0 -mt-[100px] flex flex-col gap-[20px] justify-center items-center pb-[40px] px-[20px]">
      <Animate>
        <p className="font-body text-[20px] font-[400] uppercase text-center text-[#fff] mt-[150px]">
          WELCOME TO <strong>ELITE APPS</strong>
          <br />
          Your one-stop solution for all your APP DEVELOPMENT needs
        </p>
      </Animate>
      <Animate>
        <h1 className="text-center font-body text-[28px] md:text-[64px] font-[700] drop-shadow-[5px_5px_10px_0px_rgba(0,0,0,0.15)] leading-[-1.28px] text-[#fff]">
          We Transform Your Ideas into reality with <br />
          Cutting-Edge Technologies
        </h1>
      </Animate>
      <Animate>
        <p className="font-body text-[20px] font-[400] text-center text-[#fff] md:px-[100px]">
          Elite Apps is a pioneering app development company, renowned for its
          innovative and transformative digital solutions. Founded on the
          principle that every idea holds the potential to reshape the digital
          landscape, Elite Apps has steadfastly pushed the boundaries of
          creativity and technological advancement.
        </p>
      </Animate>
      <Zoom>
        <Button />
      </Zoom>
      <div className="bg-[#fff] md:px-[150px] px-[40px] py-[30px] rounded-[20px] border-solid border border-[rgba(255,255,255,0.15)] shadow-[0px_20px_30px_0px_rgba(0,0,0,0.20)]">
        <Zoom>
          <div className="flex flex-col md:flex-row justify-center items-center gap-[40px]">
            {data.map((el) => {
              return (
                <div
                  key={el.img}
                  className="flex flex-col gap-[15px] justify-center items-center"
                >
                  <img
                    src={el.img}
                    alt={el.text}
                    className="w-[50px] h-[50px]"
                  />
                  <p className="text-[16px] font-body font-[600] capitalize text-center text-[#1D78F2]">
                    {el.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Zoom>
      </div>
    </section>
  );
};
