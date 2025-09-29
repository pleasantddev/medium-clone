import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 100;

  .logo {
    transition: width 0.2s;
    width: 150px;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    padding: 8px 8px;
    .logo {
      width: 100px;
    }
    .right {
      gap: 8px;
    }
  }
`;

export const hideOpenInAppOnMobile = `
  @media (min-width: 600px) {
    .open-in-app {
      display: none !important;
    }
  }
`;

export const MenuIcon = styled.img.attrs({
  src: "../icons/menu.svg",
  alt: "Menu",
})`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const WriteIcon = styled.img.attrs({
  src: "../icons/write.svg",
  alt: "Write",
})`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Uparrow = styled.img.attrs({
  src: "../icons/arrowup.svg",
  alt: "Up Arrow",
})`
  width: 10px;
  height: 10px;
  cursor: pointer;
`;

export const NotificationIcon = styled.img.attrs({
  src: "../icons/notifications.svg",
  alt: "Notification",
})`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MobileSearchIcon = styled.img.attrs({
  src: "../icons/searchicon.svg",
  alt: "Search",
})`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f4f4f4;
  border-radius: 24px;
  padding: 0 12px;
  height: 40px;
  min-width: 200px;
  max-width: 320px;
  flex: 1;
  margin: 0 24px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    margin: 12px 0;
    width: 100%;
    max-width: 100%;
    display: none;
  }
`;

export const SearchIcon = styled(MdSearch)`
  font-size: 1.4rem;
  color: #757575;
  margin-right: 8px;
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 1rem;
  flex: 1;
  color: #242424;
  padding: 8px 0;
`;

export const DarkAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #242424;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
`;

export const MobileHiddenHeader = styled.div`
  text-align: center;
  padding: 4px;

  @media (min-width: 600px) {
    display: none !important;
  }
`;
