import * as H from "../css/HomeStyle";
import { useState } from "react";
import alarmIcon from "../image/header_alarm.png";
import dropIcon from "../image/dropdown.png";
import EducationApplyCard from "../components/EducationApplyCard";
import RegionBottomSheet from "../components/RegionBottomSheet";
import CategoryBottomSheet from "../components/CategoryBottomSheet";
{
  /*import EduInfoCard from "../components/EduInfoCard";*/
}

function Home() {
  const [showRegionSheet, setShowRegionSheet] = useState(false);
  const [showCategorySheet, setShowCategorySheet] = useState(false);

  const handleSelectRegion = (region) => {
    console.log("입력된 지역:", region);
    setShowRegionSheet(false);
  };

  const handleSelectCategory = (category) => {
    console.log("선택된 분야:", category);
    setShowCategorySheet(false);
  };

  return (
    <H.PageWrapper>
      <H.Header>
        <H.Logo>logo</H.Logo>
        <H.Alarm src={alarmIcon}></H.Alarm>
      </H.Header>
      <H.Welcome>{"유저님, 오늘도 좋은 배움이\n기다리고 있어요 :)"}</H.Welcome>
      <H.EduSearch>
        <H.SearchButton></H.SearchButton>
        <H.SearchInput placeholder="원하는 교육 분야를 검색해주세요!"></H.SearchInput>
      </H.EduSearch>
      <H.Filters>
        <H.FilterRe onClick={() => setShowRegionSheet(true)}>
          사는 지역<H.DropIcon src={dropIcon}></H.DropIcon>
        </H.FilterRe>
        <H.FilterCategory onClick={() => setShowCategorySheet(true)}>
          분야<H.DropIcon src={dropIcon}></H.DropIcon>
        </H.FilterCategory>
      </H.Filters>
      <H.EduCards>
        <EducationApplyCard id={1}></EducationApplyCard>
        <EducationApplyCard id={2}></EducationApplyCard>
        <EducationApplyCard id={3}></EducationApplyCard>
        <EducationApplyCard id={4}></EducationApplyCard>
      </H.EduCards>
      {showRegionSheet && (
        <RegionBottomSheet
          onSelect={handleSelectRegion}
          onClose={() => setShowRegionSheet(false)}
        />
      )}
      {showCategorySheet && (
        <CategoryBottomSheet
          onSelect={handleSelectCategory}
          onClose={() => setShowCategorySheet(false)}
        />
      )}
      {/*기부자 기준 페이지
      <H.Welcome>{"어서오세요 :)\n박민재 재능기부자님!"}</H.Welcome>
      <H.EduInfos>
        <EduInfoCard id={1}></EduInfoCard>
        <EduInfoCard id={2}></EduInfoCard>
      </H.EduInfos>*/}
    </H.PageWrapper>
  );
}

export default Home;
