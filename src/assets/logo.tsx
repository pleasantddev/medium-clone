import styled from "styled-components";

const LogoImg = styled.img`
  width: 150px;
  height: auto;
  display: block;
  background: #fff;
  padding: 8px;
  border-radius: 4px;
`;

const Logo = () => <LogoImg src="/medium.svg" alt="Medium Logo" />;

export default Logo;
