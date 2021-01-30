import React, { useState } from "react";

export function Flexi({ onSubmitFn, config }) {
  const [inputVal, setInputVal] = useState("");
  const [dropdown, setDropdown] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmitFn({ name: inputVal, dd: dropdown });
  };

  return (
    <>
      <form onSubmit={submitHandler} style={{padding:'3%',borderStyle:"double",maxWidth:"20%",marginTop:'2%'}}>
        {(config && config.items && config.items.length > 0 &&
          config.items.map((current, index) => {
            if (current.type === "TextField") {
              return (
                <div key={index} style={{marginBottom:'2%'}}>
                  <label> {current.label} &nbsp; 
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
                <div key={index} style={{marginBottom:'2%'}}>
                  <label >{current.label}  &nbsp;  &nbsp;
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
