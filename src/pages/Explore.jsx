import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Compass, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import RecipeCard from '../components/RecipeCard.jsx';
import { cn } from '../lib/utils.js';
import { recipeService } from '../services/api.js';

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Italian', 'Chinese', 'Japanese', 'American', 'Seafood', 'Thai', 'Spanish'];

export default function Explore({ onRecipeClick, isDarkMode }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFilteredRecipes();
  }, [activeCategory]);

  const fetchFilteredRecipes = async () => {
    setLoading(true);
    try {
      const { data } = await recipeService.getAll(1, activeCategory, 30);
      setRecipes(data.recipes);
    } catch (err) {
      console.error("Failed to fetch categorized recipes", err);
    } finally {
      setTimeout(() => setLoading(false), 600);
    }
  };

  const filteredRecipes = recipes.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         r.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const col1 = filteredRecipes.filter((_, i) => i % 3 === 0);
  const col2 = filteredRecipes.filter((_, i) => i % 3 === 1);
  const col3 = filteredRecipes.filter((_, i) => i % 3 === 2);

  return (
    <div className="min-h-screen pb-40">
      <header className="max-w-7xl mx-auto px-6 pt-32 pb-16 space-y-16">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                <Compass size={24} />
              </div>
              <span className="text-brand-primary font-bold uppercase tracking-[0.4em] text-[10px]">
                Global Atelier
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
              Discover <br />
              New <span className="text-brand-primary italic font-light">Signatures.</span>
            </h1>
            <p className={cn("max-w-sm text-lg leading-relaxed", isDarkMode ? "text-zinc-400" : "text-zinc-500")}>
              Browse through a world of culinary expressions, filtered by taste, history, and emotion.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="relative group overflow-hidden">
               <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
                 <Search className="text-zinc-400 dark:text-zinc-600 transition-colors group-focus-within:text-brand-primary" size={24} />
               </div>
               <input 
                type="text" 
                placeholder="Search signatures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "w-full pl-20 pr-10 py-8 rounded-[2.5rem] border outline-none transition-all font-display font-medium text-lg",
                  isDarkMode 
                    ? "bg-white/5 border-white/10 text-white placeholder-zinc-600 focus:bg-white/10 focus:border-brand-primary/40 focus:ring-4 focus:ring-brand-primary/10" 
                    : "bg-zinc-50 border-black/5 text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-brand-primary/20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]"
                )}
              />
            </div>

            <div className="flex items-center justify-between gap-6 px-4">
               <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                 <SlidersHorizontal size={14} /> Filter Results
               </div>
               <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 cursor-pointer hover:text-brand-primary transition-colors">
                 Sort by: Popular <ArrowUpDown size={14} />
               </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 flex items-center gap-2">
              <Sparkles size={12} className="text-brand-primary" /> Atelier Selects
            </h3>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full border border-black/5 dark:border-white/5 flex items-center justify-center text-zinc-400 cursor-pointer hover:bg-brand-primary hover:text-white transition-all">
                <ArrowUpDown size={14} className="-rotate-90" />
              </div>
            </div>
          </div>
          
          <div className="flex gap-8 overflow-x-auto pb-6 -mx-6 px-6 no-scrollbar snap-x">
             {recipes.slice(0, 5).map((recipe, i) => (
               <motion.div 
                 key={recipe._id}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 onClick={() => onRecipeClick(recipe)}
                 className="flex-shrink-0 w-[400px] aspect-[16/10] rounded-[2.5rem] overflow-hidden relative group cursor-pointer snap-center"
               >
                 <img src={recipe.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                 <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-brand-primary text-[8px] font-black uppercase tracking-[0.3em] mb-1 block">Signature Choice</span>
                    <h4 className="text-white text-xl font-display font-medium">{recipe.title}</h4>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-10 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] whitespace-nowrap transition-all duration-300",
                activeCategory === cat 
                  ? "bg-brand-primary text-white shadow-2xl shadow-brand-primary/30 -translate-y-1" 
                  : (isDarkMode 
                      ? "bg-white/5 text-zinc-500 hover:text-white hover:bg-white/10" 
                      : "bg-zinc-100 text-zinc-400 border border-black/5 hover:border-brand-primary/20 hover:text-zinc-900"
                    )
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="aspect-[4/5] rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 animate-pulse" />
               ))}
             </div>
          ) : filteredRecipes.length > 0 ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {[col1, col2, col3].map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-12">
                  {column.map((recipe) => (
                    <RecipeCard 
                      key={recipe._id} 
                      recipe={recipe} 
                      isDarkMode={isDarkMode}
                      onClick={() => onRecipeClick(recipe)} 
                    />
                  ))}
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-48 rounded-[4rem] border border-dashed border-zinc-200 dark:border-white/10 flex flex-col items-center justify-center space-y-8"
            >
              <div className="w-24 h-24 rounded-[2rem] flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 text-zinc-400">
                <Search size={48} strokeWidth={1.5} />
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl font-display font-bold">Inspiration Missing.</h3>
                <p className="text-zinc-500 max-w-xs mx-auto">We couldn't find any signatures matching your search criteria. Try broadening your horizon.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Newsletter / Community Section */}
      <footer className="max-w-7xl mx-auto px-6 pt-40">
        <div className={cn(
          "rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center space-y-10",
          isDarkMode ? "bg-white/5 border border-white/10" : "bg-brand-primary/5 border border-brand-primary/10"
        )}>
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <ChefHat size={300} strokeWidth={0.5} />
          </div>
          
          <div className="space-y-4 relative z-10">
            <span className="text-brand-primary font-black uppercase tracking-[0.5em] text-[10px]">Weekly Archive</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">Stay in the <span className="text-brand-primary italic font-light">Loop.</span></h2>
            <p className="text-zinc-500 max-w-lg mx-auto text-lg">Receive exclusive recipes, technique deep-dives, and community spotlights directly in your inbox.</p>
          </div>

          <form className="max-w-md mx-auto relative z-10 flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className={cn(
                "flex-1 px-8 py-5 rounded-[2rem] outline-none transition-all font-medium",
                isDarkMode ? "bg-white/10 text-white focus:bg-white/20" : "bg-white text-zinc-900 shadow-xl focus:ring-4 focus:ring-brand-primary/10"
              )}
            />
            <button className="px-10 py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-[2rem] font-black uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}
