import { Animate, Zoom } from "./Animate.component";

export const Navbar = () => {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
};

const MobileNav = () => {
  return (
    <nav className="md:hidden bg-cover bg-no-repeat bg-center top-0 flex items-center justify-center px-[1rem] md:px-[10rem] z-30 py-[12px] overflow-hidden"></nav>
  );
};

export const DesktopNav = () => {
  return (
    <nav className="hidden md:block h-[100px] sticky top-0 z-10 px-[1rem] w-full md:px-[55px] py-[12px]">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-[5px]">
          <img src="/svg/map.icon.svg" alt="map" />
          <Animate>
            <p className="font-body text-[14px] text-[white] font-normal">
              Laguna Beach, California, US
            </p>
          </Animate>
        </div>
        <div className="flex gap-[5px]">
          <img src="/svg/mail.icon.svg" alt="map" />
          <Animate>
            <p className="font-body text-[14px] text-[white] font-normal">
              Lsupport@eliteapps.com
            </p>
          </Animate>
        </div>
      </div>
      <div className="mt-[5px]">
        {/* Logo */}
        <Zoom>
          <img src="/logo.png" alt="logo" className="w-[220px]" />
        </Zoom>
        {/* Btn */}
        <Animate></Animate>
      </div>
    </nav>
  );
};
