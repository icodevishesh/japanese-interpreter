import { Navbar } from "@/src/components/Navbar";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactForm from "@/src/components/ContactForm";


export default async function Inquiry({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations();


    return (
        <div className="bg-white">
            <Navbar locale={locale} />

            {/* Hero Section */}

             <section className="w-full bg-[#e6f6f4] py-8 md:py-12 mb-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#12aa91] tracking-tight">
                        {t("inquiry.title")}
                    </h1>
                    <nav className="mb-6">
                        <ol className="flex items-center justify-center space-x-4 mt-4 text-sm">
                            <li>
                                <a
                                    href={`/${locale}`}
                                    className="text-[#12aa91] hover:text-[#0f8b73] transition-colors"
                                >
                                    {t("inquiry.home")}
                                </a>
                            </li>
                            <li className="text-[#12aa91]">/</li>
                            <li className="text-[#12aa91] font-medium">
                                {t("inquiry.Enquiry")}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Inquiry Form Section */}
            <ContactForm />

            {/* Map Section */}
            <section className="w-full bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Visit Us
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Find us at our office in New Delhi, India
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Map Container */}
                        <div className="relative h-96 bg-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448038.55496216484!2d77.098873!3d28.680635000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1770200669809!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full"
                                title="Office Location Map"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}