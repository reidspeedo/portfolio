'use client';

import { Briefcase, Building2, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpinningText } from '@/components/motion-primitives/spinning-text';

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
        className="rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer group relative overflow-hidden bg-[#2b3137] dark:bg-[#f9fafb]"
      >
        <Briefcase
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
                experience • experience • experience •  
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
              className="bg-white dark:bg-gray-800 rounded-3xl p-0 max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl flex flex-col lg:flex-row"
            >
              {/* Left column: Heading and summary */}
              <motion.div
                className="flex-1 p-8 flex flex-col justify-center bg-[#f9fafb] dark:bg-[#23272a] rounded-l-3xl min-w-[260px]"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <Building2 className="w-8 h-8" />
                  Work Experience
                </h2>
                <motion.p
                  className="text-lg text-gray-700 dark:text-gray-200 mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  Integration engineering and AI product development with a focus on scalable solutions and rapid prototyping.
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
                className="flex-[2] p-8 space-y-6 overflow-y-auto"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Workday Integration Engineer</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Enterprise Integration Solutions</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2017 - Present</span>
                  </div>
                  <motion.ul
                    className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                  >
                    <li>Partner with cross-functional teams to design and deliver scalable integration solutions for large-scale Workday deployments</li>
                    <li>Lead integration workstream for multiple enterprise-scale Workday implementations (150k+ employees)</li>
                    <li>Designed, prototyped, tested, and deployed over 200+ integrations across multiple large-scale clients</li>
                    <li>Enabled AI product pilots by building real-time, bidirectional data pipelines between Workday and GenAI systems</li>
                    <li>Streamline legacy integration architectures, consolidate redundant feeds, reduce points of failure</li>
                  </motion.ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Product Engineer</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Leadblooms</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2025 - Present</span>
                  </div>
                  <motion.ul
                    className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                  >
                    <li>Solo-built AI-powered SaaS to uncover business opportunities from online conversations</li>
                    <li>Developed full-stack app (Next.js, FastAPI, Supabase, Stripe) to identify user-defined pain points from Reddit, X, and YouTube</li>
                    <li>Replaced keyword-based social listening with contextual AI search, achieving 1,000 sign-ups in three months</li>
                    <li>Iterated with multiple LLMs (OpenAI, Claude, Deepseek) and optimized batch APIs, cutting operational costs to under $40/month</li>
                    <li>Built internal tooling for onboarding, payments w/ Stripe, custom newsletters per user</li>
                  </motion.ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Product Engineer</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">ScreenResumes (Acquired)</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Nov 2024 - Present</span>
                  </div>
                  <motion.ul
                    className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.65, duration: 0.5 }}
                  >
                    <li>Solo-built AI-powered resume screening tool for hiring managers and recruiters</li>
                    <li>Designed and shipped full-stack AI product (FastAPI, Next.js, PostgreSQL, OpenAI, Firebase, Stripe)</li>
                    <li>Replaced rigid ATS screening logic with user-defined scoring system for fine-grained control</li>
                    <li>Built intuitive candidate evaluation flow: upload job posting → AI suggests criteria → batch upload resumes → system ranks matches</li>
                    <li>Drove early adoption using self-built Reddit/Twitter social listening tool</li>
                    <li>Successfully sold the tool after early traction and positive feedback</li>
                  </motion.ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 