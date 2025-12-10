// import React from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Service", href: "/" },
  { label: "Portfolio", href: "/" },
];

const legalLinks = [
  { label: "Privacy Policy" }, 
  { label: "Terms of Service" }
];

const contactInfo = [
  { label: "Email: admin@nexesports.co" },
  { label: "Phone: 0836026662" },
];

const socialMedia = [
  { icon: "facebook.jpg", url: "https://www.facebook.com/NexStudioProduction" },
  { icon: "youtube.png", url: "https://www.youtube.com/@NextzStudio" },
  { icon: "discord.jpg", url: "" },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/Nexlogo.png" alt="NEX Studio Logo" className="h-12" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">QUICKLINK</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-lg hover:text-[#fdb813] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">LEGAL INFO</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-lg hover:text-[#fdb813] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">CONTACT US</h3>
            <ul className="space-y-3 mb-6">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  <span className="text-lg">{info.label}</span>
                </li>
              ))}
            </ul>

            <div className="flex space-x-4">
              {socialMedia.map((item, i) => (
                <a
                  key={i}
                  href={item.url} // ⬅️ กำหนด URL ปลายทาง
                  target="_blank" // ⬅️ เปิดในแท็บใหม่ (Best Practice)
                  rel="noopener noreferrer" // ⬅️ ป้องกันความปลอดภัย (สำคัญ)
                  className="w-9 h-9 flex items-center justify-center bg-gray-600 rounded hover:bg-[#fdb813] transition-colors cursor-pointer"
                >
                  <img
                    src={`/${item.icon}`}
                    alt={item.icon.split(".")[0]}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fdb813] py-3 text-center text-black font-medium">
        Copyright ©2022 Nex Esport All rights reserved
      </div>
    </footer>
  );
};
