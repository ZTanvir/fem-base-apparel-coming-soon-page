import { useState } from "react";
import buttonImg from "../assets/images/icon-arrow.svg";
import errorIcon from "../assets/images/icon-error.svg";
import notifiedFormStyle from "../assets/Styles/notifiedForm.module.css";

const GetNotifiedForm = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEmailValid(email)) {
      setEmail("");
      setErrorMsg("");
    } else {
      setIsError(true);
      setErrorMsg("Please provide a valid email");
    }
  };
  return (
    <div>
      <form
        className={
          errorMsg
            ? `${notifiedFormStyle.formStyle} ${notifiedFormStyle.formError}`
            : notifiedFormStyle.formStyle
        }
        onSubmit={handleSubmit}
      >
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMsg("");
          }}
          placeholder="Email Address"
        />
        <span className={notifiedFormStyle.errorMsg}>
          {isError ? errorMsg : ""}
        </span>
        <span
          className={
            errorMsg
              ? `${notifiedFormStyle.errorIcon}  ${notifiedFormStyle.showError}`
              : notifiedFormStyle.errorIcon
          }
        >
          <img src={errorIcon} alt="red circle with exclamation point inside" />
        </span>

        <button type="submit">
          <img src={buttonImg} alt="right arrow" />
        </button>
      </form>
    </div>
  );
};
export default GetNotifiedForm;
