import { Zoom } from "~/components";

const data = [
  {
    img: "/svg/code.icon.svg",
    heading: "Web App Development",
    text: "We develop web apps and solutions that are scalable, well-designed, secure, and customized. Our latest technology stacks and frameworks help you build cost-friendly yet effective web solutions.",
  },
  {
    img: "/svg/mobile.icon.svg",
    heading: "Mobile App Development",
    text: "With extensive experience in developing customized iOS & Android applications, we build appealing interfaces for all devices that can effectively serve your unique business needs.",
  },
  {
    img: "/svg/blockchain.icon.svg",
    heading: "Web App Development",
    text: "We have a team of expert blockchain developers who have years of experience in building applications for a wide range of blockchain platforms.",
  },
];

export const Application = () => {
  return (
    <section className="bg-[#fff] px-[20px] md:px-[100px] py-[50px] min-h-[300px]">
      <div className="grid md:grid-cols-3 gap-[22px]">
        {data.map((el) => {
          return (
            <div key={el.heading} className="">
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
    <section className="bg-[#fff] p-[30px] border border-[#1D78F2] border-solid rounded-[20px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col gap-[15px]">
        <img src={img} alt={heading} className="w-[52px] h-[50px]" />
        <h1 className="text-[#020202] font-body text-[22px] font-[500] uppercase">
          {heading}
        </h1>
        <p className="text-[#545454] font-body text-[16px] font-[400] min-h-[100px]">
          {text}
        </p>
      </div>
    </section>
  );
};
