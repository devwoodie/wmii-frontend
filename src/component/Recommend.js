import {MdOutlineMovieCreation} from "react-icons/md";
import RecommendList from './RecommendList';
import axios from "axios";
import {useEffect, useState} from "react";

const Recommend = () => {

    return(
        <div className="Recommend inner">
            <h2 className="wrap-tit"><span className="tit-icon"><MdOutlineMovieCreation/></span> 내게 맞는 영화 추천</h2>

        </div>
    )
}


export default Recommend;