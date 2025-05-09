'use client';

import { Twitter } from 'lucide-react';
import { useState } from 'react';

interface TwitterCircleProps {
  x: number;
  y: number;
  angle: number;
  size: number;
  color: string;
}

export function TwitterCircle({ x, y, angle, size, color }: TwitterCircleProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div
      onClick={() => setIsDialogOpen(true)}
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
      <Twitter className="w-1/2 h-1/2 text-white mb-1 transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform origin-center scale-0 group-hover:scale-100">
        <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
          Twitter
        </span>
      </div>
    </div>
  );
} 