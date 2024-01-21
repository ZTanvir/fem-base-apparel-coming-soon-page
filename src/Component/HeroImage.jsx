import heroImageStyle from "../assets/Styles/heroImage.module.css";

const HeroImage = ({ device }) => {
  return (
    <img
      className={heroImageStyle.heroImage}
      src={device}
      alt="A girl wearing orange shirt"
    />
  );
};
export default HeroImage;
