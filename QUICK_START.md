# Quick Start Guide

## 🚀 Getting Started

### Installation
The project is already set up and ready to use. All dependencies are installed.

### Running Locally
```bash
npm run dev
```
Then open your browser to the URL shown in the terminal (typically http://localhost:5173)

## 📋 Quick Tour

### Pages Overview
- **Home** (`/`) - Landing page with hero, features, and featured products
- **Shop** (`/shop`) - All products with search, filters, and sorting
- **Product Detail** (`/product/:id`) - Individual product information
- **Cart** (`/cart`) - Shopping cart with checkout button
- **Checkout** (`/checkout`) - Order form and payment
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form
- **Admin** (`/admin`) - Product management dashboard

### Using the Admin Panel

1. **Navigate to Admin**
   - Go to `/admin` or click "Admin" in the footer

2. **Add a Product**
   - Click "Add New Product" button
   - Fill in all required fields (marked with *)
   - Use comma-separated values for ingredients and benefits
   - Click "Add Product"
   - Product appears instantly in shop

3. **Edit a Product**
   - Click "Edit" button on any product
   - Update the fields you want to change
   - Click "Save Changes"

4. **Delete a Product**
   - Click "Delete" button on any product
   - Confirm deletion
   - Product is removed from shop

### Data Storage
- Products are stored in browser **localStorage**
- Cart is also stored in **localStorage**
- Data persists across page refreshes
- To reset: Clear browser localStorage

## 🎨 Customization Guide

### Change Brand Colors
1. Search for: `from-green-600 to-emerald-600`
2. Replace with your colors (e.g., `from-blue-600 to-cyan-600`)
3. Update throughout the project

### Update Company Info
- **Company Name**: Search "JuiceBar" and replace
- **Contact Email**: Update in footer and contact page
- **Phone Number**: Update in footer and contact page
- **Address**: Update in footer and contact page
- **Social Media**: Update links in footer

### Add New Category
1. Open `src/app/pages/shop.tsx`
2. Add to categories array:
```typescript
{ id: 'your-category', name: 'Your Category', icon: '🎯' }
```
3. Use this category when adding products

### Modify Product Form
1. Open `src/app/pages/admin.tsx`
2. Find the form section
3. Add new input fields as needed
4. Update the Product interface in `src/app/data/products-data.ts`

## 🔧 Common Tasks

### Reset to Initial Products
```javascript
// In browser console:
localStorage.removeItem('juicebar_products');
// Refresh page
```

### Clear Shopping Cart
```javascript
// In browser console:
localStorage.removeItem('juicebar_cart');
// Refresh page
```

### Export Products Data
```javascript
// In browser console:
const products = JSON.parse(localStorage.getItem('juicebar_products'));
console.log(JSON.stringify(products, null, 2));
// Copy the output
```

## 📦 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! Your site is live

### Deploy to Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"
7. Done! Your site is live

### Environment Variables
No environment variables needed for basic functionality.

For production features, you might add:
- Payment gateway keys (Stripe, PayPal)
- Email service API keys
- Analytics tracking IDs

## 🐛 Troubleshooting

### Products not showing in shop
- Check if products exist in localStorage
- Go to `/admin` to verify
- Try adding a product manually

### Cart not working
- Check browser console for errors
- Clear localStorage and try again
- Verify product has `inStock: true`

### Images not loading
- Verify image URLs are valid
- Check network tab in browser DevTools
- Use Unsplash or other reliable image sources

### Routing not working
- Ensure React Router is properly set up
- Check `src/app/routes.ts` for route definitions
- Verify all page components exist

## 💡 Tips

- Test on mobile devices regularly
- Keep product images consistent in size and quality
- Update inventory numbers in admin panel
- Use featured products to highlight best sellers
- Monitor localStorage size (max ~5-10MB per domain)

## 🔐 Security Notes

**Important**: This is a frontend demo application.

For production use, you should:
- Add backend API for product management
- Implement user authentication
- Use a real payment processor (Stripe, PayPal)
- Store data in a database (Firebase, Supabase, MongoDB)
- Add server-side validation
- Implement proper security measures

## 📞 Support

Need help? Check:
- README.md for detailed documentation
- Code comments throughout the project
- React Router documentation
- Tailwind CSS documentation

---

Happy selling! 🥤✨
