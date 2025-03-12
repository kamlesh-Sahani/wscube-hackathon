"use client"
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';
import { Rocket } from 'lucide-react';

interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  progress: number;
}

export default function ProgressBar({ progress, ...props }: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className="relative w-full h-6 rounded-full bg-gradient-to-r from-gray-900/40 to-gray-700/40 shadow-inner overflow-hidden"
      role="progressbar"
      aria-valuenow={clampedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <motion.div
        className="absolute h-full rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 shadow-md shadow-orange-400/20"
        initial={{ width: 0 }}
        animate={{ width: `${clampedProgress}%` }}
        transition={{ type: 'spring', damping: 20, stiffness: 120 }}
      >
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
        <motion.div
          className="absolute -right-3 top-1/2 -translate-y-1/2"
          animate={{
            x: [-4, 4, -4],
            y: ["-50%", "-58%", "-50%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Rocket className="h-5 w-5 text-yellow-400 fill-yellow-300 drop-shadow-md" />
        </motion.div>
        <motion.div
          className="absolute right-0 top-0 h-full w-10 bg-gradient-to-r from-transparent to-yellow-400/20 blur-md"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-white mix-blend-overlay tracking-wide"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {clampedProgress}%
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 8px rgba(139, 92, 246, 0.3)',
            '0 0 16px rgba(236, 72, 153, 0.3)',
            '0 0 8px rgba(139, 92, 246, 0.3)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
