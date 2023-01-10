import {BiMessageSquareDetail} from "react-icons/bi";
import {BsFillPencilFill, BsPlusLg} from "react-icons/bs";
import {MdOutlineCancel} from "react-icons/md";
import axios from "axios";
import {useEffect, useState} from "react";

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
    return(
        <div className="write-wrap inner">
            <span onClick={() => {setIsResgist(false)}} className="write-cls"><MdOutlineCancel/></span>
            <div className="label-wrap">
                <span className="label on">영화후기</span>
                <span className="label">영화추천</span>
                <span className="label">자유내용</span>
            </div>
            <div className="com-textarea">
                <textarea></textarea>
            </div>
            <button type="button" className="regist-ok"><BsFillPencilFill/> 글쓰기</button>
        </div>
    )
}


export default Community;