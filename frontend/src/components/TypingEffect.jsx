import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, delay = 50, onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <span className="flex items-center">
      {currentText}
      {currentIndex < text.length && <span className="w-2 h-4 bg-brand-accent ml-1 cursor-blink"></span>}
    </span>
  );
};

export default TypingEffect;
