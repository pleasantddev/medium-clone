import styled from "styled-components";

export const FeedWrapper = styled.div`
  width: 100%;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 32px;
  border-bottom: 1px solid #eee;
  margin-bottom: 24px;
  position: sticky;
  top: 72px;
  background: #fff;
  z-index: 10;

  @media (max-width: 600px) {
    top: 56px;
  }
`;

export const TabButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) => (active ? "#242424" : "#757575")};
  font-size: 1.1rem;
  padding: 12px 0;
  border-bottom: ${({ active }) =>
    active ? "2px solid #242424" : "2px solid transparent"};
  cursor: pointer;
`;

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PostItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
  border-bottom: 1px solid #eee;
  padding-bottom: 24px;
`;

export const PostInfo = styled.div`
  flex: 1;
`;

export const PostMeta = styled.div`
  font-size: 12px;
  color: #757575;
  margin-bottom: 4px;
`;

export const PostTitle = styled.h3`
  margin: 4px 0 8px 0;
  font-size: 1.3rem;
`;

export const PostExcerpt = styled.div`
  color: #757575;
  font-size: 15px;
  margin-bottom: 8px;
`;

export const PostStats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #757575;
  font-size: 14px;
`;

export const Stat = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const PostImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-left: 24px;
`;


export const ClapIcon =  styled.img.attrs({
  src: "../icons/clap.svg",
  alt: "Clap",
})`
  object-fit: cover;
  border-radius: 8px;
  margin-left: 24px;
`;

export const CommentIcon =  styled.img.attrs({
  src: "../icons/comment.svg",
  alt: "Comment",
})`
  object-fit: cover;
  border-radius: 8px;
  margin-left: 24px;
`;
