// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { BusinessUnits } from "./screens/BusinessUnits";
import { ContactUs } from "./screens/ContactUs/ContactUs";
// import { News } from "./screens/News";
// import { NewsDetail } from "./screens/News/NewsDetail";
import { Video } from "./screens/Home/Services/Video/Video";
import { Review } from "./screens/Home/Services/Review/Review";
import { Photo } from "./screens/Home/Services/Photo/Photo";
import { Tournament } from "./screens/Home/Services/Tournament/Tournament";
import { Livestream } from "./screens/Home/Services/Livestream/Livestream";
import { Group5 } from "./screens/Home/Portfolio/group5/group5";
import { Group1 } from "./screens/Home/Portfolio/group1/group1";
import { Group2 } from "./screens/Home/Portfolio/group2/group2";
import { Group3 } from "./screens/Home/Portfolio/group3/group3";
import { Group4 } from "./screens/Home/Portfolio/group4/group4";
import { ScrollToTop } from "./components/Scrolltotop"; 


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/businessunits" element={<BusinessUnits />} />
        <Route path="contactUs" element={<ContactUs />} />
        {/* <Route path="/news" element={<News />} /> */}
        {/* <Route path="/news/:id" element={<NewsDetail />} />        */}
        <Route path="/services/video" element={<Video />} />
        <Route path="/services/review" element={<Review />} />
        <Route path="/services/photo" element={<Photo />} />
        <Route path="/services/tournament" element={<Tournament />} />
        <Route path="/services/steam" element={<Livestream />} />
        <Route path="/portfolio/group5" element={<Group5 />} />
        <Route path="/portfolio/group1" element={<Group1 />} />
        <Route path="/portfolio/group2" element={<Group2 />} />
        <Route path="/portfolio/group3" element={<Group3 />} />
        <Route path="/portfolio/group4" element={<Group4 />} />
      </Routes>
    </Router>
  );
}

export default App;
