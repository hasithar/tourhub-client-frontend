import React from "react";

const FooterLinks = () => {
  return (
    <div>
      <ul className="flex flex-wrap items-center gap-2.5">
        <li>
          <a
            href="#"
            className="group leading-none flex text-sm ease-in duration-200 hover:text-dark"
          >
            <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
              Privacy
            </span>
          </a>
        </li>
        <li>
          <span className="flex w-1 h-1 rounded-full bg-slate-400"></span>
        </li>
        <li>
          <a
            href="#"
            className="group leading-none flex text-sm ease-in duration-200 hover:text-dark"
          >
            <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
              Terms & Conditions
            </span>
          </a>
        </li>
        <li>
          <span className="flex w-1 h-1 rounded-full bg-slate-400"></span>
        </li>
        <li>
          <a
            href="#"
            className="group leading-none flex text-sm ease-in duration-200 hover:text-dark"
          >
            <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
              Contact
            </span>
          </a>
        </li>
        <li>
          <span className="flex w-1 h-1 rounded-full bg-slate-400"></span>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
