import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, MessageSquare, Share2, MoreHorizontal, UserPlus } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Collective({ isDarkMode }) {
  const [items, setItems] = useState([
    { id: 1, user: 'Sarah Cook', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop', 
      content: 'Just tried making these fruit jellies. They turned out so colorful and delicious! ✨', 
      image: 'https://images.unsplash.com/photo-1490233027849-b5f4625b16e8?w=1200&q=80', time: '2h ago', likes: 1200, comments: '45', role: 'Artisan', isLiked: true, isFollowed: false },
    { id: 2, user: 'Mark Wilson', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&fit=crop', 
      content: 'Classic beef tartare for dinner tonight. The presentation is everything.', 
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200&q=80', time: '5h ago', likes: 842, comments: '12', role: 'Expert', isLiked: false, isFollowed: true },
    { id: 3, user: 'Chef Luna', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop', 
      content: 'Perfecting my morning brew. There is nothing like a good cup of coffee to start the day.', 
      image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=1200&q=80', time: '8h ago', likes: 2100, comments: '156', role: 'Master', isLiked: false, isFollowed: false },
    { id: 4, user: 'Antonio S.', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop', 
      content: 'Fresh pasta shells ready for the oven. Homemade ricotta stuffing inside!', 
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1200&q=80', time: '10h ago', likes: 540, comments: '18', role: 'Artisan', isLiked: true, isFollowed: false },
    { id: 5, user: 'Yuki Tanaka', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop', 
      content: 'The simplicity of a matcha bowl. It is not just tea, it is a ritual.', 
      image: 'https://images.unsplash.com/photo-1510443180451-413158023a0c?w=1200&q=80', time: '12h ago', likes: 3200, comments: '240', role: 'Master', isLiked: false, isFollowed: true },
    { id: 6, user: 'Carlos M.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop', 
      content: 'Saffron is the soul of a paella. My grandmother recipe never fails.', 
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1200&q=80', time: '1d ago', likes: 1840, comments: '67', role: 'Expert', isLiked: false, isFollowed: false },
  ]);

  const toggleLike = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { 
          ...item, 
          isLiked: !item.isLiked, 
          likes: item.isLiked ? item.likes - 1 : item.likes + 1 
        };
      }
      return item;
    }));
  };

  const toggleFollow = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, isFollowed: !item.isFollowed };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen pt-32 pb-40 px-6">
      <div className="max-w-4xl mx-auto space-y-24">
        <header className="space-y-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 text-brand-primary font-bold text-[10px] uppercase tracking-[0.4em]"
          >
            <div className="w-10 h-px bg-brand-primary" />
            Global Atelier Feed
            <div className="w-10 h-px bg-brand-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-display font-bold tracking-tighter"
          >
            Culinary <span className="text-brand-primary italic font-light">Dialogues.</span>
          </motion.h1>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="flex flex-col items-center gap-6"
          >
            <p className="text-zinc-500 max-w-md mx-auto text-lg leading-relaxed">
              Real-time inspiration from our global community of master chefs and artisans.
            </p>
            <div className="flex -space-x-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-14 h-14 rounded-2xl border-4 border-white dark:border-zinc-950 bg-gray-200 overflow-hidden shadow-2xl relative transition-transform hover:scale-110 cursor-pointer">
                  <img src={`https://i.pravatar.cc/150?u=${i+20}`} className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-14 h-14 rounded-2xl bg-brand-primary flex items-center justify-center text-white font-black text-xs border-4 border-white dark:border-zinc-950 shadow-2xl z-10">+14k</div>
            </div>
          </motion.div>
        </header>

        <div className="space-y-40">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-10"
            >
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-6 cursor-pointer">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl transition-transform group-hover:scale-110 duration-500">
                      <img src={item.avatar} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-primary rounded-xl flex items-center justify-center text-white border-4 border-white dark:border-zinc-950 shadow-xl">
                      <Heart size={14} fill="currentColor" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-2xl font-display font-bold group-hover:text-brand-primary transition-colors">{item.user}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-brand-primary font-bold text-[9px] uppercase tracking-[0.2em]">{item.role} Residency</span>
                      <div className="w-1 h-1 rounded-full bg-zinc-300" />
                      <p className="text-zinc-500 font-bold text-[9px] uppercase tracking-[0.2em]">{item.time}</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => toggleFollow(item.id)}
                  className={cn(
                    "px-6 py-3 rounded-2xl text-xs font-bold shadow-xl transition-all active:scale-95",
                    item.isFollowed 
                      ? "bg-zinc-100 dark:bg-white/10 text-zinc-500" 
                      : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:brightness-110"
                  )}
                >
                  {item.isFollowed ? 'Following' : 'Follow Atelier'}
                </button>
              </div>

              <div className="group relative rounded-[3.5rem] overflow-hidden shadow-[0_60px_100px_-30px_rgba(0,0,0,0.2)] dark:shadow-[0_60px_100px_-30px_rgba(0,0,0,0.5)]">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 2 }}
                  src={item.image} 
                  className="w-full aspect-[16/10] object-cover" 
                />
                <div className="absolute top-10 right-10 flex flex-col gap-4">
                  <button className="w-14 h-14 premium-blur rounded-full text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <MoreHorizontal size={24} />
                  </button>
                  <button className="w-14 h-14 premium-blur rounded-full text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <Share2 size={24} />
                  </button>
                </div>
              </div>

              <div className="space-y-8 px-4">
                <p className="text-4xl font-display font-light leading-snug max-w-3xl italic tracking-tight">
                  "{item.content}"
                </p>
                <div className="flex items-center gap-12">
                  <button 
                    onClick={() => toggleLike(item.id)}
                    className={cn(
                      "group flex items-center gap-3 transition-all",
                      item.isLiked ? "text-brand-primary" : "text-zinc-500 hover:text-brand-primary"
                    )}
                  >
                    <div className={cn(
                      "p-4 rounded-2xl group-hover:scale-110 transition-transform",
                      item.isLiked ? "bg-brand-primary/20" : "bg-brand-primary/5"
                    )}>
                      <Heart size={24} className={cn(item.isLiked ? "fill-brand-primary" : "")} />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-display font-black text-xl leading-none">
                        {item.likes >= 1000 ? `${(item.likes / 1000).toFixed(1)}k` : item.likes}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Appreciations</span>
                    </div>
                  </button>
                  <button className="group flex items-center gap-3 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all">
                    <div className="p-4 bg-zinc-100 dark:bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                      <MessageSquare size={24} />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-display font-black text-xl leading-none">{item.comments}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Comments</span>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
