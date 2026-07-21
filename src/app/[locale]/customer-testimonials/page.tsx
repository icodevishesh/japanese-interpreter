import { Navbar } from "@/src/components/Navbar";
import { Import } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

export default async function CustomerTestimonials({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();

    // Get testimonials data
    const testimonials = t.raw("testimonials.items");

    // Map testimonial names to their images
    const testimonialImages: { [key: string]: any } = {
        "Reiko": "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770790463/reiko_j0uynt.jpg",
        "Kazuyo": "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770790463/kazuyo_ntfuxc.jpg",
        "Noriko": "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770790463/noriko_jobwg8.jpg",
        "Rina": "",
        "Akemi": "",
        "Madoka": "",
        "Akiko": "",
        "Sachi": ""
    };



    return (
        <div className="bg-white">
            <Navbar locale={locale} />

            {/* Hero Section */}
            <section className="w-full bg-[#e6f6f4] py-8 md:py-10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12aa91] tracking-tight">
                        {t("CustomerTestimonialpg.title")}
                    </h1>
                    <nav className="mb-6">
                        <ol className="flex items-center justify-center space-x-4 mt-4 text-sm">
                            <li>
                                <a
                                    href={`/${locale}`}
                                    className="text-[#12aa91] hover:text-[#0f8b73] transition-colors"
                                >
                                    {t("CustomerTestimonialpg.home")}
                                </a>
                            </li>
                            <li className="text-[#12aa91]">/</li>
                            <li className="text-[#12aa91] font-medium">
                                {t("CustomerTestimonialpg.testimonials")}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Customer Testimonials Section */}
            <section id="Testimonial" className="w-full bg-[#f9fafb] py-12 md:py-24 px-4 md:px-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <span className="bg-[#e6f6f4] text-[#12aa91] px-4 py-2 rounded-lg text-lg font-bold mb-6 inline-block">
                        {t("CustomerTestimonialpg.badge")}
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] max-w-5xl mx-auto leading-tight tracking-tight mt-6">
                        {t("CustomerTestimonialpg.description")}
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-auto">
                    {testimonials.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 h-fit"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-4">
                                {/* Profile Image */}
                                {testimonialImages[item.id] ? (
                                    <Image
                                        src={testimonialImages[item.id]?.trimEnd()}
                                        alt={item.name}
                                        width={56}
                                        height={56}
                                        className="w-18 h-18 object-cover"
                                        unoptimized
                                    />
                                ) : (
                                    <div className="w-18 h-18 bg-[#12aa91] flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">
                                            {item.name.charAt(0)}
                                        </span>
                                    </div>
                                )}

                                <div>
                                    {/* Stars */}
                                    <div className="flex mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-lg">★</span>
                                        ))}
                                    </div>

                                    {/* Name */}
                                    <h3 className="font-semibold text-lg text-gray-900">
                                        {item.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>


            </section>


        </div>
    );
}
