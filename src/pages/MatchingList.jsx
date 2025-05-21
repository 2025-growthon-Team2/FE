import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import back from "../image/back.png";
import userImg from "../image/userImg.png";

function MatchingList() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      <Header>
        <Back src={back} onClick={handleBack}></Back>
        <HeaderTitle>신청자 목록</HeaderTitle>
      </Header>
      <ApplyUserBox>
        <ApplyUser>
          <ApplyUserImg src={userImg}></ApplyUserImg>
          <ApplyUserInfo>
            <ApplyUserName>홍길동</ApplyUserName>
            <ApplyUserEmail>yuna_kim@kakao.com</ApplyUserEmail>
          </ApplyUserInfo>
        </ApplyUser>
        <ApplyUser>
          <ApplyUserImg src={userImg}></ApplyUserImg>
          <ApplyUserInfo>
            <ApplyUserName>홍길동</ApplyUserName>
            <ApplyUserEmail>yuna_kim@kakao.com</ApplyUserEmail>
          </ApplyUserInfo>
        </ApplyUser>
        <ApplyUser>
          <ApplyUserImg src={userImg}></ApplyUserImg>
          <ApplyUserInfo>
            <ApplyUserName>홍길동</ApplyUserName>
            <ApplyUserEmail>yuna_kim@kakao.com</ApplyUserEmail>
          </ApplyUserInfo>
        </ApplyUser>
      </ApplyUserBox>
    </PageWrapper>
  );
}

export default MatchingList;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 30px;
  padding: 40px 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export const Back = styled.img`
  width: 10px;
  height: 20px;
  cursor: pointer;
  margin-right: 40px;
`;

export const ApplyUserBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ApplyUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 25px;
  margin: 10px 0;
`;

export const ApplyUserImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const ApplyUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ApplyUserName = styled.div`
  font-weight: 700;
  margin-bottom: 3px;
`;

export const ApplyUserEmail = styled.div``;
