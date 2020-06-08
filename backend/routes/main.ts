const express = require("express");

const router = express.Router();

import { index as indexHome } from "../controllers/Home";

router.get("/", indexHome);

export default router;
