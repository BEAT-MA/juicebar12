/**
 * PRODUCT DETAIL PAGE
 * 
 * Detailed view of a single product with full description,
 * nutrition facts, ingredients, benefits, and reviews.
 */

import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, ShoppingCart, Star, Leaf, Heart, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { motion } from 'motion/react';
import { useStore } from '../context/store-context';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, addToCart } = useStore();
  
  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.featured && (
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 border-0">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-semibold text-2xl">Out of Stock</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="mb-4">
              <Badge variant="secondary" className="mb-4">
                {product.category.toUpperCase()}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                {product.fullDescription}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-gray-500">/ {product.size}</span>
              </div>
              <div className="flex gap-4 mb-6">
                <Badge variant="outline" className="text-sm">
                  <Leaf className="w-4 h-4 mr-1 text-green-600" />
                  100% Organic
                </Badge>
                <Badge variant="outline" className="text-sm">
                  ⚡ {product.calories} calories
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {product.inStock ? `${product.stockQuantity} in stock` : 'Out of stock'}
                </Badge>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button
                size="lg"
                disabled={!product.inStock}
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-500/30"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Health Benefits */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-600" />
                  Health Benefits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="bg-white">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Detailed Information Tabs */}
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="ingredients" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ingredients" className="mt-6">
                <h3 className="font-semibold text-lg mb-4">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {ingredient}
                    </Badge>
                  ))}
                </div>
                <Separator className="my-6" />
                <p className="text-sm text-gray-600">
                  All ingredients are 100% organic and sourced from certified farms. 
                  Our cold-press process ensures maximum nutrient retention without heat or oxidation.
                </p>
              </TabsContent>
              
              <TabsContent value="nutrition" className="mt-6">
                <h3 className="font-semibold text-lg mb-4">Nutrition Facts</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Serving Size</span>
                      <span>{product.nutritionFacts.servingSize}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Calories</span>
                      <span>{product.nutritionFacts.calories}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Total Fat</span>
                      <span>{product.nutritionFacts.totalFat}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Sodium</span>
                      <span>{product.nutritionFacts.sodium}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Total Carbohydrates</span>
                      <span>{product.nutritionFacts.totalCarbs}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Sugars</span>
                      <span>{product.nutritionFacts.sugars}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Protein</span>
                      <span>{product.nutritionFacts.protein}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Vitamin C</span>
                      <span className="font-medium">{product.nutritionFacts.vitaminC}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-1">
                        {product.rating}
                      </div>
                      <div className="flex gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">
                        {product.reviews} reviews
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Customer reviews help us improve our products. This product has received excellent ratings from verified buyers.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
