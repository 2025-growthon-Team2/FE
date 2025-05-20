import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "../image/home.svg";
import MatchingIcon from "../image/matching.svg";
import AlarmIcon from "../image/alarm.svg";
import MyIcon from "../image/my.svg";

function Item({ children, page, icon, changeCurrentPage, currentPage }) {
    return (
        <Link to={"/" + page}>
            <ItemWrapper
                onClick={() => {
                    changeCurrentPage(page);
                    // navigate("/" + page);
                }}
                $active={currentPage === page}>
                <span>
                    <img src={icon} alt={page} />
                </span>
                <span>{children}</span>
            </ItemWrapper>
        </Link>
    );
}

function NavigationBar({ currentPage, changeCurrentPage }) {
    const pages = [
        {
            page: "home",
            icon: HomeIcon,
            itemName: "홈",
        },
        {
            page: "matching",
            icon: MatchingIcon,
            itemName: "매칭",
        },
        {
            page: "alarm",
            icon: AlarmIcon,
            itemName: "알림",
        },
        {
            page: "mypage",
            icon: MyIcon,
            itemName: "마이페이지",
        },
    ];
    return (
        <NavigationBarWrapper>
            {pages.map((page) => {
                return (
                    <Item
                        key={page.page}
                        page={page.page}
                        icon={page.icon}
                        changeCurrentPage={changeCurrentPage}
                        currentPage={currentPage}>
                        {page.itemName}
                    </Item>
                );
            })}
        </NavigationBarWrapper>
    );
}

const NavigationBarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 14px 51px 16px 51px;
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
                props.$active
                    ? "brightness(0) saturate(100%) invert(31%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(92%) contrast(87%)"
                    : "none"};
        }
    }
    span:last-child {
        font-size: 8px;
        margin-top: 5px;
    }
`;

export default NavigationBar;
