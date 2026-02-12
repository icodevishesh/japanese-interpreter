import { Navbar } from "@/src/components/Navbar";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default async function Homestay({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    const rooms = [
        {
            image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770802986/standard-room_1_11zon_ouaxat.jpg",
            title: t("stay.standardRoom"),
            description: t("stay.standardRoomDesc"),
            price: t("stay.standardRoomInfo"),
            info: t("stay.standardRoomInfo2"),
            info2: t("stay.standardRoomInfo3"),
            info3: t("stay.deluxeRoomInfo4"),
            alt: "Standard Room",
            link: `/standard-room`
        },
        {
            image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803023/deeluxrrom1_10_11zon_zwhqdk.jpg",
            title: t("stay.deluxeRoom"),
            description: t("stay.deluxeRoomDesc"),
            price: t("stay.deluxeRoomInfo"),
            info: t("stay.deluxeRoomInfo2"),
            info2: t("stay.deluxeRoomInfo3"),
            info3: t("stay.deluxeRoomInfo4"),
            alt: "Deluxe Room",
            link: `/super-deluxe-room`
        },
    ];

    return (
        <div className="bg-white">
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

            {/* Description Section */}
            <section className="w-full bg-white py-2 md:py-10">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] max-w-4xl md:mx-auto mx-4 leading-tight tracking-tight mt-6">
                        {t("homestay.description")}
                    </h2>
                </div>
            </section>

            {/* Room Cards Section */}
            <div className="max-w-7xl mx-auto px-4 pb-12 md:pb-18">
                <div className="flex flex-col md:flex-row gap-8">
                    {rooms.map((room, index) => (
                        <div key={index} className="flex-1">
                            {/* Make the container focusable for mobile expansion */}
                            <div className="group cursor-pointer outline-none" tabIndex={0}>
                                <div className="relative aspect-9/16 md:aspect-4/3 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-focus:-translate-y-2">
                                    <Image
                                        src={room.image}
                                        alt={room.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110"
                                    />

                                    {/* Expanding Label */}
                                    <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 overflow-hidden max-h-[85px] group-hover:max-h-[350px] group-focus:max-h-[350px]">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex flex-col">
                                                <div className="w-12 h-1 bg-[#12aa91] mb-2 rounded-full"></div>
                                                <h4 className="text-base md:text-lg font-bold text-[#1a1a1a] leading-tight">
                                                    {room.title}
                                                </h4>
                                            </div>
                                            <Link href={`/${locale}${room.link}`}>
                                                <div className="w-10 h-10 rounded-full bg-[#12aa91] flex items-center justify-center text-white transition-transform shrink-0 group-hover:rotate-45 group-focus:rotate-45">
                                                    <ArrowUpRight size={20} />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="transition-opacity duration-300 delay-100 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                                            <p className="text-sm text-gray-500 leading-relaxed font-sans italic">
                                                {room.description}
                                            </p>
                                            <p className="text-sm text-gray-500 leading-relaxed font-sans italic">
                                                {room.price}
                                            </p>
                                            <p className="text-sm text-gray-500 leading-relaxed font-sans italic">
                                                - {room.info}
                                            </p>
                                            <p className="text-sm text-gray-500 leading-relaxed font-sans italic">
                                                - {room.info2}
                                            </p>
                                            <p className="text-sm text-gray-500 leading-relaxed font-sans italic">
                                                - {room.info3}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}   