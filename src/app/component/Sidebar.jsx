import Link from 'next/link';
import React from 'react';
import { PiBracketsCurlyBold } from "react-icons/pi";
import { LuMonitorPlay } from "react-icons/lu";
import { RiBrush2Line } from "react-icons/ri";
import { RiMagicLine } from "react-icons/ri";

function Sidebar() {
  const navItems = [
    {
      name: <Link href="/">Web Development</Link>,
      icon: <PiBracketsCurlyBold />,
      active: true,
    },
    {
      name: <Link href="/webdesign">Web Design &#40;UX/UI&#41;</Link>,
      icon: <LuMonitorPlay />,
    },
    {
      name: <Link href="/logodesign">Logo Design</Link>,
      icon: <RiMagicLine />,
    },
    {
      name: <Link href="/artwork">Art Work</Link>,
      icon: <RiBrush2Line />,
    },
  ];

  return (
    <aside className="slide-bar float-start">
      <div className="inside-content">
        <a href="index.html" className="logo-sl d-block">
          <img alt="logo" src="/nw-logo.png" />
        </a>

        <div className="menu-05">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className='d-flex align-items-center gap-2'>
                {item.icon && <span className="nav-icon">{item.icon}</span>}
                <span> {item.name} </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="copy-texr">
          <p> © 2025 Ascinate Technology </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
