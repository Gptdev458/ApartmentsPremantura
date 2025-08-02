'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RendersSection() {
  const [selectedCategory, setSelectedCategory] = useState('living');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();

  const categories = [
    { key: 'living', label: t.renders.categories.living },
    { key: 'bedroom', label: t.renders.categories.bedroom },
    { key: 'bathroom', label: t.renders.categories.bathroom },
    { key: 'layout', label: t.renders.categories.layout },
  ];

  const images = {
    living: [
      '/images/inside renders/living room/IMG-20250801-WA0007.jpg',
      '/images/inside renders/living room/IMG-20250801-WA0009.jpg',
      '/images/inside renders/living room/IMG-20250801-WA0012.jpg',
      '/images/inside renders/living room/IMG-20250801-WA0013.jpg',
      '/images/inside renders/living room/IMG-20250801-WA0014.jpg',
      '/images/inside renders/living room/IMG-20250801-WA0015.jpg',
    ],
    bedroom: [
      '/images/inside renders/bedroom/IMG-20250801-WA0008.jpg',
      '/images/inside renders/bedroom/IMG-20250801-WA0010.jpg',
      '/images/inside renders/bedroom/IMG-20250801-WA0020.jpg',
      '/images/inside renders/bedroom/IMG-20250801-WA0030.jpg',
      '/images/inside renders/bedroom/IMG-20250801-WA0032.jpg',
    ],
    bathroom: [
      '/images/inside renders/bathroom/IMG-20250801-WA0000.jpg',
      '/images/inside renders/bathroom/IMG-20250801-WA0001.jpg',
      '/images/inside renders/bathroom/IMG-20250801-WA0016.jpg',
      '/images/inside renders/bathroom/IMG-20250801-WA0021.jpg',
      '/images/inside renders/bathroom/IMG-20250801-WA0022.jpg',
    ],
    layout: [
      '/images/layout/2D layout.jpg',
      '/images/layout/3D layout 1floor.jpg',
      '/images/layout/3D layout 2floor.jpg',
    ],
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.renders.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.renders.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg shadow-lg p-1">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images[selectedCategory as keyof typeof images]?.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt={`${selectedCategory} ${t.renders.altText} ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <Image
                src={selectedImage}
                alt={`${t.renders.altText} enlarged`}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}