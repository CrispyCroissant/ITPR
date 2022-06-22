import express from "express";
import imageController from "../controllers/imageController";

const router = express.Router();

router.get("/image", imageController.getImage);

export default router;
