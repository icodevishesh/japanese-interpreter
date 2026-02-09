import { Navbar } from "@/src/components/Navbar";
import TravelLocationGrid from "@/src/components/TravelLocationGrid";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

import kolkata1 from "@/src/assets/tour/east/kolkata/1.png";
import kolkata2 from "@/src/assets/tour/east/kolkata/2.png";
import kolkata3 from "@/src/assets/tour/east/kolkata/3.png";
import darjeeling1 from "@/src/assets/tour/east/darjeeling/1.png";
import darjeeling2 from "@/src/assets/tour/east/darjeeling/2.png";
import sikkim1 from "@/src/assets/tour/east/sikkim/1.png";
import sikkim2 from "@/src/assets/tour/east/sikkim/2.png";
import sikkim3 from "@/src/assets/tour/east/sikkim/3.png";
import sikkim4 from "@/src/assets/tour/east/sikkim/4.png";
import bodhGaya1 from "@/src/assets/tour/east/bodh-gaya/1.png";
import bodhGaya2 from "@/src/assets/tour/east/bodh-gaya/2.png";
import puri1 from "@/src/assets/tour/east/Puri/1.png";
import puri2 from "@/src/assets/tour/east/Puri/2.png";
import kaziranga1 from "@/src/assets/tour/east/Kaziranga/1.png";
import kaziranga2 from "@/src/assets/tour/east/Kaziranga/2.png";
import kaziranga3 from "@/src/assets/tour/east/Kaziranga/3.png";
import nalanda1 from "@/src/assets/tour/east/nalanda/1.png";
import nalanda2 from "@/src/assets/tour/east/nalanda/2.png";
import ziro1 from "@/src/assets/tour/east/ziro/1.png";
import ziro2 from "@/src/assets/tour/east/ziro/2.png";

export default async function East({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    const eastCitiesArray = t.raw('tourism.eastCities.cities') as Array<{ name: string; loc: string }>;

    const cityImageMap: Record<number, any[]> = {
        0: [ // Kolkata
            kolkata1,
            kolkata2,
            kolkata3
        ],
        1: [ // Darjeeling
            darjeeling1,
            darjeeling2
        ],
        2: [ // Bodh Gaya
            bodhGaya1,
            bodhGaya2
        ],
        3: [ // Puri
            puri1,
            puri2
        ],
        4: [// Sikkim
            sikkim1,
            sikkim2,
            sikkim3,
            sikkim4
        ],
        5: [ // Kaziranga
            kaziranga1,
            kaziranga2,
            kaziranga3
        ],
        6: [ // Nalanda
            nalanda1,
            nalanda2,
        ],
        7: [ // Ziro
            ziro1,
            ziro2
        ]
    };

    const cities = eastCitiesArray.map((city: { name: string; loc: string }, index: number) => ({
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
                        {t("tourism.eastCities.title")}
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
                                {t("tourism.eastCities.title")}
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