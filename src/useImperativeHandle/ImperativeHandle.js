import React, { useRef} from "react";
import Button from "./Button";

function ImperativeHandle(){
    const buttonRef = useRef(null);
    return (
        <div>
            <button 
            onClick = {() => {
                buttonRef.current.alterToggle();
            }}
            className="bg-emerald-500 py-6 px-8 rounded mx-3">
                Button From Parent</button>
            <Button ref={buttonRef} />
        </div>
    );
}

export default ImperativeHandle;