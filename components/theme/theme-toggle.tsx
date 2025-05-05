'use client';

import { useTheme } from './theme-provider';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    console.log('Theme toggle clicked, current theme:', theme);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('Setting new theme:', newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
      ) : (
        <Sun className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
      )}
    </button>
  );
} 