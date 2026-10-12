import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Programs from "./components/Programs";
import Updates from "./components/Updates";
import Leadership from "./components/Leadership";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import InstagramSection from "./components/InstagramSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Facilities />
        <Programs />
        <Updates />
        <Leadership />
        <Events />
        <Gallery />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
