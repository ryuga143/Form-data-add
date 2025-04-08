import React, { useState } from "react";                          //We also import the useState hook to manage state within our component.

const FormComponent = () => {                                      //We define a functional React component FormComponent 

const [inputValue, setInputValue] = useState("");                   //Inside it, we create two state variables using useState:
const [dataList, setDataList] = useState([]);                       //inputValue: Stores the text entered into the input field
//////////////////////////////////////////////////////////////////////dataList: An array that will hold the submitted data.

  const handleSubmit = (event) => {                                  //event.preventDefault();: Prevents the default behavior of form submission (which usually reloads the page)
    event.preventDefault();                                          //We check if the input field isn't empty.
    if (inputValue.trim() !== "") {                                 //If it's not empty, we add the input value to the dataList array using setDataList([...dataList, inputValue]);
////////////////////////////////////////////////////////////////////// We also clear the input field by setting inputValue to an empty string.
      setDataList([...dataList, inputValue]);
      setInputValue("");                                            // Clear input after submission
    }     
  };

  return (
    <div>
      <h2>Enter Data Below:</h2>
      <form onSubmit={handleSubmit}>                                
        <input
          type="text"
          value={inputValue}                                        //This binds the input field to the inputValue state, so it displays the current value of inputValue.
          onChange={(e) => setInputValue(e.target.value)}          //This updates the inputValue state whenever the user types in the input field.
          placeholder="Enter something..."
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Entered Data:</h3>
      <ul>
        {dataList.map((item, index) => (                                     // We loop through the dataList using .map() and display each entry inside a <li> element.
          <li key={index}>{item}</li>                                       //The key prop is set to the index of the item in the array to ensure each list item has a unique key.
        ))}
      </ul>
    </div>
  );
};

export default FormComponent;
