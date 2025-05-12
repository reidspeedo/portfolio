'use client';

import { Signature, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpinningText } from '@/components/motion-primitives/spinning-text';

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
        <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-75 transition-all duration-300 transform origin-center scale-0 group-hover:scale-100"
          style={{ backgroundColor: `${color}` }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
          <SpinningText
                duration={8}
                fontSize={0.9}
                radius={size / 18.5}
                className="font-bold text-white drop-shadow-md"
              >
                My Story • My Story • My Story •
          </SpinningText>
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
                  <Signature className="w-8 h-8" />
                  My Story
                </h2>
                <motion.p
                  className="text-lg text-gray-700 dark:text-gray-200 mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  A journey of curiosity, creativity, and a passion for building beautiful web experiences.
                </motion.p>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="self-start mt-auto text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full p-2 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>

              {/* Right column: Story sections */}
              <motion.div
                className="flex-[2] p-8 space-y-8 overflow-y-auto"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.div
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">The Beginning</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm a passionate software developer with a strong focus on creating beautiful and functional web applications.
                    My journey in tech started with a curiosity about how things work, which led me to explore programming and design.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">My Expertise</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    I specialize in modern web technologies and enjoy working with React, TypeScript, and various animation libraries
                    to create engaging user experiences. My approach combines technical excellence with a keen eye for design and user experience.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What Drives Me</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    I believe in creating software that not only solves problems but also delights users. Every project is an opportunity
                    to learn, grow, and make a positive impact through technology.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 