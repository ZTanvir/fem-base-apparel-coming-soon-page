import buttonImg from "../assets/images/icon-arrow.svg";
const GetNotifiedForm = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Email Address" />
      <button type="submit">
        <img src={buttonImg} alt="right arrow" />
      </button>
    </form>
  );
};
export default GetNotifiedForm;
