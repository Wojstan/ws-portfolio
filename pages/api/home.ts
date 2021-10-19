import type { NextApiRequest, NextApiResponse } from "next";

const homeData = require("./data/homeData.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(homeData);
}
