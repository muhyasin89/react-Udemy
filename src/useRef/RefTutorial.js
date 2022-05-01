import React, {useRef} from "react";

function RefTutorial(){
    const inputRef = useRef(null);
    const onClick = () => {
        inputRef.current.focus();
        inputRef.current.value = "";
    }

    return (
        <div>
            <h1 className="flex flex-1 font-bold uppercase">Yasin</h1><br />
            <input type="text" placeholder="Text ..." className="rounded-l-lg py-6 border backdrop-opacity-5" ref={inputRef}/>
            <button type="button" onClick={onClick} className="rounded bg-amber-600 text-white py-6 px-8"> Change Name</button>
        </div>
    );
}

export default RefTutorial;