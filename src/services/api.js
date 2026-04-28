/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Dummy Data Service - Frontend Only
const INITIAL_RECIPES = [
  {
    _id: '1',
    title: 'Sun-Dried Tomato Pesto Pasta',
    category: 'Dinner',
    cuisine: 'Italian',
    time: '25 min',
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&q=80',
    author: 'Chef Marco',
    rating: '4.9',
    calories: '520',
    servings: 2,
    difficulty: 'Intermediate',
    ingredients: ['200g Spaghetti', '50g Sun-dried tomatoes', '2 tbsp Pine nuts', '3 cloves Garlic', '50g Parmesan', 'Basil leaves'],
    steps: ['Boil pasta in salted water.', 'Blend tomatoes, nuts, garlic, and cheese into a pesto.', 'Toss pasta with pesto and fresh basil.']
  },
  {
    _id: '2',
    title: 'Avocado & Poached Egg Tartine',
    category: 'Breakfast',
    cuisine: 'Modern',
    time: '15 min',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
    author: 'Sarah Daily',
    rating: '4.7',
    calories: '320',
    servings: 1,
    difficulty: 'Easy',
    ingredients: ['Sourdough slice', '1 Avocado', '1 Egg', 'Chili flakes', 'Lemon juice'],
    steps: ['Toast the sourdough.', 'Mash avocado with lemon and salt.', 'Poach the egg for 3 minutes.', 'Assemble and top with chili flakes.']
  },
  {
    _id: '3',
    title: 'Honey-Glazed Salmon',
    category: 'Dinner',
    cuisine: 'Seafood',
    time: '20 min',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    author: 'Ocean Dave',
    rating: '4.8',
    calories: '450',
    servings: 1,
    difficulty: 'Intermediate',
    ingredients: ['Salmon fillet', '2 tbsp Honey', '1 tbsp Soy sauce', 'Asparagus', 'Lemon'],
    steps: ['Whisk honey and soy sauce.', 'Sear salmon for 4 minutes.', 'Add glaze and cook for 2 more minutes.', 'Serve with roasted asparagus.']
  },
  {
    _id: '4',
    title: 'Wagyu Beef Tartare',
    category: 'Dinner',
    cuisine: 'French',
    time: '30 min',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200&q=80',
    author: 'Mark Wilson',
    rating: '5.0',
    calories: '380',
    servings: 1,
    difficulty: 'Expert',
    ingredients: ['200g Wagyu Beef', '1 Egg yolk', 'Capers', 'Shallots', 'Dijon mustard'],
    steps: ['Finely mince the beef.', 'Mix shallots and capers.', 'Combine all ingredients carefully.', 'Plate with yolk on top.']
  },
  {
    _id: '5',
    title: 'Matcha Green Tea Tiramisu',
    category: 'Dessert',
    cuisine: 'Japanese Fusion',
    time: '45 min',
    image: 'https://images.unsplash.com/photo-1510443180451-413158023a0c?w=800&q=80',
    author: 'Yuki Tanaka',
    rating: '4.9',
    calories: '410',
    servings: 6,
    difficulty: 'Intermediate',
    ingredients: ['Ladyfingers', '250g Mascarpone', '2 tbsp Matcha powder', '3 Eggs', 'Sugar', 'Hot water'],
    steps: ['Dissolve matcha in hot water.', 'Whisk egg yolks with sugar and mascarpone.', 'Dip ladyfingers in matcha.', 'Layer and refrigerate for 4 hours.']
  },
  {
    _id: '6',
    title: 'Black Garlic Shoyu Ramen',
    category: 'Dinner',
    cuisine: 'Japanese',
    time: '60 min',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80',
    author: 'Kenji Soto',
    rating: '5.0',
    calories: '680',
    servings: 2,
    difficulty: 'Expert',
    ingredients: ['Ramen noodles', 'Chashu pork', 'Black garlic oil', 'Soft boiled egg', 'Nori', 'Bamboo shoots'],
    steps: ['Simmer broth for 8 hours.', 'Prepare chashu and egg.', 'Assemble with noodles and black garlic oil.', 'Serve piping hot.']
  },
  {
    _id: '7',
    title: 'Sicilian Blood Orange Salad',
    category: 'Lunch',
    cuisine: 'Mediterranean',
    time: '15 min',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    author: 'Sofia Rossi',
    rating: '4.6',
    calories: '210',
    servings: 2,
    difficulty: 'Easy',
    ingredients: ['3 Blood oranges', 'Fennel bulb', 'Kalamata olives', 'Extra virgin olive oil', 'Mint'],
    steps: ['Slice oranges and fennel thinly.', 'Arrange on a plate with olives.', 'Drizzle with oil and garnish with mint.']
  },
  {
    _id: '8',
    title: 'Truffle Mac & Cheese',
    category: 'Dinner',
    cuisine: 'American',
    time: '35 min',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&q=80',
    author: 'Chris Bourdain',
    rating: '4.8',
    calories: '890',
    servings: 4,
    difficulty: 'Intermediate',
    ingredients: ['Macaroni', 'Truffle oil', 'Gruyere cheese', 'Panko breadcrumbs', 'Heavy cream'],
    steps: ['Cook macaroni al dente.', 'Make a cheese sauce with cream and gruyere.', 'Toss with truffle oil.', 'Bake with panko on top.']
  },
  {
    _id: '9',
    title: 'Dragon Fruit Smoothie Bowl',
    category: 'Breakfast',
    cuisine: 'Tropical',
    time: '10 min',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    author: 'Luna Sky',
    rating: '4.7',
    calories: '280',
    servings: 1,
    difficulty: 'Easy',
    ingredients: ['Dragon fruit', 'Banana', 'Coconut milk', 'Granola', 'Chia seeds', 'Edible flowers'],
    steps: ['Blend dragon fruit and banana.', 'Top with granola and seeds.', 'Decorate with edible flowers.']
  },
  {
    _id: '10',
    title: 'Crispy Pork Belly Bao',
    category: 'Lunch',
    cuisine: 'Chinese',
    time: '120 min',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=80',
    author: 'Chef Wang',
    rating: '4.9',
    calories: '550',
    servings: 4,
    difficulty: 'Expert',
    ingredients: ['Pork belly', 'Bao buns', 'Hoisin sauce', 'Pickled cucumber', 'Peanuts'],
    steps: ['Roast pork belly until crispy.', 'Steam the bao buns.', 'Fill with pork, sauce, and pickles.', 'Top with crushed peanuts.']
  },
  {
    _id: '11',
    title: 'Wild Mushroom Risotto',
    category: 'Dinner',
    cuisine: 'Italian',
    time: '40 min',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80',
    author: 'Elena Vance',
    rating: '4.8',
    calories: '420',
    servings: 2,
    difficulty: 'Intermediate',
    ingredients: ['Arborio rice', 'Porcini mushrooms', 'Truffle butter', 'Dry white wine', 'Vegetable stock'],
    steps: ['Sauté mushrooms.', 'Toast rice and deglaze with wine.', 'Add stock slowly, stirring constantly.', 'Finish with truffle butter and parmesan.']
  },
  {
    _id: '12',
    title: 'Thai Green Curry with Tofu',
    category: 'Dinner',
    cuisine: 'Thai',
    time: '30 min',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80',
    author: 'Ananda P.',
    rating: '4.7',
    calories: '380',
    servings: 3,
    difficulty: 'Intermediate',
    ingredients: ['Firm tofu', 'Green curry paste', 'Coconut milk', 'Eggplant', 'Thai basil'],
    steps: ['Fry curry paste until fragrant.', 'Add coconut milk and vegetables.', 'Simmer tofu until cooked through.', 'Garnish with fresh basil.']
  },
  {
    _id: '13',
    title: 'Berry & Almond Croissant',
    category: 'Breakfast',
    cuisine: 'French',
    time: '20 min',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
    author: 'Jean-Luc',
    rating: '4.9',
    calories: '450',
    servings: 4,
    difficulty: 'Easy',
    ingredients: ['4 Croissants', 'Almond cream', 'Mixed berries', 'Sliced almonds', 'Icing sugar'],
    steps: ['Slice croissants and fill with almond cream.', 'Add fresh berries.', 'Toasts for 5-7 minutes.', 'Dust with icing sugar.']
  },
  {
    _id: '14',
    title: 'Signature Smash Burger',
    category: 'Lunch',
    cuisine: 'American',
    time: '15 min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    author: 'Burger King',
    rating: '5.0',
    calories: '720',
    servings: 1,
    difficulty: 'Easy',
    ingredients: ['Beef blend', 'Potato bun', 'American cheese', 'Secret sauce', 'Fried onions'],
    steps: ['Form loose beef balls.', 'Smash onto a hot griddle.', 'Season and flip once.', 'Build with cheese and sauce.']
  },
  {
    _id: '15',
    title: 'Spanish Seafood Paella',
    category: 'Dinner',
    cuisine: 'Spanish',
    time: '50 min',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80',
    author: 'Chef Carlos',
    rating: '4.9',
    calories: '610',
    servings: 6,
    difficulty: 'Expert',
    ingredients: ['Bomba rice', 'Saffron', 'Shrimp', 'Mussels', 'Chorizo', 'Peas'],
    steps: ['Sauté chorizo and aromatics.', 'Add rice and saffron liquid.', 'Arrange seafood on top.', 'Simmer without stirring until crust forms (socarrat).']
  }
];

