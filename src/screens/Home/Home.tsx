import React, { useRef, useState, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { Services } from "./Services/Services";
import { Portfolio } from "./Portfolio/Portfolio";
import { useInView } from "react-intersection-observer";

export const Home = (): JSX.Element => {

  const boardMembers = [
    {
      name: "Sakkaphol Sawarkkaphun",
      position: "CEO NEX Studio",
      image: "ceo.jpg",
    },
    {
      name: "Mueanfan Khunoopakan",
      position: "COO NEX Studio",
      image: "coo.jpg",
    },
  ];

  const [currentBoardIndex, setCurrentBoardIndex] = useState(0);

  //  useEffect สำหรับสั่งให้ลูปทุก 4 วินาที
  useEffect(() => {
    const boardInterval = setInterval(() => {
      setCurrentBoardIndex((prev) => (prev + 1) % boardMembers.length);
    }, 4000);
    return () => clearInterval(boardInterval);
  }, []);

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { ref: esportRef, inView: esportInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: servicesSectionRef, inView: servicesInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: portfolioSectionRef, inView: portfolioInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: directorsRef, inView: directorsInView } = useInView({
    triggerOnce: false, // เล่นแอนิเมชันครั้งเดียว
    threshold: 0.2, // เริ่มเล่นเมื่อเห็น Section นี้แล้ว 20%
  });

  //  ฟังก์ชันเลื่อนไปยังแต่ละ Section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  //  ฟังก์ชันเลื่อนไปด้านบนสุด
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: "HOME", href: "#" },
    { label: "SERVICES", href: "#" },
    { label: "PORTFOLIO", href: "#" },
    // { label: "NEWS", href: "#" },
    { label: "BUSINESS UNITS", href: "/businessunits" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = ["bg.jpg", "bg1.jpg", "bg2.jpg", "bg3.jpg"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

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
                href={
                  item.label === "BUSINESS UNITS" ? "/businessunits" : item.href
                }
                onClick={(e) => {
                  if (item.label !== "BUSINESS UNITS") {
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

      {/*  Mobile Menu Overlay  */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        <nav className="absolute right-0 top-0 w-3/4 h-full bg-black flex flex-col pt-32 p-8 shadow-2xl space-y-6">
          {navigationItems.map((item) => {
            if (item.label === "BUSINESS UNITS") {
              return (
                <Link
                  key={item.label}
                  to="/businessunits"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-3xl font-bold hover:text-[#fdb813] border-b border-gray-700 pb-3"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.label}
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  if (item.label === "HOME") scrollToTop();
                  else if (item.label === "SERVICES")
                    scrollToSection(servicesRef);
                  else if (item.label === "PORTFOLIO")
                    scrollToSection(portfolioRef);
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div ref={heroRef} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div
                  className={`w-3 h-20 bg-[#fdb813] flex-shrink-0 transition-all duration-1000 
          ${heroInView ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
                />
                <div
                  className={`transition-all duration-1000 delay-300 
          ${
            heroInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
                >
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                    WHY CHOOSE
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-white mt-2">
                    NEX Studio ?
                  </h2>
                </div>
              </div>
              <p
                className={`text-lg text-white leading-relaxed max-w-lg transition-all duration-1000 delay-700
        ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
              >
                NEX Studio, we combine technology, creativity, and deep
                understanding of gaming culture to deliver high-quality
                productions that leave a lasting impact.
              </p>
            </div>
            <div
              className={`flex justify-center mt-8 lg:mt-0 transition-all duration-1000 delay-700
    ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <img
                src="/baner.png"
                alt="Banner"
                className="w-4/5 max-w-md lg:max-w-lg xl:max-w-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEX ESPORT Section */}
      <section className="py-16 md:py-24 bg-white" ref={esportRef}>
        {" "}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between space-x-4 mb-16">
            <div className="flex items-center space-x-4">
              <div
                className={`w-3 h-16 bg-[#fdb813] transition-all duration-1000 
                ${
                  esportInView
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0"
                }`}
              />
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1e1e] transition-all duration-1000 delay-300
                ${
                  esportInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                {" "}
                NEX ESPORT
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {[
              { src: "game1.png", delay: "200ms" },
              { src: "game2.png", delay: "400ms" },
              { src: "game3.png", delay: "600ms" },
              { src: "game4.png", delay: "800ms" },
              { src: "game5.png", delay: "1000ms" },
            ].map((game, i) => (
              <div
                key={i}
                className={`w-full flex justify-center transition-all duration-1000
          ${
            esportInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
                style={{ transitionDelay: game.delay }}
              >
                <img
                  className="w-[210px] h-[220px] object-cover rounded-lg shadow-lg hover:scale-110 transition-transform duration-500"
                  alt={`NEX Esport showcase ${i + 1}`}
                  src={game.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section
        ref={directorsRef}
        className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-black text-white"
      >
        <div className="container mx-auto px-4  ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ease-out 
              ${
                directorsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-3 h-16 bg-[#fdb813] flex-shrink-0 transition-all duration-1000
                  ${
                    directorsInView
                      ? "scale-y-100 opacity-100"
                      : "scale-y-0 opacity-0"
                  }`}
                />
                <h2
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-1000 delay-300
                  ${
                    directorsInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  {" "}
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

            <div
              className={`relative flex flex-col items-center justify-center transition-all duration-1000 delay-300 h-[450px]
              ${directorsInView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
            >
              {boardMembers.map((member, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out
                  ${currentBoardIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div className="text-center mt-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300">
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SERVICES Section */}
      <div ref={servicesSectionRef}>
        {" "}
        <div className="container mx-auto px-4 pt-16">
          <div className="flex items-center space-x-4 ">
            <div
              className={`w-3 h-16 bg-[#fdb813] transition-all duration-1000 
                    ${
                      servicesInView
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0"
                    }`}
            />{" "}
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1e1e] transition-all duration-1000 delay-300
                    ${
                      servicesInView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
            >
              SERVICES
            </h2>{" "}
          </div>
        </div>
        <Services ref={servicesRef} inView={servicesInView} />
      </div>

      {/* ✅ PORTFOLIO Section */}
      <div ref={portfolioSectionRef}>
        {" "}
        <div className="container mx-auto px-4 pt-16">
          <div className="flex items-center space-x-4 ">
            <div
              className={`w-3 h-16 bg-[#fdb813] transition-all duration-1000 
                    ${
                      portfolioInView
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0"
                    }`}
            />{" "}
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1e1e] transition-all duration-1000 delay-300
                    ${
                      portfolioInView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
            >
              PORTFOLIO
            </h2>{" "}
          </div>
        </div>
        <Portfolio ref={portfolioRef} inView={portfolioInView} />
      </div>

      {/* Contact Button */}
      <Link
        to="/ContactUs"
        className="fixed bottom-8 right-8 z-[60] bg-[#fdb813] p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group active:scale-95"
        title="Contact Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>

        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block pointer-events-none shadow-xl">
          Contact Us
        </span>
      </Link>

      {/* Companies Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-x-8 gap-y-4 mb-8 flex-wrap">
            {[
              "gerena.jpg",
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
