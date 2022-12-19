import {BsBookmarkStar} from 'react-icons/bs';

const MyInfo = ({HiOutlineUserCircle}) => {
    return(
        <div className="MyInfo inner">
            <div className="user-wrap">
                <div className="user-left">
                    <span className="user-icon"><HiOutlineUserCircle /></span>
                    <div className="user-name"><span className="user-nick">큰땃쥐</span> 님, 안녕하세요</div>
                </div>
                <div className="user-detail"><button type="button">내 정보</button></div>
            </div>
            <Favorites />
        </div>
    )
}

const Favorites = () => {
    return(
        <div className="Favorites">
            <h2 className="wrap-tit"><span className="tit-icon"><BsBookmarkStar/></span> 내가 좋아하는 영화</h2>
            <div className="favorite-wrap">
                <p className="empty-list">즐겨찾기한 영화가 없습니다</p>
            </div>
        </div>
    )
}

export default MyInfo;