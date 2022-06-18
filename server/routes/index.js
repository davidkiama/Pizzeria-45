import express from "express";
import { createCustomer, createCheckout } from "../controllers/index.js";

const router = express.Router();

router.post("/customer", createCustomer);
router.post("/checkout", createCheckout);

export default router;
