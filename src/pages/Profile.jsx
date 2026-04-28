import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChefHat, Bookmark, Grid3X3, LogOut, Settings, Edit3, Heart, Users } from 'lucide-react';
import RecipeCard from '../components/RecipeCard.jsx';
import { cn } from '../lib/utils.js';
import { recipeService } from '../services/api.js';

export default function Profile({ onRecipeClick, isDarkMode, user, onLogout, onCraftClick }) {
  const [activeTab, setActiveTab] = useState('my-recipes');
  const [userRecipes, setUserRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchProfileData = async () => {
        setLoading(true);
        try {
          const { data } = await recipeService.getAll(1);
          if (data && data.recipes) {
            const owned = data.recipes.filter(r => r.author === user.username);
            setUserRecipes(owned);
          }
        } catch (err) {
          console.error("Profile fetch error", err);
        } finally {
          setTimeout(() => setLoading(false), 800);
        }
      };
      fetchProfileData();
    }
  }, [user]);

  if (!user) return null;

  const stats = [
    { label: 'Signatures', value: userRecipes.length, icon: ChefHat },
    { label: 'Followers', value: '1.2k', icon: Users },
    { label: 'Appreciations', value: '4.5k', icon: Heart },
  ];

  return (
    <div className="min-h-screen pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr,2.5fr] gap-20">
          {/* Sidebar Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8 flex flex-col items-center lg:items-start">
              <div className="relative group">
                <img 
                  src={user.avatar || `https://i.pravatar.cc/300?u=${user.username}`} 
                  alt="User" 
                  className="w-48 h-48 rounded-[3rem] object-cover ring-8 ring-transparent group-hover:ring-brand-primary/10 transition-all duration-500 shadow-2xl" 
                />
                <button className="absolute bottom-4 right-4 p-3 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-black/5 dark:border-white/5 hover:scale-110 active:scale-95 transition-all">
                  <Edit3 size={18} className="text-zinc-600 dark:text-zinc-400" />
                </button>
              </div>

              <div className="text-center lg:text-left space-y-4">
                <div className="space-y-1">
                  <h1 className="text-4xl font-display font-bold">{user.username}</h1>
                  <p className="text-brand-primary font-bold text-xs uppercase tracking-[0.3em]">Signature Chef</p>
                </div>
                <p className={cn("text-sm leading-relaxed max-w-xs", isDarkMode ? "text-zinc-400" : "text-zinc-500")}>
                  {user.bio || "Culinary enthusiast exploring the intersection of global traditions and modern techniques."}
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <button className="flex items-center justify-center gap-2 w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold text-sm shadow-xl hover:brightness-110 transition-all">
                  <Settings size={16} /> Edit Profile
                </button>
                <button onClick={onLogout} className="flex items-center justify-center gap-2 w-full py-4 bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded-2xl font-bold text-sm hover:bg-red-200 dark:hover:bg-red-500/20 transition-all">
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className={cn(
                    "flex items-center justify-between p-8 rounded-[2rem] transition-all duration-300 hover:scale-[1.02] cursor-default",
                    isDarkMode 
                      ? "premium-blur" 
                      : "bg-white border border-black/[0.03] shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
                  )}
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-brand-primary text-white rounded-2xl shadow-xl shadow-brand-primary/20">
                      <stat.icon size={24} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-display font-black leading-none">{stat.value}</span>
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-1">{stat.label}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="space-y-12">
            {/* Tabs */}
            <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5">
              <div className="flex gap-10">
                {[
                  { id: 'my-recipes', label: 'Signatures', icon: Grid3X3 },
                  { id: 'saved', label: 'Treasury', icon: Bookmark },
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "relative pb-6 text-sm font-bold flex items-center gap-2 transition-all group",
                      activeTab === tab.id ? "text-brand-primary" : "text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    )}
                  >
                    <tab.icon size={18} className={cn("transition-transform group-hover:scale-110", activeTab === tab.id && "scale-110")} />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div 
                        layoutId="profile-tab-bar"
                        className="absolute bottom-0 inset-x-0 h-1 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(255,107,53,0.5)]" 
                      />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="hidden sm:flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-6">
                Showing {activeTab === 'my-recipes' ? userRecipes.length : 0} items
              </div>
            </div>

            {/* List Results */}
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div 
                  key="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                  {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-[4/5] rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 animate-pulse" />
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                  {activeTab === 'my-recipes' && userRecipes.length > 0 ? (
                    userRecipes.map(recipe => (
                      <RecipeCard key={recipe._id} recipe={recipe} isDarkMode={isDarkMode} onClick={() => onRecipeClick(recipe)} />
                    ))
                  ) : (
                    <div className="col-span-full py-40 text-center space-y-8 rounded-[3rem] border border-dashed border-black/10 dark:border-white/10">
                      <div className="w-24 h-24 bg-zinc-50 dark:bg-zinc-900 rounded-full flex items-center justify-center mx-auto text-zinc-300 dark:text-zinc-700">
                        <ChefHat size={48} />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-display font-medium">Your kitchen is quiet.</h3>
                        <p className="text-zinc-500 max-w-xs mx-auto">Start by crafting your first signature recipe and sharing it with the world.</p>
                      </div>
                      <button 
                        onClick={onCraftClick}
                        className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold shadow-xl shadow-brand-primary/20"
                      >
                        Craft New Signature
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
