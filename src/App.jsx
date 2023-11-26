import Logo from "./Component/Logo";
import Title from "./Component/Title";
import Subtitle from "./Component/Subtitle";
import GetNotifiedForm from "./Component/GetNotifiedForm";
import HeroImage from "./Component/HeroImage";

function App() {
  return (
    <div className="wrapper">
      <Logo />
      <Title />
      <Subtitle />
      <GetNotifiedForm />
      <HeroImage />
    </div>
  );
}

export default App;
