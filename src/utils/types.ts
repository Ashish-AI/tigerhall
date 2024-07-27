type Image = {
  uri: string;
};

type Category = {
  name: string;
};

type Expert = {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
};

export type ContentCard = {
  name: string;
  image: Image;
  categories: Category[];
  experts: Expert[];
};
