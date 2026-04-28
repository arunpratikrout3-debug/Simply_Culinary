/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Users, LayoutGrid, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils.js';

const collections = [
  {
    title: "Mediterranean Slow Sundays",
    count: 42,
    members: "1.4k",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&h=1200&fit=crop",
    gradient: "from-blue-500/20 to-teal-500/20"
  },
  {
    title: "High-Altitude Himalayan Salt",
    count: 18,
    members: "890",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&h=1000&fit=crop",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "The Bakery Underground",
    count: 156,
    members: "12k",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=1200&fit=crop",
    gradient: "from-yellow-500/20 to-amber-500/20"
  }
];

export default function Collections({ isDarkMode }) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 py-24 md:py-32 min-h-screen transition-colors duration-500", isDarkMode ? "bg-brand-ink" : "bg-brand-soft")}>
      <header className="mb-20">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={cn("font-serif italic text-6xl mb-4 transition-colors", isDarkMode ? "text-white" : "text-brand-dark")}
        >
          Shared Spaces
        </motion.h1>
        <p className={cn("max-w-sm font-medium transition-colors", isDarkMode ? "text-gray-500" : "text-gray-500")}>Collaborative collections curated by the world's leading culinary circles.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className={cn(
              "group relative h-[500px] art-rounded overflow-hidden premium-shadow cursor-pointer border transition-all duration-500",
              isDarkMode ? "border-white/5" : "border-black/5"
            )}
          >
            <img 
              src={col.image} 
              alt={col.title} 
              className={cn(
                "absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700",
                isDarkMode ? "opacity-40 group-hover:opacity-80 group-hover:grayscale-0" : "group-hover:grayscale-0"
              )} 
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${col.gradient} opacity-60`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] font-bold border border-white/20">
                  <LayoutGrid size={12} /> {col.count} Recipes
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] font-bold border border-white/20">
                  <Users size={12} /> {col.members} Chefs
                </div>
              </div>
              <h2 className="text-white text-3xl font-display font-bold leading-tight mb-6">
                {col.title}
              </h2>
              <button className="w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all shadow-xl">
                Enter Collection <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
