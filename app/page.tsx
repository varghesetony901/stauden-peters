import Hero from "@/components/LandingPage/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { GiGiftOfKnowledge, GiPassport, GiProcessor } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { TbLivePhoto } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const perks = [
  {
    name: "Potential Trainee",
    Icon: GrUserWorker ,
    description:
      "CareerAtGermany Provides Visa porcessing support for the successfull applicant.",
  },
  {
    name: "Faster Processing",
    Icon: GiProcessor,
    description: "Get your application processed faster through this portal.",
  },
  {
    name: "Knowledge of German",
    Icon: GiGiftOfKnowledge,
    description:
      "With the best Travel plan all our successfull applicants move to Germany quickly.",
  },
  {
    name: "100% visa success rate",
    Icon: GiPassport,
    description:
      "We have 100% visa success rate since 2017.",
  },
  {
    name: "Live status updates",
    Icon: TbLivePhoto,
    description:
      "Through our live status updates a student can easily track the process.",
  },
  {
    name: "Career Insurance",
    Icon: VscWorkspaceTrusted,
    description:
      "We ensure the safety for each and every students who wish to study in Germany.",
  },
];
export default function Home() {
  return (
    <>

      <div className="">
        <Hero />
        <div className="border-b border-yellow-300 pt-[950px] sm:pt-[900px] lg:pt-[600px] xl:pt-[650px] 2xl:pt-[750px]"></div>

        <MaxWidthWrapper className="px-4">
          <div className="pt-16 ">
            <h1 className="trac pb-10 text-center text-3xl font-bold">About</h1>
            <div className="grid lg:grid-cols-2 gap-10">
              <img src="/why.jpg" alt="" className="lg:mt-2 rounded-md" />
              <div className="flex flex-col gap-4 text-gray-500 sm:text-lg font-light">
                <p>
                  Every year, thousands of apprenticeships remain unfilled in
                  Germany, while elsewhere there are high unemployment rates and
                  young people have no clear career prospects. This is one of
                  the biggest challenges for our economy. Our mission is to
                  create a platform that brings both sides together. In
                  cooperation with German language schools in India, we not only
                  not only teach students the German language, but also prepare
                  them specifically for life and work in Germany.
                </p>
                <p>
                  We introduce the students to the various training occupations
                  and help them choose their future career path. As soon as the
                  decision is made, we support the students through the entire
                  recruitment process right through to their first day of work
                  in Germany. On to our services, German companies can fill
                  their apprenticeship vacancies and build a long-term personnel
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <MaxWidthWrapper className="py-20 px-4">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-y-6 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="border  p-4  py-12 text-center lg:block lg:text-center rounded-lg shadow-lg hover:scale-[102%] duration-300"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-400">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>

        <div  className="border-t border-yellow-300 pb-16"></div>
        <Services />
        <div className="border-t border-yellow-300"></div>
        <Team />
      </div>
    </>
  );
}
