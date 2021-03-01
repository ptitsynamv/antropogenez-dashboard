export interface FArticle {
  id: string;
  title: string;
  url: string;
}

export interface FArticlesResponse {
  count: number;
  list: FArticle[];
}
