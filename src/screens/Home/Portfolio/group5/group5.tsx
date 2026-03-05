import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../../../components/Footer";

export const Group5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    { id: 1, src: "/port-group5/main.jpg", position: "object-center" },
    { id: 2, src: "/port-group5/1.jpg", position: "object-[center_55%]" },
    { id: 3, src: "/port-group5/2.jpg", position: "object-[center_25%]" },
    { id: 4, src: "/port-group5/3.jpg", position: "object-[center_10%]" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  return (
    <div className="bg-white min-h-screen text-black font-sans">
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-400 z-[110]"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 md:left-10 text-white text-6xl md:text-8xl hover:text-[#fdb813] transition-all active:scale-90 p-4"
          >
            &#8249;
          </button>

          <img
            src={galleryImages[currentIndex].src}
            alt="Full view"
            className="max-w-full max-h-[90vh] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 md:right-10 text-white text-6xl md:text-8xl hover:text-[#fdb813] transition-all active:scale-90 p-4"
          >
            &#8250;
          </button>
        </div>
      )}

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/*  Breadcrumbs:  */}
        <nav className="text-sm mb-12 flex items-center space-x-2">
          <Link to="/" className="hover:text-[#fdb813] transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span className="font-bold ">PORTFOLIO</span>
        </nav>

        <div
          onClick={() => setIsLightboxOpen(true)}
          className="w-full aspect-video rounded-lg overflow-hidden bg-gray-100 mb-6 shadow-sm cursor-zoom-in group relative"
        >
          <img
            src={galleryImages[currentIndex].src}
            alt="Main Portfolio"
            className={`w-full h-full object-cover ${galleryImages[currentIndex].position}`}
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 rounded-full text-sm">
              คลิกเพื่อขยายรูป
            </span>
          </div>
        </div>

        {/*  Image Gallery Section */}
        <div className="relative flex items-center mb-16 px-16">
          {" "}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-[#fdb813] hover:text-white transition-all shadow-md active:scale-90 text-3xl font-light"
          >
            &#8249;
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
                  alt="thumbnail"
                  className={`w-full h-full object-cover ${img.position}`}
                />
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-[#fdb813] hover:text-white transition-all shadow-md active:scale-90 text-3xl font-light"
          >
            &#8250;
          </button>
        </div>

        {/*  Content Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
            Product Photography & Influencer Marketing Solutions
          </h1>

          <div className="w-full h-[1px] bg-gray-300 mb-8"></div>

          <div className="text-left space-y-4 text-sm md:text-base text-gray-800 leading-relaxed">
            <p>
              Professional product photography and brand advertising for
              promotions
            </p>
            <p>
              Customized content creation to enhance your brand's unique
              identity
              <br />
              Influencer sourcing services to match your specific brand
              personality
              <br />
              Extensive creator network to ensure alignment with your brand
              image
              <br />
            </p>

            <p>
              CStrategic marketing support to reach and engage your target
              audience.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
