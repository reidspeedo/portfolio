'use client';

import { GraduationCap, X } from 'lucide-react';
import { useState } from 'react';

interface EducationCircleProps {
  x: number;
  y: number;
  angle: number;
  size: number;
}

export function EducationCircle({ x, y, angle, size }: EducationCircleProps) {
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
        className="rounded-full bg-emerald-500 flex flex-col items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
      >
        <GraduationCap className="w-1/2 h-1/2 text-white mb-1" />
        <span className="text-white font-semibold text-sm text-center" style={{lineHeight: 1}}>Education</span>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Education
              </h2>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-emerald-500">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">University of Technology</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2018 - 2022</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Specialized in software engineering and web development. Graduated with honors.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-emerald-500">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Advanced Web Development Bootcamp</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tech Academy</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2021</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Intensive 12-week program focusing on modern web technologies and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 