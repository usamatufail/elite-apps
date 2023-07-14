import { Animate, Button, Zoom } from "~/components";
import Marquee from "react-fast-marquee";

const data = [
  {
    img: "/svg/web.icon.svg",
    text: "Custom Coded Websites",
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
    <section className=" bg-[url('/banner-bg-mobile.png')] md:bg-[url('/banner-bg.png')] bg-cover bg-no-repeat relative z-0 -mt-[100px] flex flex-col gap-[30px] justify-center items-center pb-[40px] px-[20px]">
      <Animate>
        <h1 className="text-center font-body text-[28px] md:text-[64px] font-[700] drop-shadow-[5px_5px_10px_0px_rgba(0,0,0,0.15)] leading-[-1.28px] text-[#fff] mt-[150px] px-[10px]">
          We Build Elite Level Websites and Apps
        </h1>
      </Animate>

      <Animate>
        <img
          src="/trust1.png"
          alt="trust"
          className="max-w-[300px] md:max-w-[400px]"
        />
      </Animate>
      <div className="md:px-[60px] overflow-hidden max-w-[1050px] m-auto">
        <Marquee pauseOnHover gradient={false} speed={40}>
          <div className="flex gap-[10px] pl-[10px]">
            <img src="/1.png" alt="" className="w-[100px] md:w-[210px]" />
            <img src="/2.png" alt="" className="w-[100px] md:w-[210px]" />
            <img src="/3.png" alt="" className="w-[100px] md:w-[210px]" />
            <img src="/4.png" alt="" className="w-[100px] md:w-[210px]" />
            <img src="/5.png" alt="" className="w-[100px] md:w-[210px]" />
          </div>
        </Marquee>
      </div>
      <Zoom>
        <Button />
      </Zoom>
      <div className="bg-[#fff] md:px-[150px] px-[40px] py-[30px] rounded-[20px] border-solid border border-[rgba(255,255,255,0.15)] shadow-[0px_20px_30px_0px_rgba(0,0,0,0.20)] mt-[20px]">
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
