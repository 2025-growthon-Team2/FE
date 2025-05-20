import { Link } from "react-router-dom";
import styled from "styled-components";

function StartPage() {
    return (
        <StartPageWrapper>
            <StartPageImage>
                <img
                    src="src/image/tralalero_tralala.jpg"
                    alt="tralalero"
                    width="239"
                    height="239"
                />
            </StartPageImage>
            <Logo>
                <img
                    src="src/image/tralalero_tralala.jpg"
                    alt="tralalero"
                    width="41"
                    height="20"
                />
            </Logo>
            <TitleBox>
                <Title>믿고 나눌 수 있는 따뜻한 연결,</Title>
                <Title>'같이잇다'와 함께 만들어가요</Title>
            </TitleBox>
            <LoginButton to="/home">
                <img
                    src="src/image/kakao_logo.png"
                    alt="kakao"
                    width="40"
                    height="40"
                />
                <span>카카오로 시작하기</span>
            </LoginButton>
        </StartPageWrapper>
    );
}

const StartPageWrapper = styled.div`
    padding: 20px 16px;
`;

const StartPageImage = styled.div`
    padding: 83px 61px;
    margin-top: 44px;
`

const Logo = styled.div`
    padding: 0px 10px;
`;

const TitleBox = styled.div`
    padding: 10px 0px 10px 13px;
`;

const Title = styled.h1`
    font-size: 22px;
    font-weight: 600;
`;

const LoginButton = styled(Link)`
    display: flex;
    align-items: center;
    padding: 10px 105px;
    margin-top: 18px;
    border-radius: 10px;
    background: #fddc3f;
    font-size: 16px;
    width: 100%;
    white-space: nowrap;
`;

export default StartPage;
