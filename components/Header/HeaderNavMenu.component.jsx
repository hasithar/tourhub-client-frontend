import React from "react";

const HeaderNavMenu = () => {
  return (
    <nav>
      <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10 text-sm">
        <li className=" lg:py-6">
          <a href="#" className="hover:text-gray-800">
            Itienaries
          </a>
        </li>

        <li className=" lg:py-6">
          <a href="#" className="hover:text-gray-800">
            Attractions
          </a>
        </li>

        <li className=" lg:py-6">
          <a href="#" className="hover:text-gray-800">
            Activities
          </a>
        </li>

        <li className=" lg:py-6">
          <a href="#" className="hover:text-gray-800">
            Tour Planner
          </a>
        </li>

        <li className=" lg:py-6">
          <a href="#" className="hover:text-gray-800">
            About Us
          </a>
        </li>

        <li className=" lg:py-6">
          <a href="#" className="hover:text-gray-800">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavMenu;
