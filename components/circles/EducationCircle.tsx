'use client';

import { GraduationCap, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpinningText } from '@/components/motion-primitives/spinning-text';

interface EducationCircleProps {
  x: number;
  y: number;
  angle: number;
  size: number;
  color: string;
}

export function EducationCircle({ x, y, angle, size, color }: EducationCircleProps) {
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
        <GraduationCap
          className="w-1/2 h-1/2 mb-1 transition-transform duration-300 group-hover:scale-110 text-[#f9fafb] dark:text-[#1a1a1a]"
        />
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-75 transition-all duration-300 transform origin-center scale-0 group-hover:scale-100 flex items-center justify-center"
          style={{ backgroundColor: `${color}` }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
            <span className="w-full flex items-center justify-center">
              <SpinningText
                duration={8}
                fontSize={0.9}
                radius={size / 20}
                className="font-bold text-white drop-shadow-md"
              > 
                education • education • 
              </SpinningText>
            </span>
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{
                borderRadius: '50%',
                scale: 0.2,
                opacity: 0,
              }}
              animate={{
                borderRadius: '1.5rem',
                scale: 1,
                opacity: 1,
              }}
              exit={{
                borderRadius: '50%',
                scale: 0.2,
                opacity: 0,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-0 max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row"
            >
              {/* Left column: Heading and summary */}
              <motion.div
                className="flex-1 p-8 flex flex-col justify-center bg-[#f9fafb] dark:bg-[#23272a] rounded-l-3xl min-w-[260px]"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8" />
                  Education
                </h2>
                
                <motion.p
                  className="text-lg text-gray-700 dark:text-gray-200 mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  Self-taught software engineer with a formal background in systems and engineering design.
                </motion.p>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="self-start mt-auto text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full p-2 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>

              {/* Right column: Timeline */}
              <motion.div
                className="flex-[2] p-8 space-y-8 overflow-y-auto"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="relative pl-8 border-l-2 border-emerald-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Science in Mechanical Engineering</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Ohio State University</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2011 - 2016</p>
                  </div>
                  <motion.p
                    className="text-gray-700 dark:text-gray-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                  >
                    Focused on systems design, embedded software, and cross-disciplinary engineering.
                  </motion.p>
                </div>

                {/* <div className="relative pl-8 border-l-2 border-emerald-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Advanced Web Development Bootcamp</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Tech Academy</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2021</p>
                  </div>
                  <motion.p
                    className="text-gray-700 dark:text-gray-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                  >
                    Intensive 12-week program focusing on modern web technologies and best practices.
                  </motion.p>
                </div> */}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 