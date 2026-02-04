import { Navbar } from "@/src/components/Navbar";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HennaArtImage from "@/src/assets/Hennatattoo.png";


export default async function Hennatattoo({
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

            {/* Hero Section */}
            <section className="w-full bg-[#e6f6f4] py-8 md:py-10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12aa91] tracking-tight">
                        {t("hennatattoo.title")}
                    </h1>
                    <nav className="mb-6">
                        <ol className="flex items-center justify-center space-x-4 mt-4 text-sm">
                            <li>
                                <a
                                    href={`/${locale}`}
                                    className="text-[#12aa91] hover:text-[#0f8b73] transition-colors"
                                >
                                    {t("hennatattoo.home")}
                                </a>
                            </li>
                            <li className="text-[#12aa91]">/</li>
                            <li className="text-[#12aa91] font-medium">
                                {t("hennatattoo.HennaArtExperience")}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Dressprice section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* Left side - Image */}
                            <div className="relative h-64 lg:h-auto flex items-center justify-center bg-white">
                                <img
                                    src={HennaArtImage.src}
                                    alt="Henna Art Experience"
                                    className="max-w-full max-h-full object-contain border-2 border-[#12aa91] rounded-lg"
                                />
                            </div>

                            {/* Right side - Content */}
                            <div className="p-8 md:p-12">
                                {/* PRICE */}
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                                        {t("tattooPrice.title")}
                                    </h2>

                                    <div className="flex items-center gap-3">
                                        <svg
                                            className="w-4 h-4 text-[#12aa91] flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>

                                        <p className="text-gray-600">
                                            {t("tattooPrice.Price")}
                                        </p>
                                    </div>
                                </div>

                                {/* EXPLANATION */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                        {t("tattooPrice.exp")}
                                    </h3>

                                    {[1, 2, 3, 4].map((item, index) => (
                                        <div key={item}>
                                            <div className="flex items-start gap-4">
                                                <svg
                                                    className="w-4 h-4 text-[#12aa91] mt-1 flex-shrink-0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>

                                                <p className="text-gray-600 leading-relaxed">
                                                    {t(`tattooPrice.item${item}`)}
                                                </p>
                                            </div>

                                            {index < 3 && (
                                                <div className="ml-8 my-4 border-b border-gray-200"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}