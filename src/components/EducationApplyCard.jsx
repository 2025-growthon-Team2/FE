import styled from "styled-components";
import userImg from "../image/userImg.png";
import { useNavigate } from "react-router-dom";

function EducationApplyCard({ id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/edu/apply/${id}`);
  };

  return (
    <EduBox onClick={handleClick}>
      <EduProfile>
        <ProfileImage src={userImg}></ProfileImage>
      </EduProfile>
      <EduDes>
        <EduTop>
          <EduTag>코딩</EduTag>
          <EduAgo>6일 전</EduAgo>
        </EduTop>
        <EduMid>
          <EduTitle>처음 배우는 코딩 - 파이썬 기초</EduTitle>
          <EduSubtitle>
            {"파이썬의 설치부터 간단한 프로그램 만들어보기까지:)"}
          </EduSubtitle>
          <EduDonator>이민수</EduDonator>
        </EduMid>
        <EduBottom>{"2025년 6월 10일(화) 오후 5시 이후"}</EduBottom>
      </EduDes>
    </EduBox>
  );
}

export default EducationApplyCard;

export const EduBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 10px 15px 20px 15px;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
`;

export const EduProfile = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 10px 0 0;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const EduDes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EduTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 0 10px 0;
`;

export const EduTag = styled.div`
  background-color: #ececec;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 700;
  padding: 3px 8px;
`;

export const EduAgo = styled.div`
  color: #898989;
  font-size: 13px;
  margin-right: 5px;
`;

export const EduMid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const EduTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 4px;
`;

export const EduSubtitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 6px;
`;

export const EduDonator = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

export const EduBottom = styled.div`
  font-size: 12px;
  font-weight: 700;
`;
