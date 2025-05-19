import React from "react";
import Home from "../pages/Home";
import Matching from "../pages/Matching";
import Alarm from "../pages/Alarm";
import MyPage from "../pages/MyPage";

const Content = ({ currentPage }) => {
    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return <Home />;
            case "matching":
                return <Matching />;
            case "alarm":
                return <Alarm />;
            case "mypage":
                return <MyPage />;
            default:
                return <Home />;
        }
    };

    return renderPage();
};

export default Content;
