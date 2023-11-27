import titleStyle from "../assets/Styles/title.module.css";

const Title = () => {
  return (
    <h1 className={titleStyle.title}>
      <span className={titleStyle.highlightTitle}>WE'RE</span>
      <span>COMING</span>
      <span>SOON</span>
    </h1>
  );
};
export default Title;
