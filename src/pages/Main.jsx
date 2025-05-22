import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function MainPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const userInfo = {
        name: "종호",
        field: "IT",
        subfield: "네트워크",
        id: "parkvudghk@naver.com",
        school: {
            info: "인하공업전문대학 컴퓨터정보공학과(심화) 1학년",
            email: "ebebebe@itc.ac.kr",
        },
    };
    const auth = "learner";
    const [currentPage, setCurrentPage] = useState(
        location.pathname.substring(1)
    );
    const changeCurrentPage = (page) => {
        setCurrentPage(page);
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <MainPageWrapper>
            <Header moveBack={handleBack} />
            <Outlet context={{ userInfo, auth }} />
            <NavigationBar
                changeCurrentPage={changeCurrentPage}
                currentPage={currentPage}
            />
        </MainPageWrapper>
    );
}

const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default MainPage;
