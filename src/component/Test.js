import * as React from "react";
import axios from "axios";

const Test = () =>{
    const str = window.env.GATEWAY_URI;
    const TestConnection = () =>{
        axios.get(str+"testUser",{
            withCredentials:'true'
        })
            .then(res=>{
                console.log(res);
            })
            .catch(res=>{
                console.log(res);
            })
    }
    return <div>
        <button onClick={()=>{
            TestConnection()
        }}>Press to test</button>
    </div>
}
export default Test;