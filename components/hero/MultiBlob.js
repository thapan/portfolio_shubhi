import React, { useState, useEffect, useCallback, useRef } from 'react';

export default function MultiBlob() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [blobs, setBlobs] = useState([
    { x: 200, y: 200, targetX: 200, targetY: 200, color: '#FF0066', size: 120 },
    { x: 400, y: 300, targetX: 400, targetY: 300, color: '#0066FF', size: 80 },
    { x: 600, y: 150, targetX: 600, targetY: 150, color: '#66FF00', size: 100 },
  ]);
  const animationRef = useRef();

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    
    setBlobs(prevBlobs => prevBlobs.map((blob, index) => ({
      ...blob,
      targetX: e.clientX + (index - 1) * 150 + Math.sin(Date.now() * 0.001 + index) * 50,
      targetY: e.clientY + (index - 1) * 100 + Math.cos(Date.now() * 0.001 + index) * 30,
    })));
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      setBlobs(prevBlobs => prevBlobs.map(blob => ({
        ...blob,
        x: blob.x + (blob.targetX - blob.x) * 0.1,
        y: blob.y + (blob.targetY - blob.y) * 0.1,
      })));
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <div className="multi-blob-container">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="multi-blob-filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" />
        </filter>
      </svg>
      
      <div className="multi-blob-stage" style={{ filter: 'url(#multi-blob-filter)' }}>
        {blobs.map((blob, index) => (
          <div
            key={index}
            className="floating-blob"
            style={{
              transform: `translate(${blob.x - blob.size/2}px, ${blob.y - blob.size/2}px)`,
              width: blob.size,
              height: blob.size,
              backgroundColor: blob.color,
            }}
          />
        ))}
      </div>
    </div>
  );
}