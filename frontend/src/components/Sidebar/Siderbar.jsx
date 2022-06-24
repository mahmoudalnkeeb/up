import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  IoHomeOutline,
  IoVideocamOutline,
  IoPersonOutline,
  IoMusicalNotesOutline,
} from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import styles from "./sidebar.module.css";
import { PAGE_DIRECTION } from "../../store/appSlice";
import UserImage from "../../assets/images/user.png";
import SideNavbarIcons from "../StyledComponent/SideNavbarIcons";
import StyledSideNavText from "../StyledComponent/SideNavbarText";
import Nav from "../StyledComponent/Nav";

const Sidebar = () => {
  const {
    app: { toggleSidebar, pageDirection },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const hideSidebar = useRef(null);

  useEffect(() => {
    dispatch(PAGE_DIRECTION(window.document.documentElement.dir));
    hideSidebar.current = `hide-sidebar-${pageDirection}`;
  }, []);

  return (
    <div
      className={`${styles["main-sidebar"]} ${
        toggleSidebar && styles[hideSidebar.current]
      }`}
    >
      <Nav>
        <NavLink className={styles["navLink"]} to="/">
          <SideNavbarIcons>
            <IoHomeOutline />
          </SideNavbarIcons>
          <StyledSideNavText>home</StyledSideNavText>
        </NavLink>
        <NavLink className={styles["navLink"]} to="/profile">
          <SideNavbarIcons>
            <IoPersonOutline />
          </SideNavbarIcons>
          <StyledSideNavText>profile</StyledSideNavText>
        </NavLink>
        <NavLink className={styles["navLink"]} to="/videos">
          <SideNavbarIcons>
            <IoVideocamOutline />
          </SideNavbarIcons>
          <StyledSideNavText>videos</StyledSideNavText>
        </NavLink>
        <NavLink className={styles["navLink"]} to="/music">
          <SideNavbarIcons>
            <IoMusicalNotesOutline />
          </SideNavbarIcons>
          <StyledSideNavText>music</StyledSideNavText>
        </NavLink>
      </Nav>
      <ul className="flex flex-col mx-2 ">
        <StyledSideNavText className="text-sky-400">Gruops</StyledSideNavText>
        <li className={styles["navLink"]}>
          <span className="w-14 h-14 flex items-center">
            <img
              src={"https://picsum.photos/200" || UserImage}
              className="rounded-full border border-2 border-[#00533A]"
              alt="group image"
            />
          </span>
          <StyledSideNavText>
            Web Development Egyption community
          </StyledSideNavText>
        </li>
      </ul>
      <Nav className={styles["navbar"]}>
        <NavLink className={styles["navLink"]} to="/music">
          <span className="font-bold text-red-700">
            <IoIosLogOut className="text-3xl" />
          </span>
          <StyledSideNavText>logout</StyledSideNavText>
        </NavLink>
      </Nav>
    </div>
  );
};

export default Sidebar;
