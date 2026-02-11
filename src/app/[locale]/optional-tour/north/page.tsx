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
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803483/del1_4__20_11zon_ffgxx6.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803480/del1_3__19_11zon_c3yjxs.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803478/del1_2__18_11zon_ck8m0r.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803476/del1_1__17_11zon_eni4hi.jpg"
        ],
        1: [ // Jaipur
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803517/jai1_1__12_11zon_wllddh.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803520/jai1_2__13_11zon_sc8o7h.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803524/jai1_3__14_11zon_tap5ml.jpg"
        ],
        2: [ // Agra
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803370/agra1_1__15_11zon_b0z22l.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803372/agra1_2__16_11zon_tk7zrt.jpg"
        ],
        3: [ // Varanasi
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803589/var_1_2__11_11zon_zywcvn.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803586/var_1_1__10_11zon_hs9svr.jpg"
        ],
        4: [ // Haridwar
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803502/hari1_2__9_11zon_tfviks.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803500/hari1_1__8_11zon_lfqleg.jpg"
        ],
        5: [ // Rishikesh
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803539/risi1_2__7_11zon_bnwxzq.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803537/risi1_1__6_11zon_aoritd.jpg"
        ],
        6: [ // Amritsar
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803396/amr1_1__1_11zon_kmsi23.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803399/amr1_2__5_11zon_x61gcs.jpg"
        ],
        7: [ // Shimla/Manali
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803570/shi1_2__3_11zon_ficu5a.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803566/shi1_1__2_11zon_ue0gtn.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803573/shi1_3__4_11zon_dtgox1.jpg"
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