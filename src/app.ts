import express from "express";
import "./db/mongoose";

const app = express();
app.use(express.json());

export default app;
