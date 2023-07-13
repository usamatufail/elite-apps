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
    <nav className="hidden md:flex bg-cover bg-no-repeat bg-center top-0 min-h-[10rem] items-center justify-between px-[1rem] md:px-[10rem] py-[10px]">
      {/* Logo */}
      <Zoom></Zoom>

      {/* Btn */}
      <Animate></Animate>
    </nav>
  );
};
