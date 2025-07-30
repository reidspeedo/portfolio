'use client';

import { Github } from 'lucide-react';
import { useState } from 'react';
import { SpinningText } from '@/components/motion-primitives/spinning-text';

interface GithubCircleProps {
  x: number;
  y: number;
  angle: number;
  size: number;
  color: string;
  href: string;
}

export function GithubCircle({ x, y, angle, size, color, href }: GithubCircleProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'absolute',
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        transform: `rotate(${angle}rad)`,
        backgroundColor: color,
      }}
      className={`rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer group relative overflow-hidden`}
    >
      <Github className="w-1/2 h-1/2 text-white mb-1 transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform origin-center scale-0 group-hover:scale-100">
        <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
        <SpinningText
                duration={8}
                fontSize={0.9}
                radius={size / 20}
                className="font-bold text-white drop-shadow-md"
              >
                Github • Github • Github •
              </SpinningText>
        </span>
      </div>
    </div>
  );
} 