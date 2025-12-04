import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef, useState } from "react";

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
  />
));
Card.displayName = "Card";

const CardSwap = ({
  width = 400,
  height = 300,
  cardDistance = 80,
  verticalDistance = 60,
  delay = 4000,
  pauseOnHover = true,
  onCardClick,
  skewAmount = 8,
  children,
}) => {
  const childArr = useMemo(() => Children.toArray(children), [children]);
  const [order, setOrder] = useState(() => Array.from({ length: childArr.length }, (_, i) => i));
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef();

  const getSlotStyle = (i, total) => {
    return {
      transform: `translateX(${i * cardDistance}px) translateY(${-i * verticalDistance}px) translateZ(${-i * cardDistance * 1.5}px) skewY(${skewAmount}deg)`,
      zIndex: total - i,
    };
  };

  const swap = () => {
    setOrder(currentOrder => {
      if (currentOrder.length < 2) return currentOrder;
      const [front, ...rest] = currentOrder;
      return [...rest, front];
    });
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(swap, delay);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, delay, childArr.length]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const rendered = childArr.map((child, i) => {
    const orderIndex = order.findIndex(item => item === i);

    return isValidElement(child)
      ? cloneElement(child, {
          key: i,
          style: {
            width,
            height,
            ...getSlotStyle(orderIndex, childArr.length),
            transition: 'transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55), z-index 0.8s',
            ...(child.props.style ?? {}),
          },
          onClick: (e) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          },
        })
      : child;
  });

  return (
    <div
      className="card-swap-container"
      style={{ width, height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;