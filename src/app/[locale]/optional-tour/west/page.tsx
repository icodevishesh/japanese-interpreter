import { Navbar } from "@/src/components/Navbar";
import TravelLocationGrid from "@/src/components/TravelLocationGrid";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

import MumbaiImage from "@/src/assets/tour/west/mumbai/1.png";
import MumbaiImage2 from "@/src/assets/tour/west/mumbai/2.png";
import MumbaiImage3 from "@/src/assets/tour/west/mumbai/3.png";
import PuneImage1 from "@/src/assets/tour/west/pune/1.png";
import PuneImage2 from "@/src/assets/tour/west/pune/2.png";
import PuneImage3 from "@/src/assets/tour/west/pune/3.png";
import AurangabadImage1 from "@/src/assets/tour/west/aurangabad/1.png";
import AurangabadImage2 from "@/src/assets/tour/west/aurangabad/2.png";
import AurangabadImage3 from "@/src/assets/tour/west/aurangabad/3.png";
import AhmedabadImage1 from "@/src/assets/tour/west/ahmedabad/1.png";
import AhmedabadImage2 from "@/src/assets/tour/west/ahmedabad/2.png";
import AhmedabadImage3 from "@/src/assets/tour/west/ahmedabad/3.png";
import GoaImage1 from "@/src/assets/tour/west/goa/1.png";
import GoaImage2 from "@/src/assets/tour/west/goa/2.png";
import GoaImage3 from "@/src/assets/tour/west/goa/3.png";
import RaanImage1 from "@/src/assets/tour/west/raan-of-kutch/1.png";
import RaanImage2 from "@/src/assets/tour/west/raan-of-kutch/2.png";
import RaanImage3 from "@/src/assets/tour/west/raan-of-kutch/3.png";
import GirImage1 from "@/src/assets/tour/west/gir-national-park/1.png";
import GirImage2 from "@/src/assets/tour/west/gir-national-park/2.png";
import GirImage3 from "@/src/assets/tour/west/gir-national-park/3.png";
import RajasthanImage1 from "@/src/assets/tour/west/rajasthan/1.png";
import RajasthanImage2 from "@/src/assets/tour/west/rajasthan/2.png";
import RajasthanImage3 from "@/src/assets/tour/west/rajasthan/3.png";

export default async function West({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    const westCitiesArray = t.raw('tourism.westCities.cities') as Array<{ name: string; loc: string }>;

    const cityImageMap: Record<number, any[]> = {
        0: [ // Mumbai
            MumbaiImage,
            MumbaiImage2,
            MumbaiImage3
        ],
        1: [ // Pune
            PuneImage1,
            PuneImage2,
            PuneImage3
        ],
        2: [ // Aurangabad
            AurangabadImage1,
            AurangabadImage2,
            AurangabadImage3
        ],
        3: [ // Ahmedabad
            AhmedabadImage1,
            AhmedabadImage2,
            AhmedabadImage3
        ],
        4: [ // Goa
            GoaImage1,
            GoaImage2,
            GoaImage3
        ],
        5: [ // Raan of Kutch
            RaanImage1,
            RaanImage2,
            RaanImage3
        ],
        6: [ // Gir National Park
            GirImage1,
            GirImage2,
            GirImage3
        ],
        7: [ // Rajasthan
            RajasthanImage1,
            RajasthanImage2,
            RajasthanImage3
        ]
    };

    const cities = westCitiesArray.map((city: { name: string; loc: string }, index: number) => ({
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
                        {t("tourism.westCities.title")}
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
                                {t("tourism.westCities.title")}
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