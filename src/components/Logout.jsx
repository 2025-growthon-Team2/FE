import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Logout() {
    const navigate = useNavigate();
    return (
        <LogoutWrapper>
            <LogoutButton
                onClick={() => {
                    navigate("/");
                }}>로그아웃 하기</LogoutButton>
        </LogoutWrapper>
    );
}

const LogoutWrapper = styled.div`
    border-top: 1px solid #EEEEEE;
    border-bottom: 1px solid #EEEEEE;
    padding: 6px 21px 5px 21px;
    width: 100%;
`;

const LogoutButton = styled.button`
    border: none;
    color: red;
    font-size: 14px;
    background: none;
`;

export default Logout;
