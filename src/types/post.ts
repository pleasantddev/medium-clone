export interface Post {
  id: number;
  author: string;
  tag: string;
  title: string;
  excerpt: string;
  likes: number;
  comments: number;
  claps: number;
  clappedBy: string;
  timeAgo: string;
  image: string;
  staffPick: boolean;
  isFeatured: boolean;
}
