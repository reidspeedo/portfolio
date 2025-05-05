'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: 'light',
  setTheme: () => null,
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Only run on client-side
  useEffect(() => {
    console.log('Initial mount - checking theme');
    setMounted(true);
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    console.log('Saved theme:', savedTheme);
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Only use system preference if no saved preference exists
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log('System prefers dark:', systemPrefersDark);
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    console.log('Theme changed to:', theme);
    const root = window.document.documentElement;
    const body = window.document.body;
    
    // Update localStorage
    localStorage.setItem('theme', theme);
    
    // Update Tailwind dark mode class
    if (theme === 'dark') {
      root.classList.add('dark');
      console.log('Added dark class to root');
    } else {
      root.classList.remove('dark');
      console.log('Removed dark class from root');
    }
  }, [theme, mounted]);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 