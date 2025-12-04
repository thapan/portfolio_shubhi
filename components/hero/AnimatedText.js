import React, { useEffect, useRef } from 'react';

export default function AnimatedText({ text, className = "" }) {
  const textRef = useRef(null);
  
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;
    
    const letters = element.querySelectorAll('.letter');
    
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  const splitText = text.split('').map((char, index) => (
    <span key={index} className="letter" style={{ '--i': index }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <div ref={textRef} className={`animated-text ${className}`}>
      {splitText}
    </div>
  );
}