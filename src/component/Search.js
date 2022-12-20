import {BsSearch} from "react-icons/bs";
import {useRef, useState} from "react";
import axios from "axios";

const Search = () => {

    const searchText = useRef(null);
    let [searchList, setSearchList] = useState([]);

    const searchKeyword = () => {

        const keyword = searchText.current.value;
        const ID_KEY = '0BhdufNATIrhn8DtcoRu';
        const SECRET_KEY = 'bEDLIjkryc';
        const searchUrl = '/v1/search/movie.json';
        //axios
        if(keyword === ''){
            alert('키워드를 입력해주세요');
        }else{
            axios.get(searchUrl,{
                params: {
                    query: keyword,
                    display: 20
                },
                headers: {
                    'X-Naver-Client-Id': ID_KEY,
                    'X-Naver-Client-Secret': SECRET_KEY
                }
            }).then((response) => {
                    const movieData = response.data;
                    console.log(movieData)

                }).catch((error) => {
                console.log(error);
            });
        }
    }

    return(
        <div className="Search inner">
            <h2 className="wrap-tit"><span className="tit-icon"><BsSearch/></span> 영화 검색</h2>
            <div className="search-wrap">
                <input type="text" ref={searchText} className="search-box" placeholder="Search..."/>
                <button type="submit" className="search-btn" onClick={searchKeyword}><BsSearch /></button>
            </div>
            <ul className="hash-tag-wrap">
                <li className="hash-tag">#올빼미</li>
                <li className="hash-tag">#올빼미</li>
                <li className="hash-tag">#올빼미</li>
                <li className="hash-tag">#올빼미</li>
            </ul>
            <p className="search-text">
                제목, 배우, 키워드를<br/>검색해주세요
            </p>
        </div>
    )
}

const SearchMovie = () => {
    return(
        <div className="SearchMovie">

        </div>
    )
}

export default Search;