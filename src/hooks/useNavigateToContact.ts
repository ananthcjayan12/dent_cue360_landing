import { useNavigate } from 'react-router-dom';

/**
 * Returns a function that navigates to the contact section without a full
 * page reload and smoothly scrolls to it, pre-filling the enquiry textarea.
 */
export const useNavigateToContact = () => {
    const navigate = useNavigate();

    return (intent: string) => {
        navigate(`/?intent=${encodeURIComponent(intent)}`, { replace: false });
        // Scroll after React has had a tick to (re-)render the contact section
        setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
    };
};
