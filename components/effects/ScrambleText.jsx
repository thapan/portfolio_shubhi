import React, { useState, useEffect, useRef } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

export default function ScrambleText({ 
  children, 
  className = '', 
  speed = 50, 
  scrambleDuration = 800 
}) {
  const [displayText, setDisplayText] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const scrambleText = () => {
    if (isScrambling) return;
    
    setIsScrambling(true);
    let iteration = 0;
    const originalText = children;

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => {
        return originalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            if (letter === ' ') return ' ';
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join('');
      });

      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
        setIsScrambling(false);
      }

      iteration += 1/3;
    }, speed);

    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        setDisplayText(originalText);
        setIsScrambling(false);
      }
    }, scrambleDuration);
  };

  const resetText = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDisplayText(children);
    setIsScrambling(false);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <span
      className={`scramble-text ${className}`}
      onMouseEnter={scrambleText}
      onMouseLeave={resetText}
      style={{ fontFamily: 'monospace', letterSpacing: isScrambling ? '0.1em' : 'normal' }}
    >
      {displayText}
    </span>
  );
}