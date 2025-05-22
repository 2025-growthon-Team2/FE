import { Link } from "react-router-dom";

function Redirection() {
    console.log(new URL(window.location.href));
    return (
        <div>
            Redirection 테스트
            <Link to="/home">홈으로 이동</Link>
        </div>
    );
}

export default Redirection;
