import { MdOutlineMovieCreation, MdTab, MdOutlineMovieFilter, MdArrowForwardIos } from 'react-icons/md';
import {useEffect, useState} from "react";
import axios from "axios";
import Swiper from "swiper";
import 'swiper/css';

const Home = ({navigate, setPageIndex ,Link, apiUrl}) => {

    const [nowPlayingData, setNowPlayingData] = useState([]);
    const [upComingData, setUpComingData] = useState([]);

    useEffect(() => {
        nowPlaying();
        upComing()
    }, []);

    //최신 영화
    const nowPlaying = async () => {
        try{
            await axios.get(`${apiUrl}now_playing`,{
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language : 'ko',
                }
            }).then((response) => {
                // console.log(response.data.results)
                setNowPlayingData(response.data.results)
            })
        }
        catch (error){
            console.log(error)
        }
    }

    //개봉 예정 영화
    const upComing = async () => {
        try{
            await axios.get(`${apiUrl}upcoming`,{
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language : 'ko',
                }
            }).then((response) => {
                console.log(response.data.results)
                setUpComingData(response.data.results)
            })
        }
        catch (error){
            console.log(error)
        }
    }

    //swiper
    const recentSlide = new Swiper('.recentSwiper',{
        slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
        loop : false, // 슬라이드 반복 여부
        loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        pagination : false, // pager 여부
    })

    return(
        <div className="Home inner">
            <div className="recent-movie-wrap swiper recentSwiper" >
                <h2 className="wrap-tit"><span className="tit-icon"><MdOutlineMovieCreation/></span> 최신 영화</h2>
                <ul className="recent-movie-list swiper-wrapper">
                    {
                        nowPlayingData.map((data, key) => (
                            <li key={data.id} className="swiper-slide recent-movie-cont">
                                <div className="movie-poster">
                                    <img src={"//image.tmdb.org/t/p/original/"+data.poster_path} alt="movie-poster" />
                                </div>
                                <span className="movie-title">{data.title}</span>
                                <div className="sub-title">
                                    <span className="opening-date">{data.release_date}</span>
                                    <span className="bar">|</span>
                                    <span className="genre">평점: {data.vote_average}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="upcoming-movie-wrap mgt swiper recentSwiper">
                <h2 className="wrap-tit"><span className="tit-icon"><MdOutlineMovieFilter/></span> 개봉 예정 영화</h2>
                <ul className="upcoming-movie-list swiper-wrapper">
                    {
                        upComingData.map((data, key) => (
                            <li key={data.id} className="swiper-slide upcoming-movie-cont">
                                <div className="movie-poster">
                                    <img src={"//image.tmdb.org/t/p/original/"+data.poster_path} alt="movie-poster" />
                                </div>
                                <span className="movie-title">{data.title}</span>
                            </li>
                        ))
                    }
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