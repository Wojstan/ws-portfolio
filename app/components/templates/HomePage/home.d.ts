export type HomeData = {
  data: {
    about: {
      info: string;
    };
    projects: { info: string; links: Array<{ id: number; href: string }> };
    qualification: {
      info: string;
      experience: Array<{ title: string; place: string; period: string }>;
      education: Array<{ title: string; place: string; period: string }>;
    };
    techstack: {
      info: string;
      moreInfo: string;
      commercial: Array<{
        name: string;
        since: string;
        img: string;
      }>;
    };
  };
};
