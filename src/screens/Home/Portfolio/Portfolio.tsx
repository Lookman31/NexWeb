import React from "react";

interface PortfolioProps {
  inView?: boolean;
}

export const Portfolio = React.forwardRef<HTMLDivElement, PortfolioProps>(
  ({ inView }, ref) => {
    return (
      <section ref={ref} className="pb-16 md:py-24 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div
              className={`h-48 md:h-64 rounded-lg overflow-hidden transition-all duration-1000 ease-out
            ${
              inView
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-10"
            }`} 
              style={{ transitionDelay: inView ? "200ms" : "0ms" }} 
            >
              <img
                src="port1.jpg"
                alt="Portfolio 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`h-48 md:h-64 rounded-lg overflow-hidden transition-all duration-1000 ease-out
            ${
              inView
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-10"
            }`}
              style={{ transitionDelay: inView ? "400ms" : "0ms" }} 
            >
              <img
                src="port3.png"
                alt="Portfolio 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div
              className={`h-48 md:h-80 rounded-lg overflow-hidden transition-all duration-1000 ease-out
            ${
              inView
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-10"
            }`}
              style={{ transitionDelay: inView ? "600ms" : "0ms" }}
            >
              <img
                src="port4.jpg"
                alt="Portfolio 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`h-48 md:h-80 rounded-lg overflow-hidden transition-all duration-1000 ease-out
            ${
              inView
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-10"
            }`}
              style={{ transitionDelay: inView ? "800ms" : "0ms" }}
            >
              <img
                src="port5.jpg"
                alt="Portfolio 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            className={`w-full h-300 md:h-[700px] rounded-lg overflow-hidden transition-all duration-1000 ease-out
          ${
            inView
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-10"
          }`}
            style={{ transitionDelay: inView ? "1000ms" : "0ms" }}
          >
            <img
              src="port6.jpg"
              alt="Portfolio 5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
);
