import "./App.css";
import Hero from "./components/Hero";
import ContentBox from "./components/ContentBox1";
import ContentBox2 from "./components/ContentBox2";
import ContentBox3 from "./components/ContentBox3";
import Sources from "./components/Sources";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Aos from "aos";
import { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MiscNotes from "./components/MiscNotes";
const App = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <div>
      {/* <Router> */}
      <Navbar />
      {/* <Routes> */}
      {/* <Route path="/miscnotes" Component={MiscNotes} />
          <Route path="/pathofbuddha" Component={App} />
          <Route path="/" Component={App} />
        </Routes> */}
      <Hero />
      <ContentBox />
      <div style={{ position: "relative", height: "70vh", width: "100%" }}>
        <img
          src="Evidence.jpg"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            overflow: "hidden",
          }}
        />
      </div>
      <ContentBox2 />
      <div style={{ position: "relative", height: "70vh", width: "100%" }}>
        <img
          src="MonkInCrowd.jpg"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            overflow: "hidden",
          }}
          data-aos="fade-up"
        />
      </div>
      <ContentBox3 />
      <div style={{ position: "relative", height: "70vh", width: "100%" }}>
        <img
          className="walkMonk"
          src="walkMonk.jpg"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            overflow: "hidden",
          }}
          data-aos="fade-up"
        />
      </div>
      <Sources />

      <Footer />
      {/* </Router> */}
      {/* <ContentBox /> */}
    </div>
  );
};

export default App;
