import { MdOutlineMovieCreation, MdTab, MdOutlineMovieFilter, MdArrowForwardIos } from 'react-icons/md';
import {useEffect, useState} from "react";

const Home = ({navigate, setPageIndex ,Link}) => {

    return(
        <div className="Home inner">
            <div className="recent-movie-wrap">
                <h2 className="wrap-tit"><span className="tit-icon"><MdOutlineMovieCreation/></span> 최신 영화</h2>
                <ul className="recent-movie-list">
                    <li className="recent-movie-cont">
                        <div className="movie-poster">
                            {/*<img src={} alt={} />*/}
                        </div>
                        <span className="movie-title">올빼미</span>
                        <div className="sub-title">
                            <span className="genre">스릴러</span>
                            <span className="bar">|</span>
                            <span className="opening-date">2022.11.23</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="recommend-movie-wrap mgt">
                <h2 className="wrap-tit"><span className="tit-icon"><MdOutlineMovieFilter/></span> 추천 영화</h2>
                <ul className="recommend-movie-list">
                    <li className="recommend-movie-cont">
                        <div className="movie-poster">
                            {/*<img src={} alt={} />*/}
                        </div>
                        <span className="movie-title">올빼미</span>
                    </li>
                </ul>
            </div>
            <div className="banner-wrap mgt">
                <h2 className="wrap-tit"><span className="tit-icon"><MdTab/></span> 더 알아보기</h2>
                <div className="main-banner" onClick={() => {navigate('/search'); setPageIndex(2)}}>영화 검색하기<MdArrowForwardIos/></div>
                <Link className="main-banner" to="//m.search.naver.com/search.naver?where=m&sm=mtb_etc&qvt=0&query=%EA%B0%9C%EB%B4%89%EC%98%88%EC%A0%95%EC%98%81%ED%99%94" target="_blank">개봉 예정 영화<MdArrowForwardIos/></Link>
                <div className="main-banner">영화 관련 뉴스 보기<MdArrowForwardIos/></div>
            </div>

        </div>
    )
}

export default Home;