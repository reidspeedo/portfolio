import { Sun } from 'lucide-react';

interface SunCircleProps {
  x: number;
  y: number;
  angle: number;
  size: number;
  onClick?: () => void;
}

export function SunCircle({ x, y, angle, size, onClick }: SunCircleProps) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        transform: `rotate(${angle}rad)`,
      }}
      className="flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-100 group relative"
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fffde4 0%, #fde68a 50%, #fbbf24 100%)',
          boxShadow: `
            0 0 10px 2px #fde68a,
            0 0 20px 2px #fbbf24,
            0 0 30px 10px #fbbf24
          `,
        }}
      />
    </div>
  );
} 