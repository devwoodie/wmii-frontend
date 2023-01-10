import {BiMessageSquareDetail} from "react-icons/bi";
import {BsPlusLg} from "react-icons/bs";
import axios from "axios";
import {useEffect, useState} from "react";

const Community = () => {

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
            <button className="regist-btn"><BsPlusLg /></button>
            <div className="write-wrap"></div>
        </div>
    )
}


export default Community;