import axios from "axios";
import { getCookie, setCookie } from "./cookies";
import { KAKAO_LOGIN_URL } from "./globals";

let isRedirecting = false;

export async function getAccessToken() {
    try {
        const accessTokenCookie = getCookie("accessToken");
        if (accessTokenCookie) return accessTokenCookie;
        const { data } = await axios.get(
            `${import.meta.env.VITE_API_SERVER}api/auth/access-token`,
            {
                withCredentials: true,
            }
        );
        setCookie("accessToken", data.token, 3600);
        return data.token;
    } catch (error) {
        if (axios.isAxiosError(error) && !isRedirecting) {
            isRedirecting = true;
            alert("로그인이 필요합니다.");
            window.location.href = KAKAO_LOGIN_URL;
        }
        return null;
    }
}
