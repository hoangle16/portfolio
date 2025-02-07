import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  toggleDarkMode,
  isDarkMode,
}) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Sun
          size={20}
          className={`absolute text-yellow-500 transition-all duration-500 ease-in-out ${
            isDarkMode ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
        />
        <Moon
          size={20}
          className={`absolute text-blue-400 transition-all duration-500 ease-in-out ${
            isDarkMode ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
          }`}
        />
      </div>
    </button>
  );
};
