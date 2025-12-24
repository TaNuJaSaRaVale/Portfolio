import Navbar from "./components/Navbar"
import Intro from "./sections/Intro"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Profiles from "./sections/Profiles";
import Contact from "./sections/Contact"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Profiles />
        <Contact />
        <Footer />
      </main>

    </div>
  )
}

export default App
