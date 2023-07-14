import Link from "next/link";

export const Footer = () => {
  return (
    <section className="bg-[#031221] py-[40px] px-[20px]">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-[10px] max-w-[1200px] m-auto">
        <img src="/footer-logo.png" alt="footer" className="w-[230px]" />
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[30px]">
          <div className="flex  gap-[8px]">
            <img src="/svg/map1.icon.svg" alt="map" />
            <p className="text-[#fff] font-body text-[18px] font-[500]">
              Laguna Beach, California, US
            </p>
          </div>
          <div className="flex gap-[8px]">
            <img src="/svg/mail1.icon.svg" alt="mail" />
            <p className="text-[#fff] font-body text-[18px] font-[500]">
              support@eliteapps.com
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-[20px] md:gap-[120px] max-w-[1200px] m-auto mt-[50px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[12px]">
            <h2 className="text-[#fff] font-body text-[22px]">About</h2>
            <p className="text-[rgba(210,211,213,0.50)] text-[15px] font-[400]">
              Our team has an extensive assortment of skills and the client’s
              satisfaction is our top priority. This is what sets us apart from
              the rest! We offer the best services to both enterprise-level and
              startup businesses.
            </p>
          </div>
          <div className="flex gap-[10px]">
            <img src="/svg/fb.icon.svg" alt="facebook" />
            <img src="/svg/twiter.icon.svg" alt="Twiter" />
            <img src="/svg/in.icon.svg" alt="LinedIn" />
            <img src="/svg/insta.icon.svg" alt="Instagram" />
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-[#fff] font-body text-[22px]">Useful Links</h2>
          <div className="flex flex-col gap-[4px]">
            <Link
              href="/"
              className="text-[rgba(210,211,213,0.50)] text-[15px] font-[400]"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-[rgba(210,211,213,0.50)] text-[15px] font-[400]"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-[#fff] font-body text-[22px]">
            Have A Question?
          </h2>
          <Link href="/">
            <button
              className={`bg-[#1D78F2] text-white 
            font-[500]
            text-[18px] p-[1.5rem]  rounded-[8px] px-[40px] md:px-[80px] py-[16px]`}
            >
              Book A Call
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
