import { Navbar } from "@/src/components/Navbar";
import TravelLocationGrid from "@/src/components/TravelLocationGrid";
import { getTranslations, setRequestLocale } from "next-intl/server";

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
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/chennai/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/chennai/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/chennai/3.png"
        ], 
        1: [ // Madurai
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/madurai/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/madurai/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/madurai/3.png"
        ],
        2: [// Bangalore
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/bangalore/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/bangalore/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/bangalore/3.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/bangalore/4.png"
        ],
        3: [  // Mysore
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/mysore/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/mysore/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/mysore/3.png"
        ],
        4: [ // Hampi
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/hampi/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/hampi/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/hampi/3.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/hampi/4.png"
        ],
        5: [  // goa
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/goa/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/goa/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/goa/3.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/goa/4.png"
        ],
        6: [  // kerala
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/kerala/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/kerala/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/kerala/3.png"
        ],
        7: [ // Rameshwaram
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/rameshwaram/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/rameshwaram/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/south/rameshwaram/3.png"
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