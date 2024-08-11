import FooterLinks from "./FooterLinks.component";
import FooterSocial from "./FooterSocial.component";

const Footer = () => {
  return (
    <footer className="relative z-10 py-8 border-t border-gray-3">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap items-center justify-center flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between">
          <div>
            <p className="text-sm">
              ©{new Date().getFullYear()} Intellligent Tour Hub. All rights
              reserved
            </p>
          </div>
          <FooterLinks />
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
