import React from "react";
import LightBar from "../../LightBar";
import Button from "../../Button";
import About from "../../pages/About";
const Home = () => {
  return (
    <div className="bg-custom-dark-purple">
      <section
        id="hero"
        className="w-full h-screen bg-desktop-hero mask-t-from-90% mask-b-from-80% flex justify-end"
      >
        <div className="mr-8 gap-8 w-2/5 flex flex-col self-center">
          <h1 className="text-5xl mr-50 leading-14 font-courgette font-bold">
            Tatuagens Customizadas & Fotografias Profissionais em Porto Alegre -
            RS
          </h1>
          <div className="w-3/4 flex flex-col gap-6 items-center self-center">
            <h2 className="text-3xl font-courgette">
              Transforme-se em uma arte ambulante.
            </h2>
            <LightBar />
            <Button text="Agende já" />
          </div>
        </div>
      </section>
      <About />
    </div>
  );
};

export default Home;
