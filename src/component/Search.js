import {BsSearch} from "react-icons/bs";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Search = () => {

    const searchText = useRef(null);
    let [searchList, setSearchList] = useState([]);
    let [noSearch, setNoSearch] = useState(false);
    let [emptyList, setEmptyList] = useState(false);

    const searchKeyword = () => {
        let thisYear = new Date().getFullYear();
        const keyword = searchText.current.value;
        const API_KEY = '34f633dbcac633d58c7c478c1c3c38b4';
        const searchUrl = 'https://api.themoviedb.org/3/movie/now_playing';
        //axios
        if(keyword === ''){
            alert('키워드를 입력해주세요');
            setNoSearch(false);
        }else{
            axios.get(searchUrl,{
                params: {
                    api_key: API_KEY,
                    language : 'ko'
                }
            }).then((response) => {
                console.log(response.data)
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

const SearchMovie = () => {
    return(
        <div className="search-movie-list">
            <div className="search-movie-poster"><img src="" alt="movie-poster" /></div>
            <span className="movie-title"></span>
            <div className="sub-title">
                <span className="genre"></span>
                <span className="bar">|</span>
                <span className="opening-date">평점: </span>
            </div>
        </div>
    )
}



export default Search;