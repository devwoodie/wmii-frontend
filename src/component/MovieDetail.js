import {useLocation} from "react-router";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import {useEffect, useState} from "react";
import axios from "axios";

const MovieDetail = ({apiUrl}) => {
    const location = useLocation();
    const movieId = location.state.data;
    const [moreText, setMoreText] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [infoData, setInfoData] = useState('');
    const [infoGenres,setInfoGenres] = useState([]);

    useEffect(() => {
        detailInfo();
    },[]);

    const detailInfo = async () => {
        try{
            await axios.get(`${apiUrl}movie/${movieId}`,{
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language : 'ko',
                }
            }).then((response) => {
                console.log(response.data)
                setInfoData(response.data);
                setInfoGenres(response.data.genres);
            })
        }
        catch (error){
            console.log(error)
        };
    };

    return(
        <div className="MovieDetail">
            <div className="detail-wrap">
                <div className="movie-poster-bg"><img src={"//image.tmdb.org/t/p/original/"+infoData.backdrop_path} alt="movie-bg"/></div>
                <div className="detail-title-wrap inner">
                    <div className="movie-poster">
                        <img src={"//image.tmdb.org/t/p/original/"+infoData.poster_path} alt="movie-poster"/>
                    </div>
                    <div className="detail-text-wrap">
                        <span className="movie-title">
                            {infoData.title}
                            <i className="favorite-btn">
                                {
                                    favorite ? <AiFillStar onClick={() => {setFavorite(false)}} /> : <AiOutlineStar onClick={() => {setFavorite(true)}} />
                                }
                            </i>
                        </span>
                        <span className="movie-title-en">{infoData.original_title}</span>
                        <div className="sub-text-wrap">
                            <span className="sub-text">{infoData.release_date}??????</span>
                            <span className="sub-text">{infoData.runtime}???</span>
                            <span className="sub-text">
                                {
                                    infoGenres.map((genre,key)=>(
                                    <i key={key}>{genre.name}</i>
                                ))}
                            </span>
                            <span className="sub-text">{Math.ceil(infoData.vote_average*100)/100}???</span>
                        </div>
                    </div>
                </div>
                <div className="overview-text-wrap inner">
                {
                    infoData.overview === '' ? '' :
                        <div>
                            <span className="overview-tit">[?????????]</span>
                            <p className={moreText ? "overview-text" : "overview-text hide" }>{infoData.overview}</p>
                            <span className={moreText ? "more-btn more-text hide" : "more-btn more-text" } onClick={() => {setMoreText(true)}}>?????????..</span>
                            <span className={moreText ? "more-btn more-text" : "more-btn more-text hide" } onClick={() => {setMoreText(false)}}>?????????</span>
                        </div>
                }
                </div>

            </div>
        </div>
    )
}

export default MovieDetail;