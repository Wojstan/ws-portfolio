const homeData = require("./data/homeData.json");
const projectData = require("./data/projectData.json");

export function getHomeData() {
  return homeData;
}

export function getProjectData(id: string) {
  const filtered = projectData.filter(
    (project: any) => project.id === parseInt(id)
  );

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    return { message: `Project with id: ${id} not found.` };
  }
}
