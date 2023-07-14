import { Element } from "react-scroll";
import { Animate, Button, Zoom } from "~/components";

const data = [
  {
    img: "/team.png",
    heading: "100+",
    text: "Team Members",
  },
  {
    img: "/success.png",
    heading: "100%",
    text: "Success Rate",
  },
  {
    img: "/complete.png",
    heading: "1,650+",
    text: "Delivered Projects",
  },
  {
    img: "/experience.png",
    heading: "22+",
    text: "Years of Experience",
  },
];

export const Journey = () => {
  return (
    <Element>
      <section
        className="md:min-h-[400px] bg-[#031221] py-[40px] px-[8px] md:px-[80px] 2xl:px-[100px] flex flex-col gap-[40px] md:gap-[60px] justify-center items-center"
        id="journey"
      >
        <div className="flex flex-col gap-[12px] justify-center items-center">
          <Animate>
            <h1 className="text-[#fff] font-body text-[20px] md:text-[40px] font-[500] md:font-[700] capitalize text-center">
              WE&apos;RE PROUD OF OUR JOURNEY
            </h1>
          </Animate>
          <Zoom>
            <img src="/line.png" alt="" />
          </Zoom>
        </div>
        <div className="grid grid-cols-4 gap-[6px] md:flex md:gap-[50px] pb-[20px]">
          {data.map((el, idx) => {
            return (
              <div key={idx}>
                {/* <Zoom> */}
                <Card img={el.img} heading={el.heading} text={el.text} />
                {/* </Zoom> */}
              </div>
            );
          })}
        </div>
        <Zoom>
          <Button navy />
        </Zoom>
      </section>
    </Element>
  );
};

const Card = ({ img, heading, text }) => {
  return (
    <div className="flex gap-[5px] md:gap-[2px] xl:min-w-[250px] xl:h-[80px]">
      <img
        src={img}
        alt={text}
        className="w-[35px] h-[35px] md:w-[unset] object-cover"
      />

      <div className="flex flex-col gap-[2px] md:gap-[4px]">
        <Animate>
          <h1 className="text-[#fff] font-body text-[14px] md:text-[30px] font-[500]">
            {heading}
          </h1>
        </Animate>
        <Animate>
          <p className="text-[#fff] font-body text-[10px] md:text-[16px] font-[400]">
            {text}
          </p>
        </Animate>
      </div>
    </div>
  );
};
