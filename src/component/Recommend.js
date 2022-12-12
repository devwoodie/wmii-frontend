import {MdOutlineMovieCreation} from "react-icons/md";

const Recommend = () => {
    return(
        <div className="Recommend inner">
            <h2 className="wrap-tit"><span className="tit-icon"><MdOutlineMovieCreation/></span> 내게 맞는 영화 추천</h2>
            <form className="recommend-qa">
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
                <div className="qa-wrap">
                    <h3 className="question">MBTI</h3>
                    <div className="answer-wrap">
                        <select name="mbti">
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
                <div className="qa-wrap">
                    <h3 className="question">좋아하는 장르</h3>
                    <div className="answer-wrap">
                        <div className="answer">
                            <input name="genre" value="" id="" type="radio" />
                            <label htmlFor="">액션</label>
                        </div>
                        <div className="answer">
                            <input name="genre" value="" id="" type="radio"/>
                            <label htmlFor="">범죄</label>
                        </div>
                    </div>
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Recommend;