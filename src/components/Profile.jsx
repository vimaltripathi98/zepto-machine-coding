import React from "react";

const Profile = ({ obj, setObj, error }) => {
  const { name, email, age } = obj;
  const handleChange =(e, key)=>{
    setObj((prev)=>({
   ...prev, [key] :e.target.value
    }))
  }


  return (
    <div className="profile-container">
      <h5>Profile</h5>
      <div className="form-field">
        <label className="label">Name<span style={{color:"red"}}>*</span>:</label>
        <input
          placeholder="Please enter name"
          className="input-field"
          name="name"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        <label style={{color:"red"}}>{error.name}</label>
      </div>
      <div className="form-field">
        <label className="label">Age<span style={{color:"red"}}>*</span> :</label>
        <input
          placeholder="Please enter age"
          className="input-field"
          type="number"
          name="age"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
         <label style={{color:"red"}}>{error.age}</label>
      </div>
      <div className="form-field">
        <label className="label">Email<span style={{color:"red"}}>*</span> :</label>
        <input
          placeholder="Please enter email"
          className="input-field"
          name="email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
          type="email"
        />
         <label style={{color:"red"}}>{error.email}</label>
      </div>
    </div>
  );
};

export default Profile;
