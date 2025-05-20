import { useState } from "react";
import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import { Outlet, useLocation } from "react-router-dom";

function MainPage() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(
        location.pathname.substring(1)
    );
    const userInfo = {
        name: "종호",
        age: 27,
        field: "IT",
        subfield: "네트워크",
        id: "parkvudghk@naver.com",
        school: {
            info: "인하공업전문대학 컴퓨터정보공학과(심화) 1학년",
            email: "ebebebe@itc.ac.kr",
        },
    };
    const auth = "giver";
    const changeCurrentPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <MainPageWrapper>
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
