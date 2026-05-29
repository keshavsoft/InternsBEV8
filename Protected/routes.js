import express from 'express';
import { router as routerFromV1 } from "./V1/routes.js";

import { StartFunc as StartFuncFromMiddleware } from "../MiddleWares/Protected/entryFile.js";

const router = express.Router();

router.use("/V1", StartFuncFromMiddleware, routerFromV1);;

export { router };