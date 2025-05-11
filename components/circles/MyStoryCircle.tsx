'use client';

import { Signature, X } from 'lucide-react';
import { useState } from 'react';

interface MyStoryCircleProps {
  x: number;
  y: number;
  angle: number;
  size: number;
  color: string;
}

export function MyStoryCircle({ x, y, angle, size, color }: MyStoryCircleProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsDialogOpen(true)}
        style={{
          position: 'absolute',
          left: x - size / 2,
          top: y - size / 2,
          width: size,
          height: size,
          transform: `rotate(${angle}rad)`,
        }}
        className="rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer group relative overflow-hidden bg-[#2b3137] dark:bg-[#f9fafb]"
      >
        <Signature
          className="w-1/2 h-1/2 mb-1 transition-transform duration-300 group-hover:scale-110 text-[#f9fafb] dark:text-[#1a1a1a]"
        />
        <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-90 transition-all duration-300 transform origin-center scale-0 group-hover:scale-100"
          style={{ backgroundColor: `${color}` }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
            My Story
          </span>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Signature className="w-6 h-6" />
                My Story
              </h2>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">The Beginning</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm a passionate software developer with a strong focus on creating beautiful and functional web applications.
                  My journey in tech started with a curiosity about how things work, which led me to explore programming and design.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">My Expertise</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I specialize in modern web technologies and enjoy working with React, TypeScript, and various animation libraries
                  to create engaging user experiences. My approach combines technical excellence with a keen eye for design and user experience.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What Drives Me</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I believe in creating software that not only solves problems but also delights users. Every project is an opportunity
                  to learn, grow, and make a positive impact through technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 