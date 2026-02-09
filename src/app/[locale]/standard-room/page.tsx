"use client";

import { use, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { X } from "lucide-react";
import { StaticImageData } from "next/image";
import {
    Star,
    Bed,
    Wifi,
    Tv,
    SquareTerminal,
    WashingMachine,
    AirVent,
    CookingPot,
    HouseHeart,
    ShowerHead,
    Hamburger,
    Grid2x2,
    BrushCleaning,
    User,
    Mail
} from "lucide-react";

import { Navbar } from "@/src/components/Navbar";
import heroImage from "@/src/assets/standardroom.jpg";
import bedroom from "@/src/assets/standard-room-img/bedroom.jpg";
import storage from "@/src/assets/standard-room-img/storage.jpg";
import bathroom from "@/src/assets/standard-room-img/bathroom.jpg";
import workplace from "@/src/assets/standard-room-img/workplace.jpg";
import ExperiencesCarousel from "@/src/components/ExperiencesCarousel";
import AyurvedicMassageImage from "@/src/assets/massage.jpg";
import IndianCookingImage from "@/src/assets/cooking.png";
import HennaArtImage from "@/src/assets/mehendi.png";
import YogaImage from "@/src/assets/yoga.jpg";
import SareeImage from "@/src/assets/saaree.png";
import WashImage from "@/src/assets/standard-room-img/wash.png";
import { Span } from "next/dist/trace";

export default function StandardRoomPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    const t = useTranslations();
    const [isSaved, setIsSaved] = useState(false);
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

    const experienceItems = [
        {
            title: t("experiences.card1.title"),
            desc: t("experiences.card1.desc"),
            image: AyurvedicMassageImage,
            link: `/Experiences/ayurvedic-message`
        },
        {
            title: t("experiences.card2.title"),
            desc: t("experiences.card2.desc"),
            image: IndianCookingImage,
            rank: t("experiences.card2.rank"),
            link: `/Experiences/indian-cuisine-experience`,
        },
        {
            title: t("experiences.card3.title"),
            desc: t("experiences.card3.desc"),
            image: HennaArtImage,
            link: `/Experiences/henna-art-experiences`,
        },
        {
            title: t("experiences.card4.title"),
            desc: t("experiences.card4.desc"),
            image: YogaImage,
            link: `/Experiences/yoga-experience`,
        },
        {
            title: t("experiences.card5.title"),
            desc: t("experiences.card5.desc"),
            image: SareeImage,
            link: `/Experiences/traditional-saree-wearing-experience`,
        },
    ];

    return (
        <>
            <div className="w-full bg-white">
                <Navbar locale={locale} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 ">
                    <h1 className="text-2xl md:text-3xl font-semibold font-playfair text-black">
                        {t("stay.standardRoom")}
                    </h1>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-2xl overflow-hidden mb-8">
                    <div className="col-span-2 row-span-2 relative aspect-[4/3] md:aspect-auto md:col-span-2 md:row-span-2">
                        <Image
                            src={heroImage}
                            alt="Hero Room"
                            fill
                            className="object-cover hover:brightness-90 transition-all cursor-pointer"
                            onClick={() => setSelectedImage(heroImage)}
                        />
                    </div>
                    <div className="relative aspect-square">
                        <Image
                            src={bedroom}
                            alt="Bedroom"
                            fill
                            className="object-cover hover:brightness-90 transition-all cursor-pointer"
                            onClick={() => setSelectedImage(bedroom)}
                        />
                    </div>
                    <div className="relative aspect-square">
                        <Image
                            src={workplace}
                            alt="Living Room"
                            fill
                            className="object-cover hover:brightness-90 transition-all cursor-pointer"
                            onClick={() => setSelectedImage(workplace)}
                        />
                    </div>
                    <div className="relative aspect-square">
                        <Image
                            src={bathroom}
                            alt="Bathroom"
                            fill
                            className="object-cover hover:brightness-90 transition-all cursor-pointer"
                            onClick={() => setSelectedImage(bathroom)}
                        />
                    </div>
                    <div className="relative aspect-square">
                        <Image
                            src={storage}
                            alt="View"
                            fill
                            className="object-cover hover:brightness-90 transition-all cursor-pointer"
                        />
                        <button 
                            onClick={() => setShowAllPhotos(true)}
                            className="absolute bottom-2 right-2 text-black bg-white border border-gray-900 px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 hover:bg-gray-50 transition-colors md:bottom-4 md:right-4 md:px-4 md:py-2 md:text-sm"
                        >
                            {t("standardRoomSection.showAllPhotos")}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2">
                        {/* Title and Specs */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2 text-black">{t("standardRoomSection.homestayUnit")}</h2>
                            <div className="flex flex-wrap items-center gap-2 text-gray-600">
                                <span>{t("standardRoomSection.guests")}</span>
                                <span>•</span>
                                <span>{t("standardRoomSection.bedroom")}</span>
                                <span>•</span>
                                <span>{t("standardRoomSection.bed")}</span>
                                <span>•</span>
                                <span>{t("standardRoomSection.bathroom")}</span>
                            </div>
                        </div>

                        <hr className="my-8 border-gray-200" />

                        {/* Guest Favorite Banner */}
                        <div className="border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8 mb-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex items-center gap-1 text-xl font-bold text-black">
                                    <span>{t("standardRoomSection.guestFavorite.guest")}</span>
                                </div>
                                <div className="text-xl font-bold text-black">{t("standardRoomSection.guestFavorite.favourite")}</div>
                            </div>
                            <div className="flex-1 text-gray-700 text-center md:text-left">
                                {t("standardRoomSection.guestFavorite.description")}
                            </div>
                            <div className="flex divide-x divide-gray-200">
                                <div className="px-6 text-center">
                                    <div className="text-xl font-bold text-[#12aa91]">4.98</div>
                                    <div className="flex gap-0.5 justify-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-500" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="my-8 border-gray-200" />

                        {/* Features */}
                        <div className="mb-8 overflow-hidden">
                            <div>
                                <div className="text-2xl font-semibold text-black">{t("standardRoomSection.accommodationFee.title")}</div>
                                <div className="text-gray-700 leading-relaxed mb-4">
                                    {t("standardRoomSection.accommodationFee.onePerson")}
                                    <br />
                                    {t("standardRoomSection.accommodationFee.twoPeople")}
                                </div>
                            </div>

                            <div>
                                <div className="text-2xl font-semibold text-black">{t("standardRoomSection.meals.title")}</div>
                                <div className="text-gray-700 leading-relaxed mb-4">
                                    {t("standardRoomSection.meals.lunchDinner")}
                                </div>
                            </div>

                            <div>
                                <div className="text-2xl font-semibold text-black">{t("standardRoomSection.aboutFacility.title")}</div>
                                <div className="text-gray-700 leading-relaxed mb-4">
                                    {t("standardRoomSection.aboutFacility.sharedSpaces")}
                                    <br />
                                    {t("standardRoomSection.aboutFacility.bathroom")}
                                </div>
                            </div>

                            <div>
                                <div className="text-2xl font-semibold text-black">{t("standardRoomSection.airportTransfers.title")}</div>
                                <div className="text-gray-700 leading-relaxed mb-4">
                                    {t("standardRoomSection.airportTransfers.info")}
                                </div>
                            </div>
                        </div>

                        <hr className="my-8 border-gray-200" />

                        {/* Sleeping arrangements */}
                        <div className="mb-8 text-black">
                            <h3 className="text-2xl font-semibold mb-6">{t("standardRoomSection.sleeping.title")}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-gray-200 rounded-xl p-6">
                                    <HouseHeart className="w-6 h-6 mb-4" />
                                    <div className="font-semibold mb-1">{t("standardRoomSection.sleeping.roomArea")}</div>
                                    <div className="text-sm text-gray-500">{t("standardRoomSection.sleeping.tatami")}</div>
                                </div>
                                <div className="border border-gray-200 rounded-xl p-6">
                                    <div className="flex gap-4">
                                        <Bed className="w-6 h-6 mb-4" />
                                    </div>
                                    <div className="font-semibold mb-1">
                                        {t("standardRoomSection.sleeping.queenBed")}</div>
                                    <div className="text-sm text-gray-500">{t("standardRoomSection.sleeping.bedSize")}</div>
                                </div>
                            </div>
                        </div>

                        <hr className="my-8 border-gray-200" />

                        {/* Amenities */}
                        <div className="mb-8 text-black">
                            <h3 className="text-2xl font-semibold mb-6">{t("standardRoomSection.amenities.title")}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                                <div className="flex items-center gap-4 hover:bg-black/10 p-2 rounded">
                                    <CookingPot className="w-6 h-6 text-gray-700" />
                                    <span>{t("standardRoomSection.amenities.freeBreakfast")}</span>
                                </div>
                                <div className="flex items-center gap-4 hover:bg-black/10 p-2 rounded">
                                    <Wifi className="w-6 h-6 text-gray-700" />
                                    <span>{t("standardRoomSection.amenities.wifi")}</span>
                                </div>
                                <div className="flex items-center gap-4 hover:bg-black/10 p-2 rounded">
                                    <SquareTerminal className="w-6 h-6 text-gray-700" />
                                    <span>{t("standardRoomSection.amenities.dedicatedWorkspace")}</span>
                                </div>
                                <div className="flex items-center gap-4 hover:bg-black/10 p-2 rounded">
                                    <ShowerHead className="w-6 h-6 text-gray-700" />
                                    <span>{t("standardRoomSection.amenities.hotShower")}</span>
                                </div>
                                <div className="flex items-center gap-4 hover:bg-black/10 p-2 rounded">
                                    <Tv className="w-6 h-6 text-gray-700" />
                                    <span>{t("standardRoomSection.amenities.tv")}</span>
                                </div>
                                <div className="flex items-center gap-4 hover:bg-black/10 p-2 rounded">
                                    <WashingMachine className="w-6 h-6 text-gray-700" />
                                    <span>{t("standardRoomSection.amenities.laundry")}</span>
                                </div>
                                <div className="flex items-center gap-4 hover:bg-black/10 p-2 rounded">
                                    <AirVent className="w-6 h-6 text-gray-700" />
                                    <span>{t("standardRoomSection.amenities.airConditioning")}</span>
                                </div>
                                <div className="flex items-center gap-4 hover:bg-black/10 p-2 rounded">
                                    <Hamburger className="w-6 h-6 text-gray-700" />
                                    <span>{t("standardRoomSection.amenities.welcomeSnacks")}</span>
                                </div>
                                <div className="flex items-center gap-4 hover:bg-black/10 p-2 rounded">
                                    <BrushCleaning className="w-6 h-6 text-gray-700" />
                                    <span>{t("standardRoomSection.amenities.housekeepingService")}</span>
                                </div>
                                <div className="flex items-center gap-4 hover:bg-black/10 p-2 rounded">
                                    <Grid2x2 className="w-6 h-6 text-gray-700" />
                                    <span>{t("standardRoomSection.amenities.balcony")}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Sidebar */}
                    <div className="hidden lg:block">
                        <div className="sticky top-28 border border-gray-200 rounded-2xl p-6 shadow-xl space-y-4">
                            <div className="text-2xl font-semibold text-gray-700 text-center">{t("standardRoomSection.inquire.title")}</div>

                            <div className="border border-gray-400 rounded-xl overflow-hidden text-xs">
                                <div className="grid grid-cols-2 divide-x divide-gray-400 border-b border-gray-400">
                                    <div className="p-3 flex items-center gap-2">
                                        <User className="w-4 h-4 text-gray-400 mb-1" />
                                        <div className="font-medium uppercase mb-1 text-gray-400 text-center">{t("standardRoomSection.inquire.yourName")}</div>
                                    </div>
                                    <div className="p-3 flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-gray-400 mb-1" />
                                        <div className="font-medium uppercase mb-1 text-gray-400 text-center">{t("standardRoomSection.inquire.yourEmail")}</div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="font-medium uppercase mb-1 text-gray-400 text-center">{t("standardRoomSection.inquire.guests")}</div>
                                </div>
                            </div>

                            <button className="w-full bg-[#12aa91] text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-[#12aa91]/80 transition-colors">
                                {t("standardRoomSection.inquire.inquireNow")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="w-full bg-white py-12 md:py-24 px-4 md:px-12 relative overflow-hidden">
            <div className="text-2xl font-semibold text-black ml-22">{t("standardRoomSection.exploreExperiences.title")}</div>
            <div className="border-b-2 border-black/10 max-w-7xl mx-auto my-8"></div>
            <ExperiencesCarousel items={experienceItems} />
        </div>

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-2 sm:p-4">
                <div className="relative w-full h-full max-w-6xl max-h-[90vh] overflow-auto">
                    <button
                        onClick={() => setShowAllPhotos(false)}
                        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-gray-500 rounded-full p-2 sm:p-3 hover:bg-gray-800 transition-colors"
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
                        <div className="relative aspect-video">
                            <Image
                                src={heroImage}
                                alt="Hero Room"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative aspect-video">
                            <Image
                                src={bedroom}
                                alt="Bedroom"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative aspect-video">
                            <Image
                                src={workplace}
                                alt="Living Room"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative aspect-video">
                            <Image
                                src={bathroom}
                                alt="Bathroom"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative aspect-video">
                            <Image
                                src={storage}
                                alt="View"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="relative aspect-video">
                            <Image
                                src={WashImage}
                                alt="Wash"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )}

            {/* Fullscreen Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-2 sm:p-4">
                    <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-gray-500 rounded-full p-2 sm:p-3 hover:bg-gray-800 transition-colors"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <div className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center">
                            <Image
                                src={selectedImage}
                                alt="Fullscreen Image"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
