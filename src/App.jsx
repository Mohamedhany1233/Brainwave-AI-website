import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/layout/Header";
import Hero from "./components/home/hero";
import Button from "./components/ui/Button";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
