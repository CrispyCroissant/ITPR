import express from "express";
import imageController from "../controllers/imageController";

const router = express.Router();

router.get("/image", imageController.getImage);
router.post("/image", imageController.checkImage);

export default router;
