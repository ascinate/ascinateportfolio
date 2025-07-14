'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { PiBracketsCurlyBold } from "react-icons/pi";
import { LuMonitorPlay } from "react-icons/lu";
import { RiBrush2Line } from "react-icons/ri";
import { RiMagicLine } from "react-icons/ri";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();
  const [categories, setCategories] = useState([]);

  const icons = [
    <PiBracketsCurlyBold />,
    <LuMonitorPlay />,
    <RiMagicLine />,
    <RiBrush2Line />
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://ascinate.in/demo/portfolio/category');
        console.log("Fetching categories from API...");
        
        const data = await res.json();
        console.log("Fetched data:", data);
        setCategories(data.categories || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <aside className="slide-bar float-start">
      <div className="inside-content">
        <Link href="/" className="logo-sl d-block">
          <Image alt="logo" width={200} height={200} src="/nw-logo.png" />
        </Link>

        <div className="menu-05">
          <ul>
            {categories.map((category, index) => {
              const isActive = pathname === `/${category.slug}`;
              const icon = icons[index % icons.length]; 

              return (
                <li key={category.id}>
                  <Link
                    href={`/${category.slug}`}
                    className={`d-flex align-items-center ${isActive ? 'active' : ''}`}>
                    {icon}
                    <span>{category.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="copy-texr">
          <p>© 2025 Ascinate Technology</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
