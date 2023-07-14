import Link from "next/link";

export const Footer = () => {
  return (
    <section className="bg-[#031221] py-[20px] px-[20px]">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-[10px] max-w-[1200px] m-auto py-[20px]">
        <img src="/footer-logo.png" alt="footer" className="w-[230px]" />
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[30px]">
          <div className="flex justify-center gap-[8px]">
            <img src="/svg/map1.icon.svg" alt="map" />
            <p className="text-[#fff] font-body text-[18px] font-[500]">
              Laguna Beach, California, US
            </p>
          </div>
          <div className="flex justify-center gap-[8px]">
            <img src="/svg/mail1.icon.svg" alt="mail" />
            <p className="text-[#fff] font-body text-[18px] font-[500]">
              support@eliteapps.com
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-[20px] md:gap-[150px] max-w-[1200px] m-auto mt-[50px]">
        <div className="flex flex-col items-center md:items-start gap-[20px]">
          <div className="flex items-center md:items-start  flex-col gap-[12px]">
            <h2 className="text-[#fff] font-body text-[22px]">About</h2>
            <p className="text-[rgba(210,211,213,0.50)] text-[15px] font-[400] text-center md:text-left">
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
        <div className="flex flex-col items-center gap-[20px]">
          <h2 className="text-[#fff] font-body text-[22px]">Useful Links</h2>
          <div className="flex flex-col items-center md:items-start  gap-[4px]">
            <Link
              href="/"
              className="text-[rgba(210,211,213,0.50)] text-[15px] font-[400]"
            >
              Home
            </Link>
            <Link
              href="/inquire"
              className="text-[rgba(210,211,213,0.50)] text-[15px] font-[400]"
            >
              Contact Us
            </Link>
            <Link
              href="/terms"
              className="text-[rgba(210,211,213,0.50)] text-[15px] font-[400]"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-[rgba(210,211,213,0.50)] text-[15px] font-[400]"
            >
              Privacy
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-[20px]">
          <h2 className="text-[#fff] font-body text-[22px]">
            Lets Get Started
          </h2>
          <Link href="/inquire">
            <button
              className={`bg-[#1D78F2] text-white 
            font-[500]
            text-[18px] p-[1.5rem]  rounded-[8px] px-[40px] md:px-[80px] py-[16px]`}
            >
              Inquire Now
            </button>
          </Link>
        </div>
      </div>
      <p className="text-[#D2D3D5] text-center text-[14px] font-[400] mt-[50px]">
        © 2023 — Elite Apps . All Rights Reserved.
      </p>
    </section>
  );
};
