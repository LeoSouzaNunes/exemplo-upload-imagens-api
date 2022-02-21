import express, { json } from "express";
import cors from "cors";
import multerConfig from "./config/multer.js";
import multer from "multer";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(json());

app.post("/upload", multer(multerConfig).single("file"), (req, res) => {
    console.log(req.file);
    res.sendStatus(200);
});

app.listen(5000, () => console.log("Running at localhost:5000"));
