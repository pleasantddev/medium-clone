import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  width: 340px;
  padding: 24px 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: sticky;
  top: 70px;
  height: fit-content;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Section = styled.section`
  margin-bottom: 0;
`;

export const SectionTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #242424;
`;

export const StaffPicksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StaffPickItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StaffPickTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #242424;
`;

export const StaffPickMeta = styled.div`
  font-size: 13px;
  color: #757575;
`;

export const PillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Pill = styled.span`
  background: #f2f2f2;
  color: #242424;
  font-size: 14px;
  font-weight: 500;
  border-radius: 999px;
  padding: 7px 18px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #e0e0e0;
  }
`;

export const FollowList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const FollowItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FollowInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FollowName = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #242424;
`;

export const FollowMeta = styled.div`
  font-size: 13px;
  color: #757575;
`;

export const FollowButton = styled.button`
  background: transparent;
  color: #242424;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #242424;
  border-radius: 999px;
  padding: 7px 22px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #f2f2f2;
    color: #000;
    border-color: #000;
  }
`;

export const ReadingListText = styled.div`
  font-size: 14px;
  color: #757575;
  margin-top: 8px;
`;