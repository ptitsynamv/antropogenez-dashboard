export interface ArticleList {
  list: Article[];
  count: number,
}

export interface Article {
  _id: string;
  subject: string;
  date: string;
  text?: string;
}
