import styled from "styled-components";
import HomeIcon from "../image/home.svg";
import MatchingIcon from "../image/matching.svg";
import AlarmIcon from "../image/alarm.svg";
import MyIcon from "../image/my.svg";

function Item({ icon, children, onClick, isActive }) {
    return (
        <ItemWrapper onClick={onClick} $isActive={isActive}>
            <span>
                <img src={icon} alt={icon} />
            </span>
            <span>{children}</span>
        </ItemWrapper>
    );
}

function NavigationBar({ onNavigate, currentPage }) {
    return (
        <NavigationBarWrapper>
            <Item
                icon={HomeIcon}
                onClick={() => onNavigate("home")}
                isActive={currentPage === "home"}>
                홈
            </Item>
            <Item
                icon={MatchingIcon}
                onClick={() => onNavigate("matching")}
                isActive={currentPage === "matching"}>
                매칭
            </Item>
            <Item
                icon={AlarmIcon}
                onClick={() => onNavigate("alarm")}
                isActive={currentPage === "alarm"}>
                알림
            </Item>
            <Item
                icon={MyIcon}
                onClick={() => onNavigate("mypage")}
                isActive={currentPage === "mypage"}>
                마이페이지
            </Item>
        </NavigationBarWrapper>
    );
}

const NavigationBarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 13px 50px;
    width: 393px;
    border-top: 1px solid #ececec;
    position: fixed;
    bottom: 0;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span:first-child {
        display: block;
        text-align: center;
        width: 24px;
        height: 24px;
        img {
            filter: ${(props) =>
                props.$isActive
                    ? "brightness(0) saturate(100%) invert(31%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(92%) contrast(87%)"
                    : "none"};
        }
    }
    span:last-child {
        font-size: 8px;
        margin-top: 9px;
    }
`;

export default NavigationBar;
