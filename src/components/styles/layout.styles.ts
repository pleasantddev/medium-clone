import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 32px;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0 8px;
  }
`;

export const Main = styled.main`
  flex: 9;
  padding: 12px;
  min-width: 0;
`;

export const Aside = styled.aside`
  margin-left: 32px;
  @media (max-width: 900px) {
    display: none;
  }
`;
