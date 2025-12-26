import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-dental-200 selection:text-dental-900">
            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
