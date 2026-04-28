import { motion } from 'motion/react';
import { X, Upload, Plus, Trash2, Camera } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils.js';
import { recipeService } from '../services/api.js';

export default function AddRecipe({ onClose, isDarkMode, onRecipeCreated }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    time: '30 min',
    category: 'Dinner',
    cuisine: 'Global',
    calories: '450',
    servings: '4',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80', // Default placeholder
    ingredients: [''],
    steps: ['']
  });

  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Italian', 'Chinese', 'Veg', 'Seafood'];
  const difficulties = ['Easy', 'Intermediate', 'Expert'];

  const handleAddField = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const handleRemoveField = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleFieldChange = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData(prev => ({ ...prev, [field]: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await recipeService.create(formData);
      if (onRecipeCreated) {
        onRecipeCreated();
      } else {
        onClose();
      }
    } catch (err) {
      alert("Failed to publish recipe. Check connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className={cn(
          "w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col transition-all duration-500 rounded-[2.5rem] sm:rounded-[4rem]",
          isDarkMode 
            ? "bg-brand-ink border border-white/10" 
            : "bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-black/[0.03]"
        )}
      >
        <form onSubmit={handleSubmit} className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className={cn("px-12 py-10 border-b flex items-center justify-between", isDarkMode ? "border-white/5" : "border-black/5")}>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-brand-primary/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">Atelier Studio</span>
              </div>
              <h2 className={cn("font-display font-bold text-4xl tracking-tighter leading-none", isDarkMode ? "text-white" : "text-zinc-900")}>
                Craft Your <span className="text-brand-primary italic font-light">Signature.</span>
              </h2>
            </div>
            <button type="button" onClick={onClose} className={cn(
              "p-4 rounded-2xl transition-all hover:rotate-90 duration-300",
              isDarkMode ? "hover:bg-white/10 text-gray-500" : "hover:bg-zinc-100 text-gray-400 border border-black/5 shadow-sm"
            )}>
              <X size={24} />
            </button>
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto p-8 sm:p-12 space-y-12 sm:space-y-16 scroll-smooth">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column: Basic Info */}
              <div className="space-y-10">
                <div className="space-y-6">
                   <label className="text-[10px] uppercase font-black text-zinc-400 tracking-[0.3em] px-1 flex items-center gap-2">
                     <Camera size={12} className="text-brand-primary" /> Visual Narrative
                   </label>
                   <div className="relative group">
                      <input 
                        type="url" 
                        required
                        placeholder="Paste image URL..." 
                        value={formData.image}
                        onChange={(e) => setFormData({...formData, image: e.target.value})}
                        className={cn(
                          "w-full px-6 py-5 border border-transparent rounded-2xl transition-all text-sm font-bold outline-none",
                          isDarkMode 
                            ? "bg-white/5 text-white focus:bg-white/10 focus:border-brand-primary/50" 
                            : "bg-zinc-50 text-zinc-900 focus:bg-white focus:border-brand-primary/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                        )}
                      />
                   </div>
                </div>

                <div className="space-y-6">
                  <label className="text-[10px] uppercase font-black text-zinc-400 tracking-[0.3em] px-1">Recipe Designation</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Signature Dish Name" 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className={cn(
                      "w-full px-6 py-5 border border-transparent rounded-2xl transition-all text-sm font-bold outline-none",
                      isDarkMode 
                        ? "bg-white/5 text-white focus:bg-white/10 focus:border-brand-primary/50" 
                        : "bg-zinc-50 text-zinc-900 focus:bg-white focus:border-brand-primary/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-black text-zinc-400 tracking-[0.3em] px-1">Cook Time</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 45 min" 
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className={cn(
                        "w-full px-6 py-5 border border-transparent rounded-2xl transition-all text-sm font-bold outline-none",
                        isDarkMode 
                          ? "bg-white/5 text-white focus:bg-white/10 focus:border-brand-primary/50" 
                          : "bg-zinc-50 text-zinc-900 focus:bg-white focus:border-brand-primary/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                      )}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-black text-zinc-400 tracking-[0.3em] px-1">Cuisine</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Italian, French..." 
                      value={formData.cuisine}
                      onChange={(e) => setFormData({...formData, cuisine: e.target.value})}
                      className={cn(
                        "w-full px-6 py-5 border border-transparent rounded-2xl transition-all text-sm font-bold outline-none",
                        isDarkMode 
                          ? "bg-white/5 text-white focus:bg-white/10 focus:border-brand-primary/50" 
                          : "bg-zinc-50 text-zinc-900 focus:bg-white focus:border-brand-primary/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                      )}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-black text-zinc-400 tracking-[0.3em] px-1">Difficulty</label>
                    <select 
                      value={formData.difficulty}
                      onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                      className={cn(
                        "w-full px-6 py-5 border border-transparent rounded-2xl transition-all text-sm font-bold outline-none appearance-none cursor-pointer",
                        isDarkMode 
                          ? "bg-white/5 text-white focus:bg-white/10 focus:border-brand-primary/50" 
                          : "bg-zinc-100 text-zinc-900 focus:bg-white focus:border-brand-primary/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                      )}
                    >
                      {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-black text-zinc-400 tracking-[0.3em] px-1">Occasion</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className={cn(
                        "w-full px-6 py-5 border border-transparent rounded-2xl transition-all text-sm font-bold outline-none appearance-none cursor-pointer",
                        isDarkMode 
                          ? "bg-white/5 text-white focus:bg-white/10 focus:border-brand-primary/50" 
                          : "bg-zinc-100 text-zinc-900 focus:bg-white focus:border-brand-primary/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                      )}
                    >
                      {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-black text-zinc-400 tracking-[0.3em] px-1">Calories</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 450" 
                      value={formData.calories}
                      onChange={(e) => setFormData({...formData, calories: e.target.value})}
                      className={cn(
                        "w-full px-6 py-5 border border-transparent rounded-2xl transition-all text-sm font-bold outline-none",
                        isDarkMode 
                          ? "bg-white/5 text-white focus:bg-white/10 focus:border-brand-primary/50" 
                          : "bg-zinc-100 text-zinc-900 focus:bg-white focus:border-brand-primary/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                      )}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-black text-zinc-400 tracking-[0.3em] px-1">Servings</label>
                    <input 
                      type="number" 
                      required
                      min="1"
                      placeholder="e.g. 4" 
                      value={formData.servings}
                      onChange={(e) => setFormData({...formData, servings: e.target.value})}
                      className={cn(
                        "w-full px-6 py-5 border border-transparent rounded-2xl transition-all text-sm font-bold outline-none",
                        isDarkMode 
                          ? "bg-white/5 text-white focus:bg-white/10 focus:border-brand-primary/50" 
                          : "bg-zinc-100 text-zinc-900 focus:bg-white focus:border-brand-primary/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Steps & Ingredients */}
              <div className="space-y-12">
                {/* Ingredients Section */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-1">
                    <label className="text-[10px] uppercase font-black text-zinc-400 tracking-[0.3em]">Master Ingredients</label>
                    <button 
                      type="button" 
                      onClick={() => handleAddField('ingredients')} 
                      className="flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-xl hover:bg-brand-primary hover:text-white transition-all active:scale-95 text-[10px] font-black uppercase tracking-widest"
                    >
                      <Plus size={14} strokeWidth={3} /> Add Component
                    </button>
                  </div>
                  <div className="space-y-3">
                    {formData.ingredients.map((ing, i) => (
                      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={i} className="flex gap-3">
                        <input 
                          type="text" 
                          required
                          placeholder={`Component #${i + 1}`} 
                          value={ing}
                          onChange={(e) => handleFieldChange('ingredients', i, e.target.value)}
                          className={cn(
                            "flex-1 px-6 py-4 border border-transparent rounded-2xl transition-all text-sm outline-none font-medium",
                            isDarkMode 
                              ? "bg-white/5 text-white focus:border-brand-primary/50" 
                              : "bg-zinc-50 text-zinc-900 focus:border-brand-primary/30"
                          )}
                        />
                        {i > 0 && (
                          <button type="button" onClick={() => handleRemoveField('ingredients', i)} className="p-4 rounded-xl text-red-400 hover:text-red-500 hover:bg-red-50/50 transition-all">
                            <Trash2 size={16} />
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Steps Section */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-1">
                    <label className="text-[10px] uppercase font-black text-zinc-400 tracking-[0.3em]">Execution Path</label>
                    <button 
                      type="button" 
                      onClick={() => handleAddField('steps')} 
                      className="flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-xl hover:bg-brand-primary hover:text-white transition-all active:scale-95 text-[10px] font-black uppercase tracking-widest"
                    >
                      <Plus size={14} strokeWidth={3} /> Add Step
                    </button>
                  </div>
                  <div className="space-y-3">
                    {formData.steps.map((step, i) => (
                      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={i} className="flex gap-3">
                        <div className="flex-1 relative">
                          <span className="absolute left-4 top-4 text-[9px] font-black text-brand-primary/40 uppercase tracking-widest">{i + 1}</span>
                          <textarea 
                            required
                            placeholder={`Describe step...`} 
                            value={step}
                            rows={2}
                            onChange={(e) => handleFieldChange('steps', i, e.target.value)}
                            className={cn(
                              "w-full px-6 pt-10 pb-4 border border-transparent rounded-2xl transition-all text-sm outline-none font-medium resize-none",
                              isDarkMode 
                                ? "bg-white/5 text-white focus:border-brand-primary/50" 
                                : "bg-zinc-50 text-zinc-900 focus:border-brand-primary/30"
                            )}
                          />
                        </div>
                        {i > 0 && (
                          <button type="button" onClick={() => handleRemoveField('steps', i)} className="p-4 rounded-xl text-red-400 hover:text-red-500 hover:bg-red-50/50 transition-all self-start">
                            <Trash2 size={16} />
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className={cn(
            "px-8 sm:px-12 py-6 sm:py-8 border-t flex items-center justify-between transition-colors shrink-0", 
            isDarkMode ? "border-white/5 bg-brand-ink" : "border-black/5 bg-zinc-50"
          )}>
            <div className="hidden md:flex items-center gap-3 text-zinc-400">
               <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-widest">Ready to Archive</span>
            </div>
            <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-6 sm:gap-10">
              <button type="button" onClick={onClose} className={cn(
                "text-[10px] font-black uppercase tracking-[0.3em] transition-all opacity-50 hover:opacity-100 hover:text-red-500",
                isDarkMode ? "text-white" : "text-zinc-600"
              )}>
                Discard
              </button>
              <button 
                type="submit"
                disabled={loading}
                className="px-8 sm:px-12 py-4 sm:py-5 bg-brand-primary text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-2xl shadow-xl shadow-brand-primary/25 hover:scale-[1.05] hover:brightness-110 active:scale-[0.95] transition-all min-w-[140px] sm:min-w-[220px]"
              >
                {loading ? 'Publishing...' : 'Publish Creation'}
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

