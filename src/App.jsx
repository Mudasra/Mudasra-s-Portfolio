import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Services } from "./components/Services/Services"
import { Testimonials } from "./components/Testimonials/Testimonials"

function App() {

  return (
    <div style={{ }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
