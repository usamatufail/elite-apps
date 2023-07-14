import Marquee from "react-fast-marquee";
import { Element } from "react-scroll";
import { Animate, Zoom } from "~/components";

const data = [
  "/react.png",
  "/redux.png",
  "/python.png",
  "/vue.png",
  "/firebase.png",
  "/node.png",
];

export const Technologies = () => {
  return (
    <Element className="element">
      <section
        className="md:min-h-[300px] bg-[url('/tech-bg.png')] bg-cover bg-no-repeat py-[20px] px-[20px] md:px-[100px] flex flex-col gap-[30px] justify-center items-center"
        id="technologies"
      >
        <div className="flex flex-col gap-[12px] justify-center items-center">
          <Animate>
            <h1 className="text-[#fff] font-body text-[30px] md:text-[40px] font-[700] capitalize text-center">
              Technologies
            </h1>
          </Animate>
          <Zoom>
            <img src="/line.png" alt="" />
          </Zoom>
        </div>
        <div className="md:px-[80px] overflow-hidden max-w-[1300px] m-auto">
          <Marquee pauseOnHover gradient={false} speed={40}>
            <div className="flex gap-[10px] pl-[10px]">
              <img
                src="/react1.png"
                alt=""
                className="w-[120px] md:w-[210px]"
              />
              <img
                src="/redux1.png"
                alt=""
                className="w-[120px] md:w-[210px]"
              />
              <img
                src="/python1.png"
                alt=""
                className="w-[120px] md:w-[210px]"
              />
              <img src="/vue1.png" alt="" className="w-[120px] md:w-[210px]" />
              <img src="/node1.png" alt="" className="w-[120px] md:w-[210px]" />
              <img
                src="/firebase1.png"
                alt=""
                className="w-[120px] md:w-[210px]"
              />
            </div>
          </Marquee>
        </div>
        {/* <div className="grid grid-cols-2 md:flex gap-[10px] md:gap-[20px]">
          {data.map((el, idx) => {
            return (
              <div key={idx}>
                <Zoom>
                  <Card icon={el} />
                </Zoom>
              </div>
            );
          })}
        </div> */}
      </section>
    </Element>
  );
};

const Card = ({ icon }) => {
  return (
    <div className="flex md:w-[230px] h-[150px] p-[10px] justify-center items-center rounded-[10px] bg-[#fff] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.20)] px-[50px]">
      <img src={icon} alt="icon" className="w-[80px]" />
    </div>
  );
};
