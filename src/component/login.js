
import * as React from 'react';
import axios, {options} from "axios";
const Login = (props) => {
    const connectionString =  window.env.GATEWAY_URI;
    const loginString =  window.env.GATEWAY_URI + "auth/oauth2/code";
    const LoginB = ()=>{
        console.log(connectionString)
        axios.get(connectionString+"auth/oauth2/login",{
            withCredentials:'true'
        })
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    return (
        <div>
            <form action={loginString} method="get">
                <input type="submit" value="Press to get code"/>
            </form>
            <button onClick={()=>{
                LoginB()
            }}>Press to log in</button>
            {/*<button onClick={()=>{*/}
            {/*    login()*/}
            {/*}}>Google login</button>*/}
        </div>
    );
};
export default Login;