'use client';

import { AppleStyleDock } from '@/components/core/AppleStyleDock';
import { TextLoop } from '@/components/motion-primitives/text-loop';
import { PhysicsContainer } from '@/components/physics/PhysicsContainer';
import { MemojiSprite } from '@/components/memoji/MemojiSprite';
import { useTheme } from '@/components/theme/theme-provider';
import { useState } from 'react';
import { allCircles } from '@/lib/circles';

const cyclingWords = [
  { text: "is a full stack developer" },
  { text: "likes to prototype things" },
  { text: "built this portfolio" },
  { text: "likes to automate things" },
  { text: "codes for fun" },
];

const memojiConfig = {
  size: 240,
  content: (
    <MemojiSprite
      spriteSheet="/memoji-spritesheet.png"
      frameCount={324}
      frameWidth={680}
      frameHeight={480}
    />
  ),
};

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedDock, setSelectedDock] = useState('home');
  const { setTheme } = useTheme();

  const handleAnimationComplete = () => {
    setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
  };

  const handleDockIconClick = (dock: string) => {
    setSelectedDock(dock);
  };

  // Filter circles based on selected dock
  const filteredCircles = allCircles.filter(
    circle => circle.dock === 'all' || selectedDock === 'home' || circle.dock === selectedDock
  ).map(circle => {
    if (circle.id === 'sun') {
      return {
        ...circle,
        props: {
          ...circle.props,
          onClick: () => setTheme('light')
        }
      };
    }
    if (circle.id === 'moon') {
      return {
        ...circle,
        props: {
          ...circle.props,
          onClick: () => setTheme('dark')
        }
      };
    }
    return circle;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 flex flex-col items-center justify-center test-bg">
      <header className="absolute top-0 left-0 right-0 p-6 z-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300 font-['Inter']">
            reid{' '}
            <TextLoop
              className="overflow-y-clip"
              interval={2}
              transition={{
                type: 'spring',
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                  filter: 'blur(4px)',
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  filter: 'blur(0px)',
                },
                exit: {
                  y: -20,
                  rotateX: -90,
                  opacity: 0,
                  filter: 'blur(4px)',
                },
              }}
            >
              {cyclingWords.map((item, index) => (
                <span key={index} className="text-neutral-700 dark:text-neutral-300">{item.text}</span>
              ))}
            </TextLoop>
          </h1>
        </div>
      </header>
      <PhysicsContainer
        balls={filteredCircles}
        memojiConfig={memojiConfig}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            width: 400,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            pointerEvents: 'auto',
            zIndex: 10,
          }}
        >
        </div>
      </PhysicsContainer>
      <div className="absolute bottom-0 w-full z-10">
        <AppleStyleDock onIconClick={handleDockIconClick} />
      </div>
    </div>
  );
}
