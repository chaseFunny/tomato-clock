import React from 'react';
import { ThemeType } from '../types/theme';

interface ControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onToggleMode: () => void;
  theme: ThemeType;
}

export const Controls: React.FC<ControlsProps> = ({
  isRunning,
  onStart,
  onPause,
  onReset,
  onToggleMode,
  theme,
}) => {
  const getButtonClasses = (baseColor: string) => {
    switch (theme) {
      case 'minimal':
        return `border-2 border-${baseColor}-500 text-${baseColor}-500 bg-transparent hover:bg-${baseColor}-500 hover:text-white transition-colors px-6 py-2 rounded-lg`;
      case 'classic':
        return `bg-${baseColor}-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-${baseColor}-600 transition-colors`;
      case 'modern':
        return `bg-gradient-to-r from-${baseColor}-400 to-${baseColor}-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all`;
      default:
        return '';
    }
  };

  return (
    <div className="flex gap-4 justify-center mt-8">
      {!isRunning ? (
        <button
          onClick={onStart}
          className={getButtonClasses('green')}
        >
          开始
        </button>
      ) : (
        <button
          onClick={onPause}
          className={getButtonClasses('yellow')}
        >
          暂停
        </button>
      )}
      <button
        onClick={onReset}
        className={getButtonClasses('red')}
      >
        重置
      </button>
      <button
        onClick={onToggleMode}
        className={getButtonClasses('blue')}
      >
        切换模式
      </button>
    </div>
  );
};