import {useState} from "react";
import { appAuth } from "../firebase/config";
import {useDispatch} from "react-redux"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const Signup = () => {

    const [userData, setUserData] = useState(null);
    let dispatch = useDispatch();
    function handleGoogleLogin(){

        const provider = new GoogleAuthProvider();

        signInWithPopup(appAuth, provider)
            .then((data) => {
                setUserData(data.user);
                console.log(data.user.displayName);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return(
        <div className="Signup inner sec-mgt">
            <button onClick={handleGoogleLogin}>login</button>
        </div>
    )
}

