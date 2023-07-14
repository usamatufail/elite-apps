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
    <section className="min-h-[400px] bg-[url('/tech-bg.png')] bg-cover bg-no-repeat py-[20px] px-[20px] md:px-[100px] flex flex-col gap-[30px] justify-center items-center">
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
      <div className="grid grid-cols-2 md:flex gap-[10px] md:gap-[20px]">
        {data.map((el, idx) => {
          return (
            <div key={idx}>
              <Zoom>
                <Card icon={el} />
              </Zoom>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Card = ({ icon }) => {
  return (
    <div className="flex md:w-[230px] h-[150px] p-[10px] justify-center items-center rounded-[10px] bg-[#fff] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.20)] px-[50px]">
      <img src={icon} alt="icon" className="w-[80px]" />
    </div>
  );
};
