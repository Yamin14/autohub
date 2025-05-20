import React, { useState } from 'react';
import { CAR_BRANDS, CATEGORIES } from '../../utils/constants';
import { X, UploadCloud } from 'lucide-react';

interface ProductFormProps {
  onSubmit: (data: any) => void;
  initialData?: any;
}

export const ProductForm: React.FC<ProductFormProps> = ({ 
  onSubmit,
  initialData = {}
}) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    description: initialData.description || '',
    price: initialData.price || '',
    category: initialData.category || '',
    brand: initialData.brand || '',
    stock: initialData.stock || '',
    weight: initialData.weight || '',
    dimensions: initialData.dimensions || '',
    partNumber: initialData.partNumber || '',
    compatibility: initialData.compatibility || [],
    features: initialData.features || [''],
    images: initialData.images || [],
  });

  const [compatibilityInput, setCompatibilityInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index] = value;
    setFormData((prev) => ({ ...prev, features: updatedFeatures }));
  };

  const addFeature = () => {
    setFormData((prev) => ({ 
      ...prev, 
      features: [...prev.features, ''] 
    }));
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures.splice(index, 1);
    setFormData((prev) => ({ ...prev, features: updatedFeatures }));
  };

  const addCompatibility = () => {
    if (compatibilityInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        compatibility: [...prev.compatibility, compatibilityInput.trim()]
      }));
      setCompatibilityInput('');
    }
  };

  const removeCompatibility = (index: number) => {
    const updatedCompatibility = [...formData.compatibility];
    updatedCompatibility.splice(index, 1);
    setFormData((prev) => ({ ...prev, compatibility: updatedCompatibility }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // In a real app, this would upload to a server and get back URLs
    // For this demo, we'll simulate adding image names to the array
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = [...formData.images];
    updatedImages.splice(index, 1);
    setFormData((prev) => ({ ...prev, images: updatedImages }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-6 md:col-span-2">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Product Information
          </h3>
          
          <div>
            <label htmlFor="name" className="label">
              Product Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="input"
              placeholder="e.g. Toyota Genuine Oil Filter"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="description" className="label">
              Description*
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="input"
              placeholder="Provide a detailed description of the product..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="price" className="label">
            Price (PKR)*
          </label>
          <input
            type="number"
            id="price"
            name="price"
            required
            min="0"
            step="0.01"
            className="input"
            placeholder="e.g. 1200"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="stock" className="label">
            Stock Quantity*
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            required
            min="0"
            className="input"
            placeholder="e.g. 50"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="category" className="label">
            Category*
          </label>
          <select
            id="category"
            name="category"
            required
            className="select"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            {CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="brand" className="label">
            Brand*
          </label>
          <select
            id="brand"
            name="brand"
            required
            className="select"
            value={formData.brand}
            onChange={handleChange}
          >
            <option value="">Select Brand</option>
            {CAR_BRANDS.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="partNumber" className="label">
            Part Number
          </label>
          <input
            type="text"
            id="partNumber"
            name="partNumber"
            className="input"
            placeholder="e.g. TP-1234"
            value={formData.partNumber}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="weight" className="label">
            Weight (kg)
          </label>
          <input
            type="text"
            id="weight"
            name="weight"
            className="input"
            placeholder="e.g. 1.5"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="dimensions" className="label">
            Dimensions (L x W x H in cm)
          </label>
          <input
            type="text"
            id="dimensions"
            name="dimensions"
            className="input"
            placeholder="e.g. 10 x 5 x 3"
            value={formData.dimensions}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          Compatibility
        </h3>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Add vehicle models this part is compatible with
        </p>
        
        <div className="mt-3 flex">
          <input
            type="text"
            className="input rounded-r-none"
            placeholder="e.g. Toyota Corolla 2015-2020"
            value={compatibilityInput}
            onChange={(e) => setCompatibilityInput(e.target.value)}
          />
          <button
            type="button"
            onClick={addCompatibility}
            className="flex items-center justify-center rounded-r-md bg-secondary-500 px-4 text-white hover:bg-secondary-600 dark:bg-secondary-600 dark:hover:bg-secondary-500"
          >
            Add
          </button>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-2">
          {formData.compatibility.map((item, index) => (
            <div
              key={index}
              className="flex items-center rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800"
            >
              <span>{item}</span>
              <button
                type="button"
                onClick={() => removeCompatibility(index)}
                className="ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-300 text-neutral-700 hover:bg-neutral-400 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          Product Features
        </h3>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          List the key features of this product
        </p>
        
        <div className="mt-3 space-y-3">
          {formData.features.map((feature, index) => (
            <div key={index} className="flex">
              <input
                type="text"
                className="input rounded-r-none"
                placeholder="e.g. Enhanced filtration technology"
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="flex items-center justify-center rounded-r-md bg-neutral-200 px-3 text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
        
        <button
          type="button"
          onClick={addFeature}
          className="mt-3 text-sm font-medium text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300"
        >
          + Add Another Feature
        </button>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          Product Images
        </h3>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Upload high-quality images of the product (max 5 images)
        </p>
        
        <div className="mt-3">
          <label className="block">
            <span className="sr-only">Choose product images</span>
            <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 p-6 dark:border-neutral-700">
              <div className="space-y-1 text-center">
                <UploadCloud className="mx-auto h-12 w-12 text-neutral-400" />
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium text-secondary-500 focus-within:outline-none hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300"
                  >
                    <span>Upload product images</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      disabled={formData.images.length >= 5}
                    />
                  </label>
                  <p> or drag and drop</p>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  PNG, JPG, GIF up to 5MB
                </p>
              </div>
            </div>
          </label>
          
          {formData.images.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {formData.images.map((image, index) => (
                <div key={index} className="group relative aspect-square rounded-md overflow-hidden">
                  <img
                    src={image}
                    alt={`Product image ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800/70 text-white hover:bg-neutral-900/90"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-end space-x-4 border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <button
          type="button"
          className="btn-secondary"
        >
          Save as Draft
        </button>
        <button
          type="submit"
          className="btn-primary"
        >
          Publish Product
        </button>
      </div>
    </form>
  );
};