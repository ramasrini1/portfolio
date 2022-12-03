import Navbar from './sections/navbar/Navbar';
import Header from  './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Testimonials from './sections/testimonials/Testimonials';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';


const App = () => {
  return (
    // <div>Hello World</div>
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App
