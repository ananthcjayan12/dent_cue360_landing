import Navbar from './Navbar';
import Hero from './Hero';
import WhatsAppFeature from './WhatsAppFeature';
import Features from './Features';
import ROICalculator from './ROICalculator';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <WhatsAppFeature />
            <Features />
            <ROICalculator />
            <Pricing />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

export default Landing;
