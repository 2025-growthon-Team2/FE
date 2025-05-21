import styled from "styled-components";
import { useLocation } from "react-router-dom";

const checkAvailBackBtn = (pathname) => {
    return !(pathname === "/home" || pathname === '/matching' || pathname === '/alarm' ||pathname === "/mypage");
};

const checkAvailPageName = (pathname) => {
    if (pathname === "/mypage") return "프로필";
    if (pathname === "/edu/apply") return "학습 신청";
    if (pathname === "/edu/register") return "교육 정보 등록하기";
    if (pathname === "/edu/upload/") return "교육 내용 업로드";
    if (pathname === "/edu/matching/") return "신청자 목록";
    return "";
};

const checkAvailLogo = (pathname) => {
    console.log(pathname);
    return pathname === "/home";
};

function Header({ moveBack }) {
    const { pathname } = useLocation();
    const isAvailBackBtn = checkAvailBackBtn(pathname);
    const pageName = checkAvailPageName(pathname);
    const isAvailLogo = checkAvailLogo(pathname);
    return (
        <HeaderWrapper>
            <HeaderDivider>
                {isAvailBackBtn && (
                    <BackButton onClick={moveBack}>
                        <img
                            src="src/image/back.png"
                            alt="back"
                            width="10"
                            height="20"
                        />
                    </BackButton>
                )}
                {isAvailLogo && <Logo>logo</Logo>}
                {pageName && <PageName>{pageName}</PageName>}
            </HeaderDivider>
            <HeaderDivider></HeaderDivider>
            <HeaderDivider>
                {isAvailLogo && (
                    <Alarm>
                        <img
                            src="src/image/header_alarm.png"
                            alt="alarm"
                            width="24px"
                            height="26px"
                        />
                    </Alarm>
                )}
            </HeaderDivider>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    display: flex;
    height: 40px;
    align-items: center;
    padding: 0 20px;
    width: 100%;
`;

const BackButton = styled.button`
    background: none;
    border: none;
`;

const PageName = styled.h1`
    font-size: 20px;
    font-weight: 500;
`;

const Logo = styled.div`
    background-color: rebeccapurple;
    width: 31px;
    height: 19px;
`;

const HeaderDivider = styled.div`
    width: 33.33%;
    &:last-child {
        display: flex;
        justify-content: flex-end;
    }
`;

const Alarm = styled.div`
    width: 24px;
    height: 24px;
`;

export default Header;
