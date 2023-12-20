import heroImageDesktop from "../assets/images/hero-desktop.jpg";
import heroImageStyle from "../assets/Styles/heroImage.module.css";

const HeroImage = () => {
  return (
    <img
      className={heroImageStyle.heroImage}
      src={heroImageDesktop}
      alt="A girl wearing orange shirt"
    />
  );
};
export default HeroImage;
