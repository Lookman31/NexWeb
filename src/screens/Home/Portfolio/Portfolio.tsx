import React from "react";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    title: "Group1",
    image: "/port-group1/main.jpg",
    urlPath: "/portfolio/Group1",
    delay: "200ms",
    className: "h-48 md:h-64", // เก็บขนาดเดิมไว้
  },
  {
    id: 2,
    title: "Group2",
    image: "/port-group2/main.jpg",
    urlPath: "/portfolio/Group2",
    delay: "400ms",
    className: "h-48 md:h-64 ",
    position: "object-top ",
  },
  {
    id: 3,
    title: "Group3",
    image: "/port-group3/main.jpg",
    urlPath: "/portfolio/Group3",
    delay: "400ms",
    className: "h-48 md:h-80",
  },
  {
    id: 4,
    title: "Group4",
    image: "/port-group4/main.jpg",
    urlPath: "/portfolio/Group4",
    delay: "400ms",
    className: "h-48 md:h-80",
  },
];

export const Portfolio = React.forwardRef<HTMLDivElement, { inView?: boolean }>(
  ({ inView }, ref) => {
    return (
      <section ref={ref} className="pb-16 md:py-24 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                to={item.urlPath}
                className={`${item.className} rounded-lg overflow-hidden transition-all duration-1000 ease-out group
                ${inView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"}`}
                style={{ transitionDelay: inView ? item.delay : "0ms" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover ${item.position} group-hover:scale-110 transition-transform duration-500`}
                />
              </Link>
            ))}
          </div>

          <Link
            to="/portfolio/Group5"
            className={`mt-6 w-full h-[300px] md:h-[700px] block rounded-lg overflow-hidden transition-all duration-1000 ease-out group
            ${inView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10"}`}
            style={{ transitionDelay: inView ? "1000ms" : "0ms" }}
          >
            <img
              src="/port-group5/main.jpg"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
        </div>
      </section>
    );
  },
);
