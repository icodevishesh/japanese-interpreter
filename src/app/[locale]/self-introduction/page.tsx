import { Navbar } from "@/src/components/Navbar";
import { BadgeCheck, Home } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { TeamMemberCard } from "@/src/components/TeamMemberCard";
import ImageGallery from "@/src/components/ImageGallery";

export default async function SelfIntroduction({
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
                        {t("selfhero.title")}
                    </h1>
                    <nav className="mb-6">
                        <ol className="flex items-center justify-center space-x-4 mt-4 text-sm">
                            <li>
                                <a
                                    href={`/${locale}`}
                                    className="text-[#12aa91] hover:text-[#0f8b73] transition-colors"
                                >
                                    {t("selfhero.home")}
                                </a>
                            </li>
                            <li className="text-[#12aa91]">/</li>
                            <li className="text-[#12aa91] font-medium">
                                {t("selfhero.selfIntroduction")}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Intro Section */}
            <section className="w-full relative overflow-hidden bg-white py-6 md:py-10 px-4 md:px-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
                    {/* Left: Image */}
                    <div className="relative order-1 lg:order-1 mt-4 lg:mt-0">

                        {/* Main Image */}
                        <div className="overflow-hidden shadow-2xl relative z-10">
                            <Image
                                src="https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804244/self-intro-img1_21_11zon_i5bjgf.jpg"
                                alt="Self Introduction"
                                width={1000}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col items-center lg:items-start order-2 lg:order-2 space-y-4">
                        <ul className="space-y-4 w-full h-full">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <div className="shrink-0 mt-1 relative w-6 h-6 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                        <BadgeCheck className="text-amber-500 h-6 w-6" />
                                    </div>
                                    <p className="text-lg md:text-2xl text-black">
                                        {t(`introSelf.item${i}`)}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <ImageGallery
                images={[
                    { src: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804250/image1_9_11zon_o70tvm.jpg", alt: "Self Introduction 1" },
                    { src: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804253/image2_1_11zon_rnn8ni.jpg", alt: "Self Introduction 2" },
                    { src: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804257/image3_2_11zon_v0m7tb.jpg", alt: "Massage Experience" },
                    { src: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804261/image4_3_11zon_ptjtfv.jpg", alt: "Yoga Experience" },
                    { src: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804266/image5_4_11zon_iqo31i.jpg", alt: "North India Tourism" },
                    { src: "https://res.cloudinary.com/dtdvglgx4/image/upload/v1770804272/image6_5_11zon_blghbw.jpg", alt: "North India Tourism" },
                ]}
            />

            {/* Team Members Section */}
            <section className="w-full bg-white py-8 md:py-12 px-4 md:px-12">
                <div className="w-37 text-center justify-center mx-auto">
                   <h2 className="bg-[#f0f9f8] text-[#12aa91] px-4 py-1.5 rounded-lg text-sm font-semibold tracking-wide flex items-center gap-2">
                        {t("teamMember.title")}
                    </h2>
                </div>
                <div className="max-w-6xl mx-auto">
                    <p className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] my-6 tracking-tight text-center mb-8">
                        {t("teamMember.description")}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <TeamMemberCard
                            name={t(`teamMember.member1.name`)}
                            role={t(`teamMember.member1.role`)}
                            description={t(`teamMember.member1.description`)}
                            image="https://res.cloudinary.com/dtdvglgx4/image/upload/v1770792759/member1_omfip3.png"
                        />
                        <TeamMemberCard
                            name={t(`teamMember.member2.name`)}
                            role={t(`teamMember.member2.role`)}
                            description={t(`teamMember.member2.description`)}
                            image="https://res.cloudinary.com/dtdvglgx4/image/upload/v1770792762/member2_l43hps.png"
                        />
                        <TeamMemberCard
                            name={t(`teamMember.member3.name`)}
                            role={t(`teamMember.member3.role`)}
                            description={t(`teamMember.member3.description`)}
                            image="https://res.cloudinary.com/dtdvglgx4/image/upload/v1770792767/member3_w9ehjj.png"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}