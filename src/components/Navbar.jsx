import React from 'react';
import { ChefHat, Home, Compass, Users2, BrainCircuit, User, Moon, Sun, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils.js';

export default function Navbar({ activeTab, setActiveTab, isDarkMode, toggleDarkMode, onAddClick }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'collective', label: 'Feed', icon: Users2 },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Brand */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2 cursor-pointer pointer-events-auto bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-black/5 dark:border-white/5 py-2 px-4 rounded-2xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-8 h-8 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 transition-transform group-hover:rotate-12">
            <ChefHat size={18} />
          </div>
          <span className={cn("font-display font-medium text-lg tracking-tight hidden sm:block", isDarkMode ? "text-white" : "text-zinc-900")}>
            Simply Culinary
          </span>
        </motion.div>

        {/* Floating Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-1 p-1.5 rounded-3xl premium-blur shadow-2xl pointer-events-auto"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "relative flex items-center gap-2 px-6 py-2.5 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all group overflow-hidden",
                activeTab === item.id 
                  ? "text-brand-primary" 
                  : (isDarkMode ? "text-zinc-500 hover:text-white" : "text-zinc-400 hover:text-zinc-900")
              )}
            >
              <item.icon size={14} className={cn(
                "transition-transform",
                activeTab === item.id ? "scale-110" : "group-hover:scale-125"
              )} />
              <span className="relative z-10">{item.label}</span>
              {activeTab === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className={cn(
                    "absolute inset-0 z-[0] rounded-2xl border",
                    isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-black/5 shadow-sm"
                  )}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Actions */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 pointer-events-auto"
        >
          <button 
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-2xl premium-blur shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            {isDarkMode ? <Sun size={18} className="text-brand-primary" /> : <Moon size={18} className="text-zinc-600" />}
          </button>
          
          <button 
            onClick={onAddClick}
            className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-2xl font-bold text-xs shadow-xl shadow-brand-primary/20 hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            <Plus size={16} strokeWidth={3} />
            <span className="hidden sm:inline">Add Recipe</span>
          </button>
        </motion.div>
      </div>

      {/* Mobile Bottom Navigation */}
      <AnimatePresence>
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="md:hidden fixed bottom-6 inset-x-6 h-18 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-black/5 dark:border-white/5 rounded-3xl flex items-center justify-around z-50 shadow-2xl pointer-events-auto px-4"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "relative flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all",
                activeTab === item.id ? "text-brand-primary" : "text-zinc-500"
              )}
            >
              <item.icon size={22} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              <span className="text-[9px] uppercase font-bold tracking-widest">{item.label}</span>
              {activeTab === item.id && (
                <motion.div
                  layoutId="mobile-nav-pill"
                  className="absolute inset-0 bg-brand-primary/5 rounded-2xl border border-brand-primary/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>
      </AnimatePresence>
    </nav>
  );
}
