export enum BlogAuthor {
  Rob = 'rob',
  EditorialTeam = 'editorial-team',
}

export interface BlogAuthorDetails {
  name: string
  avatarUrl: string
  twitterHandle: string
  role: string
}

export const blogAuthors: Record<BlogAuthor, BlogAuthorDetails> = {
  [BlogAuthor.Rob]: {
    name: 'Rob Phillips',
    avatarUrl: 'https://innerview-public-assets.s3.amazonaws.com/blog/rob.png',
    twitterHandle: '@iwasrobbed',
    role: 'Founder & CEO',
  },
  [BlogAuthor.EditorialTeam]: {
    name: 'Innerview Team',
    avatarUrl:
      'https://innerview-public-assets.s3.amazonaws.com/blog/editor-team.png',
    twitterHandle: '@InnerviewCo',
    role: 'Easy insights, easy progress.',
  },
}
