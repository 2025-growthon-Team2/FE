import { Link } from "react-router-dom";

function StartPage() {
    return (
        <>
            Welcome message and Log In Button
            <Link to="/home">로그인</Link>
        </>
    );
}

export default StartPage;
