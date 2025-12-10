import React, { useRef, useState, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { Services } from "./Services/Services";
import { Portfolio } from "./Portfolio/Portfolio";

export const Home = (): JSX.Element => {
  // ✅ สร้าง ref สำหรับ scroll
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ ฟังก์ชันเลื่อนไปยังแต่ละ Section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // ⬅️ ปิดเมนูหลังจากคลิก
  };

  // ✅ ฟังก์ชันเลื่อนไปด้านบนสุด
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false); // ⬅️ ปิดเมนูหลังจากคลิก
  };

  const navigationItems = [
    { label: "HOME", href: "#" },
    { label: "SERVICES", href: "#" },
    { label: "PORTFOLIO", href: "#" },
    { label: "NEWS", href: "#" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // ⬅️ State สำหรับ index รูปภาพ

  const backgroundImages = ["bg.jpg", "bg1.jpg", "bg2.jpg", "bg3.jpg"];

  // ⬅️  สำหรับ Auto-Scroll
  useEffect(() => {
    const intervalId = setInterval(() => {
      // คำนวณ Index ถัดไป (วนกลับไป 0 เมื่อถึงรูปสุดท้าย)
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]); // Dependency Array: ให้รันใหม่เมื่อจำนวนรูปภาพเปลี่ยน

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden scroll-smooth">
      {/* Navigation Header */}
      <header className="fixed w-full h-20 md:h-28 top-0 left-0 z-50 bg-black/75 backdrop-blur-sm">
        <nav className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center">
            <img src="/Nexlogo.png" alt="NEX Studio Logo" className="h-20" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.label === "NEWS" ? "/news" : item.href}
                onClick={(e) => {
                  if (item.label !== "NEWS") {
                    e.preventDefault();
                    if (item.label === "HOME") scrollToTop();
                    if (item.label === "SERVICES") scrollToSection(servicesRef);
                    if (item.label === "PORTFOLIO")
                      scrollToSection(portfolioRef);
                  }
                }}
                className="font-bold text-white text-lg xl:text-2xl hover:text-[#fdb813] transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* ✅ Mobile Menu Overlay  */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full" //  เลื่อนจากขวามา
        }`}
      >
        {/* พื้นหลังมืด */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)} //  คลิกที่พื้นหลังปิดเมนู
        />
        {/* เมนูหลัก */}
        <nav className="absolute right-0 top-0 w-3/4 h-full bg-black flex flex-col pt-32 p-8 shadow-2xl space-y-6">
          {navigationItems.map((item) => {
            // สำหรับ NEWS ใช้ Link
            if (item.label === "NEWS") {
              return (
                <Link
                  key={item.label}
                  to="/news"
                  onClick={() => setIsMenuOpen(false)} // ปิดเมนูหลังเปลี่ยนหน้า
                  className="text-white text-3xl font-bold hover:text-[#fdb813] border-b border-gray-700 pb-3"
                >
                  {item.label}
                </Link>
              );
            }

            // สำหรับ HOME, SERVICES, PORTFOLIO ใช้ <a> และ Scroll
            return (
              <a
                key={item.label}
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  // เรียกใช้ฟังก์ชัน Scroll/Top
                  if (item.label === "HOME") scrollToTop();
                  else if (item.label === "SERVICES")
                    scrollToSection(servicesRef);
                  else if (item.label === "PORTFOLIO")
                    scrollToSection(portfolioRef);

                  // (Note: setIsMenuOpen(false) ถูกเรียกภายใน scrollToTop/scrollToSection แล้ว)
                }}
                className="text-white text-3xl font-bold hover:text-[#fdb813] border-b border-gray-700 pb-3"
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-r from-black/80 to-black/60 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000" //⬅️ เพิ่ม transition-opacity duration-1000
          style={{
            backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-20 bg-[#fdb813] flex-shrink-0" />
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                    WHY CHOOSE
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-white mt-2">
                    NEX Studio ?
                  </h2>
                </div>
              </div>
              <p className="text-lg text-white leading-relaxed max-w-lg">
                NEX Studio, we combine technology, creativity, and deep
                understanding of gaming culture to deliver high-quality
                productions that leave a lasting impact.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <img src="/baner.png" alt="Banner" className="h-45" />
            </div>
          </div>
        </div>
      </section>

      {/* NEX ESPORT Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* จัดเรียงหัวข้อและปุ่มให้อยู่ในระดับเดียวกัน */}
          <div className="flex items-center justify-between space-x-4 mb-16">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-16 bg-[#fdb813]" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1e1e]">
                NEX ESPORT
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            <div className="w-full flex justify-center">
              <img
                className="w-[210px] h-[220px] object-cover rounded-lg"
                alt="NEX Esport showcase"
                src="game1.png"
              />
            </div>

            <div className="w-full flex justify-center">
              <img
                className="w-[210px] h-[220px] object-cover rounded-lg"
                alt="NEX Esport showcase"
                src="game2.png"
              />
            </div>

            <div className="w-full flex justify-center">
              <img
                className="w-[210px] h-[220px] object-cover rounded-lg"
                alt="NEX Esport showcase"
                src="game3.png"
              />
            </div>

            <div className="w-full flex justify-center">
              <img
                className="w-[210px] h-[220px] object-cover rounded-lg"
                alt="NEX Esport showcase"
                src="game4.png"
              />
            </div>

            <div className="w-full flex justify-center">
              <img
                className="w-[210px] h-[220px] object-cover rounded-lg"
                alt="NEX Esport showcase"
                src="game5.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4  ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-16 bg-[#fdb813] flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ">
                  BOARD OF DIRECTORS
                </h2>
              </div>

              <p className="text-base md:text-lg lg:text-xl leading-relaxed ">
                We elevate live streaming, game tournaments, and creative events
                into powerful experiences — combining production expertise,
                visual storytelling, and digital innovation.
                <br />
                <br />
                Driven by technology, built with passion, and powered by people.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-8">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-full flex items-center justify-center">
                <img
                  src="ceo.jpg"
                  alt="CEO Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                  Sakkaphol Sawarkkaphun
                </h3>
                <p className="text-base md:text-lg text-gray-300">
                  CEO NEX Studio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services ref={servicesRef} />
      <Portfolio ref={portfolioRef} />

      {/* Companies Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* ✅ Row 1 - 5 logos */}
          {/* 🚨 เพิ่ม Class mb-8 เพื่อให้มีระยะห่างด้านล่าง */}
          <div className="flex justify-center gap-x-8 gap-y-4 mb-8 flex-wrap">
            {[
              "gerena.jpg", //
              "nexon.png",
              "Asiasoft.jpg",
              "michelin.jpg",
              "benq.png",
            ].map((logo, i) => (
              <div key={i} className="flex items-center justify-center ">
                <img
                  src={logo}
                  alt={`Company ${i + 1}`}
                  className="h-16 md:h-20 lg:h-24 object-contain max-w-[150px]"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - 4 logos */}
          <div className="flex justify-center gap-x-8 gap-y-4 mb-8 flex-wrap">
            {[
              "predator.jpg",
              "republic.png",
              "logitech.png",
              "onikuma.png",
            ].map((logo, i) => (
              <div key={i} className="flex items-center justify-center p-2">
                <img
                  src={logo}
                  alt={`Company ${i + 6}`}
                  className="h-16 md:h-20 lg:h-24 object-contain max-w-[150px]"
                />
              </div>
            ))}
          </div>

          {/* Row 3 - 5 logos */}
          <div className="flex justify-center gap-x-8 gap-y-4 mb-8 flex-wrap">
            {[
              "shin.jpg",
              "quick.jpg",
              "blue.png",
              "Ichitan.png",
              "Xavier.png",
            ].map((logo, i) => (
              <div key={i} className="flex items-center justify-center p-2">
                <img
                  src={logo}
                  alt={`Company ${i + 10}`}
                  className="h-16 md:h-20 lg:h-24 object-contain max-w-[150px]"
                />
              </div>
            ))}
          </div>

          {/* Row 4 - 4 logos */}
          <div className="flex justify-center gap-x-8 gap-y-4 flex-wrap">
            {["AMD.png", "ini3.jpg", "intel.png", "tesf.png"].map((logo, i) => (
              <div key={i} className="flex items-center justify-center p-2">
                <img
                  src={logo}
                  alt={`Company ${i + 15}`}
                  className="h-16 md:h-20 lg:h-24 object-contain max-w-[150px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
