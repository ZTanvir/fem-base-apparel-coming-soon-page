import Logo from "./Component/Logo";
import Title from "./Component/Title";
import Subtitle from "./Component/Subtitle";
import GetNotifiedForm from "./Component/GetNotifiedForm";
import HeroImage from "./Component/HeroImage";
import heroImageDesktop from "../src/assets/images/hero-desktop.jpg";
import heroImageMobile from "../src/assets/images/hero-mobile.jpg";

import "./assets/Styles/app.css";

function App() {
  return (
    <div className="wrapper">
      <section className="site-info">
        <Logo />
        <section className="heroImageMobile">
          <HeroImage device={heroImageMobile} />
        </section>
        <Title />
        <Subtitle />
        <GetNotifiedForm />
      </section>
      <section className="heroImage">
        <HeroImage device={heroImageDesktop} />
      </section>
    </div>
  );
}

export default App;
