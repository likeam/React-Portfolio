import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
  <div className="flex flex-col gap-40 bg-gradient-to-b from-black to-slate-800 ">
    <Navbar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    <SocialLinks />
  </div>
 
    )
}