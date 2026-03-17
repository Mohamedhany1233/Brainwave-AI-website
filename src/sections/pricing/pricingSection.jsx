import { smallSphere, stars } from "../../assets";
import Heading from "../../components/ui/Heading";
import Section from "../../components/ui/section";
import PricingList from "./pricingList";
import { LeftLine, RightLine } from "./visuals/Pricing";

const PricingSection = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
          className="sm:text-center"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase hover:underline"
            href="#pricing"
          >
            See The Full Details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;
