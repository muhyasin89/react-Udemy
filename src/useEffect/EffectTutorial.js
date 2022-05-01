import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial(){
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) =>{
           setData(response.data)
        });
    }, []);
    return (
        <div className="justify-center flex flex-1 items-start">
        <table className="table-auto">
            <thead>
                <tr>
                <th>Post id:</th>
                <th>Name :</th>
                <th>Email:</th>
                </tr>
            </thead>
            <tbody>
            { data.map((d) => {
                return <tr key={d.id}>
                    <td>{d.postId}</td>
                    <td className="justify-center items-center">{d.name}</td>
                    <td>{d.email}</td>
                </tr>
            }) }
            </tbody>
        </table>
        </div>
    );
}

export default EffectTutorial;