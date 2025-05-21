import styled from "styled-components";

function Header({ moveBack }) {
    return (
        <HeaderWrapper>
            <BackButton onClick={moveBack}>
                <img
                    src="src/image/back.png"
                    alt="back"
                    width="10"
                    height="20"
                />
            </BackButton>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    height: 40px;
    display: flex;
    align-items: center;
`;

const BackButton = styled.button`
	background: none;
	border: none;
`

export default Header;
