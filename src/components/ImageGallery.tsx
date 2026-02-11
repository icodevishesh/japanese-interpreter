'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, X } from 'lucide-react';

interface ImageItem {
    src: string;
    alt: string;
}

interface ImageGalleryProps {
    images: ImageItem[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

    return (
        <>
            <section className="w-full bg-white py-8 md:py-12 px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative group aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    // loading="lazy"
                                    preload={true}

                                />

                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <button
                                        onClick={() => setSelectedImage(image)}
                                        className="opacity-0 group-hover:opacity-100 bg-[#12aa91] text-white rounded-full p-2 scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-[#0f8b73]"
                                    >
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Screen Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // prevent close when clicking image
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-[#0f8b73] transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Image */}
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            width={1600}
                            height={1600}
                            className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
                        />
                    </div>
                </div>
            )}

        </>
    );
}
