'use client';

import { Github } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface GithubCircleProps {
  x: number;
  y: number;
  angle: number;
  size: number;
  href: string;
  color: string;
}

export function GithubCircle({ x, y, angle, size, href, color }: GithubCircleProps) {
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
      className="rounded-full flex items-center justify-center hover:opacity-90 transition-opacity group relative"
    >
      <Github className="w-1/2 h-1/2 text-white" />
      <span className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
        <span className="text-white font-medium">GitHub</span>
      </span>
    </div>
  );
} 