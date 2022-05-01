import React, {useState} from "react";

const StateTutorial = () => {
    const [inputValue, setInputValue] = useState("alo");

    let onChange = (event) =>{
        const newValue = event.target.value;

        setInputValue(newValue);
    };

    return (
        <div>
            <input placeholder="Enter Something .. " onChange={onChange}/>
            {inputValue}
        </div>
    );
};

export default StateTutorial;