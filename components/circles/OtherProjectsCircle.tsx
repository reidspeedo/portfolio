'use client';

import { Code2, ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpinningText } from '@/components/motion-primitives/spinning-text';
import Image from 'next/image';

interface OtherProjectsCircleProps {
  x: number;
  y: number;
  angle: number;
  size: number;
  color: string;
}

export function OtherProjectsCircle({ x, y, angle, size, color }: OtherProjectsCircleProps) {
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
        <Code2
          className="w-1/2 h-1/2 mb-1 transition-transform duration-300 group-hover:scale-110 text-[#f9fafb] dark:text-[#1a1a1a]"
        />
        <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-75 transition-all duration-300 transform origin-center scale-0 group-hover:scale-100"
          style={{ backgroundColor: `${color}` }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
            <SpinningText
              duration={8}
              fontSize={0.9}
              radius={size / 20}
              className="font-bold text-white drop-shadow-md"
            >
              other projects • other projects • 
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
              className="bg-white dark:bg-gray-800 rounded-3xl p-0 max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row"
            >
              {/* Left column: Heading and summary */}
              <motion.div
                className="flex-1 p-8 flex flex-col justify-center bg-[#f9fafb] dark:bg-[#23272a] rounded-l-3xl min-w-[300px]"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <Code2 className="w-8 h-8" />
                  Other Projects
                </h2>
                <motion.p
                  className="text-lg text-gray-700 dark:text-gray-200 mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  A collection of smaller projects showcasing various skills and interests.
                </motion.p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Common Technologies</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs">React</span>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs">TypeScript</span>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs">Next.js</span>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs">Tailwind</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-xs">Node.js</span>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-xs">Python</span>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-xs">FastAPI</span>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-xs">PostgreSQL</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-2">Tools & APIs</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-xs">AWS</span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-xs">Alpaca API</span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-xs">Chrome Extensions</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="self-start mt-auto text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full p-2 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>

              {/* Right column: Project Details */}
              <motion.div
                className="flex-[2] p-8 space-y-8 overflow-y-auto"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {/* AmazonInfluencer */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AmazonInfluencer</h3>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/yourusername/amazoninfluencer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="https://amazoninfluencer.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A Chrome extension that helps Amazon Influencers track their earnings, analyze product performance, and optimize their content strategy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs">Chrome Extension</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs">React</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-xs">AWS</span>
                  </div>
                </div>

                {/* FormFiller */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">FormFiller</h3>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/yourusername/formfiller"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="https://formfiller.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    An intelligent form automation tool that uses AI to understand and fill out web forms automatically, saving time and reducing errors.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-xs">Python</span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-xs">OpenAI</span>
                  </div>
                </div>

                {/* AlpacaTrading */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AlpacaTrading</h3>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/yourusername/alpacatrading"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="https://alpacatrading.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    An algorithmic trading platform built on top of Alpaca's API, featuring backtesting capabilities, real-time market data analysis, and automated trading strategies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs">React</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-xs">FastAPI</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-xs">PostgreSQL</span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-xs">Alpaca API</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 