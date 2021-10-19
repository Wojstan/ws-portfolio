export type ProjectData = {
  data: {
    id: number;
    title: string;
    ghLink: string;
    theme: string;
    about: string;
    video: string;
    techstack: Array<{ name: string; position: string; img: string }>;
  };
};
