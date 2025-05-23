import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Name from "../components/Name";
import GiverInfo from "../components/GiverInfo";
import Detail from "../components/Detail";
import EduRegisterBtn from "./EduRegisterBtn";
import Bear from "../image/bear.png";

function Profile({ userInfo, auth }) {
    const { pathname } = useLocation();
    return (
        <ProfileWrapper>
            <ProfileImage $pathname={pathname} $auth={auth}>
                <BearImg src={Bear} alt="bear" />
            </ProfileImage>
            {userInfo ? (
                <>
                    {auth !== "" && (
                        <Name $auth={auth} $path={pathname.substring(1)}>
                            {userInfo.nickname}
                        </Name>
                    )}
                    {auth === "giver" && pathname === "/mypage" && (
                        <GiverInfo userInfo={userInfo} />
                    )}
                    {auth === "" && (
                        <Detail userInfo={userInfo} auth={auth} />
                    )}
                    {auth === "giver" && pathname === "/mypage" && (
                        <EduRegisterBtn>교육 정보 등록하기</EduRegisterBtn>
                    )}
                </>
            ) : (
                <LoadingText>로딩 중...</LoadingText>
            )}
        </ProfileWrapper>
    );
}

const ProfileImage = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: #ead9ca;
    margin-bottom: ${({ $pathname, $auth }) => {
        return $pathname !== "/mypage"
            ? "6px"
            : $auth === "giver"
            ? "20px"
            : "12px";
    }};
`;

const BearImg = styled.img`
    width: 140px;
    height: 140px;
`;

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 13px;
    border-bottom: 1px solid #ececec;
`;

const LoadingText = styled.div`
    font-size: 16px;
    color: #898989;
    margin: 10px 0;
`;

export default Profile;
