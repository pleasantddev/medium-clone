import React, { useState, useEffect } from "react";
import type { Post } from "../types/post";
import {
  FeedWrapper,
  Tabs,
  TabButton,
  PostList,
  PostItem,
  PostInfo,
  PostMeta,
  PostTitle,
  PostExcerpt,
  PostStats,
  Stat,
  PostImage,
} from "./styles/feed.styles";
import { StatIcon, StatIconSmall } from "./styles/stat.styles";
import {
  ClappedByWrapper,
  ClappedByText,
  ClappedByLine,
} from "./styles/clappedby.styles";

const TABS = [
  { key: "foryou", label: "For you" },
  { key: "featured", label: "Featured" },
];

const Feed: React.FC = () => {
  const [activeTab, setActiveTab] = useState("foryou");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
  fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const filteredPosts = posts.filter((post) =>
    activeTab === "foryou" ? !post.isFeatured : post.isFeatured
  );

  const formatClaps = (claps: number) => {
    if (claps < 1000) return claps;
    const k = claps / 1000;
    return k % 1 === 0 ? `${k}k` : `${k.toFixed(1)}k`;
  };

  return (
    <FeedWrapper>
      <Tabs>
        {TABS.map((tab) => (
          <TabButton
            key={tab.key}
            active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </TabButton>
        ))}
      </Tabs>

      <PostList>
        {filteredPosts.map((post) => (
          <PostItem
            key={post.id}
            style={{
              flexDirection: "column",
              borderBottom: "1px solid #eee",
              paddingBottom: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <PostInfo style={{ flex: 1 }}>
                {post.clappedBy && (
                  <ClappedByWrapper>
                    <ClappedByText>
                      <b>{post.clappedBy} </b>clapped
                    </ClappedByText>
                    <ClappedByLine />
                  </ClappedByWrapper>
                )}
                <PostMeta>
                  In <b>{post.tag}</b> by <b>{post.author}</b>
                </PostMeta>
                <PostTitle>{post.title}</PostTitle>
                <PostExcerpt>{post.excerpt}</PostExcerpt>
              </PostInfo>
              <PostImage src={post.image} alt={post.title} />
            </div>

            <PostStats
              style={{
                fontSize: 13,
                borderBottom: "none",
                marginTop: 8,
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <Stat>
                  <StatIconSmall src="/icons/star.svg" alt="Star" />
                </Stat>
                <span style={{ fontSize: 13 }}>{post.timeAgo}</span>
                <Stat>
                  <StatIconSmall src="/icons/clap.svg" alt="Clap" />{" "}
                  {formatClaps(post.claps)}
                </Stat>
                <Stat>
                  <StatIconSmall src="/icons/comment.svg" alt="Comment" />{" "}
                  {post.comments}
                </Stat>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "50%",
                  justifyContent: "flex-end",
                  gap: 16,
                }}
              >
                <Stat>
                  <StatIcon src="/icons/showless.svg" alt="Show less" />
                </Stat>
                <Stat>
                  <StatIcon
                    className="bookmark"
                    src="/icons/bookmark.svg"
                    alt="Bookmark"
                  />
                </Stat>
                <Stat>
                  <StatIcon src="/icons/more.svg" alt="More" />
                </Stat>
              </div>
            </PostStats>
          </PostItem>
        ))}
      </PostList>
    </FeedWrapper>
  );
};

export default Feed;
