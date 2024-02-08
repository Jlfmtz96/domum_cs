
import Navbar from "../components/NavbarSec";
import Nosotros from "../components/Nosotros";
import Especialidad from '../components/Especialidad'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Linetime from "../components/Linetime";


export default function About() {
  return (
    <div>
        <Navbar />
        <Nosotros />
        <Linetime />
        <Especialidad />
        <Team />
        <Footer />
    </div>
  )
}
