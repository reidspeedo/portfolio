import { Moon } from 'lucide-react';

interface MoonCircleProps {
  x: number;
  y: number;
  angle: number;
  size: number;
  onClick?: () => void;
}

export function MoonCircle({ x, y, angle, size, onClick }: MoonCircleProps) {
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
      className="flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: '#e6f6fa', // pale blue
          boxShadow: '0 0 60px 10px #bfc9d1', // outer glow
          overflow: 'hidden',
        }}
      >
        {/* Top-left shadow for 3D effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #b0c4d6 0%, transparent 60%)',
            opacity: 0.6,
            pointerEvents: 'none',
          }}
        />
        {/* Craters */}
        <div style={{
          position: 'absolute', top: '18%', left: '22%',
          width: '10%', height: '10%', borderRadius: '50%',
          background: '#b0c4d6', opacity: 0.5,
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '30%',
          width: '7%', height: '7%', borderRadius: '50%',
          background: '#b0c4d6', opacity: 0.4,
        }} />
        <div style={{
          position: 'absolute', top: '60%', left: '60%',
          width: '6%', height: '6%', borderRadius: '50%',
          background: '#b0c4d6', opacity: 0.4,
        }} />
        <div style={{
          position: 'absolute', top: '70%', left: '40%',
          width: '5%', height: '5%', borderRadius: '50%',
          background: '#b0c4d6', opacity: 0.3,
        }} />
        <div style={{
          position: 'absolute', top: '30%', left: '60%',
          width: '12%', height: '12%', borderRadius: '50%',
          background: '#b0c4d6', opacity: 0.5,
        }} />
        <div style={{
          position: 'absolute', top: '55%', left: '20%',
          width: '4%', height: '4%', borderRadius: '50%',
          background: '#b0c4d6', opacity: 0.3,
        }} />
        <div style={{
          position: 'absolute', top: '75%', left: '70%',
          width: '6%', height: '6%', borderRadius: '50%',
          background: '#b0c4d6', opacity: 0.4,
        }} />
        <div style={{
          position: 'absolute', top: '80%', left: '50%',
          width: '5%', height: '5%', borderRadius: '50%',
          background: '#b0c4d6', opacity: 0.3,
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '8%', height: '8%', borderRadius: '50%',
          background: '#b0c4d6', opacity: 0.4,
        }} />
        <div style={{
          position: 'absolute', top: '20%', left: '70%',
          width: '4%', height: '4%', borderRadius: '50%',
          background: '#b0c4d6', opacity: 0.3,
        }} />
      </div>
    </div>
  );
} 