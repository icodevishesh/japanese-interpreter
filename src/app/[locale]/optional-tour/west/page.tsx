import { Navbar } from "@/src/components/Navbar";
import TravelLocationGrid from "@/src/components/TravelLocationGrid";
import { getTranslations, setRequestLocale } from "next-intl/server";

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
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/mumbai/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/mumbai/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/mumbai/3.png"
        ],
        1: [ // Pune
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/pune/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/pune/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/pune/3.png"
        ],
        2: [ // Aurangabad
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/aurangabad/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/aurangabad/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/aurangabad/3.png"
        ],
        3: [ // Ahmedabad
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/ahmedabad/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/ahmedabad/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/ahmedabad/3.png"
        ],
        4: [ // Goa
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/goa/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/goa/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/goa/3.png"
        ],
        5: [ // Raan of Kutch
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/raan-of-kutch/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/raan-of-kutch/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/raan-of-kutch/3.png"
        ],
        6: [ // Gir National Park
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/gir-national-park/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/gir-national-park/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/gir-national-park/3.png"
        ],
        7: [ // Rajasthan
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/rajasthan/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/rajasthan/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/west/rajasthan/3.png"
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