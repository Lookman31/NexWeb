import { useParams, useNavigate,  } from "react-router-dom"; // เพิ่ม Link
import { Footer } from "../../components/Footer";


const newsData = [
  {
    id: 1,
    title: "INZOI วางจำหน่ายในวันที่ 20 สิงหาคม 2568 เวอร์ชั่น MAC",
    description : "เป็นเกมแนว Life Simulation จำลองชีวิตเสมือนจริง ",
    detail:
      "INZOI ลดราคาอยู่บน steam ถึงวันที่ 3 ก.ย. \nเป็นเกมแนว Life Simulation จำลองชีวิตเสมือนจริงผู้เล่นควบคุมตัวละคร Zoi ดูแลความต้องการ ความสัมพันธ์ และงานการ เหมือนเราใช้ชีวิตประจำวันจริงๆสามารถสร้าง-ตกแต่ง บ้าน เมือง และตัวละครได้อิสระพร้อมกราฟิกสวยงามและสมจริงด้วย Unreal Engine 5ที่มาพร้อมระบบ AI Smart Zoi ทำให้พฤติกรรมตัวละครสมจริงใครที่ชอบเกมใช้ชีวิตชิวๆ ต้องห้ามพลาด",
    image: "/News/news.jpg",
  },
  {
    id: 2,
    title: "Edens Zero เปิดตัว 15 ก.ค. 2025 เดโมให้ลองเล่นแล้ววันนี้!",
    description : "สายอนิเมะเตรียมลุย! Edens Zero เกมแอ็กชัน RPG ดัดแปลงจากมังงะชื่อดังของ Hiro Mashima ",
    detail: "HUNTER×HUNTER NEN×IMPACT เปิดจำหน่าย 17 กรกฏาคมนี้ !! \n\n เปิดให้ลองเล่น DEMO ได้แล้ววันนี้บน \n - PlayStation 5 \n - PC (Steam) \n\n มีกำหนดวางจำหน่ายบน PlayStation 5, Switch และ PC ผ่านทาง Steam ",
    image: "/News/news2.png",
  },
];

export const NewsDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const newsItem = newsData.find((item) => item.id === parseInt(id || "0"));

  if (!newsItem) {
    return (
      <div className="min-h-screen p-12 text-center">
        <h1 className="text-2xl font-bold">ไม่พบหน้ารายละเอียดข่าว</h1>
        <button
          onClick={() => navigate("/news")}
          className="mt-4 p-2 bg-gray-200 rounded"
        >
          กลับไปหน้าข่าว
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* ✅ ส่วน Header / Hero Section (ตามภาพตัวอย่าง) */}
      <header className="relative h-[450px] md:h-[550px] overflow-hidden flex items-end">
        {/* 1. ภาพพื้นหลัง (Background Image) */}
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-500"
          style={{
            backgroundImage: `url(${newsItem.image})`,
            // ใช้ filter เพื่อสร้างเอฟเฟกต์เบลอและมืดลงตามภาพตัวอย่าง
            filter: "brightness(0.5) blur(3px)",
            transform: "scale(1.05)", 
          }}
        />

        <div className="container mx-auto px-4 relative z-10 w-full pb-8">         
          {/* ✅ Box ข้อมูลหลัก (ภาพและไตเติ้ลตรงกลาง) */}
          <div className="max-w-xl mx-auto -mb-32 relative">
            <div className="p-9">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-auto object-cover rounded-md mb-3"
              />
              <h2 className="text-xl md:text-2xl font-bold text-center mt-3">
                {newsItem.title}
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Main Content Section (ปรับ padding ด้านบนเพื่อไม่ให้ชนกับ box) */}
      <main className="container mx-auto px-4 py-16 pt-36 flex-grow max-w-4xl">
        {/* 1. Subtitle (Headline) */}
        <h2 className="text-3xl font-bold text-center mb-10 border-b-2 border-[#fdb813] pb-3">
          {newsItem.title}
        </h2>

        {/* 2. รายละเอียดเนื้อหาข่าว */}
        <div className="text-gray-700 text-lg leading-relaxed">
          <p className="mb-6 font-semibold">{newsItem.description}</p>

          {/* เนื้อหาข่าวเต็ม: ใช้ whitespace-pre-line เพื่อคงรูปแบบการขึ้นบรรทัดใหม่จากข้อมูลถ้ามี */}
          <p className="text-xl text-gray-800 whitespace-pre-line">
            {newsItem.detail}
          </p>
        </div>

        {/* 3. ปุ่มกลับ */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300 transition font-medium"
          >
            {"<"} กลับไปหน้าข่าว
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};
