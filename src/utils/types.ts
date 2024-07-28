type Image = {
  uri: string;
};

type Category = {
  name: string;
};

type Participant = {
  company: string;
  firstName: string;
  lastName: string;
};

export type ContentCard = {
  length: number;
  timeSpentOnByUsers: number;
  preamble: string;
  image: Image;
  categories: Category[];
  participants: Participant[];
};

type Edge = {
  edges: ContentCard[];
  meta: Meta;
};

type Meta = {
  limit: number;
  total: number;
  offset: number;
};

type Data = {
  contentCards: Edge;
};

export type Root = {
  data: Data;
};
