import React, { useEffect, useRef, useCallback, useState } from "react";

const TargetCursor = ({
  targetSelector = ".cursor-target",
  hideDefaultCursor = true,
}) => {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isOverTarget, setIsOverTarget] = useState(false);
  const [targetBounds, setTargetBounds] = useState(null);
  
  const moveCursor = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (hideDefaultCursor) {
      document.body.style.cursor = "none";
      document.querySelectorAll(targetSelector).forEach(el => {
        el.style.cursor = "none";
      });
    }

    window.addEventListener("mousemove", moveCursor);

    const handleMouseOver = (e) => {
      const target = e.target.closest(targetSelector);
      if (target) {
        setIsOverTarget(true);
        setTargetBounds(target.getBoundingClientRect());
      }
    };
    
    const handleMouseOut = (e) => {
      const target = e.target.closest(targetSelector);
      if(target) {
        setIsOverTarget(false);
        setTargetBounds(null);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      if (hideDefaultCursor) {
        document.body.style.cursor = "auto";
      }
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [targetSelector, hideDefaultCursor, moveCursor]);

  const getCornerStyles = () => {
    const cornerSize = 16;
    const borderWidth = 4;
    
    if (isOverTarget && targetBounds) {
        const { top, left, width, height } = targetBounds;
        const baseProps = {
            transition: 'transform 0.2s ease-out',
        };
        return {
            tl: { ...baseProps, transform: `translate(${left - cornerSize}px, ${top - cornerSize}px)` },
            tr: { ...baseProps, transform: `translate(${left + width - borderWidth}px, ${top - cornerSize}px)` },
            br: { ...baseProps, transform: `translate(${left + width - borderWidth}px, ${top + height - borderWidth}px)` },
            bl: { ...baseProps, transform: `translate(${left - cornerSize}px, ${top + height - borderWidth}px)` },
        };
    }
    
    const baseProps = {
        transition: 'transform 0.2s ease-in',
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%,-50%)`,
    };

    const spread = cornerSize * 1.5;

    return {
        tl: { ...baseProps, transform: `translate(${position.x-spread}px, ${position.y-spread}px)` },
        tr: { ...baseProps, transform: `translate(${position.x+spread-cornerSize}px, ${position.y-spread}px)` },
        br: { ...baseProps, transform: `translate(${position.x+spread-cornerSize}px, ${position.y+spread-cornerSize}px)` },
        bl: { ...baseProps, transform: `translate(${position.x-spread}px, ${position.y+spread-cornerSize}px)` },
    };
  };

  const cornerStyles = getCornerStyles();

  return (
    <div ref={cursorRef} className={`target-cursor-wrapper ${isOverTarget ? 'is-active' : ''}`}>
      <div className="target-cursor-dot" style={{ transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)` }}/>
      <div className="target-cursor-corner corner-tl" style={cornerStyles.tl} />
      <div className="target-cursor-corner corner-tr" style={cornerStyles.tr} />
      <div className="target-cursor-corner corner-br" style={cornerStyles.br} />
      <div className="target-cursor-corner corner-bl" style={cornerStyles.bl} />
    </div>
  );
};

export default TargetCursor;