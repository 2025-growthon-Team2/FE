import { Routes, Route } from "react-router-dom";

import styled from "styled-components";
import "./css/App.css";
import Start from "./pages/Start";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Matching from "./pages/Matching";
import Alarm from "./pages/Alarm";
import MyPage from "./pages/MyPage";

function App() {
    return (
        <AppContainer>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route element={<Main />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/matching" element={<Matching />} />
                        <Route path="/alarm" element={<Alarm />} />
                        <Route path="/mypage" element={<MyPage />} />
                    </Route>
                </Routes>
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
