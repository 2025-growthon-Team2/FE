import styled from "styled-components";
import { convertObjToMap } from "../utils/convertObjToMap";
import EduApplyCard from "./EduApplyCard";

const giverEduInfo = [
    {
        name: "김지연",
        title: "중학생을 위한 자기주도학습 방법",
        subtitle: "과목별 효율적인 공부법과 시간 관리 방법",
        isdoing: "진행 중",
    },
    {
        name: "김지연",
        title: "중학생을 위한 자기주도학습 방법",
        subtitle: "과목별 효율적인 공부법과 시간 관리 방법",
        isdoing: "완료",
    },
    {
        name: "김지연",
        title: "중학생을 위한 자기주도학습 방법",
        subtitle: "과목별 효율적인 공부법과 시간 관리 방법",
        isdoing: "완료",
    },
];

function History() {
    const edus = [];
    giverEduInfo.map((edu) =>
        edus.push(Array.from((convertObjToMap(edu).values())))
    );
    return (
        <HistoryWrapper>
            <span>신청내역</span>
            <EduApplyCards>
                {edus.map((edu, index) => (
                    <EduApplyCard key={index} edu={edu} />
                ))}
            </EduApplyCards>
        </HistoryWrapper>
    );
}

const HistoryWrapper = styled.div`
    padding: 12px 16px;
    & > span {
		display: block;
        margin-bottom: 6px;
		color: #898989;
		font-weight: 500;
    }
`;

const EduApplyCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
	padding: 8px 0;
`;

export default History;
