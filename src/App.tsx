import React, { useState, useEffect } from 'react';
import { Timer } from './components/Timer';
import { Controls } from './components/Controls';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { ThemeType } from './types/theme';
import ImageUploader from './components/ImageUploader';

function App() {
  const [mode, setMode] = useState<'work' | 'break'>('work');
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [theme, setTheme] = useState<ThemeType>('modern');

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    let interval: number;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleModeToggle();
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(mode === 'work' ? 25 * 60 : 5 * 60);
  };

  const handleModeToggle = () => {
    setIsRunning(false);
    setMode((currentMode) => {
      const newMode = currentMode === 'work' ? 'break' : 'work';
      setTimeLeft(newMode === 'work' ? 25 * 60 : 5 * 60);
      return newMode;
    });
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'minimal':
        return 'bg-white';
      case 'classic':
        return 'bg-gray-50';
      case 'modern':
        return 'bg-gradient-to-br from-gray-50 to-gray-100';
      default:
        return '';
    }
  };

  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
      <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
      <div className={`${getThemeClasses()} p-8 rounded-xl shadow-lg w-96`}>
        <h1 className={`text-3xl font-bold text-center mb-8 ${
          theme === 'modern' ? 'bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900' : ''
        }`}>
          番茄时钟
        </h1>
        <ImageUploader />
        <Timer
          minutes={minutes}
          seconds={seconds}
          isRunning={isRunning}
          type={mode}
          theme={theme}
        />
        <Controls
          isRunning={isRunning}
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
          onToggleMode={handleModeToggle}
          theme={theme}
        />
      </div>
    
    </div>
   
  );
}

export default App;