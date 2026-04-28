import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import RecipeCard from '../components/RecipeCard.jsx';
import { ChefHat, Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils.js';
import { recipeService } from '../services/api.js';

export default function Home({ onRecipeClick, isDarkMode, onExploreClick }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const { data } = await recipeService.getAll(1);
      setRecipes(data.recipes);
    } catch (err) {
      console.error("Failed to fetch recipes", err);
    } finally {
      setLoading(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-[0.4em]"
                >
                  <div className="w-10 h-px bg-brand-primary" />
                  Epicurean Selection 2024
                </motion.div>
                <h1 className="text-7xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
                  Crafting <br />
                  <span className="text-brand-primary italic font-light">Flavors.</span>
                </h1>
                <p className={cn("text-lg max-w-md leading-relaxed", isDarkMode ? "text-zinc-400" : "text-zinc-600")}>
                  A digital workshop for the modern chef. Explore curated seasonal collections and share your culinary signatures.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <button 
                  onClick={onExploreClick}
                  className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Menu <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-950 object-cover" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 border-2 border-white dark:border-zinc-950 flex items-center justify-center text-[10px] font-bold text-brand-primary">
                    +2k
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group"
            >
              {recipes[0] && (
                <>
                  <img 
                    src={recipes[0].image} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 p-8 glass-card rounded-3xl max-w-xs space-y-3">
                    <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.3em]">Featured Signature</span>
                    <h3 className="text-2xl font-display font-medium text-white">{recipes[0].title}</h3>
                    <div onClick={() => onRecipeClick(recipes[0])} className="flex items-center gap-2 text-white/60 text-xs font-bold cursor-pointer hover:text-white transition-colors">
                      VIEW FULL PREP <ArrowRight size={14} />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Feed */}
      <section className="max-w-7xl mx-auto px-6 pb-40 space-y-20">
        <div className="space-y-10">
          <div className="flex items-center justify-between px-4">
             <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Live Workshops</h3>
             <div className="text-brand-primary text-[10px] font-black uppercase tracking-widest cursor-pointer hover:underline">View All</div>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
            {[
              { name: 'Chef Marco', img: 'https://i.pravatar.cc/150?img=11', active: true },
              { name: 'Sarah Daily', img: 'https://i.pravatar.cc/150?img=22', active: true },
              { name: 'Ocean Dave', img: 'https://i.pravatar.cc/150?img=33', active: false },
              { name: 'Yuki Tanaka', img: 'https://i.pravatar.cc/150?img=44', active: true },
              { name: 'Kenji Soto', img: 'https://i.pravatar.cc/150?img=55', active: false },
              { name: 'Sofia Rossi', img: 'https://i.pravatar.cc/150?img=66', active: true },
              { name: 'Chris B.', img: 'https://i.pravatar.cc/150?img=67', active: false },
              { name: 'Luna Sky', img: 'https://i.pravatar.cc/150?img=68', active: true },
            ].map((chef, i) => (
              <div key={i} className="flex flex-col items-center gap-3 shrink-0 relative">
                <div className={cn(
                  "p-1 rounded-full border-2 transition-all cursor-pointer hover:scale-110",
                  chef.active ? "border-brand-primary" : "border-zinc-200 dark:border-zinc-800"
                )}>
                  <img src={chef.img} className="w-20 h-20 rounded-full object-cover" />
                </div>
                {chef.active && (
                  <div className="absolute top-0 right-0 px-2 py-0.5 bg-brand-primary text-white text-[8px] font-black uppercase tracking-tighter rounded-full shadow-lg border-2 border-white dark:border-zinc-950">
                    LIVE
                  </div>
                )}
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">{chef.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                <TrendingUp size={20} />
              </div>
              <h2 className="text-4xl font-display font-bold">Trending Repos</h2>
            </div>
            <p className="text-zinc-500 max-w-md">The most appreciated creations from our global community this week.</p>
          </div>
          
          <div className="flex items-center gap-2 glass-card p-1.5 rounded-2xl">
            {['Weekly', 'Monthly', 'All Time'].map(filter => (
              <button key={filter} className={cn(
                "px-6 py-2.5 rounded-xl text-xs font-bold transition-all",
                filter === 'Weekly' ? "bg-white dark:bg-zinc-800 shadow-sm" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              )}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="aspect-[4/5] rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {recipes.slice(1).map((recipe) => (
              <motion.div key={recipe._id} variants={item}>
                <RecipeCard 
                  recipe={recipe} 
                  isDarkMode={isDarkMode} 
                  onClick={() => onRecipeClick(recipe)} 
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
}
