import { MdOutlineMovieCreation, MdTab, MdOutlineMovieFilter } from 'react-icons/md';

const Home = ({navigate, setPageIndex}) => {
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
                <h2 className="wrap-tit"><span className="tit-icon"><MdOutlineMovieFilter/></span>추천 영화</h2>
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
                <h2 className="wrap-tit"><span className="tit-icon"><MdTab/></span>더 알아보기</h2>
                <div className="main-banner" onClick={() => {navigate('/search'); setPageIndex(2)}}>영화 검색하기</div>
                <div className="main-banner">개봉 예정 영화</div>
                <div className="main-banner">영화 관련 뉴스 보기</div>
            </div>

        </div>
    )
}

export default Home;