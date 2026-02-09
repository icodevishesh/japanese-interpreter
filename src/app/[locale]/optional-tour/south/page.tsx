import { Navbar } from "@/src/components/Navbar";
import TravelLocationGrid from "@/src/components/TravelLocationGrid";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

import BangaloreImage1 from "@/src/assets/tour/south/bangalore/1.png";
import BangaloreImage2 from "@/src/assets/tour/south/bangalore/2.png";
import BangaloreImage3 from "@/src/assets/tour/south/bangalore/3.png";
import BangaloreImage4 from "@/src/assets/tour/south/bangalore/4.png";
import ChennaiImage1 from "@/src/assets/tour/south/chennai/1.png";
import ChennaiImage2 from "@/src/assets/tour/south/chennai/2.png";
import ChennaiImage3 from "@/src/assets/tour/south/chennai/3.png";
import GoaImage1 from "@/src/assets/tour/south/goa/1.png";
import GoaImage2 from "@/src/assets/tour/south/goa/2.png";
import GoaImage3 from "@/src/assets/tour/south/goa/3.png";
import GoaImage4 from "@/src/assets/tour/south/goa/4.png";
import HampiImage1 from "@/src/assets/tour/south/hampi/1.png";
import HampiImage2 from "@/src/assets/tour/south/hampi/2.png";
import HampiImage3 from "@/src/assets/tour/south/hampi/3.png";
import HampiImage4 from "@/src/assets/tour/south/hampi/4.png";
import KeralaImage1 from "@/src/assets/tour/south/kerala/1.png";
import KeralaImage2 from "@/src/assets/tour/south/kerala/2.png";
import KeralaImage3 from "@/src/assets/tour/south/kerala/3.png";
import MaduraiImage1 from "@/src/assets/tour/south/madurai/1.png";
import MaduraiImage2 from "@/src/assets/tour/south/madurai/2.png";
import MaduraiImage3 from "@/src/assets/tour/south/madurai/3.png";
import MysoreImage1 from "@/src/assets/tour/south/mysore/1.png";
import MysoreImage2 from "@/src/assets/tour/south/mysore/2.png";
import MysoreImage3 from "@/src/assets/tour/south/mysore/3.png";
import RameshwaramImage1 from "@/src/assets/tour/south/rameshwaram/1.png";
import RameshwaramImage2 from "@/src/assets/tour/south/rameshwaram/2.png";
import RameshwaramImage3 from "@/src/assets/tour/south/rameshwaram/3.png";

export default async function South({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    const southCitiesArray = t.raw('tourism.southCities.cities') as Array<{ name: string; loc: string }>;

    const cityImageMap: Record<number, any[]> = {
        0: [ // Chennai
            ChennaiImage1,
            ChennaiImage2,
            ChennaiImage3
        ], 
        1: [ // Madurai
            MaduraiImage1,
            MaduraiImage2,
            MaduraiImage3
        ],
        2: [// Bangalore
            BangaloreImage1,
            BangaloreImage2,
            BangaloreImage3,
            BangaloreImage4
        ],
        3: [  // Mysore
            MysoreImage1,
            MysoreImage2,
            MysoreImage3
        ],
        4: [ // Hampi
            HampiImage1,
            HampiImage2,
            HampiImage3,
            HampiImage4
        ],
        5: [  // goa
            GoaImage1,
            GoaImage2,
            GoaImage3,
            GoaImage4
        ],
        6: [  // kerala
            KeralaImage1,
            KeralaImage2,
            KeralaImage3
        ],
        7: [ // Rameshwaram
            RameshwaramImage1,
            RameshwaramImage2,
            RameshwaramImage3
        ]
    };

    const cities = southCitiesArray.map((city: { name: string; loc: string }, index: number) => ({
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
                        {t("tourism.southCities.title")}
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
                                {t("tourism.southCities.title")}
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