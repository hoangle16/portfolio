"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  duration?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
  threshold = 0.1,
  duration = 1000,
  delay = 0,
  direction = "up",
}) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold });

  const getDirectionStyle = () => {
    const baseTransform = isVisible ? "translate(0, 0)" : "";
    const baseOpacity = isVisible ? 1 : 0;

    const initialTransform = {
      up: "translateY(50px)",
      down: "translateY(-50px)",
      left: "translateX(50px)",
      right: "translateX(-50px)",
    };

    return {
      transform: isVisible ? baseTransform : initialTransform[direction],
      opacity: baseOpacity,
      transition: `all ${duration}ms ease-out ${delay}ms`,
    };
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        ...getDirectionStyle(),
      }}
    >
      {children}
    </div>
  );
};
