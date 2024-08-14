import Image from "next/image";
import HeaderButtons from "./HeaderButtons.component";
import HeaderNavMenu from "./HeaderNavMenu.component";
import HeaderSocial from "./HeaderSocial.component";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full z-50 bg-white py-1 transition-all ease-in-out duration-300 shadow">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 xl:px-4 lg:flex items-center justify-between relative">
        <div className=" flex items-center justify-between max-w-40">
          <a href="#">
            <Image
              src="/images/ith_logo.png"
              width={518}
              height={177}
              alt=""
              className="object-contain"
            />
          </a>
        </div>

        <div className="w-full h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between pl-32">
          <HeaderNavMenu />

          <div className="flex flex-wrap items-center gap-8 mt-7 lg:mt-0">
            <HeaderSocial />
            <HeaderButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
