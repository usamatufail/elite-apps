import { Zoom } from "~/components";
import { Modal } from "antd";
import { useState } from "react";
import { Button as CustomButton } from "~/components";

const data = [
  {
    img: "/svg/code.icon.svg",
    heading: "Web App Development",
    text: "We develop web apps and solutions that are scalable, well-designed, secure, and customized. Our latest technology stacks and frameworks help you build cost-friendly yet effective web solutions.",
    modalText:
      " Elite Apps specializes in developing web apps and solutions that are tailored to your needs. With a focus on scalability, our team ensures that your web solutions can grow with your business. We prioritize elegant design, delivering visually appealing interfaces that enhance user experience. Security is a top priority, and our solutions are built with robust measures to safeguard your data. Leveraging the latest technology stacks and frameworks, we create cost-effective solutions that don't compromise on effectiveness. Whether you require a custom-built application or an optimized website, Elite Apps offers comprehensive services that combine innovation, reliability, and affordability.",
  },
  {
    img: "/svg/mobile.icon.svg",
    heading: "Mobile App Development",
    text: "With extensive experience in developing customized iOS & Android applications, we build appealing interfaces for all devices that can effectively serve your unique business needs.",
    modalText:
      "At Elite Apps, we bring our extensive expertise to the table when it comes to developing customized iOS and Android applications. Our team is skilled in creating visually appealing interfaces that are optimized for all devices, ensuring a seamless user experience across platforms. We understand that every business has unique requirements, and our solutions are tailored to effectively serve those specific needs. With a focus on user-centric design, we create intuitive and engaging mobile applications that resonate with your target audience. Trust us to deliver high-quality, personalized mobile solutions that elevate your business and help you stand out in the competitive app market.",
  },
  {
    img: "/svg/blockchain.icon.svg",
    heading: "Blockchain Development",
    text: "We have a team of expert blockchain developers who have years of experience in building applications for a wide range of blockchain platforms With a proven track record.",
    modalText:
      "Elite Apps takes pride in its team of expert blockchain developers who possess extensive experience in building applications across various blockchain platforms. With their deep understanding of blockchain technology, our developers can create robust and secure applications that leverage the potential of decentralized systems. Whether you require a blockchain-based solution for finance, supply chain, or any other industry, our team can deliver tailored applications that meet your specific requirements. We stay up-to-date with the latest advancements in blockchain to ensure that our solutions are at the forefront of innovation. Trust Elite Apps to provide you with cutting-edge blockchain applications that drive efficiency and transparency in your business processes.",
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
                <Card
                  img={el.img}
                  heading={el.heading}
                  text={el.text}
                  modalText={el.modalText}
                />
              </Zoom>
            </div>
          );
        })}
      </div>
      {/* <div className="flex justify-center mt-[20px] md:mt-[40px]">
        <Zoom>
          <CustomButton navy />
        </Zoom>
      </div> */}
    </section>
  );
};

const Card = ({ img, heading, text, modalText }) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  return (
    <section className="bg-[#fff] p-[30px] border border-[#1D78F2] border-solid rounded-[20px] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col gap-[15px]">
        <img src={img} alt={heading} className="w-[52px] h-[50px]" />
        <h1 className="text-[#1AC2FA] font-body text-[22px] font-[500] uppercase">
          {heading}
        </h1>
        <p className="text-[#545454] font-body text-[16px] font-[400] h-[150px] md:h-[230px]  2xl:h-[100px]">
          {text}
        </p>
        <CustomModal
          open={open}
          setOpen={setOpen}
          modalText={modalText}
          heading={heading}
          icon={img}
        />
        <Button onClick={showModal} />
      </div>
    </section>
  );
};

const Button = ({ text = "Discover", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[1rem] text-[1.6rem] font-[400] font-body"
    >
      <span>{text}</span>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.9375 1.59375L6.625 0.90625C6.9375 0.625 7.40625 0.625 7.6875 0.90625L13.7812 6.96875C14.0625 7.28125 14.0625 7.75 13.7812 8.03125L7.6875 14.125C7.40625 14.4062 6.9375 14.4062 6.625 14.125L5.9375 13.4375C5.65625 13.125 5.65625 12.6562 5.9375 12.3438L9.71875 8.75H0.75C0.3125 8.75 0 8.4375 0 8V7C0 6.59375 0.3125 6.25 0.75 6.25H9.71875L5.9375 2.6875C5.65625 2.375 5.625 1.90625 5.9375 1.59375Z"
          fill="black"
        />
      </svg>
    </button>
  );
};

export const CustomModal = ({ open, setOpen, modalText, heading, icon }) => {
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title=""
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered
        width="95vw"
        bodyStyle={{
          padding: "3.5rem",
          paddingBottom: "3.5rem",

          // background: "#9f9f9f",
        }}
        style={{ padding: "20px" }}
      >
        <div className="flex items-center justify-center gap-[2.4rem]">
          <img src={icon} alt="elite-branding" />
          <h2 className="font-[700] text-black text-[2rem]  md:text-[3.6rem] uppercase">
            {heading}
          </h2>
        </div>
        <p className="text-[1.8rem] mt-[3rem] text-black text-center">
          {modalText}
        </p>
        {/* <Link href="/contact" className="flex justify-center">
          <button
            className={`bg-white text-black text-[1.6rem] font-[500] p-[1.5rem] mt-[3rem] rounded-[1.5rem]`}
          >
            START A PROJECT
          </button>
        </Link> */}
      </Modal>
    </>
  );
};
