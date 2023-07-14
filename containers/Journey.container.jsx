import { Animate, Zoom } from "~/components";

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
    heading: "200+",
    text: "Delivered Projects",
  },
  {
    img: "/experience.png",
    heading: "10+",
    text: "Years of Experience",
  },
];

export const Journey = () => {
  return (
    <section className="min-h-[400px] bg-[#031221] py-[20px] px-[20px] md:px-[100px] flex flex-col gap-[60px] justify-center items-center">
      <div className="flex flex-col gap-[12px] justify-center items-center">
        <Animate>
          <h1 className="text-[#fff] font-body text-[28px] md:text-[40px] font-[700] capitalize text-center">
            WE&apos;RE PROUD OF OUR JOURNEY
          </h1>
        </Animate>
        <Zoom>
          <img src="/line.png" alt="" />
        </Zoom>
      </div>
      <div className="grid gap-[30px] md:flex md:gap-[50px]">
        {data.map((el, idx) => {
          return (
            <div key={idx}>
              <Zoom>
                <Card img={el.img} heading={el.heading} text={el.text} />
              </Zoom>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Card = ({ img, heading, text }) => {
  return (
    <div className="flex gap-[10px] md:gap-[2px] md:w-[250px] md:h-[80px]">
      <img src={img} alt={text} className="w-[100px] md:w-[unset]" />
      <div className="flex flex-col gap-[5px]">
        <h1 className="text-[#fff] font-body text-[30px] font-[500]">
          {heading}
        </h1>
        <p className="text-[#fff] font-body text-[16px] font-[400]">{text}</p>
      </div>
    </div>
  );
};
