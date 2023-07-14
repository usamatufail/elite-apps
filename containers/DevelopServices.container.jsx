import { Animate, Zoom } from "~/components";

const data = [
  {
    icon: "/svg/tick.icon.svg",
    text: "An industry-focused IT solution for your business to make it more efficient.",
  },
  {
    icon: "/svg/tick.icon.svg",
    text: "We provide wide range of innovative tech solutions for building all kinds of applications.",
  },
  {
    icon: "/svg/tick.icon.svg",
    text: "Get top-notch software testing service to enhance the functionalities of your new product.",
  },
];

export const DevelopServices = () => {
  return (
    <section className="bg-[#fff] min-h-[600px] py-[50px] px-[20px]">
      <div className="grid md:grid-cols-2 justify-center items-center gap-[50px] md:px-[120px]">
        <Zoom>
          <img src="/develop.png" alt="Development Services" />
        </Zoom>
        <div className="flex flex-col gap-[20px] font-body md:pr-[100px]">
          <Animate>
            <h1 className="text-[#031221] text-[40px] font-[500] capitalize font-body">
              Development Services
            </h1>
          </Animate>
          <Animate>
            <p className="text-[#1d78f2] text-[18px] font-[500] font-body">
              We Just Don’t Build Apps & Software, We Build Ideas For Your
              Business
            </p>
          </Animate>
          <Animate>
            <p className="text-[#545454] font-[400] font-body text-[16px]">
              We are a dynamic IT development company in the USA with an
              experienced design & development team that offers businesses smart
              tech solutions. We are familiar with the latest technologies and
              offer our clients tech ideas to transform their businesses.
            </p>
          </Animate>
          <Animate>
            <div className="flex flex-col gap-[15px]">
              {data.map((el) => {
                return (
                  <div className="flex gap-[10px] items-start" key={el.text}>
                    <img className="pt-[3px]" src={el.icon} alt={el.text} />
                    <p className="text-[#545454] font-[400] font-body text-[16px]">
                      {el.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
