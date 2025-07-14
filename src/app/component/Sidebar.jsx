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

  // Icon fallback array to visually differentiate categories
  const icons = [
    <PiBracketsCurlyBold />,
    <LuMonitorPlay />,
    <RiMagicLine />,
    <RiBrush2Line />
  ];

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('https://ascinate.in/demo/portfolio/category/api');
        const data = await res.json();
  
        if (data.categories) {
          setCategories(data.categories);
            console.log('fetching categories:',data.categories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

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
              const icon = icons[index % icons.length]; // rotate icons if more than 4

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