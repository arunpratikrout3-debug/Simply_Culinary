import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ChefHat, ArrowRight, ShieldCheck } from 'lucide-react';
import { authService } from '../services/api.js';
import { cn } from '../lib/utils.js';

export default function Auth({ isDarkMode, onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { data } = isLogin 
        ? await authService.login({ email: formData.email, password: formData.password })
        : await authService.signup(formData);
      
      onAuthSuccess(data.user);
    } catch (err) {
      console.error("Auth error:", err);
      setError(err.response?.data?.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn(
      "min-h-screen flex items-center justify-center p-6 transition-colors duration-700",
      isDarkMode ? "mesh-gradient-dark" : "mesh-gradient"
    )}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className={cn(
          "max-w-4xl w-full grid md:grid-cols-2 rounded-[3.5rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.3)]",
          isDarkMode ? "bg-zinc-900/50 backdrop-blur-3xl border border-white/10" : "bg-white/80 backdrop-blur-3xl border border-black/5"
        )}
      >
        {/* Left Side: Branding/Imagery */}
        <div className="relative hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 space-y-6">
            <div className="w-16 h-16 bg-brand-primary rounded-3xl flex items-center justify-center text-white shadow-2xl">
              <ChefHat size={32} />
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-display font-bold text-white leading-tight">Elevate Your <br />Signature Flavour.</h2>
              <p className="text-white/60 text-sm leading-relaxed">Join 50k+ culinary artists sharing their process and signatures with the world.</p>
            </div>
            <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest">
              <ShieldCheck size={16} /> Certified Culinary Network
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-12 md:p-16 space-y-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-display font-bold">
              {isLogin ? 'Welcome Back.' : 'Join the Atelier.'}
            </h1>
            <p className="text-zinc-500 text-sm">
              {isLogin ? "Please enter your access signatures." : "Start your culinary residency today."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <label className="block text-[10px] font-black font-display uppercase tracking-[0.25em] text-zinc-400">Pseudonym</label>
                  <div className="relative">
                    <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input 
                      type="text" 
                      required
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      placeholder="Chef G. Ramsay"
                      className="w-full pl-16 pr-6 py-5 rounded-[2rem] border border-transparent bg-zinc-100 dark:bg-white/5 focus:bg-white dark:focus:bg-white/10 dark:text-white focus:border-brand-primary/30 outline-none transition-all shadow-inner"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="block text-[10px] font-black font-display uppercase tracking-[0.25em] text-zinc-400">Access ID (Email)</label>
              <div className="relative">
                <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="chef@simplyculinary.com"
                  className="w-full pl-16 pr-6 py-5 rounded-[2rem] border border-transparent bg-zinc-100 dark:bg-white/5 focus:bg-white dark:focus:bg-white/10 dark:text-white focus:border-brand-primary/30 outline-none transition-all shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-black font-display uppercase tracking-[0.25em] text-zinc-400">Access Key (Password)</label>
              <div className="relative">
                <Lock size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input 
                  type="password" 
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="••••••••"
                  className="w-full pl-16 pr-6 py-5 rounded-[2rem] border border-transparent bg-zinc-100 dark:bg-white/5 focus:bg-white dark:focus:bg-white/10 dark:text-white focus:border-brand-primary/30 outline-none transition-all shadow-inner"
                />
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-xs font-bold flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                {error}
              </motion.div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="group relative w-full py-6 bg-brand-primary text-white rounded-[2rem] font-bold shadow-2xl shadow-brand-primary/30 hover:brightness-110 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? 'Processing...' : isLogin ? 'Authenticate' : 'Establish Residency'}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </form>

          <div className="pt-10 border-t border-black/5 dark:border-white/5 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-xs font-bold text-zinc-500 hover:text-brand-primary uppercase tracking-widest transition-colors"
            >
              {isLogin ? "Request New Residency" : "Already have Residency? Sign in"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
