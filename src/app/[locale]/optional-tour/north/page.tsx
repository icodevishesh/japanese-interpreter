import { Navbar } from "@/src/components/Navbar";
import TravelLocationGrid from "@/src/components/TravelLocationGrid";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

import AgraImage1 from "@/src/assets/tour/north/agra/agra1.png";
import AgraImage2 from "@/src/assets/tour/north/agra/agra2.png";
import DelhiImage1 from "@/src/assets/tour/north/delhi/delhi1.png";
import DelhiImage2 from "@/src/assets/tour/north/delhi/delhi2.png";
import DelhiImage3 from "@/src/assets/tour/north/delhi/delhi3.png";
import DelhiImage4 from "@/src/assets/tour/north/delhi/delhi4.png";
import JaipurImage1 from "@/src/assets/tour/north/jaipur/jaipur1.png";
import JaipurImage2 from "@/src/assets/tour/north/jaipur/jaipur2.png";
import JaipurImage3 from "@/src/assets/tour/north/jaipur/jaipur3.png";
import VaranasiImage1 from "@/src/assets/tour/north/varanasi/varanasi1.png";
import VaranasiImage2 from "@/src/assets/tour/north/varanasi/varanasi2.png";
import HaridwarImage1 from "@/src/assets/tour/north/haridwar/haridwar1.png";
import HaridwarImage2 from "@/src/assets/tour/north/haridwar/haridwar2.png";
import RishikeshImage1 from "@/src/assets/tour/north/risikesh/1.png";
import RishikeshImage2 from "@/src/assets/tour/north/risikesh/2.png";
import AmritsarImage1 from "@/src/assets/tour/north/amritsar/1.png";
import AmritsarImage2 from "@/src/assets/tour/north/amritsar/2.png";
import ShimlaImage1 from "@/src/assets/tour/north/shimla/1.png";
import ShimlaImage2 from "@/src/assets/tour/north/shimla/2.png";
import ShimlaImage3 from "@/src/assets/tour/north/shimla/3.png";



export default async function North({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    const northCitiesArray = t.raw('tourism.northCities.cities') as Array<{ name: string; loc: string }>;

    const cityImageMap: Record<number, any[]> = {
        0: [ // Delhi
            DelhiImage1,
            DelhiImage2,
            DelhiImage3,
            DelhiImage4
        ],
        1: [ // Jaipur
            JaipurImage1,
            JaipurImage2,
            JaipurImage3
        ],
        2: [ // Agra
            AgraImage1,
            AgraImage2
        ],
        3: [ // Varanasi
            VaranasiImage1,
            VaranasiImage2
        ],
        4: [ // Haridwar
            HaridwarImage1,
            HaridwarImage2
        ],
        5: [ // Rishikesh
            RishikeshImage1,
            RishikeshImage2
        ],
        6: [ // Amritsar
            AmritsarImage1,
            AmritsarImage2
        ],
        7: [ // Shimla/Manali
            ShimlaImage1,
            ShimlaImage2,
            ShimlaImage3
        ]
    };

    const cities = northCitiesArray.map((city: { name: string; loc: string }, index: number) => ({
        name: city.name,
        loc: city.loc,
        images: cityImageMap[index] || []
    }));

    return (
        <div className="bg-white">
            <Navbar locale={locale} />

            {/* Hero Section */}
            <section className="w-full bg-[#e6f6f4] py-8 md:py-10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12aa91] tracking-tight">
                        {t("tourism.northCities.title")}
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
                                {t("tourism.northCities.title")}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-24">
                <TravelLocationGrid cities={cities} />
            </div>
        </div>
    );
}