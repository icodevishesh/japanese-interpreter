import { Navbar } from "@/src/components/Navbar";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ExperienceCard from "@/src/components/ExperienceCard";
const experiences = [
  {
    title: "Indian Cuisine Experience",
    image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770802866/veg_2_11zon_commpn.jpg",
  },
  {
    title: "Experience how to wrap a sari (dressing)",
    image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770802936/Sari_1_11zon_xmzuic.jpg",
  },
  {
    title: "Henna art experience (henna tattoo)",
    image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770802831/Hennatattoo_6_11zon_vpym5o.jpg",
  },
  {
    title: "Ayurvedic massage (Shirodhara)",
    image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770790566/massage_j9jfj7.jpg",
  },
  {
    title: "Palmistry and fortune telling",
    image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770802906/Palmistry_7_11zon_lhax5a.jpg", // Using existing image as placeholder
  },
  {
    title: "Yoga experience",
    image: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770790652/yoga_iorclm.jpg",
  },
];

export default async function Experiences({
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
                        {t("exphero.title")}
                    </h1>
                    <nav className="mb-6">
                        <ol className="flex items-center justify-center space-x-2 text-sm">
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
            <main className="bg-gray-50 py-12 px-6">
                <div className="max-w-6xl mx-auto grid gap-12 
                    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {experiences.map((item, index) => (
                        <ExperienceCard key={index} {...item} index={index} />
                    ))}
                </div>
            </main>

        </div>
    )
}
