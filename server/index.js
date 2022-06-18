import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import transactionRoutes from "./routes/index.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/transaction", transactionRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
