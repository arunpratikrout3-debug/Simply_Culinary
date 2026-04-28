/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils.js';

export default function LikeButton({ 
  initialLiked = false, 
  size = 20,
  className 
}) {
  const [isLiked, setIsLiked] = useState(initialLiked);

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={(e) => {
        e.stopPropagation();
        setIsLiked(!isLiked);
      }}
      className={cn(
        "relative flex items-center justify-center p-2.5 rounded-full transition-colors",
        isLiked ? "bg-red-500 text-white shadow-lg shadow-red-500/40" : "bg-black/20 text-white backdrop-blur-md border border-white/10",
        className
      )}
    >
      <Heart 
        size={size} 
        fill={isLiked ? "currentColor" : "none"} 
        className={cn("transition-transform", isLiked && "animate-heart-pop")}
      />
      
      {/* Micro-sparkles for like effect */}
      <AnimatePresence>
        {isLiked && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 border-2 border-red-500 rounded-full pointer-events-none"
          />
        )}
      </AnimatePresence>

      <style>{`
        @keyframes heart-pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.4); }
          100% { transform: scale(1); }
        }
        .animate-heart-pop {
          animation: heart-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </motion.button>
  );
}
