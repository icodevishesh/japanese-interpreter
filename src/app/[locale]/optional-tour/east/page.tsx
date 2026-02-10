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

    const cityImageMap: Record<number, any[]> = {
        0: [ // Kolkata
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/kolkata/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/kolkata/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/kolkata/3.png"
        ],
        1: [ // Darjeeling
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/darjeeling/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/darjeeling/2.png"
        ],
        2: [ // Bodh Gaya
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/bodh-gaya/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/bodh-gaya/2.png"
        ],
        3: [ // Puri
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/puri/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/puri/2.png"
        ],
        4: [// Sikkim
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/sikkim/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/sikkim/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/sikkim/3.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/sikkim/4.png"
        ],
        5: [ // Kaziranga
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/kaziranga/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/kaziranga/2.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/kaziranga/3.png"
        ],
        6: [ // Nalanda
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/nalanda/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/nalanda/2.png",
        ],
        7: [ // Ziro
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/ziro/1.png",
            "https://www.japanese-interpreter.com/wp-content/uploads/images/optional-tour/east/ziro/2.png"
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