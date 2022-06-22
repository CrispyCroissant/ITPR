import { Request, Response } from "express";

function getImage(req: Request, res: Response): Response {
  return res.send();
}

function checkImage(req: Request, res: Response): Response {
  const { imageHash }: { imageHash: string } = req.body;

  if (!imageHash) {
    return res.status(400).send({ error: "Image hash not provided" });
  }

  return res.send();
}

export default { getImage, checkImage };
