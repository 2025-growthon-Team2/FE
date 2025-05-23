import axios from "axios";
import { validateAuthNumber, validateEmail } from "../utils/validate";
import { getAccessToken } from "../utils/getAccessToken";

export async function requestAuthNumber(email) {
    try {
        if (!validateEmail(email)) return "validation";
        const accessToken = await getAccessToken();
        const response = await axios.post(
            `${import.meta.env.VITE_API_SERVER}api/auth/email`,
            { email },
            {
                headers: {
                    "Content-Type": "application/json", // axios 는 객체 전송 시 기본으로 JSON 헤더를 설정해주지만, 명시하셔도 됩니다.
                    Authorization: `Bearer ${accessToken}`,
                },
                // 만약 쿠키 기반 인증이나 크로스사이트 요청이 필요하다면 아래 옵션을 추가하세요.
                withCredentials: true,
            }
        );
        return "success";
    } catch (error) {
        const status = error.response?.status;
        if (status === 400) return "wrong";
        return "failed";
    }
}

export async function checkAuthNumber(code, role) {
    try {
        if (!validateAuthNumber(code)) return "validation";
        const accessToken = await getAccessToken();
        const response = await axios.post(
            `${import.meta.env.VITE_API_SERVER}api/auth/email/verify`,
            { code },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
            }
        );
        const response2 = await axios.post(
            `${import.meta.env.VITE_API_SERVER}api/role/my`,
            { role },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
            }
        );
        return "success";
    } catch (error) {
        console.log(error.response);
        const status = error.response?.status;
        if (status === 400) return "wrong";
        if (status === 422) return "expired";
        return "failed";
    }
}

export async function getUserInfoApiCall() {
    try {
        const accessToken = await getAccessToken();
        const { data } = await axios.get(
            `${import.meta.env.VITE_API_SERVER}api/user`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
            }
        );
        return data;
    } catch (error) {
        console.error("Failed to fetch user info:", error);
        throw error;
    }
}

export async function getPostsApiCall() {
    try {
        const accessToken = await getAccessToken();
        const { data } = await axios.get(
            `${import.meta.env.VITE_API_SERVER}api/posts/my`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
            }
        );
        return data;
    } catch (error) {
        const status = error.response;
        console.log(status);
    }
}

export async function registerEduForm(
    title,
    subtitle,
    category,
    Description,
    address,
    teachAt
) {
    try {
        const accessToken = await getAccessToken();
        const response = await axios.post(
            `${import.meta.env.VITE_API_SERVER}api/post`,
            { title, subtitle, category, Description, address, teachAt },
            {
                headers: {
                    "Content-Type": "application/json", // axios 는 객체 전송 시 기본으로 JSON 헤더를 설정해주지만, 명시하셔도 됩니다.
                    Authorization: `Bearer ${accessToken}`,
                },
                // 만약 쿠키 기반 인증이나 크로스사이트 요청이 필요하다면 아래 옵션을 추가하세요.
                withCredentials: true,
            }
        );
        return "success";
    } catch (error) {
        console.log(error.response);
        return "failed";
    }
}


// export async function updateRole(role) {
//     try {
//         const accessToken = await getAccessToken();
//         const response2 = await axios.post(
//             `${import.meta.env.VITE_API_SERVER}api/role/my`,
//             { role },
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${accessToken}`,
//                 },
//                 withCredentials: true,
//             }
//         );
//         return "success";
//     } catch (error) {
//         console.log(error.response);
//         const status = error.response?.status;
//         if (status === 400) return "wrong";
//         if (status === 422) return "expired";
//         return "failed";
//     }
// }