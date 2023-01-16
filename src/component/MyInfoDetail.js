import { HiOutlineUserCircle } from 'react-icons/hi';

const MyInfoDetail = () => {
    return(
        <div className="MyInfoDetail sec-mgt inner">
            <div className="user-wrap">
                <div className="user-left">
                    <span className="user-icon"><HiOutlineUserCircle /></span>
                    <div className="user-name"><span className="user-nick">유동우</span> 님, 안녕하세요</div>
                </div>
            </div>
            <div className="info-detail-wrap">
                <div className="info-list">
                    <label>닉네임</label>
                    <input className="info-input" type="text" value="유동우"/>
                    <span className="nick-fix-btn">수정</span>
                </div>
                <div className="info-list">
                    <label>아이디</label>
                    <input className="info-input disabled" type="text" value="ehddn453" disabled/>
                </div>
                <div className="info-list">
                    <label>비밀번호</label>
                    <input className="info-input disabled" type="password" value="12345678" disabled/>
                </div>
            </div>
        </div>
    )
}

export default MyInfoDetail;