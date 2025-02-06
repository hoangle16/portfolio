"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface SectionProps {
  children: React.ReactNode;
  id: string;
}

export const Section = ({ children, id }: SectionProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen ${isVisible ? "animate-fade" : "opacity-0"}`}
    >
      {children}
    </section>
  );
};
