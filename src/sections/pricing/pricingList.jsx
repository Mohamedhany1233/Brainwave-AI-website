import { pricing } from "../../constants";
import Button from "../../components/ui/Button";
import { check } from "../../assets";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((p) => (
        <div
          key={p.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-3xl lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{p.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {p.description}
          </p>

          <div className="flex items-center h-[5.5rem]">
            {p.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none">{p.price}</div>
              </>
            )}
          </div>
          <Button className="w-full mb-6 my-6" white={!!p.price}>
            {p.price ? "Get Started" : "Contact Us"}
          </Button>

          <ul>
            {p.features.map((f, i) => (
              <li key={i} className="flex items-start py-5 border-t border-n-6">
                <img src={check} width={24} height={24} alt="check" />
                <p className="body-2 ml-4">{f}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
