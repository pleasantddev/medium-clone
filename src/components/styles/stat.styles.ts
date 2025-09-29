import styled from "styled-components";

export const StatIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: inline-block;

  &.bookmark {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const StatIconSmall = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  display: inline-block;
`;
