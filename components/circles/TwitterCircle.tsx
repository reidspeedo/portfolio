'use client';

import { Twitter } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface TwitterCircleProps {
  x: number;
  y: number;
  angle: number;
  size: number;
  href: string;
  color: string;
}

export function TwitterCircle({ x, y, angle, size, href, color }: TwitterCircleProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href.startsWith('http')) {
      window.open(href, '_blank');
    } else {
      router.push(href);
    }
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
        cursor: 'pointer',
        backgroundColor: color,
      }}
      className="rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
    >
      <Twitter className="w-1/2 h-1/2 text-white" />
    </div>
  );
} 