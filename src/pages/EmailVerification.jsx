import { Link } from "react-router-dom";
import styled from "styled-components";

function EmailVerification() {
    return (
        <StartPageWrapper>
            <LoginButton to="/verification-success">
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

export default EmailVerification;
