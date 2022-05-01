
import React, { useEffect } from "react";
function Child({returnComment}){
    useEffect(() => {
        console.log("Function Was Called");
    }, [returnComment]);

    return (
        <>
        { returnComment() }
        </>
    );
}


export default Child;