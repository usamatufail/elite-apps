import { Element } from "react-scroll";
import { Animate, Zoom } from "~/components";

const data = [
  {
    icon: "/svg/health.icon.svg",
    text: "Healthcare",
  },
  {
    icon: "/svg/fintch.icon.svg",
    text: "Fintech",
  },
  {
    icon: "/svg/cart.icon.svg",
    text: "Ecommerce & Retail",
  },
  {
    icon: "/svg/legal.icon.svg",
    text: "Legal",
  },
  {
    icon: "/svg/edu.icon.svg",
    text: "Education",
  },

  {
    icon: "/svg/tech.icon.svg",
    text: "Hi-Tech & Innovations",
  },
  {
    icon: "/svg/logistic.icon.svg",
    text: "Logistics & Transportation",
  },
  {
    icon: "/svg/media.icon.svg",
    text: "Media & Entertainment",
  },
  {
    icon: "/svg/enter.icon.svg",
    text: "Enterprise & Manufacturing",
  },
  {
    icon: "/svg/govt.icon.svg",
    text: "Government",
  },
  {
    icon: "/svg/car.icon.svg",
    text: "Automotive",
  },
  {
    icon: "/svg/construct.icon.svg",
    text: "Construction & real estate",
  },
  {
    icon: "/svg/hr.icon.svg",
    text: "HR & recruiting",
  },
  {
    icon: "/svg/tour.icon.svg",
    text: "Tourism & HoReCa",
  },
  {
    icon: "/svg/oil.icon.svg",
    text: "Oil & Gas",
  },
];

export const Industries = () => {
  return (
    <Element>
      <section
        className="min-h-[500px] bg-[#E3E7EF] py-[50px] px-[12px] md:px-[60px] 2xl:px-[120px] flex flex-col gap-[40px] justify-center items-center"
        id="industories"
      >
        <div className="flex flex-col gap-[12px] justify-center items-center">
          <Animate>
            <h1 className="text-[#031221] font-body text-[30px] md:text-[40px] font-[700] capitalize text-center">
              Industries We Serve
            </h1>
          </Animate>
          <Zoom>
            <img src="/line.png" alt="" />
          </Zoom>
        </div>
        <div className="grid grid-cols-3 gap-[8px] xl:grid-cols-5 md:gap-[20px]">
          {data.map((el, idx) => {
            return (
              <div key={idx}>
                <Zoom>
                  <Card icon={el.icon} text={el.text} />
                </Zoom>
              </div>
            );
          })}
        </div>
      </section>
    </Element>
  );
};

const Card = ({ icon, text }) => {
  return (
    <div className="flex flex-col gap-[8px] md:w-[230px] h-[120px] px-[20px] p-[10px] justify-center items-center rounded-[10px] bg-[#fff] shadow-sm">
      <img src={icon} alt={text} className="w-[40px]" />
      <p className="text-[#000] text-center font-body text-[12px] md:text-[16px] md:font-[500] capitalize h-[50px] md:h-[unset]">
        {text}
      </p>
    </div>
  );
};
