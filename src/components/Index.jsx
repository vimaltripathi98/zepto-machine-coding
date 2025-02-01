import React, { useState } from "react";
import Profile from "./Profile";
import Setting from "./Setting";
import Intreast from "./Intreast";

const Index = () => {
  const [obj, setObj] = useState({
    name: "",
    age: "",
    email: "",
    intrest: {
      Javascript: false,
      React: false,
      Java: false,
    },
    setings: {
      dark: false,
      light: true,
    },
  });
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    ageError: "",
  });

  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      components: Profile,
    },
    {
      name: "Intreast",
      components: Intreast,
    },
    {
      name: "Setting",
      components: Setting,
    },
  ];

  const ActiveComponent = tabs[activeTab].components;

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  const handeleSubmit = () => {
    console.log(obj);
  };
  const { setings } = obj;
  return (
    <div>
      <div className={`${setings.dark ? "dark-theme" : "light-theme"}`}>
        <div
          className={`${
            setings.dark ? "body-container-darkMode" : "body-container"
          }`}
        >
          <div className="header-main">
            {tabs.map((item, index) => {
              return (
                <div
                  className="header-tab"
                  key={index}
                  onClick={() => handleTabChange(index)}
                >
                  <span
                    className={`${
                      activeTab === index ? "tab-item-green" : "tab-item"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div>
            <ActiveComponent obj={obj} setObj={setObj} error ={error} />

            <div className="button-group">
              {activeTab > 0 && (
                <button
                  onClick={() => {
                    setActiveTab((prev) => prev - 1);
                  }}
                >
                  Prev
                </button>
              )}
              {activeTab < tabs.length - 1 && (
                <button
                  onClick={() => {
                    setActiveTab((prev) => prev + 1);
                  }}
                >
                  Next
                </button>
              )}
              {activeTab === tabs.length - 1 && (
                <button onClick={handeleSubmit}>Submit</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
