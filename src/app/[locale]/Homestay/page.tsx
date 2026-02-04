import { Navbar } from "@/src/components/Navbar";
import { ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import StRoomImage from "@/src/assets/standardroom.jpg";
import DeluxeRoomImage from "@/src/assets/deeluxrrom1.jpeg";

export default async function Homestay({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    return (
        <div>
            <Navbar locale={locale} />

            {/* Hero Section */}
            <section className="w-full bg-[#e6f6f4] py-8 md:py-10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12aa91] tracking-tight">
                        {t("homehero.title")}
                    </h1>
                    <nav className="mb-6">
                        <ol className="flex items-center justify-center space-x-4 mt-4 text-sm">
                            <li>
                                <a
                                    href={`/${locale}`}
                                    className="text-[#12aa91] hover:text-[#0f8b73] transition-colors"
                                >
                                    {t("homehero.home")}
                                </a>
                            </li>
                            <li className="text-[#12aa91]">/</li>
                            <li className="text-[#12aa91] font-medium">
                                {t("homehero.homeStay")}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* 2nd section - Homestay Features */}
            <section className="w-full bg-white py-12 md:py-16 px-4 md:px-12">
                <div className="max-w-3xl mx-auto justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
                        {t("homestay.description")}
                    </h2>

                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
                    {/* Left: Content */}
                    <div className="relative order-1 lg:order-2 mt-4 lg:mt-0">
                        <div className="overflow-hidden shadow-2xl rounded-lg">
                            <Image
                                src={DeluxeRoomImage}
                                alt="Indian Homestay Experience"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Overlay card */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-6 mb-8 flex items-center justify-between shadow-lg z-50">
                            <div>
                                <h3 className="text-xl font-semibold text-emerald-600 mb-2">
                                    {t("room.room1.title")}
                                </h3>
                                <p className="text-sm text-gray-600 mb-1">
                                    {t("room.room1.desc")}
                                </p>
                                {/* <p className="text-xs text-gray-500">
                                    1 person: 13,700 yen | 2 people: 16,300 yen
                                </p> */}
                            </div>
                            {/* Arrow */}
                            <Link href={`/${locale}/deluxe-room`} className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white hover:bg-emerald-600 transition">
                                <ArrowUpRight size={24} />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative order-2 lg:order-1 mt-4 lg:mt-0">
                        <div className="overflow-hidden shadow-2xl rounded-lg">
                            <Image
                                src={StRoomImage}
                                alt="Indian Homestay Experience"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Overlay card */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-6 mb-8 flex items-center justify-between shadow-lg z-50">
                            <div>
                                <h3 className="text-xl font-semibold text-emerald-600 mb-2">
                                    {t("room.room2.title")}
                                </h3>
                                <p className="text-sm text-gray-600 mb-1">
                                    {t("room.room2.desc")}
                                </p>
                                {/* <p className="text-xs text-gray-500">
                                    1 person: 13,700 yen | 2 people: 16,300 yen
                                </p> */}
                            </div>
                            {/* Arrow */}
                            <Link href={`/${locale}/#`} className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white hover:bg-emerald-600 transition">
                                <ArrowUpRight size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}   