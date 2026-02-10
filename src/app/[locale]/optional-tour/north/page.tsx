import { Navbar } from "@/src/components/Navbar";
import TravelLocationGrid from "@/src/components/TravelLocationGrid";
import { getTranslations, setRequestLocale } from "next-intl/server";



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
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/delhi/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/delhi/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/delhi/3.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/delhi/4.png"
        ],
        1: [ // Jaipur
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/jaipur/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/jaipur/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/jaipur/3.png"
        ],
        2: [ // Agra
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/agra/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/agra/2.png"
        ],
        3: [ // Varanasi
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/varanasi/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/varanasi/2.png"
        ],
        4: [ // Haridwar
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/haridwar/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/haridwar/2.png"
        ],
        5: [ // Rishikesh
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/risikesh/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/risikesh/2.png"
        ],
        6: [ // Amritsar
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/amritsar/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/amritsar/2.png"
        ],
        7: [ // Shimla/Manali
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/shimla/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/shimla/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/north/shimla/3.png"
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