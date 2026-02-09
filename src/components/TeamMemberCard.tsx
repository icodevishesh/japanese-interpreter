'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Facebook, Twitter, Instagram, Globe } from 'lucide-react'

interface TeamMemberCardProps {
    name: string
    role: string
    description: string
    image: any
}

export function TeamMemberCard({ name, role, description, image }: TeamMemberCardProps) {
    const [showSocial, setShowSocial] = useState(false)

    const socialLinks = [
        { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700', label: 'Facebook' },
        { icon: Twitter, color: 'bg-sky-500 hover:bg-sky-600', label: 'Twitter' },
        { icon: Instagram, color: 'bg-pink-600 hover:bg-pink-700', label: 'Instagram' },
        { icon: Globe, color: 'bg-gray-600 hover:bg-gray-700', label: 'Website' }
    ]

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative mb-4 overflow-hidden flex justify-center pt-5">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                    <Image
                        src={image}
                        alt={name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Plus Button */}
                {/* <button
                    onClick={() => setShowSocial(!showSocial)}
                    className="absolute bottom-2 right-22 bg-[#12aa91] rounded-full p-2 shadow-lg border border-gray-200 hover:bg-[#18917d] transition-all duration-300 z-10"
                >
                    <Plus
                        className={`w-5 h-5 text-white transition-transform duration-300 ${showSocial ? 'rotate-45' : ''}`}
                    />
                </button> */}

                {/* Social Media Icons */}
                <div className={`absolute bottom-12 right-22 flex flex-col gap-2 transition-all duration-300 ${showSocial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    {socialLinks.map((social, index) => (
                        <button
                            key={social.label}
                            className={`${social.color} text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110`}
                            style={{
                                animationDelay: showSocial ? `${index * 100}ms` : '0ms'
                            }}
                            title={social.label}
                        >
                            <social.icon className="w-4 h-4" />
                        </button>
                    ))}
                </div>
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {name}
                </h3>
                <p className="text-gray-600 font-medium mb-3">
                    {role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}
