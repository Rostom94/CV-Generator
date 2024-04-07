const PracticalExp = ({ workPlace, handleWorkPlace }) => {
  return (
    <div className="practical-container">
      <div className="info-title">Practical Experience</div>
      <label id="workplace" htmlFor="workplace">
        Enter workplace
      </label>
      <input
        className="input"
        id="workplace"
        type="text"
        value={workPlace}
        onChange={handleWorkPlace}
      />
    </div>
  );
};
export default PracticalExp;
