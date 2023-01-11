import {BsSearch} from "react-icons/bs";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Search = ({apiUrl ,navigate}) => {

    const searchText = useRef(null);
    let [searchList, setSearchList] = useState([]);
    let [noSearch, setNoSearch] = useState(false);
    let [emptyList, setEmptyList] = useState(false);

    const searchKeyword = () => {
        const keyword = searchText.current.value;
        //axios
        if(keyword === ''){
            alert('키워드를 입력해주세요');
            setNoSearch(false);
        }else{
            axios.get(`${apiUrl}search/movie`,{
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language : 'ko',
                    query : keyword
                }
            }).then((response) => {
                setNoSearch(true);
                const movieData = response.data.results;
                setSearchList(movieData);
                if(movieData.length === 0){
                    setEmptyList(true);
                }else{
                    setEmptyList(false);
                };
                }).catch((error) => {
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
                        searchList.map((movie,key) => {
                            return (
                                <SearchMovie
                                    key={key}
                                    movie={movie}
                                    navigate={navigate}
                                />
                            )
                        })
                    }
                </div> : <DefaultPage />
            }
            {emptyList ? <p className="search-text">일치하는 영화가 없습니다</p> : null}
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

const SearchMovie = ({movie, navigate}) => {
    return(
        <div className="search-movie-list" key={movie.id} onClick={() => {
            navigate('/detail',{
                state : {data: movie.id}
            });
        }} >
            <div className="search-movie-poster"><img src={"//image.tmdb.org/t/p/original/"+movie.poster_path} alt="movie-poster" /></div>
            <span className="movie-title">{movie.title}</span>
            <div className="sub-title">
                <span className="opening-date">{movie.release_date}</span>
                <span className="bar">|</span>
                <span className="genre">평점: {movie.vote_average}</span>
            </div>
        </div>
    )
}



export default Search;