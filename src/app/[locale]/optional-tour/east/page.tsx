import { Navbar } from "@/src/components/Navbar";
import TravelLocationGrid from "@/src/components/TravelLocationGrid";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function East({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    const eastCitiesArray = t.raw('tourism.eastCities.cities') as Array<{ name: string; loc: string }>;

    const cityImageMap: Record<number, string[]> = {
        0: [ // Kolkata
        ],
        1: [ // Darjeeling
        ],
        2: [ // Gangtok
        ],
        3: [ // Varanasi
        ],
        4: [ // Haridwar
        ],
        5: [ // Rishikesh
        ],
        6: [ // Amritsar
        ],
        7: [ // Shimla/Manali

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