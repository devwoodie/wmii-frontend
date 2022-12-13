import {BsSearch} from "react-icons/bs";

const Search = () => {
    return(
        <div className="Search inner">
            <div className="search-wrap">
                <input type="text" className="search-box" placeholder="Search..."/>
                <button type="submit" className="search-btn"><BsSearch /></button>
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

export default Search;