import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChefHat } from 'lucide-react';
import { cn } from './lib/utils.js';
import { authService } from './services/api.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import RecipeDetail from './components/RecipeDetail.jsx';
import AddRecipe from './components/AddRecipe.jsx';
import Home from './pages/Home.jsx';
import Explore from './pages/Explore.jsx';
import Auth from './pages/Auth.jsx';
import Profile from './pages/Profile.jsx';
import Collective from './pages/Collective.jsx';
import Vault from './pages/Vault.jsx';

export default function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [recipeRefresh, setRecipeRefresh] = useState(0);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await authService.me();
        setUser(data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setTimeout(() => setIsLoading(false), 1500);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLogout = async () => {
    await authService.logout();
    setUser(null);
    setActiveTab('home');
  };

  const navigateTo = (tab) => {
    setSelectedRecipe(null);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (!user) return <Auth isDarkMode={isDarkMode} onAuthSuccess={setUser} />;

    const pages = {
      home: <Home onRecipeClick={setSelectedRecipe} isDarkMode={isDarkMode} onExploreClick={() => navigateTo('explore')} key={`home-${recipeRefresh}`} />,
      explore: <Explore onRecipeClick={setSelectedRecipe} isDarkMode={isDarkMode} key={`explore-${recipeRefresh}`} />,
      collective: <Collective isDarkMode={isDarkMode} />,
      profile: <Profile 
        onRecipeClick={setSelectedRecipe} 
        isDarkMode={isDarkMode} 
        user={user} 
        onLogout={handleLogout} 
        onCraftClick={() => setIsAddModalOpen(true)}
        key={`profile-${recipeRefresh}`} 
      />,
      vault: <Vault isDarkMode={isDarkMode} />,
    };

    return pages[activeTab] || <Home onRecipeClick={setSelectedRecipe} isDarkMode={isDarkMode} />;
  };

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-500",
      isDarkMode ? "mesh-gradient-dark text-white" : "mesh-gradient text-zinc-900"
    )}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center p-8 bg-zinc-950 text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 border border-brand-primary/30 rounded-full"
                />
                <ChefHat size={40} className="absolute inset-0 m-auto text-brand-primary" />
              </div>
              <div className="text-center space-y-2">
                <h1 className="font-display font-light text-4xl tracking-widest uppercase">Simply</h1>
                <p className="text-brand-primary font-bold text-[10px] tracking-[0.5em] uppercase">Culinary Atelier</p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <div className="flex flex-col min-h-screen">
            {user && (
              <Navbar 
                activeTab={activeTab} 
                setActiveTab={navigateTo} 
                onAddClick={() => setIsAddModalOpen(true)} 
                isDarkMode={isDarkMode}
                toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
                user={user}
              />
            )}
            
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={user ? activeTab : 'auth'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </main>

            {user && <Footer isDarkMode={isDarkMode} />}

            <AnimatePresence>
              {selectedRecipe && (
                <RecipeDetail 
                  recipe={selectedRecipe} 
                  isDarkMode={isDarkMode}
                  onBack={() => setSelectedRecipe(null)} 
                />
              )}
              {isAddModalOpen && (
                <AddRecipe 
                  isDarkMode={isDarkMode}
                  onClose={() => setIsAddModalOpen(false)} 
                  onRecipeCreated={() => {
                    setRecipeRefresh(prev => prev + 1);
                    setIsAddModalOpen(false);
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
