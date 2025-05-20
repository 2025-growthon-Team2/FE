import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Name from "../components/Name";
import GiverInfo from "../components/GiverInfo";
import Detail from "../components/Detail";
import EduRegisterBtn from "./EduRegisterBtn";

function Profile({ userInfo, auth }) {
    const { pathname } = useLocation();
    return (
        <ProfileWrapper>
            <Name auth={auth} path={pathname.substring(1)}>
                {userInfo.name}
            </Name>
            {auth === "giver" && <GiverInfo userInfo={userInfo} />}
            {auth === "login" && <Detail userInfo={userInfo} auth={auth} />}
            {auth === "giver" && (
                <EduRegisterBtn>교육 정보 등록하기</EduRegisterBtn>
            )}
        </ProfileWrapper>
    );
}

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 13px;
    border-bottom: 1px solid #ececec;
`;

export default Profile;
