import React from 'react';

export function PhysicsBall({
  x,
  y,
  angle,
  size,
  color,
  content,
}: {
  x: number;
  y: number;
  angle: number;
  size: number;
  color: string;
  content?: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        overflow: 'hidden',
        pointerEvents: 'none',
        transform: `rotate(${angle}rad)`
      }}
    >
      {typeof content === 'string' ? (
        <svg width={size} height={size} style={{ position: 'absolute', left: 0, top: 0 }}>
          <defs>
            <path
              id={`circlePath-${x}-${y}`}
              d={`M ${size / 2},${size / 2} m -${size / 2 - 8},0 a${size / 2 - 8},${size / 2 - 8} 0 1,1 ${size - 16},0 a${size / 2 - 8},${size / 2 - 8} 0 1,1 -${size - 16},0`}
            />
          </defs>
          <text className="fill-neutral-700 dark:fill-neutral-300" fontSize={Math.max(12, size / 12)} fontFamily="sans-serif">
            <textPath
              href={`#circlePath-${x}-${y}`}
              startOffset="25%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {content}
            </textPath>
          </text>
        </svg>
      ) : content ? (
        content
      ) : (
        <div style={{ width: '100%', height: '100%', background: color }} />
      )}
    </div>
  );
} 