import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  // Hook ที่ใช้ในการตรวจจับการเปลี่ยน URL Path
  const { pathname } = useLocation();

  useEffect(() => {
    // สั่งให้หน้าต่างเลื่อนไปที่ตำแหน่ง (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Hook จะทำงานซ้ำทุกครั้งที่ URL Path เปลี่ยน

  return null; // Component นี้ไม่แสดงผลอะไรใน UI
};