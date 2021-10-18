import Layout from "@layout/Layout";
import { ProjectData } from "@template/ProjectPage/project";
import ProjectPage from "@template/ProjectPage/ProjectPage";
import { getProjectData } from "services/api-services";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: { id: number } }) {
  const projectData = await getProjectData(params);

  return {
    props: {
      data: projectData,
    },
  };
}

const Project = ({ data }: ProjectData) => {
  return (
    <Layout padding={false}>
      <ProjectPage data={data} />
    </Layout>
  );
};

export default Project;
