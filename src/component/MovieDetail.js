import {useLocation} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";

const MovieDetail = ({apiUrl}) => {
    const location = useLocation();
    const movieId = location.state.data;
    const [infoData, setInfoData] = useState('');

    useEffect(() => {
        detailInfo();
    },[]);

    const detailInfo = async () => {
        try{
            await axios.get(apiUrl+movieId,{
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language : 'ko',
                }
            }).then((response) => {
                console.log(response.data)
                setInfoData(response.data);
            })
        }
        catch (error){
            console.log(error)
        };
    };

    return(
        <div className="MovieDetail inner">
            {infoData.title}
        </div>
    )
}

export default MovieDetail;