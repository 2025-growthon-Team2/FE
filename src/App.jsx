import styled from "styled-components";
import "./css/App.css";
import Main from "./pages/Main";

function App() {
    return (
        <AppContainer>
            <Wrapper>
                <Main />
            </Wrapper>
        </AppContainer>
    );
}

const AppContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 393px;
    position: relative;
    height: 100%;
`;

export default App;
