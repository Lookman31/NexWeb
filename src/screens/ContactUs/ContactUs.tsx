import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/*  Header Section  */}
      <div
        className="relative min-h-[50vh] md:min-h-[65vh] pt-32 pb-16 bg-cover bg-center bg-no-repeat flex items-start"
        style={{
          backgroundImage: "url('/ContactUs//bgContactUs.png')",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="text-sm mb-12 flex items-center space-x-2 text-white/80">
            <Link to="/" className="hover:text-[#fdb813] transition-colors">
              Home
            </Link>
            <span>&gt;</span>
            <span className="font-bold text-white">CONTACT US</span>
          </nav>
        </div>
      </div>

      {/*  Contact Info Section  */}
      <div className="py-20 container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 mb-16">
          <div className="w-3 h-16 bg-[#fdb813]  "></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black">
            CONTACT US
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          <div className="flex flex-col">
            <h3 className="text-gray-400 font-bold tracking-widest uppercase  mb-4">
              Address
            </h3>
            <p className="text-black text-lg leading-relaxed">
              Nex Studio, Phatthanakan 31/1,
              <br />
              Suan Luang, Suan Luang,
              <br />
              Bangkok 10250
            </p>
            <div className="mt-20"></div>
            <a
              href="https://maps.app.goo.gl/4juQXmXsiSexUraz7"
              target="_blank"
              className="inline-flex items-center space-x-3 text-black hover:text-[#fdb813] transition-all text-lg  group"
            >
              <span>Google Map</span>
              <span className="text-xs">↗</span>
            </a>
          </div>

          <div className="border p-8 shadow-sm space-y-6">
            
            <a
              href="https://www.facebook.com/NexStudioProduction"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="/ContactUs/fb-icon.png"
                  alt="Facebook"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-black font-medium hover:text-[#fdb813] transition-colors">
                NEX Studio
              </span>
            </a>

           
            <a
              href="https://www.youtube.com/@NextzStudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="/ContactUs/yt-icon.png"
                  alt="YouTube"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-black font-medium hover:text-[#fdb813] transition-colors">
                NEX Studio
              </span>
            </a>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="/ContactUs/ph-icon.png"
                  alt="Phone"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-black font-medium">0836026662</span>
            </div>

           
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="/ContactUs/gm-icon.png"
                  alt="Email"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-black font-medium">
                admin@nexesports.co
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
