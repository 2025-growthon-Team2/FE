import { useState } from "react";
import styled from "styled-components";
import Content from "../components/Content";
import NavigationBar from "../components/NavigationBar";

function MainPage() {
    const [currentPage, setCurrentPage] = useState("home");

    const handleNavigation = (page) => {
        setCurrentPage(page);
    };

    return (
        <MainPageWrapper>
            <Content currentPage={currentPage} />
            <NavigationBar
                onNavigate={handleNavigation}
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
