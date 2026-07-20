/**
 * PRODUCTS DATA STORE
 * 
 * This file contains all product data for the juice e-commerce store.
 * You can easily add, edit, or remove products here.
 * 
 * Product Structure:
 * - id: Unique identifier (number)
 * - name: Product name (string)
 * - price: Product price (number)
 * - image: Image URL (string)
 * - description: Short description (string)
 * - fullDescription: Detailed description (string)
 * - size: Product size (string)
 * - category: Product category (string)
 * - rating: Average rating 1-5 (number)
 * - reviews: Number of reviews (number)
 * - calories: Calorie count (number)
 * - ingredients: Array of ingredients (string[])
 * - nutritionFacts: Nutrition information (object)
 * - benefits: Health benefits (string[])
 * - inStock: Availability (boolean)
 * - stockQuantity: Number of items in stock (number)
 * - featured: Featured product (boolean)
 */

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  fullDescription: string;
  size: string;
  category: string;
  rating: number;
  reviews: number;
  calories: number;
  ingredients: string[];
  nutritionFacts: {
    servingSize: string;
    calories: number;
    totalFat: string;
    sodium: string;
    totalCarbs: string;
    sugars: string;
    protein: string;
    vitaminC: string;
  };
  benefits: string[];
  inStock: boolean;
  stockQuantity: number;
  featured?: boolean;
}

