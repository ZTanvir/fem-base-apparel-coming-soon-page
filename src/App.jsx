import Logo from "./Component/Logo";
import Title from "./Component/Title";
import Subtitle from "./Component/Subtitle";
import GetNotifiedForm from "./Component/GetNotifiedForm";
import HeroImage from "./Component/HeroImage";
import "./assets/Styles/app.css";

function App() {
  return (
    <div className="wrapper">
      <section className="site-info">
        <Logo />
        <Title />
        <Subtitle />
        <GetNotifiedForm />
      </section>
      <section className="heroImage">
        <HeroImage />
      </section>
    </div>
  );
}

export default App;
