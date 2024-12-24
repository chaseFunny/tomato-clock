import React from 'react';
import { ThemeType } from '../types/theme';

interface ThemeSwitcherProps {
  currentTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="absolute top-4 right-4 flex gap-2">
      {(['minimal', 'classic', 'modern'] as ThemeType[]).map((theme) => (
        <button
          key={theme}
          onClick={() => onThemeChange(theme)}
          className={`px-4 py-2 rounded-lg capitalize transition-all ${
            currentTheme === theme
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {theme}
        </button>
      ))}
    </div>
  );
};