import { Navbar } from "@/src/components/Navbar";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import NorthIndiaImage from "@/src/assets/north-india.jpg";
import SouthIndiaImage from "@/src/assets/south-india.png";
import EastIndiaImage from "@/src/assets/east-india.jpg";
import WestIndiaImage from "@/src/assets/west-india.jpg";




export default async function OptionalTour({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    return (
        <div>
            <Navbar locale={locale} />

            <section className="w-full bg-[#e6f6f4] py-8 md:py-10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12aa91] tracking-tight">
                        {t("OptionalTour.title")}
                    </h1>
                    <nav className="mb-6">
                        <ol className="flex items-center justify-center space-x-4 mt-4 text-sm">
                            <li>
                                <a
                                    href={`/${locale}`}
                                    className="text-[#12aa91] hover:text-[#0f8b73] transition-colors"
                                >
                                    {t("OptionalTour.home")}
                                </a>
                            </li>
                            <li className="text-[#12aa91]">/</li>
                            <li className="text-[#12aa91] font-medium">
                                {t("OptionalTour.optionalTour")}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Optional Tour Section */}
             <section id="tours" className="w-full bg-[#f9fafb] py-12 md:py-24 px-4 md:px-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <span className="bg-[#e6f6f4] text-[#12aa91] px-4 py-2 rounded-lg text-lg font-bold mb-4 inline-block">
                        {t("OptionalTour.badge")}
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] max-w-4xl mx-auto leading-tight tracking-tight mt-6">
                        {t("OptionalTour.description")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {[
                        { title: t("tourism.north"), img: NorthIndiaImage },
                        { title: t("tourism.south"), img: SouthIndiaImage },
                        { title: t("tourism.east"), img: EastIndiaImage },
                        { title: t("tourism.west"), img: WestIndiaImage },
                    ].map((region, idx) => (
                        <div key={idx} className="group relative aspect-[3/2] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src={region.img}
                                alt={region.title}
                                fill
                                className="object-cover"
                            />
                            {/* Overlay with title matching design */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-start p-6">
                                <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight text-start">
                                    {region.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
