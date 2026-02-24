import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white font-sans selection:bg-dental-200 selection:text-dental-900">
                <Routes>
                    <Route path="/" element={<Landing />} />
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
