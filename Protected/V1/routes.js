import express from 'express';
import { router as routerFromStudentNames } from "./StudentNames/end-points.js";

const router = express.Router()
router.use("/StudentNames", routerFromStudentNames);;

export { router };