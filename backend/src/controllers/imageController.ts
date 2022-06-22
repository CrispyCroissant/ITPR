import { Request, Response } from "express";

function getImage(req: Request, res: Response): Response {
  return res.send();
}

function checkImage(req: Request, res: Response): Response {
  return res.send();
}

export default { getImage, checkImage };
