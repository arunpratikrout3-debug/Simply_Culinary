import { motion } from 'motion/react';
import { Bookmark, Lock, ArrowRight, FolderPlus } from 'lucide-react';
import { cn } from '../lib/utils';

const collections = [
  { id: 1, name: 'Cyber Umami', count: 12, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80', color: 'bg-brand-primary' },
  { id: 2, name: 'Latent Heat', count: 8, image: 'https://images.unsplash.com/photo-1544333323-537214fc093b?w=800&q=80', color: 'bg-indigo-500' },
  { id: 3, name: 'Liquid Shadow', count: 24, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', color: 'bg-zinc-800' },
  { id: 4, name: 'Biolume', count: 5, image: 'https://images.unsplash.com/photo-1490233027849-b5f4625b16e8?w=800&q=80', color: 'bg-emerald-500' },
];

export default function Vault({ isDarkMode }) {
  return (
    <div className="min-h-screen pt-32 pb-40 px-6">
      <div className="max-w-[1600px] mx-auto space-y-20">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-3">
              <div className="w-10 h-px bg-brand-primary/30" />
              <Lock size={12} /> Secure Vector Vault
            </span>
            <h1 className={cn("text-7xl font-display font-bold tracking-tighter", isDarkMode ? "text-white" : "text-zinc-900")}>Flavor Archive.</h1>
          </div>
          <button className="flex items-center gap-4 px-10 py-6 rounded-3xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl">
            <FolderPlus size={18} /> New Collection
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {collections.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden mb-10 shadow-2xl border-4 border-white/5 bg-zinc-100 dark:bg-zinc-800">
                <img src={col.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-12 left-10 right-10">
                   <div className="flex items-center justify-between">
                      <p className="text-white font-display font-bold text-3xl tracking-tight">{col.name}</p>
                      <div className="p-4 bg-white/20 backdrop-blur-xl rounded-full text-white transform group-hover:rotate-45 transition-transform">
                        <ArrowRight size={20} />
                      </div>
                   </div>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6">
                <div className={cn("w-3 h-3 rounded-full", col.color)} />
                <p className="text-zinc-400 font-display text-[10px] uppercase tracking-[0.3em] font-black">{col.count} Masterpieces</p>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              "aspect-[3/4] rounded-[4rem] border-4 border-dashed flex flex-col items-center justify-center gap-6 group transition-all cursor-pointer",
              isDarkMode ? "bg-white/5 border-white/10 hover:border-brand-primary/50" : "bg-zinc-50 border-black/5 hover:border-brand-primary/50 shadow-xl"
            )}
          >
            <div className="w-20 h-20 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
              <FolderPlus size={32} />
            </div>
            <p className="text-zinc-400 font-display font-bold text-xs uppercase tracking-widest">New Archive</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
