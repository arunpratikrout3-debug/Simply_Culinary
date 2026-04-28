import React from 'react';
import { ChefHat, Github, Twitter, Instagram, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Footer({ isDarkMode }) {
  return (
    <footer className={cn(
      "py-20 border-t transition-all",
      isDarkMode ? "bg-zinc-950 border-white/5" : "bg-zinc-50 border-black/5"
    )}>
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                <ChefHat size={20} strokeWidth={2.5} />
              </div>
              <span className={cn(
                "font-serif italic text-xl tracking-tight",
                isDarkMode ? "text-white" : "text-brand-dark"
              )}>
                Simply Culinary
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Elevating the art of home cooking through beautiful design and simple recipes. Join our global community of food lovers.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github, Mail].map((Icon, i) => (
                <button key={i} className="text-gray-500 hover:text-brand-primary transition-colors">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className={cn("font-bold text-sm uppercase tracking-widest", isDarkMode ? "text-white" : "text-brand-dark")}>Explore</h4>
            <ul className="space-y-4">
              {['Trending', 'New Recipes', 'Professional Chefs', 'Ingredients'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-brand-primary text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className={cn("font-bold text-sm uppercase tracking-widest", isDarkMode ? "text-white" : "text-brand-dark")}>Community</h4>
            <ul className="space-y-4">
              {['About Us', 'Cookbooks', 'Kitchen Stories', 'Guidelines'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-brand-primary text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className={cn("font-bold text-sm uppercase tracking-widest", isDarkMode ? "text-white" : "text-brand-dark")}>Newsletter</h4>
            <p className="text-gray-500 text-sm">Get delicious recipes delivered directly to your inbox every week.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com"
                className={cn(
                  "flex-1 px-4 py-3 rounded-xl text-sm border focus:outline-none focus:border-brand-primary transition-all",
                  isDarkMode ? "bg-white/5 border-white/10 text-white" : "bg-white border-black/5 text-brand-dark"
                )}
              />
              <button className="px-5 py-3 bg-brand-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-medium">
            © 2024 Simply Culinary. Built with love for the kitchen.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((link) => (
              <a key={link} href="#" className="text-gray-500 hover:text-brand-primary text-[10px] uppercase font-bold tracking-widest transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
