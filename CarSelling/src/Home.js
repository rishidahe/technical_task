import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Title from "./Title";
import RecommendationSection from "./RecommendationSection";
import ServiceSection from "./ServiceSection";
import AboutUs from "./AboutUs";


function Home() {
    return (
        <div>
      <Navbar />
      <Title leadText="Vehicle Configurator" />
      {/* <RecommendationSection />
      <ServiceSection />
      <AboutUs/> */}
      <Footer />
        </div>
    )
}
export default Home;
