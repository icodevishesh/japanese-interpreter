import { Navbar } from "@/src/components/Navbar";
import { getTranslations, setRequestLocale } from "next-intl/server";


export default async function IndianCuisine({
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
                        {t("expitem.IndianCuisine.title")}
                    </h1>
                    <nav className="mb-6">
                        <ol className="flex items-center justify-center space-x-4 mt-4 text-sm">
                            <li>
                                <a
                                    href={`/${locale}`}
                                    className="text-[#12aa91] hover:text-[#0f8b73] transition-colors"
                                >
                                    {t("expitem.IndianCuisine.home")}
                                </a>
                            </li>
                            <li className="text-[#12aa91]">/</li>
                            <li className="text-[#12aa91] font-medium">
                                {t("expitem.IndianCuisine.IndianCuisineExperience")}
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
                                    src="https://www.japanese-interpreter.com/wp-content/uploads/images/experience-card/indiancuisine.png"
                                    alt="Palmistry Experience"
                                    className="max-w-full max-h-full object-contain bg-white border-2 border-[#12aa91] rounded-lg"
                                />
                            </div>

                            {/* Right side - Content */}
                            <div className="p-6 md:p-8 lg:p-12 order-2 lg:order-2">
                                {/* Price */}
                                {/* <div className="mb-8">
                                    <h2 className="text-2xl md:text-3xl text-start font-bold text-black mb-4">
                                        {t("expitem.IndianCuisine.title")}
                                    </h2>
                                </div> */}

                                {/* experience Items */}
                                <div className="">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                        {t("expitem.IndianCuisinePrice.title")}
                                    </h3>
                                    <div className="">
                                        {[1, 2].map((item) => (
                                            <div key={item} className="flex items-center">
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
                                                    {t(`expitem.IndianCuisinePrice.item${item}`)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <br/>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    {t("expitem.veggie.title")}
                                </h3>
                                <div className="flex flex-wrap items-center gap-x-4 text-gray-600">
                                    {[1, 2, 3, 4].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-[#12aa91] flex items-center justify-center">
                                                <svg
                                                    className="w-2.5 h-2.5 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="whitespace-nowrap">
                                                {t(`expitem.veggie.item${item}`)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <br/>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    {t("expitem.ComplementaryDrinks.title")}
                                </h3>
                                <div className="flex flex-wrap items-center gap-x-4 text-gray-600">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-[#12aa91] flex items-center justify-center">
                                                <svg
                                                    className="w-2.5 h-2.5 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="whitespace-nowrap">
                                                {t(`expitem.ComplementaryDrinks.item${item}`)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <br/>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    {t("expitem.complementaryaspects.title")}
                                </h3>
                                <div className="flex flex-wrap items-center gap-x-4 text-gray-600">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-[#12aa91] flex items-center justify-center">
                                                <svg
                                                    className="w-2.5 h-2.5 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="whitespace-nowrap">
                                                {t(`expitem.complementaryaspects.item${item}`)}
                                            </span>
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