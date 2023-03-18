import {BiMessageSquareDetail} from "react-icons/bi";
import {BsFillPencilFill, BsPlusLg} from "react-icons/bs";
import {MdOutlineCancel} from "react-icons/md";
import axios from "axios";
import {useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import {useFirestore} from "../hooks/useFirestore";
import {useCollection} from "../hooks/useCollection";

const Community = ({ userInfo, displayName, uid }) => {

    const [isRegist, setIsResgist] = useState(false);
    const navigate = useNavigate();
    const {documents, error} = useCollection("community");

    function handleRegist(){
        if(displayName === "") {
            alert("로그인이 필요합니다.");
            navigate('/login');
        }else{
            setIsResgist(true);
        }
    };

    return(
        <div className="Community inner sec-mgt">
            <h2 className="wrap-tit"><span className="tit-icon"><BiMessageSquareDetail/></span> 커뮤니티</h2>
            <ul className="community-wrap">
                {error && <strong>{error}</strong>}
                {documents &&
                    documents.map((item, key) => {
                        return(
                            <li key={key} className="community-cont">
                                <span className="label">
                                    {item.radioValue === "review" && "영화후기"}
                                    {item.radioValue === "recommend" && "영화추천"}
                                    {item.radioValue === "free" && "자유내용"}
                                </span>
                                <p className="com-text">{item.text}</p>
                                <div className="com-sm-text">
                                    <span className="com-user-name"><span className="com-user-nick">{item.displayName}</span> 님</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {
                !isRegist ? <button onClick={handleRegist} type="button" className="regist-btn"><BsPlusLg /></button> :
                    <WriteWrap displayName={displayName} setIsResgist={setIsResgist} />
            }
        </div>
    )
}

const WriteWrap = ({setIsResgist, displayName}) => {

    const [radioValue, setRadioValue] = useState('');
    const [text, setText] = useState("");
    const { addDocument, response } = useFirestore('community');

    const handleData = (event) => {
        if(event.target.name === "label"){
            setRadioValue(event.target.value);
        }else if(event.target.id === "textArea"){
            setText(event.target.value);
        };
    };

    // useEffect(() => {
    //     if(response.success){
    //         setText('');
    //         setRadioValue('');
    //     }
    // }, response.success)

    const handleSubmit = (event) => {
        event.preventDefault();
        if(text === '' || radioValue === ''){
            //전송 불가
            alert("내용을 입력해주세요.")
        }else{
            //전송 가능
            addDocument({ displayName, text, radioValue });
            setIsResgist(false);
        };
    };

    return(
        <form className="write-wrap inner" onSubmit={handleSubmit}>
            <span onClick={() => {setIsResgist(false)}} className="write-cls"><MdOutlineCancel/></span>
            <div className="label-wrap">
                <input type="radio" id="review" name="label" value="review" onChange={handleData}/>
                <label className="label" htmlFor="review">영화후기</label>
                <input type="radio" id="recommend" name="label" value="recommend" onChange={handleData}/>
                <label className="label" htmlFor="recommend">영화추천</label>
                <input type="radio" id="free" name="label" value="free" onChange={handleData}/>
                <label className="label" htmlFor="free">자유내용</label>
            </div>
            <div className="com-textarea">
                <textarea id="textArea" value={text} onChange={handleData}></textarea>
            </div>
            <button type="submit" className="regist-ok"><BsFillPencilFill/> 글쓰기</button>
        </form>
    )
}


export default Community;