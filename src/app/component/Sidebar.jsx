'use client';

import React, { useEffect, useState } from 'react';
import { PiBracketsCurlyBold } from "react-icons/pi";
import { LuMonitorPlay } from "react-icons/lu";
import { RiBrush2Line } from "react-icons/ri";
import { RiMagicLine } from "react-icons/ri";
import Image from 'next/image';

function Sidebar({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);

  const icons = [
    <PiBracketsCurlyBold />,
    <LuMonitorPlay />,
    <RiMagicLine />,
    <RiBrush2Line />
  ];

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('https://ascinate.in/demo/portfolio/api/category');
        const data = await res.json();

        if (data.categories) {
          setCategories(data.categories);
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
        <div className="logo-sl d-block">
          <Image alt="logo" width={200} height={200} src="/nw-logo.png" />
        </div>

        <div className="menu-05">
          <ul>
            {categories.map((category, index) => {
              const icon = icons[index % icons.length];
              return (
                <li key={category.id}>
                  <button
                    onClick={() => onCategorySelect(category)}
                    className="d-flex align-items-center border-0 bg-transparent text-start w-100 text-white"
                  >
                    {icon}
                    <span>{category.name}</span>
                  </button>
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
