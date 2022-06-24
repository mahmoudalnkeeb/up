import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAction } from "../../store/userSlice";
import { updateUserInfoAction } from "../../store/userSlice";
import { TOGGLE_SIDEBAR } from "../../store/appSlice";
import { RiMenu4Fill } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { BiNews } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { BsSoundwave } from "react-icons/bs";
import { BsFillCollectionPlayFill } from "react-icons/bs";

import Container from "../StyledComponent/Container";
import logo from "../../assets/images/OURAT_Black.png";
import StyledNotifications from "./notifications/StyledNotifications";
import StyledNotificationList from "./notifications/StyledNotificationList";
import NotificationsItems from "./notifications/StyledNotificationItem";
import NavigationBar from "./navbar/NavigationBar";
import NavbarLinks from "./navbar/NavbarLinks";
import StyledUserLabel from "./userLabel/UserLabel";
import UserActionsList from "./userLabel/UserActionsList";
import Search from "./searchField/Search";

const Header = () => {
  const {
    users: {
      users: { email, notifications, isOnline },
      isSent,
    },
    posts,
    app: { toggleSidebar, userImage, userName },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searchFocus, setSearchFocus] = useState(true);
  const [toggleUserActions, setToggleUserActions] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  function CHECKING_CONNECTION() {
    const data = {
      isOnline: true,
    };
    if (window.navigator.onLine === true) {
      return dispatch(updateUserInfoAction(data));
    } else {
      return dispatch(updateUserInfoAction(data));
    }
  }

  useEffect(() => {
    CHECKING_CONNECTION();
    dispatch(getUsersAction());
  }, [dispatch]);

  const handleCloseSidebar = () => {
    dispatch(TOGGLE_SIDEBAR());
  };
  const handleSearch = (e) => {
    setSearchFocus(!searchFocus);
    e.target.closest("form").classList.toggle("sm:flex-none");
  };

  const ToggleNotificationHandler = () => {
    setShowNotifications(!showNotifications);
  };

  const handleUserActions = () => {
    setToggleUserActions(!toggleUserActions);
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["togglerButton"]}>
        <button type="button" onClick={() => handleCloseSidebar()}>
          <RiMenu4Fill />
        </button>
      </div>
      <Container className="container flex justify-between items-center flex-wrap md:flex-nowrap">
        <StyledNotifications
          showNotify
          onClick={() => ToggleNotificationHandler()}
        >
          <StyledNotificationList showNotify={showNotifications}>
            <NotificationsItems
              textContent="Hello world its a Title"
              date={new Date().toDateString()}
              image={userImage}
            />
            <NotificationsItems
              textContent="Hello world its a Title [2]"
              date={new Date().toDateString()}
              image={userImage}
            />
            <NotificationsItems
              textContent="Hello world its a Title [3]"
              date={new Date().toDateString()}
              image={userImage}
            />
          </StyledNotificationList>
        </StyledNotifications>
        <Search></Search>
        <NavigationBar>
          <NavbarLinks>
            <NavLink to="/">
              <IoHomeSharp />
            </NavLink>
          </NavbarLinks>
          <NavbarLinks>
            <NavLink to="/posts">
              <BiNews />
            </NavLink>
          </NavbarLinks>
          <NavbarLinks>
            <NavLink to="/ask">
              <MdGroups />
            </NavLink>
          </NavbarLinks>
          <NavbarLinks>
            <NavLink to="/talking">
              <BsSoundwave />
            </NavLink>
          </NavbarLinks>
          <NavbarLinks>
            <NavLink to="/videos">
              <BsFillCollectionPlayFill />
            </NavLink>
          </NavbarLinks>
        </NavigationBar>
        <StyledUserLabel
          userImage={userImage}
          onClick={() => handleUserActions()}
        >
          <UserActionsList showActions={toggleUserActions}>
            <center>Continue ...</center>
          </UserActionsList>
        </StyledUserLabel>
      </Container>
    </header>
  );
};

export default Header;
