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
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804086/mumbai_3__24_11zon_gnyv3u.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804082/mumbai_2__23_11zon_peidhh.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804080/mumbai_1__22_11zon_hzopjb.jpg"
        ],
        1: [ // Pune
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804111/pune_3__21_11zon_vdsxks.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804105/pune_2__20_11zon_gmgtay.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804103/pune_1__19_11zon_sbm7wf.jpg"
        ],
        2: [ // Aurangabad
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803987/aurangabad_3__18_11zon_aoak6s.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803984/aurangabad_2__17_11zon_tcwpxk.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803980/aurangabad_1__16_11zon_a9scti.jpg"
        ],
        3: [ // Ahmedabad
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803965/ahmedabad_3__15_11zon_iggxte.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803962/ahmedabad_2__14_11zon_dtjlko.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803958/ahmedabad_1__13_11zon_q5pfzz.jpg"
        ],
        4: [ // Goa
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804032/goa_3__12_11zon_xxk0w7.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804029/goa_2__11_11zon_pbhjra.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804027/goa_1__10_11zon_bpl3tq.jpg"
        ],
        5: [ // Raan of Kutch
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804135/kutch_3__9_11zon_miajdg.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804131/kutch_2__8_11zon_ttyixy.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804128/kutch_1__7_11zon_cr91ag.jpg"
        ],
        6: [ // Gir National Park
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804011/gir_3__6_11zon_buntcs.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804008/gir_2__5_11zon_peddza.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804004/gir_1__4_11zon_ja5zjc.jpg"
        ],
        7: [ // Rajasthan
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804163/rajesthan_3__3_11zon_pfxxao.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804160/rajesthan_2__2_11zon_eiavoa.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804157/rajesthan_1__1_11zon_sdfjg0.jpg"
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