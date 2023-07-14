import { Animate, Button, Zoom } from "~/components";

export const Message = () => {
  return (
    <section className=" bg-[url('/message-bg.png')] bg-cover bg-no-repeat py-[80px] px-[20px]">
      <div className="flex justify-between items-center gap-[80px] max-w-[1200px] m-auto">
        <div className="flex flex-col gap-[30px] justify-center">
          <Animate>
            <h2 className="text-[#fff] font-body text-[32px] font-[600] capitalize">
              Have A New Project In Mind?
              <br /> Send A Message
            </h2>
          </Animate>
          <Animate>
            <p className="text-[#fff] font-body text-[16px] font-[500]">
              Connect with us to work with a digital marketing agency
            </p>
          </Animate>
          <Zoom>
            <Button />
          </Zoom>
        </div>
        <Zoom>
          <img
            src="/mobile.png"
            alt="mobile"
            className="hidden md:block md:w-[450px]"
          />
        </Zoom>
      </div>
    </section>
  );
};
