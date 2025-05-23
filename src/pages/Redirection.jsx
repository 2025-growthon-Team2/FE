import { Link } from "react-router-dom";
import axios from "axios";

async function Redirection() {
    console.log(new URL(window.location.href));
    try {
        const response = await axios.get("/api/user");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    return (
        <div>
            Redirection 테스트
            <Link to="/home">홈으로 이동</Link>
        </div>
    );
}

export default Redirection;
