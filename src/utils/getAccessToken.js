import axios from "axios";
import { getCookie, setCookie } from "./cookies";

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
        console.error("Failed to get access token:", error);
        return null;
    }
}
