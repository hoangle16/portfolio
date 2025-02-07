"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-200 p-2 rounded-full shadow-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-all z-50"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};
