'use client';

import { useEffect, useState, useRef } from 'react';

interface MemojiSpriteProps {
  spriteSheet: string;
  frameCount: number;
  frameWidth: number;
  frameHeight: number;
}

// Easing function for smooth transitions
function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function MemojiSprite({ 
  spriteSheet, 
  frameCount, 
  frameWidth, 
  frameHeight,
}: MemojiSpriteProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [targetFrame, setTargetFrame] = useState(0);
  const animationFrame = useRef<number | undefined>(undefined);
  const lastUpdate = useRef<number>(0);

  // Smooth frame transition
  useEffect(() => {
    if (!isClient) return;

    const animate = (timestamp: number) => {
      if (!lastUpdate.current) lastUpdate.current = timestamp;
      const delta = timestamp - lastUpdate.current;
      
      if (delta > 16) { // ~60fps
        if (currentFrame !== targetFrame) {
          const diff = targetFrame - currentFrame;
          const progress = easeInOutQuad(Math.min(delta / 50, 1));
          const step = diff * progress;
          setCurrentFrame(prev => {
            const newFrame = prev + step;
            return Math.abs(newFrame - targetFrame) < 0.1 ? targetFrame : newFrame;
          });
        }
        lastUpdate.current = timestamp;
      }
      
      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [currentFrame, targetFrame, isClient]);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const cursorX = e.clientX;
      const cursorY = e.clientY;
      
      // Add padding to the edges
      const paddingX = screenWidth * 0.1;
      const paddingY = screenHeight * 0.1;
      const effectiveWidth = screenWidth + (paddingX * 2);
      const effectiveHeight = screenHeight + (paddingY * 2);
      const adjustedX = cursorX + paddingX;
      const adjustedY = cursorY + paddingY;
      
      // Calculate grid position (18x18) with smoothing
      const gridX = Math.floor((adjustedX / effectiveWidth) * 18);
      const gridY = Math.floor((adjustedY / effectiveHeight) * 18);
      
      // Convert 2D grid position to 1D frame index
      const frameIndex = gridY * 18 + gridX;
      const newFrame = Math.min(Math.max(frameIndex, 0), frameCount - 1);
      
      setTargetFrame(newFrame);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [frameCount]);

  // Preload the sprite sheet
  useEffect(() => {
    const img = new Image();
    img.src = spriteSheet;
    img.onload = () => setIsLoaded(true);
  }, [spriteSheet]);

  if (!isClient || !isLoaded) {
    return (
      <div 
        className="w-full h-full bg-gray-200 dark:bg-neutral-800 animate-pulse"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    );
  }

  return (
    <div className="w-full h-full relative">
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: `${frameWidth}px`,
          height: `${frameHeight}px`,
          backgroundImage: `url(${spriteSheet})`,
          backgroundSize: `${frameWidth * 18}px ${frameHeight * 18}px`,
          backgroundPosition: `-${(Math.floor(currentFrame) % 18) * frameWidth}px -${Math.floor(Math.floor(currentFrame) / 18) * frameHeight}px`,
          imageRendering: 'pixelated',
          transform: `translate(-50%, -49%) scale(${Math.max(
            256 / frameWidth,
            256 / frameHeight
          )})`,
          transformOrigin: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      />
    </div>
  );
} 