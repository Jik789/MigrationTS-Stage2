export interface IData {
  status: string;
  totalResults: number;
  articles: IArticle[];
}

export interface IArticle {
  source: { name: string; id: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ISourceFull {
  status: string;
  sources: ISource[];
}

export interface ISource { //Наш интфейс
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}