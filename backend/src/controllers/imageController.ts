import { Request, Response } from "express";
import { getRandomImage } from "../services/image";

async function getImage(req: Request, res: Response): Promise<Response> {
  try {
    const image = await getRandomImage();
    return res.send(image);
  } catch (error) {
    const e = error as Error;
    return res.status(500).send({ error: e.message });
  }
}

export default { getImage };
