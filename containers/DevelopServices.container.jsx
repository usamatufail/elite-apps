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
    <section className="bg-[#fff] min-h-[600px] py-[50px]">
      <div className="grid grid-cols-2 justify-center items-center gap-[50px] px-[120px]">
        <img src="/develop.png" alt="Development Services" />
        <div className="flex flex-col gap-[20px] font-body pr-[100px]">
          <h1 className="text-[#031221] text-[40px] font-[500] capitalize font-body">
            Development Services
          </h1>
          <p className="text-[#1d78f2] text-[18px] font-[500] font-body">
            We Just Don’t Build Apps & Software, We Build Ideas For Your
            Business
          </p>
          <p className="text-[#545454] font-[400] font-body text-[16px]">
            We are a dynamic IT development company in the USA with an
            experienced design & development team that offers businesses smart
            tech solutions. We are familiar with the latest technologies and
            offer our clients tech ideas to transform their businesses.
          </p>
          <div className="flex flex-col gap-[15px]">
            {data.map((el) => {
              return (
                <div className="flex gap-[10px] items-center" key={el.text}>
                  <img className="" src={el.icon} alt={el.text} />
                  <p className="text-[#545454] font-[400] font-body text-[16px]">
                    {el.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
