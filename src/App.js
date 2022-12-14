import './css/style.css';
import Home from "./component/Home";
import Community from "./component/Community";
import Search from "./component/Search";
import MyInfo from "./component/MyInfo";
import MyInfoDetail from "./component/MyInfoDetail";
import MovieDetail from "./component/MovieDetail";
import { MdOutlineHome } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { BiMessageDetail, BiSearchAlt } from 'react-icons/bi';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";


const App = () => {
    const apiUrl = "https://api.themoviedb.org/3/";
    let navigate = useNavigate();
    let [pageIndex, setPageIndex] = useState(0);

    return (
        <div className="App">
            <div className="header-wrap">
                <h1 className="logo" onClick={() => {navigate('/'); setPageIndex(0)}}><img src="/img/wmii-logo.png" alt="logo" /></h1>
                {
                    pageIndex === 3 ? '' : <div className="user-name" onClick={() => {navigate('/myinfo'); setPageIndex(3)}}><span className="user-nick">큰땃쥐</span> 님</div>
                }
            </div>
            <Routes>
                <Route path="/" element={<Home apiUrl={apiUrl} navigate={navigate} setPageIndex={setPageIndex} Link={Link} />} />
                <Route path="/community" element={<Community />} />
                <Route path="/search" element={<Search apiUrl={apiUrl} navigate={navigate} />} />
                <Route path="/myinfo" element={<MyInfo HiOutlineUserCircle={HiOutlineUserCircle} navigate={navigate} />} />
                <Route path="/myinfo/detail" element={<MyInfoDetail />} />
                <Route path="/detail" element={<MovieDetail apiUrl={apiUrl} />} />
            </Routes>
            <NavTab navigate={navigate} pageIndex={pageIndex} setPageIndex={setPageIndex} />
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
