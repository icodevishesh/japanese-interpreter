import { Navbar } from "@/src/components/Navbar";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ExperienceCard from "@/src/components/ExperienceCard";

export default async function Experiences({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    const experiences = [
      {
        title: t("expitem.item1.title"),
        image: "https://www.japanese-interpreter.com/wp-content/uploads/images/experience-card/veg.png",
      },
      {
        title: t("expitem.item2.title"),
        image: "https://www.japanese-interpreter.com/wp-content/uploads/images/experience-card/sari.png",
      },
      {
        title: t("expitem.item3.title"),
        image: "https://www.japanese-interpreter.com/wp-content/uploads/images/experience-card/hennatattoo.png",
      },
      {
        title: t("expitem.item4.title"),
        image: "https://www.japanese-interpreter.com/wp-content/uploads/images/experience-card/massage.jpg",
      },
      {
        title: t("expitem.item5.title"),
        image: "https://www.japanese-interpreter.com/wp-content/uploads/images/experience-card/palmistry.png", // Using existing image as placeholder
      },
      {
        title: t("expitem.item6.title"),
        image: "https://www.japanese-interpreter.com/wp-content/uploads/images/experience-card/yoga.jpg",
      }
    ];

    return (
        <div>
            <Navbar locale={locale} />

            {/* Hero Section */}
            <section className="w-full bg-[#e6f6f4] py-8 md:py-10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12aa91] tracking-tight">
                        {t("exphero.title")}
                    </h1>
                    <nav className="mb-6">
                        <ol className="flex items-center justify-center space-x-4 mt-4 text-sm">
                            <li>
                                <a
                                    href={`/${locale}`}
                                    className="text-[#12aa91] hover:text-[#0f8b73] transition-colors"
                                >
                                    {t("exphero.home")}
                                </a>
                            </li>
                            <li className="text-[#12aa91]">/</li>
                            <li className="text-[#12aa91] font-medium">
                                {t("exphero.experiences")}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Experiences Grid */}
            <main className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto grid gap-6 md:gap-8
                    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
                    {experiences.map((item, index) => (
                        <ExperienceCard key={index} {...item} index={index} />
                    ))}
                </div>
            </main>

        </div>
    )
}
