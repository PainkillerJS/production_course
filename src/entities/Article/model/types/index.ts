import { type UserState } from '@/entities/User';

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

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'created'
}

export type ArticleBlockType = ArticleCodeBlockType | ArticleImageBlockType | ArticleTextBlockType;

export enum ArticleEnumType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMIC = 'ECONOMIC'
}

export enum ArticleListView {
  BIG = 'BIG',
  SMALL = 'SMALL'
}

export interface ArticleModel {
  id: string;
  title: string;
  subtitle: string;
  user: UserState;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleEnumType[];
  blocks: ArticleBlockType[];
}
