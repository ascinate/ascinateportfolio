import Link from 'next/link';
import React from 'react';
import { PiBracketsCurlyBold } from "react-icons/pi";
import { LuMonitorPlay } from "react-icons/lu";
import { RiBrush2Line } from "react-icons/ri";
import { RiMagicLine } from "react-icons/ri";
import Image from 'next/image';
import { usePathname } from "next/navigation";
 
function Sidebar() {
  const pathname = usePathname();
  const navItems = [
    {
      id:1,
      name: "Web Development",
      links:"/",
      icon: <PiBracketsCurlyBold />,
      active: true,
    },
    {
      id:2,
      name: "Web Design (UX/UI&)",
      links:"/webdesign",
      icon: <LuMonitorPlay />,
    },
    {
      id:3,
      name: "Logo Design",
      links:"/logodesign",
      icon: <RiMagicLine />,
    },
    {
      id:4,
      name: "Art Work",
      links:"/artwork",
      icon: <RiBrush2Line />,
    },
  ];
 
  return (
    <aside className="slide-bar float-start">
      <div className="inside-content">
        <Link href="/" className="logo-sl d-block">
          <Image alt="logo" width={200}
            height={200} src="/nw-logo.png" />
        </Link>
 
        <div className="menu-05">
          <ul>
            {navItems.map((page) => {
                 const isActive = pathname === page.links;
                  return (
                      <li key={page.id}>
                          <Link
                              href={page.links}
                              className={`d-flex align-items-center ${isActive ? 'active' : ''}`}>
                             {page.icon} <span> {page.name} </span>
                          </Link>
                      </li>
                  );
              })}
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