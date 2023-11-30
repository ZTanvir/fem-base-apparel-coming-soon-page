import buttonImg from "../assets/images/icon-arrow.svg";
import notifiedFormStyle from "../assets/Styles/notifiedForm.module.css";

const GetNotifiedForm = () => {
  const handleSubmit = () => {};
  return (
    <form className={notifiedFormStyle.formStyle} onSubmit={handleSubmit}>
      <input type="text" placeholder="Email Address" required />
      <button type="submit">
        <img src={buttonImg} alt="right arrow" />
      </button>
    </form>
  );
};
export default GetNotifiedForm;
