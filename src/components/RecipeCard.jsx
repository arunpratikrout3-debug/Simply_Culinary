import { motion } from 'motion/react';
import { Clock, Star, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils.js';

export default function RecipeCard({ recipe, onClick, isDarkMode }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={cn(
        "group cursor-pointer rounded-[2.5rem] overflow-hidden transition-all duration-500",
        isDarkMode ? "bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 shadow-2xl" : "bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-black/5"
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay Labels */}
        <div className="absolute top-6 inset-x-6 flex items-center justify-between pointer-events-none">
          <div className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl text-white text-[10px] font-bold uppercase tracking-wider">
            {recipe.category}
          </div>
          <div className="w-10 h-10 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-6 left-6 flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-xl text-white">
          <Star size={12} className="text-brand-primary fill-brand-primary" />
          <span className="text-xs font-bold">{recipe.rating || '4.8'}</span>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-brand-primary">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{recipe.cuisine || 'Global'}</span>
            <div className="w-4 h-px bg-brand-primary/30" />
            <div className="flex items-center gap-1 text-zinc-500">
              <Clock size={12} />
              <span className="text-xs font-medium">{recipe.time}</span>
            </div>
          </div>
          <h3 className={cn(
            "text-2xl font-display font-semibold transition-colors leading-tight",
            isDarkMode ? "text-white" : "text-zinc-900"
          )}>
            {recipe.title}
          </h3>
        </div>

        <div className="flex items-center gap-3 pt-6 border-t border-black/5 dark:border-white/5 group-hover:border-brand-primary/20 transition-colors">
          <div className="relative">
            <img 
              src={recipe.authorImage || `https://i.pravatar.cc/100?u=${recipe.author}`} 
              alt={recipe.author} 
              className="w-10 h-10 rounded-2xl object-cover ring-2 ring-transparent group-hover:ring-brand-primary/20 transition-all" 
            />
          </div>
          <div className="flex flex-col">
            <span className={cn("text-xs font-bold", isDarkMode ? "text-zinc-300" : "text-zinc-700")}>{recipe.author}</span>
            <span className="text-[10px] text-zinc-500 font-medium italic">Master Chef</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
