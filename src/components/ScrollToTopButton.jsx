import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import '../styles/components/_scrollToTopButton.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={handleScrollTop} title="Ir arriba">
        <ArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTopButton;