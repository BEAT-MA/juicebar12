# JuiceBar E-Commerce Website

A fully functional, professional, futuristic juice e-commerce website built with React, TypeScript, Tailwind CSS, and React Router.

## 🚀 Features

### Customer Features
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Product Catalog**: Browse all products with beautiful cards and animations
- **Search & Filter**: Real-time search and category filtering
- **Product Sorting**: Sort by price, rating, name, or featured status
- **Product Details**: Detailed product pages with nutrition facts, ingredients, and benefits
- **Shopping Cart**: Full cart functionality with quantity controls
- **Checkout**: Complete checkout flow with order summary
- **About & Contact Pages**: Learn about the company and get in touch

### Admin Features
- **Admin Dashboard**: Manage all products from one place
- **Add Products**: Easy form to add new products
- **Edit Products**: Update existing product information
- **Delete Products**: Remove products from the catalog
- **LocalStorage Persistence**: All changes are automatically saved

### Design Features
- **Futuristic UI**: Modern glassmorphism effects and gradients
- **Smooth Animations**: Motion/Framer Motion animations throughout
- **Toast Notifications**: Real-time feedback for user actions
- **Loading States**: Professional loading indicators
- **SEO Ready**: Clean HTML structure with proper headings

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/               # Reusable UI components (buttons, cards, etc.)
│   │   ├── header.tsx        # Main navigation header
│   │   ├── footer.tsx        # Site footer
│   │   ├── product-card.tsx  # Product card component
│   │   ├── category-filter.tsx
│   │   ├── search-bar.tsx
│   │   ├── testimonials.tsx
│   │   ├── newsletter.tsx
│   │   ├── features.tsx
│   │   └── shopping-cart.tsx
│   ├── context/
│   │   └── store-context.tsx # Global state management
│   ├── data/
│   │   └── products-data.ts  # Product data definitions
│   ├── pages/
│   │   ├── root.tsx         # Root layout
│   │   ├── home.tsx         # Home page
│   │   ├── shop.tsx         # Shop/Products page
│   │   ├── product-detail.tsx # Individual product page
│   │   ├── cart-page.tsx    # Shopping cart page
│   │   ├── checkout.tsx     # Checkout page
│   │   ├── about.tsx        # About page
│   │   ├── contact.tsx      # Contact page
│   │   ├── admin.tsx        # Admin dashboard
│   │   └── not-found.tsx    # 404 page
│   ├── App.tsx              # Main app component
│   └── routes.ts            # Route configuration
```

## 🎨 How to Customize

### Adding New Products

**Method 1: Through Admin Dashboard**
1. Navigate to `/admin`
2. Click "Add New Product"
3. Fill in the form with product details
4. Click "Add Product"
5. Product will appear immediately in the shop

**Method 2: Edit Data File**
1. Open `src/app/data/products-data.ts`
2. Add a new product object to the `initialProducts` array
3. Follow the existing product structure
4. Save the file

Example product:
```typescript
{
  id: 9,
  name: 'Your Juice Name',
  price: 7.99,
  image: 'https://your-image-url.com/juice.jpg',
  description: 'Short description',
  fullDescription: 'Long detailed description...',
  size: '16 oz',
  category: 'citrus', // citrus, green, berry, tropical, energy
  rating: 4.8,
  reviews: 100,
  calories: 120,
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  nutritionFacts: {
    servingSize: '16 oz',
    calories: 120,
    totalFat: '0g',
    sodium: '10mg',
    totalCarbs: '28g',
    sugars: '24g',
    protein: '1g',
    vitaminC: '100% DV',
  },
  benefits: ['Benefit 1', 'Benefit 2'],
  inStock: true,
  stockQuantity: 50,
  featured: false,
}
```

### Editing Products
1. Go to `/admin`
2. Click "Edit" on any product
3. Update the information
4. Click "Save Changes"

### Deleting Products
1. Go to `/admin`
2. Click "Delete" on any product
3. Confirm deletion

### Customizing Colors
The site uses a green/emerald color scheme. To change:
1. Find gradient classes like `from-green-600 to-emerald-600`
2. Replace with your preferred Tailwind colors
3. Update throughout the codebase

### Adding New Pages
1. Create a new file in `src/app/pages/`
2. Add the route to `src/app/routes.ts`
3. Add navigation link in `src/app/components/header.tsx`

## 💾 Data Persistence

Products and cart data are stored in browser localStorage:
- **Products**: Saved when added/edited/deleted in admin
- **Cart**: Saved automatically on every change
- Data persists across page refreshes
- Clear localStorage to reset to initial data

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **React Router 7** - Navigation
- **Motion (Framer Motion)** - Animations
- **Sonner** - Toast notifications
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

This project is ready to deploy to:
- **Vercel** (recommended)
- **Netlify**
- **Any static hosting service**

### Deploy to Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Deploy (automatic)

### Deploy to Netlify
1. Push code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

## 🎯 Future Enhancements

Consider adding:
- User authentication
- Order history
- Payment integration (Stripe, PayPal)
- Reviews and ratings system
- Wishlist functionality
- Product recommendations
- Email notifications
- Inventory management
- Analytics dashboard
- Discount codes/coupons
- Multi-language support

## 📄 License

This project is ready for commercial use. Customize and deploy for your juice business!

## 🤝 Support

For questions or issues:
- Email: hello@juicebar.com
- Phone: (555) 123-4567

---

Built with ❤️ for healthy living
