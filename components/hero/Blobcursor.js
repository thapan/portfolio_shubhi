import React, { useState, useEffect, useCallback, useRef } from 'react';

export default function BlobCursor({
  zIndex = -1,
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const rafId = useRef();

  const handleMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', (e) => handleMove(e.touches[0]));

    const animate = () => {
      setTrailPositions(prev => {
        const newTrails = [...prev];
        // Lead blob follows cursor directly
        newTrails[0] = {
            x: newTrails[0].x + (position.x - newTrails[0].x) * 0.2,
            y: newTrails[0].y + (position.y - newTrails[0].y) * 0.2
        };
        // Subsequent blobs follow the one in front
        for (let i = 1; i < newTrails.length; i++) {
            newTrails[i] = {
                x: newTrails[i].x + (newTrails[i-1].x - newTrails[i].x) * 0.2,
                y: newTrails[i].y + (newTrails[i-1].y - newTrails[i].y) * 0.2
            };
        }
        return newTrails;
      });
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', (e) => e.touches[0] && handleMove(e.touches[0]));
      cancelAnimationFrame(rafId.current);
    };
  }, [position, handleMove]);

  const sizes = [80, 150, 100];
  const innerSizes = [25, 45, 35];
  const opacities = [0.8, 0.6, 0.7];
  
  return (
    <div
      className="blob-container"
      style={{ zIndex }}
    >
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="blob-filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15" result="blob" />
        </filter>
      </svg>
      <div className="blob-main" style={{ filter: 'url(#blob-filter)' }}>
        {trailPositions.map((pos, i) => (
          <div
            key={i}
            className="blob"
            style={{
              width: sizes[i],
              height: sizes[i],
              transform: `translate(${pos.x - sizes[i]/2}px, ${pos.y - sizes[i]/2}px)`,
              opacity: opacities[i],
            }}
          >
            <div
              className="inner-dot"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}