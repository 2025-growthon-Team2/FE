import styled from "styled-components";

function GiverInfo({ userInfo }) {
    return (
        <GiverInfoWrapper>
            {userInfo.age}세<span>∙</span>{userInfo.field} 분야 <span>|</span>{" "}
            <span>{userInfo.subfield}</span>
        </GiverInfoWrapper>
    );
}

const GiverInfoWrapper = styled.span`
	margin-bottom: 14px;
	font-weight: 500;
    span {
        color: #989898;
    }
    span:last-child {
        color: #c48dff;
    }
`;

export default GiverInfo;
