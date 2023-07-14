import { Animate, Zoom } from "~/components";

export const OurProcess = () => {
  return (
    <section className="bg-[#fff] flex flex-col gap-[12px] md:gap-[0px] justify-center items-center md:min-h-[1100px] py-[50px]">
      <div className="flex flex-col gap-[12px] justify-center items-center">
        <Animate>
          <h1 className="text-[#031221] font-body text-[30px] md:text-[40px] font-[500] capitalize text-center">
            Our Process
          </h1>
        </Animate>
        <Zoom>
          <img src="/line.png" alt="" />
        </Zoom>
      </div>
      <Zoom>
        <img src="/info.png" alt="Project timline ingo" />
      </Zoom>
    </section>
  );
};
