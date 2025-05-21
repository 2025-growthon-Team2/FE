import { useOutletContext } from "react-router-dom";
import Button from "../components/Button";
import Profile from "../components/Profile";
import TempRoleSelection from "../components/TempRoleSelection";

function Role() {
    const { moveNextPage, selectTempRole, tempRole, userInfo, auth } = useOutletContext();
    return (
        <>
            <Profile userInfo={userInfo} auth={auth} />
            <TempRoleSelection onClick={selectTempRole} />
            <Button isDisabled={tempRole === ''} onClick={moveNextPage} >
                확인
            </Button>
        </>
    );
}

export default Role;
