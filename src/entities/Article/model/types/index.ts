export enum ArticleBlockEnumType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT'
}

interface ArticleBlockBaseType {
  id: string;
}

export interface ArticleCodeBlockType extends ArticleBlockBaseType {
  type: ArticleBlockEnumType.CODE;
  code: string;
}

export interface ArticleImageBlockType extends ArticleBlockBaseType {
  type: ArticleBlockEnumType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlockType extends ArticleBlockBaseType {
  type: ArticleBlockEnumType.TEXT;
  paragraphs: string[];
  title?: string;
}

export type ArticleBlockType = ArticleCodeBlockType | ArticleImageBlockType | ArticleTextBlockType;

export enum ArticleEnumType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMIC = 'ECONOMIC'
}

export interface ArticleModel {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleEnumType[];
  blocks: ArticleBlockType[];
}
