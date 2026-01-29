// import React from "react";
// import { Link } from "react-router-dom";

// interface PortfolioProps {
//   inView?: boolean;
// }

// export const Portfolio = React.forwardRef<HTMLDivElement, PortfolioProps>(
//   ({ inView }, ref) => {
//     return (
//       <section ref={ref} className="pb-16 md:py-24 ">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//             <div
//               className={`h-48 md:h-64 rounded-lg overflow-hidden transition-all duration-1000 ease-out
//             ${
//               inView
//                 ? "opacity-100 scale-100 translate-y-0"
//                 : "opacity-0 scale-90 translate-y-10"
//             }`}
//               style={{ transitionDelay: inView ? "200ms" : "0ms" }}
//             >
//               <img
//                 src="port1.jpg"
//                 alt="Portfolio 1"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div
//               className={`h-48 md:h-64 rounded-lg overflow-hidden transition-all duration-1000 ease-out
//             ${
//               inView
//                 ? "opacity-100 scale-100 translate-y-0"
//                 : "opacity-0 scale-90 translate-y-10"
//             }`}
//               style={{ transitionDelay: inView ? "400ms" : "0ms" }}
//             >
//               <img
//                 src="port3.png"
//                 alt="Portfolio 2"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//             <div
//               className={`h-48 md:h-80 rounded-lg overflow-hidden transition-all duration-1000 ease-out
//             ${
//               inView
//                 ? "opacity-100 scale-100 translate-y-0"
//                 : "opacity-0 scale-95 translate-y-10"
//             }`}
//               style={{ transitionDelay: inView ? "600ms" : "0ms" }}
//             >
//               <img
//                 src="port4.jpg"
//                 alt="Portfolio 3"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div
//               className={`h-48 md:h-80 rounded-lg overflow-hidden transition-all duration-1000 ease-out
//             ${
//               inView
//                 ? "opacity-100 scale-100 translate-y-0"
//                 : "opacity-0 scale-95 translate-y-10"
//             }`}
//               style={{ transitionDelay: inView ? "800ms" : "0ms" }}
//             >
//               <img
//                 src="port5.jpg"
//                 alt="Portfolio 4"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           <div
//             className={`w-full h-300 md:h-[700px] rounded-lg overflow-hidden transition-all duration-1000 ease-out
//           ${
//             inView
//               ? "opacity-100 scale-100 translate-y-0"
//               : "opacity-0 scale-95 translate-y-10"
//           }`}
//             style={{ transitionDelay: inView ? "1000ms" : "0ms" }}
//           >
//             <img
//               src="port6.jpg"
//               alt="Portfolio 5"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </section>
//     );
//   },
// );
import React from "react";
import { Link } from "react-router-dom"; // ✅ [เพิ่ม]

// ✅ [เพิ่ม] สร้างข้อมูลแบบเดียวกับหน้า Services
const portfolioItems = [
  {
    id: 1,
    title: "Garena World 2024",
    image: "port1.jpg",
    urlPath: "/portfolio/garena-world",
    delay: "200ms",
    className: "h-48 md:h-64" // เก็บขนาดเดิมไว้
  },
  {
    id: 2,
    title: "RoV Pro League",
    image: "port3.png",
    urlPath: "/portfolio/rov-pro-league",
    delay: "400ms",
    className: "h-48 md:h-64"
  },
  {
    id: 3,
    title: "RoV Pro League",
    image: "port4.jpg",
    urlPath: "/portfolio/rov-pro-league",
    delay: "400ms",
    className: "h-48 md:h-80"
  },
  {
    id: 4,
    title: "RoV Pro League",
    image: "port5.jpg",
    urlPath: "/portfolio/rov-pro-league",
    delay: "400ms",
    className: "h-48 md:h-80"
  },
  {
    id: 5,
    title: "Nex cs go",
    image: "port6.jpg",
    urlPath: "/portfolio/Nex-cs-go",
    delay: "400ms",
  },
  
];

export const Portfolio = React.forwardRef<HTMLDivElement, { inView?: boolean }>(
  ({ inView }, ref) => {
    return (
      <section ref={ref} className="pb-16 md:py-24 ">
        <div className="container mx-auto px-4">
          
          {/* ส่วนนี้คุณสามารถใช้ .map() เพื่อวนลูปแสดงผลได้เลยเหมือนหน้า Services */}
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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </Link>
            ))}
          </div>

          {/* อันสุดท้ายที่เป็นอันใหญ่ (port6) */}
          <Link to="/portfolio/nex-cs-go" 
            className={`mt-6 w-full h-[300px] md:h-[700px] block rounded-lg overflow-hidden transition-all duration-1000 ease-out group
            ${inView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10"}`}
            style={{ transitionDelay: inView ? "1000ms" : "0ms" }}
          >
            <img src="port6.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </Link>

        </div>
      </section>
    );
  }
);