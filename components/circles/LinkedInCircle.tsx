'use client';

import { Linkedin } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface LinkedInCircleProps {
  x: number;
  y: number;
  angle: number;
  size: number;
  href: string;
}

export function LinkedInCircle({ x, y, angle, size, href }: LinkedInCircleProps) {
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
      }}
      className="rounded-full bg-[#0077B5] flex items-center justify-center hover:opacity-90 transition-opacity group relative"
    >
      <Linkedin className="w-1/2 h-1/2 text-white" />
      <span className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
        <span className="text-white font-medium">LinkedIn</span>
      </span>
    </div>
  );
} 