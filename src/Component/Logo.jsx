import LogoImg from "../assets/images/logo.svg";
const Logo = () => {
  console.log(LogoImg);
  return (
    <img
      className="logo-img"
      src={LogoImg}
      alt="A logo which is looks like a pink ring and name is BASE APPAREL"
    />
  );
};
export default Logo;
