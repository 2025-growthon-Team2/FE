import styled from "styled-components";
import { convertObjToMap } from "../utils/convertObjToMap";

function DetailLine({ info }) {
    const [key, value] = info;
    return (
        <DetailLineWrapper>
            {key} <span>{value}</span>
        </DetailLineWrapper>
    );
}

function Detail({ userInfo, auth }) {
    const userDetailData = Array.from(
        convertObjToMap(
            auth === "giver"
                ? {
                      "학교 정보": userInfo.school.info,
                      ID: userInfo.id,
                      "학교 메일": userInfo.school.email,
                  }
                : {
                      이름: userInfo.name,
                      "카카오 ID": userInfo.id,
                  }
        ).entries()
    );
    return (
        <DetailWrapper auth={auth}>
            {userDetailData.map((value, index) => (
                <DetailLine key={index} info={value} />
            ))}
        </DetailWrapper>
    );
}

const DetailLineWrapper = styled.h4`
	font-size: 16px;
	font-weight: 700;
	span {
		font-weight: 400;
	}
`

const DetailWrapper = styled.div`
    display: ${({ auth }) => {
        return auth === "learner" ? "none" : "flex";
    }};
    flex-direction: column;
    align-items: ${({ auth }) => {
        return auth === "giver" ? "start" : "center";
    }};
    gap: 10px;
	padding: 30px 72px;
`;

export default Detail;
