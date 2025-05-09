'use client';

import { Briefcase, Building2, X } from 'lucide-react';
import { useState } from 'react';

interface WorkExperienceCircleProps {
  x: number;
  y: number;
  angle: number;
  size: number;
  color: string;
}

export function WorkExperienceCircle({ x, y, angle, size, color }: WorkExperienceCircleProps) {
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
        className="rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer group relative overflow-hidden bg-[#1a1a1a] dark:bg-[#f9fafb]"
      >
        <Briefcase
          className="w-1/2 h-1/2 mb-1 transition-transform duration-300 group-hover:scale-110 text-[#f9fafb] dark:text-[#1a1a1a]"
        />
        <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform origin-center scale-0 group-hover:scale-100"
          style={{ backgroundColor: `${color}` }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
            Work Experience
          </span>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                Work Experience
              </h2>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Senior Software Engineer</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">TechCorp Inc.</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2021 - Present</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Led development of company's flagship product using React and TypeScript</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Developer</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">StartUp Solutions</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2019 - 2021</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Developed and maintained web applications using modern JavaScript frameworks</li>
                  <li>Collaborated with design team to implement responsive UIs</li>
                  <li>Optimized application performance and reduced load times</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 