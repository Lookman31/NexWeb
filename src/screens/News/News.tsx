import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

export const News = (): JSX.Element => {
  const newsData = [
    // ข้อมูลข่าวทั้งหมด (id 1-6)
    {
      id: 1,
      title: "INZOI วางจำหน่ายในวันที่ 20 สิงหาคม 2568 เวอร์ชั่น MAC",
      description: "เป็นเกมแนว Life Simulation จำลองชีวิตเสมือนจริง ",
      image: "/News/news.jpg",
      date: "2025-11-14",
    },
    {
      id: 2,
      title: "Edens Zero เปิดตัว 15 ก.ค. 2025 เดโมให้ลองเล่นแล้ววันนี้!",
      description:
        "สายอนิเมะเตรียมลุย! Edens Zero เกมแอ็กชัน RPG ดัดแปลงจากมังงะชื่อดังของ Hiro Mashima",
      image: "/News/news2.png",
      date: "2025-11-13",
    },
    {
      id: 3,
      title: " Hollow Knight: Silksong จะวางจำหน่ายจริงในวันที่ 4 กันยายนนี้",
      description:
        "Team Cherry ยืนยันเรื่องนี้ในประกาศพิเศษที่เพิ่งจบลงไปเมื่อครู่ ซึ่งก็มาพร้อมกับเกมเพลย์ใหม่ประมาณหนึ่ง",
      image: "/News/news3.png",
      date: "2025-11-12",
    },
    {
      id: 4,
      title: "Total Chaos เกมแนว Action Horror",
      description:
        "ประกาศเลื่อนการวางจำหน่ายออกไปจากเดิมวันที่ 24 กรกฎาคม 2025 เป็นช่วงไตรมาสที่ 4 ของปีเดียวกัน",
      image: "/News/news4.png",
      date: "2025-11-11",
    },
    {
      id: 5,
      title: "HUNTER×HUNTER NEN×IMPACT",
      description:
        "เปิดจำหน่าย 17 กรกฏาคมนี้!! เปิดให้ลองเล่น DEMO ได้แล้ววบน PlayStation5 และ PC Steam ",
      image: "/News/news5.png",
      date: "2025-11-10",
    },
    {
      id: 6,
      title: "Upcoming Live Events Calendar Released",
      description:
        "Check out our event calendar for the latest updates on upcoming tournaments and live shows.",
      image: "/News/news6.png",
      date: "2025-11-09",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <main className="container mx-auto px-4 py-12 flex-grow">
        {/* ✅ Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#fdb813] font-medium">
            Home
          </Link>{" "}
          <span className="mx-1">{">"}</span>
          <span className="font-semibold ">News / Events</span>
        </div>

        {/* ✅ Title */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="w-3 h-16 bg-[#fdb813] flex-shrink-0" />
          <h1 className="text-4xl font-bold text-center">NEWS / EVENTS</h1>
        </div>

        {/* ✅ News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <Link
              key={news.id}
              to={`/news/${news.id}`}
              className="block bg-gray-100 rounded-xl shadow p-6 hover:shadow-lg hover:scale-[1.02] transition duration-300 ease-in-out" // ใช้ 'block' เพื่อให้ Link คลุมพื้นที่ทั้งหมด
            >
              <img
                src={news.image}
                alt={news.title}
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />

              <p className="text-xs text-gray-500 mb-2">
                {new Date(news.date ?? "").toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </p>

              <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
              <p className="text-gray-600 text-sm">{news.description}</p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};
