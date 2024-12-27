import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed z-[1000] text-3xl bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ display: isVisible ? 'block' : 'none' }}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;