"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  threshold?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = "",
  duration = 1000,
  delay = 0,
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `scale(${isVisible ? 1 : 0.95})`,
        transition: `all ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
