import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { useInView } from "react-intersection-observer"; 


export const BusinessUnits = (): JSX.Element => {

// ✅ สร้าง Ref สำหรับ Section 1
  const { ref: section1Ref, inView: section1InView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // ✅ เพิ่ม: สร้าง Ref สำหรับ Section 2 เพื่อทำแอนิเมชันเบลอและลอยขึ้น
  const { ref: section2Ref, inView: section2InView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      {/* --- Section 1: NEX ESPORTS TOURNAMENT --- */}
      <section 
        ref={section1Ref}
        className="relative min-h-screen flex flex-col pt-32 overflow-hidden"
      >
         <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 z-0
            ${section1InView ? "opacity-30 blur-sm scale-110" : "opacity-0 blur-0 scale-100"}`}
          style={{ backgroundImage: "url('/BusinessUnits/business1.jpg')" }} 
        />
        
        <div className="container mx-auto px-4 relative z-10 flex-grow">
          {/* Breadcrumb - แสดงเฉพาะบนสุด */}
          <nav className="text-sm mb-12 flex items-center space-x-2">
            <Link to="/" className="hover:text-[#fdb813] transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="font-bold text-[#fdb813]">BUSINESS UNIT</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pb-20">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                NEX ESPORTS TOURNAMENT
              </h1>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed max-w-xl">
                <p>Nex Esports is an esports unit specializing in professional tournament organization.</p>
                <p>We handle everything from tournament planning to live broadcasting.</p>
                <p>Nex Esports aims to support players, communities, and brands sustainably.</p>
              </div>
            </div>
            <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-500
              ${section1InView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}>
              <img src="/BusinessUnits/business1.jpg" className="w-full h-auto rounded-sm shadow-2xl" alt="Esports" />
            </div>
          </div>
        </div>
      </section>

{/* --- Section 2: CONTENT & PRODUCTION (วิดีโอซ้าย - ข้อความขวา) --- */}
<section 
        // ✅ เพิ่ม: ผูก ref เพื่อจับการ Scroll ของ Section 2
        ref={section2Ref} 
        className="relative min-h-screen flex items-center bg-zinc-900/50 overflow-hidden"
      >
  <div 
          // ✅ อัปเดต: เพิ่มแอนิเมชัน Blur และ Scale ให้ภาพพื้นหลัง Section 2
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 z-0
            ${section2InView ? "opacity-20 blur-sm scale-110" : "opacity-0 blur-0 scale-100"}`} 
          style={{ backgroundImage: "url('/BusinessUnits/business2.jpg')" }} 
        />
  <div className="container mx-auto px-4 relative z-10 py-20">
    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
      
      {/* ฝั่งข้อความ (ขวา) */}
      <div className="lg:w-1/2 space-y-6 text-left">
        <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter uppercase">
          CONTENT & PRODUCTION
        </h1>
        <div className="space-y-4 text-lg text-gray-300 leading-relaxed max-w-xl">
          <p>Nex Production is a creative production unit specializing in professional photo and video shooting.</p>
          <p>We provide end-to-end services including photography, videography, and live production.</p>
          <p>Delivering powerful visual storytelling for brands, events, and esports competitions.</p>
        </div>
      </div>

      {/* ฝั่งวิดีโอ YouTube (ซ้าย) */}
      <div className="lg:w-[60%] w-full">
        <div className="relative rounded-lg overflow-hidden border-4 border-black shadow-2xl aspect-video bg-black">
          {/* คำแนะนำ: 
             1. เปลี่ยน 'VIDEO_ID' เป็น ID ของวิดีโอที่คุณต้องการ (เช่น https://www.youtube.com/watch?v=XXXXXX ให้เอาแค่ XXXXXX มาใส่)
             2. พารามิเตอร์ rel=0 ช่วยให้ไม่แสดงวิดีโอแนะนำจากช่องอื่นตอนจบ 
          */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/QygFxrtiF4Q?rel=0" 
            title="Content & Production Unit Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};
