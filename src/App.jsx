import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Advantages from "./components/Advantages";
import ServiceAreas from "./components/ServiceAreas";
import Admissions from "./components/Admissions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import heroBg from "./assets/premium_photo.avif";

function App() {
  return (
    <div
      className="parallax-wrapper min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${heroBg})`, "--hero-bg": `url(${heroBg})` }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Advantages />
        <ServiceAreas />
        <Admissions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
