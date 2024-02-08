import About from "../components/About";
import Arquitectos from "../components/Arquitectos";
import Blog from "../components/Blog";
import Desarrollos from "../components/Desarrollos";
import Especialidad from "../components/Especialidad";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Team from "../components/Team";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Especialidad />
    <Desarrollos />
    <Arquitectos />
    <Team />
    <Blog />
    <Footer />
    </>
  )
}
