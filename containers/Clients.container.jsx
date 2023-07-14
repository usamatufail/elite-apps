import { Animate, Zoom } from "~/components";

const data = [
  "/ap.png",
  "/nike.png",
  "/tesla.png",
  "/audi.png",
  "/bmw.png",
  //   "/node.png",
];

export const Clients = () => {
  return (
    <section className="min-h-[400px] bg-[url('/Client-bg.png')] bg-cover bg-no-repeat py-[20px] px-[100px] flex flex-col gap-[30px] justify-center items-center">
      <div className="flex flex-col gap-[12px] justify-center items-center">
        <Animate>
          <h1 className="text-[#fff] font-body text-[40px] font-[700] capitalize text-center">
            Our Clients
          </h1>
        </Animate>
        <Zoom>
          <img src="/line.png" alt="" />
        </Zoom>
      </div>
      <div className="flex gap-[20px]">
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
    <div className="flex w-[230px] h-[150px] p-[10px] justify-center items-center rounded-[10px] bg-[#fff] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.20)]">
      <img src={icon} alt="icon" className="w-[100px]" />
    </div>
  );
};