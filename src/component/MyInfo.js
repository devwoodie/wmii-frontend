import MyInfoDetail from "./MyInfoDetail";
import {BsBookmarkStar} from 'react-icons/bs';
import { Routes, Route } from 'react-router-dom';

const MyInfo = ({HiOutlineUserCircle ,navigate, userId}) => {
    return(
        <div className="MyInfo inner sec-mgt">
            {
                userId ?
                    <>
                        <div className="user-wrap">
                            <div className="user-left">
                                <span className="user-icon"><HiOutlineUserCircle /></span>
                                <div className="user-name"><span className="user-nick">유동우</span> 님, 안녕하세요</div>
                            </div>
                            <div className="user-detail"><button type="button" onClick={() => {navigate('/myinfo/detail')}}>내 정보</button></div>
                        </div>
                        <Favorites />
                    </> :
                    <div className="no-login">
                        <a href="#" className="login-btn" >로그인을 해주세요</a>
                    </div>
            }
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