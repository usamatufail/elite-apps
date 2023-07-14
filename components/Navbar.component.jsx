import { Link } from "react-scroll";
import { Animate, Zoom } from "./Animate.component";
import { Drawer, useDrawer } from "./Drawer.component";
import { HiBars3BottomRight } from "react-icons/hi2";

const linkData = [
  {
    link: "Home",
    to: "home",
  },
  {
    link: "Services",
    to: "services",
  },
  {
    link: "Technologies",
    to: "technologies",
  },
  {
    link: "Process",
    to: "process",
  },
  {
    link: "Clients",
    to: "clients",
  },
  {
    link: "Insdustories",
    to: "industories",
  },
  {
    link: "Journey",
    to: "journey",
  },
];

export const Navbar = () => {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
};

const MobileNav = () => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  return (
    <nav className="md:hidden sticky top-0 flex items-center justify-between px-[1rem] z-30 overflow-hidden mt-[10px]">
      {/* Drawer For Links */}
      <Drawer
        open={isOpen}
        openFrom="right"
        onClose={closeDrawer}
        heading="Menu"
      >
        <Links isMobile onClick={closeDrawer} />
      </Drawer>
      {/* Logo */}

      <Zoom>
        <img src="/logo.png" alt="logo" className="w-[220px]" />
      </Zoom>
      {/* Icons */}

      <button onClick={openDrawer}>
        <HiBars3BottomRight size={35} color="white" />
      </button>
    </nav>
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
      <div className="mt-[5px] flex justify-between items-center">
        {/* Logo */}
        <Zoom>
          <img src="/logo.png" alt="logo" className="w-[220px]" />
        </Zoom>
        {/* Btn */}
        <Animate>
          <Links />
        </Animate>
      </div>
    </nav>
  );
};

const Links = ({ isMobile = false, onClick = () => {} }) => {
  const linkClass = ` text-[1.6rem] md:p-[1rem] md:pb-[20px] text-white font-[500] cursor-pointer font-body transition-bg duration-500 flex items-center border-b-[4px] border-b-[transparent] `;
  const hoverClass = ` hover:border-b-[#fff] hover:border-b-solid`;
  return (
    <div
      className={`flex ${
        isMobile
          ? "flex-col text-[1.6rem] font-body font-medium navbar gap-[20px]"
          : ""
      } gap-[10px] items-center `}
    >
      {linkData.map((link) => {
        return (
          <Link
            key={link?.link}
            to={link.to}
            activeClass="active"
            className={`${linkClass} ${hoverClass}`}
            onClick={onClick}
            spy={true}
            smooth={true}
            duration={500}
          >
            {link?.link}
          </Link>
        );
      })}
    </div>
  );
};
