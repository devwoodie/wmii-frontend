import {BsSearch} from "react-icons/bs";
import {useRef, useState} from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Search = () => {

    const searchText = useRef(null);
    let [searchList, setSearchList] = useState([]);
    let [noSearch, setNoSearch] = useState(false);

    const searchKeyword = () => {
        const keyword = searchText.current.value;
        const ID_KEY = '0BhdufNATIrhn8DtcoRu';
        const SECRET_KEY = 'bEDLIjkryc';
        const searchUrl = '/v1/search/movie.json';
        //axios
        if(keyword === ''){
            alert('키워드를 입력해주세요');
            setNoSearch(false);
        }else{
            axios.get(searchUrl,{
                params: {
                    query: keyword,
                    display: 20,
                    yearfrom: 2000,
                    yearto: 2022
                },
                headers: {
                    'X-Naver-Client-Id': ID_KEY,
                    'X-Naver-Client-Secret': SECRET_KEY
                }
            }).then((response) => {
                setNoSearch(true);
                    const movieData = response.data.items;
                    let copy = [...searchList, ...movieData];
                    setSearchList(copy);
                }).catch((error) => {
                setNoSearch(false);
                console.log(error);
            });
        };
    };

    return(
        <div className="Search inner">
            <h2 className="wrap-tit"><span className="tit-icon"><BsSearch/></span> 영화 검색</h2>
            <div className="search-wrap">
                <input type="text" ref={searchText} className="search-box" placeholder="Search..."/>
                <button type="submit" className="search-btn" onClick={searchKeyword}><BsSearch /></button>
            </div>

            {noSearch ?
                <div className="SearchMovies">
                    {
                        searchList.map((movie,key) => (
                            <SearchMovie
                                key={key}
                                title={movie.title}
                                poster={movie.image}
                                year={movie.pubDate}
                                rating={movie.userRating}
                            />
                        ))
                    }
                </div> : <DefaultPage />
            }
        </div>
    )
}

const DefaultPage = () => {
    return(
        <div className="default-text">
            <ul className="hash-tag-wrap">
                <li className="hash-tag">#올빼미</li>
                <li className="hash-tag">#올빼미</li>
                <li className="hash-tag">#올빼미</li>
                <li className="hash-tag">#올빼미</li>
            </ul>
            <p className="search-text">제목, 배우, 키워드를<br/>검색해주세요</p>
        </div>
    )
}

const SearchMovie = ({poster, year, title, rating}) => {
    return(
        <div className="search-movie-list">
            <div className="search-movie-poster"><img src={poster} alt="movie-poster" /></div>
            <span className="movie-title">{title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")}</span>
            <div className="sub-title">
                <span className="genre">{year}</span>
                <span className="bar">|</span>
                <span className="opening-date">평점: {rating}</span>
            </div>
        </div>
    )
}

SearchMovie.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
}

export default Search;