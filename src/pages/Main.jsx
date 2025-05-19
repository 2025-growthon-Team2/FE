import { useState } from "react";
import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import { Outlet, useLocation } from "react-router-dom";

function MainPage() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname.substring(1));

    const changeCurrentPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <MainPageWrapper>
            <Outlet />
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
