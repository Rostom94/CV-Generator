const EducationalExp = ({
  highschool,
  university,
  handleHighschool,
  handleUniversity,
}) => {
  return (
    <div className="educational-container">
      <div className="info-title">Educational Experience</div>
      <label id="university" htmlFor="university">
        Enter university
      </label>
      <input
        className="input"
        id="university"
        type="text"
        value={university}
        onChange={handleUniversity}
      />
      <label id="highschool" htmlFor="highschool">
        Enter High School
      </label>
      <input
        className="input"
        id="highschool"
        type="text"
        value={highschool}
        onChange={handleHighschool}
      />
    </div>
  );
};
export default EducationalExp;