// Local State Management
const getStorage = (key, initial) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : initial;
};

const setStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

let recipes = getStorage('simply_recipes', INITIAL_RECIPES);
let currentUser = getStorage('simply_user', null);

export const authService = {
  signup: async (data) => {
    const user = { ...data, id: Date.now().toString() };
    currentUser = user;
    setStorage('simply_user', user);
    return { data: { user } };
  },
  login: async (data) => {
    // In dummy mode, any login works
    const user = { username: data.email.split('@')[0], email: data.email, id: '123' };
    currentUser = user;
    setStorage('simply_user', user);
    return { data: { user } };
  },
  logout: async () => {
    currentUser = null;
    localStorage.removeItem('simply_user');
    return { data: { success: true } };
  },
  me: async () => {
    if (!currentUser) throw new Error('Not authenticated');
    return { data: { user: currentUser } };
  },
};

export const recipeService = {
  getAll: async (page = 1, category = 'All', limit = 9) => {
    let filtered = recipes;
    if (category !== 'All') {
      filtered = recipes.filter(r => r.category === category);
    }
    return { data: { recipes: filtered } };
  },
  create: async (data) => {
    const newRecipe = {
      ...data,
      _id: Date.now().toString(),
      author: currentUser?.username || 'Guest Chef',
      rating: '5.0',
    };
    recipes = [newRecipe, ...recipes];
    setStorage('simply_recipes', recipes);
    return { data: newRecipe };
  },
  seed: async () => {
    recipes = INITIAL_RECIPES;
    setStorage('simply_recipes', recipes);
    return { data: recipes };
  }
};

const api = {
  // Mock axios-like object if needed
  get: async (url) => ({ data: {} }),
  post: async (url, data) => ({ data: {} }),
};

export default api;
