import { ShoppingCart, Star, Leaf, Zap } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  size: string;
  category: string;
  rating: number;
  reviews: number;
  calories: number;
  ingredients: string[];
  benefits: string[];
  inStock: boolean;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
        <Link to={`/product/${product.id}`}>
          <div className="relative h-72 overflow-hidden group cursor-pointer">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {product.featured && (
              <Badge className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 border-0">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
            
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Out of Stock</span>
              </div>
            )}

            <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Badge variant="secondary" className="backdrop-blur-md bg-white/90">
                <Leaf className="w-3 h-3 mr-1 text-green-600" />
                Organic
              </Badge>
              <Badge variant="secondary" className="backdrop-blur-md bg-white/90">
                <Zap className="w-3 h-3 mr-1 text-yellow-600" />
                {product.calories} cal
              </Badge>
            </div>
          </div>
        </Link>
        
        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                {product.category}
              </p>
              <Link to={`/product/${product.id}`}>
                <h3 className="font-semibold text-xl mb-1 hover:text-green-600 transition-colors cursor-pointer">
                  {product.name}
                </h3>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-1 mb-3">
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
            <span className="text-sm text-gray-600 ml-1">
              ({product.reviews})
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {product.ingredients.slice(0, 3).map((ingredient, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full"
              >
                {ingredient}
              </span>
            ))}
            {product.ingredients.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                +{product.ingredients.length - 3} more
              </span>
            )}
          </div>
          
          <p className="text-xs text-gray-500">{product.size}</p>
        </CardContent>
        
        <CardFooter className="p-5 pt-0 flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <Button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-500/30"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}