import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ClinicProfitIntelligence from './components/ClinicProfitIntelligence';
import DentalToolkit from './components/DentalToolkit';
import DentalInvoicePage from './components/DentalInvoicePage';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white font-sans selection:bg-dental-200 selection:text-dental-900">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/clinic-profit-intelligence" element={<ClinicProfitIntelligence />} />
                    <Route path="/dental-toolkit" element={<DentalToolkit />} />
                    <Route path="/dental-invoice-generator" element={<DentalInvoicePage />} />
                    <Route path="/privacy" element={
                        <>
                            <Navbar />
                            <PrivacyPolicy />
                            <Footer />
                        </>
                    } />
                    <Route path="/terms" element={
                        <>
                            <Navbar />
                            <TermsOfService />
                            <Footer />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    )
}

export default App
