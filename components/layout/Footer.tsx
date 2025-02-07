"use client";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-[0_-2px_6px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Le Hoang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
