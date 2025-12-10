import { Link } from "react-router-dom";
import { Footer } from "../../../../components/Footer";
import { useState } from "react"; // ⬅️ 1. นำเข้า useState

const photoDetailData = {
  id: 1,
  title: "PHOTOGRAPHER",
  subtitle: "บริการผลิตวิดีโอคุณภาพสูงสำหรับทุกแพลตฟอร์ม",
  description: `Capture your moments with our comprehensive photography services.

We specialize in:
- Event coverage – corporate, private, launches, etc
- Portraits, fashion, and editorial photography
- Location shoots – architecture, offices, interiors 
- Product photography for catalogs and online platforms
- Studio rentals – standard backdrops and green screens

Our experienced team ensures your visuals are sharp, expressive, and aligned with your brand`,

  image: "/photo.png",
  gallery: ["/Photo/photo.png", "/Photo/photo1.jpg"],
};

export const Photo = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryLength = photoDetailData.gallery.length;

  // ✅ 3. Functions สำหรับเลื่อนสไลด์
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === galleryLength - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? galleryLength - 1 : prevSlide - 1
    );
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* ✅ 1. HERO SECTION ใหม่: ภาพพื้นหลังและ Breadcrumb อยู่ด้านบน */}
      <header className="relative h-64 md:h-80 overflow-hidden flex items-start justify-center">
        {/* 1A. ภาพพื้นหลัง (Image: /video.jpg) */}
        <div
          className="absolute inset-0 bg-cover" // ⬅️ ลบ bg-center/bg-bottom ที่เคยใช้ไปก่อนหน้าออก
          style={{
            backgroundImage: `url(${photoDetailData.image})`,
            // ✅ แก้ไข: เพิ่ม backgroundPosition
            backgroundPosition: "center 15%", // ตัวอย่าง: จัดกึ่งกลางแนวนอน, เลื่อนขึ้นไป 40% แนวตั้ง
          }}
        />
        {/* 1B. Overlay สีดำจาง ๆ (ถ้าต้องการให้ตัวอักษร Breadcrumb อ่านง่ายขึ้น) */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 relative z-10 w-full pt-16 md:pt-20">
          <div className="text-sm text-white font-medium">
            <Link to="/" className="hover:text-[#fdb813]">
              Home
            </Link>

            <span className="mx-1">{">"}</span>
            <span className="font-semibold">{photoDetailData.title}</span>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-white text-black flex flex-col ">
        <main className="container mx-auto px-4 py-10 flex-grow max-w-4xl">
          <div className="flex items-center space-x-4 mb-14">
            <div className="w-3 h-16 bg-[#fdb813]" />
            <h1 className="text-4xl lg:text-5xl font-bold">
              {photoDetailData.title}
            </h1>
          </div>

          {/* ✅ 4. IMAGE SLIDER Component */}
          <div className="relative mb-14 w-full max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-lg relative">
              {/* รูปภาพหลักที่แสดง */}
              <img
                src={photoDetailData.gallery[currentSlide]}
                alt={`${photoDetailData} Slide ${currentSlide + 1}`}
                className="w-full h-85 md:h-[500px] object-cover transition-opacity duration-500"
              />

              {/* ปุ่ม Prev/Next */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
              >
                {/* ไอคอนลูกศรซ้าย */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
              >
                {/* ไอคอนลูกศรขวา */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {photoDetailData.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white scale-125"
                        : "bg-gray-400 opacity-75"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {photoDetailData.description}
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
};
