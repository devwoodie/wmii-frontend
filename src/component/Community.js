import {BiMessageSquareDetail} from "react-icons/bi";
import {BsFillPencilFill, BsPlusLg} from "react-icons/bs";
import {MdOutlineCancel} from "react-icons/md";
import axios from "axios";
import {useEffect, useState, useRef} from "react";

const Community = () => {

    const [isRegist, setIsResgist] = useState(false);

    return(
        <div className="Community inner">
            <h2 className="wrap-tit"><span className="tit-icon"><BiMessageSquareDetail/></span> 커뮤니티</h2>
            <ul className="community-wrap">
                <li className="community-cont">
                    <span className="label">영화후기</span>
                    <p className="com-text">테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트</p>
                    <div className="com-sm-text">
                        <span className="com-now-date">2021-01-10</span>
                        <span className="com-user-name"><span className="com-user-nick">아니그게아니고</span> 님</span>
                    </div>
                </li>
                <li className="community-cont">
                    <span className="label">영화추천</span>
                    <p className="com-text">테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트</p>
                    <div className="com-sm-text">
                        <span className="com-now-date">2021-01-10</span>
                        <span className="com-user-name"><span className="com-user-nick">아니그게아니고</span> 님</span>
                    </div>
                </li>
                <li className="community-cont">
                    <span className="label">영화추천</span>
                    <p className="com-text">테스트</p>
                    <div className="com-sm-text">
                        <span className="com-now-date">2021-01-10</span>
                        <span className="com-user-name"><span className="com-user-nick">아니그게아니고</span> 님</span>
                    </div>
                </li>
                <li className="community-cont">
                    <span className="label">영화후기</span>
                    <p className="com-text">테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트</p>
                    <div className="com-sm-text">
                        <span className="com-now-date">2021-01-10</span>
                        <span className="com-user-name"><span className="com-user-nick">아니그게아니고</span> 님</span>
                    </div>
                </li>
                <li className="community-cont">
                    <span className="label">영화후기</span>
                    <p className="com-text">테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트</p>
                    <div className="com-sm-text">
                        <span className="com-now-date">2021-01-10</span>
                        <span className="com-user-name"><span className="com-user-nick">아니그게아니고</span> 님</span>
                    </div>
                </li>
            </ul>
            {
                !isRegist ? <button onClick={() => {setIsResgist(true)}} type="button" className="regist-btn"><BsPlusLg /></button> :
                    <WriteWrap setIsResgist={setIsResgist} />
            }
        </div>
    )
}

const WriteWrap = ({setIsResgist}) => {

    const textArea = useRef(null);
    const [radioValue, setRadioValue] = useState('');

    const radioHandle = (e) => {
        const labelText = e.target.value;
        setRadioValue(labelText);
    };

    const validationChk = () => {
        const textCont = textArea.current.value;
        if(textCont === '' || radioValue === ''){
            //전송 불가
            console.log('no');
        }else{
            //전송 가능
            console.log('yes');
        };
    };

    return(
        <div className="write-wrap inner">
            <span onClick={() => {setIsResgist(false)}} className="write-cls"><MdOutlineCancel/></span>
            <div className="label-wrap">
                <input type="radio" id="review" name="label" value="review" onChange={radioHandle}/>
                <label className="label" htmlFor="review">영화후기</label>
                <input type="radio" id="recommend" name="label" value="recommend" onChange={radioHandle}/>
                <label className="label" htmlFor="recommend">영화추천</label>
                <input type="radio" id="free" name="label" value="free" onChange={radioHandle}/>
                <label className="label" htmlFor="free">자유내용</label>
            </div>
            <div className="com-textarea">
                <textarea ref={textArea}></textarea>
            </div>
            <button type="button" onClick={validationChk} className="regist-ok"><BsFillPencilFill/> 글쓰기</button>
        </div>
    )
}


export default Community;