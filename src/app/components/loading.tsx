/**
 * LOADING COMPONENT
 * 
 * Reusable loading spinner for async operations
 */

import { motion } from 'motion/react';

export function Loading() {
  return (
    <div className="flex items-center justify-center py-20">
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="w-4 h-4 bg-green-600 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-4 h-4 bg-emerald-600 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        <motion.div
          className="w-4 h-4 bg-green-600 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
      </motion.div>
    </div>
  );
}
