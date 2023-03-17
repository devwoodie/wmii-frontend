import {useState} from "react";
import { appAuth } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

export default function Signup({setDisplayName, setUserId}){

    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);


    function handleLogin(){
        setError(null);
        setIsPending(true);

        const provider = new GoogleAuthProvider();

        signInWithPopup(appAuth, provider)
            .then((data) => {
                const user = data.user;
                setDisplayName(user.displayName);
                setUserId(true);

                if(!user){
                    throw new Error('가입에 실패했습니다.');
                };
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            });
    };
    return(
        <div className="Signup sec-mgt inner">
            <button onClick={handleLogin} >login</button>
        </div>
    )

}

