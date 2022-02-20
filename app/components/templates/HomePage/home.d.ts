type Info = {
  quote: string;
  text: string;
};

export type HomeData = {
  data: {
    about: {
      info1: Array<Info>;
      info2: Array<Info>;
    };
    projects: { info: Array<Info>; links: Array<{ id: number; href: string }> };
    qualification: {
      info: Array<Info>;
      experience: Array<{ title: string; place: string; period: string }>;
      education: Array<{ title: string; place: string; period: string }>;
    };
    techstack: {
      info: Array<Info>;
      commercial: Array<{
        name: string;
        since: string;
        img: string;
      }>;
    };
  };
};
