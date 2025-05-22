import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function MainPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = {
    name: "종호",
    field: "IT",
    subfield: "네트워크",
    id: "parkvudghk@naver.com",
    email: "ebebebe@itc.ac.kr",
  };
  const auth = "giver";
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
    </MainPageWrapper>
  );
}

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainPage;
