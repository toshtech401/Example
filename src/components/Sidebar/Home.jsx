import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Home.css"; // Import your CSS file

const Home = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          <HiMenuAlt3 size={26} className="cursor-pointer" />
        </div>
        <div className="menu-items">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`menu-item ${menu?.margin && "mt-5"}`}
            >
              <div className="icon">{React.createElement(menu?.icon, { size: 20 })}</div>
              <h2 className={`menu-text ${!open && "hidden-text"}`}>
                {menu?.name}
              </h2>
              <h2 className={`hidden-menu-text ${open && "hidden"}`}>
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="brand-name">REACT TAILWIND</div>
    </section>
  );
};

export default Home;
