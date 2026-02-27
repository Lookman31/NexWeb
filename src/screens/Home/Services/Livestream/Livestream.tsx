import { Link } from "react-router-dom";
import { Footer } from "../../../../components/Footer";
import { useState } from "react"; 

const livesteramDetailData = {
  id: 1,
  title: "LIVE STREAMING", 
  subtitle: "บริการผลิตวิดีโอคุณภาพสูงสำหรับทุกแพลตฟอร์ม",
  description: `Deliver your message in real-time with seamless live production

Whether it's a corporate announcement, webinar, online concert, or esports event, we provide: 
- Multi-camera setups with broadcast-level switching
- On-screen graphics, overlays, and branded elements 
- Audio mixing and real-time tech support 
- Stream to Facebook, YouTube, Twitch, Zoom, or custom platforms 
- Pre-roll, mid-roll, and highlight integration available

Live content requires precision — and that's exactly what we deliver`,

  image: "/steam.jpg",
  gallery: [
    "/Livestream/livestream1.jpg", 
    "/Livestream/livestream2.jpg", 
    "/Livestream/livestream3.jpg",
    "/Livestream/livestream5.jpg",
  ],
};

export const Livestream = (): JSX.Element => {

const [currentSlide, setCurrentSlide] = useState(0);
  const galleryLength = livesteramDetailData.gallery.length;

  
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
      
      <header className="relative h-64 md:h-80 overflow-hidden flex items-start justify-center">
        
        <div
          className="absolute inset-0 bg-cover" 
          style={{
            backgroundImage: `url(${livesteramDetailData.image})`,
            
            backgroundPosition: "center 25%", 
          }}
        />
        
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 relative z-10 w-full pt-16 md:pt-20">
          <div className="text-sm text-white font-medium">
            <Link to="/" className="hover:text-[#fdb813]">
              Home
            </Link>

            <span className="mx-1">{">"}</span>
            <span className="font-semibold">{livesteramDetailData.title}</span>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-white text-black flex flex-col ">
        <main className="container mx-auto px-4 py-10 flex-grow max-w-4xl">
          <div className="flex items-center space-x-4 mb-14">
            <div className="w-3 h-16 bg-[#fdb813]" />
            <h1 className="text-4xl lg:text-5xl font-bold">
              {livesteramDetailData.title}
            </h1>
          </div>

          {/* ✅ 4. IMAGE SLIDER Component */}
          <div className="relative mb-14 w-full max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-lg relative">
              
              <img
                src={livesteramDetailData.gallery[currentSlide]}
                alt={`${livesteramDetailData} Slide ${currentSlide + 1}`}
                className="w-full h-85 md:h-[500px] object-cover transition-opacity duration-500"
              />

              
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
              >
                
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

              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {livesteramDetailData.gallery.map((_, index) => (
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
            {livesteramDetailData.description}
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
};
