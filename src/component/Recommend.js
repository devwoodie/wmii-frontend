import {MdOutlineMovieCreation} from "react-icons/md";
import axios from "axios";
import {useEffect, useState} from "react";

const Recommend = () => {

    const ID_KEY = '0BhdufNATIrhn8DtcoRu';
    const SECRET_KEY = 'bEDLIjkryc';
    const searchUrl = '/v1/search/movie.json';

    return(
        <div className="Recommend inner">
            <h2 className="wrap-tit"><span className="tit-icon"><MdOutlineMovieCreation/></span> 내게 맞는 영화 추천</h2>
            <form className="recommend-qa">
                <Gender />
                <Age />
                <Mbti />
                <Genre />
                <Year />
                <button className="recommend-btn" type="submit">영화 추천 받기</button>
            </form>
        </div>
    )
}
//성별
const Gender = () => {
    return(
        <div className="qa-wrap">
            <h3 className="question">성별</h3>
            <div className="answer-wrap">
                <div className="answer">
                    <input name="gender" value="male" id="male" type="radio" />
                    <label htmlFor="male">남</label>
                </div>
                <div className="answer">
                    <input name="gender" value="female" id="female" type="radio"/>
                    <label htmlFor="female">여</label>
                </div>
            </div>
        </div>
    )
}
//연령대
const Age = () => {
    return(
        <div className="qa-wrap">
            <h3 className="question">연령대</h3>
            <div className="answer-wrap">
                <div className="answer">
                    <input value="20" name="age" id="20" type="radio" />
                    <label htmlFor="20">20대</label>
                </div>
                <div className="answer">
                    <input value="30" name="age" id="30" type="radio" />
                    <label htmlFor="30">30대</label>
                </div>
                <div className="answer">
                    <input value="40" name="age" id="40" type="radio" />
                    <label htmlFor="40">40대</label>
                </div>
                <div className="answer">
                    <input value="50" name="age" id="50" type="radio" />
                    <label htmlFor="50">50대</label>
                </div>
            </div>
        </div>
    )
}
//MBTI
const Mbti = () => {
    return(
        <div className="qa-wrap">
            <h3 className="question">MBTI</h3>
            <div className="answer-wrap">
                <select name="mbti" className="mbti-select">
                    <option value="">선택</option>
                    <option value="ENFJ">ENFJ</option>
                    <option value="ENFP">ENFP</option>
                    <option value="ENTP">ENTP</option>
                    <option value="ESFP">ESFP</option>
                    <option value="ESFJ">ESFJ</option>
                    <option value="ESTP">ESTP</option>
                    <option value="ESTJ">ESTJ</option>
                    <option value="INFP">INFP</option>
                    <option value="INFJ">INFJ</option>
                    <option value="INTP">INTP</option>
                    <option value="ISTP">ISTP</option>
                    <option value="ISFP">ISFP</option>
                    <option value="ISFJ">ISFJ</option>
                    <option value="ISTJ">ISTJ</option>
                    <option value="INTJ">INTJ</option>
                </select>
            </div>
        </div>
    )
}
//Genre
const Genre = () => {
    return(
        <div className="qa-wrap">
            <h3 className="question">좋아하는 장르</h3>
            <div className="answer-wrap genre">
                <div className="answer">
                    <input name="genre" value="19" id="action" type="radio" />
                    <label htmlFor="action">액션</label>
                </div>
                <div className="answer">
                    <input name="genre" value="16" id="crime" type="radio"/>
                    <label htmlFor="crime">범죄</label>
                </div>
                <div className="answer">
                    <input name="genre" value="18" id="sf" type="radio"/>
                    <label htmlFor="sf">SF</label>
                </div>
                <div className="answer">
                    <input name="genre" value="11" id="comedy" type="radio"/>
                    <label htmlFor="comedy">코미디</label>
                </div>
                <div className="answer">
                    <input name="genre" value="7" id="thriller" type="radio"/>
                    <label htmlFor="thriller">스릴러</label>
                </div>
                <div className="answer">
                    <input name="genre" value="4" id="horror" type="radio"/>
                    <label htmlFor="horror">공포</label>
                </div>
                <div className="answer">
                    <input name="genre" value="5" id="romance" type="radio"/>
                    <label htmlFor="romance">로맨스</label>
                </div>
                <div className="answer">
                    <input name="genre" value="2" id="fantasy" type="radio"/>
                    <label htmlFor="fantasy">판타지</label>
                </div>
                <div className="answer">
                    <input name="genre" value="27" id="music" type="radio"/>
                    <label htmlFor="music">음악</label>
                </div>
                <div className="answer">
                    <input name="genre" value="15" id="animation" type="radio"/>
                    <label htmlFor="animation ">만화</label>
                </div>
            </div>
        </div>
    )
}
//year
const Year = () => {
    return(
        <div className="qa-wrap">
            <h3 className="question">선호하는 연도</h3>
            <div className="answer-wrap">
                <div className="answer">
                    <input value="1990" name="year" id="1990" type="radio" />
                    <label htmlFor="1990">1990년대</label>
                </div>
                <div className="answer">
                    <input value="2000" name="year" id="2000" type="radio" />
                    <label htmlFor="2000">2000년대</label>
                </div>
                <div className="answer">
                    <input value="2010" name="year" id="2010" type="radio" />
                    <label htmlFor="2010">2010년대</label>
                </div>
                <div className="answer">
                    <input value="2020" name="year" id="2020" type="radio" />
                    <label htmlFor="2020">2020년대</label>
                </div>
            </div>
        </div>
    )
}
export default Recommend;