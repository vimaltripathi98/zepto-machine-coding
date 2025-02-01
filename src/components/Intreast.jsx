import React from "react";

const Intreast = ({ obj, setObj }) => {
  const { intrest } = obj;

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setObj((prev) => ({
      ...prev,
      intrest: {
        ...prev.intrest,
        [name]: checked,
      },
    }));
  };
  console.log(intrest)

  return (
    <div className="profile-container">
      <h5>Intrest</h5>
      <div className="form-field">
        <label className="label">Javascript :</label>
        <input
          type="checkbox"
          className="input-field"
          name="Javascript"
          checked={intrest.Javascript}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label className="label">React :</label>
        <input
          type="checkbox"
          className="input-field"
          name="React"
          checked={intrest.React}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label className="label">Java :</label>
        <input
          type="checkbox"
          typeof="checkbox"
          className="input-field"
          name="Java"
          checked={intrest.Java}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Intreast;
