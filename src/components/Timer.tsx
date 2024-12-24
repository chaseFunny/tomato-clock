import React from 'react';
import { ThemeType } from '../types/theme';

interface TimerProps {
  minutes: number;
  seconds: number;
  isRunning: boolean;
  type: 'work' | 'break';
  theme: ThemeType;
}

export const Timer: React.FC<TimerProps> = ({ minutes, seconds, isRunning, type, theme }) => {
  const getTimerClasses = () => {
    switch (theme) {
      case 'minimal':
        return 'font-mono text-8xl font-light tracking-tight';
      case 'classic':
        return 'font-serif text-7xl font-bold';
      case 'modern':
        return 'font-sans text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500';
      default:
        return '';
    }
  };

  const getStatusClasses = () => {
    switch (theme) {
      case 'minimal':
        return 'text-sm uppercase tracking-widest';
      case 'classic':
        return 'text-lg font-serif italic';
      case 'modern':
        return 'text-base font-medium';
      default:
        return '';
    }
  };

  return (
    <div className="text-center">
      <h2 className={`text-2xl font-semibold mb-4 ${theme === 'modern' ? 'uppercase tracking-wider' : ''}`}>
        {type === 'work' ? '工作时间' : '休息时间'}
      </h2>
      <div className={getTimerClasses()}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className={`mt-4 text-gray-600 ${getStatusClasses()}`}>
        {isRunning ? '专注中...' : '已暂停'}
      </div>
    </div>
  );
};