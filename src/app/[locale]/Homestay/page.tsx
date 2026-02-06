import { Navbar } from "@/src/components/Navbar";
import { ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import StandardRoomImage from "@/src/assets/standardroom.jpg";
import DeluxeRoomImage from "@/src/assets/deeluxrrom1.jpeg";
import RoomCarousal from "@/src/components/RoomCarousel";

export default async function Homestay({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

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
            <section className="w-full bg-white py-8 md:py-10">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] max-w-4xl mx-auto leading-tight tracking-tight mt-6">
                        {t("homestay.description")}
                    </h2>
                </div>
            </section>

            {/* Room Carousal Section */}
            <div className=" p-8 md:pb-18">
                <RoomCarousal
                    rooms={[
                        {
                            image: StandardRoomImage,
                            title: t("stay.standardRoom"),
                            description: t("stay.standardRoomDesc"),
                            price: t("stay.standardRoomInfo"),
                            meal: t("stay.meals"),
                            alt: "Standard Room",
                            link: `/${locale}/standard-room`,
                        },
                        {
                            image: DeluxeRoomImage,
                            title: t("stay.deluxeRoom"),
                            description: t("stay.deluxeRoomDesc"),
                            price: t("stay.deluxeRoomInfo"),
                            meal: t("stay.meals"),
                            alt: "Deluxe Room",
                            link: `/${locale}/super-deluxe-room`,
                        },
                    ]}
                />
            </div>

        </div>
    );
}   