import React, { useState } from "react";

export function FlexiForm({ onSubmitFn, config }) {
  const [inputVal, setInputVal] = useState("");
  const [dropdown, setDropdown] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmitFn({ name: inputVal, dd: dropdown });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        {(config && config.items && config.items.length > 0 &&
          config.items.map((current, index) => {
            if (current.type === "TextField") {
              return (
                <div key={index}>
                  <label> {current.label} 
                  <input
                    type="text"
                    onChange={(e) => {
                      setInputVal(e.target.value);
                    }}
                  />
                  </label>
                </div>
              );
            } else if (current.type === "DropDown") {
              return (
                <div key={index}>
                  <label >{current.label} 
                  <select
                    type="text"
                    onChange={(e) => {
                      setDropdown(e.target.value);
                    }}
                  >
                    <option value="" >Select</option>
                    {current.values.map((ddOption, i) => {
                      return (
                        <option key={i} value={ddOption}>
                          {ddOption}
                        </option>
                      );
                    })}
                  </select>
                  </label>
                </div>
              );
            }
          })) || <p>Form fields are not present </p>}
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
