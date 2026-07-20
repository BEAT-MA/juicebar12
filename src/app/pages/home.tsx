/**
 * HOME PAGE
 * 
 * The main landing page with hero section, features, featured products,
 * testimonials, and newsletter signup.
 */

import { Link } from 'react-router';
import { ArrowRight, Sparkles, Leaf, Truck, Award, Heart, Star, Quote, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { ProductCard } from '../components/product-card';
import { motion } from 'motion/react';
import { useStore } from '../context/store-context';
import { toast } from 'sonner';
import { useState } from 'react';

const features = [
  {
    icon: Leaf,
    title: '100% Organic',
    description: 'Certified organic fruits and vegetables from local farms',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery available in most areas',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Cold-pressed to preserve maximum nutrients',
  },
  {
    icon: Heart,
    title: 'Health First',
    description: 'No added sugars, preservatives, or artificial ingredients',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    rating: 5,
    text: 'The best cold-pressed juices I\'ve ever tasted! The Green Detox has become my daily essential. Fresh, organic, and delivered right to my door.',
    avatar: '👩‍💼',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Wellness Coach',
    rating: 5,
    text: 'I recommend JuiceBar to all my clients. The quality is outstanding, and you can really taste the difference. The Berry Blast is incredible!',
    avatar: '👨‍⚕️',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Yoga Instructor',
    rating: 5,
    text: 'Love the variety and nutritional information provided. It\'s so convenient to have healthy, organic juices delivered fresh. Game changer for my morning routine!',
    avatar: '🧘‍♀️',
  },
];

export default function Home() {
  const { products, addToCart } = useStore();
  const [email, setEmail] = useState('');
  
  // Get featured products
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 bg-green-100 text-green-700 border-0">
              <Sparkles className="w-4 h-4 mr-2" />
              Now Offering Same-Day Delivery
            </Badge>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-6">
              Fresh Juice,
              <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-green-500 bg-clip-text text-transparent">
                Delivered Daily
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              100% organic, cold-pressed juices made from the finest fruits and vegetables.
              <span className="block mt-2 font-medium">No added sugars. No preservatives. Just pure goodness.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/shop">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-10 py-7 shadow-xl shadow-green-500/30">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <p className="text-4xl font-bold text-green-600">50k+</p>
                <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-600">100%</p>
                <p className="text-sm text-gray-600 mt-1">Organic</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-600">4.9★</p>
                <p className="text-sm text-gray-600 mt-1">Average Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Featured Juices
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our most popular cold-pressed juices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of happy customers living healthier lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="border-0 shadow-lg bg-white h-full">
                  <CardContent className="p-6">
                    <Quote className="text-green-600 h-8 w-8 mb-4 opacity-50" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{testimonial.avatar}</div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Fresh with Our Newsletter
            </h2>
            <p className="text-lg text-green-50 mb-8">
              Get exclusive offers, healthy recipes, and wellness tips delivered to your inbox
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 py-6 bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6"
              >
                <Send className="mr-2 h-5 w-5" />
                Subscribe
              </Button>
            </form>

            <p className="text-sm text-green-50 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
