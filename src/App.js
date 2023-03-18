import './css/style.css';
import Home from "./component/Home";
import Community from "./component/Community";
import Search from "./component/Search";
import MyInfo from "./component/MyInfo";
import MovieDetail from "./component/MovieDetail";
import Signup from "./component/Signup";
import { MdOutlineHome, MdOutlineMenu } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { BiMessageDetail, BiSearchAlt, BiCopyright } from 'react-icons/bi';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import { useSelector } from "react-redux"

const App = () => {
    const apiUrl = "https://api.themoviedb.org/3/";
    const navigate = useNavigate();
    const [pageIndex, setPageIndex] = useState(0);
    const [userId, setUserId] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const userInfo = useSelector((state) => state.user.value);

    return (
        <div className="App">
            <header className="header-wrap">
                <div className="header">
                    <h1 className="logo" onClick={() => {navigate('/'); setPageIndex(0)}}>wmii</h1>
                    {
                        userId ? <div className="user-name" onClick={() => {navigate('/myinfo'); setPageIndex(3)}}><span className="user-nick">{displayName}</span> 님</div> : <a onClick={() => {navigate('/login')}} className="login-btn">로그인</a>
                    }
                </div>
                <NavTab navigate={navigate} pageIndex={pageIndex} setPageIndex={setPageIndex} />
            </header>
            <Routes>
                <Route path="/" element={<Home apiUrl={apiUrl} navigate={navigate} setPageIndex={setPageIndex} Link={Link} />} />
                <Route path="/community" element={<Community displayName={displayName} userInfo={userInfo} />} />
                <Route path="/search" element={<Search apiUrl={apiUrl} navigate={navigate} />} />
                <Route path="/myinfo" element={<MyInfo HiOutlineUserCircle={HiOutlineUserCircle} navigate={navigate} userId={userId} displayName={displayName} />} />
                <Route path="/detail" element={<MovieDetail apiUrl={apiUrl}  />} />
                <Route path="/login" element={<Signup setUserId={setUserId} displayName={displayName} setDisplayName={setDisplayName} />} />
            </Routes>

        </div>
    );
}

const NavTab = ({navigate,pageIndex,setPageIndex}) => {
    return(
        <div className="navi-wrap">
            <button className={pageIndex === 0 ? "navi-btn active" : "navi-btn"} onClick={() => {navigate('/'); setPageIndex(0)}}><MdOutlineHome/></button>
            <button className={pageIndex === 1 ? "navi-btn active" : "navi-btn"} onClick={() => {navigate('/search'); setPageIndex(1)}}><BiSearchAlt /></button>
            <button className={pageIndex === 2 ? "navi-btn active" : "navi-btn"} onClick={() => {navigate('/community'); setPageIndex(2)}}><BiMessageDetail /></button>
            <button className={pageIndex === 3 ? "navi-btn active" : "navi-btn"} onClick={() => {navigate('/myinfo'); setPageIndex(3)}}><HiOutlineUserCircle /></button>
        </div>
    )
}

export default App;
