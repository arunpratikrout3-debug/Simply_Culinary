const baseRecipes = [
  {
    title: 'Spiced Honey Glazed Salmon',
    author: 'Chef Isabella',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=1000&fit=crop',
    likes: 1240,
    time: '25 min',
    difficulty: 'Easy',
    servings: 2,
    category: 'Seafood',
    rating: 4.8,
    ingredients: [
      '2 fresh salmon fillets',
      '3 tbsp organic honey',
      '1 tsp smoked paprika',
      '2 cloves minced garlic',
      'Fresh thyme sprigs',
      'Salt & black pepper'
    ],
    steps: [
      'Preheat your oven to 400°F (200°C) and line a baking sheet with parchment paper.',
      'In a small bowl, whisk together the honey, paprika, and garlic.',
      'Place salmon fillets on the sheet and season with salt and pepper.',
      'Brush the glaze generously over each fillet.',
      'Bake for 12-15 minutes until the salmon flakes easily with a fork.'
    ]
  },
  {
    title: 'Classic Italian Burrata Salad',
    author: 'Mario Rossi',
    authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=1200&fit=crop',
    likes: 856,
    time: '15 min',
    difficulty: 'Easy',
    servings: 4,
    category: 'Veg',
    rating: 4.9,
    ingredients: [
      '2 balls of fresh Burrata cheese',
      'Heirloom tomatoes, sliced',
      'Fresh basil leaves',
      'Extra virgin olive oil',
      'Balsamic reduction',
      'Flaky sea salt'
    ],
    steps: [
      'Arrange sliced tomatoes on a large serving platter.',
      'Gently place burrata balls in the center and break them open slightly.',
      'Tuck fresh basil leaves between the tomato slices.',
      'Drizzle generously with olive oil and balsamic reduction.',
      'Finish with a sprinkle of flaky sea salt.'
    ]
  },
  {
    title: 'Warm Berry & Almond Tart',
    author: 'Sarah Jenkins',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bdf7f8740?w=800&h=1100&fit=crop',
    likes: 2105,
    time: '45 min',
    difficulty: 'Medium',
    servings: 8,
    category: 'Dessert',
    rating: 5.0,
    ingredients: [
      '1 cup almond flour',
      'Fresh raspberries and blueberries',
      '1/2 cup organic cane sugar',
      'Unsalted butter, chilled',
      '1 tsp vanilla extract',
      'Sliced almonds for garnish'
    ],
    steps: [
      'Prepare the tart crust by mixing almond flour with chilled butter chunks.',
      'Press the dough into a tart pan and chill for 20 minutes.',
      'Toss berries with sugar and vanilla extract.',
      'Spread the berry mixture over the crust.',
      'Bake at 375°F for 35 minutes until the edges are golden brown.'
    ]
  },
  {
    title: 'Avocado Toast with Poached Egg',
    author: 'Chef Isabella',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=900&fit=crop',
    likes: 3420,
    time: '10 min',
    difficulty: 'Easy',
    servings: 1,
    category: 'Breakfast',
    rating: 4.7,
    ingredients: [
      'Sourdough bread slice',
      '1 ripe avocado',
      'Large organic egg',
      'Red pepper flakes',
      'Microgreens',
      'Lemon juice'
    ],
    steps: [
      'Toast the sourdough bread until crispy.',
      'Mash avocado with lemon juice and a pinch of salt.',
      'Poach the egg in simmering water with a splash of vinegar for 3 minutes.',
      'Spread avocado on toast, top with the poached egg.',
      'Garnish with microgreens and red pepper flakes.'
    ]
  },
  {
    title: 'Artisan Mushroom Risotto',
    author: 'Luigi Moretti',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&h=1000&fit=crop',
    likes: 1890,
    time: '40 min',
    difficulty: 'Hard',
    servings: 4,
    category: 'Dinner',
    rating: 4.9,
    ingredients: [
      'Arborio rice',
      'Mixed wild mushrooms',
      'Vegetable stock, warm',
      'Shallots and garlic',
      'Parmesan cheese',
      'Dry white wine'
    ],
    steps: [
      'Sauté mushrooms until golden and set aside.',
      'In the same pan, sauté shallots and garlic with the rice.',
      'Deglaze with white wine and stir until evaporated.',
      'Add warm stock one ladle at a time, stirring constantly.',
      'Finish with parmesan, butter, and the sautéed mushrooms.'
    ]
  },
  {
    title: 'Tropical Acai Breakfast Bowl',
    author: 'Maya Green',
    authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=800&h=1100&fit=crop',
    likes: 920,
    time: '10 min',
    difficulty: 'Easy',
    servings: 1,
    category: 'Quick',
    rating: 4.8,
    ingredients: [
      'Frozen acai packet',
      'Frozen banana',
      'Almond milk',
      'Granola',
      'Fresh dragonfruit and kiwi',
      'Chia seeds'
    ],
    steps: [
      'Blend acai, banana, and almond milk until thick and smooth.',
      'Pour into a chilled bowl.',
      'Top with granola in a neat row.',
      'Arrange dragonfruit and kiwi slices beautifully.',
      'Sprinkle with chia seeds and serve immediately.'
    ]
  }
];

const categories = ['Quick', 'Seafood', 'Veg', 'Dessert', 'Breakfast', 'Dinner', 'Italian', 'Asian', 'Bakery'];
const authors = [
  { name: 'Chef Isabella', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
  { name: 'Mario Rossi', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
  { name: 'Elena Vance', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
  { name: 'Marcus Bloom', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' }
];

const foodImages = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
  'https://images.unsplash.com/photo-1466637574441-749b8f19452f',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
  'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
  'https://images.unsplash.com/photo-1494597564530-871f2b93ac55',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543',
  'https://images.unsplash.com/photo-1484723091739-30a097e8f929'
];

export const recipes = Array.from({ length: 50 }).map((_, i) => {
  const base = baseRecipes[i % baseRecipes.length];
  const author = authors[i % authors.length];
  const category = categories[i % categories.length];
  
  return {
    ...base,
    id: `${i + 1}`,
    title: `${base.title} ${i > 5 ? `Vol. ${Math.floor(i / 6) + 1}` : ''}`,
    author: author.name,
    authorImage: author.image,
    category: category,
    likes: base.likes + (i * 15),
    rating: (4 + Math.random()).toFixed(1),
    image: `${foodImages[i % foodImages.length]}?w=800&auto=format&fit=crop&q=80`,
    ingredients: base.ingredients,
    steps: base.steps
  };
});
