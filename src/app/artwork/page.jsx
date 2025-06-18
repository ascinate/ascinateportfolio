'use client';
import { useEffect, useRef } from 'react';
import Sidebar from '../component/Sidebar';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { FaUnlink } from "react-icons/fa";
import { TiArrowMinimise } from "react-icons/ti";
import Link from 'next/link';
 
export default function Page() {
 
    const containerRef = useRef(null);
 
 
 
    useEffect(() => {
        NativeFancybox.bind("[data-fancybox]", {});
        return () => NativeFancybox.destroy();
    }, []);
 
    const categories = [
        { name: "All", filter: "all" },
        { name: "Brochure", filter: ".category-3" },
 
 
    ];
 
 
    const portfolioItems = [
        {
            category: "category-3",
            image: "/confiden.png",
            link: "https://conference.dpw.ai/",
        },
        {
            category: "category-4",
            image: "/myex.png",
            link: "https://myexperiencepass.com/",
        },
        {
            category: "category-5",
            image: "/expert.png",
            link: "https://client.nextyn.com/",
        },
        {
            category: "category-5",
            image: "/godjila.png",
            link: "https://project-godjira.vercel.app",
        },
        {
            category: "category-4",
            image: "/pf5.png",
            link: "https://ascinate.in/projects/html/designs/subrata/ytworkhub/",
        },
        {
            category: "category-2",
            image: "/laravel.png",
            link: "https://www.estudysolutions.com/",
        },
        {
            category: "category-6",
            image: "/fires.png",
            link: "https://www.firesafetysupply.net/",
        },
        {
            category: "category-7",
            image: "/discovere.png",
            link: "https://santarosadivorcemediation.com",
        },
    ];
    return (
        <>
 
 
 
            <Sidebar />
 
            <main className="body-parat d-block">
                <div className="d-flex align-items-center">
                    <a className="btn link-bty d-inline-block d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample"> <i className="fas fa-bars"></i> </a>
                    <h2 className="titels-head ms-3 ms-lg-0"> <span> Our </span>Graphics Work</h2>
                </div>
 
                <div className="port-div2 d-block w-100 mt-5">
                    <div className="controls mt-3 mb-5 flex-column flex-sm-row filter-controls">
                        {categories.map((cat, i) => (
                            <button key={i} className="filter btn" data-filter={cat.filter}>
                                {cat.name}
                            </button>
                        ))}
                    </div>
 
                    <div
                        className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4 g-lg-5 bd-part"
                        id="bd-part-new"
                        ref={containerRef}
                    >
                        {portfolioItems.map((item, index) => (
                            <div key={index} className={`col mix ${item.category}`}>
                                <div className="cm-port">
                                    <figure className="position-relative">
                                        <img src={item.image} alt="portfolio" className="w-100" />
                                        <div className="hover-effect-orange d-flex align-items-center justify-content-center">
                                            <Link data-fancybox="wk" href={item.image} className="text-white fs-4 me-3">
                                                <TiArrowMinimise className='hover-icon-size' />
                                            </Link>
                                            <Link target="_blank" href={item.link} className="text-white fs-4">
                                                <FaUnlink className='hover-icon-size' />
                                            </Link>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        ))}
                    </div>
 
                    <div id="pagination" className="pagination"></div>
                </div>
 
            </main>
        </>
    );
}