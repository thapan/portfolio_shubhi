import React, { useEffect, useRef } from 'react';

export default function InfiniteMarquee({ 
  text = "HELLO", 
  speed = 1, 
  className = "",
  gradient = true 
}) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const marqueeContent = marquee.querySelector('.marquee-content');
    if (!marqueeContent) return;

    // Clone content for seamless loop
    const clone = marqueeContent.cloneNode(true);
    marquee.appendChild(clone);

    return () => {
      if (clone && marquee.contains(clone)) {
        marquee.removeChild(clone);
      }
    };
  }, []);

  // Create repeated text
  const repeatedText = Array(20).fill(text).join(' • ');

  return (
    <div className={`infinite-marquee ${className}`} ref={marqueeRef}>
      <div 
        className="marquee-content" 
        style={{ 
          '--speed': `${speed}s`,
          animation: `marqueeScroll var(--speed) linear infinite`
        }}
      >
        {repeatedText}
      </div>
      {gradient && (
        <>
          <div className="marquee-gradient marquee-gradient-left"></div>
          <div className="marquee-gradient marquee-gradient-right"></div>
        </>
      )}
    </div>
  );
}