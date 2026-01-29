import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../../../components/Footer";

export const Nexcsgo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ข้อมูลรูปภาพจำลองสำหรับ Gallery
  const galleryImages = [
    { id: 1, src: "/port6.jpg" }, // รูปหลัก
    { id: 2, src: "/port1.jpg" }, 
    { id: 3, src: "/port3.png" },
    { id: 4, src: "/port4.jpg" },
  ];

  // . ฟังก์ชันสำหรับกดปุ่มถัดไป (Next)
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  //  ฟังก์ชันสำหรับกดปุ่มก่อนหน้า (Prev)
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  return (
    <div className="bg-white min-h-screen text-black font-sans">
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/*  Breadcrumbs: Home > Portfolio */}        
          <nav className="text-sm mb-12 flex items-center space-x-2">
            <Link to="/" className="hover:text-[#fdb813] transition-colors">
              Home
            </Link>
            <span>&gt;</span>
            <span className="font-bold ">PORTFOLIO</span>
          </nav>

       
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-100 mb-6 shadow-sm">
          <img
            src={galleryImages[currentIndex].src}
            alt="Main Portfolio"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/*  Image Gallery (Thumbnails) พร้อมปุ่มที่ทำงานได้จริง */}
        <div className="relative flex items-center mb-16 px-12">
          
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 bg-gray-200 rounded-sm hover:bg-gray-300 transition-colors shadow-sm active:scale-95"
          >
            <span className="text-2xl font-light">&lt;</span>
          </button>

          <div className="grid grid-cols-4 gap-4 w-full">
            {galleryImages.map((img, index) => (
              <div
                key={img.id}
                onClick={() => setCurrentIndex(index)} 
                className={`aspect-video bg-gray-200 rounded-sm overflow-hidden border-2 cursor-pointer transition-all
                  ${currentIndex === index ? " scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}
              >
                <img
                  src={img.src}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>

          
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 bg-gray-200 rounded-sm hover:bg-gray-300 transition-colors shadow-sm active:scale-95"
          >
            <span className="text-2xl font-light">&gt;</span>
          </button>
        </div>

        {/* ✅ Content Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
            Blue Archive เปิดให้โหลดเวอร์ชั่น PC <br /> ได้แล้วบน steam
          </h1>

          <div className="w-full h-[1px] bg-gray-300 mb-8"></div>

          <div className="text-left space-y-4 text-sm md:text-base text-gray-800 leading-relaxed">
            <p>เป็นเกมแนว RPG ผสม Tactical Strategy</p>
            <p>
              รูปแบบการเล่นของเกม
              <br />
              โดยผู้เล่นรับบทเป็น "Sensei" คอยดูแลและนำทีมเหล่านักเรียนหญิง
              <br />
              มีระบบต่อสู้แบบวางแผน 6 ตัว แบ่งเป็น Striker และ Special
              <br />
              ตัวละครแต่ละคนมีสกิล ความสามารถ และบทบาทเฉพาะตัว
              <br />
              เกมมีระบบ Gacha สำหรับสะสมตัวละครระดับต่างๆ
              <br />
              มีระบบอัปเกรดตัวละคร อุปกรณ์ และสร้างความสัมพันธ์กับนักเรียน
            </p>

            <p>
              ตัวเกมมีเนื้อเรื่องที่เข้มข้น ผสมทั้งดราม่า แอ็คชั่น และมุกตลก
              กราฟิกสไตล์อนิเมะ ตัวละครน่ารักและออกแบบมาอย่างละเอียด
              <br />
              เพลงประกอบคุณภาพสูง ช่วยเสริมบรรยากาศในเกม
            </p>

            <p>
              สำหรับใครที่ชอบเกมแนวอนิเมะ วางแผน และเนื้อเรื่องลึกๆ
              สามารถไปโหลดมาเล่นได้ทั้ง mobile (google play & app store), PC
              (steam)
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
