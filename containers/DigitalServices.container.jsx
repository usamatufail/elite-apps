import { Animate, Zoom } from "~/components";

const data = [
  {
    icon: "/svg/tick.icon.svg",
    text: "A comprehensive strategic plan to create, promote, and expand your brand digitally.",
  },
  {
    icon: "/svg/tick.icon.svg",
    text: "Bringing startup websites to scale & helping them thrive.",
  },
  {
    icon: "/svg/tick.icon.svg",
    text: "List ItemRefine user experience and user interface for your site through top-notch UX/UI.",
  },
  {
    icon: "/svg/tick.icon.svg",
    text: "A tailor-made e-commerce web development solution for your all customer segments",
  },
];

export const DigitalServices = () => {
  return (
    <section className="bg-[#fff] md:min-h-[600px] py-[30px] md:py-[50px]">
      <div className="grid md:grid-cols-2 justify-center items-center gap-[50px] px-[20px] md:px-[120px]">
        <div className="flex flex-col gap-[20px] font-body">
          <Animate>
            <h1 className="text-[#031221] text-[40px] font-[500] capitalize font-body">
              Digital Services
            </h1>
          </Animate>
          <Animate>
            <p className="text-[#1d78f2] text-[18px] font-[500] font-body">
              Transmitting Your Business Through Premium Digital Services
            </p>
          </Animate>
          <Animate>
            <p className="text-[#545454] font-[400] font-body text-[16px]">
              Leveraging the latest technologies to deliver excellent web
              development and marketing solutions to help you achieve your
              business goals. We work with you to build, enhance, expand, and
              maintain the digital avatar of your business.
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
        <Zoom>
          <img src="/digital.png" alt="Digital Services" />
        </Zoom>
      </div>
    </section>
  );
};
