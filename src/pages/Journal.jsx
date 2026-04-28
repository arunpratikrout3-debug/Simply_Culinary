/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils.js';

const articles = [
  {
    id: 1,
    title: "The Alchemy of Saffron: Rare Extracts from the Himalayas",
    category: "Technique",
    image: "https://images.unsplash.com/photo-1541339907198-e08756eaa93e?w=800&h=1200&fit=crop",
    excerpt: "Saffron is the world's most mysterious spice. We travel to the high-altitude fields to uncover how its extraction defines a chef's signature palette."
  },
  {
    id: 2,
    title: "Minimalism in the Kitchen: Five Ingredients, Infinite Soul",
    category: "Philosophy",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=800&h=1000&fit=crop",
    excerpt: "Why the modern food movement is returning to the roots of simplicity, and how you can achieve Michelin-level depth with just five basics."
  },
  {
    id: 3,
    title: "Midnight Markets: Tokyo's Secrets to Fresh Unagi",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1555529731-118a5bb67af7?w=800&h=1200&fit=crop",
    excerpt: "At 3 AM, Tokyo's backstreets come alive. We join Chef Kenji as he selects the season's first catch for his legendary grill."
  }
];

export default function Journal({ isDarkMode }) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 py-24 md:py-32 min-h-screen transition-colors duration-500", isDarkMode ? "bg-brand-ink" : "bg-brand-soft")}>
      <header className="mb-20 text-center space-y-4">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-brand-primary font-bold uppercase tracking-[0.4em] text-xs"
        >
          Volume IV • The Storytelling Issue
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn("font-serif italic text-6xl md:text-8xl tracking-tighter", isDarkMode ? "text-white" : "text-brand-dark")}
        >
          Daily Journal
        </motion.h1>
        <p className={cn("max-w-xl mx-auto text-lg pt-4 leading-relaxed font-medium transition-colors", isDarkMode ? "text-gray-500" : "text-gray-500")}>
          Editorial deep-dives into the cultures, chemistry, and characters that shape our global kitchen.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {articles.map((article, i) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden art-rounded mb-8 premium-shadow relative border border-transparent hover:border-brand-primary/20 transition-all shadow-xl">
              <img 
                src={article.image} 
                alt={article.title} 
                className={cn(
                  "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110",
                  isDarkMode && "opacity-80"
                )} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {article.category}
                </span>
                <h2 className="text-white text-2xl font-serif italic leading-tight group-hover:translate-x-2 transition-transform duration-500">
                  {article.title}
                </h2>
              </div>
            </div>
            <div className="space-y-4 px-2">
              <p className={cn("text-sm leading-relaxed transition-colors", isDarkMode ? "text-gray-500" : "text-gray-500")}>
                {article.excerpt}
              </p>
              <button className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all hover:text-brand-accent">
                Read Story <ArrowRight size={14} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
