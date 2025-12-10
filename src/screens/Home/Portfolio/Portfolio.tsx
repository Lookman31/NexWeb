import React from "react";

export const Portfolio = React.forwardRef<HTMLDivElement>((_, ref) => {
return (
<section ref={ref} className="py-16 md:py-24 ">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-3 h-16 bg-[#fdb813]" />
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e1e1e]">
              PORTFOLIO
            </h2>
          </div>

          {/* ตัวอย่างรูป Portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="port1.jpg"
                alt="Portfolio 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="port3.png"
                alt="Portfolio 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="h-48 md:h-80 rounded-lg overflow-hidden">
              <img
                src="port4.jpg"
                alt="Portfolio 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-48 md:h-80 rounded-lg overflow-hidden">
              <img
                src="port5.jpg"
                alt="Portfolio 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full h-300 md:h-[700px] rounded-lg overflow-hidden">
            <img
              src="port6.jpg"
              alt="Portfolio 5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
);
});
