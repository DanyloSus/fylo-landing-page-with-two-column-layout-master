import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import Intro from "./Elements/Intro";
import Registration from "./Elements/Registration";
import StayProductEl from "./Elements/StayProductEl";

const App = () => {
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
