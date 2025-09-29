import {
  SidebarWrapper,
  Section,
  SectionTitle,
  StaffPicksList,
  StaffPickItem,
  StaffPickTitle,
  StaffPickMeta,
  PillList,
  Pill,
  FollowList,
  FollowItem,
  FollowInfo,
  FollowName,
  FollowMeta,
  FollowButton,
  ReadingListText,
} from "./styles/sidebar.styles";

import { useEffect, useState } from "react";
import { StatIcon, StatIconSmall } from "./styles/stat.styles";

const recommendedTopics = [
  "Data Science",
  "React",
  "Coding",
  "Mental Health",
  "UX",
  "Python",
  "Productivity",
];

const whoToFollow = [
  {
    name: "Dr. Derek Austin",
    meta: "AI Context Engineer - I teach LLMs to think - Full...",
    avatar: "/sdkn.jpeg",
  },
  {
    name: "ITNEXT",
    meta: "ITNEXT is a platform for IT developers & software...",
    avatar: "/sdkn.jpeg",
  },
  {
    name: "Oliver Foster",
    meta: "Primarily proficient in the Java programming...",
    avatar: "/sdkn.jpeg",
  },
];

const Sidebar: React.FC = () => {
  const [staffPicks, setStaffPicks] = useState<any[]>([]);

  useEffect(() => {
    fetch("/staffpicks.json")
      .then((res) => res.json())
      .then((data) => setStaffPicks(data));
  }, []);

  return (
    <SidebarWrapper>
      <Section>
        <SectionTitle>Staff Picks</SectionTitle>
        <StaffPicksList>
          {staffPicks.map((pick, i) => (
            <StaffPickItem key={i}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <img
                  src="/sdkn.jpeg"
                  alt="profile"
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: 4,
                  }}
                />
                <StaffPickMeta>{pick.meta}</StaffPickMeta>
              </div>
              <StaffPickTitle>{pick.title}</StaffPickTitle>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <StatIconSmall src="/icons/star.svg" alt="Star" />
                <StaffPickMeta>{pick.time}</StaffPickMeta>
              </div>
            </StaffPickItem>
          ))}
        </StaffPicksList>
        <StaffPickMeta
          style={{
            marginTop: 10,
            cursor: "pointer",
            color: "#1a8917",
            fontWeight: 500,
          }}
        >
          See the full list
        </StaffPickMeta>
      </Section>

      <Section>
        <SectionTitle>Recommended topics</SectionTitle>
        <PillList>
          {recommendedTopics.map((topic, i) => (
            <Pill key={i}>{topic}</Pill>
          ))}
        </PillList>
        <StaffPickMeta
          style={{
            marginTop: 10,
            cursor: "pointer",
            color: "#1a8917",
            fontWeight: 500,
          }}
        >
          See more topics
        </StaffPickMeta>
      </Section>

      <Section>
        <SectionTitle>Who to follow</SectionTitle>
        <FollowList>
          {whoToFollow.map((user, i) => (
            <FollowItem key={i}>
              <img
                src={user.avatar}
                alt={user.name}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginRight: 12,
                }}
              />
              <FollowInfo>
                <FollowName>{user.name}</FollowName>
                <FollowMeta>{user.meta}</FollowMeta>
              </FollowInfo>
              <FollowButton>Follow</FollowButton>
            </FollowItem>
          ))}
        </FollowList>
        <StaffPickMeta
          style={{
            marginTop: 10,
            cursor: "pointer",
            color: "#1a8917",
            fontWeight: 500,
          }}
        >
          See more suggestions
        </StaffPickMeta>
      </Section>

      <Section>
        <SectionTitle>Reading list</SectionTitle>
        <ReadingListText>
          Click the{" "}
          <StatIcon
            className="bookmark"
            src="/icons/bookmark.svg"
            alt="Bookmark"
          />{" "}
          on any story to easily add it to your reading list or a custom list
          that you can share.
        </ReadingListText>
      </Section>
    </SidebarWrapper>
  );
};

export default Sidebar;
