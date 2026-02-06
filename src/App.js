
import './App.css';
import Main from './components/routing/Main';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Gallery from './pages/Gallery';
import Testimonial from './pages/Testimonial';
import Pricing from './pages/Pricing';
import FAQ from "./pages/FAQ"
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <>
    <Main/>
    <Home/>
    <About/>
    <Features/>
    <Gallery/>
    <Testimonial/>
    <Pricing/>
    <FAQ/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
