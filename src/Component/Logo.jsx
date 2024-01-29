import LogoImg from "../assets/images/logo.svg";
import logoSectionStyle from "../assets/Styles/logoSection.module.css";

const Logo = () => {
  return (
    <div className={logoSectionStyle.logoSection}>
      <img
        className="logo-img"
        src={LogoImg}
        alt="A logo which is looks like a pink ring and name is BASE APPAREL"
      />
    </div>
  );
};
export default Logo;
