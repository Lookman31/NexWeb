// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { News } from "./screens/News";
import { NewsDetail } from "./screens/News/NewsDetail";
import { Video } from "./screens/Home/Services/Video/Video";
import { Review } from "./screens/Home/Services/Review/Review";
import { Photo } from "./screens/Home/Services/Photo/Photo";
import { Tournament } from "./screens/Home/Services/Tournament/Tournament";
import { Livestream } from "./screens/Home/Services/Livestream/Livestream";
import { ScrollToTop } from "./components/Scrolltotop"; 


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />       
        <Route path="/services/video" element={<Video />} />
        <Route path="/services/review" element={<Review />} />
        <Route path="/services/photo" element={<Photo />} />
        <Route path="/services/tournament" element={<Tournament />} />
        <Route path="/services/steam" element={<Livestream />} />
      </Routes>
    </Router>
  );
}

export default App;
