import {useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial(){
    const divRef = useRef(null);

    useLayoutEffect(() =>{
        console.log(divRef.current.value);
    }, []);

    useEffect(() => {
        divRef.current.value = "Hello";
    }, [])

    return (
        <div className="flex flex-1">
            <input ref={divRef} value="Test" className="w-28" />
        </div>
    );
}

export default LayoutEffectTutorial;