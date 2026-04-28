import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Clock, Users, ChefHat, Check, Share2, Bookmark, Flame, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils.js';

export default function RecipeDetail({ recipe, onBack, isDarkMode }) {
  if (!recipe) return null;

  const [completedIngredients, setCompletedIngredients] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  const toggleIngredient = (ing) => {
    setCompletedIngredients(prev => 
      prev.includes(ing) ? prev.filter(i => i !== ing) : [...prev, ing]
    );
  };

  const steps = Array.isArray(recipe.steps) && recipe.steps.length 
    ? recipe.steps.filter(s => s && s.trim()) 
    : ["Prepare ingredients.", "Cook with care.", "Enjoy!"];
  const ingredients = Array.isArray(recipe.ingredients) && recipe.ingredients.length 
    ? recipe.ingredients.filter(i => i && i.trim()) 
    : ["Ingredients list coming soon."];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className={cn(
        "fixed inset-0 z-[110] bg-white dark:bg-[#0A0A0A] overflow-y-auto no-scrollbar",
        isDarkMode ? "text-white" : "text-zinc-900"
      )}
    >
      {/* Floating Header */}
      <div className="fixed top-0 inset-x-0 z-50 px-6 py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack} 
            className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-2xl premium-blur shadow-2xl hover:scale-110 active:scale-95 transition-all text-zinc-900 dark:text-white"
          >
            <ArrowLeft size={24} />
          </button>
          
          <div className="flex items-center gap-3">
             <button className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-2xl premium-blur shadow-2xl hover:scale-110 active:scale-95 transition-all text-zinc-900 dark:text-white">
              <Share2 size={20} />
            </button>
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className={cn(
                "pointer-events-auto w-12 h-12 flex items-center justify-center rounded-2xl premium-blur shadow-2xl hover:scale-110 active:scale-95 transition-all",
                isSaved ? "text-brand-primary" : "text-zinc-900 dark:text-white"
              )}
            >
              <Bookmark size={20} fill={isSaved ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Cover Hero */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          
          <div className="absolute bottom-0 inset-x-0 p-10 md:p-20">
            <div className="max-w-4xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1 bg-brand-primary text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full">
                    {recipe.category}
                  </span>
                  <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                     <Flame size={16} className="text-brand-primary" />
                     {recipe.calories || '450'} kcal
                  </div>
                </div>
                <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-tight">
                  {recipe.title}
                </h1>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-10 border-t border-white/10 pt-10"
              >
                <div className="flex items-center gap-4">
                  <img src={recipe.authorImage || `https://i.pravatar.cc/100?u=${recipe.author}`} className="w-12 h-12 rounded-2xl object-cover ring-2 ring-white/10" />
                  <div>
                    <span className="block text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Authored by</span>
                    <span className="text-white font-bold">{recipe.author}</span>
                  </div>
                </div>
                
                <div className="h-8 w-px bg-white/10 hidden sm:block" />
                
                <div className="flex gap-12">
                   <div className="text-center">
                    <span className="block text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-left">Time</span>
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Clock size={16} className="text-brand-primary" />
                      {recipe.time}
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="block text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-left">Servings</span>
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Users size={16} className="text-brand-primary" />
                      {recipe.servings || 4}
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="block text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1 text-left">Expertise</span>
                    <div className="flex items-center gap-2 text-white font-bold">
                      <ChefHat size={16} className="text-brand-primary" />
                      {recipe.difficulty || 'Amateur'}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative z-10 bg-white dark:bg-zinc-950 -mt-10 rounded-t-[4rem] p-10 md:p-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[1.2fr,1.8fr] gap-20">
              {/* Ingredients Sidebar */}
              <div className="space-y-12">
                <div className="sticky top-32 space-y-10">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-display font-bold">Mise en <span className="text-brand-primary italic">Place.</span></h2>
                    <p className="text-zinc-500 text-sm leading-relaxed">Check off ingredients as you prepare your station.</p>
                  </div>

                  <div className="space-y-4">
                    {ingredients.map((ing, i) => (
                      <motion.button 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => toggleIngredient(ing)}
                        className={cn(
                          "w-full group flex items-center justify-between p-6 rounded-3xl border transition-all duration-300 transform",
                          completedIngredients.includes(ing)
                            ? "bg-brand-primary/5 border-brand-primary/20 scale-[0.98]"
                            : "bg-zinc-50 dark:bg-white/5 border-transparent hover:border-black/10 dark:hover:border-white/10 hover:shadow-lg"
                        )}
                      >
                        <span className={cn(
                          "text-sm font-medium transition-all",
                          completedIngredients.includes(ing) ? "text-zinc-400 line-through" : "text-zinc-700 dark:text-zinc-200"
                        )}>{ing}</span>
                        <div className={cn(
                          "w-6 h-6 rounded-lg flex items-center justify-center transition-all",
                          completedIngredients.includes(ing) ? "bg-brand-primary text-white" : "border-2 border-black/10 dark:border-white/10"
                        )}>
                          {completedIngredients.includes(ing) && <Check size={14} strokeWidth={4} />}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <div className="p-8 rounded-[2.5rem] bg-brand-primary/10 border border-brand-primary/20 space-y-4">
                     <h4 className="font-bold text-brand-primary">Chef's Secret</h4>
                     <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed italic">
                       "Always chill your dough for at least 30 minutes before baking to ensure the perfect texture and flavor development."
                     </p>
                  </div>
                </div>
              </div>

              {/* Cooking Process */}
              <div className="space-y-16">
                <div className="space-y-6">
                  <h2 className="text-4xl font-display font-bold">The <span className="text-brand-primary italic">Process.</span></h2>
                  <div className="w-20 h-1.5 bg-brand-primary rounded-full" />
                </div>

                <div className="space-y-16">
                  {steps.map((step, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="group flex gap-8"
                    >
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-14 h-14 rounded-3xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex-shrink-0 flex items-center justify-center font-display font-black text-xl shadow-2xl group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                          {i + 1}
                        </div>
                        <div className="flex-1 w-px bg-gradient-to-b from-zinc-200 dark:from-zinc-800 to-transparent" />
                      </div>
                      <div className="pt-4 space-y-6">
                        <p className={cn(
                          "text-xl leading-relaxed font-medium",
                          isDarkMode ? "text-zinc-300" : "text-zinc-700"
                        )}>
                          {step}
                        </p>
                        {/* Placeholder for step-specific tip or imagery */}
                        <div className="h-40 rounded-3xl bg-zinc-100 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:border-brand-primary/30 transition-colors">
                          <ChefHat className="text-zinc-300 dark:text-zinc-700 opacity-20" size={48} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Celebration */}
                <div className="pt-20 text-center space-y-6">
                  <div className="inline-block p-6 bg-zinc-50 dark:bg-white/5 rounded-full">
                    <Sparkles className="text-brand-primary animate-pulse" size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-bold">Bon Appétit!</h3>
                  <p className="text-zinc-500">You've completed the signature creation. Don't forget to take a photo of your masterpiece.</p>
                  <button 
                    onClick={onBack}
                    className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold hover:scale-105 active:scale-95 shadow-xl transition-all"
                  >
                    Back to Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="h-40" />
    </motion.div>
  );
}
