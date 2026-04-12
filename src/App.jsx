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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
