import React, {useState, forwardRef, useImperativeHandle} from "react";

const Button = forwardRef((props, ref) =>{
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, ()=> ({
        alterToggle(){
            setToggle(!toggle);
        }
    }));

    return (
        <>
            <button 
            className="bg-green-400 rounded py-6 px-8 text-yellow-800">
                Button From Child
                </button>
            {toggle && <span>Toggle</span>}
        </>
    );
});

export default Button;