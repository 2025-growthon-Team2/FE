import { Routes, Route } from "react-router-dom";

import styled from "styled-components";
import "./css/App.css";
import Start from "./pages/Start";
import Role from "./pages/Role";
import EmailVerification from "./pages/EmailVerification";
import VerificationSuccess from "./pages/VerificationSuccess";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Matching from "./pages/Matching";
import Alarm from "./pages/Alarm";
import MyPage from "./pages/MyPage";
import EduRegister from "./pages/EduRegister";
import EduRegisterConfirm from "./pages/EduRegisterConfirm";

function App() {
    return (
        <AppContainer>
            <Wrapper>
                <Routes>
                    <Route index element={<Start />} />
                    <Route path="role" element={<Role />} />
                    <Route path="email-verification" element={<EmailVerification />} />
                    <Route path="verification-success" element={<VerificationSuccess />} />
                    <Route element={<Main />}>
                        <Route path="home" element={<Home />} />
                        <Route path="matching" element={<Matching />} />
                        <Route path="alarm" element={<Alarm />} />
                        <Route path="mypage" element={<MyPage />} />
                        <Route path="edu/register">
                            <Route index element={<EduRegister />} />
                            <Route
                                path="confirm"
                                element={<EduRegisterConfirm />}
                            />
                        </Route>
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
