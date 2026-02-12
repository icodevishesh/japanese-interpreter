"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ExperienceCardProps {
  title: string;
  image: StaticImageData | string;
  index?: number;
}

export default function ExperienceCard({ title, image, index }: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    // Get current locale from router
    const pathname = window.location.pathname;
    const localeMatch = pathname.match(/^\/([a-z]{2})/);
    const locale = localeMatch ? localeMatch[1] : 'en';
    
    console.log('Current pathname:', pathname);
    console.log('Detected locale:', locale);
    
    // Redirect to specific experience section based on index
    if (index === 1) {
      // Sari wrapping - use window.location.href for full page redirect
      window.location.href = `/${locale}/experiences/traditional-saree-wearing-experience`;
    } else if (index === 2) {
      // Henna art - use window.location.href for full page redirect
      window.location.href = `/${locale}/experiences/henna-art-experiences`;
    } else if (index === 3) {
      // Shirodhara - use window.location.href for full page redirect
      window.location.href = `/${locale}/experiences/ayurvedic-message`;
    } else if (index === 4) {
      // Palmistry - use window.location.href for full page redirect
      window.location.href = `/${locale}/experiences/palm-reading`;
    } else if (index === 5) {
      // Yoga - use window.location.href for full page redirect
      window.location.href = `/${locale}/experiences/yoga-experience`;
    } else if (index === 0) {
      // Indian Cuisine - use window.location.href for full page redirect
      window.location.href = `/${locale}/experiences/indian-cuisine-experience`;
    } else {
      // Other experiences - use window.location.href for full page redirect
      window.location.href = `/${locale}#experiences`;
    }
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer  ${
        isHovered ? 'shadow-xl transform scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Image with curved bottom */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized={true}
        />
        
        {/* Hover overlay with border
        <div className={`absolute inset-0 border-4 transition-all duration-300 ${
          isHovered ? 'border-[#e6f6f4]' : ''
        }`} /> */}
        
      
      </div>
      
      {/* Title */}
      <div className="p-6 text-center border-t-4 border-[#12AB90]">
        <h3 className="font-semibold text-gray-900 text-lg">
          {title}
        </h3>
      </div>
    </div>
  );
}
