import './css/style.css';
import Home from "./component/Home";
import Recommend from "./component/Recommend";
import Search from "./component/Search";
import MyInfo from "./component/MyInfo";
import { MdOutlineHome, MdOutlineRecommend, MdOutlineManageSearch } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";

const App = () => {
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
                <Route path="/" element={<Home navigate={navigate} setPageIndex={setPageIndex} Link={Link} />} />
                <Route path="/recommend" element={<Recommend />} />
                <Route path="/search" element={<Search />} />
                <Route path="/myinfo" element={<MyInfo HiOutlineUserCircle={HiOutlineUserCircle} />} />
            </Routes>
            <NavTab navigate={navigate} pageIndex={pageIndex} setPageIndex={setPageIndex} />
        </div>
    );
}

const NavTab = ({navigate,pageIndex,setPageIndex}) => {
    return(
        <div className="navi-wrap">
            <button className={pageIndex === 0 ? "navi-btn active" : "navi-btn"} onClick={() => {navigate('/'); setPageIndex(0)}}><MdOutlineHome/></button>
            <button className={pageIndex === 1 ? "navi-btn active" : "navi-btn"} onClick={() => {navigate('/recommend'); setPageIndex(1)}}><MdOutlineRecommend /></button>
            <button className={pageIndex === 2 ? "navi-btn active" : "navi-btn"} onClick={() => {navigate('/search'); setPageIndex(2)}}><MdOutlineManageSearch /></button>
            <button className={pageIndex === 3 ? "navi-btn active" : "navi-btn"} onClick={() => {navigate('/myinfo'); setPageIndex(3)}}><HiOutlineUserCircle /></button>
        </div>
    )
}

export default App;
