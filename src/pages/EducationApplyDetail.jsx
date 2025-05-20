import { useParams, useNavigate } from "react-router-dom";
import * as D from "../css/EducationApplyDetailStyle";
import back from "../image/back.png";

function EducationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <D.PageWrapper>
      <D.Header>
        <D.Back src={back} onClick={handleBack}></D.Back>
        <D.HeaderTitle>학습 신청</D.HeaderTitle>
      </D.Header>
      <D.Tags>
        <D.Category>중, 고등학교 학습</D.Category>
        <D.Region>서울 광진구 군자동</D.Region>
      </D.Tags>
      <D.Title>{`중학생을 위한\n자기주도학습 방법`}</D.Title>
      <D.SubTitle>과목별 효율적인 공부법과 시간 관리 방법</D.SubTitle>
      <D.VolInfo>
        <D.InfoName>김지연</D.InfoName>
        <D.InfoUniv>| 한양대학교 교육학과 3학년</D.InfoUniv>
      </D.VolInfo>
      <D.EduTime>
        <D.EduTimeTitle>교육 시간</D.EduTimeTitle>
        <D.EduTimeDetail>{`2025년 6월 3일(화) 오후 3시 이후`}</D.EduTimeDetail>
      </D.EduTime>
      <D.Divider></D.Divider>
      <D.Content>{`📚 주요 내용

1. 나의 공부 성향 파악하기
- 나는 계획형? 즉흥형?
- 자기주도학습 체크리스트 진단

2. 공부 계획 세우는 법
- 하루/일주일 시간표 짜기
- 과목별 목표 설정하는 팁

3. 공부를 습관으로 만드는 루틴
- 집중력 유지하는 공부법
- 스마트폰과의 거리두기 연습

4. 실전 워크시트 작성
- 나만의 학습 플래너 만들어 보기
- 오늘부터 실천 가능한 한 가지 정하기

4. 실전 워크시트 작성
- 나만의 학습 플래너 만들어 보기
- 오늘부터 실천 가능한 한 가지 정하기

4. 실전 워크시트 작성
- 나만의 학습 플래너 만들어 보기
- 오늘부터 실천 가능한 한 가지 정하기

4. 실전 워크시트 작성
- 나만의 학습 플래너 만들어 보기
- 오늘부터 실천 가능한 한 가지 정하기

4. 실전 워크시트 작성
- 나만의 학습 플래너 만들어 보기
- 오늘부터 실천 가능한 한 가지 정하기`}</D.Content>
      <D.ApplyBox>
        {" "}
        <D.ApplyBtn>신청하기</D.ApplyBtn>
      </D.ApplyBox>
    </D.PageWrapper>
  );
}

export default EducationDetail;
