import AboutBrief from "@/components/HomePage/AboutBrief";
import Features from "@/components/HomePage/Features";
import HeroSlider from "@/components/HomePage/HeroSlider";
import Services from "@/components/HomePage/Services";
import Testimonials from "@/components/HomePage/Testimonials";
import VideoSection from "@/components/HomePage/VideoSection";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const { page } = await getDictionary(locale);

  return (
    <div className="overflow-hidden flex flex-col gap-12">
      <HeroSlider />
      <AboutBrief />
      <Features />
      <Services />
      <VideoSection />
      <Testimonials />
    </div>
  );
}
