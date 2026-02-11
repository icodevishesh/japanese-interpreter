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
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803227/kol1_3__21_11zon_rhu0a7.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803226/kol1_2__20_11zon_kavgl0.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803224/kol1_1__19_11zon_spkmgb.jpg"
        ],
        1: [ // Darjeeling
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803177/da1_2__18_11zon_ingegx.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803174/da1_1__17_11zon_kpns93.jpg"
        ],
        2: [ // Bodh Gaya
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803127/bg1_15_11zon_igy1cs.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803129/bg2_16_11zon_uzzpnm.jpg"
        ],
        3: [ // Puri
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803287/puri1_1__13_11zon_ybxfmi.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803289/puri1_2__14_11zon_nflxvc.jpg"
        ],
        4: [// Sikkim
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803289/puri1_2__14_11zon_nflxvc.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803313/sikkim1_3__11_11zon_ebyunn.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803311/sikkim1_2__10_11zon_b12qo5.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803308/sikkim1_1__9_11zon_ys1tnt.jpg"
        ],
        5: [ // Kaziranga
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803197/kaz1_1__6_11zon_r472d0.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803200/kaz1_2__7_11zon_ny3jup.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803202/kaz1_3__8_11zon_yxnsjz.png"
        ],
        6: [ // Nalanda
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803270/nal1_3__5_11zon_lrnfh1.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803268/nal1_2__4_11zon_hcy8lm.jpg"
        ],
        7: [ // Ziro
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803325/ziro1_2__2_11zon_sg6yzf.jpg",
            "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770803322/ziro1_1__1_11zon_lgjisn.jpg"
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