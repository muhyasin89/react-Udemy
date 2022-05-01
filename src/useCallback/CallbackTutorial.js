import axios from "axios";
import { useCallback, useState } from "react";

function CallBackTutorial(){
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Yo, pls Sub to my channel!");

    const returnComment = useCallback((name) => {
        return data+name;
    }, [data]);

    return (
        <>
            {data}
            <button onClick={() => {setToggle(!toggle)}} > {" "}Toggle</button>
            {toggle && <h1>toggle</h1>}
        </>
    );
}

export default CallBackTutorial;