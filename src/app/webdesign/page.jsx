'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { TiArrowMinimise } from "react-icons/ti";
import { RiLinksFill } from "react-icons/ri";
import Sidebar from '../component/Sidebar';
import Link from 'next/link';

export default function Home() {
  const containerRef = useRef(null);

  const [allTechnologies, setAllTechnologies] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filterTechId, setFilterTechId] = useState('all');

  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", {});
    return () => NativeFancybox.destroy();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://ascinate.in/demo/portfolio/api/projects');
        const data = await res.json();

        if (data.technologies && data.projects) {
          setAllTechnologies(data.technologies);
          setProjects(data.projects);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const technologies = useMemo(() => {
    if (!selectedCategory) return [];
    return allTechnologies.filter(tech => tech.category_id === selectedCategory.id);
  }, [selectedCategory, allTechnologies]);

  const filteredProjects = useMemo(() => {
    if (filterTechId === 'all') return projects;
    return projects.filter(project =>
      project.technologies.some(tech => tech.id === filterTechId)
    );
  }, [filterTechId, projects]);

  return (
    <>
      <Sidebar onCategorySelect={setSelectedCategory} />
      <main className="body-parat d-block">
        <div className="d-flex align-items-center">
          <a className="btn link-bty d-inline-block d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample">
            <i className="fas fa-bars"></i>
          </a>
          <h2 className="titels-head ms-3 ms-lg-0">
            <span> Our </span> Web Development
          </h2>
        </div>

        <div className="port-div2 d-block w-100 mt-5">
          <div className="controls mt-3 mb-5 flex-column flex-sm-row filter-controls">
            {selectedCategory && (
              <>
                <button
                  onClick={() => setFilterTechId('all')}
                  className={`filter btn ${filterTechId === 'all' ? 'mixitup-control-active' : 'btn-hire'} m-1`}
                >
                  All
                </button>
                {technologies.map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => setFilterTechId(tech.id)}
                    className={`filter btn ${filterTechId === tech.id ? 'mixitup-control-active' : 'btn-hire'} m-1`}
                  >
                    {tech.name}
                  </button>
                ))}
              </>
            )}
          </div>

          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4 g-lg-5 bd-part"
            id="bd-part-new"
            ref={containerRef}
          >
            {filteredProjects.map((project, index) => {
              const featuredImage = project.images.find(img => img.is_featured) || project.images[0];
              return (
                <div key={index} className={`col`}>
                  <div className="cm-port">
                    <figure className="position-relative">
                      <img
                        src={`https://ascinate.in/demo/portfolio/${featuredImage.image_url}`}
                        alt={featuredImage.alt_text || 'Project Image'}
                        className="w-100"
                      />
                      <div className="hover-effect-orange d-flex align-items-center justify-content-center">
                        <Link data-fancybox="wk" href={`https://ascinate.in/demo/portfolio/${featuredImage.image_url}`} className="text-white fs-4 me-3">
                          <TiArrowMinimise className='hover-icon-size' />
                        </Link>
                        <Link target="_blank" href={project.project_url} className="text-white fs-4">
                          <RiLinksFill className='hover-icon-size' />
                        </Link>
                      </div>
                    </figure>
                  </div>
                </div>
              );
            })}
          </div>

          <div id="pagination" className="pagination"></div>
        </div>
      </main>
    </>
  );
}
