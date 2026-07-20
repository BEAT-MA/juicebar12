/**
 * ABOUT PAGE
 * 
 * Information about JuiceBar - company story, values, and mission.
 */

import { Leaf, Heart, Users, Award } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'motion/react';

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We source from local organic farms and use eco-friendly packaging to minimize our environmental impact.',
  },
  {
    icon: Heart,
    title: 'Health First',
    description: 'No compromises on quality. Every bottle is packed with pure, natural nutrients your body craves.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We support local farmers and give back to our community through wellness programs and education.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Award-winning cold-press process that preserves maximum nutrients and incredible taste.',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">JuiceBar</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to make healthy living delicious and accessible to everyone. 
              Since 2020, we've been crafting premium cold-pressed juices from the finest organic ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                JuiceBar was born from a simple belief: that healthy food should taste amazing. 
                Founded by wellness enthusiasts Sarah and Michael, we started in a small kitchen 
                with one cold-press juicer and a dream to revolutionize how people think about juice.
              </p>
              <p>
                Today, we're proud to serve over 50,000 health-conscious customers with fresh, 
                organic juices delivered daily. Every bottle is made with love, pressed within 
                hours of harvest, and delivered to your door at peak freshness.
              </p>
              <p>
                We partner with local organic farms, ensuring our ingredients are grown sustainably 
                without harmful pesticides. Our unique cold-press process preserves vital nutrients 
                and enzymes that heat pasteurization destroys, giving you the most nutritious juice possible.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-green-600 mb-2">50k+</p>
              <p className="text-gray-600">Happy Customers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-green-600 mb-2">100%</p>
              <p className="text-gray-600">Organic Ingredients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-green-600 mb-2">25+</p>
              <p className="text-gray-600">Farm Partners</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-green-600 mb-2">4.9★</p>
              <p className="text-gray-600">Average Rating</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
