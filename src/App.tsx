import { useEffect } from "react";

import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import Intro from "./Elements/Intro";
import Registration from "./Elements/Registration";
import StayProductEl from "./Elements/StayProductEl";

const App = () => {
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    reveal();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Header />
      <Intro />
      <img
        src="./bg-curve-desktop.svg"
        alt="bg curve desktop"
        className="w-screen object-cover"
      />
      <div className="w-screen h-auto bg-light-grayish-blue">
        <StayProductEl />
      </div>
      <div className="w-screen h-auto bg-desaturated-blue text-light-grayish-blue">
        <Registration />
      </div>
      <Footer />
    </main>
  );
};

export default App;
