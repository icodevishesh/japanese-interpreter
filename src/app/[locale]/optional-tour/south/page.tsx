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
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803649/chennai_3__7_11zon_fktrwc.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803646/chennai_2__6_11zon_jgjrur.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803642/chennai_1__5_11zon_bpib5h.jpg"
        ], 
        1: [ // Madurai
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803739/madhurai_3__4_11zon_oyhivn.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803736/madhurai_2__3_11zon_cwofpb.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803734/madhurai_1__2_11zon_oylgpb.jpg"
        ],
        2: [// Bangalore
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803629/bangalore_4__4_11zon_mdkq4k.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803626/bangalore_3__3_11zon_lrkvze.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803623/bangalore_2__2_11zon_das5co.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803619/bangalore_1__1_11zon_zzbq1u.jpg"
        ],
        3: [  // Mysore
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803897/mysore_1__18_11zon_nq8o1t.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803894/mysore_3__9_11zon_hlyrhd.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803891/mysore_2__8_11zon_k17fha.jpg"
        ],
        4: [ // Hampi
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803703/hampi_4__17_11zon_vicxld.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803699/hampi_3__16_11zon_huhnfb.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803696/hampi_2__15_11zon_znfouo.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803693/hampi_1__14_11zon_twcfkq.jpg"
        ],
        5: [  // goa
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803683/goa_4__13_11zon_zayb5b.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803680/goa_3__12_11zon_jxgd8n.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803677/goa_2__11_11zon_fun4pu.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803675/goa_1__10_11zon_o90mwm.jpg"
        ],
        6: [  // kerala
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803721/kerala_3__9_11zon_ukkyfk.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803718/kerala_2__8_11zon_cae6c6.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803716/kerala_1__7_11zon_tzskbh.jpg"
        ],
        7: [ // Rameshwaram
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803919/rameshwaram_1__1_11zon_yvtq6s.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803927/rameshwaram_3__6_11zon_tnxfcd.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803927/rameshwaram_3__6_11zon_tnxfcd.jpg"
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