// Initial product data - You can add more products here
export const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Fresh Orange Sunrise',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1641659735894-45046caad624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBqdWljZSUyMGdsYXNzJTIwZnJlc2h8ZW58MXx8fHwxNzcyMjQ4ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Freshly squeezed from sun-ripened California oranges with a hint of natural sweetness',
    fullDescription: 'Start your morning with a burst of sunshine! Our Fresh Orange Sunrise is made from 100% organic, hand-picked California oranges. Cold-pressed to preserve maximum nutrients and natural flavor, each bottle contains the juice of approximately 6 whole oranges. No water, no sugar, no preservatives - just pure, refreshing orange juice that tastes like liquid sunshine.',
    size: '16 oz',
    category: 'citrus',
    rating: 4.8,
    reviews: 234,
    calories: 110,
    ingredients: ['Organic Orange', 'Vitamin C', 'Natural Fiber', 'Folate'],
    nutritionFacts: {
      servingSize: '16 oz',
      calories: 110,
      totalFat: '0g',
      sodium: '0mg',
      totalCarbs: '26g',
      sugars: '21g',
      protein: '2g',
      vitaminC: '120% DV',
    },
    benefits: ['Immune Support', 'Rich in Antioxidants', 'Natural Energy Boost', 'Skin Health'],
    inStock: true,
    stockQuantity: 45,
    featured: true,
  },
  {
    id: 2,
    name: 'Organic Apple Crisp',
    price: 6.49,
    image: 'https://images.unsplash.com/photo-1601055931451-4b31e4224f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGp1aWNlJTIwYm90dGxlJTIwb3JnYW5pY3xlbnwxfHx8fDE3NzIyNjkyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Cold-pressed from premium organic Fuji and Gala apples for a crisp, refreshing taste',
    fullDescription: 'Experience the crisp taste of autumn year-round! Our Organic Apple Crisp blends the sweetness of Fuji apples with the tartness of Gala apples, creating a perfectly balanced juice. Each bottle is cold-pressed from certified organic apples sourced from family-owned orchards. Rich in natural pectin and antioxidants, this juice supports digestive health while delighting your taste buds.',
    size: '16 oz',
    category: 'citrus',
    rating: 4.9,
    reviews: 189,
    calories: 120,
    ingredients: ['Organic Fuji Apple', 'Organic Gala Apple', 'Pectin', 'Polyphenols'],
    nutritionFacts: {
      servingSize: '16 oz',
      calories: 120,
      totalFat: '0g',
      sodium: '0mg',
      totalCarbs: '28g',
      sugars: '24g',
      protein: '0g',
      vitaminC: '8% DV',
    },
    benefits: ['Digestive Health', 'Heart Health', 'Natural Energy', 'Antioxidant Rich'],
    inStock: true,
    stockQuantity: 38,
  },
  {
    id: 3,
    name: 'Berry Blast Fusion',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1688691235462-9f56898799e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJyeSUyMHNtb290aGllJTIwcHVycGxlfGVufDF8fHx8MTc3MjI2OTIxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A powerful blend of blueberries, strawberries, and raspberries packed with antioxidants',
    fullDescription: 'Unleash the power of berries! Our Berry Blast Fusion combines organic blueberries, strawberries, raspberries, and a touch of acai berry for an antioxidant powerhouse. Each sip delivers a symphony of flavors while providing your body with essential nutrients, vitamins, and compounds that support brain health, boost immunity, and promote healthy aging.',
    size: '20 oz',
    category: 'berry',
    rating: 5.0,
    reviews: 312,
    calories: 95,
    ingredients: ['Organic Blueberry', 'Organic Strawberry', 'Organic Raspberry', 'Acai Berry', 'Vitamin E'],
    nutritionFacts: {
      servingSize: '20 oz',
      calories: 95,
      totalFat: '0.5g',
      sodium: '5mg',
      totalCarbs: '22g',
      sugars: '18g',
      protein: '1g',
      vitaminC: '45% DV',
    },
    benefits: ['Powerful Antioxidants', 'Brain Health', 'Anti-Aging', 'Immune Support'],
    inStock: true,
    stockQuantity: 52,
    featured: true,
  },
  {
    id: 4,
    name: 'Green Detox Elite',
    price: 8.49,
    image: 'https://images.unsplash.com/photo-1611497426695-412abe2f287b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGRldG94JTIwanVpY2V8ZW58MXx8fHwxNzcyMjY5MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Premium blend of kale, spinach, cucumber, celery, and green apple for ultimate detox',
    fullDescription: 'Reset and rejuvenate with our Green Detox Elite! This nutrient-dense green juice combines organic kale, spinach, cucumber, celery, green apple, and a squeeze of lemon. Packed with chlorophyll, vitamins, and minerals, this alkalizing blend helps cleanse your system, boost energy levels, and promote overall wellness. Perfect for starting your day or post-workout recovery.',
    size: '16 oz',
    category: 'green',
    rating: 4.7,
    reviews: 267,
    calories: 85,
    ingredients: ['Organic Kale', 'Organic Spinach', 'Cucumber', 'Celery', 'Green Apple', 'Lemon', 'Ginger'],
    nutritionFacts: {
      servingSize: '16 oz',
      calories: 85,
      totalFat: '0g',
      sodium: '120mg',
      totalCarbs: '18g',
      sugars: '12g',
      protein: '3g',
      vitaminC: '80% DV',
    },
    benefits: ['Detoxification', 'Alkalizing', 'Nutrient Dense', 'Natural Energy'],
    inStock: true,
    stockQuantity: 41,
    featured: true,
  },
  {
    id: 5,
    name: 'Tropical Mango Paradise',
    price: 7.49,
    image: 'https://images.unsplash.com/photo-1764403714198-f10e8e4039d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG1hbmdvJTIwanVpY2V8ZW58MXx8fHwxNzcyMjY5MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sweet and refreshing blend of ripe mangoes with a touch of passion fruit and coconut water',
    fullDescription: 'Escape to paradise with every sip! Our Tropical Mango Paradise features perfectly ripe organic mangoes blended with exotic passion fruit and pure coconut water. Rich in vitamins A and C, this tropical treat supports immune health, promotes glowing skin, and provides natural hydration. The addition of turmeric adds anti-inflammatory benefits for a truly functional beverage.',
    size: '20 oz',
    category: 'tropical',
    rating: 4.9,
    reviews: 198,
    calories: 130,
    ingredients: ['Organic Mango', 'Passion Fruit', 'Coconut Water', 'Turmeric', 'Vitamin A'],
    nutritionFacts: {
      servingSize: '20 oz',
      calories: 130,
      totalFat: '0g',
      sodium: '45mg',
      totalCarbs: '32g',
      sugars: '29g',
      protein: '1g',
      vitaminC: '100% DV',
    },
    benefits: ['Vitamin A Rich', 'Hydration', 'Anti-Inflammatory', 'Skin Health'],
    inStock: true,
    stockQuantity: 34,
  },
  {
    id: 6,
    name: 'Watermelon Splash',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1689785965790-4a80fb1fc867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcm1lbG9uJTIwanVpY2UlMjBzdW1tZXJ8ZW58MXx8fHwxNzcyMjY5MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Hydrating summer watermelon juice with mint and lime for the perfect refreshment',
    fullDescription: 'Cool down with our refreshing Watermelon Splash! Made from juicy, organic watermelon infused with fresh mint and a squeeze of lime, this hydrating beverage is perfect for hot days or post-workout recovery. Enhanced with a pinch of Himalayan sea salt to replenish electrolytes, this juice is both delicious and functional.',
    size: '16 oz',
    category: 'tropical',
    rating: 4.6,
    reviews: 145,
    calories: 75,
    ingredients: ['Organic Watermelon', 'Fresh Mint', 'Lime', 'Himalayan Sea Salt'],
    nutritionFacts: {
      servingSize: '16 oz',
      calories: 75,
      totalFat: '0g',
      sodium: '150mg',
      totalCarbs: '18g',
      sugars: '16g',
      protein: '1g',
      vitaminC: '25% DV',
    },
    benefits: ['Hydration', 'Electrolyte Balance', 'Post-Workout Recovery', 'Low Calorie'],
    inStock: false,
    stockQuantity: 0,
  },
  {
    id: 7,
    name: 'Carrot Ginger Zinger',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1570179755590-00f1b1bd663a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwaW5ncmVkaWVudHMlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MjI3ODMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Vibrant carrot juice with a spicy kick of fresh ginger and a hint of orange',
    fullDescription: 'Energize your day with our Carrot Ginger Zinger! This vibrant juice combines sweet organic carrots with spicy fresh ginger and a touch of orange for a flavor-packed experience. Rich in beta-carotene and vitamin A, this juice supports eye health, boosts immunity, and the ginger adds powerful anti-inflammatory benefits.',
    size: '16 oz',
    category: 'energy',
    rating: 4.8,
    reviews: 156,
    calories: 95,
    ingredients: ['Organic Carrot', 'Fresh Ginger', 'Orange', 'Lemon', 'Beta-Carotene'],
    nutritionFacts: {
      servingSize: '16 oz',
      calories: 95,
      totalFat: '0g',
      sodium: '140mg',
      totalCarbs: '22g',
      sugars: '18g',
      protein: '2g',
      vitaminC: '40% DV',
    },
    benefits: ['Eye Health', 'Immune Support', 'Anti-Inflammatory', 'Energy Boost'],
    inStock: true,
    stockQuantity: 28,
  },
  {
    id: 8,
    name: 'Beetroot Power',
    price: 7.49,
    image: 'https://images.unsplash.com/photo-1643608985331-1ba3bc6731a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwanVpY2UlMjBib3R0bGVzJTIwbGluZXVwfGVufDF8fHx8MTc3MjI3ODMzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Earthy beetroot juice with apple, carrot, and ginger for natural stamina and endurance',
    fullDescription: 'Unlock your natural power with our Beetroot Power juice! This deep ruby-red blend combines organic beets with apple, carrot, and ginger for a naturally sweet and earthy flavor. Packed with nitrates that support blood flow and cardiovascular health, this juice is a favorite among athletes and fitness enthusiasts.',
    size: '16 oz',
    category: 'energy',
    rating: 4.7,
    reviews: 203,
    calories: 105,
    ingredients: ['Organic Beetroot', 'Apple', 'Carrot', 'Ginger', 'Lemon', 'Nitrates'],
    nutritionFacts: {
      servingSize: '16 oz',
      calories: 105,
      totalFat: '0g',
      sodium: '160mg',
      totalCarbs: '24g',
      sugars: '20g',
      protein: '2g',
      vitaminC: '30% DV',
    },
    benefits: ['Stamina & Endurance', 'Blood Flow Support', 'Pre-Workout', 'Heart Health'],
    inStock: true,
    stockQuantity: 31,
    featured: false,
  },
];
