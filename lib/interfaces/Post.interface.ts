export interface Post {
  slug: string;
  frontmatter: PostFrontMatter;
}

export interface PostFrontMatter {
  title: string;
  metaTitle: string;
  metaDesc: string;
  socialImage: string;
  date: string;
  tags?: Array<string>;
}
