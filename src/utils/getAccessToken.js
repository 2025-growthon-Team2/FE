import axios from "axios";
import { getCookie, setCookie } from "./cookies";

export async function getAccessToken() {
    try {
        const accessTokenCookie = getCookie("accessToken");
        if (!accessTokenCookie) return accessTokenCookie;
        const { data } = await axios.get(
            `${import.meta.env.VITE_API_SERVER}api/auth/access-token`,
            {
                withCredentials: true,
            }
        );
        setCookie("accessToken", data.token, 3600);
        return data.token;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            alert("액세스 토큰을 불러올 수 없습니다! 로그인을 다시 하세요.");
            // window.location.href = KAKAO_LOGIN_URL;
            return;
        }
    }
}
