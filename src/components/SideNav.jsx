import { Image, PencilRuler, Shield } from "lucide-react";
import React from "react";
import { useState } from "react";

const SideNav = ({selectIndex}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuList = [
    {
      id: 1,
      name: "icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
  ];

  return (
    <div className="border shadow-sm h-screen ">
      <div>
        {menuList.map((item, idx) => (
          <h2 onClick={() => {setActiveIndex(idx); selectIndex(idx)}}
            className={`p-2 text-lg px-12 text-gray-500 my-2 hover:bg-primary hover:text-white flex items-center gap-2 ${
              activeIndex == idx && "bg-primary text-white "
            }`}
            key={idx}
          >
            <item.icon />
            {item.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
