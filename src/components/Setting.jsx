import React from "react";

const Setting = ({ obj, setObj }) => {
  const { setings } = obj;

  const handleSettingChange = (e) => {
    const { name } = e.target;
    setObj((prev) => ({
      ...prev,
      setings: {
        dark: name === "dark",
        light: name === "light",
      },
    }));
  };

  console.log(setings)
  return (
    <div>
      <div className="profile-container">
        <h5>Setting</h5>
        <div className="form-field">
          <label className="label">Dark :</label>
          <input
            className="input-field"
            type="radio"
            name="dark"
            onChange={handleSettingChange}
            checked={setings.dark}
          />
        </div>

        <div className="form-field">
          <label className="label">Light :</label>
          <input
            className="input-field"
            type="radio"
            name="light"
            onChange={handleSettingChange}
            checked={setings.light}
          />
        </div>
      </div>
    </div>
  );
};

export default Setting;
