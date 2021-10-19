import type { NextApiRequest, NextApiResponse } from "next";

const projectData = require("../data/projectData.json");

export default function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse
) {
  const filtered = projectData.filter(
    (project: any) => project.id === parseInt(id as string)
  );

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Project with id: ${id} not found.` });
  }
}
