export type ProjectData = {
  data: {
    id: number;
    title: string;
    theme: string;
    about: string;
    video: string;
    techstack: Array<{ name: string; position: string; img: string }>;
  };
};
