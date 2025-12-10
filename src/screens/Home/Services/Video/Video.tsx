import { Link } from "react-router-dom";
import { Footer } from "../../../../components/Footer";
import { useState } from "react"; // ⬅️ 1. นำเข้า useState

// 🚨 ข้อมูลรายละเอียดของ Video Production
const videoDetailData = {
  id: 1,
  title: "VIDEO PRODUCTION ",
  subtitle: "บริการผลิตวิดีโอคุณภาพสูงสำหรับทุกแพลตฟอร์ม",
  description: `From concept to final cut — we create compelling video content that speaks.

Our video services include:
- Cinematic filming with high-end camera gear
- Professional editing and color grading
- Scriptwriting and storyboarding
- Promotional videos, brand stories, music videos, interviews, and more
- Full production crew available for scalable projects

We help bring your vision to life — creatively, efficiently, and on-brand.`,

  image: "/video.jpg", // สมมติว่านี่คือรูปภาพเด่นของบริการนี้
  gallery: [
    "/Video/video1.jpg",
    "/Video/video2.jpg",
    "/Video/video3.jpg",
    "/Video/video4.jpg",
  ],
};

export const Video = (): JSX.Element => {
  // ✅ 2. State สำหรับเก็บ Index ของรูปภาพที่กำลังแสดง
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryLength = videoDetailData.gallery.length;

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

  // 📝 ใช้ useParams เพื่อดึง ID (ถ้าคุณต้องการให้หน้านี้เป็น Dynamic Detail Page)
  // ในกรณีนี้ เราใช้เป็นหน้าเดียว (Static Detail) แต่รักษา structure เพื่อรองรับการขยายตัว

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* ✅ 1. HERO SECTION ใหม่: ภาพพื้นหลังและ Breadcrumb อยู่ด้านบน */}
      <header className="relative h-64 md:h-80 overflow-hidden flex items-start justify-center">
        {/* 1A. ภาพพื้นหลัง (Image: /video.jpg) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${videoDetailData.image})`,
          }}
        />
        {/* 1B. Overlay สีดำจาง ๆ (ถ้าต้องการให้ตัวอักษร Breadcrumb อ่านง่ายขึ้น) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* 1C. Breadcrumb (วางไว้บนพื้นหลัง) */}
        <div className="container mx-auto px-4 relative z-10 w-full pt-16 md:pt-20">
          <div className="text-sm text-white font-medium">
            <Link to="/" className="hover:text-[#fdb813]">
              Home
            </Link>

            <span className="mx-1">{">"}</span>
            <span className="font-semibold">{videoDetailData.title}</span>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-white text-black flex flex-col ">
        <main className="container mx-auto px-4 py-10 flex-grow max-w-4xl">
          <div className="flex items-center space-x-4 mb-14">
            <div className="w-3 h-16 bg-[#fdb813]" />
            <h1 className="text-4xl lg:text-5xl font-bold">
              {videoDetailData.title}
            </h1>
          </div>

          {/* ✅ 4. IMAGE SLIDER Component */}
          <div className="relative mb-14 w-full max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-lg relative">
              {/* รูปภาพหลักที่แสดง */}
              <img
                src={videoDetailData.gallery[currentSlide]}
                alt={`${videoDetailData.title} Slide ${currentSlide + 1}`}
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
                {videoDetailData.gallery.map((_, index) => (
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
            {videoDetailData.description}
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
};
