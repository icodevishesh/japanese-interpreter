"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface City {
    name: string;
    loc: string;
    images: (string | any)[];
}

interface TravelLocationGridProps {
    cities: City[];
}

const CityCard = ({ city }: { city: City }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % city.images.length);
        }, 4000); // Slide every 4 seconds

        return () => clearInterval(interval);
    }, [city.images.length]);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % city.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + city.images.length) % city.images.length);
    };

    return (
        <div className="group relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-100">
            {/* Images */}
            {city.images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={img}
                        alt={`${city.name} - ${index + 1}`}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Navigation Arrows (visible on hover) */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <button
                    onClick={prevImage}
                    className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={nextImage}
                    className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-colors"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/90 via-black/50 to-transparent backdrop-blur-[1px] transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-[#12aa91] transition-colors">
                    {city.name}
                </h3>
                <p className="text-white/80 text-xs md:text-sm font-medium line-clamp-2 leading-relaxed">
                    {city.loc}
                </p>

                {/* Decorative bar */}
                <div className="w-12 h-1 bg-[#12aa91] mt-4 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            {/* Indicator dots */}
            <div className="absolute top-4 right-4 flex gap-1.5 z-10">
                {city.images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-[#12aa91] w-4' : 'bg-white/40'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default function TravelLocationGrid({ cities }: TravelLocationGridProps) {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {cities.map((city, index) => (
                    <div
                        key={index}
                        className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <CityCard city={city} />
                    </div>
                ))}
            </div>
        </div>
    );
}