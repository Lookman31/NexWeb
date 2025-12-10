import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Link as RouterLink } from "react-router-dom"; // ⬅️ 1. นำเข้า Link

const serviceCards = [
  {
    id: 1,
    title: "Video Production",
    image: "video.jpg",
    urlPath: "/services/video",
  }, 
  { id: 2, 
    title: "Review", 
    image: "review.jpg", 
    urlPath: "/services/review" },
  {
    id: 3,
    title: "Photographer",
    image: "photo.png",
    urlPath: "/services/photo",
  },
  {
    id: 4,
    title: "Game Tournament",
    image: "tournament.jpg",
    urlPath: "/services/tournament",
  },
  {
    id: 5,
    title: "Live Streaming",
    image: "steam.jpg",
    urlPath: "/services/steam",
  },
];

export const Services = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4 mb-12">
          <div className="w-3 h-16 bg-[#fdb813]" />
          <h2 className="text-4xl lg:text-5xl font-bold">SERVICES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((service) => (
            <RouterLink
              key={service.title}
              to={service.urlPath} // ⬅️ ใช้ Path ที่กำหนด
              className="relative overflow-hidden border-0 rounded-lg group cursor-pointer transition-transform hover:scale-105"
            >
              <Card className="border-0 p-0">
                <CardContent className="p-0 h-64 md:h-80 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </RouterLink>
          ))}
        </div>
      </div>
    </section>
  );
});
