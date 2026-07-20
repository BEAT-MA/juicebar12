/**
 * ADMIN DASHBOARD
 * 
 * Admin panel to manage products - add, edit, and delete.
 * Products are stored in localStorage and automatically appear in the shop.
 * 
 * HOW TO USE:
 * 1. Fill in the form to add a new product
 * 2. Click "Edit" on existing products to modify them
 * 3. Click "Delete" to remove products
 * 4. All changes are saved automatically to localStorage
 */

import { useState } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';
import { useStore } from '../context/store-context';
import { toast } from 'sonner';
import { Product } from '../data/products-data';

export default function Admin() {
  const { products, addProduct, updateProduct, deleteProduct } = useStore();
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({});

  const handleInputChange = (field: keyof Product, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayInput = (field: keyof Product, value: string) => {
    const array = value.split(',').map(item => item.trim()).filter(Boolean);
    handleInputChange(field, array);
  };

  const handleSubmitNew = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProduct: Product = {
      id: 0, // Will be set by addProduct
      name: formData.name || '',
      price: Number(formData.price) || 0,
      image: formData.image || '',
      description: formData.description || '',
      fullDescription: formData.fullDescription || formData.description || '',
      size: formData.size || '16 oz',
      category: formData.category || 'citrus',
      rating: Number(formData.rating) || 4.5,
      reviews: Number(formData.reviews) || 0,
      calories: Number(formData.calories) || 100,
      ingredients: formData.ingredients || [],
      nutritionFacts: formData.nutritionFacts || {
        servingSize: '16 oz',
        calories: Number(formData.calories) || 100,
        totalFat: '0g',
        sodium: '0mg',
        totalCarbs: '20g',
        sugars: '15g',
        protein: '1g',
        vitaminC: '50% DV',
      },
      benefits: formData.benefits || [],
      inStock: formData.inStock !== false,
      stockQuantity: Number(formData.stockQuantity) || 50,
      featured: formData.featured || false,
    };

    addProduct(newProduct);
    toast.success('Product added successfully!');
    setFormData({});
    setIsAddingProduct(false);
  };

  const handleUpdate = (id: number) => {
    if (formData && Object.keys(formData).length > 0) {
      updateProduct(id, formData);
      toast.success('Product updated successfully!');
      setEditingProduct(null);
      setFormData({});
    }
  };

  const handleDelete = (id: number, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteProduct(id);
      toast.success('Product deleted successfully!');
    }
  };

  const startEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData(product);
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setFormData({});
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your juice products</p>
          </div>
          
          <Dialog open={isAddingProduct} onOpenChange={setIsAddingProduct}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Plus className="mr-2 h-5 w-5" />
                Add New Product
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmitNew} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Product Name*</Label>
                    <Input
                      id="name"
                      value={formData.name || ''}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Price*</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={formData.price || ''}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="image">Image URL*</Label>
                  <Input
                    id="image"
                    value={formData.image || ''}
                    onChange={(e) => handleInputChange('image', e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Short Description*</Label>
                  <Textarea
                    id="description"
                    value={formData.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="fullDescription">Full Description</Label>
                  <Textarea
                    id="fullDescription"
                    value={formData.fullDescription || ''}
                    onChange={(e) => handleInputChange('fullDescription', e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="size">Size*</Label>
                    <Input
                      id="size"
                      value={formData.size || '16 oz'}
                      onChange={(e) => handleInputChange('size', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category*</Label>
                    <Select
                      value={formData.category || 'citrus'}
                      onValueChange={(value) => handleInputChange('category', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="citrus">Citrus</SelectItem>
                        <SelectItem value="green">Green</SelectItem>
                        <SelectItem value="berry">Berry</SelectItem>
                        <SelectItem value="tropical">Tropical</SelectItem>
                        <SelectItem value="energy">Energy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="calories">Calories*</Label>
                    <Input
                      id="calories"
                      type="number"
                      value={formData.calories || ''}
                      onChange={(e) => handleInputChange('calories', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="rating">Rating*</Label>
                    <Input
                      id="rating"
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      value={formData.rating || '4.5'}
                      onChange={(e) => handleInputChange('rating', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="stockQuantity">Stock*</Label>
                    <Input
                      id="stockQuantity"
                      type="number"
                      value={formData.stockQuantity || '50'}
                      onChange={(e) => handleInputChange('stockQuantity', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="ingredients">Ingredients (comma-separated)*</Label>
                  <Input
                    id="ingredients"
                    value={Array.isArray(formData.ingredients) ? formData.ingredients.join(', ') : ''}
                    onChange={(e) => handleArrayInput('ingredients', e.target.value)}
                    placeholder="Orange, Vitamin C, Natural Fiber"
                  />
                </div>

                <div>
                  <Label htmlFor="benefits">Health Benefits (comma-separated)*</Label>
                  <Input
                    id="benefits"
                    value={Array.isArray(formData.benefits) ? formData.benefits.join(', ') : ''}
                    onChange={(e) => handleArrayInput('benefits', e.target.value)}
                    placeholder="Immune Support, Antioxidants"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">Add Product</Button>
                  <Button type="button" variant="outline" onClick={() => setIsAddingProduct(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Products Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Total Products</p>
              <p className="text-3xl font-bold text-green-600">{products.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">In Stock</p>
              <p className="text-3xl font-bold text-green-600">
                {products.filter(p => p.inStock).length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Featured</p>
              <p className="text-3xl font-bold text-green-600">
                {products.filter(p => p.featured).length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Avg. Rating</p>
              <p className="text-3xl font-bold text-green-600">
                {(products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1)}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Products List */}
        <Card>
          <CardHeader>
            <CardTitle>All Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      {product.featured && (
                        <Badge className="bg-amber-500">Featured</Badge>
                      )}
                      {!product.inStock && (
                        <Badge variant="destructive">Out of Stock</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{product.description}</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>Price: ${product.price}</span>
                      <span>Category: {product.category}</span>
                      <span>Stock: {product.stockQuantity}</span>
                      <span>Rating: {product.rating}★</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => startEdit(product)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(product.id, product.name)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Edit Product Dialog */}
        {editingProduct && (
          <Dialog open={!!editingProduct} onOpenChange={(open) => !open && cancelEdit()}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Edit Product: {editingProduct.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-name">Product Name</Label>
                    <Input
                      id="edit-name"
                      value={formData.name || editingProduct.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-price">Price</Label>
                    <Input
                      id="edit-price"
                      type="number"
                      step="0.01"
                      value={formData.price ?? editingProduct.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="edit-description">Short Description</Label>
                  <Textarea
                    id="edit-description"
                    value={formData.description || editingProduct.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-stockQuantity">Stock Quantity</Label>
                    <Input
                      id="edit-stockQuantity"
                      type="number"
                      value={formData.stockQuantity ?? editingProduct.stockQuantity}
                      onChange={(e) => handleInputChange('stockQuantity', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-rating">Rating</Label>
                    <Input
                      id="edit-rating"
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      value={formData.rating ?? editingProduct.rating}
                      onChange={(e) => handleInputChange('rating', e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => handleUpdate(editingProduct.id)}
                    className="flex-1"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                  <Button
                    variant="outline"
                    onClick={cancelEdit}
                  >
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
