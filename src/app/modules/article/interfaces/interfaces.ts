export interface ArticleResponse {
  data: Article[];
  totalSize: number,
  error?: any
}

export interface Article {
  id: string;
  subject: string;
  date: string;
  text?: string;
}
