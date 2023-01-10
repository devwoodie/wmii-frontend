const RecommendList = ({isGenre}) => {
    console.log(isGenre)
    return(
        <div className="RecommendList SearchMovies">
            <div className="search-movie-list">
                <div className="search-movie-poster"><img src="" alt="movie-poster" /></div>
                <span className="movie-title">올빼미</span>
                <div className="sub-title">
                    <span className="genre">2022</span>
                    <span className="bar">|</span>
                    <span className="opening-date">평점: 4.5</span>
                </div>
            </div>
        </div>
    )
}

export default RecommendList;