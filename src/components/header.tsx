import Logo from "../assets/logo";
import {
  DarkAvatar,
  HeaderContainer,
  MenuIcon,
  MobileHiddenHeader,
  MobileSearchIcon,
  NotificationIcon,
  SearchContainer,
  SearchIcon,
  SearchInput,
  Uparrow,
  WriteIcon,
} from "./styles/header.styles";

export default function Header() {
  return (
    <>
      <MobileHiddenHeader>
        Open in app <Uparrow />
      </MobileHiddenHeader>
      <HeaderContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <MenuIcon />
          <Logo />
          <SearchContainer>
            <SearchIcon />
            <SearchInput placeholder="Search" />
          </SearchContainer>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <WriteIcon />
          <NotificationIcon />
          <MobileSearchIcon />
          <DarkAvatar />
        </div>
      </HeaderContainer>
    </>
  );
}
