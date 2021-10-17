type Props = {
  id: number;
};

export async function getHomeData() {
  const response = await fetch(`${process.env.ROOT}/home`);
  const data = await response.json();

  return data;
}

export async function getProjectData({ id }: Props) {
  const response = await fetch(`${process.env.ROOT}/projects/${id}`);
  const data = await response.json();

  return data;
}
