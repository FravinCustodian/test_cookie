import {useEffect} from "react";
import { useSearchParams} from "react-router-dom";
import axios from "axios";
const AfterLogin = (props) => {
    const connectionString =  window.env.GATEWAY_URI+ "auth/oauth2/authentication";
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(()=>{
        console.log(searchParams.get("code"));
        if (process.env.REDIRECT_URI){
            axios.get(process.env.REDIRECT_URI,{
                withCredentials:'true',
                params:{
                    code:searchParams.get("code")
                }
            }).then(e=>{
                console.log(e.data.accessToken);
            }).catch(err=>{
                console.log(err);
            })
        }else{
            axios.get(connectionString,{
                withCredentials:'true',
                params:{
                    code:searchParams.get("code")
                }
            }).then(e=>{
                console.log(e.data.accessToken);
            }).catch(err=>{
                console.log(err);
            })
        }

    },[])

    return (
        <div>
            Succesfully
        </div>
    );
};

export default AfterLogin;