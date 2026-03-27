import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Doctors from './components/Doctors'
import Treatments from './components/Treatments'
import ClinicalSuccess from './components/ClinicalSuccess'
import TestimonialsConsult from './components/TestimonialsConsult'
import Footer from './components/Footer'

function App() {
  return (
    <div className="max-w-97.5 mx-auto bg-[#fafaf7] overflow-hidden relative">
      <Navbar />
      <Hero />
      <About />
      <Doctors />
      <Treatments />
      <ClinicalSuccess />
      <TestimonialsConsult />
      <Footer />
    </div>
  )
}

export default App