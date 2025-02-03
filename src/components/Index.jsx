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
  const [errors, setErrors] = useState({
  });

  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      components: Profile,
      validate: () => {
        const error = {}
        if (!obj.name && obj.name.length < 2) {
          error.name = "Name is not valid"
        }
        if (!obj.age && obj.age < 18) {
          error.age = "Age is not valid"
        }
        if (!obj.email && obj.email < 3) {
          error.email = "Email is not valid"
        }
        setErrors(error)
        return error.name || error.age || error.email ? false : true
      }
    },
    {
      name: "Intreast",
      components: Intreast,
      validate: () => {
        const error = {}
        if (!(Object.values(obj.intrest).includes(true))) {
          error.intrest = "Intrest is not valid"
        }

        setErrors(error)
        return error.intrest ? false : true
      }
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

  const handleNextTab = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  }

  const handlePrevTab = () => {
    if (tabs[activeTab].validate()) {

      setActiveTab((prev) => prev - 1);
    }
  }
  const { setings } = obj;
  return (
    <div>
      <div className={`${setings.dark ? "dark-theme" : "light-theme"}`}>
        <div
          className={`${setings.dark ? "body-container-darkMode" : "body-container"
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
                    className={`${activeTab === index ? "tab-item-green" : "tab-item"
                      }`}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div>
            <ActiveComponent obj={obj} setObj={setObj} error={errors} />

            <div className="button-group">
              {activeTab > 0 && (
                <button
                  onClick={handlePrevTab}
                >
                  Prev
                </button>
              )}
              {activeTab < tabs.length - 1 && (
                <button
                  onClick={handleNextTab}
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
