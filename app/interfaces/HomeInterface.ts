type Heading = {
  title?: string;
  text?: string;
};

type AboutStat = {
  value: number;
  prefix: string;
  postfix: string;
  title: string;
  describe: string;
};

type QuoteItem = {
  quote: string;
  about: string;
  author: string;
};

type TimeItem = {
  title: string;
  place: string;
  period: string;
};

type TechItem = {
  img: string;
  about: string;
  title: string;
};

export type TitleType = Heading;

export type AboutType = {
  work: Heading & {
    data: AboutStat[];
  };
  privately: Heading & {
    data: any[];
  };
};

export type WorkType = {
  experience: Heading & {
    data: any[];
  };
  quotes: Heading & {
    data: QuoteItem[];
  };
  timeline: Heading & {
    data: TimeItem[];
  };
  techstack: Heading & {
    data: TechItem[];
  };
};

export type EducationType = Heading & {
  data: TimeItem[];
};

export interface HomeInterface {
  data: {
    title: Heading;
    about: AboutType;
    work: WorkType;
    education: EducationType;
  };
}
