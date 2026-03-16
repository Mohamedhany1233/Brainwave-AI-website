import Section from "../../components/ui/section";
import Heading from "../../components/ui/Heading";
import { benefits } from "../../constants/index";
import Arrow from "../../assets/svg/Arrow";
import { GradientLight } from "./visuals/Benefits";
import ClipPath from "../../assets/svg/ClipPath";

const BenefitsSection = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Chat Smarter, Not Harder with Brainwave"
        />
      </div>

      <div className="container flex flex-wrap items-center justify-center gap-10 mb-10">
        {benefits.map((b) => (
          <div
            key={b.id}
            className="block relative p-5.0 bg-no-repeat bg-[length:100%_100%] md:w-[24rem]"
            style={{
              backgroundImage: `url(${b.backgroundUrl})`,
            }}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5">{b.title}</h5>
              <p className="body-2 mb-6 text-n-3">{b.text}</p>
              <div className="flex items-center mt-auto">
                <img src={b.iconUrl} width={48} height={48} alt={b.title} />
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  Explore More
                </p>
                <Arrow />
              </div>
            </div>

            {b.light && <GradientLight />}

            <div
              className="absolute inset-0.5 bg-n-8 "
              style={{
                clipPath: "url(#benefits)",
              }}
            >
              <div className="opacity-0 absolute inset-0 transition-opacity hover:opacity-10">
                {b.imageUrl && (
                  <img
                    className="w-full h-full object-cover"
                    src={b.imageUrl}
                    width={380}
                    height={362}
                    alt={b.title}
                  />
                )}
              </div>
            </div>
            <ClipPath />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BenefitsSection;
