import {useState} from "react";
import { appAuth } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { userInfoData } from "../redux/userInfo";
import {BiMessageSquareDetail} from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

export default function Signup({setUserId, displayName, setDisplayName}){

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    let dispatch = useDispatch();

    function handleLogin(){
        setError(null);
        setIsPending(true);

        const provider = new GoogleAuthProvider();

        signInWithPopup(appAuth, provider)
            .then((data) => {
                const user = data.user;
                setUserId(true);
                setDisplayName(user.email.split('@')[0]);
                navigate("/");
                if(!user){
                    throw new Error('가입에 실패했습니다.');
                };
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            });
        dispatch(userInfoData({
            displayName : displayName,
        }))
    };

    return(
        <div className="Signup sec-mgt inner">
            <h2 className="wrap-tit">로그인</h2>
            <button className="google-login-btn" onClick={handleLogin}><FcGoogle className="google-logo"/> Google Login</button>
        </div>
    )

}

