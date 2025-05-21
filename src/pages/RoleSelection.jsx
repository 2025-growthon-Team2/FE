import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import ProgressBar from "../components/PrgressBar";
import Header from "../components/Header";
import { validateAuthNumber, validateEmail } from "../utils/validate";

function requestAuthNumber(email) {
    if (!validateEmail(email)) return "validation";
    return "success";
}

function checkAuthNumber(number) {
    if (!validateAuthNumber(number)) return "validation";
    return "success";
}

function RoleSelection() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const userInfo = {
        name: "종호",
        age: 27,
        field: "IT",
        subfield: "네트워크",
        id: "parkvudghk@naver.com",
        school: {
            info: "인하공업전문대학 컴퓨터정보공학과(심화) 1학년",
            email: "ebebebe@itc.ac.kr",
        },
    };
    const auth = "login";
    const routes = ["/role", "/email-verification", "/verification-success"];
    const [step, setStep] = useState(routes.indexOf(pathname));
    const [tempRole, setTempRole] = useState(
        localStorage.getItem("tempRole") || ""
    );
    const [isRequestEmail, setIsRequestEmail] = useState(false);
    const [check, setCheck] = useState("");
    const emailAuthRef = useRef(null);

    const moveNextPage = useCallback(() => {
        if (step === routes.length - 1) {
            navigate("/home");
            return;
        }
        if (step === 0) {
            localStorage.setItem("tempRole", tempRole);
        }
        if (pathname === "/email-verification") {
            if (!isRequestEmail) {
                const flag = requestAuthNumber(emailAuthRef.current.value);
                setCheck(flag);
                if (flag === "success") {
                    setIsRequestEmail(true);
                    emailAuthRef.current.value = "";
                }
                return;
            }
            const flag = checkAuthNumber(emailAuthRef.current.value);
            setCheck(flag);
            emailAuthRef.current.value = "";
            if (flag !== "success") return;
        }
        setStep(step + 1);
        navigate(routes[step + 1]);
    }, [routes, navigate, step, tempRole, setCheck, isRequestEmail, pathname]);

    const movePrevPage = useCallback(() => {
        if (step === 0) {
            navigate("/");
            return;
        }
        setIsRequestEmail(false);
        setCheck("");
        const prevStep = step - 1;
        setStep(prevStep);
        navigate(routes[prevStep], { replace: true });
    }, [routes, navigate, step]);

    const selectTempRole = useCallback(
        (select) => {
            setTempRole(select);
        },
        [setTempRole]
    );

    useEffect(() => {
        const savedRole = localStorage.getItem("tempRole");
        if (savedRole) {
            setTempRole(savedRole);
        }
    }, []);

    useEffect(() => {
        const currentStep = routes.indexOf(pathname);
        if (currentStep !== -1 && currentStep !== step) {
            setStep(currentStep);
        }
    }, [pathname, routes, step]);

    return (
        <RoleSelectionWrapper>
            <ProgressBar step={step} />
            <Header moveBack={movePrevPage} />
            <Outlet
                context={{
                    routes,
                    step,
                    setStep,
                    userInfo,
                    auth,
                    emailAuthRef,
                    moveNextPage,
                    movePrevPage,
                    tempRole,
                    setTempRole,
                    selectTempRole,
                    check,
                    isRequestEmail,
                }}
            />
        </RoleSelectionWrapper>
    );
}

const RoleSelectionWrapper = styled.div`
    padding: 10px 16px 20px 16px;
`;

export default RoleSelection;
